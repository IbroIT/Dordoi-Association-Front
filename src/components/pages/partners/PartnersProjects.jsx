import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // SVG иконки для категорий
  const categoryIcons = {
    memorandums: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    education: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    investments: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    infrastructure: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    technology: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  };

  const categories = [
    { id: 'all', label: t('partnersProjects.categories.all'), count: t('partnersProjects.stats.totalProjects') },
    { id: 'memorandums', label: t('partnersProjects.categories.memorandums'), icon: categoryIcons.memorandums },
    { id: 'education', label: t('partnersProjects.categories.education'), icon: categoryIcons.education },
    { id: 'investments', label: t('partnersProjects.categories.investments'), icon: categoryIcons.investments },
    { id: 'infrastructure', label: t('partnersProjects.categories.infrastructure'), icon: categoryIcons.infrastructure },
    { id: 'technology', label: t('partnersProjects.categories.technology'), icon: categoryIcons.technology }
  ];

  const stats = [
    { value: t('partnersProjects.stats.countries'), label: t('partnersProjects.stats.partnerCountries') },
    { value: t('partnersProjects.stats.jobsCreated'), label: t('partnersProjects.stats.jobsLabel') },
    { value: t('partnersProjects.stats.successRate'), label: t('partnersProjects.stats.successLabel') }
  ];

  const projects = [
    {
      id: 1,
      title: t('partnersProjects.projects.0.title'),
      partner: 'Turkey',
      category: 'memorandums',
      status: 'completed',
      progress: 100,
      image: 'https://via.placeholder.com/300x200?text=Turkey+Project',
      description: t('partnersProjects.projects.0.description'),
      fullDescription: t('partnersProjects.projects.0.fullDescription'),
      achievements: [
        t('partnersProjects.projects.0.achievements.0'),
        t('partnersProjects.projects.0.achievements.1'),
        t('partnersProjects.projects.0.achievements.2')
      ],
      duration: t('partnersProjects.projects.0.duration'),
      investment: t('partnersProjects.projects.0.investment'),
      location: t('partnersProjects.projects.0.location'),
      impact: t('partnersProjects.projects.0.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.0.contact')
    },
    {
      id: 2,
      title: t('partnersProjects.projects.1.title'),
      partner: 'China',
      category: 'investments',
      status: 'ongoing',
      progress: 75,
      image: 'https://via.placeholder.com/300x200?text=China+Project',
      description: t('partnersProjects.projects.1.description'),
      fullDescription: t('partnersProjects.projects.1.fullDescription'),
      achievements: [
        t('partnersProjects.projects.1.achievements.0'),
        t('partnersProjects.projects.1.achievements.1'),
        t('partnersProjects.projects.1.achievements.2')
      ],
      duration: t('partnersProjects.projects.1.duration'),
      investment: t('partnersProjects.projects.1.investment'),
      location: t('partnersProjects.projects.1.location'),
      impact: t('partnersProjects.projects.1.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.1.contact')
    },
    {
      id: 3,
      title: t('partnersProjects.projects.2.title'),
      partner: 'GIZ',
      category: 'education',
      status: 'ongoing',
      progress: 60,
      image: 'https://via.placeholder.com/300x200?text=GIZ+Project',
      description: t('partnersProjects.projects.2.description'),
      fullDescription: t('partnersProjects.projects.2.fullDescription'),
      achievements: [
        t('partnersProjects.projects.2.achievements.0'),
        t('partnersProjects.projects.2.achievements.1'),
        t('partnersProjects.projects.2.achievements.2')
      ],
      duration: t('partnersProjects.projects.2.duration'),
      investment: t('partnersProjects.projects.2.investment'),
      location: t('partnersProjects.projects.2.location'),
      impact: t('partnersProjects.projects.2.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.2.contact')
    },
    {
      id: 4,
      title: t('partnersProjects.projects.3.title'),
      partner: 'KOICA',
      category: 'education',
      status: 'upcoming',
      progress: 10,
      image: 'https://via.placeholder.com/300x200?text=KOICA+Project',
      description: t('partnersProjects.projects.3.description'),
      fullDescription: t('partnersProjects.projects.3.fullDescription'),
      achievements: [
        t('partnersProjects.projects.3.achievements.0'),
        t('partnersProjects.projects.3.achievements.1'),
        t('partnersProjects.projects.3.achievements.2')
      ],
      duration: t('partnersProjects.projects.3.duration'),
      investment: t('partnersProjects.projects.3.investment'),
      location: t('partnersProjects.projects.3.location'),
      impact: t('partnersProjects.projects.3.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.3.contact')
    },
    {
      id: 5,
      title: t('partnersProjects.projects.4.title'),
      partner: 'USAID',
      category: 'technology',
      status: 'completed',
      progress: 100,
      image: 'https://via.placeholder.com/300x200?text=USAID+Project',
      description: t('partnersProjects.projects.4.description'),
      fullDescription: t('partnersProjects.projects.4.fullDescription'),
      achievements: [
        t('partnersProjects.projects.4.achievements.0'),
        t('partnersProjects.projects.4.achievements.1'),
        t('partnersProjects.projects.4.achievements.2')
      ],
      duration: t('partnersProjects.projects.4.duration'),
      investment: t('partnersProjects.projects.4.investment'),
      location: t('partnersProjects.projects.4.location'),
      impact: t('partnersProjects.projects.4.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.4.contact')
    },
    {
      id: 6,
      title: t('partnersProjects.projects.5.title'),
      partner: 'Turkey',
      category: 'infrastructure',
      status: 'ongoing',
      progress: 45,
      image: 'https://via.placeholder.com/300x200?text=Turkey+Infra+Project',
      description: t('partnersProjects.projects.5.description'),
      fullDescription: t('partnersProjects.projects.5.fullDescription'),
      achievements: [
        t('partnersProjects.projects.5.achievements.0'),
        t('partnersProjects.projects.5.achievements.1'),
        t('partnersProjects.projects.5.achievements.2')
      ],
      duration: t('partnersProjects.projects.5.duration'),
      investment: t('partnersProjects.projects.5.investment'),
      location: t('partnersProjects.projects.5.location'),
      impact: t('partnersProjects.projects.5.impact'),
      website: 'https://example.com',
      contact: t('partnersProjects.projects.5.contact')
    }
  ];

  const partnerLogos = {
    Turkey: {
      color: 'red',
      flag: '🇹🇷',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    China: {
      color: 'yellow',
      flag: '🇨🇳',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    GIZ: {
      color: 'blue',
      flag: '🇩🇪',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    KOICA: {
      color: 'green',
      flag: '🇰🇷',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    USAID: {
      color: 'purple',
      flag: '🇺🇸',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  };

  const colorMap = {
    red: { light: 'bg-red-50', medium: 'bg-red-100', dark: 'bg-red-500', text: 'text-red-600', border: 'border-red-200', gradient: 'from-red-500 to-red-600' },
    yellow: { light: 'bg-yellow-50', medium: 'bg-yellow-100', dark: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200', gradient: 'from-yellow-500 to-yellow-600' },
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' }
  };

  const statusConfig = {
    completed: { label: t('partnersProjects.status.completed'), color: 'bg-emerald-500', text: 'text-emerald-600' },
    ongoing: { label: t('partnersProjects.status.ongoing'), color: 'bg-blue-500', text: 'text-blue-600' },
    upcoming: { label: t('partnersProjects.status.upcoming'), color: 'bg-amber-500', text: 'text-amber-600' }
  };

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            <p className="text-slate-700 leading-relaxed">{project.description}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Enhanced background with gradients */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-amber-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-emerald-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
          className="absolute top-2/3 left-1/4 w-28 h-28 bg-purple-200 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-50 to-emerald-50 border border-amber-200 mb-6"
          >
            <span className="text-amber-600 text-sm font-semibold">{t('partnersProjects.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('partnersProjects.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('partnersProjects.subtitle')}
          </motion.p>
        </motion.div>

        {/* Enhanced Filters */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
                {category.count && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    isActive ? 'bg-white text-amber-600' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {category.count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const partnerInfo = partnerLogos[project.partner];
              const colors = colorMap[partnerInfo.color];
              const statusInfo = statusConfig[project.status];

              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  {/* Project Header */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h4>
                    
                    <motion.p 
                      className="text-slate-600 leading-relaxed text-sm line-clamp-3"
                      whileHover={{ x: 3 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  {/* Accent Element */}
                  <div className={`h-1 ${colors.dark} w-full`}></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PartnersProjects;