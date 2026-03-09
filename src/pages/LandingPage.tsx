import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Globe,
  Twitter,
  Youtube,
  Facebook,
  Pin,
  Gamepad2,
  Mail,
  Smartphone,
  ChevronRight,
  Monitor,
  Cpu,
  Palette,
  Joystick,
  Trophy,
  Zap,
  Star,
  Sparkles,
  Rocket,
  Sword,
  Shield,
  Ghost,
  Dna,
  Layers,
  Code2,
  Share2,
  RefreshCw,
  Chrome
} from 'lucide-react';
import { Header, Footer } from '../components/Navigation';
import { GooglePlayIcon, AppStoreIcon, TikTokIcon } from '../components/Icons';

// Products image
import roomPuzzleImg from '../images/Room Puzzle Slide Escape Games.png';
import aboutUsImg from '../images/about-us.png';
import contactUsImg from '../images/contact-us.png';
import monikshotImg from '../images/monikshot-easy-full-screenshot.png';
import shadowRunnerImg from '../images/shadow-runner-games.jpeg';
import monikWorldPuzzleImg from '../images/monik-world-fill-words-puzzle.jpeg';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const otherGames = [
    {
      title: "Shadow Runner",
      description: "An intense neon-soaked endless runner with rhythmic mechanics.",
      image: shadowRunnerImg,
      category: "Action Game",
      links: { play: "#", app: "#" }
    },
    {
      title: "Monik World Puzzle",
      description: "Challenge your patience and keen eyesight by finding the correct letters in a complex matrix. How many words will you find?",
      image: monikWorldPuzzleImg,
      category: "Puzzle Game",
      links: { play: "#", app: "#" }
    },
    {
      title: "MonikShot - Easy Screenshot",
      description: "Capture a full-screen screenshot and edit it quickly right in your browser.",
      image: monikshotImg,
      category: "Chrome Extension",
      links: { chrome: "#" }
    }
  ];

  const partners = [
    { name: "Unity", logo: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" },
    { name: "Unreal", logo: "https://www.svgrepo.com/show/342328/unreal-engine.svg" },
    { name: "Google Play", logo: "https://www.vectorlogo.zone/logos/google_play/google_play-icon.svg" },
    { name: "App Store", logo: "https://www.vectorlogo.zone/logos/apple_appstore/apple_appstore-icon.svg" },
    { name: "Steam", logo: "https://www.vectorlogo.zone/logos/steampowered/steampowered-icon.svg" },
    { name: "Discord", logo: "https://www.svgrepo.com/show/349338/discord.svg" },
    { name: "NVIDIA", logo: "https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg" },
    { name: "Intel", logo: "https://www.vectorlogo.zone/logos/intel/intel-icon.svg" }
  ];

  const services = [
    { title: "Game Development", icon: <Gamepad2 />, desc: "Crafting immersive worlds and engaging mechanics for all platforms." },
    { title: "App Development", icon: <Smartphone />, desc: "Building sleek, high-performance mobile applications for iOS and Android." },
    { title: "Chrome Extensions", icon: <Layers />, desc: "Developing powerful browser utilities to enhance your web experience." },
    { title: "UI/UX Design", icon: <Monitor />, desc: "Intuitive interfaces designed for the best user and player experience." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid-pattern" />

      {/* Floating Icons Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] text-slate-400 opacity-[0.1]"
        >
          <Joystick size={120} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[5%] text-slate-400 opacity-[0.1]"
        >
          <Gamepad2 size={150} />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] text-slate-400"
        >
          <Star size={80} fill="currentColor" />
        </motion.div>
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -10, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[15%] text-slate-400"
        >
          <Sword size={100} />
        </motion.div>
        <motion.div
          animate={{
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[30%] left-[5%] text-slate-400 opacity-[0.08]"
        >
          <Shield size={140} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -40, 0],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[25%] right-[20%] text-slate-400"
        >
          <Ghost size={90} />
        </motion.div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero / News Game */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-slate-200">
              <Sparkles size={14} className="animate-spin-slow" />
              Featured Release
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-black tracking-tighter leading-[0.9] text-slate-900 hover:scale-[1.02] cursor-default transition-all">
              ROOM PUZZLE:<br />SLIDE ESCAPE
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-md font-medium">
              Drops you into a mysterious grid world where every move counts. Find the key, smash obstacles, and use your tools — hammer, ice, and more. But watch out for the fire. With 500+ handcrafted levels, the only question is <br /><i>How far can you go?</i>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 group">
                <GooglePlayIcon />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Get it on</div>
                  <div className="font-black text-lg leading-none">Google Play</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl border-2 border-slate-100 hover:border-slate-900 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 group">
                <AppStoreIcon />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold opacity-60 leading-none">Download on</div>
                  <div className="font-black text-lg leading-none">App Store</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-slate-900/5 rounded-[3rem] blur-2xl animate-pulse" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/3]">
              <img
                src={roomPuzzleImg}
                alt="Room Puzzle: Slide Escape"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Zap size={24} fill="white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Challenge Levels</div>
                    <div className="text-2xl font-black">500+</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="bg-slate-900 py-4 overflow-hidden whitespace-nowrap border-y-4 border-slate-200 rotate-[-1deg] scale-105 z-20 relative">
        <div className="flex gap-12 animate-marquee items-center">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="flex items-center gap-8 text-white font-display font-black text-2xl uppercase italic tracking-widest">
              <span>Room Puzzle: Slide Escape - Out Now</span>
              <Star fill="white" size={24} />
              <span>Games • Apps • Extensions</span>
              <Zap fill="white" size={24} />
              <span>Monik Studio</span>
              <Trophy fill="white" size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-6 bg-slate-50 rounded-[3rem] -rotate-3" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutUsImg}
                alt="Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-100 shadow-lg">
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                  <Rocket size={16} />
                  <span>Est. 2026</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 order-1 md:order-2">
            <div className="w-16 h-1 bg-slate-900 rounded-full" />
            <h2 className="text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
              WE CRAFT<br />DIGITAL EXPERIENCES
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Monik Studio is an independent development studio dedicated to crafting unique, high-quality games, mobile applications, and browser extensions. We believe in the power of technology to connect, challenge, and inspire.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-slate-200 transition-colors group">
                <div className="text-4xl font-display font-black text-slate-900 group-hover:text-slate-600 transition-colors">20+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">Projects Released</div>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-slate-200 transition-colors group">
                <div className="text-4xl font-display font-black text-slate-900 group-hover:text-slate-600 transition-colors">5M+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-2">Total Users</div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-8 border-t border-slate-100">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Powered By</div>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-2 font-black text-sm tracking-tighter">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <Layers size={18} />
                  </div>
                  UNITY
                </div>
                <div className="flex items-center gap-2 font-black text-sm tracking-tighter">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <Code2 size={18} />
                  </div>
                  UNREAL
                </div>
                <div className="flex items-center gap-2 font-black text-sm tracking-tighter">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <Gamepad2 size={18} />
                  </div>
                  GODOT
                </div>
                <div className="flex items-center gap-2 font-black text-sm tracking-tighter">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <Smartphone size={18} />
                  </div>
                  FLUTTER
                </div>
                <div className="flex items-center gap-2 font-black text-sm tracking-tighter">
                  <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                    <Dna size={18} />
                  </div>
                  REACT
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Games */}
      <section id="games" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.05]" />

        <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Our Portfolio</div>
              <h2 className="text-5xl font-display font-black tracking-tight text-slate-900">FEATURED PROJECTS</h2>
            </div>
            <p className="text-slate-500 font-bold max-w-xs">Explore our growing library of games, apps, and browser utilities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {otherGames.map((game, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100 flex flex-col group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 border border-slate-100">
                    {game.category}
                  </div>
                </div>
                <div className="p-10 space-y-4 flex-grow">
                  <h3 className="text-2xl font-display font-black text-slate-900">{game.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    {game.description}
                  </p>
                </div>
                <div className="p-10 pt-0 flex gap-3">
                  {game.links.play && (
                    <a href={game.links.play} className="flex-1 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:shadow-slate-200 group">
                      <GooglePlayIcon />
                      <span className="text-[10px] font-black uppercase tracking-widest">Google Play</span>
                    </a>
                  )}
                  {game.links.app && (
                    <a href={game.links.app} className="flex-1 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:shadow-slate-200 group">
                      <AppStoreIcon />
                      <span className="text-[10px] font-black uppercase tracking-widest">App Store</span>
                    </a>
                  )}
                  {game.links.chrome && (
                    <a href={game.links.chrome} className="flex-1 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm hover:shadow-lg hover:shadow-slate-200 group">
                      <Chrome size={20} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Chrome Extension</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 relative bg-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">
          <div className="text-center space-y-4">
            <div className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Expertise</div>
            <h2 className="text-5xl font-display font-black tracking-tight text-slate-900">OUR SERVICES</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border-2 border-slate-50 hover:border-slate-100 hover:bg-slate-50/30 transition-all group relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-slate-900/5 group-hover:text-slate-900/10 transition-colors">
                  {React.cloneElement(s.icon as React.ReactElement, { size: 120 })}
                </div>
                <div className="w-14 h-14 mb-8 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-slate-200">
                  {s.icon}
                </div>
                <h3 className="text-xl font-display font-black text-slate-900 mb-4">{s.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl shadow-slate-200">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 space-y-6"
            >
              <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tight">JOIN OUR COMMUNITY</h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium">
                Be the first to know about new releases, beta tests, and exclusive rewards. Join thousands of users worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="https://www.tiktok.com/@monikstudiogames" target="_blank" rel="noopener noreferrer" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                  <TikTokIcon />
                  Follow on TikTok
                </a>
                <a href="https://www.facebook.com/people/Monik-Studio/61584890277621/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-700 transition-all shadow-xl active:scale-95 flex items-center gap-3">
                  <Facebook size={20} />
                  Join Facebook
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 rounded-[4rem] mx-6 mb-12 overflow-hidden relative shadow-2xl shadow-slate-900/20">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-grid-pattern invert" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Contact Us</div>
              <h2 className="text-5xl font-display font-black tracking-tight text-white">LET'S BUILD<br />TOGETHER</h2>
            </div>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Have a project in mind or just want to say hi? We're always open to new collaborations and opportunities in the digital world.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-slate-800 group-hover:text-white transition-all border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Us</div>
                  <div className="font-bold text-slate-200 text-lg">contact@monikstudio.com</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-slate-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative rounded-[3rem] overflow-hidden border-4 border-white/10 shadow-2xl aspect-video md:aspect-square">
              <img
                src={contactUsImg}
                alt="Gaming Contact"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Joystick size={24} className="text-slate-200" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Ready to Play?</div>
                    <div className="text-xl font-black">GET IN TOUCH</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center space-y-2">
            <div className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Our Ecosystem</div>
            <h3 className="text-2xl font-display font-black text-slate-900">PARTNERS & PLATFORMS</h3>
          </div>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee-slow flex items-center gap-16 whitespace-nowrap py-4">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={p.logo} alt={p.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="text-slate-900 font-black text-sm tracking-widest uppercase">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
