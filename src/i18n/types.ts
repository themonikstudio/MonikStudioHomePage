export type Language = 'en' | 'vi' | 'ja' | 'zh' | 'ko' | 'es' | 'pt';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
];

export interface TranslationDictionary {
  nav: {
    home: string;
    catalog: string;
    about: string;
    privacy: string;
    terms: string;
    support: string;
    storeCompliance: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    subheadline: string;
    exploreBtn: string;
    aboutBtn: string;
    metricDownloads: string;
    metricRating: string;
    metricProducts: string;
    metricPrivacy: string;
  };
  showcase: {
    badge: string;
    heading: string;
    subheading: string;
    searchPlaceholder: string;
    allProducts: string;
    mobileGames: string;
    mobileApps: string;
    chromeExtensions: string;
    emptySearch: string;
    clearSearch: string;
    viewDetails: string;
    newRelease: string;
    live: string;
    version: string;
    platforms: string;
    getAppStore: string;
    getGooglePlay: string;
    addToChrome: string;
    qrScan: string;
  };
  landing: {
    backToStudio: string;
    share: string;
    shareCopied: string;
    directStoreUrl: string;
    keyHighlights: string;
    detailedOverview: string;
    specifications: string;
    privacyTitle: string;
    privacyDescription: string;
    complianceVerified: string;
    moreAppsTitle: string;
    moreAppsSubtitle: string;
    category: string;
    platform: string;
    version: string;
    downloadSize: string;
    ageRating: string;
    offlineMode: string;
    offlineModeYes: string;
    telemetry: string;
    telemetryZero: string;
    installOnDevice: string;
    openStore: string;
    legalDocuments: string;
    qrScanTitle: string;
    qrScanSubtitle: string;
    whatsNew: string;
    storeId: string;
    bundleId: string;
    requirements: string;
    pricing: string;
    compatibility: string;
    copyLink: string;
    saveQr: string;
    openLink: string;
    scanWithCamera: string;
  };
  about: {
    badge: string;
    headlinePart1: string;
    headlinePart2: string;
    intro: string;
    tagMobile: string;
    tagChrome: string;
    tagNative: string;
    tagPolicy: string;
    studioLocation: string;
    verifiedAccounts: string;
    verifiedDesc: string;
    statusVerified: string;
  };
  footer: {
    brandDesc: string;
    studioAddress: string;
    releasesTitle: string;
    mobileAppsTitle: string;
    extensionsTitle: string;
    allProductsLink: string;
    complianceHubTitle: string;
    complianceDesc: string;
    privacyPolicyLink: string;
    termsLink: string;
    dataDeletionLink: string;
    supportLink: string;
    complianceUrlsLink: string;
    trademarksNotice: string;
    rightsReserved: string;
    scrollTop: string;
  };
  cookieBanner: {
    title: string;
    desc: string;
    gotIt: string;
    readPolicy: string;
  };
}
