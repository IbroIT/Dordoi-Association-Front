import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesCulture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('culture.categories.all') },
    { id: 'events', label: t('culture.categories.events') },
    { id: 'heritage', label: t('culture.categories.heritage') },
    { id: 'arts', label: t('culture.categories.arts') },
    { id: 'publications', label: t('culture.categories.publications') }
  ];

  const projects = [
    {
      id: 1,
      title: t('culture.projects.festival.title'),
      description: t('culture.projects.festival.description'),
      category: 'events',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.festival.stats'),
      year: '2024',
      color: 'blue'
    },
    {
      id: 2,
      title: t('culture.projects.museum.title'),
      description: t('culture.projects.museum.description'),
      category: 'heritage',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.museum.stats'),
      year: '2023',
      color: 'green'
    },
    {
      id: 3,
      title: t('culture.projects.gallery.title'),
      description: t('culture.projects.gallery.description'),
      category: 'arts',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.gallery.stats'),
      year: '2024',
      color: 'purple'
    },
    {
      id: 4,
      title: t('culture.projects.library.title'),
      description: t('culture.projects.library.description'),
      category: 'publications',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.library.stats'),
      year: '2023',
      color: 'orange'
    },
    {
      id: 5,
      title: t('culture.projects.theater.title'),
      description: t('culture.projects.theater.description'),
      category: 'arts',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.theater.stats'),
      year: '2024',
      color: 'red'
    },
    {
      id: 6,
      title: t('culture.projects.folklore.title'),
      description: t('culture.projects.folklore.description'),
      category: 'heritage',
      image: '/api/placeholder/400/300',
      stats: t('culture.projects.folklore.stats'),
      year: '2023',
      color: 'cyan'
    }
  ];

  const stats = [
    {
      value: t('culture.stats.events.value'),
      label: t('culture.stats.events.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      value: t('culture.stats.participants.value'),
      label: t('culture.stats.participants.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: t('culture.stats.projects.value'),
      label: t('culture.stats.projects.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      value: t('culture.stats.regions.value'),
      label: t('culture.stats.regions.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    red: { light: 'bg-red-50', dark: 'bg-red-600', text: 'text-red-600', border: 'border-red-200' },
    cyan: { light: 'bg-cyan-50', dark: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200' }
  };

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

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleSupportProject = (projectId) => {
    // Логика поддержки проекта
    console.log('Support project:', projectId);
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6"
          >
            <span className="text-purple-600 text-sm font-semibold">{t('culture.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('culture.title')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('culture.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('culture.lead')}
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <div className="text-purple-600 group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Фильтр категорий */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Сетка проектов */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => {
              const colors = colorMap[project.color];
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  {/* Изображение проекта */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <div className={colors.text}>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-purple-600 font-semibold">{t('culture.imagePlaceholder')}</p>
                      </div>
                    </div>
                    
                    {/* Год проекта */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Статистика */}
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-slate-700 text-sm font-medium rounded-full">
                        {project.stats}
                      </span>
                    </div>
                  </div>

                  {/* Контент проекта */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                      
                      <motion.button
                        onClick={() => handleSupportProject(project.id)}
                        className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <span>{t('culture.learnMore')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Фоновые элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {t('culture.cta.title')}
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {t('culture.cta.description')}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('culture.cta.contact')}</span>
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                  <span>{t('culture.cta.brochure')}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesCulture;