import React from 'react';

export type Language = 'en' | 'vi' | 'ja' | 'zh' | 'ko' | 'es' | 'pt';

export type AppCategory = 'all' | 'game' | 'app' | 'extension';

export type Platform = 'ios' | 'android' | 'chrome';

export interface AppFeatureDetail {
  title: string;
  desc: string;
  iconName?: string;
}

export interface AppLocalizedContent {
  title?: string;
  tagline?: string;
  description?: string;
  features?: string[];
  tags?: string[];
  highlights?: AppFeatureDetail[];
  whatsNew?: string;
}

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
  localizations?: Partial<Record<Language, AppLocalizedContent>>;
  // Rich Store additions from App Store, Google Play & Chrome Web Store
  storeId?: string;
  bundleId?: string;
  requirements?: string;
  pricing?: string;
  compatibility?: string[];
  whatsNew?: string;
  highlights?: AppFeatureDetail[];
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
