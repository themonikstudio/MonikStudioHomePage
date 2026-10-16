import { AppItem } from '../types';

// Real store screenshots and icons directly from Apple App Store and Google Chrome Web Store
import lichxuaScreenshot from '../assets/images/lichxua_real_hero.png';
import lichxuaIcon from '../assets/images/lichxua_icon.jpg';

import dingScreenshot from '../assets/images/ding_real_hero.png';
import dingIcon from '../assets/images/ding_icon.jpg';

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
    title: 'Lịch Xưa: Lunar Calendar',
    tagline: "Grandma's tear-off wall calendar, reborn on your iPhone and Android — beautiful, accurate, lightweight.",
    description: "Grandma's tear-off wall calendar, reborn on your phone. Lịch Xưa (\"the old calendar\") brings the authentic look of a classic Vietnamese wall calendar: aged paper, cinnabar ink, and a hand-stamped seal. Every morning, swipe up to tear off a page — it curls under your finger with a real paper-tearing sound. Features animated Đông Hồ folk paintings, lunar reminders (giỗ), 20 traditional prayers (văn khấn), Home & Lock Screen widgets, StandBy, and Apple Watch complications. 100% offline with zero sign-in.",
    category: 'app',
    platforms: ['ios', 'android'],
    image: lichxuaScreenshot,
    icon: lichxuaIcon,
    accentColor: '#D86950',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '14.6 MB',
    storeId: 'id6816468574',
    bundleId: 'com.monikstudio.lichxua',
    requirements: 'iOS 12.4 or later (iPhone & iPad), watchOS 10.2+ (Apple Watch), Android 8.0+',
    pricing: 'Free with In-App Purchases (Daily Calendar is 100% Free Forever)',
    compatibility: ['iPhone', 'iPad', 'Apple Watch', 'Android Phones', 'Android Tablets'],
    whatsNew: 'Version 1.0: Official release of Lịch Xưa with authentic paper curl animation, Đông Hồ animated art, lunar reminders, 20 prayers, and StandBy widgets.',
    appStoreUrl: 'https://apps.apple.com/us/app/l%E1%BB%8Bch-x%C6%B0a-l%E1%BB%8Bch-%C3%A2m-v%E1%BA%A1n-ni%C3%AAn/id6816468574',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.lichxua',
    tags: ['Lunar Calendar', 'Vietnamese Heritage', 'Đông Hồ Art', 'Widgets', 'Apple Watch', 'Offline First'],
    features: [
      'Authentic Vietnamese retro: aged paper, cinnabar ink, vintage typography, and real paper-tearing curl sound',
      'Animated Đông Hồ folk paintings every day (rooster pecking grain, waddling pig family, carp, and Mouse Wedding)',
      'Accurate to Vietnam Time (GMT+7) with Dr. Hồ Ngọc Đức algorithm from 1900 to 2199 — 100% offline',
      'Lunar reminders for memorial days (giỗ), lunar birthdays, 1st & 15th, and Tết countdown',
      '20 traditional Vietnamese prayers (văn khấn) with offering suggestions, Home/Lock Screen widgets, StandBy, and Apple Watch'
    ],
    highlights: [
      {
        title: 'Authentic Hanoi Wall Bloc Simulation',
        desc: 'Tactile aged paper texture, cinnabar red ink, hand-stamped seal, and realistic curling paper with sound effect.'
      },
      {
        title: 'Daily Animated Đông Hồ Folk Art',
        desc: 'Traditional woodblock paintings come alive: Rooster crowing, Yin-Yang pigs, Carp contemplating the moon, and Mouse wedding.'
      },
      {
        title: 'Dr. Hồ Ngọc Đức Lunar Algorithm',
        desc: 'Strictly calculated for Vietnam Time (GMT+7) spanning 1900 to 2199 with 100% offline precision.'
      },
      {
        title: 'Ancestral Lunar Memorials & Reminders',
        desc: 'Never miss family death anniversaries (ngày giỗ), lunar birthdays, or 1st & 15th lunar offering days.'
      },
      {
        title: '20 Traditional Vietnamese Prayers (Văn Khấn)',
        desc: 'Complete ceremonial prayers for Tết, New Moon, Full Moon, Grave visiting, and Housewarming with offering guide.'
      },
      {
        title: 'Accessible & Elderly Friendly',
        desc: 'Large high-contrast typography, Dynamic Type, VoiceOver integration, and zero confusing advertisements.'
      }
    ],
    localizations: {
      vi: {
        title: 'Lịch Xưa: Lịch Âm Vạn Niên',
        tagline: 'Lốc lịch xé tường truyền thống của bà, tái sinh trên iPhone và Android — tao nhã, chuẩn xác, không quảng cáo.',
        description: 'Tái hiện chân thực cuốn lịch bloc treo tường truyền thống của người Việt: giấy ố vàng cổ kính, màu mực chu sa và con dấu mộc đóng tay. Mỗi sớm mai thức dậy, vuốt nhẹ ngón tay để xé lịch với hiệu ứng trang giấy uốn cong và âm thanh xé giấy sột soạt thân thương. Tích hợp tranh dân gian Đông Hồ chuyển động theo ngày, nhắc nhở ngày giỗ chạp, mùng một hôm rằm, đếm ngược Tết, cùng 20 bài văn khấn cổ truyền chuẩn xác theo thuật toán Hồ Ngọc Đức.',
        whatsNew: 'Phiên bản 1.0: Phát hành chính thức Lịch Xưa với mô phỏng xé lịch chân thực, tranh Đông Hồ chuyển động, nhắc giỗ chạp và văn khấn.',
        features: [
          'Phong cách retro Việt Nam: chất giấy ngả vàng, sắc mực chu sa và âm thanh xé lịch chân thực',
          'Tranh dân gian Đông Hồ chuyển động mỗi ngày (Gà gáy, Đàn lợn âm dương, Cá chép, Đám cưới chuột)',
          'Chuẩn xác múi giờ Việt Nam (GMT+7) theo thuật toán Hồ Ngọc Đức từ năm 1900 đến 2199 — 100% offline',
          'Nhắc nhở ngày giỗ chạp, sinh nhật âm lịch, ngày mùng 1, ngày rằm và đếm ngược Tết cổ truyền',
          '20 bài văn khấn truyền thống, widget màn hình chính/khóa, chế độ StandBy và Apple Watch'
        ],
        highlights: [
          {
            title: 'Mô phỏng Lịch Bloc Treo Tường',
            desc: 'Chất giấy ngả vàng, sắc mực chu sa, con dấu mộc và hiệu ứng cuộn trang kèm âm thanh xé lịch sột soạt.'
          },
          {
            title: 'Tranh Đông Hồ Chuyển Động Mỗi Ngày',
            desc: 'Tranh khắc gỗ dân gian sống động: Gà gáy đón bình minh, Đàn lợn âm dương, Cá chép trông trăng, Đám cưới chuột.'
          },
          {
            title: 'Thuật toán Thiên văn Hồ Ngọc Đức',
            desc: 'Tính toán lịch âm theo chuẩn giờ Việt Nam (GMT+7) từ năm 1900 tới 2199, hoạt động 100% không cần mạng.'
          },
          {
            title: 'Nhắc Ngày Giỗ Chạp & Mùng 1 Hôm Rằm',
            desc: 'Ghi nhớ ngày giỗ tổ tiên, sinh nhật âm lịch, ngày sóc vọng và đếm ngược đến Tết Nguyên Đán.'
          },
          {
            title: '20 Bài Văn Khấn Cổ Truyền',
            desc: 'Đầy đủ bài khấn Mùng 1, Rằm, Giao thừa, Táo quân, Tạ mộ, Nhập trạch kèm gợi ý mâm lễ chu đáo.'
          },
          {
            title: 'Phù hợp Cho Cả Người Lớn Tuổi',
            desc: 'Chữ to rõ ràng, độ tương phản cao, hỗ trợ VoiceOver và không có bất kỳ quảng cáo gây phiền toái.'
          }
        ]
      },
      ja: {
        title: 'Lịch Xưa：旧暦カレンダー',
        tagline: 'ベトナムの伝統的な手めくり日めくり暦をスマートフォンで再現 — 美しく正確で完全オフライン。',
      },
      zh: {
        title: 'Lịch Xưa：传统农历万年历',
        tagline: '重温经典手撕日历的温度 — 复古质感、精准农历计算、支持小组件与完全离线。',
      },
      ko: {
        title: 'Lịch Xưa: 전통 음력 일력',
        tagline: '베트남 전통 찢는 일력의 따스한 감성 — 아름답고 정교하며 100% 오프라인 작동.',
      },
      es: {
        title: 'Lịch Xưa: Calendario Lunar',
        tagline: 'El clásico calendario de pared arrancable de la abuela, renacido en tu teléfono — bello, preciso y ligero.',
      },
      pt: {
        title: 'Lịch Xưa: Calendário Lunar',
        tagline: 'O clássico calendário de parede destacável da vovó, renascido no seu smartphone — bonito, preciso e leve.',
      },
    }
  },
  {
    id: 'ding-kitchen-timer',
    title: 'Ding! – Kitchen Timer',
    tagline: 'The smart kitchen timer that knows what you are cooking — step-by-step guidance for eggs, steak, and more.',
    description: 'Stop guessing cooking times. Ding! is the kitchen timer that knows what you are cooking. Choose a dish, set how you like it — soft or hard eggs, rare or medium steak, extra-crispy fries — and Ding! calculates the time for you. Every step is guided: flip, shake, rest, serve. Run multiple timers at once with live countdowns, Lock Screen and Dynamic Island support, big easy-to-hit buttons for messy hands, and 100% on-device privacy with zero accounts or ads.',
    category: 'app',
    platforms: ['ios', 'android'],
    image: dingScreenshot,
    icon: dingIcon,
    accentColor: '#E06D53',
    status: 'new_release',
    version: '1.0',
    ageRating: '4+ (Everyone)',
    sizeMb: '4.6 MB',
    storeId: 'id6815182459',
    bundleId: 'com.monikstudio.ding',
    requirements: 'iOS 16.0 or later (iPhone), Android 8.0+',
    pricing: 'Free (Core alarms and 15 presets 100% free; optional Ding! Pro for unlimited presets)',
    compatibility: ['iPhone', 'Dynamic Island', 'Lock Screen Live Activities', 'Android Phones'],
    whatsNew: 'Version 1.0: Launch of Ding! Kitchen Timer with 30+ smart culinary presets, multi-timer mode, and Lock Screen Live Activities.',
    appStoreUrl: 'https://apps.apple.com/us/app/ding-kitchen-timer/id6815182459',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.monikstudio.ding&pcampaignid=web_share',
    tags: ['Kitchen Timer', 'Cooking Assistant', 'Smart Presets', 'Food & Drink', 'Multi-timer', 'Zero Tracking'],
    features: [
      'Smart presets for 30 dishes (eggs, steak, chicken, salmon, pasta, rice, air fryer favorites, baking, tea and coffee)',
      'Step-by-step timers with actionable reminders ("Flip the steak!", "Shake the basket!", "Rest")',
      'Run several timers simultaneously side-by-side with clear at-a-glance status',
      'Never miss the ding: rings through Silent mode & Focus with critical alarms, plus Live Activities & Dynamic Island',
      '100% private: no accounts, no ads, no telemetry — timers stay entirely on your device'
    ],
    highlights: [
      {
        title: '30+ Specialized Culinary Presets',
        desc: 'Soft, medium & hard boiled eggs, rare to well-done steak, salmon, pasta al dente, rice, air fryer, baking, tea and coffee.'
      },
      {
        title: 'Interactive Step-by-Step Reminders',
        desc: 'Guides you through critical moments: "Flip the steak!", "Shake the air fryer basket!", "Rest meat for 5 mins".'
      },
      {
        title: 'Run Multiple Timers in Parallel',
        desc: 'Cook complex dinners with up to 8 simultaneous timers side-by-side. Large buttons are easy to tap with messy hands.'
      },
      {
        title: 'Pierces Silent & Focus Modes',
        desc: 'Critical alarm notifications ensure you never miss your food timing even when your device is on silent.'
      },
      {
        title: 'Live Activities & Dynamic Island',
        desc: 'Glanceable countdown on the Lock Screen and iPhone Dynamic Island without unlocking your phone.'
      },
      {
        title: 'Siri & Shortcuts Integration',
        desc: 'Hands-free voice commands to start, pause, or query timers while cooking.'
      }
    ],
    localizations: {
      vi: {
        title: 'Ding! – Hẹn Giờ Nấu Ăn Thông Minh',
        tagline: 'Bộ đếm giờ nhà bếp thông minh hiểu rõ món bạn đang nấu — hướng dẫn từng bước cho trứng, bít tết, nồi chiên và nhiều món khác.',
        description: 'Không còn phải đoán mò thời gian nấu. Ding! là bộ đếm giờ nhà bếp chuyên biệt hiểu rõ món bạn đang nấu. Chọn món ăn, chọn độ chín bạn muốn (trứng lòng đào hay chín kĩ, bít tết tái hay chín tới, khoai tây chiên giòn rụm) và Ding! tự động tính toán thời gian chuẩn xác. Hướng dẫn từng bước với lời nhắc: lật mặt, lắc giỏ, để nghỉ, dọn đĩa. Chạy nhiều bộ hẹn giờ cùng lúc, hỗ trợ màn hình khóa & Dynamic Island, nút bấm lớn dễ thao tác và bảo mật tuyệt đối.',
        whatsNew: 'Phiên bản 1.0: Ra mắt Ding! với hơn 30 công thức nấu ăn thông minh, hẹn giờ đa luồng và chuông báo chống cháy thức ăn.',
        features: [
          '30 công thức hẹn giờ thông minh cho trứng, bít tết, gà, cá hồi, mì pasta, cơm, nồi chiên không dầu, làm bánh, trà & cà phê',
          'Hướng dẫn từng bước có nhắc nhở trực quan ("Lật bít tết!", "Lắc giỏ chiên!", "Nghỉ thịt")',
          'Chạy nhiều bộ đếm giờ đồng thời cạnh nhau với giao diện trực quan dễ quan sát',
          'Chuông báo vượt qua chế độ Im lặng & Focus, hiển thị Live Activities & Dynamic Island',
          'Bảo mật 100%: không cần tạo tài khoản, không quảng cáo, chạy hoàn toàn offline'
        ],
        highlights: [
          {
            title: '30+ Công Thức Nấu Ăn Tự Động',
            desc: 'Trứng lòng đào, trứng luộc, bít tết tái vừa đến chín kỹ, cá hồi, mì Ý al dente, nồi chiên không dầu, làm bánh.'
          },
          {
            title: 'Nhắc Nhở Từng Giai Đoạn Nấu',
            desc: 'Hướng dẫn chuẩn xác: "Lật mặt bít tết!", "Lắc giỏ khoai tây!", "Để thịt nghỉ 5 phút trước khi cắt".'
          },
          {
            title: 'Đếm Giờ Song Song Nhiều Món',
            desc: 'Nấu cả bữa tiệc dễ dàng với khả năng đếm giờ cùng lúc nhiều món. Nút bấm to bản thao tác dễ khi tay dính bột mỡ.'
          },
          {
            title: 'Chuông Báo Vượt Qua Chế Độ Im Lặng',
            desc: 'Âm báo khẩn cấp giúp bạn không bao giờ làm cháy khét đồ ăn kể cả khi điện thoại tắt chuông.'
          },
          {
            title: 'Hỗ Trợ Live Activities & Dynamic Island',
            desc: 'Xem thời gian đếm ngược trực tiếp trên Màn hình khóa và Dynamic Island mà không cần mở khóa máy.'
          },
          {
            title: 'Hoàn Toàn Riêng Tư & Không Quảng Cáo',
            desc: 'Không cần tài khoản, dữ liệu timer nằm trọn vẹn trên máy, không quảng cáo trên màn hình hẹn giờ.'
          }
        ]
      },
      ja: {
        title: 'Ding! – キッチンタイマー',
        tagline: '料理に合わせて自動計算するスマートキッチンタイマー — 卵、ステーキ、揚げ物のステップ別ガイド付き。',
      },
      zh: {
        title: 'Ding! – 智能厨房定时器',
        tagline: '懂得你烹饪食材的智能厨房计时器 — 水煮蛋、煎牛排、空气炸锅的多步骤指引。',
      },
      ko: {
        title: 'Ding! – 스마트 키친 타이머',
        tagline: '요리에 맞게 자동으로 시간을 계산하는 타이머 — 계란, 스테이크, 에어프라이어 단계별 알림.',
      },
      es: {
        title: 'Ding! – Temporizador de Cocina',
        tagline: 'El temporizador inteligente que sabe lo que cocinas — guía paso a paso para huevos, bistec y más.',
      },
      pt: {
        title: 'Ding! – Timer de Cozinha Inteligente',
        tagline: 'O timer que sabe exatamente o que você está cozinhando — guia passo a passo para ovos, bife e mais.',
      },
    }
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
    storeId: 'id6814047781',
    bundleId: 'com.monikstudio.lynote',
    requirements: 'iPadOS 15.0 or later, iOS 15.0+ (Full Apple Pencil support)',
    pricing: 'Free (6 full genres included; optional unlock for all 22 genres)',
    compatibility: ['iPad', 'Apple Pencil (1st, 2nd gen, Pro)', 'iPhone'],
    whatsNew: 'Version 1.0: Launch of Lynote with 22 genres, 6-track audio synthesizer, background playback, and MIDI export.',
    appStoreUrl: 'https://apps.apple.com/us/app/lynote-draw-music/id6814047781',
    tags: ['Music', 'Drawing', 'Apple Pencil', 'Creativity', 'Audio Studio', 'No Ads'],
    features: [
      'Draw anything to make music: lines snap to musical scales with zero wrong notes',
      '22 genres (Lofi, Ambient, Classical, Disco, Synthwave, Folk, Jazz, and more)',
      'Build a full band with up to 6 tracks and real sampled instruments (piano, kalimba, flute, violin)',
      'Record and share as video with animated wallpapers, or export as MIDI and lossless WAV',
      'Lock-screen background playback, sleep timer, and Apple Pencil support'
    ],
    highlights: [
      {
        title: 'Zero Music Theory Required',
        desc: 'Draw any doodle: left to right represents time, height controls pitch. Automatic harmonic scale snapping guarantees every melody sounds pleasing.'
      },
      {
        title: '22 Diverse Soundscapes',
        desc: 'Explore Lofi / Chill, Ambient, Classical, Disco, Folk, Reggaeton, Synthwave, Jazz, and Cinematic acoustics.'
      },
      {
        title: '6-Track Multi-Instrument Arranger',
        desc: 'Layer real sampled instruments: Grand Piano, African Kalimba, Bamboo Flute, Solo Violin, 808 Bass, and chill drums.'
      },
      {
        title: 'Video Recording & Audio Export',
        desc: 'Generate aesthetic videos with warm animated backdrops, or export standard MIDI and studio-grade lossless WAV.'
      },
      {
        title: 'Apple Pencil Native Precision',
        desc: 'Pressure-sensitive drawing, palm rejection, and tilt control calibrated for iPad creators.'
      }
    ],
    localizations: {
      vi: {
        title: 'Lynote: Vẽ Nét Thành Nhạc',
        tagline: 'Vẽ bất kỳ nét vẽ nào để nghe thành giai điệu — biến ngón tay hay Apple Pencil thành nhạc cụ sáng tạo.',
        description: 'Lynote biến ngón tay hoặc bút Apple Pencil của bạn thành một nhạc cụ đích thực. Vẽ một làn sóng, một hình vẽ ngẫu hứng hay đường lượn sóng: từ trái sang phải là dòng thời gian, càng lên cao nốt nhạc càng bay bổng. Tự động khớp vào thang âm nhạc lý nên không bao giờ có nốt sai.',
        features: [
          'Vẽ bất cứ thứ gì để tạo âm nhạc: đường nét tự bắt vào thang âm nhạc lý chuẩn xác',
          '22 thể loại âm nhạc đa dạng (Lofi, Ambient, Cổ điển, Disco, Synthwave, Jazz...)',
          'Phối khí lên đến 6 bản nhạc với nhạc cụ lấy mẫu thật (piano, kalimba, sáo trúc, vĩ cầm)',
          'Ghi hình và chia sẻ dưới dạng video hình nền động ấm cúng, hoặc xuất file MIDI & WAV',
          'Phát nhạc nền khi khóa màn hình, hẹn giờ tắt và hỗ trợ Apple Pencil mượt mà'
        ],
        highlights: [
          {
            title: 'Không Cần Biết Nhạc Lý',
            desc: 'Nét vẽ tự động căn chỉnh theo thang âm chuẩn xác, đảm bảo mọi giai điệu vẽ ra đều du dương và êm dịu.'
          },
          {
            title: '22 Thể Loại Âm Nhạc Phong Phú',
            desc: 'Lofi Chill, Ambient thư giãn, Cổ điển, Disco vui tươi, Nhạc dân gian, Reggaeton, Synthwave cổ điển.'
          },
          {
            title: 'Hòa Âm Phối Khí 6 Kênh Nhạc Cụ',
            desc: 'Kết hợp piano mộc, đàn kalimba, sáo trúc, đàn violin, bass 808 và bộ gõ nhịp điệu chân thực.'
          },
          {
            title: 'Xuất Video Hình Nền Động & File MIDI',
            desc: 'Ghi lại video nét vẽ chuyển động kèm âm nhạc để chia sẻ Story/Reels, hoặc xuất file WAV không nén.'
          }
        ]
      },
      ja: {
        title: 'Lynote: 音を描くミュージックアプリ',
        tagline: '描いた線がそのまま音楽になる — 指先やApple Pencilが楽器に変わる新感覚ツール。',
      },
      zh: {
        title: 'Lynote: 随心画乐',
        tagline: '任意涂鸦即可化为美妙旋律 — 让手指与Apple Pencil成为你的专属乐器。',
      },
      ko: {
        title: 'Lynote: 그림으로 만드는 음악',
        tagline: '손가락이나 Apple Pencil로 선을 그리면 아름다운 선율이 되는 힐링 사운드 앱.',
      },
      es: {
        title: 'Lynote: Dibuja Música',
        tagline: 'Dibuja cualquier cosa y escúchala como música — convierte tu dedo o Apple Pencil en un instrumento.',
      },
      pt: {
        title: 'Lynote: Desenhe Música',
        tagline: 'Desenhe qualquer coisa e ouça como música — transforme seu dedo ou Apple Pencil em instrumento.',
      },
    }
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
    storeId: 'id6813003627',
    bundleId: 'com.monikstudio.docushelf',
    requirements: 'iOS 16.0 or later, iPadOS 16.0+',
    pricing: 'Free monthly quota, one-time lifetime unlock (No recurring subscriptions)',
    compatibility: ['iPhone', 'iPad', 'iOS Spotlight Search', 'Siri Shortcuts'],
    whatsNew: 'Version 1.0: Launch of DocuShelf with 17-language on-device OCR and system-wide Spotlight integration.',
    appStoreUrl: 'https://apps.apple.com/us/app/docushelf/id6813003627',
    tags: ['Productivity', 'Scanner', 'On-Device OCR', 'Spotlight', 'Privacy First', 'Widgets'],
    features: [
      '100% on-device scanning and accurate OCR in 17 languages — zero cloud uploads',
      'Instant search inside the app or straight from system-wide iOS Spotlight',
      'Smart multi-page scanning with auto edge detection and perspective correction',
      'Export clean PDF or text, and organize receipts, IDs, and contracts into custom Bays',
      'Home Screen widgets and Siri Shortcuts for 1-tap fast capture'
    ],
    highlights: [
      {
        title: '100% On-Device Neural OCR',
        desc: 'Advanced machine learning extracts text in 17 languages strictly on your device processor with zero cloud exposure.'
      },
      {
        title: 'System-Wide iOS Spotlight Search',
        desc: 'Search invoice amounts, passport numbers, or contract clauses straight from your iPhone Home Screen Spotlight.'
      },
      {
        title: 'Smart Edge & Perspective Correction',
        desc: 'Automatic boundary detection, skew straightening, shadow removal, and contrast enhancement in real time.'
      },
      {
        title: 'Organized Document Bays',
        desc: 'Structured folders for Tax Receipts, Medical Records, Insurance, Real Estate, and Personal IDs.'
      },
      {
        title: 'One-Time Purchase Architecture',
        desc: 'Fair pricing model with no predatory subscriptions and zero third-party telemetry.'
      }
    ],
    localizations: {
      vi: {
        title: 'DocuShelf: Quét & Lưu Trữ Tài Liệu',
        tagline: 'Kho lưu trữ tài liệu riêng tư, nhận diện chữ OCR 100% trên thiết bị và tích hợp tìm kiếm Spotlight.',
        description: 'DocuShelf biến camera iPhone của bạn thành kho lưu trữ tài liệu tìm kiếm được hoàn toàn bảo mật. Mọi hóa đơn, CCCD và hợp đồng được sắp xếp ngăn nắp mà không bao giờ rời khỏi máy của bạn.',
        features: [
          'Quét và nhận diện chữ OCR chính xác 17 ngôn ngữ 100% trên máy — không tải lên đám mây',
          'Tìm kiếm tức thì ngay trong ứng dụng hoặc trực tiếp từ thanh tìm kiếm Spotlight của iOS',
          'Quét thông minh nhiều trang với tính năng tự căn lề và chỉnh góc nghiêng tự động',
          'Xuất file PDF hoặc văn bản rõ nét, phân loại hóa đơn và tài liệu theo thư mục ngăn nắp',
          'Widget màn hình chính và phím tắt Siri để chụp quét nhanh 1 chạm'
        ],
        highlights: [
          {
            title: 'Nhận Diện Chữ OCR 17 Ngôn Ngữ Trên Thiết Bị',
            desc: 'Trích xuất văn bản hóa đơn, giấy tờ hoàn toàn trên chip của iPhone, không bao giờ gửi ảnh lên server.'
          },
          {
            title: 'Tìm Kiếm Ngay Trên Thanh Spotlight iOS',
            desc: 'Tìm mã hợp đồng, số tiền hóa đơn hay thông tin bảo hiểm trực tiếp từ màn hình chính iOS.'
          },
          {
            title: 'Tự Động Nắn Góc & Khử Bóng Mờ',
            desc: 'Nhận diện mép giấy thông minh, chỉnh thẳng góc nghiêng và làm nét chữ ký, hóa đơn như máy scan chuyên nghiệp.'
          }
        ]
      },
      ja: {
        title: 'DocuShelf: ドキュメントスキャナー',
        tagline: '端末内OCR＆Spotlight検索対応 — 完全プライベートな書類管理アプリ。',
      },
      zh: {
        title: 'DocuShelf: 文档扫描与归档',
        tagline: '100%本地离线OCR文字识别与系统Spotlight搜索，极致隐私保护。',
      },
      ko: {
        title: 'DocuShelf: 문서 스캐너 & 보관함',
        tagline: '100% 기기 온디바이스 OCR 및 iOS Spotlight 통합으로 프라이빗한 문서 관리.',
      },
      es: {
        title: 'DocuShelf: Escáner de Documentos',
        tagline: 'Archivo privado y con búsqueda con OCR 100% en el dispositivo e integración con Spotlight.',
      },
      pt: {
        title: 'DocuShelf: Scanner de Documentos',
        tagline: 'Arquivo privado e pesquisável com OCR 100% no dispositivo e integração com o Spotlight.',
      },
    }
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
    storeId: 'id1525110538',
    bundleId: 'com.monikstudio.knifeshooter',
    requirements: 'iOS 12.0 or later (iPhone & iPad)',
    pricing: 'Free with optional blade unlocks',
    compatibility: ['iPhone', 'iPad', 'iPod touch'],
    whatsNew: 'Version 1.1: Optimized for 120Hz ProMotion screens, enhanced Taptic Engine response, and new boss challenges.',
    appStoreUrl: 'https://apps.apple.com/us/app/knife-shooter-hit-top/id1525110538',
    tags: ['Arcade', 'Knife Hit', 'Physics', 'Action', 'Casual Game', 'Offline'],
    features: [
      'Fluid 60 FPS physics with crisp haptic response on every blade impact',
      'Dozens of handcrafted unlockable knives, swords, and special weapons',
      'Challenging boss battles every 5 stages with rotating obstacles',
      'Smooth offline gameplay with zero account registration needed',
      'Optimized for all iPhone and iPad screen sizes'
    ],
    highlights: [
      {
        title: '60/120 FPS Physics Engine',
        desc: 'Hand-tuned blade trajectory and authentic kinetic impact vibrations via Apple Taptic Engine.'
      },
      {
        title: 'Dozens of Unlockable Blades',
        desc: 'Slice floating apples to earn gold and collect historic katanas, throwing daggers, and mythic axes.'
      },
      {
        title: 'Dynamic Rotating Boss Battles',
        desc: 'Face tricky boss targets every 5 stages with rotating shields and unpredictable directional shifts.'
      },
      {
        title: 'Ultra-Lightweight & Offline',
        desc: 'Under 50MB download, zero loading screens, and 100% playable without an internet connection.'
      }
    ],
    localizations: {
      vi: {
        title: 'Knife Shooter Hit Top',
        tagline: 'Game ném dao arcade chính xác với hiệu ứng vật lý sống động và mục tiêu xoay kịch tính.',
        description: 'Thử thách phản xạ và độ chính xác của bạn trong Knife Shooter Hit Top. Phóng phi dao vào các bia gỗ đang xoay, chém táo để mở khóa các mẫu dao đặc biệt và đánh bại trùm thử thách sau mỗi 5 màn chơi. Tựa game arcade nhẹ nhàng, cuốn hút dành cho những phút nghỉ ngơi thư giãn trên iPhone và iPad.',
        features: [
          'Vật lý 60 FPS mượt mà cùng phản hồi rung xúc giác chân thực khi dao găm trúng đích',
          'Hàng chục mẫu dao, kiếm và vũ khí độc đáo có thể mở khóa trong game',
          'Màn đấu trùm thử thách sau mỗi 5 ải với chướng ngại vật quay đa dạng',
          'Trải nghiệm chơi offline thoải mái, không cần tài khoản hay kết nối mạng',
          'Tối ưu hoàn hảo cho màn hình iPhone và iPad'
        ]
      },
      ja: {
        title: 'Knife Shooter Hit Top',
        tagline: '正確な操作感と爽快な打撃感が楽しい、オフライン対応ナイフスローゲーム。',
      },
      zh: {
        title: 'Knife Shooter Hit Top',
        tagline: '精准物理反馈的街机飞刀游戏，斩击苹果解锁神兵，挑战刺激首领。',
      },
      ko: {
        title: 'Knife Shooter Hit Top',
        tagline: '손맛 넘치는 타격감과 정밀한 물리 엔진의 아케이드 나이프 스로잉 게임.',
      },
      es: {
        title: 'Knife Shooter Hit Top',
        tagline: 'Juego arcade de lanzamiento de cuchillos con física precisa y diversión sin conexión.',
      },
      pt: {
        title: 'Knife Shooter Hit Top',
        tagline: 'Jogo arcade de arremesso de facas com física precisa e diversão offline garantida.',
      },
    }
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
    storeId: 'mplmcjkilfpnhccddaekpmheeecdnpcb',
    manifestVersion: 'Manifest V3',
    requirements: 'Google Chrome 116+ (or Chromium: Brave, Edge, Opera)',
    pricing: '100% Free Forever',
    compatibility: ['Chrome on Windows', 'Chrome on macOS', 'Chrome on Linux', 'ChromeOS'],
    whatsNew: 'Version 1.2.0: Improved full-page scrolling stitch accuracy and one-click quick blur for passwords and tokens.',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monikshot-easy-screenshot/mplmcjkilfpnhccddaekpmheeecdnpcb',
    tags: ['Chrome Extension', 'Screenshot Tool', 'Image Annotation', 'Productivity', 'Privacy'],
    features: [
      '3 intuitive capture modes: Selected Region, Visible Screen, and Full Page scroll',
      'Complete annotation toolbar: arrows, boxes, freehand pen, and highlighters',
      'Smart blur effect to safely conceal sensitive passwords, API keys, or private info',
      'One-click Copy to Clipboard or instant lossless PNG download'
    ],
    highlights: [
      {
        title: '3 Versatile Capture Modes',
        desc: 'Drag to select specific regions, snapshot the visible viewport, or capture full-length scrolling web pages automatically.'
      },
      {
        title: 'Instant In-Browser Annotation',
        desc: 'Draw directional arrows, highlight key text, add text callouts, and draw geometric shapes without third-party software.'
      },
      {
        title: 'Smart Sensitive Data Obfuscation',
        desc: 'Safely blur out API keys, email addresses, credit cards, or passwords before sharing screenshots with colleagues.'
      },
      {
        title: 'Zero Server Uploads & Manifest V3',
        desc: 'Runs 100% client-side in your local browser sandbox with zero analytics tracking or remote data logging.'
      }
    ],
    localizations: {
      vi: {
        title: 'MonikShot: Chụp Ảnh Màn Hình Nhanh',
        tagline: 'Chụp, cắt xén, làm mờ thông tin nhạy cảm và chú thích ảnh chụp màn hình trực tiếp trên Chrome.',
        description: 'MonikShot là tiện ích Chrome gọn nhẹ, bảo mật chuyên chụp ảnh màn hình. Chụp vùng chọn tùy ý, toàn bộ khung nhìn hoặc cuộn chụp cả trang web chỉ với 1 cú nhấp chuột. Tích hợp bộ công cụ chỉnh sửa trực tiếp với mũi tên, đóng khung, bút vẽ và công cụ làm mờ thông minh để che mật khẩu, token hay dữ liệu cá nhân.',
        features: [
          '3 chế độ chụp tiện lợi: Vùng chọn tùy ý, Toàn bộ màn hình đang xem và Cuộn chụp cả trang',
          'Thanh công cụ chú thích đầy đủ: vẽ mũi tên, vẽ khung chữ nhật, bút vẽ và bút nhớ dòng',
          'Hiệu ứng làm mờ thông minh giúp che giấu an toàn mật khẩu, API key hay thông tin nhạy cảm',
          '1 cú nhấp để Sao chép vào bộ nhớ tạm hoặc tải ảnh PNG chất lượng nguyên bản'
        ]
      },
      ja: {
        title: 'MonikShot: 簡単スクリーンショット',
        tagline: 'Chrome上で選択範囲やフルページを撮影・注釈・ぼかし加工できる軽量拡張機能。',
      },
      zh: {
        title: 'MonikShot: 极简网页截图工具',
        tagline: '在Chrome中一键截取区域、可视窗口或滚动长图，内置打码模糊与标注工具。',
      },
      ko: {
        title: 'MonikShot: 간편 스크린샷',
        tagline: 'Chrome에서 영역 캡처, 전체 페이지 스크롤 캡처, 민감 정보 블러 처리까지 한 번에.',
      },
      es: {
        title: 'MonikShot: Capturas Fáciles',
        tagline: 'Captura, recorta, difumina datos sensibles y anota directamente en Chrome sin rastreo.',
      },
      pt: {
        title: 'MonikShot: Captura de Tela Fácil',
        tagline: 'Capture, recorte, desfoque dados confidenciais e anote diretamente no Chrome sem rastreamento.',
      },
    }
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
    storeId: 'oifnddgbopilelbhdncceokibmccgpja',
    manifestVersion: 'Manifest V3',
    requirements: 'Google Chrome 116+ (or Chromium: Edge, Brave, Opera)',
    pricing: '100% Free Forever',
    compatibility: ['Chrome on Windows', 'Chrome on macOS', 'Chrome on Linux', 'ChromeOS'],
    whatsNew: 'Version 1.0.4: Updated YouTube DOM selectors for cleaner Shorts shelf hiding and faster page rendering.',
    chromeWebStoreUrl: 'https://chromewebstore.google.com/detail/monik-shorts-block/oifnddgbopilelbhdncceokibmccgpja',
    tags: ['Chrome Extension', 'Focus Tool', 'Productivity', 'Distraction Blocker', 'Privacy'],
    features: [
      'Automatically hides distracting short-form video shelves and sidebars',
      'One-click toggle button to quickly pause or resume blocking when needed',
      'Zero data collection: runs 100% locally with zero external network calls',
      'Ultra-lightweight Manifest V3 extension with minimal memory footprint'
    ],
    highlights: [
      {
        title: 'Clean Feed Focus',
        desc: 'Hides distracting algorithmically generated short-form video shelves from YouTube Home, Subscriptions, and Search results.'
      },
      {
        title: 'Direct Video Normalization',
        desc: 'Redirects shorts URLs to standard video players so you remain in control of playback and your time.'
      },
      {
        title: 'Instant 1-Click Toolbar Switch',
        desc: 'Quickly enable or pause blocking directly from the Chrome extension toolbar icon whenever needed.'
      },
      {
        title: 'Zero Battery & RAM Impact',
        desc: 'Ultra-lightweight client-side CSS and DOM rules with zero background network traffic.'
      }
    ],
    localizations: {
      vi: {
        title: 'Monik Shorts Block',
        tagline: 'Lấy lại sự tập trung và ngăn chặn lướt vô định bằng cách ẩn các video ngắn gây xao nhãng trên YouTube.',
        description: 'Monik Shorts Block giúp bạn giữ vững hiệu suất làm việc và học tập. Lọc sạch các thanh video ngắn shorts, reels và vòng lặp thuật toán gây nghiện khỏi trải nghiệm duyệt web. Chạy hoàn toàn trên máy người dùng, không gửi bất kỳ yêu cầu mạng nào ra bên ngoài.',
        features: [
          'Tự động ẩn kệ video ngắn shorts và thanh bên gây phân tâm trên YouTube',
          'Nút bật/tắt nhanh 1 chạm để tạm dừng hoặc tiếp tục chặn khi cần',
          'Không thu thập dữ liệu: hoạt động 100% tại máy cục bộ, không có lệnh mạng nền',
          'Tiện ích chuẩn Manifest V3 siêu nhẹ, chiếm dụng bộ nhớ RAM tối thiểu'
        ]
      },
      ja: {
        title: 'Monik Shorts Block',
        tagline: 'YouTube上のショート動画を非表示にし、集中力を取り戻す軽量Chrome拡張機能。',
      },
      zh: {
        title: 'Monik Shorts Block',
        tagline: '隐藏YouTube短视频与滚动推荐，告别无休止的信息刷屏，重获专注。',
      },
      ko: {
        title: 'Monik Shorts Block',
        tagline: 'YouTube 쇼츠 등 주의를 분산시키는 숏폼 영상을 숨겨 집중력을 되찾아주는 확장 프로그램.',
      },
      es: {
        title: 'Monik Shorts Block',
        tagline: 'Recupera tu concentración ocultando los vídeos cortos adictivos en YouTube y la web.',
      },
      pt: {
        title: 'Monik Shorts Block',
        tagline: 'Recupere seu foco ocultando vídeos curtos que distraem no YouTube e na web.',
      },
    }
  }
];

export const STUDIO_METRICS = [
  { value: '1.2M+', label: 'Global Mobile Downloads' },
  { value: '4.9 ★', label: 'Average User Rating' },
  { value: '7', label: 'Published Games, Apps & Extensions' },
  { value: '100%', label: 'Privacy & Store Compliant' }
];
