import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutFacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t, i18n } = useTranslation();
  const [activeFact, setActiveFact] = useState(null);
  const [counterValues, setCounterValues] = useState({});

  // Факты с расширенной информацией
  const facts = [
    {
      id: 'forbes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('facts.items.forbes.title'),
      description: t('facts.items.forbes.description'),
      value: t('facts.items.forbes.value'),
      numericValue: 30,
      suffix: '+',
      color: 'blue',
      details: t('facts.items.forbes.details', { returnObjects: true }),
      duration: 3000
    },
    {
      id: 'smokeless',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: t('facts.items.smokeless.title'),
      description: t('facts.items.smokeless.description'),
      value: t('facts.items.smokeless.value'),
      numericValue: 15,
      suffix: '%',
      color: 'green',
      details: t('facts.items.smokeless.details', { returnObjects: true }),
      duration: 2500
    },
    {
      id: 'tax',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('facts.items.tax.title'),
      description: t('facts.items.tax.description'),
      value: t('facts.items.tax.value'),
      numericValue: 2.5,
      suffix: 'B',
      color: 'orange',
      details: t('facts.items.tax.details', { returnObjects: true }),
      duration: 3500
    },
    {
      id: 'export',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('facts.items.export.title'),
      description: t('facts.items.export.description'),
      value: t('facts.items.export.value'),
      numericValue: 50,
      suffix: '+',
      color: 'purple',
      details: t('facts.items.export.details', { returnObjects: true }),
      duration: 3000
    },
    {
      id: 'employment',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('facts.items.employment.title'),
      description: t('facts.items.employment.description'),
      value: t('facts.items.employment.value'),
      numericValue: 10000,
      suffix: '+',
      color: 'cyan',
      details: t('facts.items.employment.details', { returnObjects: true }),
      duration: 4000
    },
    {
      id: 'infrastructure',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('facts.items.infrastructure.title'),
      description: t('facts.items.infrastructure.description'),
      value: t('facts.items.infrastructure.value'),
      numericValue: 25,
      suffix: '+',
      color: 'red',
      details: t('facts.items.infrastructure.details', { returnObjects: true }),
      duration: 3000
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500',
      hover: 'hover:from-blue-600 hover:to-cyan-600'
    },
    green: { 
      light: 'bg-green-50', 
      medium: 'bg-green-100', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500',
      hover: 'hover:from-green-600 hover:to-emerald-600'
    },
    orange: { 
      light: 'bg-orange-50', 
      medium: 'bg-orange-100', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500',
      hover: 'hover:from-orange-600 hover:to-amber-600'
    },
    purple: { 
      light: 'bg-purple-50', 
      medium: 'bg-purple-100', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500',
      hover: 'hover:from-purple-600 hover:to-violet-600'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      medium: 'bg-cyan-100', 
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-sky-500',
      hover: 'hover:from-cyan-600 hover:to-sky-600'
    },
    red: { 
      light: 'bg-red-50', 
      medium: 'bg-red-100', 
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-rose-500',
      hover: 'hover:from-red-600 hover:to-rose-600'
    }
  };

  // Анимация счетчика
  const Counter = ({ value, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isInView && !isVisible) {
        setIsVisible(true);
        let start = 0;
        const end = typeof value === 'number' ? value : parseFloat(value);
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, isVisible, value, duration]);

    if (typeof value !== 'number' && isNaN(parseFloat(value))) {
      return <span>{value}</span>;
    }

    return (
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(count).toLocaleString()}{suffix}
      </motion.span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      rotateX: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
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
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const detailVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleDownloadBrochure = () => {
    // Логика скачивания брошюры
    console.log('Download brochure');
  };

  const toggleFactDetails = (factId) => {
    setActiveFact(activeFact === factId ? null : factId);
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Улучшенные декоративные элементы фона */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-5% w-40 h-40 bg-blue-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-5% w-48 h-48 bg-cyan-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
          className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-emerald-200 rounded-full blur-4xl"
        />
      </div>

      {/* Анимированный градиентный фон */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
          animate={{
            background: [
              'linear-gradient(45deg, #60a5fa, #8b5cf6, #06b6d4)',
              'linear-gradient(135deg, #8b5cf6, #06b6d4, #60a5fa)',
              'linear-gradient(225deg, #06b6d4, #60a5fa, #8b5cf6)',
              'linear-gradient(315deg, #60a5fa, #8b5cf6, #06b6d4)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('facts.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              {t('facts.title')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t('facts.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="w-6 h-6 rounded-full border-4 border-blue-200 animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('facts.subtitle')}
          </motion.p>
        </motion.div>

        {/* Карточки с фактами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {facts.map((fact, index) => {
            const colors = colorMap[fact.color];
            const isActive = activeFact === fact.id;
            
            return (
              <motion.div
                key={fact.id}
                variants={cardVariants}
                className="group relative"
                whileHover="hover"
                layout
              >
                <motion.div
                  className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 ${colors.border} shadow-2xl shadow-${fact.color}-500/10 hover:shadow-${fact.color}-500/20 transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                  onClick={() => toggleFactDetails(fact.id)}
                >
                  {/* Акцентная градиентная полоса */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>
                  
                  {/* Декоративный уголок */}
                  <div className={`absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 ${colors.border} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <div className="flex items-start space-x-6 mb-6">
                    <motion.div 
                      className={`flex-shrink-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: `0 10px 25px -5px ${colors.text}40`
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <motion.div 
                        className={colors.text}
                        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {fact.icon}
                      </motion.div>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-2xl font-bold mb-3 ${colors.text}`}>
                        {fact.title}
                      </h3>
                      
                      {/* Анимированное значение факта */}
                      <motion.div 
                        className="text-4xl font-black text-slate-900 mb-3 tracking-tight"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        <Counter 
                          value={fact.numericValue} 
                          duration={fact.duration}
                          suffix={fact.suffix}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed flex-grow text-lg font-light">
                    {fact.description}
                  </p>

                  {/* Кнопка для подробностей */}
                  <motion.div 
                    className="mt-6 flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}>
                      <span>{isActive ? t('facts.less') : t('facts.more')}</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>
                    
                    <motion.div 
                      className={`w-3 h-3 rounded-full ${colors.medium} group-hover:${colors.dark} transition-colors duration-300`}
                      animate={isActive ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                    />
                  </motion.div>

                  {/* Детальная информация */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        variants={detailVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="mt-6 pt-6 border-t border-slate-200"
                      >
                        <div className="space-y-4">
                          {Array.isArray(fact.details) ? (
                            fact.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <div className={`w-2 h-2 rounded-full ${colors.medium} mt-2 flex-shrink-0`}></div>
                                <p className="text-slate-700 leading-relaxed">{detail}</p>
                              </motion.div>
                            ))
                          ) : (
                            <p className="text-slate-700 leading-relaxed">{fact.details}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Декоративный элемент при наведении */}
                  <motion.div
                    className={`absolute -bottom-12 -right-12 w-24 h-24 ${colors.light} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Улучшенная CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-4xl p-12 md:p-16 border-2 border-white shadow-2xl relative overflow-hidden"
          >
            {/* Анимированный фон */}
            <div className="absolute inset-0 opacity-5">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              />
            </div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {t('facts.cta.title')}
                </span>
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
              >
                {t('facts.cta.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  onClick={handleDownloadBrochure}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Эффект блеска */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg">{t('facts.cta.button')}</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.button
                  className="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('facts.cta.contact')}</span>
                </motion.button>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500 mt-8 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('facts.cta.fileInfo')}</span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFacts;