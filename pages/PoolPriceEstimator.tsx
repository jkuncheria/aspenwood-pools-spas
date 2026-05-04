import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft, RotateCcw, Loader2, Mail, Phone as PhoneIcon, User, Circle } from 'lucide-react';
import SEO from '../components/SEO';

interface PriceRange {
  min: number;
  max: number;
}

interface Question {
  id: string;
  title: string;
  options: { value: string; label: string; sublabel?: string }[];
  multiSelect?: boolean;
}

const PoolPriceEstimator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [poolType, setPoolType] = useState<string>('');
  const [poolSize, setPoolSize] = useState<string>('');
  const [poolShape, setPoolShape] = useState<string>('');
  const [depth, setDepth] = useState<string>('');
  const [finish, setFinish] = useState<string>('');
  const [decking, setDecking] = useState<string>('');
  const [features, setFeatures] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 0 });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const questions: Question[] = [
    {
      id: 'poolSize',
      title: 'What size pool do you want?',
      options: [
        { value: 'small', label: 'Small', sublabel: '10x20 ft' },
        { value: 'medium', label: 'Medium', sublabel: '15x30 ft' },
        { value: 'large', label: 'Large', sublabel: '20x40 ft' },
        { value: 'xlarge', label: 'X-Large', sublabel: '20x50+ ft' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'poolType',
      title: 'What type of pool are you interested in?',
      options: [
        { value: 'concrete', label: 'Concrete/Gunite', sublabel: 'Most customizable' },
        { value: 'fiberglass', label: 'Fiberglass', sublabel: 'Quick installation' },
        { value: 'vinyl', label: 'Vinyl Liner', sublabel: 'Budget-friendly' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'poolShape',
      title: 'What shape pool do you prefer?',
      options: [
        { value: 'geometric', label: 'Geometric', sublabel: 'Rectangle, L-shape' },
        { value: 'freeform', label: 'Freeform', sublabel: 'Natural curves' },
        { value: 'infinity', label: 'Infinity Edge', sublabel: 'Vanishing edge' },
        { value: 'lap', label: 'Lap Pool', sublabel: 'For swimming laps' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'depth',
      title: 'What pool depth do you need?',
      options: [
        { value: 'standard', label: 'Standard', sublabel: '3-6 ft' },
        { value: 'deep', label: 'Deep End', sublabel: '8+ ft' },
        { value: 'diving', label: 'Diving', sublabel: '10+ ft with board' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'finish',
      title: 'What interior finish would you like?',
      options: [
        { value: 'plaster', label: 'Plaster', sublabel: 'Classic finish' },
        { value: 'pebble', label: 'Pebble Tec', sublabel: 'Durable & textured' },
        { value: 'tile', label: 'Tile', sublabel: 'Premium look' },
        { value: 'glass', label: 'Glass Bead', sublabel: 'Luxury finish' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'decking',
      title: 'What type of pool decking?',
      options: [
        { value: 'concrete', label: 'Concrete', sublabel: 'Standard' },
        { value: 'pavers', label: 'Pavers', sublabel: 'Elegant patterns' },
        { value: 'stone', label: 'Natural Stone', sublabel: 'Premium' },
        { value: 'travertine', label: 'Travertine', sublabel: 'Luxury' },
        { value: 'notSure', label: 'Not Sure' },
      ],
    },
    {
      id: 'features',
      title: 'Select any water features you want:',
      multiSelect: true,
      options: [
        { value: 'spa', label: 'Integrated Spa/Hot Tub' },
        { value: 'waterfall', label: 'Waterfall' },
        { value: 'fountain', label: 'Fountain/Bubblers' },
        { value: 'ledLighting', label: 'LED Color Lighting' },
        { value: 'tanningLedge', label: 'Tanning Ledge' },
        { value: 'swimUpBar', label: 'Swim-Up Bar' },
        { value: 'none', label: 'None / Not Sure' },
      ],
    },
    {
      id: 'extras',
      title: 'Any additional extras?',
      multiSelect: true,
      options: [
        { value: 'autoCover', label: 'Automatic Pool Cover' },
        { value: 'heater', label: 'Pool Heater' },
        { value: 'saltSystem', label: 'Salt Water System' },
        { value: 'automation', label: 'Smart Automation' },
        { value: 'fireFeature', label: 'Fire Feature' },
        { value: 'outdoorKitchen', label: 'Outdoor Kitchen' },
        { value: 'none', label: 'None / Not Sure' },
      ],
    },
  ];

  const totalSteps = questions.length + 1;

  const basePrices: Record<string, PriceRange> = {
    concrete: { min: 50000, max: 80000 },
    fiberglass: { min: 40000, max: 65000 },
    vinyl: { min: 35000, max: 55000 },
  };
  const sizePrices: Record<string, PriceRange> = {
    small: { min: 0, max: 0 },
    medium: { min: 10000, max: 15000 },
    large: { min: 25000, max: 35000 },
    xlarge: { min: 40000, max: 55000 },
  };
  const shapePrices: Record<string, PriceRange> = {
    geometric: { min: 0, max: 0 },
    freeform: { min: 5000, max: 10000 },
    infinity: { min: 15000, max: 30000 },
    lap: { min: 5000, max: 8000 },
  };
  const depthPrices: Record<string, PriceRange> = {
    standard: { min: 0, max: 0 },
    deep: { min: 3000, max: 6000 },
    diving: { min: 8000, max: 12000 },
  };
  const finishPrices: Record<string, PriceRange> = {
    plaster: { min: 0, max: 0 },
    pebble: { min: 8000, max: 15000 },
    tile: { min: 15000, max: 30000 },
    glass: { min: 25000, max: 45000 },
  };
  const deckingPrices: Record<string, PriceRange> = {
    concrete: { min: 0, max: 0 },
    pavers: { min: 8000, max: 18000 },
    stone: { min: 15000, max: 30000 },
    travertine: { min: 20000, max: 40000 },
  };
  const featurePrices: Record<string, PriceRange> = {
    spa: { min: 15000, max: 25000 },
    waterfall: { min: 5000, max: 15000 },
    fountain: { min: 3000, max: 8000 },
    ledLighting: { min: 2000, max: 5000 },
    tanningLedge: { min: 3000, max: 6000 },
    swimUpBar: { min: 8000, max: 15000 },
  };
  const extraPrices: Record<string, PriceRange> = {
    autoCover: { min: 12000, max: 20000 },
    heater: { min: 3000, max: 8000 },
    saltSystem: { min: 1500, max: 3000 },
    automation: { min: 3000, max: 8000 },
    fireFeature: { min: 5000, max: 15000 },
    outdoorKitchen: { min: 15000, max: 40000 },
  };

  useEffect(() => {
    let minTotal = 0;
    let maxTotal = 0;
    minTotal += basePrices[poolType]?.min || 0;
    maxTotal += basePrices[poolType]?.max || 0;
    minTotal += sizePrices[poolSize]?.min || 0;
    maxTotal += sizePrices[poolSize]?.max || 0;
    minTotal += shapePrices[poolShape]?.min || 0;
    maxTotal += shapePrices[poolShape]?.max || 0;
    minTotal += depthPrices[depth]?.min || 0;
    maxTotal += depthPrices[depth]?.max || 0;
    minTotal += finishPrices[finish]?.min || 0;
    maxTotal += finishPrices[finish]?.max || 0;
    minTotal += deckingPrices[decking]?.min || 0;
    maxTotal += deckingPrices[decking]?.max || 0;
    features.forEach(f => {
      minTotal += featurePrices[f]?.min || 0;
      maxTotal += featurePrices[f]?.max || 0;
    });
    extras.forEach(e => {
      minTotal += extraPrices[e]?.min || 0;
      maxTotal += extraPrices[e]?.max || 0;
    });
    setPriceRange({ min: minTotal, max: maxTotal });
  }, [poolType, poolSize, poolShape, depth, finish, decking, features, extras]);

  const getCurrentValue = () => {
    const q = questions[currentStep];
    if (!q) return '';
    switch (q.id) {
      case 'poolSize': return poolSize;
      case 'poolType': return poolType;
      case 'poolShape': return poolShape;
      case 'depth': return depth;
      case 'finish': return finish;
      case 'decking': return decking;
      case 'features': return features;
      case 'extras': return extras;
      default: return '';
    }
  };

  const setCurrentValue = (value: string) => {
    const q = questions[currentStep];
    if (!q) return;
    
    if (q.multiSelect) {
      const currentArray = q.id === 'features' ? features : extras;
      const setArray = q.id === 'features' ? setFeatures : setExtras;
      
      if (value === 'none') {
        setArray(['none']);
        // Auto-advance when selecting 'none'
        setTimeout(() => setCurrentStep(prev => prev + 1), 300);
      } else {
        const filtered = currentArray.filter(v => v !== 'none');
        if (filtered.includes(value)) {
          setArray(filtered.filter(v => v !== value));
        } else {
          setArray([...filtered, value]);
        }
      }
    } else {
      switch (q.id) {
        case 'poolSize': setPoolSize(value); break;
        case 'poolType': setPoolType(value); break;
        case 'poolShape': setPoolShape(value); break;
        case 'depth': setDepth(value); break;
        case 'finish': setFinish(value); break;
        case 'decking': setDecking(value); break;
      }
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const canProceed = () => {
    const val = getCurrentValue();
    if (Array.isArray(val)) return val.length > 0;
    return val !== '';
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1 && canProceed()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleStartOver = () => {
    setCurrentStep(0);
    setPoolType('');
    setPoolSize('');
    setPoolShape('');
    setDepth('');
    setFinish('');
    setDecking('');
    setFeatures([]);
    setExtras([]);
    setContactInfo({ name: '', email: '', phone: '' });
    setIsComplete(false);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getLabels = () => {
    const poolTypeLabels: Record<string, string> = { concrete: 'Concrete/Gunite', fiberglass: 'Fiberglass', vinyl: 'Vinyl Liner', notSure: 'Not Sure' };
    const poolSizeLabels: Record<string, string> = { small: 'Small (10x20 ft)', medium: 'Medium (15x30 ft)', large: 'Large (20x40 ft)', xlarge: 'X-Large (20x50+ ft)', notSure: 'Not Sure' };
    const poolShapeLabels: Record<string, string> = { geometric: 'Geometric', freeform: 'Freeform', infinity: 'Infinity Edge', lap: 'Lap Pool', notSure: 'Not Sure' };
    const depthLabels: Record<string, string> = { standard: 'Standard (3-6 ft)', deep: 'Deep End (8+ ft)', diving: 'Diving (10+ ft)', notSure: 'Not Sure' };
    const finishLabels: Record<string, string> = { plaster: 'Plaster', pebble: 'Pebble Tec', tile: 'Tile', glass: 'Glass Bead', notSure: 'Not Sure' };
    const deckingLabels: Record<string, string> = { concrete: 'Concrete', pavers: 'Pavers', stone: 'Natural Stone', travertine: 'Travertine', notSure: 'Not Sure' };
    const featureLabels: Record<string, string> = { spa: 'Integrated Spa/Hot Tub', waterfall: 'Waterfall', fountain: 'Fountain/Bubblers', ledLighting: 'LED Color Lighting', tanningLedge: 'Tanning Ledge', swimUpBar: 'Swim-Up Bar', none: 'None' };
    const extraLabels: Record<string, string> = { autoCover: 'Automatic Pool Cover', heater: 'Pool Heater', saltSystem: 'Salt Water System', automation: 'Smart Automation', fireFeature: 'Fire Feature', outdoorKitchen: 'Outdoor Kitchen', none: 'None' };
    return { poolTypeLabels, poolSizeLabels, poolShapeLabels, depthLabels, finishLabels, deckingLabels, featureLabels, extraLabels };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const labels = getLabels();

    try {
      await fetch('https://www.renolens.com/api/contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          clientId: 'RL-WFN2FS5L',
          projectType: 'Pool Price Estimate',
          message: `Pool Estimate Request:
- Pool Size: ${labels.poolSizeLabels[poolSize]}
- Pool Type: ${labels.poolTypeLabels[poolType]}
- Shape: ${labels.poolShapeLabels[poolShape]}
- Depth: ${labels.depthLabels[depth]}
- Finish: ${labels.finishLabels[finish]}
- Decking: ${labels.deckingLabels[decking]}
- Features: ${features.filter(f => f !== 'none').map(f => labels.featureLabels[f]).join(', ') || 'None'}
- Extras: ${extras.filter(e => e !== 'none').map(e => labels.extraLabels[e]).join(', ') || 'None'}`,
        }),
      });
      setIsComplete(true);
    } catch (error) {
      console.error('Error submitting:', error);
      setIsComplete(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isContactStep = currentStep === questions.length;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <>
      <SEO
        title="Pool Installation Price Estimator | Aspenwood Pools & Spas"
        description="Use our free pool installation price estimator to get an instant cost estimate for your custom pool in the Denver metro area."
        keywords="pool cost estimator Denver, pool installation price Colorado, swimming pool calculator"
        canonical="https://aspenwoodpools.com/pool-price-estimator"
      />

      <section className="min-h-screen bg-[#F8FAFC] flex flex-col">
        {/* Progress Bar */}
        <div className="bg-[#0D5C6D] h-1">
          <div 
            className="h-full bg-[#D4A853] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 bg-white border-b border-gray-100">
          <span className="text-sm text-gray-600 font-medium">
            {currentStep + 1} of {totalSteps}
          </span>
          <button
            onClick={handleStartOver}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0D5C6D] transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Start Over
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-2xl">
            {isComplete ? (
              /* Thank You Screen */
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
                <div className="w-20 h-20 bg-[#0D5C6D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#0D5C6D]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                  Thank You, {contactInfo.name}!
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  We've received your pool project details and will be in touch shortly with a personalized estimate.
                </p>
                <div className="bg-[#F8FAFC] rounded-xl p-6 mb-6">
                  <p className="text-[#0D5C6D] font-semibold mb-2">What happens next?</p>
                  <ul className="text-gray-600 text-sm space-y-2 text-left max-w-sm mx-auto">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4A853] font-bold">1.</span>
                      <span>Our team will review your selections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4A853] font-bold">2.</span>
                      <span>We'll get back to you within 1-2 hours with your price estimate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4A853] font-bold">3.</span>
                      <span>Schedule a free on-site consultation</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">
                  Questions? Call us at <a href="tel:18335737665" className="text-[#0D5C6D] font-semibold hover:underline">(833) 573-POOL</a>
                </p>
              </div>
            ) : isContactStep ? (
              /* Contact Form */
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="text-center mb-8">
                  <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">POOL BUILDER</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mt-2">
                    Almost there! Enter your info to get your personalized estimate.
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0D5C6D] text-lg"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0D5C6D] text-lg"
                    />
                  </div>
                  <div className="relative">
                    <PhoneIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#0D5C6D] text-lg"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !contactInfo.name || !contactInfo.email || !contactInfo.phone}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Get My Estimate
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center pt-2">
                    We respect your privacy and won't spam you.
                  </p>
                </form>
              </div>
            ) : (
              /* Question Cards */
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="text-center mb-8">
                  <span className="text-[#D4A853] font-semibold text-sm uppercase tracking-wider">POOL BUILDER</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] mt-2">
                    {questions[currentStep]?.title}
                  </h2>
                  {questions[currentStep]?.multiSelect && (
                    <p className="text-gray-500 mt-2">Select all that apply, then click Next (or select None)</p>
                  )}
                </div>

                <div className={`grid gap-4 ${questions[currentStep]?.options.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'}`}>
                  {questions[currentStep]?.options.filter(o => o.value !== 'notSure' && o.value !== 'none').map((option) => {
                    const currentVal = getCurrentValue();
                    const isSelected = Array.isArray(currentVal) 
                      ? currentVal.includes(option.value)
                      : currentVal === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setCurrentValue(option.value)}
                        className={`relative p-6 rounded-xl border-2 transition-all duration-200 text-center hover:shadow-md ${
                          isSelected
                            ? 'border-[#0D5C6D] bg-[#0D5C6D]/5'
                            : 'border-gray-200 hover:border-[#0D5C6D]/50'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center mx-auto mb-4 transition-all ${
                          isSelected 
                            ? 'border-[#0D5C6D] bg-[#0D5C6D]' 
                            : 'border-gray-300'
                        }`}>
                          {isSelected ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-300" />
                          )}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          {isSelected && <CheckCircle className="w-4 h-4 text-[#0D5C6D]" />}
                          <span className={`font-semibold ${isSelected ? 'text-[#0D5C6D]' : 'text-[#0F172A]'}`}>
                            {option.label}
                          </span>
                        </div>
                        {option.sublabel && (
                          <p className="text-sm text-gray-500 mt-1">{option.sublabel}</p>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Not Sure / None option - centered below */}
                {questions[currentStep]?.options.some(o => o.value === 'notSure' || o.value === 'none') && (
                  <div className="mt-4 flex justify-center">
                    {questions[currentStep]?.options.filter(o => o.value === 'notSure' || o.value === 'none').map((option) => {
                      const currentVal = getCurrentValue();
                      const isSelected = Array.isArray(currentVal) 
                        ? currentVal.includes(option.value)
                        : currentVal === option.value;

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setCurrentValue(option.value)}
                          className={`px-8 py-3 rounded-xl border-2 transition-all duration-200 text-center hover:shadow-md ${
                            isSelected
                              ? 'border-[#0D5C6D] bg-[#0D5C6D]/5'
                              : 'border-gray-200 hover:border-[#0D5C6D]/50'
                          }`}
                        >
                          <div className="flex items-center justify-center gap-2">
                            {isSelected && <CheckCircle className="w-4 h-4 text-[#0D5C6D]" />}
                            <span className={`font-semibold ${isSelected ? 'text-[#0D5C6D]' : 'text-gray-500'}`}>
                              {option.label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Navigation for multi-select questions */}
                {questions[currentStep]?.multiSelect && (
                  <div className="flex gap-3 mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-200 text-gray-600 font-semibold rounded-xl hover:border-gray-300 transition-colors disabled:opacity-50"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ background: 'linear-gradient(135deg, #0D5C6D 0%, #094854 100%)' }}
                    >
                      Next
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Back button for single-select questions */}
                {!questions[currentStep]?.multiSelect && currentStep > 0 && (
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 text-gray-500 hover:text-[#0D5C6D] transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PoolPriceEstimator;