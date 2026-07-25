export type Language = 'vi' | 'en';

export type Category = 'all' | '3d_print' | 'electronics' | 'desk_gadget' | 'open_source';

export interface BOMItem {
  name: string;
  qty: number;
  type: '3d_print' | 'electronics' | 'hardware' | 'fastener';
  link?: string;
}

export interface PrintSpecs {
  material: string;
  infill: string;
  layerHeight: string;
  printTimeHours: number;
  weightGrams: number;
}

export interface Project {
  id: string;
  title: {
    vi: string;
    en: string;
  };
  shortDesc: {
    vi: string;
    en: string;
  };
  fullDesc: {
    vi: string;
    en: string;
  };
  category: '3d_print' | 'electronics' | 'desk_gadget' | 'open_source';
  imageUrl: string;
  galleryImages?: string[];
  tags: string[];
  featured?: boolean;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  stlUrl?: string;
  makerWorldUrl?: string;
  githubUrl?: string;
  bom?: BOMItem[];
  printSpecs?: PrintSpecs;
  dimensions?: string; // e.g. "120 x 85 x 60 mm"
  estimatedCostVND?: number;
  rating?: number;
  downloadsCount?: number;
}

export interface QuoteCalculationInput {
  material: 'PLA' | 'PETG' | 'TPU' | 'ABS' | 'Resin';
  weightGrams: number;
  infillPercent: number;
  layerHeight: 0.12 | 0.16 | 0.20 | 0.28;
  electronicsIntegration: boolean;
  cadDesignRequired: boolean;
  quantity: number;
}

export interface AIProjectAnalysis {
  projectTitle: string;
  summary: string;
  cadDesignAdvice: string;
  threeDPrintingSpecs: {
    recommendedMaterial: string;
    infillPercentage: string;
    layerHeight: string;
    estimatedPrintTime: string;
    notes: string;
  };
  electronicsBOM: {
    item: string;
    qty: number;
    note: string;
  }[];
  firmwareCodeSnippet: string;
  feasibilityScore: number;
  monikStudioRecommendation: string;
}
