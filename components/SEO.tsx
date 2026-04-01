import React, { useEffect } from 'react';

interface ServiceSchema {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  serviceSchema?: ServiceSchema;
  breadcrumbs?: BreadcrumbItem[];
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = '/splashlogo.png',
  serviceSchema,
  breadcrumbs
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Update canonical URL
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonical);
        document.head.appendChild(linkCanonical);
      }
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (ogTag) {
        ogTag.setAttribute('content', content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    updateOGTag('og:title', title);
    updateOGTag('og:description', description);
    updateOGTag('og:image', `https://splashmobiledetail.com${ogImage}`);
    if (canonical) {
      updateOGTag('og:url', canonical);
    }

    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (twitterTag) {
        twitterTag.setAttribute('content', content);
      } else {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        twitterTag.setAttribute('content', content);
        document.head.appendChild(twitterTag);
      }
    };

    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', `https://splashmobiledetail.com${ogImage}`);

    // Add Service Schema if provided
    if (serviceSchema) {
      const existingSchema = document.querySelector('script[data-schema="service"]');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'service');
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceSchema.name,
        "description": serviceSchema.description,
        "url": serviceSchema.url,
        "image": serviceSchema.image || `https://splashmobiledetail.com${ogImage}`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Aspenwood Pools & Spas",
          "telephone": "970-618-6183",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "18233 Lincoln Meadows Pkwy, Unit 108",
            "addressLocality": "Parker",
            "addressRegion": "CO",
            "postalCode": "80134",
            "addressCountry": "US"
          }
        },
        "areaServed": serviceSchema.areaServed || "Denver, Arapahoe, Jefferson, Douglas, and Elbert Counties"
      });
      document.head.appendChild(schemaScript);
    }

    // Add Breadcrumb Schema if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      const existingBreadcrumb = document.querySelector('script[data-schema="breadcrumb"]');
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      breadcrumbScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      });
      document.head.appendChild(breadcrumbScript);
    }
  }, [title, description, keywords, canonical, ogImage, serviceSchema, breadcrumbs]);

  return null;
};

export default SEO;

