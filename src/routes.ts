export const CANONICAL_DOMAIN = 'https://www.monikstudio.com';

export type PolicyTabId = 'privacy' | 'terms' | 'data-deletion' | 'support' | 'store-urls';

export interface RouteConfig {
  path: string;
  tabId: PolicyTabId;
  title: string;
  description: string;
  heading: string;
}

export const POLICY_ROUTES: Record<string, RouteConfig> = {
  '/privacy-policy': {
    path: '/privacy-policy',
    tabId: 'privacy',
    title: 'Privacy Policy — Monik Studio',
    description: 'Official Monik Studio Privacy Policy strictly compliant with Apple App Store Guideline 5.1.1 and Google Play Data Safety requirements.',
    heading: 'Privacy Policy',
  },
  '/terms-of-service': {
    path: '/terms-of-service',
    tabId: 'terms',
    title: 'Terms of Service — Monik Studio',
    description: 'Terms of Service, End User License Agreement (EULA), and in-app purchase policies governing Monik Studio software.',
    heading: 'Terms of Service & EULA',
  },
  '/data-deletion': {
    path: '/data-deletion',
    tabId: 'data-deletion',
    title: 'User Data Deletion Request — Monik Studio',
    description: 'Official user data deletion portal and self-service instructions compliant with Google Play Data Safety policies.',
    heading: 'User Data Deletion Instructions',
  },
  '/support': {
    path: '/support',
    tabId: 'support',
    title: 'App Support & Help Desk — Monik Studio',
    description: 'Official customer support desk for in-app purchase recovery, bug reporting, and technical inquiries.',
    heading: 'App Support & In-App Purchase Recovery',
  },
  '/store-compliance': {
    path: '/store-compliance',
    tabId: 'store-urls',
    title: 'Developer Store Compliance URLs — Monik Studio',
    description: 'Permanent, verified submission URLs for Apple App Store Connect and Google Play Console app reviews.',
    heading: 'Developer Store Submission URLs Hub',
  },
};

export const DEFAULT_HOME_META = {
  title: 'Monik Studio — Mobile Apps, Games & Chrome Extensions',
  description: 'Official website of Monik Studio. Creators of engaging mobile games, minimalist utility apps, and lightweight Chrome extensions.',
};

// Aliases mapping to the canonical URL paths
export const ROUTE_ALIASES: Record<string, string> = {
  '/privacy': '/privacy-policy',
  '/privacy/': '/privacy-policy',
  '/privacy-policy/': '/privacy-policy',
  '/terms': '/terms-of-service',
  '/terms/': '/terms-of-service',
  '/terms-of-service/': '/terms-of-service',
  '/eula': '/terms-of-service',
  '/data-deletion/': '/data-deletion',
  '/data-deletion-instructions': '/data-deletion',
  '/user-data-deletion': '/data-deletion',
  '/support/': '/support',
  '/help': '/support',
  '/contact': '/support',
  '/store-urls': '/store-compliance',
  '/store-urls/': '/store-compliance',
  '/store-compliance/': '/store-compliance',
  '/compliance': '/store-compliance',
  '/developer-urls': '/store-compliance',
};

export const TAB_TO_PATH: Record<PolicyTabId, string> = {
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  'data-deletion': '/data-deletion',
  support: '/support',
  'store-urls': '/store-compliance',
};

/**
 * Resolve any incoming pathname or alias to a known Policy Route, or null if homepage
 */
export function resolvePolicyRoute(pathname: string): RouteConfig | null {
  const cleanPath = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  
  if (POLICY_ROUTES[cleanPath]) {
    return POLICY_ROUTES[cleanPath];
  }
  
  const targetAlias = ROUTE_ALIASES[cleanPath];
  if (targetAlias && POLICY_ROUTES[targetAlias]) {
    return POLICY_ROUTES[targetAlias];
  }

  return null;
}

/**
 * Update document title and OpenGraph / description meta tags dynamically
 */
export function updateDocumentMeta(title: string, description: string) {
  if (typeof document === 'undefined') return;
  
  document.title = title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }
}
