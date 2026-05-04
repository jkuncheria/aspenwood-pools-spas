import React from 'react';
import { NavItem, Category, Feature } from './types';
import { Shield, Sparkles, Clock, Award, Droplets, Wrench, ThermometerSun, Waves } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Pool Installation', href: '/pool-installation' },
  { label: 'Spa & Hot Tubs', href: '/spa-hot-tubs' },
  { label: 'Price Estimator', href: '/pool-price-estimator' },
  { 
    label: 'All Services', 
    href: '#',
    subItems: [
      { label: 'All Services', href: '/services' },
      { label: 'Pool Installation', href: '/pool-installation' },
      { label: 'Spa & Hot Tubs', href: '/spa-hot-tubs' },
      { label: 'Pool Repair', href: '/pool-repair' },
      { label: 'Pool Renovation', href: '/pool-renovation' },
      { label: 'Pool Opening & Closing', href: '/pool-opening-closing' },
      { label: 'Auto Cover Installation', href: '/auto-cover-installation' },
    ]
  },
  { label: 'Gallery', href: '/gallery' },
  { 
    label: 'About', 
    href: '#',
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Financing', href: '/financing' },
      { label: 'Contact', href: '/contact' },
    ]
  },
];

export const CATEGORIES: Category[] = [
  { id: 'pool-installation', name: 'Pool Installation', image: '/Google-Drive-Shared/steven/s1.JPG' },
  { id: 'spa-hot-tubs', name: 'Spa & Hot Tubs', image: '/hot-tub.jpg' },
  { id: 'pool-repair', name: 'Pool Repair', image: '/Google-Drive-Shared/connerly/1.JPG' },
  { id: 'pool-renovation', name: 'Pool Renovation', image: '/Google-Drive-Shared/steven/s2.JPG' },
  { id: 'pool-opening-closing', name: 'Pool Opening & Closing', image: '/Google-Drive-Shared/connerly/4.JPG' },
  { id: 'auto-cover-installation', name: 'Auto Cover Installation', image: '/Google-Drive-Shared/connerly/10.JPG' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Expert Craftsmanship',
    description: 'Decades of experience building beautiful, durable pools and spas that stand the test of time.',
    icon: <Shield className="w-8 h-8 text-[#D4A853]" />,
  },
  {
    title: 'Crystal Clear Water',
    description: 'Professional water chemistry management ensures your pool stays pristine and safe all season.',
    icon: <Sparkles className="w-8 h-8 text-[#D4A853]" />,
  },
  {
    title: 'Reliable Service',
    description: 'Prompt, dependable maintenance and repair services to keep your pool running smoothly.',
    icon: <Clock className="w-8 h-8 text-[#D4A853]" />,
  },
  {
    title: 'Warranty Backed',
    description: 'Comprehensive warranties on all installations and equipment for your peace of mind.',
    icon: <Award className="w-8 h-8 text-[#D4A853]" />,
  },
];