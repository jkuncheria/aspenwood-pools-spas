import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface GoogleReview {
  id: string;
  author: string;
  initials: string;
  rating: number;
  text: string;
  date: string;
  photo?: string | null;
  ownerResponse?: string | null;
  url?: string | null;
}

export interface GoogleReviewsData {
  place: {
    name: string;
    placeId: string;
    rating: number;
    reviewCount: number;
    profileUrl: string;
    writeReviewUrl: string;
  };
  fetchedAt: string;
  summary?: { title?: string; bullets: string[] };
  reviews: GoogleReview[];
}

interface Props {
  data: GoogleReviewsData;
  accent?: string;
  initialCount?: number;
  loadMoreCount?: number;
  minRating?: number;
  showSummary?: boolean;
  className?: string;
}

const COLLAPSE_AT = 185;
const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const relativeDate = (iso: string): string => {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return '';
  const days = Math.max(0, Math.floor((Date.now() - then) / 86_400_000));
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 7) return `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks === 1 ? 'a week ago' : `${weeks} weeks ago`;
  const months = Math.floor(days / 30.44);
  if (months < 12) return months <= 1 ? 'a month ago' : `${months} months ago`;
  const years = Math.floor(days / 365.25);
  return years === 1 ? 'a year ago' : `${years} years ago`;
};

const GoogleGlyph: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18A13.3 13.3 0 0 1 11 24c0-1.45.25-2.86.69-4.18v-5.7H4.34A21.98 21.98 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
);

const GoogleWordmark = () => (
  <span className="rlgr-google-word" aria-label="Google">
    <span className="rlgr-google-blue">G</span><span className="rlgr-google-red">o</span><span className="rlgr-google-yellow">o</span><span className="rlgr-google-blue">g</span><span className="rlgr-google-green">l</span><span className="rlgr-google-red">e</span>
  </span>
);

const Stars: React.FC<{ rating: number; size?: number }> = ({ rating, size = 18 }) => (
  <span className="rlgr-stars" role="img" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }, (_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path fill={i < Math.round(rating) ? '#fbbc04' : '#d8dadd'} d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2Z" />
      </svg>
    ))}
  </span>
);

const VerifiedBadge = () => (
  <span className="rlgr-verified" aria-label="Review from Google" title="Review from Google">
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="m23 12-2.44-2.79.34-3.69-3.61-.82L15.4 1.5 12 2.96 8.6 1.5 6.71 4.69l-3.61.81.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.81 1.89 3.2 3.4-1.47 3.4 1.46 1.89-3.2 3.61-.81-.34-3.69L23 12Zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 6.14-6.16 1.48 1.49-7.62 7.63Z" />
    </svg>
  </span>
);

const Avatar: React.FC<{ review: GoogleReview }> = ({ review }) => {
  const [failed, setFailed] = useState(false);
  return (
    <span className="rlgr-avatar-wrap" aria-hidden="true">
      {review.photo && !failed ? (
        <img className="rlgr-avatar" src={review.photo} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={() => setFailed(true)} />
      ) : (
        <span className="rlgr-avatar rlgr-avatar-fallback">{review.initials}</span>
      )}
      <span className="rlgr-avatar-google"><GoogleGlyph size={17} /></span>
    </span>
  );
};

const ReviewCard: React.FC<{ review: GoogleReview; profileUrl: string; onOpen: () => void }> = ({ review, profileUrl, onOpen }) => {
  const canExpand = review.text.length > COLLAPSE_AT || Boolean(review.ownerResponse);
  const reviewUrl = review.url || profileUrl;

  return (
    <article className="rlgr-card" data-review-card={review.id}>
      <header className="rlgr-card-head">
        <Avatar review={review} />
        <div className="rlgr-card-meta">
          <div className="rlgr-author-row">
            <a href={reviewUrl} target="_blank" rel="noopener noreferrer nofollow" className="rlgr-author">{review.author}</a>
            <VerifiedBadge />
          </div>
          <time className="rlgr-date" dateTime={review.date}>{relativeDate(review.date)}</time>
        </div>
      </header>
      <Stars rating={review.rating} />
      <p className="rlgr-text">{review.text}</p>
      {canExpand && (
        <button type="button" className="rlgr-more" onClick={onOpen}>
          Read more
        </button>
      )}
    </article>
  );
};

const SummaryCard: React.FC<{ summary: NonNullable<GoogleReviewsData['summary']>; reviewCount: number }> = ({ summary, reviewCount }) => (
  <article className="rlgr-card rlgr-summary">
    <header className="rlgr-summary-head">
      <span className="rlgr-summary-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="#fff" d="m12 1.5 1.5 4.65L18 7.5l-4.5 1.35L12 13.5l-1.5-4.65L6 7.5l4.5-1.35L12 1.5Z" />
          <path fill="#fff" d="m18.5 11 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM5.5 13l1.15 3.35L10 17.5l-3.35 1.15L5.5 22l-1.15-3.35L1 17.5l3.35-1.15L5.5 13Z" />
        </svg>
      </span>
      <div>
        <strong>{summary.title || 'AI-Generated Summary'}</strong>
        <span>Based on {reviewCount} Google reviews</span>
      </div>
    </header>
    <Stars rating={5} />
    <ul className="rlgr-summary-list">
      {summary.bullets.map((bullet) => (
        <li key={bullet}>
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="m5 12 4 4L19 6" /></svg>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </article>
);

const ModalReviewRow: React.FC<{
  review: GoogleReview;
  profileUrl: string;
  selected: boolean;
}> = ({ review, profileUrl, selected }) => {
  const [expanded, setExpanded] = useState(selected);
  const canExpand = review.text.length > COLLAPSE_AT || Boolean(review.ownerResponse);
  const reviewUrl = review.url || profileUrl;

  useEffect(() => {
    if (selected) setExpanded(true);
  }, [selected]);

  return (
    <article className="rlgr-modal-review" data-review-id={review.id}>
      <header className="rlgr-card-head">
        <Avatar review={review} />
        <div className="rlgr-card-meta">
          <div className="rlgr-author-row">
            <a href={reviewUrl} target="_blank" rel="noopener noreferrer nofollow" className="rlgr-author">{review.author}</a>
            <VerifiedBadge />
          </div>
          <time className="rlgr-date" dateTime={review.date}>{relativeDate(review.date)}</time>
        </div>
      </header>
      <Stars rating={review.rating} />
      <p className={`rlgr-modal-text${expanded ? ' is-expanded' : ''}`}>{review.text}</p>
      {review.ownerResponse && expanded && (
        <div className="rlgr-response">
          <span className="rlgr-response-label">Response from the owner</span>
          <p>{review.ownerResponse}</p>
        </div>
      )}
      {canExpand && (
        <button type="button" className="rlgr-more" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          {expanded ? 'Hide' : 'Read more'}
        </button>
      )}
    </article>
  );
};

const ReviewsModal: React.FC<{
  data: GoogleReviewsData;
  reviews: GoogleReview[];
  selectedReviewId: string;
  accent: string;
  onClose: () => void;
}> = ({ data, reviews, selectedReviewId, accent, onClose }) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    const list = listRef.current;
    const reviewElements: HTMLElement[] = list
      ? Array.from(list.querySelectorAll<HTMLElement>('[data-review-id]'))
      : [];
    const target = reviewElements
      .find((element) => element.dataset.reviewId === selectedReviewId);
    if (list && target) list.scrollTop = Math.max(0, target.offsetTop - list.offsetTop - 12);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose, selectedReviewId]);

  return createPortal(
    <div className="rlgr-modal-backdrop" style={{ ['--rlgr-accent' as string]: accent }} onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}>
      <section className="rlgr-modal" role="dialog" aria-modal="true" aria-label={`${data.place.name} Google reviews`}>
        <button ref={closeRef} type="button" className="rlgr-modal-close" onClick={onClose} aria-label="Close reviews">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" d="m5 5 14 14M19 5 5 19" /></svg>
        </button>
        <header className="rlgr-modal-header">
          <div className="rlgr-overview-copy">
            <div className="rlgr-google-title"><GoogleWordmark /><strong>Reviews</strong></div>
            <div className="rlgr-score-row">{data.place.rating >= 4.8 && <strong>{data.place.rating.toFixed(1)}</strong>}<Stars rating={data.place.rating} size={22} /><span>({data.place.reviewCount})</span></div>
          </div>
          <a className="rlgr-review-button" href={data.place.writeReviewUrl} target="_blank" rel="noopener noreferrer">Review us on Google</a>
        </header>
        <div className="rlgr-modal-list" ref={listRef}>
          {reviews.map((review) => (
            <ModalReviewRow key={review.id} review={review} profileUrl={data.place.profileUrl} selected={review.id === selectedReviewId} />
          ))}
        </div>
      </section>
    </div>,
    document.body,
  );
};

const GoogleReviewsFeed: React.FC<Props> = ({ data, accent = '#5138ee', initialCount = 7, loadMoreCount = 6, minRating = 5, showSummary = true, className = '' }) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const masonryRef = useRef<HTMLDivElement>(null);
  const previousPositionsRef = useRef<Map<string, DOMRect>>(new Map());
  const enteringIdsRef = useRef<Set<string>>(new Set());
  const reviews = useMemo(() => data.reviews.filter((review) => review.text?.trim() && review.rating >= minRating), [data.reviews, minRating]);
  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMore = visibleCount < reviews.length;

  const loadMore = () => {
    const masonry = masonryRef.current;
    const previousPositions = new Map<string, DOMRect>();
    masonry?.querySelectorAll<HTMLElement>('[data-review-card]').forEach((card) => {
      const id = card.dataset.reviewCard;
      if (id) previousPositions.set(id, card.getBoundingClientRect());
    });
    previousPositionsRef.current = previousPositions;

    const nextCount = Math.min(visibleCount + loadMoreCount, reviews.length);
    enteringIdsRef.current = new Set(reviews.slice(visibleCount, nextCount).map((review) => review.id));
    setVisibleCount(nextCount);
  };

  useBrowserLayoutEffect(() => {
    if (previousPositionsRef.current.size === 0) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const masonry = masonryRef.current;
    if (!masonry || reduceMotion) {
      previousPositionsRef.current.clear();
      enteringIdsRef.current.clear();
      return;
    }

    let enteringIndex = 0;
    masonry.querySelectorAll<HTMLElement>('[data-review-card]').forEach((card) => {
      const id = card.dataset.reviewCard;
      if (!id) return;
      const previous = previousPositionsRef.current.get(id);
      if (previous) {
        const current = card.getBoundingClientRect();
        const deltaX = previous.left - current.left;
        const deltaY = previous.top - current.top;
        if (deltaX || deltaY) {
          card.style.transition = 'none';
          card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
          void card.offsetWidth;
          card.style.transition = 'transform 520ms cubic-bezier(.22, 1, .36, 1)';
          card.style.transform = 'translate(0, 0)';
          window.setTimeout(() => {
            card.style.transition = '';
            card.style.transform = '';
          }, 540);
        }
      } else if (enteringIdsRef.current.has(id)) {
        const delay = enteringIndex * 65;
        card.style.transition = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(22px) scale(.985)';
        void card.offsetWidth;
        card.style.transition = `opacity 480ms cubic-bezier(.22, 1, .36, 1) ${delay}ms, transform 480ms cubic-bezier(.22, 1, .36, 1) ${delay}ms`;
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
        window.setTimeout(() => {
          card.style.transition = '';
          card.style.opacity = '';
          card.style.transform = '';
        }, 500 + delay);
        enteringIndex += 1;
      }
    });

    previousPositionsRef.current.clear();
    enteringIdsRef.current.clear();
  }, [visibleCount]);

  if (reviews.length === 0) return null;

  return (
    <div className={`rlgr ${className}`} style={{ ['--rlgr-accent' as string]: accent }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="rlgr-overview">
        <div className="rlgr-overview-copy">
          <div className="rlgr-google-title"><GoogleWordmark /><strong>Reviews</strong></div>
          <div className="rlgr-score-row">{data.place.rating >= 4.8 && <strong>{data.place.rating.toFixed(1)}</strong>}<Stars rating={data.place.rating} size={22} /><span>({data.place.reviewCount})</span></div>
        </div>
        <a className="rlgr-review-button" href={data.place.writeReviewUrl} target="_blank" rel="noopener noreferrer">Review us on Google</a>
      </div>
      <div className="rlgr-masonry" ref={masonryRef}>
        {showSummary && data.summary && data.summary.bullets.length > 0 && <SummaryCard summary={data.summary} reviewCount={data.place.reviewCount} />}
        {visibleReviews.map((review) => <ReviewCard key={review.id} review={review} profileUrl={data.place.profileUrl} onOpen={() => setSelectedReviewId(review.id)} />)}
      </div>
      <div className="rlgr-footer">
        {hasMore ? (
          <button type="button" className="rlgr-load" onClick={loadMore}>Load more</button>
        ) : (
          <a className="rlgr-all" href={data.place.profileUrl} target="_blank" rel="noopener noreferrer">See all reviews on Google</a>
        )}
      </div>
      {selectedReviewId && <ReviewsModal data={data} reviews={reviews} selectedReviewId={selectedReviewId} accent={accent} onClose={() => setSelectedReviewId(null)} />}
    </div>
  );
};

const CSS = `
.rlgr{--rlgr-accent:#5138ee;--rlgr-card:#f7f7f9;--rlgr-ink:#17171b;--rlgr-muted:#77777f;font-family:inherit;color:var(--rlgr-ink);position:relative}.rlgr *{box-sizing:border-box}.rlgr-stars{display:inline-flex;gap:1px;line-height:0}
.rlgr-overview{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:28px 30px;margin-bottom:30px;border-radius:24px;background:var(--rlgr-card)}.rlgr-overview-copy{display:flex;flex-direction:column;gap:7px}.rlgr-google-title{display:flex;align-items:center;gap:4px;font-size:20px;line-height:1}.rlgr-google-title strong{font-weight:700}.rlgr-google-word{font-weight:600;letter-spacing:-1px}.rlgr-google-blue{color:#4285f4}.rlgr-google-red{color:#ea4335}.rlgr-google-yellow{color:#fbbc05}.rlgr-google-green{color:#34a853}.rlgr-score-row{display:flex;align-items:center;gap:8px}.rlgr-score-row>strong{font-size:22px;line-height:1}.rlgr-score-row>span{font-size:13px;color:var(--rlgr-muted)}
.rlgr-review-button{display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:999px;background:var(--rlgr-accent);color:#fff;text-decoration:none;font-size:14px;font-weight:700;white-space:nowrap;transition:filter .18s,transform .18s}.rlgr-review-button:hover{filter:brightness(1.08);transform:translateY(-1px)}
.rlgr-masonry{columns:3 300px;column-gap:30px}.rlgr-card{display:inline-block;width:100%;margin:0 0 30px;padding:25px;border-radius:24px;background:var(--rlgr-card);break-inside:avoid;page-break-inside:avoid;text-align:left;vertical-align:top}.rlgr-card-head{display:flex;align-items:center;gap:13px;margin-bottom:14px}.rlgr-avatar-wrap{position:relative;display:block;width:43px;height:43px;flex:0 0 43px}.rlgr-avatar{width:43px;height:43px;border-radius:50%;object-fit:cover;background:#ececf0}.rlgr-avatar-fallback{display:flex;align-items:center;justify-content:center;color:#fff;background:var(--rlgr-accent);font-size:14px;font-weight:800}.rlgr-avatar-google{position:absolute;right:-4px;bottom:-3px;width:21px;height:21px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff;border:2px solid var(--rlgr-card)}
.rlgr-card-meta{min-width:0}.rlgr-author-row{display:flex;align-items:center;gap:5px;min-width:0}.rlgr-author{font-size:15px;line-height:1.25;font-weight:700;color:var(--rlgr-ink);text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.rlgr-author:hover{text-decoration:underline}.rlgr-verified{display:inline-flex;color:#5744f5;flex:0 0 auto}.rlgr-date{display:block;margin-top:3px;color:var(--rlgr-muted);font-size:12px}.rlgr-text{display:-webkit-box;margin:12px 0 0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:3;font-size:15px;line-height:1.5;white-space:pre-line}.rlgr-text.is-expanded{display:block;overflow:visible}.rlgr-more{margin-top:3px;padding:0;border:0;background:none;color:var(--rlgr-accent);font:inherit;font-size:14px;font-weight:600;cursor:pointer}.rlgr-more:hover{text-decoration:underline}
.rlgr-response{margin-top:16px;padding:14px;border-radius:12px;background:#ececf1}.rlgr-response-label{display:block;margin-bottom:5px;font-size:12px;font-weight:800}.rlgr-response p{margin:0;color:#414149;font-size:13px;line-height:1.5;white-space:pre-line}.rlgr-summary{padding:25px}.rlgr-summary-head{display:flex;align-items:center;gap:12px;margin-bottom:17px}.rlgr-summary-head .rlgr-summary-icon{display:flex;align-items:center;justify-content:center;width:42px;height:42px;flex:0 0 42px;margin-top:0;border-radius:14px;color:#fff;background:var(--rlgr-accent)}.rlgr-summary-head div{display:flex;flex-direction:column}.rlgr-summary-head strong{color:var(--rlgr-accent);font-size:15px}.rlgr-summary-head span{margin-top:3px;color:var(--rlgr-muted);font-size:12px}.rlgr-summary-list{display:flex;flex-direction:column;gap:15px;margin:17px 0 0;padding:0;list-style:none}.rlgr-summary-list li{display:flex;align-items:flex-start;gap:9px;font-size:15px;line-height:1.45}.rlgr-summary-list svg{flex:0 0 auto;margin-top:3px}
.rlgr-modal-backdrop{--rlgr-accent:#5138ee;--rlgr-ink:#17171b;--rlgr-muted:#77777f;position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:36px 18px;background:rgba(17,17,19,.88);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:var(--rlgr-ink)}.rlgr-modal-backdrop *{box-sizing:border-box}.rlgr-modal{position:relative;display:flex;flex-direction:column;width:min(720px,100%);max-height:calc(100dvh - 72px);overflow:hidden;border-radius:24px;background:#fff}.rlgr-modal-close{position:absolute;top:14px;right:14px;z-index:2;display:flex;align-items:center;justify-content:center;width:36px;height:36px;padding:0;border:0;border-radius:50%;background:#fff;color:#64646b;cursor:pointer}.rlgr-modal-close:hover{background:#f2f2f4;color:#17171b}.rlgr-modal-close:focus-visible{outline:3px solid color-mix(in srgb,var(--rlgr-accent) 35%,transparent);outline-offset:1px}
.rlgr-modal-header{display:flex;align-items:center;justify-content:space-between;gap:24px;margin:28px 40px 0;padding:14px 0 28px;border-bottom:1px solid #dedee2;flex:0 0 auto}.rlgr-modal-list{overflow-y:auto;overscroll-behavior:contain;padding:0 40px 12px;scrollbar-color:#aaa transparent;scrollbar-width:thin}.rlgr-modal-review{padding:26px 0;border-bottom:1px solid #dedee2;text-align:left}.rlgr-modal-review:last-child{border-bottom:0}.rlgr-modal-review .rlgr-card-head{margin-bottom:11px}.rlgr-modal-text{display:-webkit-box;margin:8px 0 0;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:4;font-size:16px;line-height:1.48;white-space:pre-line}.rlgr-modal-text.is-expanded{display:block;overflow:visible}.rlgr-modal-review .rlgr-more{font-size:15px}
.rlgr-footer{display:flex;justify-content:center;margin-top:8px}.rlgr-load{min-width:145px;padding:12px 24px;border:0;border-radius:999px;background:var(--rlgr-accent);color:#fff;font:inherit;font-size:14px;font-weight:700;cursor:pointer;will-change:transform;transition:filter .2s ease,transform .32s cubic-bezier(.22,1,.36,1)}.rlgr-load:hover{filter:brightness(1.08);transform:translateY(-2px)}.rlgr-load:active{filter:brightness(.98);transform:translateY(0) scale(.96);transition-duration:.09s}.rlgr-load:focus-visible{outline:3px solid color-mix(in srgb,var(--rlgr-accent) 30%,transparent);outline-offset:3px}.rlgr-all{color:var(--rlgr-accent);font-size:14px;font-weight:700;text-decoration:none}.rlgr-all:hover{text-decoration:underline}
@media (max-width:760px){.rlgr-overview{align-items:flex-start;padding:22px;border-radius:19px}.rlgr-review-button{padding:11px 16px}.rlgr-masonry{columns:1}.rlgr-card{margin-bottom:18px;border-radius:19px;padding:21px}.rlgr-modal-backdrop{padding:0}.rlgr-modal{width:100%;height:100dvh;max-height:none;border-radius:0}.rlgr-modal-header{margin:22px 20px 0;padding:20px 0 22px}.rlgr-modal-list{padding:0 20px 12px}.rlgr-modal-close{top:10px;right:10px}.rlgr-modal-review{padding:22px 0}}@media (max-width:520px){.rlgr-overview{flex-direction:column}.rlgr-review-button{width:100%}.rlgr-google-title{font-size:18px}.rlgr-modal-header{align-items:flex-start;flex-direction:column;gap:16px;padding-right:36px}.rlgr-modal-header .rlgr-review-button{width:auto}.rlgr-modal-text{font-size:15px}}@media (prefers-reduced-motion:reduce){.rlgr-review-button,.rlgr-load{transition:none}}
`;

export default GoogleReviewsFeed;
