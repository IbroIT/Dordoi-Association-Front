import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('partnersProjects.categories.all') },
    { id: 'memorandums', label: t('partnersProjects.categories.memorandums') },
    { id: 'education', label: t('partnersProjects.categories.education') },
    { id: 'investments', label: t('partnersProjects.categories.investments') }
  ];

  const projects = [
    {
      id: 1,
      title: t('partnersProjects.projects.0.title'),
      partner: 'Turkey',
      category: 'memorandums',
      description: t('partnersProjects.projects.0.description'),
      achievements: [
        t('partnersProjects.projects.0.achievements.0'),
        t('partnersProjects.projects.0.achievements.1'),
        t('partnersProjects.projects.0.achievements.2')
      ],
      duration: t('partnersProjects.projects.0.duration'),
      investment: t('partnersProjects.projects.0.investment')
    },
    {
      id: 2,
      title: t('partnersProjects.projects.1.title'),
      partner: 'China',
      category: 'investments',
      description: t('partnersProjects.projects.1.description'),
      achievements: [
        t('partnersProjects.projects.1.achievements.0'),
        t('partnersProjects.projects.1.achievements.1'),
        t('partnersProjects.projects.1.achievements.2')
      ],
      duration: t('partnersProjects.projects.1.duration'),
      investment: t('partnersProjects.projects.1.investment')
    },
    {
      id: 3,
      title: t('partnersProjects.projects.2.title'),
      partner: 'GIZ',
      category: 'education',
      description: t('partnersProjects.projects.2.description'),
      achievements: [
        t('partnersProjects.projects.2.achievements.0'),
        t('partnersProjects.projects.2.achievements.1'),
        t('partnersProjects.projects.2.achievements.2')
      ],
      duration: t('partnersProjects.projects.2.duration'),
      investment: t('partnersProjects.projects.2.investment')
    },
    {
      id: 4,
      title: t('partnersProjects.projects.3.title'),
      partner: 'KOICA',
      category: 'education',
      description: t('partnersProjects.projects.3.description'),
      achievements: [
        t('partnersProjects.projects.3.achievements.0'),
        t('partnersProjects.projects.3.achievements.1'),
        t('partnersProjects.projects.3.achievements.2')
      ],
      duration: t('partnersProjects.projects.3.duration'),
      investment: t('partnersProjects.projects.3.investment')
    },
    {
      id: 5,
      title: t('partnersProjects.projects.4.title'),
      partner: 'USAID',
      category: 'investments',
      description: t('partnersProjects.projects.4.description'),
      achievements: [
        t('partnersProjects.projects.4.achievements.0'),
        t('partnersProjects.projects.4.achievements.1'),
        t('partnersProjects.projects.4.achievements.2')
      ],
      duration: t('partnersProjects.projects.4.duration'),
      investment: t('partnersProjects.projects.4.investment')
    },
    {
      id: 6,
      title: t('partnersProjects.projects.5.title'),
      partner: 'Turkey',
      category: 'education',
      description: t('partnersProjects.projects.5.description'),
      achievements: [
        t('partnersProjects.projects.5.achievements.0'),
        t('partnersProjects.projects.5.achievements.1'),
        t('partnersProjects.projects.5.achievements.2')
      ],
      duration: t('partnersProjects.projects.5.duration'),
      investment: t('partnersProjects.projects.5.investment')
    }
  ];

  const partnerLogos = {
    Turkey: {
      color: 'red',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    China: {
      color: 'yellow',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    GIZ: {
      color: 'blue',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    KOICA: {
      color: 'green',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    USAID: {
      color: 'purple',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  };

  const colorMap = {
    red: { light: 'bg-red-50', medium: 'bg-red-100', dark: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' },
    yellow: { light: 'bg-yellow-50', medium: 'bg-yellow-100', dark: 'bg-yellow-500', text: 'text-yellow-600', border: 'border-yellow-200' },
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' }
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

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Субтлный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
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
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-6"
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

        {/* Фильтры по категориям */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Сетка проектов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project) => {
            const partnerInfo = partnerLogos[project.partner];
            const colors = colorMap[partnerInfo.color];
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                whileHover={{ y: -5 }}
              >
                {/* Заголовок и партнер */}
                <div className="p-6 border-b border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div 
                        className={`w-12 h-12 ${colors.medium} rounded-xl flex items-center justify-center mr-3 group-hover:${colors.light} transition-colors duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className={colors.text}>
                          {partnerInfo.icon}
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{project.partner}</h3>
                        <span className={`text-xs font-medium ${colors.text}`}>
                          {project.category === 'memorandums' && t('partnersProjects.types.memorandums')}
                          {project.category === 'education' && t('partnersProjects.types.education')}
                          {project.category === 'investments' && t('partnersProjects.types.investments')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <motion.p 
                    className="text-slate-600 leading-relaxed text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {project.description}
                  </motion.p>
                </div>

                {/* Достижения */}
                <div className="p-6">
                  <h5 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('partnersProjects.achievements')}
                  </h5>
                  <ul className="space-y-2 mb-4">
                    {project.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start text-slate-600 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className={`w-1.5 h-1.5 ${colors.dark} rounded-full mt-1.5 mr-2 flex-shrink-0`}></span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Детали проекта */}
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

                {/* Акцентный элемент */}
                <div className={`h-1 ${colors.dark} w-full`}></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t('partnersProjects.cta.title')}
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('partnersProjects.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>{t('partnersProjects.cta.becomePartner')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('partnersProjects.cta.suggestProject')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersProjects;