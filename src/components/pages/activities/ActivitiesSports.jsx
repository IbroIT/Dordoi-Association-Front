import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesSports = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dordoi');

  const tabs = [
    { id: 'dordoi', label: t('sports.tabs.dordoi') },
    { id: 'infrastructure', label: t('sports.tabs.infrastructure') },
    { id: 'cinema', label: t('sports.tabs.cinema') }
  ];

  const stadiums = [
    {
      name: t('sports.infrastructure.stadiums.0.name'),
      capacity: t('sports.infrastructure.stadiums.0.capacity'),
      features: t('sports.infrastructure.stadiums.0.features')
    },
    {
      name: t('sports.infrastructure.stadiums.1.name'),
      capacity: t('sports.infrastructure.stadiums.1.capacity'),
      features: t('sports.infrastructure.stadiums.1.features')
    },
    {
      name: t('sports.infrastructure.stadiums.2.name'),
      capacity: t('sports.infrastructure.stadiums.2.capacity'),
      features: t('sports.infrastructure.stadiums.2.features')
    }
  ];

  const cinemas = [
    {
      name: t('sports.cinema.theaters.0.name'),
      location: t('sports.cinema.theaters.0.location'),
      capacity: t('sports.cinema.theaters.0.capacity')
    },
    {
      name: t('sports.cinema.theaters.1.name'),
      location: t('sports.cinema.theaters.1.location'),
      capacity: t('sports.cinema.theaters.1.capacity')
    },
    {
      name: t('sports.cinema.theaters.2.name'),
      location: t('sports.cinema.theaters.2.location'),
      capacity: t('sports.cinema.theaters.2.capacity')
    },
    {
      name: t('sports.cinema.theaters.3.name'),
      location: t('sports.cinema.theaters.3.location'),
      capacity: t('sports.cinema.theaters.3.capacity')
    }
  ];

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
          className="absolute top-10 left-5 w-32 h-32 bg-red-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-yellow-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-orange-200 rounded-full blur-2xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6"
          >
            <span className="text-red-600 text-sm font-semibold">{t('sports.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('sports.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('sports.subtitle')}
          </motion.p>
        </motion.div>

        {/* Табы для переключения между разделами */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg'
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
          {/* Футбольный клуб «Дордой» */}
          {activeTab === 'dordoi' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                variants={cardVariants}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-orange-100 relative overflow-hidden">
                    {/* Заглушка для изображения стадиона */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                          </svg>
                        </div>
                        <p className="text-red-600 font-semibold">{t('sports.dordoi.stadiumImage')}</p>
                      </div>
                    </div>
                    
                    {/* Декоративные элементы */}
                    <motion.div
                      className="absolute top-6 right-6 w-4 h-16 bg-green-400 rounded-full"
                      animate={{ scaleY: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  
                  {/* Акцентный элемент */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-2xl rotate-12 opacity-90"></div>
                </div>

                {/* Плавающая статистика */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                  transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{t('sports.dordoi.trophies')}</div>
                    <div className="text-sm text-slate-600">{t('sports.dordoi.trophiesLabel')}</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-slate-900">{t('sports.dordoi.title')}</h3>
                
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  {t('sports.dordoi.history')}
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  {t('sports.dordoi.achievements')}
                </motion.p>

                {/* Академия */}
                <motion.div
                  variants={cardVariants}
                  className="bg-red-50 rounded-2xl p-6 border border-red-200"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    </svg>
                    {t('sports.dordoi.academy.title')}
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-red-600">{t('sports.dordoi.academy.groups')}</div>
                      <div className="text-sm text-slate-600">{t('sports.dordoi.academy.groupsLabel')}</div>
                    </motion.div>
                    <motion.div 
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold text-red-600">{t('sports.dordoi.academy.children')}</div>
                      <div className="text-sm text-slate-600">{t('sports.dordoi.academy.childrenLabel')}</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Поддерживаемые клубы */}
                <motion.div
                  variants={cardVariants}
                  className="bg-orange-50 rounded-2xl p-6 border border-orange-200"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{t('sports.dordoi.supportedClubs.title')}</h4>
                  <p className="text-slate-700">{t('sports.dordoi.supportedClubs.description')}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Көк-бөрү */}
          {activeTab === 'kokboru' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                variants={itemVariants}
                className="space-y-6 order-2 lg:order-1"
              >
                <h3 className="text-3xl font-bold text-slate-900">{t('sports.kokboru.title')}</h3>
                
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                >
                  {t('sports.kokboru.description')}
                </motion.p>

                <motion.div
                  variants={cardVariants}
                  className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{t('sports.kokboru.investment.title')}</h4>
                  </div>
                  <p className="text-2xl font-bold text-yellow-700">{t('sports.kokboru.investment.amount')}</p>
                  <p className="text-slate-600 text-sm mt-2">{t('sports.kokboru.investment.description')}</p>
                </motion.div>

                <motion.div
                  variants={cardVariants}
                  className="bg-green-50 rounded-2xl p-6 border border-green-200"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{t('sports.kokboru.federation.title')}</h4>
                  <p className="text-slate-700">{t('sports.kokboru.federation.description')}</p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="relative order-1 lg:order-2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-yellow-50 to-green-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-yellow-600 font-semibold">{t('sports.kokboru.imagePlaceholder')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Инфраструктура */}
          {activeTab === 'infrastructure' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('sports.infrastructure.title')}</h3>
                    <p className="text-orange-50 leading-relaxed mb-4">
                      {t('sports.infrastructure.description')}
                    </p>
                  </div>
                  <motion.div 
                    className="bg-white/20 rounded-xl p-6 text-center backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-bold mb-2">{t('sports.infrastructure.investment')}</div>
                    <div className="text-orange-100">{t('sports.infrastructure.investmentLabel')}</div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stadiums.map((stadium, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{stadium.name}</h4>
                    </div>
                    
                    <motion.p 
                      className="text-slate-600 mb-3 text-sm"
                      whileHover={{ x: 3 }}
                    >
                      {stadium.capacity}
                    </motion.p>
                    
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-slate-700 text-sm font-medium">{stadium.features}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Кино и культура */}
          {activeTab === 'cinema' && (
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
                  <h3 className="text-3xl font-bold text-slate-900">{t('sports.cinema.title')}</h3>
                  
                  <motion.p 
                    className="text-lg text-slate-700 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    {t('sports.cinema.description')}
                  </motion.p>

                  <motion.div
                    variants={cardVariants}
                    className="bg-purple-50 rounded-2xl p-6 border border-purple-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{t('sports.cinema.network.title')}</h4>
                    <p className="text-slate-700">{t('sports.cinema.network.description')}</p>
                  </motion.div>
                </div>

                <motion.div
                  variants={cardVariants}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                            </svg>
                          </div>
                          <p className="text-purple-600 font-semibold">{t('sports.cinema.imagePlaceholder')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cinemas.map((cinema, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{cinema.name}</h4>
                    <p className="text-slate-600 text-sm mb-2">{cinema.location}</p>
                    <div className="bg-purple-50 rounded-lg p-2">
                      <p className="text-purple-700 text-sm font-medium">{cinema.capacity}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{t('sports.cinema.festivals.title')}</h3>
                <p className="text-purple-50 leading-relaxed max-w-2xl mx-auto">
                  {t('sports.cinema.festivals.description')}
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-red-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t('sports.cta.title')}
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('sports.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{t('sports.cta.supportButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
              <span>{t('sports.cta.ticketsButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              <span>{t('sports.cta.sponsorshipButton')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSports;