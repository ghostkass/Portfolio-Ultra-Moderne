import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('projects');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Gradient background animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#16213e] opacity-95">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/20 via-transparent to-[#00d4ff]/20 animate-rotate-gradient"></div>
      </div>

      {/* Orbes lumineuses flottantes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#ff0080] rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-[#00d4ff] rounded-full blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#8b5cf6] rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Avatar avec effet 3D */}
        <motion.div
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="mb-8 relative"
        >
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8b5cf6] via-[#00d4ff] to-[#ff0080] p-1 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0f]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="OUMAR BA - Développeur Fullstack & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Cercles orbitaux */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="w-2 h-2 bg-[#00d4ff] rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-[#ff0080] rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
              <div className="w-2 h-2 bg-[#8b5cf6] rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-2 h-2 bg-[#00ffff] rounded-full absolute top-1/2 -left-1 transform -translate-y-1/2"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Nom avec effet de frappe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black gradient-text animate-pulse-neon mb-4">
            OUMAR BA
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] mx-auto rounded-full"></div>
        </motion.div>

        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-[#00d4ff]">Développeur Fullstack</span> &{' '}
            <span className="text-[#ff0080]">Designer Créatif</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Je transforme les idées en expériences digitales extraordinaires.
            Spécialisé dans les technologies modernes et le design innovant.
          </p>
        </motion.div>

        {/* Boutons d'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mb-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] hover:from-[#ff0080] hover:to-[#8b5cf6] text-white border-0 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            <Mail className="mr-3 h-6 w-6" />
            HIRE ME
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-12 py-6 text-xl font-bold border-2 border-[#00d4ff] text-[#00d4ff] bg-transparent hover:bg-[#00d4ff] hover:text-[#0a0a0f] rounded-full transition-all duration-300 transform hover:scale-110"
          >
            <Download className="mr-3 h-6 w-6" />
            CV
          </Button>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-16"
        >
          {[
            { icon: Github, color: '#00d4ff', href: '#' },
            { icon: Linkedin, color: '#8b5cf6', href: '#' },
            { icon: Twitter, color: '#ff0080', href: '#' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.3, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full glass-effect flex items-center justify-center text-white hover:text-[#0a0a0f] transition-all duration-300"
              style={{
                '--hover-bg': social.color,
                background: `linear-gradient(45deg, ${social.color}20, transparent)`
              } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = social.color;
                e.currentTarget.style.boxShadow = `0 0 30px ${social.color}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `linear-gradient(45deg, ${social.color}20, transparent)`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <social.icon className="h-8 w-8" />
            </motion.a>
          ))}
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[#00d4ff]"
          >
            <p className="text-sm mb-2 font-medium">Scroll pour découvrir</p>
            <ChevronDown className="h-8 w-8 animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      {/* Effet de lumière qui suit la souris */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] transition-transform duration-1000 ease-out"
        style={{
          transform: 'translate(-50%, -50%)',
          left: '50%',
          top: '50%',
        }}
        id="mouse-follower"
      ></div>
    </section>
  );
}