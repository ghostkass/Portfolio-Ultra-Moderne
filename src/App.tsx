import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Toaster } from './components/ui/sonner';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  // Effet de lumière qui suit la souris
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const follower = document.getElementById('mouse-follower');
      if (follower) {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      }

      // Effet de parallaxe léger sur les orbes
      const orbs = document.querySelectorAll('[class*="animate-float"]');
      orbs.forEach((orb, index) => {
        const rect = orb.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.02;
        const deltaY = (e.clientY - centerY) * 0.02;
        
        (orb as HTMLElement).style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Navigation fluide
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Background avec particules */}
      <ParticleBackground />
      
      {/* Navigation fixe */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-[#8b5cf6]/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-2xl font-black gradient-text">OUMAR BA</span>
            </motion.div>

            {/* Menu navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { label: 'Accueil', id: 'hero' },
                { label: 'Projets', id: 'projects' },
                { label: 'Compétences', id: 'skills' },
                { label: 'Témoignages', id: 'testimonials' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, color: '#00d4ff' }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-[#00d4ff] font-semibold transition-all duration-300 relative group"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Bouton CTA */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] text-white rounded-full font-semibold hover:from-[#ff0080] hover:to-[#8b5cf6] transition-all duration-300"
            >
              Discutons !
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Contenu principal */}
      <main>
        {/* Hero Section */}
        <div id="hero">
          <HeroSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <ProjectsSection />
        </div>

        {/* Skills Section */}
        <div id="skills">
          <SkillsSection />
        </div>

        {/* Testimonials Section */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative py-12 bg-gradient-to-t from-[#0a0a0f] to-[#1a1a2e] border-t border-[#8b5cf6]/20"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mb-6"
          >
            <span className="text-3xl font-black gradient-text">OUMAR BA</span>
          </motion.div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Développeur Fullstack & Designer Créatif passionné par l'innovation 
            et l'excellence technologique. Transformons ensemble vos idées en réalité digitale.
          </p>
          
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
            <span>© 2025 OUMAR BA</span>
            <span>•</span>
            <span>Tous droits réservés</span>
            <span>•</span>
            <span>Fait avec ❤️ et beaucoup de ☕</span>
          </div>
        </div>

        {/* Orbes décoratifs */}
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-[#8b5cf6] rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[#00d4ff] rounded-full blur-2xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      </motion.footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "-100px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] rounded-full flex items-center justify-center text-white hover:from-[#ff0080] hover:to-[#8b5cf6] transition-all duration-300 shadow-lg z-40"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>

      {/* Toast notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#ffffff',
            border: '1px solid #8b5cf6',
          },
        }}
      />
    </div>
  );
}