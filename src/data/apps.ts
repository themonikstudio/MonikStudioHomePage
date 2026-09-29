import { AppItem } from '../types';

// Real store screenshots and icons directly from Apple App Store and Google Chrome Web Store (Zero AI generation)
import lichxuaScreenshot from '../assets/images/lichxua_real_hero.png';
import lichxuaIcon from '../assets/images/lichxua_icon.jpg';

import lynoteScreenshot from '../assets/images/lynote_real_hero.png';
import lynoteIcon from '../assets/images/lynote_cover.jpg';

import docushelfScreenshot from '../assets/images/docushelf_real_hero.png';
import docushelfIcon from '../assets/images/docushelf_icon.jpg';

import knifeShooterScreenshot from '../assets/images/knifeshooter_real_hero.png';
import knifeShooterIcon from '../assets/images/knifeshooter_icon.jpg';

import monikshotPromo from '../assets/images/monikshot_real_promo.png';
import monikshortsPromo from '../assets/images/monikshorts_real_promo.jpg';

export const APPS_DATA: AppItem[] = [
  {
    id: 'lich-xua',
    title: 'Lịch Xưa - Lịch Âm Vạn Niên',
    tagline: 'Lịch bloc xé tường truyền thống tái hiện trên iPhone — hoài niệm, chính xác, nhẹ nhàng.',
    description: 'Lịch Xưa tái hiện nét đẹp bình dị của cuốn lịch bloc treo tường quen thuộc. Mỗi ngày một bức tranh dân gian Đông Hồ chuyển động sinh động, tra cứu âm dương chuẩn xác theo thuật toán Hồ Ngọc Đức, văn khấn cổ truyền, hướng xuất hành, giờ hoàng đạo và nhắc nhở ngày giỗ, ngày sóc vọng. Hoạt động 100% offline, không thu thập dữ liệu cá nhân.',
    category: 'app',
    platforms: ['ios'],
    image: lichxuaScreenshot,
    icon: lichxuaIcon,
    accentColor: '#D86950',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '14.6 MB',
    appStoreUrl: 'https://apps.apple.com/vn/app/l%E1%BB%8Bch-x%C6%B0a-l%E1%BB%8Bch-%C3%A2m-v%E1%BA%A1n-ni%C3%AAn/id6816468574',
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
    image: lynoteScreenshot,
    icon: lynoteIcon,
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
    image: docushelfScreenshot,
    icon: docushelfIcon,
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
    id: 'knife-shooter',
    title: 'Knife Shooter Hit Top',
    tagline: 'Precise arcade knife throwing game with responsive physics and satisfying targets.',
    description: 'Test your reaction and accuracy in Knife Shooter Hit Top. Throw blades into rotating wooden targets, slice apples to unlock unique custom blades, and defeat challenging bosses every 5 levels. Fast, fun, lightweight arcade physics built for quick mindful breaks on iPhone and iPad.',
    category: 'game',
    platforms: ['ios'],
    image: knifeShooterScreenshot,
    icon: knifeShooterIcon,
    accentColor: '#CDB07B',
    status: 'live',
    version: '1.1',
    ageRating: '4+ (Everyone)',
    sizeMb: '48 MB',
    appStoreUrl: 'https://apps.apple.com/us/app/knife-shooter-hit-top/id1525110538',
    tags: ['Arcade', 'Knife Hit', 'Physics', 'Action', 'Casual Game', 'Offline'],
    features: [
      'Fluid 60 FPS physics with crisp haptic response on every blade impact',
      'Dozens of handcrafted unlockable knives, swords, and special weapons',
      'Challenging boss battles every 5 stages with rotating obstacles',
      'Smooth offline gameplay with zero account registration needed',
      'Optimized for all iPhone and iPad screen sizes'
    ]
  },
  {
    id: 'monikshot-screenshot',
    title: 'MonikShot: Easy Screenshot',
    tagline: 'Capture, crop, blur sensitive info, and annotate screenshots directly in Chrome with zero tracking.',
    description: 'MonikShot is a lightweight, privacy-focused Chrome screenshot extension. Capture selected screen areas, visible viewports, or full scrolling web pages in one click. Features an instant built-in editor with arrows, rectangles, freehand pens, highlighters, and smart blur to conceal sensitive data before copying to clipboard or downloading lossless PNG. No analytics, no server uploads.',
    category: 'extension',
    platforms: ['chrome'],
    image: monikshotPromo,
    accentColor: '#779585',
    status: 'live',
    version: '1.2.0',
    ageRating: 'Everyone',
    sizeMb: '320 KB',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monikshot-easy-screenshot/mplmcjkilfpnhccddaekpmheeecdnpcb',
    tags: ['Chrome Extension', 'Screenshot Tool', 'Image Annotation', 'Productivity', 'Privacy'],
    features: [
      '3 intuitive capture modes: Selected Region, Visible Screen, and Full Page scroll',
      'Complete annotation toolbar: arrows, boxes, freehand pen, and highlighters',
      'Smart blur effect to safely conceal sensitive passwords, API keys, or private info',
      'One-click Copy to Clipboard or instant lossless PNG download'
    ]
  },
  {
    id: 'monik-shorts-block',
    title: 'Monik Shorts Block',
    tagline: 'Reclaim your focus by hiding distracting short-form videos across YouTube and the web.',
    description: 'Monik Shorts Block helps you stay productive and prevent endless doomscrolling. Cleanly filters out algorithmically generated short-form video shelves, reels, and distracting loops from your browsing experience. Completely client-side with zero network requests or background data collection.',
    category: 'extension',
    platforms: ['chrome'],
    image: monikshortsPromo,
    accentColor: '#D86950',
    status: 'live',
    version: '1.0.4',
    ageRating: 'Everyone',
    sizeMb: '180 KB',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monik-shorts-block/oifnddgbopilelbhdncceokibmccgpja',
    tags: ['Chrome Extension', 'Focus Tool', 'Productivity', 'Distraction Blocker', 'Privacy'],
    features: [
      'Automatically hides distracting short-form video shelves and sidebars',
      'One-click toggle button to quickly pause or resume blocking when needed',
      'Zero data collection: runs 100% locally with zero external network calls',
      'Ultra-lightweight Manifest V3 extension with minimal memory footprint'
    ]
  }
];

export const STUDIO_METRICS = [
  { value: '1.2M+', label: 'Global Mobile Downloads' },
  { value: '4.9 ★', label: 'Average User Rating' },
  { value: '6', label: 'Published Games, Apps & Extensions' },
  { value: '100%', label: 'Privacy & Store Compliant' }
];
