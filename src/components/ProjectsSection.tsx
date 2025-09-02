import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "E-Commerce Futuriste",
    description: "Plateforme de vente en ligne avec IA intégrée, réalité augmentée et paiements crypto. Interface ultra-moderne avec animations fluides.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React", "Next.js", "TypeScript", "Stripe", "AR.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Dashboard Analytics Pro",
    description: "Tableau de bord avancé avec visualisations en temps réel, ML predictions et exports automatisés. Design system complet.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "App Mobile Social",
    description: "Réseau social nouvelle génération avec chat vocal spatial, stories AR et monétisation créateur intégrée.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Plateforme SaaS IA",
    description: "Solution complète d'automatisation avec IA conversationnelle, workflows intelligents et intégrations multi-plateformes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Angular", "Python", "TensorFlow", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Jeu Web 3D Immersif",
    description: "Expérience de jeu interactive en 3D avec physique réaliste, multijoueur temps réel et économie NFT intégrée.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    technologies: ["Three.js", "WebGL", "Socket.io", "Blockchain", "Solidity"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 6,
    title: "Portfolio Designer",
    description: "Vitrine créative interactive avec animations CSS3 avancées, parallaxe et optimisations performance maximales.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    technologies: ["Vanilla JS", "GSAP", "CSS3", "Webpack", "Figma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]"></div>
      
      {/* Orbes décoratifs */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-[#8b5cf6] rounded-full blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#00d4ff] rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
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
              <span className="text-[#00d4ff] font-semibold">MES CRÉATIONS</span>
            </div>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
            PROJETS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#ff0080] to-[#00d4ff] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une sélection de mes réalisations les plus innovantes, 
            alliant créativité technique et design d'exception.
          </p>
        </motion.div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="group relative bg-[#1a1a2e]/50 border-[#8b5cf6]/20 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#00d4ff]/50 hover:shadow-2xl hover:shadow-[#00d4ff]/20">
                {/* Badge featured */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute top-4 right-4 z-20"
                  >
                    <Badge className="bg-gradient-to-r from-[#ff0080] to-[#8b5cf6] text-white border-0 font-bold">
                      FEATURED
                    </Badge>
                  </motion.div>
                )}

                {/* Image avec overlay */}
                <div className="relative overflow-hidden h-64 group-hover:h-48 transition-all duration-500">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Actions overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#0a0a0f]/80 flex items-center justify-center gap-4 transition-opacity duration-300"
                  >
                    <Button
                      size="icon"
                      className="w-14 h-14 rounded-full bg-[#00d4ff] hover:bg-[#8b5cf6] text-[#0a0a0f] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Eye className="h-6 w-6" />
                    </Button>
                    <Button
                      size="icon"
                      className="w-14 h-14 rounded-full bg-[#ff0080] hover:bg-[#8b5cf6] text-white transition-all duration-300 hover:scale-110"
                    >
                      <Github className="h-6 w-6" />
                    </Button>
                    <Button
                      size="icon"
                      className="w-14 h-14 rounded-full bg-[#8b5cf6] hover:bg-[#00d4ff] text-white hover:text-[#0a0a0f] transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </Button>
                  </motion.div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-[#8b5cf6]/20 to-[#00d4ff]/20 text-[#00d4ff] rounded-full border border-[#8b5cf6]/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <Button
                      className="flex-1 bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] hover:from-[#ff0080] hover:to-[#8b5cf6] text-white border-0 font-semibold transition-all duration-300"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Voir le projet
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0a0f] transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Effet de glow au hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/10 via-[#00d4ff]/10 to-[#ff0080]/10 blur-xl"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bouton voir plus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-[#ff0080] to-[#8b5cf6] hover:from-[#00d4ff] hover:to-[#ff0080] text-white border-0 rounded-full transition-all duration-300 transform hover:scale-110"
          >
            VOIR TOUS MES PROJETS
          </Button>
        </motion.div>
      </div>
    </section>
  );
}