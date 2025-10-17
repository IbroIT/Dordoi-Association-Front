import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = [
    { id: 'all', label: t('partnersProjects.categories.all'), count: t('partnersProjects.stats.totalProjects') },
    { id: 'memorandums', label: t('partnersProjects.categories.memorandums'), icon: '📝' },
    { id: 'education', label: t('partnersProjects.categories.education'), icon: '🎓' },
    { id: 'investments', label: t('partnersProjects.categories.investments'), icon: '💼' },
    { id: 'infrastructure', label: t('partnersProjects.categories.infrastructure'), icon: '🏗️' },
    { id: 'technology', label: t('partnersProjects.categories.technology'), icon: '💻' }
  ];

  const stats = [
    { value: t('partnersProjects.stats.totalInvestment'), label: t('partnersProjects.stats.investmentLabel') },
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
    const partnerInfo = partnerLogos[project.partner];
    const colors = colorMap[partnerInfo.color];
    const statusInfo = statusConfig[project.status];

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`p-8 ${colors.light} rounded-t-2xl`}>
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${colors.medium} rounded-2xl flex items-center justify-center`}>
                  <span className="text-2xl">{partnerInfo.flag}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusInfo.text} bg-white`}>
                      {statusInfo.label}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors.text} bg-white`}>
                      {t(`partnersProjects.types.${project.category}`)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">{t('partnersProjects.details.projectOverview')}</h4>
                <p className="text-slate-700 leading-relaxed">{project.fullDescription}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{t('partnersProjects.details.projectDetails')}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-600">{t('partnersProjects.duration')}</span>
                      <span className="font-semibold">{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">{t('partnersProjects.investment')}</span>
                      <span className="font-semibold">{project.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">{t('partnersProjects.details.location')}</span>
                      <span className="font-semibold">{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">{t('partnersProjects.details.impact')}</span>
                      <span className="font-semibold">{project.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6">{t('partnersProjects.achievements')}</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {project.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl"
                >
                  <div className={`w-8 h-8 ${colors.medium} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-slate-700">{achievement}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-slate-200">
              <div className="flex items-center space-x-4">
                <a href={project.website} className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t('partnersProjects.details.visitWebsite')}
                </a>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600">{project.contact}</span>
              </div>
              <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors">
                {t('partnersProjects.details.learnMore')}
              </button>
            </div>
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

        {/* Statistics Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Filters and View Controls */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2">
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
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`${
            viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          } mb-16`}
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
                  className={`bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Header */}
                  <div className={`p-6 border-b border-slate-200 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className={`w-12 h-12 ${colors.medium} rounded-xl flex items-center justify-center group-hover:${colors.light} transition-colors duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span className="text-lg">{partnerInfo.flag}</span>
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{project.partner}</h3>
                          <span className={`text-xs font-medium ${colors.text}`}>
                            {t(`partnersProjects.types.${project.category}`)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.text} ${statusInfo.color} bg-opacity-10`}>
                          {statusInfo.label}
                        </span>
                        <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${statusInfo.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    </div>
                    
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

                  {/* Project Details */}
                  <div className={`p-6 ${viewMode === 'list' ? 'w-80 border-l border-slate-200' : ''}`}>
                    <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('partnersProjects.achievements')}
                    </h5>
                    <ul className="space-y-2 mb-4">
                      {project.achievements.slice(0, 2).map((achievement, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start text-slate-600 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className={`w-1.5 h-1.5 ${colors.dark} rounded-full mt-1.5 mr-2 flex-shrink-0`}></span>
                          <span className="line-clamp-2">{achievement}</span>
                        </motion.li>
                      ))}
                      {project.achievements.length > 2 && (
                        <li className="text-slate-500 text-sm">
                          +{project.achievements.length - 2} more achievements
                        </li>
                      )}
                    </ul>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-xs text-slate-500 mb-1">{t('partnersProjects.duration')}</div>
                        <div className="text-sm font-semibold text-slate-900">{project.duration}</div>
                      </motion.div>
                      <motion.div 
                        className="text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-xs text-slate-500 mb-1">{t('partnersProjects.investment')}</div>
                        <div className="text-sm font-semibold text-slate-900">{project.investment}</div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Accent Element */}
                  <div className={`h-1 ${colors.dark} w-full`}></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={itemVariants}
          className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('partnersProjects.cta.title')}
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('partnersProjects.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{t('partnersProjects.cta.becomePartner')}</span>
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{t('partnersProjects.cta.suggestProject')}</span>
              </motion.button>
            </div>
          </div>
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