import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeNetwork, setActiveNetwork] = useState(null);
  const [subscriberCounts, setSubscriberCounts] = useState({});

  const socialNetworks = [
    {
      id: 'facebook',
      name: t('contactsSocial.socialNetworks.facebook.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.facebook'),
      subscribers: 25000,
      description: t('contactsSocial.socialNetworks.facebook.description'),
      features: t('contactsSocial.socialNetworks.facebook.features', { returnObjects: true }),
      engagement: '85%'
    },
    {
      id: 'instagram',
      name: t('contactsSocial.socialNetworks.instagram.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.551-.741-.941-1.009-2.142-.709-3.317.3-1.175 1.115-2.151 2.238-2.69 1.123-.539 2.443-.539 3.566 0 .541.26.994.637 1.34 1.101.346.464.57 1.001.654 1.571.084.57.025 1.152-.172 1.693-.197.541-.525 1.022-.954 1.404-.429.382-.943.653-1.505.789-.562.136-1.151.132-1.711-.011-.56-.143-1.067-.424-1.478-.816zm10.661-6.665c-.211.211-.466.317-.763.317-.297 0-.552-.106-.763-.317-.211-.211-.317-.466-.317-.763 0-.297.106-.552.317-.763.211-.211.466-.317.763-.317.297 0 .552.106.763.317.211.211.317.466.317.763 0 .297-.106.552-.317.763zm1.746 2.516c-.084.633-.297 1.229-.617 1.761-.32.532-.742.987-1.246 1.341-.504.354-1.077.599-1.687.723-.61.124-1.241.124-1.851 0-1.229-.25-2.3-.92-3.063-1.896-.763-.976-1.158-2.197-1.118-3.447.04-1.25.516-2.443 1.341-3.366.825-.923 1.937-1.51 3.166-1.651 1.229-.141 2.458.173 3.446.9.988.727 1.661 1.811 1.896 3.041.084.633.084 1.271 0 1.904z"/>
        </svg>
      ),
      color: 'pink',
      url: t('contactsSocial.socialLinks.instagram'),
      subscribers: 35000,
      description: t('contactsSocial.socialNetworks.instagram.description'),
      features: t('contactsSocial.socialNetworks.instagram.features', { returnObjects: true }),
      engagement: '92%'
    },
    {
      id: 'youtube',
      name: t('contactsSocial.socialNetworks.youtube.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'red',
      url: t('contactsSocial.socialLinks.youtube'),
      subscribers: 15000,
      description: t('contactsSocial.socialNetworks.youtube.description'),
      features: t('contactsSocial.socialNetworks.youtube.features', { returnObjects: true }),
      engagement: '78%'
    },
    {
      id: 'linkedin',
      name: t('contactsSocial.socialNetworks.linkedin.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.linkedin'),
      subscribers: 12000,
      description: t('contactsSocial.socialNetworks.linkedin.description'),
      features: t('contactsSocial.socialNetworks.linkedin.features', { returnObjects: true }),
      engagement: '88%'
    },
    {
      id: 'twitter',
      name: t('contactsSocial.socialNetworks.twitter.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'sky',
      url: t('contactsSocial.socialLinks.twitter'),
      subscribers: 8000,
      description: t('contactsSocial.socialNetworks.twitter.description'),
      features: t('contactsSocial.socialNetworks.twitter.features', { returnObjects: true }),
      engagement: '82%'
    },
    {
      id: 'telegram',
      name: t('contactsSocial.socialNetworks.telegram.name'),
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.telegram'),
      subscribers: 18000,
      description: t('contactsSocial.socialNetworks.telegram.description'),
      features: t('contactsSocial.socialNetworks.telegram.features', { returnObjects: true }),
      engagement: '95%'
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100', 
      dark: 'bg-blue-500', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      hover: 'hover:bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    pink: { 
      light: 'bg-pink-50', 
      medium: 'bg-pink-100', 
      dark: 'bg-pink-500', 
      text: 'text-pink-600', 
      border: 'border-pink-200',
      hover: 'hover:bg-pink-500',
      gradient: 'from-pink-500 to-rose-500'
    },
    red: { 
      light: 'bg-red-50', 
      medium: 'bg-red-100', 
      dark: 'bg-red-500', 
      text: 'text-red-600', 
      border: 'border-red-200',
      hover: 'hover:bg-red-500',
      gradient: 'from-red-500 to-orange-500'
    },
    sky: { 
      light: 'bg-sky-50', 
      medium: 'bg-sky-100', 
      dark: 'bg-sky-500', 
      text: 'text-sky-600', 
      border: 'border-sky-200',
      hover: 'hover:bg-sky-500',
      gradient: 'from-sky-500 to-blue-500'
    }
  };

  // Анимация счетчика подписчиков
  const Counter = ({ value, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isInView && !isVisible) {
        setIsVisible(true);
        let start = 0;
        const end = value;
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
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      rotateX: -10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.05,
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

  const toggleNetworkDetails = (networkId) => {
    setActiveNetwork(activeNetwork === networkId ? null : networkId);
  };

  const handleSocialClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const benefits = t('contactsSocial.benefits.items', { returnObjects: true });
  const statistics = t('contactsSocial.statistics.items', { returnObjects: true });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50/30 overflow-hidden">
      {/* Улучшенные фоновые элементы */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-5% w-48 h-48 bg-rose-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-5% w-56 h-56 bg-indigo-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-amber-200 rounded-full blur-4xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-rose-200/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-rose-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-rose-700 font-semibold text-sm uppercase tracking-wider">
              {t('contactsSocial.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-rose-900 to-slate-900 bg-clip-text text-transparent">
              {t('contactsSocial.title')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full"></div>
            <div className="w-6 h-6 rounded-full border-4 border-rose-200 animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('contactsSocial.subtitle')}
          </motion.p>
        </motion.div>

        {/* Преимущества подписки */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('contactsSocial.benefits.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('contactsSocial.benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group text-center"
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-2xl lg:text-3xl">{benefit.icon}</span>
                </motion.div>
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Сетка социальных сетей */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {socialNetworks.map((social) => {
              const colors = colorMap[social.color];
              const isActive = activeNetwork === social.id;
              
              return (
                <motion.div
                  key={social.id}
                  variants={cardVariants}
                  className="group relative"
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                    onClick={() => toggleNetworkDetails(social.id)}
                  >
                    {/* Акцентная градиентная полоса */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                    <div className="flex flex-col items-center justify-center flex-1">
                      {/* Иконка социальной сети */}
                      <motion.div 
                        className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mb-4 group-hover:${colors.dark} transition-all duration-300 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                        }}
                      >
                        <div className={`${colors.text} group-hover:text-white transition-colors duration-300`}>
                          {social.icon}
                        </div>
                      </motion.div>

                      {/* Название социальной сети */}
                      <motion.h3 
                        className={`text-xl font-bold mb-2 ${colors.text} text-center`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {social.name}
                      </motion.h3>

                      {/* Количество подписчиков */}
                      <motion.div 
                        className="text-2xl lg:text-3xl font-black text-slate-900 mb-2"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Counter 
                          value={social.subscribers} 
                          duration={3000}
                          suffix="+"
                        />
                      </motion.div>

                      <div className="text-slate-600 text-sm mb-4">
                        {t('contactsSocial.subscribers')}
                      </div>

                      {/* Вовлеченность */}
                      <motion.div 
                        className={`px-3 py-1 rounded-full text-xs font-bold ${colors.light} ${colors.text}`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {social.engagement} {t('contactsSocial.engagement')}
                      </motion.div>
                    </div>

                    {/* Кнопка для подробностей */}
                    <div className="flex items-center justify-center mt-4">
                      <button className={`flex items-center space-x-2 ${colors.text} font-semibold text-lg hover:underline`}>
                        <span>{isActive ? t('contactsSocial.less') : t('contactsSocial.more')}</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                    </div>

                    {/* Детальная информация */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-slate-200"
                        >
                          <div className="space-y-4">
                            <p className="text-slate-700 leading-relaxed text-center">
                              {social.description}
                            </p>
                            
                            <div className="space-y-2">
                              <h4 className="font-semibold text-slate-900 text-sm">
                                {t('contactsSocial.features')}:
                              </h4>
                              {Array.isArray(social.features) && social.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start space-x-2"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className={`w-2 h-2 rounded-full ${colors.dark} mt-2 flex-shrink-0`}></div>
                                  <p className="text-slate-700 text-sm">{feature}</p>
                                </motion.div>
                              ))}
                            </div>

                            <motion.button
                              onClick={() => handleSocialClick(social.url)}
                              className={`w-full bg-gradient-to-r ${colors.gradient} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 mt-4`}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {t('contactsSocial.followButton')} {social.name}
                            </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Статистика и вовлеченность */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('contactsSocial.statistics.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('contactsSocial.statistics.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-rose-500 to-indigo-500 bg-clip-text text-transparent mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2">
                  {stat.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* QR код для быстрого доступа */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white shadow-2xl relative overflow-hidden inline-block"
          >
            {/* Фоновые декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                {t('contactsSocial.qrTitle')}
              </h3>
              
              <motion.div 
                className="w-48 h-48 bg-gradient-to-br from-rose-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-40 h-40 bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-16 h-16 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
              </motion.div>
              
              <p className="text-slate-600 text-lg font-medium mb-4">
                {t('contactsSocial.qrText')}
              </p>
              
              <motion.p 
                className="text-slate-500 text-sm"
                whileHover={{ scale: 1.02 }}
              >
                {t('contactsSocial.qrSubtext')}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSocial;