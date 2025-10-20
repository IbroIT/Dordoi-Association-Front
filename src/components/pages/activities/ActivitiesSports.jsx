import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesSports = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dordoi');
  const [expandedItem, setExpandedItem] = useState(null);

  const tabs = [
    { id: 'dordoi', label: t('sports.tabs.dordoi'), icon: '⚽' },
    { id: 'infrastructure', label: t('sports.tabs.infrastructure'), icon: '🏟️' },
    { id: 'cinema', label: t('sports.tabs.cinema'), icon: '🎬' }
  ];

  const stadiums = [
    {
      name: t('sports.infrastructure.stadiums.0.name'),
      capacity: t('sports.infrastructure.stadiums.0.capacity'),
      features: t('sports.infrastructure.stadiums.0.features', { returnObjects: true }),
      image: '/images/stadium-dordoi.jpg',
      stats: t('sports.infrastructure.stadiums.0.stats'),
      history: t('sports.infrastructure.stadiums.0.history')
    },
    {
      name: t('sports.infrastructure.stadiums.1.name'),
      capacity: t('sports.infrastructure.stadiums.1.capacity'),
      features: t('sports.infrastructure.stadiums.1.features', { returnObjects: true }),
      image: '/images/pool-ala-too.jpg',
      stats: t('sports.infrastructure.stadiums.1.stats'),
      history: t('sports.infrastructure.stadiums.1.history')
    },
    {
      name: t('sports.infrastructure.stadiums.2.name'),
      capacity: t('sports.infrastructure.stadiums.2.capacity'),
      features: t('sports.infrastructure.stadiums.2.features', { returnObjects: true }),
      image: '/images/stadium-spartak.jpg',
      stats: t('sports.infrastructure.stadiums.2.stats'),
      history: t('sports.infrastructure.stadiums.2.history')
    }
  ];

  const cinemas = [
    {
      name: t('sports.cinema.theaters.0.name'),
      location: t('sports.cinema.theaters.0.location'),
      capacity: t('sports.cinema.theaters.0.capacity'),
      features: t('sports.cinema.theaters.0.features', { returnObjects: true }),
      image: '/images/cinema-1.jpg',
      technology: t('sports.cinema.theaters.0.technology')
    },
    {
      name: t('sports.cinema.theaters.1.name'),
      location: t('sports.cinema.theaters.1.location'),
      capacity: t('sports.cinema.theaters.1.capacity'),
      features: t('sports.cinema.theaters.1.features', { returnObjects: true }),
      image: '/images/cinema-2.jpg',
      technology: t('sports.cinema.theaters.1.technology')
    },
    {
      name: t('sports.cinema.theaters.2.name'),
      location: t('sports.cinema.theaters.2.location'),
      capacity: t('sports.cinema.theaters.2.capacity'),
      features: t('sports.cinema.theaters.2.features', { returnObjects: true }),
      image: '/images/cinema-3.jpg',
      technology: t('sports.cinema.theaters.2.technology')
    },
    {
      name: t('sports.cinema.theaters.3.name'),
      location: t('sports.cinema.theaters.3.location'),
      capacity: t('sports.cinema.theaters.3.capacity'),
      features: t('sports.cinema.theaters.3.features', { returnObjects: true }),
      image: '/images/cinema-4.jpg',
      technology: t('sports.cinema.theaters.3.technology')
    }
  ];

  const dordoiAchievements = [
    {
      year: t('sports.dordoi.achievementsList.0.year'),
      title: t('sports.dordoi.achievementsList.0.title'),
      description: t('sports.dordoi.achievementsList.0.description')
    },
    {
      year: t('sports.dordoi.achievementsList.1.year'),
      title: t('sports.dordoi.achievementsList.1.title'),
      description: t('sports.dordoi.achievementsList.1.description')
    },
    {
      year: t('sports.dordoi.achievementsList.2.year'),
      title: t('sports.dordoi.achievementsList.2.title'),
      description: t('sports.dordoi.achievementsList.2.description')
    },
    {
      year: t('sports.dordoi.achievementsList.3.year'),
      title: t('sports.dordoi.achievementsList.3.title'),
      description: t('sports.dordoi.achievementsList.3.description')
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
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Улучшенный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-64 h-64 bg-red-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-200 rounded-full blur-3xl"
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Контент табов */}
        <div className="mb-16">
          <AnimatePresence mode="wait">
            {/* Футбольный клуб «Дордой» */}
            {activeTab === 'dordoi' && (
              <motion.div
                key="dordoi"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-12"
              >
                {/* Основная информация */}
                <motion.div
                  variants={containerVariants}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <motion.div variants={itemVariants} className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-red-50 to-orange-100 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <span className="text-white text-2xl">⚽</span>
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

                  <motion.div variants={itemVariants} className="space-y-6">
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

                    {/* Статистика клуба */}
                    <motion.div
                      variants={cardVariants}
                      className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white"
                    >
                      <h4 className="text-xl font-bold mb-4">{t('sports.dordoi.stats.title')}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {t('sports.dordoi.stats.items', { returnObjects: true }).map((stat, index) => (
                          <motion.div 
                            key={index}
                            className="text-center p-3 bg-white/20 rounded-xl backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm opacity-90">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Академия и достижения */}
                <motion.div
                  variants={containerVariants}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  {/* Академия */}
                  <motion.div
                    variants={cardVariants}
                    className="bg-red-50 rounded-2xl p-6 border border-red-200"
                  >
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                      <span className="text-2xl mr-2">🎓</span>
                      {t('sports.dordoi.academy.title')}
                    </h4>
                    <p className="text-slate-700 mb-6">{t('sports.dordoi.academy.description')}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="text-center p-4 bg-white rounded-xl border border-red-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold text-red-600">{t('sports.dordoi.academy.groups')}</div>
                        <div className="text-sm text-slate-600">{t('sports.dordoi.academy.groupsLabel')}</div>
                      </motion.div>
                      <motion.div 
                        className="text-center p-4 bg-white rounded-xl border border-red-200"
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
                    <p className="text-slate-700 mb-4">{t('sports.dordoi.supportedClubs.description')}</p>
                    <div className="space-y-2">
                      {t('sports.dordoi.supportedClubs.list', { returnObjects: true }).map((club, index) => (
                        <div key={index} className="flex items-center text-slate-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {club}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Достижения по годам */}
                <motion.div variants={itemVariants}>
                  <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                    {t('sports.dordoi.achievementsTitle')}
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dordoiAchievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 text-center"
                        whileHover="hover"
                        onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                      >
                        <div className="text-3xl font-bold text-red-600 mb-2">{achievement.year}</div>
                        <h5 className="font-bold text-slate-900 mb-3">{achievement.title}</h5>
                        <AnimatePresence>
                          {expandedItem === index && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-slate-600 text-sm"
                            >
                              {achievement.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                        <motion.button
                          className="mt-4 text-red-600 text-sm font-semibold hover:text-red-700 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          {expandedItem === index ? t('sports.buttons.less') : t('sports.buttons.more')}
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Инфраструктура */}
            {activeTab === 'infrastructure' && (
              <motion.div
                key="infrastructure"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
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
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                      whileHover="hover"
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                          <span className="text-orange-600 text-lg">🏟️</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{stadium.name}</h4>
                      </div>
                      
                      <motion.p 
                        className="text-slate-600 mb-3 text-sm"
                        whileHover={{ x: 3 }}
                      >
                        {stadium.capacity}
                      </motion.p>
                      
                      <div className="bg-slate-50 rounded-lg p-3 mb-4">
                        <p className="text-slate-700 text-sm font-medium">{stadium.stats}</p>
                      </div>

                      <AnimatePresence>
                        {expandedItem === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 mb-4">
                              <h5 className="font-semibold text-slate-800 text-sm">
                                {t('sports.infrastructure.featuresTitle')}
                              </h5>
                              {stadium.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                            <p className="text-slate-600 text-sm">{stadium.history}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        className="mt-4 text-orange-600 text-sm font-semibold hover:text-orange-700 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {expandedItem === index ? t('sports.buttons.less') : t('sports.buttons.more')}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Кино и культура */}
            {activeTab === 'cinema' && (
              <motion.div
                key="cinema"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-8"
              >
                <motion.div
                  variants={containerVariants}
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
                      <p className="text-slate-700 mb-4">{t('sports.cinema.network.description')}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {t('sports.cinema.network.stats', { returnObjects: true }).map((stat, index) => (
                          <motion.div 
                            key={index}
                            className="text-center p-3 bg-white rounded-xl border border-purple-200"
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="text-xl font-bold text-purple-600">{stat.value}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <span className="text-white text-2xl">🎬</span>
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
                      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                      whileHover="hover"
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                    >
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                        <span className="text-purple-600 text-xl">🎭</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{cinema.name}</h4>
                      <p className="text-slate-600 text-sm mb-2 text-center">{cinema.location}</p>
                      <div className="bg-purple-50 rounded-lg p-2 mb-4 text-center">
                        <p className="text-purple-700 text-sm font-medium">{cinema.capacity}</p>
                      </div>

                      <AnimatePresence>
                        {expandedItem === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="space-y-2 mb-3">
                              <h5 className="font-semibold text-slate-800 text-sm">
                                {t('sports.cinema.featuresTitle')}
                              </h5>
                              {cinema.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                            <p className="text-slate-600 text-sm mb-3">{cinema.technology}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        className="w-full mt-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('sports.buttons.visit')}
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={cardVariants}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center"
                >
                  <h3 className="text-2xl font-bold mb-4">{t('sports.cinema.festivals.title')}</h3>
                  <p className="text-purple-50 leading-relaxed max-w-2xl mx-auto mb-6">
                    {t('sports.cinema.festivals.description')}
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {t('sports.cinema.festivals.events', { returnObjects: true }).map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/20 rounded-xl p-4 backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <h4 className="font-bold mb-2">{event.name}</h4>
                        <p className="text-sm opacity-90">{event.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-red-50 rounded-2xl p-8 border border-slate-200 shadow-lg"
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
              <span>⚽</span>
              <span>{t('sports.cta.supportButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🎫</span>
              <span>{t('sports.cta.ticketsButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🤝</span>
              <span>{t('sports.cta.sponsorshipButton')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSports;