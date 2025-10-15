import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersRole = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeRoute, setActiveRoute] = useState(null);
  const { t } = useTranslation();

  const stats = [
    {
      value: t('role.stats.tradeVolume.value'),
      label: t('role.stats.tradeVolume.label'),
      description: t('role.stats.tradeVolume.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      value: t('role.stats.jobs.value'),
      label: t('role.stats.jobs.label'),
      description: t('role.stats.jobs.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'green'
    },
    {
      value: t('role.stats.countries.value'),
      label: t('role.stats.countries.label'),
      description: t('role.stats.countries.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      value: t('role.stats.growth.value'),
      label: t('role.stats.growth.label'),
      description: t('role.stats.growth.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'purple'
    }
  ];

  const tradeRoutes = [
    {
      id: 'china-europe',
      name: t('role.routes.chinaEurope.name'),
      description: t('role.routes.chinaEurope.description'),
      volume: t('role.routes.chinaEurope.volume'),
      duration: t('role.routes.chinaEurope.duration'),
      countries: ['CN', 'KZ', 'KG', 'UZ', 'RU', 'EU'],
      color: 'blue',
      active: true
    },
    {
      id: 'middle-east',
      name: t('role.routes.middleEast.name'),
      description: t('role.routes.middleEast.description'),
      volume: t('role.routes.middleEast.volume'),
      duration: t('role.routes.middleEast.duration'),
      countries: ['AE', 'IR', 'TM', 'UZ', 'KG', 'KZ'],
      color: 'green',
      active: true
    },
    {
      id: 'south-asia',
      name: t('role.routes.southAsia.name'),
      description: t('role.routes.southAsia.description'),
      volume: t('role.routes.southAsia.volume'),
      duration: t('role.routes.southAsia.duration'),
      countries: ['IN', 'PK', 'AF', 'TJ', 'KG', 'KZ'],
      color: 'orange',
      active: true
    }
  ];

  const integrationImpacts = [
    {
      title: t('role.impacts.economic.title'),
      description: t('role.impacts.economic.description'),
      icon: '💰',
      metrics: t('role.impacts.economic.metrics')
    },
    {
      title: t('role.impacts.logistics.title'),
      description: t('role.impacts.logistics.description'),
      icon: '🚚',
      metrics: t('role.impacts.logistics.metrics')
    },
    {
      title: t('role.impacts.cultural.title'),
      description: t('role.impacts.cultural.description'),
      icon: '🌍',
      metrics: t('role.impacts.cultural.metrics')
    },
    {
      title: t('role.impacts.innovation.title'),
      description: t('role.impacts.innovation.description'),
      icon: '💡',
      metrics: t('role.impacts.innovation.metrics')
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' }
  };

  const countryFlags = {
    'CN': '🇨🇳',
    'KZ': '🇰🇿',
    'KG': '🇰🇬',
    'UZ': '🇺🇿',
    'RU': '🇷🇺',
    'EU': '🇪🇺',
    'AE': '🇦🇪',
    'IR': '🇮🇷',
    'TM': '🇹🇲',
    'IN': '🇮🇳',
    'PK': '🇵🇰',
    'AF': '🇦🇫',
    'TJ': '🇹🇯'
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

  const mapPointVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('role.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('role.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('role.subtitle')}
          </motion.p>
        </motion.div>

        {/* Ключевые показатели */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const colors = colorMap[stat.color];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:${colors.dark} transition-colors duration-300`}>
                  <div className={colors.text}>
                    {stat.icon}
                  </div>
                </div>
                
                <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-slate-700 mb-2">
                  {stat.label}
                </div>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Аналитический блок */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {t('role.analytics.title')}
              </h3>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="font-semibold text-blue-600">{t('role.analytics.text.0.highlight')}</span>{t('role.analytics.text.0.rest')}
                </motion.p>
                
                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                >
                  {t('role.analytics.text.1.prefix')}<span className="font-semibold text-blue-600">{t('role.analytics.text.1.highlight')}</span>{t('role.analytics.text.1.suffix')}
                </motion.p>

                <motion.p 
                  className="text-lg text-slate-700 leading-relaxed"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
                >
                  {t('role.analytics.text.2.prefix')}<span className="font-semibold text-blue-600">{t('role.analytics.text.2.highlight')}</span>{t('role.analytics.text.2.suffix')}
                </motion.p>
              </div>
            </motion.div>

            {/* Воздействие на интеграцию */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t('role.impactTitle')}
              </h3>
              
              <div className="grid gap-4">
                {integrationImpacts.map((impact, index) => (
                  <motion.div
                    key={impact.title}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {impact.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-slate-900 mb-2">
                        {impact.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed mb-2">
                        {impact.description}
                      </p>
                      <div className="text-sm text-blue-600 font-semibold">
                        {impact.metrics}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Инфографика - Дордой как мост */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
                {t('role.infographic.title')}
              </h3>
              
              {/* Упрощенная карта */}
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border-2 border-slate-200 h-96">
                {/* Континенты */}
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <motion.div 
                    className="bg-green-100 rounded-2xl p-4 border-2 border-green-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🌏</div>
                      <div className="font-bold text-green-800">{t('role.infographic.asia')}</div>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <motion.div 
                    className="bg-purple-100 rounded-2xl p-4 border-2 border-purple-300 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">🇪🇺</div>
                      <div className="font-bold text-purple-800">{t('role.infographic.europe')}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Дордой в центре */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 border-4 border-white shadow-2xl text-white text-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-3xl mb-2">🌉</div>
                    <div className="font-bold text-lg">{t('role.infographic.dordoi')}</div>
                    <div className="text-blue-100 text-sm mt-1">{t('role.infographic.bridge')}</div>
                  </motion.div>
                </div>

                {/* Торговые пути */}
                {tradeRoutes.map((route, index) => {
                  const colors = colorMap[route.color];
                  return (
                    <motion.div
                      key={route.id}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-1 ${colors.dark} rounded-full opacity-60`}
                      style={{
                        rotate: index * 30 - 30,
                        transformOrigin: 'left center'
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.6, 0.8, 0.6]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  );
                })}

                {/* Движущиеся товары */}
                {tradeRoutes.map((route, index) => {
                  const colors = colorMap[route.color];
                  return (
                    <motion.div
                      key={route.id}
                      className={`absolute w-4 h-4 ${colors.dark} rounded-full shadow-lg`}
                      style={{
                        left: '20%',
                        top: '50%'
                      }}
                      animate={{
                        left: ['20%', '80%', '20%'],
                        top: ['50%', `${50 + (index - 1) * 15}%`, '50%']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.7,
                        ease: "easeInOut"
                      }}
                    />
                  );
                })}
              </div>

              {/* Легенда маршрутов */}
              <div className="mt-6 space-y-3">
                <h4 className="font-bold text-slate-900 mb-4">{t('role.routes.title')}</h4>
                {tradeRoutes.map((route) => {
                  const colors = colorMap[route.color];
                  return (
                    <motion.div
                      key={route.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        activeRoute === route.id 
                          ? `${colors.border} ${colors.light} shadow-md` 
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                      onMouseEnter={() => setActiveRoute(route.id)}
                      onMouseLeave={() => setActiveRoute(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 ${colors.dark} rounded-full`}></div>
                          <h5 className="font-semibold text-slate-900">{route.name}</h5>
                        </div>
                        <div className="text-sm text-slate-500">{route.volume}</div>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-3">{route.description}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-slate-500">{route.duration}</span>
                          <div className="flex space-x-1">
                            {route.countries.map((country, idx) => (
                              <span key={idx} className="text-lg">
                                {countryFlags[country]}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className={`px-2 py-1 ${colors.light} ${colors.text} rounded-full text-xs font-medium`}>
                          {t('role.routes.active')}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Фоновые элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {t('role.cta.title')}
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {t('role.cta.description')}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>{t('role.cta.downloadReport')}</span>
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('role.cta.learnMore')}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersRole;