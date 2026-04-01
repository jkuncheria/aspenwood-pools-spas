import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}