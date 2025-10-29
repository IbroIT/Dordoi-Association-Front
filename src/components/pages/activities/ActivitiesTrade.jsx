import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesTrade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);
  const [counterValues, setCounterValues] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const infrastructure = [
    {
      id: 'area',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: t('trade.infrastructure.items.0.value'),
      label: t('trade.infrastructure.items.0.label'),
      numericValue: 40,
      duration: 3000,
      details: t('trade.infrastructure.items.0.details', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 'places',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      value: t('trade.infrastructure.items.1.value'),
      label: t('trade.infrastructure.items.1.label'),
      numericValue: 5000,
      duration: 3500,
      details: t('trade.infrastructure.items.1.details', { returnObjects: true }),
      color: 'green'
    },
    {
      id: 'warehouse',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      value: t('trade.infrastructure.items.2.value'),
      label: t('trade.infrastructure.items.2.label'),
      numericValue: 50000,
      duration: 4000,
      details: t('trade.infrastructure.items.2.details', { returnObjects: true }),
      color: 'orange'
    },
    {
      id: 'service',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      value: t('trade.infrastructure.items.3.value'),
      label: t('trade.infrastructure.items.3.label'),
      details: t('trade.infrastructure.items.3.details', { returnObjects: true }),
      color: 'purple'
    }
  ];

  const logistics = [
    {
      id: 'customs',
      title: t('trade.logistics.services.0.title'),
      description: t('trade.logistics.services.0.description'),
      icon: '🛃',
      details: t('trade.logistics.services.0.details', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 'transport',
      title: t('trade.logistics.services.1.title'),
      description: t('trade.logistics.services.1.description'),
      icon: '🚚',
      details: t('trade.logistics.services.1.details', { returnObjects: true }),
      color: 'green'
    },
    {
      id: 'international',
      title: t('trade.logistics.services.2.title'),
      description: t('trade.logistics.services.2.description'),
      icon: '🌐',
      details: t('trade.logistics.services.2.details', { returnObjects: true }),
      color: 'orange'
    },
    {
      id: 'cash',
      title: t('trade.logistics.services.3.title'),
      description: t('trade.logistics.services.3.description'),
      icon: '💼',
      details: t('trade.logistics.services.3.details', { returnObjects: true }),
      color: 'purple'
    }
  ];

  const kpis = [
    {
      id: 'jobs',
      value: t('trade.kpi.items.0.value'),
      label: t('trade.kpi.items.0.label'),
      change: '+15%',
      numericValue: 50000,
      duration: 4000,
      details: t('trade.kpi.items.0.details', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 'tax',
      value: t('trade.kpi.items.1.value'),
      label: t('trade.kpi.items.1.label'),
      change: '+4.5B',
      details: t('trade.kpi.items.1.details', { returnObjects: true }),
      color: 'green'
    },
    {
      id: 'businesses',
      value: t('trade.kpi.items.2.value'),
      label: t('trade.kpi.items.2.label'),
      change: '50K+',
      numericValue: 10000,
      duration: 3000,
      details: t('trade.kpi.items.2.details', { returnObjects: true }),
      color: 'orange'
    },
    {
      id: 'satisfaction',
      value: t('trade.kpi.items.3.value'),
      label: t('trade.kpi.items.3.label'),
      change: '95%',
      details: t('trade.kpi.items.3.details', { returnObjects: true }),
      color: 'purple'
    }
  ];

  const gallery = [1, 2, 3, 4, 5, 6].map(i => ({
    id: i,
    placeholder: t('trade.gallery.placeholder', { number: i }),
    caption: t(`trade.gallery.captions.${i-1}`)
  }));

  const advantages = t('trade.advantages.items', { returnObjects: true });
  const partners = t('trade.partners.items', { returnObjects: true });

  const colorMap = {
    blue: { 
      bg: 'bg-blue-500', 
      text: 'text-blue-600', 
      light: 'bg-blue-50', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      bg: 'bg-green-500', 
      text: 'text-green-600', 
      light: 'bg-green-50', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    orange: { 
      bg: 'bg-orange-500', 
      text: 'text-orange-600', 
      light: 'bg-orange-50', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    purple: { 
      bg: 'bg-purple-500', 
      text: 'text-purple-600', 
      light: 'bg-purple-50', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    }
  };

  // Функция для открытия модального окна
  const openModal = (content, type) => {
    setModalContent({ ...content, type });
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Анимация счетчика
  const Counter = ({ value, duration, suffix = '', prefix = '' }) => {
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
      return <span>{prefix}{value}{suffix}</span>;
    }

    return (
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {prefix}{Math.floor(count).toLocaleString()}{suffix}
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
      scale: 1.03,
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleRentInquiry = () => {
    console.log('Rent inquiry');
  };

  const handleLogisticsRequest = () => {
    console.log('Logistics request');
  };

  // Функция для рендеринга содержимого модального окна
  const renderModalContent = () => {
    if (!modalContent) return null;

    const colors = colorMap[modalContent.color];

    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center`}>
            {modalContent.icon && (
              <div className={colors.text}>
                {modalContent.icon}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              {modalContent.title || modalContent.label}
            </h3>
            {modalContent.value && (
              <div className="text-3xl font-black text-slate-900 mt-2">
                {modalContent.value}
              </div>
            )}
          </div>
        </div>

        {modalContent.description && (
          <p className="text-lg text-slate-600 leading-relaxed">
            {modalContent.description}
          </p>
        )}

        {modalContent.details && Array.isArray(modalContent.details) && (
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-slate-900">
              {t('trade.modal.details')}
            </h4>
            <div className="space-y-3">
              {modalContent.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full ${colors.bg} mt-2 flex-shrink-0`}></div>
                  <p className="text-slate-700 leading-relaxed text-lg">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {modalContent.change && (
          <div className="bg-slate-50 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 font-medium">{t('trade.modal.change')}</span>
              <span className={`px-3 py-1 rounded-full text-sm font-bold ${colors.light} ${colors.text}`}>
                {modalContent.change}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Улучшенные фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5% w-48 h-48 bg-blue-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-5% w-56 h-56 bg-green-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-cyan-200 rounded-full blur-4xl"
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('trade.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 lg:mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              {t('trade.title')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('trade.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-6 lg:mb-8"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            <div className="w-6 h-6 rounded-full border-4 border-blue-200 animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('trade.subtitle')}
          </motion.p>
        </motion.div>

        {/* Основной лид */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white shadow-2xl relative overflow-hidden"
          >
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50"></div>
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <motion.div 
                className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-3xl lg:text-4xl">🏪</span>
              </motion.div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  {t('trade.lead.title')}
                </h3>
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-light">
                  {t('trade.lead.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Преимущества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('trade.advantages.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('trade.advantages.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group text-center"
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-2xl lg:text-3xl">{advantage.icon}</span>
                </motion.div>
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">
                  {advantage.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Описание комплекса */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {t('trade.structure.title')}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {t('trade.structure.description')}
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {['market', 'food', 'auto', 'warehouse'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-4 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">
                        {item === 'market' && '👕'}
                        {item === 'food' && '🍎'}
                        {item === 'auto' && '🚗'}
                        {item === 'warehouse' && '📦'}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg lg:text-xl font-bold text-slate-900 mb-1">
                        {t(`trade.structure.items.${index}`)}
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {t(`trade.structure.details.${index}`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 aspect-[4/3] flex items-center justify-center border-2 border-white shadow-2xl">
                <div className="text-center">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-white text-3xl">🏗️</span>
                  </motion.div>
                  <p className="text-blue-600 font-semibold text-xl">{t('trade.structure.imagePlaceholder')}</p>
                  <p className="text-slate-500 mt-2">{t('trade.structure.imageSubtitle')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Инфраструктура */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('trade.infrastructure.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('trade.infrastructure.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {infrastructure.map((item, index) => {
              const colors = colorMap[item.color];
              
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="group relative"
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                  >
                    {/* Акцентная градиентная полоса */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                    <div className="flex items-start space-x-4 mb-4 lg:mb-6">
                      <motion.div 
                        className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.bg} transition-all duration-300 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                        }}
                      >
                        <div className={`${colors.text} group-hover:text-white transition-colors duration-300`}>
                          {item.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">
                          {item.numericValue ? (
                            <Counter 
                              value={item.numericValue} 
                              duration={item.duration}
                              suffix={item.id === 'area' ? ' га' : item.id === 'places' ? '+' : item.id === 'warehouse' ? ' м²' : ''}
                            />
                          ) : (
                            item.value
                          )}
                        </div>
                        <div className="text-slate-600 text-lg font-medium">
                          {item.label}
                        </div>
                      </div>
                    </div>

                    {/* Кнопка для подробностей */}
                    <div className="flex items-center justify-between mt-auto">
                      <button 
                        onClick={() => openModal(item, 'infrastructure')}
                        className={`flex items-center space-x-2 ${colors.text} font-semibold text-lg hover:underline`}
                      >
                        <span>{t('trade.more')}</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Логистические сервисы */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
                {t('trade.logistics.title')}
              </h3>
              <div className="space-y-6">
                {logistics.map((service, index) => {
                  const colors = colorMap[service.color];
                  
                  return (
                    <motion.div
                      key={service.id}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
                      whileHover={{ x: 5, scale: 1.01 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white text-2xl">{service.icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold text-slate-900">{service.title}</h4>
                            <button 
                              onClick={() => openModal(service, 'logistics')}
                              className={`flex items-center space-x-2 ${colors.text} font-semibold hover:underline`}
                            >
                              <span>{t('trade.more')}</span>
                              <motion.svg 
                                className="w-4 h-4" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.3 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </motion.svg>
                            </button>
                          </div>
                          <p className="text-slate-600 text-lg mb-3">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {t('trade.geography.title')}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  {t('trade.geography.description')}
                </p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
                {['KZ', 'UZ', 'TJ', 'RU', 'CN', 'TR', 'KG', 'KZ2'].map((country, index) => (
                  <motion.div
                    key={country}
                    className="text-center p-4 lg:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-3xl lg:text-4xl mb-3">{getFlagEmoji(country)}</div>
                    <div className="text-lg font-bold text-slate-900">
                      {t(`trade.geography.countries.${index}`)}
                    </div>
                    <div className="text-slate-600 text-sm mt-1">
                      {t(`trade.geography.details.${index}`)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* KPI & Impact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('trade.kpi.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('trade.kpi.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {kpis.map((kpi, index) => {
              const colors = colorMap[kpi.color];
              
              return (
                <motion.div
                  key={kpi.id}
                  variants={cardVariants}
                  className="group relative"
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                  >
                    {/* Акцентная градиентная полоса */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                    <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">
                      {kpi.numericValue ? (
                        <Counter 
                          value={kpi.numericValue} 
                          duration={kpi.duration}
                          suffix={kpi.id === 'jobs' ? '+' : kpi.id === 'businesses' ? '+' : ''}
                        />
                      ) : (
                        kpi.value
                      )}
                    </div>
                    <div className="text-slate-600 text-lg font-medium mb-4">
                      {kpi.label}
                    </div>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${colors.light} ${colors.text} mb-4`}>
                      {kpi.change}
                    </div>

                    {/* Кнопка для подробностей */}
                    <div className="flex items-center justify-between mt-auto">
                      <button 
                        onClick={() => openModal(kpi, 'kpi')}
                        className={`flex items-center space-x-2 ${colors.text} font-semibold text-lg hover:underline`}
                      >
                        <span>{t('trade.more')}</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Партнеры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('trade.partners.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('trade.partners.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">{partner.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{partner.name}</h4>
                <p className="text-slate-600 text-sm">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Кейс поставщика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={cardVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white shadow-2xl relative overflow-hidden"
          >
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-cyan-50/50"></div>
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              <motion.div 
                className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-3xl lg:text-4xl">💼</span>
              </motion.div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {t('trade.caseStudy.title')}
                </h3>
                <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-6 italic">
                  "{t('trade.caseStudy.quote')}"
                </blockquote>
                <div className="text-slate-600 text-lg">
                  <strong>{t('trade.caseStudy.author')}</strong>, {t('trade.caseStudy.position')}
                </div>
                <div className="mt-4 text-slate-500">
                  {t('trade.caseStudy.duration')}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Галерея */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 lg:mb-24"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 lg:mb-16"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('trade.gallery.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('trade.gallery.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative aspect-square rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-100 to-green-100 border-2 border-slate-200 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveImage(index)}
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center">
                    <motion.div 
                      className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 lg:mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white text-lg lg:text-xl">📸</span>
                    </motion.div>
                    <p className="text-blue-600 text-sm lg:text-base font-semibold">{item.placeholder}</p>
                    <p className="text-slate-500 text-xs lg:text-sm mt-1">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white shadow-2xl relative overflow-hidden"
          >
            {/* Фоновые декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {t('trade.cta.title')}
                </span>
              </h3>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('trade.cta.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <motion.button
                  onClick={handleRentInquiry}
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-3 group relative overflow-hidden"
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
                  
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-lg lg:text-xl">{t('trade.cta.buttons.rent')}</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.button
                  onClick={handleLogisticsRequest}
                  className="bg-white text-slate-700 px-8 lg:px-12 py-4 lg:py-5 rounded-2xl font-bold border-2 border-slate-200 hover:border-green-600 hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg lg:text-xl">{t('trade.cta.buttons.logistics')}</span>
                </motion.button>
              </div>

              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('trade.cta.deadline')}</span>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 z-10 rounded-t-3xl">
                <div className="flex justify-between items-center p-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {modalContent?.type === 'infrastructure' && t('trade.infrastructure.title')}
                    {modalContent?.type === 'logistics' && t('trade.logistics.title')}
                    {modalContent?.type === 'kpi' && t('trade.kpi.title')}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-200 bg-slate-100 hover:bg-slate-200 rounded-xl p-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {renderModalContent()}
              </div>

              <div className="sticky bottom-0 bg-white border-t border-slate-200 rounded-b-3xl p-6">
                <div className="flex justify-end">
                  <motion.button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('trade.modal.close')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Вспомогательная функция для эмодзи флагов
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export default ActivitiesTrade;