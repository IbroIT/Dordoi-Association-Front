import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('charity');

  const tabs = [
    { id: 'charity', label: t('social.tabs.charity') },
    { id: 'religious', label: t('social.tabs.religious') },
    { id: 'regions', label: t('social.tabs.regions') }
  ];

  const charityProjects = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      category: t('social.charity.projects.0.category'),
      amount: t('social.charity.projects.0.amount'),
      description: t('social.charity.projects.0.description'),
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
      ),
      category: t('social.charity.projects.1.category'),
      amount: t('social.charity.projects.1.amount'),
      description: t('social.charity.projects.1.description'),
      color: 'green'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      category: t('social.charity.projects.2.category'),
      amount: t('social.charity.projects.2.amount'),
      description: t('social.charity.projects.2.description'),
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      category: t('social.charity.projects.3.category'),
      amount: t('social.charity.projects.3.amount'),
      description: t('social.charity.projects.3.description'),
      color: 'orange'
    }
  ];

  const religiousProjects = [
    {
      type: t('social.religious.projects.0.type'),
      count: t('social.religious.projects.0.count'),
      investment: t('social.religious.projects.0.investment'),
      description: t('social.religious.projects.0.description')
    },
    {
      type: t('social.religious.projects.1.type'),
      count: t('social.religious.projects.1.count'),
      investment: t('social.religious.projects.1.investment'),
      description: t('social.religious.projects.1.description')
    },
    {
      type: t('social.religious.projects.2.type'),
      count: t('social.religious.projects.2.count'),
      investment: t('social.religious.projects.2.investment'),
      description: t('social.religious.projects.2.description')
    }
  ];

  const regionAid = [
    {
      region: t('social.regions.aid.0.region'),
      assistance: t('social.regions.aid.0.assistance'),
      amount: t('social.regions.aid.0.amount'),
      description: t('social.regions.aid.0.description')
    },
    {
      region: t('social.regions.aid.1.region'),
      assistance: t('social.regions.aid.1.assistance'),
      amount: t('social.regions.aid.1.amount'),
      description: t('social.regions.aid.1.description')
    },
    {
      region: t('social.regions.aid.2.region'),
      assistance: t('social.regions.aid.2.assistance'),
      amount: t('social.regions.aid.2.amount'),
      description: t('social.regions.aid.2.description')
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { light: 'bg-orange-50', medium: 'bg-orange-100', dark: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' }
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
          className="absolute top-10 left-5 w-32 h-32 bg-indigo-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-teal-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-amber-200 rounded-full blur-2xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 mb-6"
          >
            <span className="text-indigo-600 text-sm font-semibold">{t('social.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('social.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('social.subtitle')}
          </motion.p>
        </motion.div>

        {/* Табы для переключения между разделами */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Контент табов */}
        <div className="mb-16">
          {/* Благотворительность */}
          {activeTab === 'charity' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Основная статистика */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('social.charity.title')}</h3>
                    <p className="text-indigo-50 leading-relaxed">
                      {t('social.charity.description')}
                    </p>
                  </div>
                  <motion.div 
                    className="bg-white/20 rounded-xl p-6 text-center backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold mb-2">{t('social.charity.totalAmount')}</div>
                    <div className="text-indigo-100">{t('social.charity.period')}</div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Проекты благотворительности */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {charityProjects.map((project, index) => {
                  const colors = colorMap[project.color];
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className={`w-12 h-12 ${colors.medium} rounded-xl flex items-center justify-center mr-3 group-hover:${colors.light} transition-colors duration-300`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <div className={colors.text}>
                            {project.icon}
                          </div>
                        </motion.div>
                        <h4 className="text-lg font-bold text-slate-900">{project.category}</h4>
                      </div>
                      
                      <motion.p 
                        className="text-slate-600 mb-4 text-sm leading-relaxed"
                        whileHover={{ x: 3 }}
                      >
                        {project.description}
                      </motion.p>
                      
                      <motion.div 
                        className={`${colors.light} rounded-lg p-3 border ${colors.border}`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className={`${colors.text} font-semibold text-sm`}>{project.amount}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Духовные проекты */}
          {activeTab === 'religious' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                variants={cardVariants}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-slate-900">{t('social.religious.title')}</h3>
                  
                  <motion.p 
                    className="text-lg text-slate-700 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    {t('social.religious.description')}
                  </motion.p>

                  <motion.div
                    variants={cardVariants}
                    className="bg-amber-50 rounded-2xl p-6 border border-amber-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{t('social.religious.investment.title')}</h4>
                    </div>
                    <p className="text-2xl font-bold text-amber-700">{t('social.religious.investment.amount')}</p>
                    <p className="text-slate-600 text-sm mt-2">{t('social.religious.investment.description')}</p>
                  </motion.div>
                </div>

                <motion.div
                  variants={cardVariants}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <p className="text-amber-600 font-semibold">{t('social.religious.imagePlaceholder')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {religiousProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{project.type}</h4>
                    <div className="text-2xl font-bold text-teal-600 mb-2">{project.count}</div>
                    <div className="bg-teal-50 rounded-lg p-2 mb-3">
                      <p className="text-teal-700 text-sm font-medium">{project.investment}</p>
                    </div>
                    <p className="text-slate-600 text-sm">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Помощь регионам */}
          {activeTab === 'regions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('social.regions.title')}</h3>
                    <p className="text-teal-50 leading-relaxed">
                      {t('social.regions.description')}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('social.regions.humanitarianAid')}</div>
                      <div className="text-teal-100 text-sm">{t('social.regions.humanitarianLabel')}</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('social.regions.kindergartenCost')}</div>
                      <div className="text-teal-100 text-sm">{t('social.regions.kindergartenLabel')}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {regionAid.map((aid, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{aid.region}</h4>
                    </div>
                    
                    <motion.p 
                      className="text-slate-600 mb-3 text-sm"
                      whileHover={{ x: 3 }}
                    >
                      {aid.description}
                    </motion.p>
                    
                    <div className="space-y-2">
                      <div className="bg-green-50 rounded-lg p-3">
                        <p className="text-green-700 text-sm font-medium">{aid.assistance}</p>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-3">
                        <p className="text-orange-700 text-sm font-medium">{aid.amount}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t('social.cta.title')}
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('social.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{t('social.cta.donateButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>{t('social.cta.volunteerButton')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSocial;