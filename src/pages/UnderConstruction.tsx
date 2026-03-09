import { 
  Globe, 
  Twitter, 
  Youtube, 
  Facebook, 
  Pin, 
  Gamepad2,
  Construction
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function UnderConstruction() {
  const snsLinks = [
    { name: 'Website', url: 'https://monikstudio.com', icon: <Globe size={20} /> },
    { name: 'X', url: 'https://x.com/MonikStudio', icon: <Twitter size={20} /> },
    { name: 'Pinterest', url: 'https://www.pinterest.com/MonikStudioOfficial/', icon: <Pin size={20} /> },
    { name: 'Youtube', url: 'https://www.youtube.com/@MonikStudioOfficial', icon: <Youtube size={20} /> },
    { name: 'Itch.io', url: 'https://monikstudio.itch.io/', icon: <Gamepad2 size={20} /> },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Monik-Studio/61584890277621/', icon: <Facebook size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] font-sans selection:bg-black selection:text-white flex flex-col items-center justify-center p-6">
      {/* Background subtle grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <main className="relative z-10 max-w-2xl w-full text-center space-y-12">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <div className="w-48 h-48 flex items-center justify-center overflow-hidden rounded-full border border-neutral-100 shadow-sm">
               <img 
                src="https://yt3.googleusercontent.com/zvIml2BQ4ClXZ0AaZEBzF9H_cPG7-qhaBDsRKiH-c9VpeXFiuCaS27daGtRXPE5LbUskK1zBrw=s160-c-k-c0x00ffffff-no-rj" 
                alt="Monik Studio Logo" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-5xl font-bold tracking-tighter">Monik Studio</span>';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <h1 className="text-sm uppercase tracking-[0.3em] font-semibold text-neutral-400 flex items-center justify-center gap-2">
              <Construction size={14} className="animate-pulse" />
              Under Construction
            </h1>
            <p className="text-3xl md:text-4xl font-light tracking-tight text-neutral-800">
              Something creative is in the works.
            </p>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          <p className="text-neutral-500 leading-relaxed">
            We're currently building a new digital home for Monik Studio. 
            In the meantime, you can find us and our latest projects on our social channels.
          </p>
        </motion.div>

        {/* SNS Links */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          {snsLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-neutral-200 bg-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
              title={link.name}
            >
              <span className="text-neutral-600 group-hover:text-white transition-colors duration-300">
                {link.icon}
              </span>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] uppercase tracking-widest font-bold text-neutral-400 whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-8 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
        <div>&copy; {new Date().getFullYear()} Monik Studio. All Rights Reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-black transition-colors">Terms and Conditions</Link>
        </div>
      </footer>
    </div>
  );
}
