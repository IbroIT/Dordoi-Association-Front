import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersRole = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeRoute, setActiveRoute] = useState(null);
  const [activeImpact, setActiveImpact] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const { t } = useTranslation();

  // Автопереключение статистики
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
      color: 'blue',
      trend: '+12%',
      period: t('role.stats.tradeVolume.period')
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
      color: 'green',
      trend: '+8%',
      period: t('role.stats.jobs.period')
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
      color: 'orange',
      trend: '+3',
      period: t('role.stats.countries.period')
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
      color: 'purple',
      trend: '+2.5%',
      period: t('role.stats.growth.period')
    },
    {
      value: t('role.stats.enterprises.value'),
      label: t('role.stats.enterprises.label'),
      description: t('role.stats.enterprises.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'cyan',
      trend: '+15%',
      period: t('role.stats.enterprises.period')
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
      active: true,
      growth: '+18%',
      goods: t('role.routes.chinaEurope.goods'),
      challenges: t('role.routes.chinaEurope.challenges')
    },
    {
      id: 'middle-east',
      name: t('role.routes.middleEast.name'),
      description: t('role.routes.middleEast.description'),
      volume: t('role.routes.middleEast.volume'),
      duration: t('role.routes.middleEast.duration'),
      countries: ['AE', 'IR', 'TM', 'UZ', 'KG', 'KZ'],
      color: 'green',
      active: true,
      growth: '+22%',
      goods: t('role.routes.middleEast.goods'),
      challenges: t('role.routes.middleEast.challenges')
    },
    {
      id: 'south-asia',
      name: t('role.routes.southAsia.name'),
      description: t('role.routes.southAsia.description'),
      volume: t('role.routes.southAsia.volume'),
      duration: t('role.routes.southAsia.duration'),
      countries: ['IN', 'PK', 'AF', 'TJ', 'KG', 'KZ'],
      color: 'orange',
      active: true,
      growth: '+15%',
      goods: t('role.routes.southAsia.goods'),
      challenges: t('role.routes.southAsia.challenges')
    },
    {
      id: 'ca-regional',
      name: t('role.routes.caRegional.name'),
      description: t('role.routes.caRegional.description'),
      volume: t('role.routes.caRegional.volume'),
      duration: t('role.routes.caRegional.duration'),
      countries: ['UZ', 'KZ', 'KG', 'TJ', 'TM'],
      color: 'purple',
      active: true,
      growth: '+30%',
      goods: t('role.routes.caRegional.goods'),
      challenges: t('role.routes.caRegional.challenges')
    }
  ];

  // SVG иконки для интеграционных воздействий
  const impactIcons = {
    economic: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    logistics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    cultural: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    innovation: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    environmental: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    education: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  };

  const integrationImpacts = [
    {
      title: t('role.impacts.economic.title'),
      description: t('role.impacts.economic.description'),
      icon: impactIcons.economic,
      metrics: t('role.impacts.economic.metrics'),
      details: t('role.impacts.economic.details'),
      color: 'blue'
    },
    {
      title: t('role.impacts.logistics.title'),
      description: t('role.impacts.logistics.description'),
      icon: impactIcons.logistics,
      metrics: t('role.impacts.logistics.metrics'),
      details: t('role.impacts.logistics.details'),
      color: 'green'
    },
    {
      title: t('role.impacts.cultural.title'),
      description: t('role.impacts.cultural.description'),
      icon: impactIcons.cultural,
      metrics: t('role.impacts.cultural.metrics'),
      details: t('role.impacts.cultural.details'),
      color: 'orange'
    },
    {
      title: t('role.impacts.innovation.title'),
      description: t('role.impacts.innovation.description'),
      icon: impactIcons.innovation,
      metrics: t('role.impacts.innovation.metrics'),
      details: t('role.impacts.innovation.details'),
      color: 'purple'
    },
    {
      title: t('role.impacts.environmental.title'),
      description: t('role.impacts.environmental.description'),
      icon: impactIcons.environmental,
      metrics: t('role.impacts.environmental.metrics'),
      details: t('role.impacts.environmental.details'),
      color: 'cyan'
    },
    {
      title: t('role.impacts.education.title'),
      description: t('role.impacts.education.description'),
      icon: impactIcons.education,
      metrics: t('role.impacts.education.metrics'),
      details: t('role.impacts.education.details'),
      color: 'pink'
    }
  ];

  const futureProjects = [
    {
      name: t('role.projects.digitalHub.name'),
      description: t('role.projects.digitalHub.description'),
      timeline: t('role.projects.digitalHub.timeline'),
      status: 'development'
    },
    {
      name: t('role.projects.logisticsCenter.name'),
      description: t('role.projects.logisticsCenter.description'),
      timeline: t('role.projects.logisticsCenter.timeline'),
      status: 'planning'
    },
    {
      name: t('role.projects.tradeAcademy.name'),
      description: t('role.projects.tradeAcademy.description'),
      timeline: t('role.projects.tradeAcademy.timeline'),
      status: 'launched'
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      light: 'bg-green-50', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-sky-500'
    },
    pink: { 
      light: 'bg-pink-50', 
      dark: 'bg-pink-600', 
      text: 'text-pink-600', 
      border: 'border-pink-200',
      gradient: 'from-pink-500 to-rose-500'
    }
  };

  const countryFlags = {
    'CN': '🇨🇳', 'KZ': '🇰🇿', 'KG': '🇰🇬', 'UZ': '🇺🇿', 'RU': '🇷🇺', 'EU': '🇪🇺',
    'AE': '🇦🇪', 'IR': '🇮🇷', 'TM': '🇹🇲', 'IN': '🇮🇳', 'PK': '🇵🇰', 'AF': '🇦🇫', 'TJ': '🇹🇯'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
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
        duration: 0.6,
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
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 text-lg font-semibold">{t('role.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t('role.title')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-8"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('role.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Аналитический блок с интерактивными элементами */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 relative">
                {t('role.analytics.title')}
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-4"></div>
              </h3>
              
              <div className="space-y-6 relative">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group cursor-pointer"
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center mt-1 group-hover:bg-blue-200 transition-colors duration-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed flex-1">
                      <span className="font-semibold text-blue-600">
                        {t(`role.analytics.text.${index}.highlight`)}
                      </span>
                      {t(`role.analytics.text.${index}.rest`)}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Дополнительные метрики */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">30+</div>
                  <div className="text-sm text-slate-600">{t('role.analytics.metrics.industries')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">500K+</div>
                  <div className="text-sm text-slate-600">{t('role.analytics.metrics.visitorsDaily')}</div>
                </div>
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
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 shadow-2xl"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {t('role.infographic.title')}
              </h3>
              
              {/* Улучшенная интерактивная карта */}
              <div className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-8 border-2 border-slate-200/50 h-[500px] overflow-hidden">
                {/* Континенты с анимацией */}
                <motion.div 
                  className="absolute left-8 top-1/2 transform -translate-y-1/2"
                  variants={floatingVariants}
                  animate="float"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 border-2 border-green-300 shadow-2xl text-white">
                    <div className="text-3xl mb-3">🌏</div>
                    <div className="font-bold text-green-900 text-center">{t('role.infographic.asia')}</div>
                  </div>
                </motion.div>

                <motion.div 
                  className="absolute right-8 top-1/2 transform -translate-y-1/2"
                  variants={floatingVariants}
                  animate="float"
                  transition={{ delay: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl p-6 border-2 border-purple-300 shadow-2xl text-white">
                    <div className="text-3xl mb-3">🇪🇺</div>
                    <div className="font-bold text-purple-900 text-center">{t('role.infographic.europe')}</div>
                  </div>
                </motion.div>

                {/* Дордой в центре с пульсирующей анимацией */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 border-4 border-white shadow-2xl text-white text-center relative z-10">
                      <div className="text-4xl mb-3">🌉</div>
                      <div className="font-bold text-xl mb-1">{t('role.infographic.dordoi')}</div>
                      <div className="text-blue-100 text-sm">{t('role.infographic.bridge')}</div>
                    </div>
                  </motion.div>
                </div>

                {/* Анимированные торговые пути */}
                {tradeRoutes.map((route, index) => {
                  const colors = colorMap[route.color];
                  const isActive = activeRoute === route.id || activeRoute === null;
                  return (
                    <motion.div
                      key={route.id}
                      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-1 ${colors.dark} rounded-full ${
                        isActive ? 'opacity-60' : 'opacity-20'
                      } transition-opacity duration-300`}
                      style={{
                        rotate: index * 25 - 37.5,
                        transformOrigin: 'left center'
                      }}
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                        opacity: isActive ? [0.6, 0.8, 0.6] : 0.2
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  );
                })}

                {/* Движущиеся товары по маршрутам */}
                {tradeRoutes.map((route, index) => {
                  const colors = colorMap[route.color];
                  const isActive = activeRoute === route.id || activeRoute === null;
                  if (!isActive) return null;
                  
                  return (
                    <motion.div
                      key={route.id}
                      className={`absolute w-6 h-6 ${colors.dark} rounded-full shadow-lg flex items-center justify-center text-white text-xs font-bold`}
                      style={{
                        left: '15%',
                        top: '50%'
                      }}
                      animate={{
                        left: ['15%', '85%', '15%'],
                        top: ['50%', `${50 + (index - 1.5) * 20}%`, '50%']
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: index * 1,
                        ease: "easeInOut"
                      }}
                    >
                      📦
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersRole;