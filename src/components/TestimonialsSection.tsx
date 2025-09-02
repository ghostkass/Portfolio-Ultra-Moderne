import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechFlow",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "OUMAR BA a transformé notre vision en une réalité numérique exceptionnelle. Son expertise technique et sa créativité ont dépassé toutes nos attentes. Un véritable magicien du code !",
    project: "Plateforme E-commerce AI"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "CTO, InnovateLab",
    company: "InnovateLab Inc.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Collaboration extraordinaire ! OUMAR allie parfaitement compétences techniques de pointe et sens artistique. Notre app mobile est maintenant la référence du secteur.",
    project: "Application Mobile Social"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Design Director, CreativeStudio",
    company: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Rarement vu quelqu'un maîtriser autant le design ET le développement. OUMAR a révolutionné notre workflow et créé des expériences utilisateur inoubliables.",
    project: "Dashboard Analytics Pro"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, StartupX",
    company: "StartupX Ventures",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "OUMAR a été notre partenaire stratégique depuis le premier jour. Grâce à lui, nous avons levé 2M€ en seed avec un prototype qui impressionne tous les investisseurs.",
    project: "Plateforme SaaS IA"
  },
  {
    id: 5,
    name: "Amelia Foster",
    role: "Product Manager, GameTech",
    company: "GameTech Studios",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Expertise technique redoutable et vision créative hors du commun. Notre jeu 3D web cartonne grâce au génie d'OUMAR. Un développeur de niveau mondial !",
    project: "Jeu Web 3D Immersif"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background complexe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]"></div>
      
      {/* Orbes décoratifs avec parallaxe */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-16 w-72 h-72 bg-[#8b5cf6] rounded-full blur-3xl opacity-10"
      ></motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl opacity-8"
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30">
              <span className="text-[#00d4ff] font-semibold">TÉMOIGNAGES</span>
            </div>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
            ILS ME FONT CONFIANCE
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez ce que mes clients pensent de notre collaboration 
            et des résultats extraordinaires que nous avons obtenus ensemble.
          </p>
        </motion.div>

        {/* Slider principal */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-6">
            <Button
              onClick={prevTestimonial}
              size="icon"
              className="w-16 h-16 rounded-full bg-[#1a1a2e]/80 border border-[#8b5cf6]/30 backdrop-blur-xl hover:bg-[#8b5cf6] hover:border-[#8b5cf6] text-[#00d4ff] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-6">
            <Button
              onClick={nextTestimonial}
              size="icon"
              className="w-16 h-16 rounded-full bg-[#1a1a2e]/80 border border-[#8b5cf6]/30 backdrop-blur-xl hover:bg-[#8b5cf6] hover:border-[#8b5cf6] text-[#00d4ff] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Contenu du témoignage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 15 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-[#1a1a2e]/60 border border-[#8b5cf6]/20 rounded-3xl p-12 backdrop-blur-xl relative overflow-hidden">
                {/* Effet de gradient animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-[#00d4ff]/5 rounded-3xl"></div>
                
                {/* Quote icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute top-8 left-8"
                >
                  <Quote className="h-16 w-16 text-[#8b5cf6]/30" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mb-8"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                      >
                        <Star className="h-8 w-8 text-[#ffd700] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial text */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl md:text-3xl text-center text-gray-200 leading-relaxed mb-12 font-light italic"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Client info */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center justify-center gap-6"
                  >
                    {/* Avatar avec effet glow */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-r from-[#8b5cf6] via-[#00d4ff] to-[#ff0080] animate-glow">
                        <ImageWithFallback
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      {/* Orbitals */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                        <div className="w-2 h-2 bg-[#ff0080] rounded-full absolute top-1/2 -right-1 transform -translate-y-1/2"></div>
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white mb-1">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[#00d4ff] font-semibold mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].company}
                      </p>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="mt-3 px-4 py-1 bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d4ff]/20 rounded-full border border-[#8b5cf6]/30"
                      >
                        <span className="text-sm text-[#8b5cf6] font-medium">
                          {testimonials[currentIndex].project}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicateurs de pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-3 mt-12"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] scale-125'
                    : 'bg-[#1a1a2e] border border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/30'
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Stats complémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "100%", label: "Clients Satisfaits", color: "#00d4ff" },
            { number: "48H", label: "Délai de Réponse Moyen", color: "#8b5cf6" },
            { number: "5★", label: "Note Moyenne", color: "#ffd700" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="text-center p-8 bg-[#1a1a2e]/40 rounded-2xl border border-[#8b5cf6]/20 backdrop-blur-xl"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-3"
                style={{ color: stat.color }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}