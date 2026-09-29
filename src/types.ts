import React from 'react';

export type Language = 'en';

export type AppCategory = 'all' | 'game' | 'app' | 'extension';

export type Platform = 'ios' | 'android' | 'chrome';

export interface AppItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'game' | 'app' | 'extension';
  platforms: Platform[];
  image: string;
  icon?: string;
  accentColor: string;
  status: 'live' | 'new_release' | 'beta';
  version: string;
  ageRating?: string;
  sizeMb?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  chromeWebStoreUrl?: string;
  usersCount?: string;
  manifestVersion?: string;
  tags: string[];
  features: string[];
}

export type PolicySectionId = 
  | 'privacy' 
  | 'terms' 
  | 'data-deletion' 
  | 'support' 
  | 'store-compliance';

export interface PolicyDocument {
  id: PolicySectionId;
  title: string;
  lastUpdated: string;
  summary: string;
  content: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'payments' | 'games' | 'data';
}
