import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu,
  Zap,
  Layers,
  GitBranch,
  Cloud
} from 'lucide-react';
import { Progress } from './ui/progress';

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "#00d4ff",
    skills: [
      { name: "React / Next.js", level: 95, icon: "⚛️" },
      { name: "Vue.js / Nuxt", level: 90, icon: "💚" },
      { name: "TypeScript", level: 92, icon: "🔷" },
      { name: "Tailwind CSS", level: 97, icon: "🎨" },
      { name: "Three.js / WebGL", level: 85, icon: "🎮" },
    ]
  },
  {
    title: "Backend",
    icon: Database,
    color: "#8b5cf6",
    skills: [
      { name: "Node.js / Express", level: 93, icon: "🟢" },
      { name: "Python / FastAPI", level: 88, icon: "🐍" },
      { name: "PostgreSQL / MongoDB", level: 90, icon: "🗄️" },
      { name: "GraphQL / REST", level: 92, icon: "📡" },
      { name: "Redis / Docker", level: 87, icon: "🐳" },
    ]
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "#ff0080",
    skills: [
      { name: "React Native", level: 89, icon: "📱" },
      { name: "Flutter", level: 82, icon: "🔷" },
      { name: "PWA Development", level: 94, icon: "📲" },
      { name: "App Store Deploy", level: 85, icon: "🚀" },
      { name: "Push Notifications", level: 88, icon: "🔔" },
    ]
  },
  {
    title: "Design",
    icon: Palette,
    color: "#00ffff",
    skills: [
      { name: "UI/UX Design", level: 93, icon: "🎨" },
      { name: "Figma / Adobe XD", level: 96, icon: "🎭" },
      { name: "Motion Design", level: 87, icon: "🎬" },
      { name: "Brand Identity", level: 84, icon: "🏷️" },
      { name: "Prototyping", level: 91, icon: "🔄" },
    ]
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "#39ff14",
    skills: [
      { name: "AWS / GCP / Azure", level: 86, icon: "☁️" },
      { name: "Docker / Kubernetes", level: 83, icon: "🐳" },
      { name: "CI/CD Pipelines", level: 88, icon: "🔄" },
      { name: "Monitoring", level: 85, icon: "📊" },
      { name: "Security", level: 82, icon: "🔒" },
    ]
  },
  {
    title: "Tools",
    icon: Cpu,
    color: "#ffd700",
    skills: [
      { name: "Git / GitHub", level: 97, icon: "🌿" },
      { name: "VS Code / Vim", level: 95, icon: "💻" },
      { name: "Webpack / Vite", level: 89, icon: "📦" },
      { name: "Jest / Cypress", level: 87, icon: "🧪" },
      { name: "Postman / Insomnia", level: 92, icon: "📮" },
    ]
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f23] to-[#1a1a2e]"></div>
      
      {/* Orbes animés */}
      <div className="absolute top-20 right-20 w-48 h-48 bg-[#ff0080] rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#00d4ff] rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>

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
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#ff0080]/20 to-[#8b5cf6]/20 border border-[#ff0080]/30">
              <span className="text-[#ff0080] font-semibold">MES EXPERTISES</span>
            </div>
          </motion.div>
          
          <h2 className="text-6xl md:text-7xl font-black gradient-text mb-6">
            COMPÉTENCES
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8b5cf6] to-[#ff0080] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Maîtrise complète de l'écosystème technologique moderne, 
            du design à la production en passant par l'optimisation.
          </p>
        </motion.div>

        {/* Navigation des catégories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-[#8b5cf6] to-[#00d4ff] text-white shadow-lg shadow-[#8b5cf6]/30'
                  : 'bg-[#1a1a2e]/50 text-gray-300 hover:bg-[#1a1a2e] border border-[#8b5cf6]/20'
              }`}
            >
              <category.icon 
                className="h-5 w-5" 
                style={{ color: activeCategory === index ? 'white' : category.color }}
              />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des compétences */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-[#1a1a2e]/50 border border-[#8b5cf6]/20 rounded-xl p-6 backdrop-blur-xl hover:border-[#00d4ff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00d4ff]/20">
                {/* En-tête de la compétence */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.span
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      className="text-2xl"
                    >
                      {skill.icon}
                    </motion.span>
                    <h4 className="text-lg font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="text-2xl font-bold gradient-text"
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Barre de progression */}
                <div className="relative">
                  <div className="h-3 bg-[#0a0a0f] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${skillCategories[activeCategory].color}40, ${skillCategories[activeCategory].color})`
                      }}
                    >
                      {/* Effet de brillance */}
                      <motion.div
                        animate={{ x: [-100, 300] }}
                        transition={{ delay: index * 0.1 + 1.5, duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        style={{ width: '100px' }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Points de niveau */}
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: skill.level > i * 20 ? 1 : 0.3 }}
                        transition={{ delay: index * 0.1 + 0.7 + i * 0.1 }}
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: skill.level > i * 20 ? skillCategories[activeCategory].color : '#333'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Indicateur de niveau */}
                <div className="mt-3 text-sm text-gray-400">
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Avancé' : skill.level >= 70 ? 'Intermédiaire' : 'Débutant'}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistiques globales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Projets Réalisés", icon: Code2, color: "#00d4ff" },
            { number: "5+", label: "Années d'Expérience", icon: Zap, color: "#8b5cf6" },
            { number: "20+", label: "Technologies Maîtrisées", icon: Layers, color: "#ff0080" },
            { number: "100%", label: "Satisfaction Client", icon: GitBranch, color: "#00ffff" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                className="w-20 h-20 mx-auto mb-4 rounded-full glass-effect flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
                style={{ '--hover-shadow': `${stat.color}50` } as React.CSSProperties}
              >
                <stat.icon className="h-10 w-10" style={{ color: stat.color }} />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-4xl font-black gradient-text mb-2"
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}