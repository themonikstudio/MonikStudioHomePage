import { AppItem } from '../types';
import lichxuaBanner from '../assets/images/lichxua_banner_1790656775243.jpg';
import lynoteBanner from '../assets/images/lynote_banner_1790356300330.jpg';
import docushelfBanner from '../assets/images/docushelf_banner_1790356420935.jpg';
import hexaboundCover from '../assets/images/hexabound_cover_1789580526654.jpg';
import chronodriftCover from '../assets/images/chronodrift_cover_1789580543966.jpg';
import auraCover from '../assets/images/aura_app_cover_1789580581267.jpg';
import luminaCover from '../assets/images/lumina_cards_cover_1789581702075.jpg';
import kansoCover from '../assets/images/kanso_notes_cover_1789581714173.jpg';
import voxelCover from '../assets/images/voxel_tactics_cover_1789581726307.jpg';
import prismCover from '../assets/images/prismsnap_app_cover_1789581737214.jpg';
import monikShortsCover from '../assets/images/monik_shorts_cover_1789616986225.jpg';
import monikshotCover from '../assets/images/monikshot_cover_1789616999459.jpg';

export const APPS_DATA: AppItem[] = [
  {
    id: 'lich-xua',
    title: 'Lịch Xưa - Lịch Âm Vạn Niên',
    tagline: 'Lịch bloc xé tường truyền thống tái hiện trên iPhone — hoài niệm, chính xác, nhẹ nhàng.',
    description: 'Lịch Xưa tái hiện nét đẹp bình dị của cuốn lịch bloc treo tường quen thuộc. Mỗi ngày một bức tranh dân gian Đông Hồ chuyển động sinh động, tra cứu âm dương chuẩn xác theo thuật toán Hồ Ngọc Đức, văn khấn cổ truyền, hướng xuất hành, giờ hoàng đạo và nhắc nhở ngày giỗ, ngày sóc vọng. Hoạt động 100% offline, không thu thập dữ liệu cá nhân.',
    category: 'app',
    platforms: ['ios'],
    image: lichxuaBanner,
    accentColor: '#D86950',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '14.6 MB',
    appStoreUrl: 'https://apps.apple.com/us/app/l%E1%BB%8Bch-x%C6%B0a-l%E1%BB%8Bch-%C3%A2m-v%E1%BA%A1n-ni%C3%AAn/id6816468574',
    tags: ['Lịch Vạn Niên', 'Âm Lịch', 'Tranh Đông Hồ', 'Văn Khấn', 'Tiện ích', 'iOS Widgets'],
    features: [
      'Tranh dân gian Đông Hồ chuyển động mộc mạc theo từng ngày trong năm',
      'Thuật toán âm lịch chuẩn xác cho múi giờ Việt Nam từ năm 1900 đến 2199',
      'Âm thanh xé lịch bloc chân thực, giao diện hoài niệm giấy ố và dấu mộc chu sa',
      'Đầy đủ văn khấn, giờ hoàng đạo, hướng xuất hành, tuổi xung khắc và tiết khí',
      'Hỗ trợ Widget màn hình chính, StandBy và Apple Watch, 100% offline không cần đăng nhập'
    ]
  },
  {
    id: 'lynote-draw-music',
    title: 'Lynote: Draw Music',
    tagline: 'Draw anything. Hear it as music — turn your finger or Apple Pencil into a musical instrument.',
    description: 'Lynote turns your finger (or Apple Pencil) into an instrument. Sketch a wave, a doodle, or a squiggle: left to right is time, higher is a higher note. Every line is snapped to a musical scale, so it always sounds good with zero music theory. Includes 22 genres, up to 6 custom tracks with real sampled instruments, video recording with cozy animated wallpapers, MIDI & WAV export, sleep timer, and lock-screen background playback. 100% private with no ads and no tracking.',
    category: 'app',
    platforms: ['ios'],
    image: lynoteBanner,
    accentColor: '#D86950',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '40.5 MB',
    appStoreUrl: 'https://apps.apple.com/us/app/lynote-draw-music/id6814047781',
    tags: ['Music', 'Drawing', 'Apple Pencil', 'Creativity', 'Audio Studio', 'No Ads'],
    features: [
      'Draw anything to make music: lines snap to musical scales with zero wrong notes',
      '22 genres (Lofi, Ambient, Classical, Disco, Synthwave, Folk, Jazz, and more)',
      'Build a full band with up to 6 tracks and real sampled instruments (piano, kalimba, flute, violin)',
      'Record and share as video with animated wallpapers, or export as MIDI and lossless WAV',
      'Lock-screen background playback, sleep timer, and Apple Pencil support'
    ]
  },
  {
    id: 'docushelf',
    title: 'DocuShelf: Document Scanner',
    tagline: 'Private, searchable document archive with 100% on-device OCR and iOS Spotlight integration.',
    description: 'DocuShelf turns your camera into a private, searchable document archive — every receipt, ID, and contract, organized and readable, without ever leaving your device. Features smart multi-page capture with automatic edge detection, 100% on-device OCR in 17 languages, system-wide iOS Spotlight search, PDF and plain text export, custom folders (Bays), Home Screen widgets, and Siri Shortcuts. No account, no cloud uploads, and zero tracking.',
    category: 'app',
    platforms: ['ios'],
    image: docushelfBanner,
    accentColor: '#779585',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '7.6 MB',
    appStoreUrl: 'https://apps.apple.com/us/app/docushelf/id6813003627',
    tags: ['Productivity', 'Scanner', 'On-Device OCR', 'Spotlight', 'Privacy First', 'Widgets'],
    features: [
      '100% on-device scanning and accurate OCR in 17 languages — zero cloud uploads',
      'Instant search inside the app or straight from system-wide iOS Spotlight',
      'Smart multi-page scanning with auto edge detection and perspective correction',
      'Export clean PDF or text, and organize receipts, IDs, and contracts into custom Bays',
      'Home Screen widgets and Siri Shortcuts for 1-tap fast capture'
    ]
  },
  {
    id: 'hexabound',
    title: 'HexaBound: Puzzle Odyssey',
    tagline: 'A mindful isometric spatial puzzle experience designed to stimulate your brain.',
    description: 'Navigate through enchanting floating isometric dioramas. Rotate geometric planes, match harmonious color frequencies, and restore ancient cosmic constellations. No countdown timers or aggressive paywalls—just pure acoustic ambiance and thoughtful level design.',
    category: 'game',
    platforms: ['ios', 'android'],
    image: hexaboundCover,
    accentColor: '#D86950',
    status: 'live',
    version: '1.4.2',
    ageRating: '4+ (Everyone)',
    sizeMb: '78 MB',
    appStoreUrl: 'https://apps.apple.com/app/hexabound-puzzle-odyssey',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.hexabound',
    tags: ['Puzzle', 'Relaxing', 'Minimalist', 'Spatial 3D', 'Family Friendly'],
    features: [
      '120+ hand-crafted isometric puzzle chambers with escalating spatial depth',
      'Dynamic spatial audio with meditative ambient soundscapes',
      'Full offline gameplay support (airplane mode ready)',
      'Apple Game Center & Google Play Games achievements syncing'
    ]
  },
  {
    id: 'chronodrift',
    title: 'Chrono Drift: Cyber Runner',
    tagline: 'Adrenaline-fueled precision arcade runner built with sleek minimalist aesthetics.',
    description: 'Slide through hyper-speed orbital tracks, manipulate local time warps, and dodge kinetic barrier hazards in a high-octane sensory rush. Engineered specifically for ultra-smooth 120Hz mobile displays with instant tactile haptic feedback.',
    category: 'game',
    platforms: ['ios', 'android'],
    image: chronodriftCover,
    accentColor: '#779585',
    status: 'live',
    version: '2.1.0',
    ageRating: '9+ (Mild Fantasy Violence)',
    sizeMb: '115 MB',
    appStoreUrl: 'https://apps.apple.com/app/chrono-drift-runner',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.chronodrift',
    tags: ['Arcade', 'Action Runner', 'Sci-Fi', '120 FPS', 'Leaderboards'],
    features: [
      'Zero input-lag touch control mechanics with customizable sensitivity',
      'Synthesizer electronic soundtrack synced to track obstacles',
      'Global and friend competitive leaderboards',
      'Cloud save backup across iOS and Android devices'
    ]
  },
  {
    id: 'aura-rituals',
    title: 'Aura: Daily Focus & Habits',
    tagline: 'A quiet, distraction-free companion for intentional routines, focus sessions, and micro-habits.',
    description: 'Built on the principle of digital mindfulness. Aura does not bombard you with guilt-tripping streaks or noisy notifications. Track your essential daily rituals, time focused deep-work sessions with gentle chime audio, and review elegant visual trends with 100% on-device local privacy.',
    category: 'app',
    platforms: ['ios', 'android'],
    image: auraCover,
    accentColor: '#CDB07B',
    status: 'live',
    version: '1.2.5',
    ageRating: '4+ (Everyone)',
    sizeMb: '42 MB',
    appStoreUrl: 'https://apps.apple.com/app/aura-daily-rituals',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.aura',
    tags: ['Productivity', 'Mindfulness', 'Habit Tracker', 'Privacy First', 'iOS Widgets'],
    features: [
      'Zero tracking: All personal logs and notes remain strictly on your device',
      'iOS Home Screen & Lock Screen interactive widgets',
      'Android Material You dynamic color theme integration',
      'CSV and JSON export option for complete personal data ownership'
    ]
  },
  {
    id: 'lumina-solitaire',
    title: 'Lumina: Zen Card Solitaire',
    tagline: 'A modern, poetic reimagining of classic solitaire with soothing pastel decks and tactile haptics.',
    description: 'Experience solitaire redesigned for clarity and serenity. Lumina removes all casino glitter and aggressive popups in favor of calming paper-textured cards, fluid 60fps card animations, and daily handcrafted solvable puzzle seeds.',
    category: 'game',
    platforms: ['ios', 'android'],
    image: luminaCover,
    accentColor: '#779585',
    status: 'new_release',
    version: '1.0.4',
    ageRating: '4+ (Everyone)',
    sizeMb: '64 MB',
    appStoreUrl: 'https://apps.apple.com/app/lumina-zen-solitaire',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.luminasolitaire',
    tags: ['Card Game', 'Solitaire', 'Zen', 'Casual', 'Offline'],
    features: [
      'Unlimited smart undos and gentle hinting system without punishment',
      'Custom deck themes inspired by natural minerals and ceramics',
      'Left-handed and right-handed ergonomic mobile layout modes',
      '100% playable offline without cellular data usage'
    ]
  },
  {
    id: 'kanso-notes',
    title: 'Kanso: Minimalist Markdown',
    tagline: 'Blazing fast, distraction-free markdown notes and quick scratchpad for creative minds.',
    description: 'Stripped of unnecessary menus and cloud clutter, Kanso provides a lightning-fast canvas for writing thoughts, drafting articles, and organizing checklists. Features syntax highlighting, instant search, and local file storage with optional private iCloud and Google Drive sync.',
    category: 'app',
    platforms: ['ios', 'android'],
    image: kansoCover,
    accentColor: '#D86950',
    status: 'live',
    version: '1.3.1',
    ageRating: '4+ (Everyone)',
    sizeMb: '28 MB',
    appStoreUrl: 'https://apps.apple.com/app/kanso-minimalist-notes',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.kansonotes',
    tags: ['Notes', 'Markdown', 'Writing', 'Productivity', 'Minimalism'],
    features: [
      'Instant launch under 150ms with zero splash delays',
      'Biometric app lock via Face ID and Android Fingerprint',
      'Export to PDF, Markdown, and styled plain text',
      'Encrypted local backup with no third-party telemetry'
    ]
  },
  {
    id: 'voxel-realm',
    title: 'Voxel Tactics: Tiny Champions',
    tagline: 'Bite-sized turn-based tactical battles on charming low-poly isometric battlefields.',
    description: 'Draft your squad of pocket heroes, position your units on 3D grid stages, and outwit quirky enemy factions in 3-minute strategic encounters. Designed specifically for portrait one-handed mobile play on commutes.',
    category: 'game',
    platforms: ['ios', 'android'],
    image: voxelCover,
    accentColor: '#CDB07B',
    status: 'new_release',
    version: '1.1.0',
    ageRating: '9+ (Mild Fantasy Action)',
    sizeMb: '92 MB',
    appStoreUrl: 'https://apps.apple.com/app/voxel-tactics-tiny-champions',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.voxeltactics',
    tags: ['Strategy', 'Turn-Based', 'Tactics', 'Low-Poly', 'Portrait Mode'],
    features: [
      '30+ unique heroes with elemental abilities and synergies',
      'Portrait mode one-thumb ergonomics optimized for mobile',
      'Procedurally generated campaign dungeons with daily challenges',
      'Fair progression with no pay-to-win barriers'
    ]
  },
  {
    id: 'prism-snap',
    title: 'Prism Snap: Color Studio',
    tagline: 'Real-time camera color extractor, palette generator, and visual harmony companion.',
    description: 'Capture color palettes directly from real-world artwork, architecture, and nature through your device camera. Extract HEX, RGB, HSL, and CMYK color codes instantly, test contrast accessibility (WCAG AA/AAA), and export directly to Figma, Adobe ASE, and CSS variables.',
    category: 'app',
    platforms: ['ios', 'android'],
    image: prismCover,
    accentColor: '#D86950',
    status: 'live',
    version: '2.0.1',
    ageRating: '4+ (Everyone)',
    sizeMb: '36 MB',
    appStoreUrl: 'https://apps.apple.com/app/prism-snap-color-studio',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.prismsnap',
    tags: ['Design', 'Utilities', 'Color Palette', 'Camera Tool', 'Creative'],
    features: [
      'Real-time augmented camera color sampler with optical freeze frame',
      'WCAG contrast ratio checker for digital accessibility compliance',
      'Export swatches to CSS, JSON, Adobe Swatch Exchange (.ASE), and PNG',
      'Custom library organizer with cloud backup support'
    ]
  },
  {
    id: 'monik-shorts-block',
    title: 'Monik Shorts Block',
    tagline: 'Hide YouTube Shorts, reels, and algorithmic loops to eliminate distractions and regain focus.',
    description: 'Monik Shorts Block is a lightweight, distraction-free browser extension created by Monik Studio. It cleanly removes YouTube Shorts shelves and recommendation carousels from your homepage, subscriptions feed, and search results. Enjoy YouTube on your terms without falling into endless dopamine loops. Engineered under strict Manifest V3 specifications with zero data collection, zero telemetry, and instant toggle controls.',
    category: 'extension',
    platforms: ['chrome'],
    image: monikShortsCover,
    accentColor: '#D86950',
    status: 'live',
    version: '1.0.3',
    manifestVersion: 'Manifest V3',
    sizeMb: '420 KB',
    usersCount: 'Chrome Web Store',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monik-shorts-block/oifnddgbopilelbhdncceokibmccgpja?hl=en-US&utm_source=ext_sidebar',
    tags: ['Chrome Extension', 'YouTube Focus', 'Shorts Blocker', 'Productivity', 'Manifest V3'],
    features: [
      'Removes Shorts shelves on YouTube homepage, subscriptions, and search queries',
      'One-click popup toggle to turn blocking on or off whenever needed',
      'Ultra-lightweight DOM watcher with no video buffering lag or CPU overhead',
      '100% Private: Zero analytics, zero data collection, runs entirely on your device'
    ]
  },
  {
    id: 'monikshot-screenshot',
    title: 'MonikShot: Easy Screenshot',
    tagline: 'Fast, privacy-friendly screen capture with built-in annotation editor, crop, blur, and instant copy.',
    description: 'MonikShot is a modern, privacy-first screenshot utility for Google Chrome by Monik Studio. Instantly capture custom rectangular selections, visible browser viewport, or full-length scrolling web pages. Annotate with arrows, rectangles, text, and blur sensitive credentials before downloading as PNG or copying straight to your clipboard. No account or cloud sync needed.',
    category: 'extension',
    platforms: ['chrome'],
    image: monikshotCover,
    accentColor: '#779585',
    status: 'new_release',
    version: '1.1.2',
    manifestVersion: 'Manifest V3',
    sizeMb: '1.1 MB',
    usersCount: 'Chrome Web Store',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monikshot-easy-screenshot/mplmcjkilfpnhccddaekpmheeecdnpcb?hl=en-US&utm_source=ext_sidebar',
    tags: ['Chrome Extension', 'Screenshot Tool', 'Image Annotation', 'Productivity', 'Privacy'],
    features: [
      '3 intuitive capture modes: Selected Region, Visible Screen, and Full Page scroll',
      'Complete annotation toolbar: arrows, boxes, freehand pen, and highlighters',
      'Smart blur effect to safely conceal sensitive passwords, API keys, or private info',
      'One-click Copy to Clipboard or instant lossless PNG download'
    ]
  }
];

export const STUDIO_METRICS = [
  { value: '1.2M+', label: 'Global Mobile Downloads' },
  { value: '4.9 ★', label: 'Average User Rating' },
  { value: '12', label: 'Published Games, Apps & Extensions' },
  { value: '100%', label: 'Privacy & Store Compliant' }
];
