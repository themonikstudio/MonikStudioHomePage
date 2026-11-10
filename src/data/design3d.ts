import hero3dImage from '../assets/images/monik_3d_design_hero_1794328762122.jpg';
import beersharkImage from '../assets/images/beershark_holder_1794328775698.jpg';
import modularOrganizerImage from '../assets/images/modular_organizer_1794328794689.jpg';
import xichloHanoiImage from '../assets/images/xichlo_hanoi_3d_1794328807165.jpg';

export interface PlatformProfile {
  id: string;
  name: string;
  url: string;
  handle: string;
  badge: string;
  description: string;
  accentColor: string;
  iconType: 'makerworld' | 'makeronline' | 'printables';
}

export interface Model3DItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'functional' | 'decor' | 'cultural' | 'gadget';
  image: string;
  tags: string[];
  features: string[];
  links: {
    platform: 'MakerWorld' | 'Printables' | 'MakerOnline';
    url: string;
  }[];
  specifications: {
    material: string;
    infill?: string;
    supports?: string;
    layerHeight?: string;
  };
}

export const DESIGN_3D_HERO_IMAGE = hero3dImage;

export const PROFILES_3D: PlatformProfile[] = [
  {
    id: 'makerworld',
    name: 'MakerWorld (Bambu Lab)',
    url: 'https://makerworld.com/en/@monikstudio',
    handle: '@monikstudio',
    badge: 'MakerWorld Guardian & Contest Winner',
    description: 'Explore full 3D model profiles, one-click Bambu Handy printing profiles, and multi-color AMS prints.',
    accentColor: '#00AE42', // Bambu green
    iconType: 'makerworld',
  },
  {
    id: 'printables',
    name: 'Printables by Prusa',
    url: 'https://www.printables.com/@MonikStudio_5200121',
    handle: '@MonikStudio_5200121',
    badge: 'Verified 3D Designer',
    description: 'High-precision STLs, functional desk organizers, workshop tools, and customizable print files.',
    accentColor: '#FA6831', // Prusa orange
    iconType: 'printables',
  },
  {
    id: 'makeronline',
    name: 'MakerOnline',
    url: 'https://www.makeronline.com/en/user/personalInfo/53333178-35f1-4434-913f-27316581346b.html',
    handle: 'Monik Studio',
    badge: 'Creator Portfolio',
    description: 'Official 3D collection and creative industrial design models curated for maker communities globally.',
    accentColor: '#2563EB', // Blue
    iconType: 'makeronline',
  },
];

export const FEATURED_MODELS_3D: Model3DItem[] = [
  {
    id: 'beershark-holder',
    title: 'BeerShark: Floating Can Holder',
    tagline: 'Faceted low-poly shark beverage cradle that balances standard 330ml & 500ml cans with style.',
    description: 'Award-winning functional print combining dynamic low-poly animal aesthetics with a balanced center-of-gravity can cradle. Designed to grip cold cans, protect table surfaces from condensation, and stand out on your desk or patio.',
    category: 'gadget',
    image: beersharkImage,
    tags: ['Functional', 'Can Holder', 'Low-Poly', 'Bambu AMS', 'No-Support', 'Party & Bar'],
    features: [
      'Engineered center-of-gravity balance: holds full or empty cans without tipping',
      'Optimized 3D print geometry: 100% support-free printing in standard orientation',
      'Multi-color Bambu AMS profile ready with dual-tone belly and sharp tooth details',
      'Fits standard 330ml, 355ml, and tall 500ml aluminum beverage cans'
    ],
    links: [
      { platform: 'MakerWorld', url: 'https://makerworld.com/en/@monikstudio' },
      { platform: 'Printables', url: 'https://www.printables.com/@MonikStudio_5200121' },
    ],
    specifications: {
      material: 'PLA / PETG',
      infill: '15% Gyroid',
      supports: 'None needed',
      layerHeight: '0.20mm',
    }
  },
  {
    id: 'modular-organizer',
    title: 'HexGrid Modular Desk Cube Organizer',
    tagline: 'Precision workshop and desk storage with honeycomb tool slots, pen wells & SD card bays.',
    description: 'A modular, stackable organization system created for makers, engineers, and digital artists. Features precision-measured slots for digital calipers, screwdrivers, flash drives, SD cards, and writing pens with interlocking magnetic alignment points.',
    category: 'functional',
    image: modularOrganizerImage,
    tags: ['Workshop', 'Desk Setup', 'Hexagonal', 'Modular', 'Tool Storage', '3D Printed'],
    features: [
      'Modular dovetail snap-fit connections: expand your setup horizontally or vertically',
      'Integrated dedicated bays for 4 SD cards, 2 MicroSD adapters, and 3 USB flash drives',
      'Deep hex honeycomb columns prevent tall pens and screwdrivers from leaning',
      'Chamfered bottom lips for easy print removal from textured PEI build plates'
    ],
    links: [
      { platform: 'Printables', url: 'https://www.printables.com/@MonikStudio_5200121' },
      { platform: 'MakerWorld', url: 'https://makerworld.com/en/@monikstudio' },
      { platform: 'MakerOnline', url: 'https://www.makeronline.com/en/user/personalInfo/53333178-35f1-4434-913f-27316581346b.html' },
    ],
    specifications: {
      material: 'PLA Matte / PETG',
      infill: '15-20% Grid',
      supports: 'None',
      layerHeight: '0.16mm - 0.20mm',
    }
  },
  {
    id: 'xichlo-hanoi',
    title: 'Xích Lô Hà Nội: Heritage Cyclo Miniature',
    tagline: 'Artisanal miniature model celebrating Hanoi street heritage, fine spoke wheels and ornate canopy.',
    description: 'A tribute to the iconic Vietnamese cyclo that has traversed Hanoi’s Old Quarter for generations. Modeled with authentic proportions, delicate wire-frame spokes, passenger seat, and folding canopy, bringing Vietnamese traditional culture to desktop 3D printing.',
    category: 'cultural',
    image: xichloHanoiImage,
    tags: ['Vietnamese Heritage', 'Hanoi Cyclo', 'Miniature', 'Artisanal', 'Cultural Decor', 'AMS Ready'],
    features: [
      'Meticulously scaled details: spoke wheels, hand pedals, passenger cab, and vintage headlamp',
      'Multi-color filament mapping: distinct roof textiles, seat cushion, and frame accents',
      'Culturally inspired craft directly aligned with Monik Studio’s Vietnamese roots',
      'Tested and calibrated for 0.4mm and 0.2mm high-detail nozzles'
    ],
    links: [
      { platform: 'MakerWorld', url: 'https://makerworld.com/en/@monikstudio' },
      { platform: 'Printables', url: 'https://www.printables.com/@MonikStudio_5200121' },
      { platform: 'MakerOnline', url: 'https://www.makeronline.com/en/user/personalInfo/53333178-35f1-4434-913f-27316581346b.html' },
    ],
    specifications: {
      material: 'PLA / PLA Silk',
      infill: '20%',
      supports: 'Tree supports for frame',
      layerHeight: '0.12mm - 0.16mm',
    }
  }
];
