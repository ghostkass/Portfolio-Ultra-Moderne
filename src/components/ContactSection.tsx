import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Message envoyé avec succès ! Je vous réponds dans les 24h.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", color: "#00d4ff", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", color: "#8b5cf6", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", color: "#ff0080", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", color: "#00ffff", label: "Instagram" }
  ];

  const contactInfo = [
    { icon: Mail, text: "contact@oumarba.dev", color: "#00d4ff" },
    { icon: Phone, text: "+221 78 255 81 71", color: "#8b5cf6" },
    { icon: MapPin, text: "Dakar, Sénégal", color: "#ff0080" }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background complexe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f]"></div>
      
      {/* Orbes animés */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-80 h-80 bg-[#8b5cf6] rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.05, 0.15],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#00d4ff] rounded-full blur-3xl"
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
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d4ff]/20 border border-[#8b5cf6]/30">
              <span className="text-[#8b5cf6] font-semibold">PARLONS PROJET</span>
            </div>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
            CONTACTEZ-MOI
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prêt à transformer votre vision en réalité digitale ? 
            Discutons de votre projet et créons ensemble quelque chose d'extraordinaire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1a1a2e]/60 border border-[#8b5cf6]/20 rounded-3xl p-8 backdrop-blur-xl relative overflow-hidden">
              {/* Effet de gradient animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-[#00d4ff]/5"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Lançons votre projet
                  </h3>
                  <p className="text-gray-300">
                    Remplissez ce formulaire et je vous réponds dans les 24h avec une proposition personnalisée.
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom *"
                        required
                        className="bg-[#0a0a0f]/50 border-[#8b5cf6]/30 text-white placeholder:text-gray-400 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 h-14 text-lg transition-all duration-300"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email *"
                        required
                        className="bg-[#0a0a0f]/50 border-[#8b5cf6]/30 text-white placeholder:text-gray-400 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 h-14 text-lg transition-all duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre projet *"
                      required
                      className="bg-[#0a0a0f]/50 border-[#8b5cf6]/30 text-white placeholder:text-gray-400 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 h-14 text-lg transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet en détail... *"
                      required
                      rows={6}
                      className="bg-[#0a0a0f]/50 border-[#8b5cf6]/30 text-white placeholder:text-gray-400 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 text-lg resize-none transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-16 text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] hover:from-[#ff0080] hover:to-[#8b5cf6] text-white border-0 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="flex items-center gap-3"
                        >
                          <Zap className="h-6 w-6" />
                          Envoi en cours...
                        </motion.div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <Send className="h-6 w-6" />
                          Envoyer le message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact rapide */}
            <div className="bg-[#1a1a2e]/60 border border-[#8b5cf6]/20 rounded-3xl p-8 backdrop-blur-xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-6"
              >
                Contact rapide
              </motion.h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon className="h-6 w-6" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-lg text-white font-semibold">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-[#1a1a2e]/60 border border-[#8b5cf6]/20 rounded-3xl p-8 backdrop-blur-xl">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-white mb-6"
              >
                Suivez-moi
              </motion.h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group"
                    style={{ 
                      backgroundColor: `${social.color}10`, 
                      border: `1px solid ${social.color}30`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${social.color}20`;
                      e.currentTarget.style.borderColor = `${social.color}60`;
                      e.currentTarget.style.boxShadow = `0 0 20px ${social.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = `${social.color}10`;
                      e.currentTarget.style.borderColor = `${social.color}30`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <social.icon className="h-6 w-6" style={{ color: social.color }} />
                    <span className="text-white font-semibold group-hover:text-gray-200 transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Call-to-action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gradient-to-br from-[#8b5cf6]/20 via-[#00d4ff]/10 to-[#ff0080]/20 rounded-3xl border border-[#8b5cf6]/30"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-4"
              >
                <Zap className="h-16 w-16 mx-auto text-[#00d4ff]" />
              </motion.div>
              <h4 className="text-2xl font-bold text-white mb-3">
                Prêt à collaborer ?
              </h4>
              <p className="text-gray-300 mb-6">
                Transformons votre vision en chef-d'œuvre digital !
              </p>
              <Button
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-[#ff0080] to-[#8b5cf6] hover:from-[#00d4ff] hover:to-[#ff0080] text-white border-0 rounded-full font-bold transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="mr-2 h-5 w-5" />
                Commencer maintenant
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}