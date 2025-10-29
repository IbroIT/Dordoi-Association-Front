import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesFinance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('finance');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [counterValues, setCounterValues] = useState({});

  const tabs = [
    { 
      id: 'finance', 
      label: t('finance.tabs.finance'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 'production', 
      label: t('finance.tabs.production'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      id: 'investment', 
      label: t('finance.tabs.investment'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  const financialStructures = [
    {
      id: 'microfinance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('finance.financialStructures.0.title'),
      description: t('finance.financialStructures.0.description'),
      stats: t('finance.financialStructures.0.stats'),
      numericValue: 5000,
      duration: 3000,
      details: t('finance.financialStructures.0.details', { returnObjects: true }),
      color: 'green'
    },
    {
      id: 'insurance',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('finance.financialStructures.1.title'),
      description: t('finance.financialStructures.1.description'),
      stats: t('finance.financialStructures.1.stats'),
      numericValue: 2000,
      duration: 2500,
      details: t('finance.financialStructures.1.details', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 'credit',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('finance.financialStructures.2.title'),
      description: t('finance.financialStructures.2.description'),
      stats: t('finance.financialStructures.2.stats'),
      numericValue: 50,
      duration: 2000,
      details: t('finance.financialStructures.2.details', { returnObjects: true }),
      color: 'purple'
    }
  ];

  const productionAssets = [
    {
      id: 'textile',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('finance.productionAssets.0.title'),
      description: t('finance.productionAssets.0.description'),
      capacity: t('finance.productionAssets.0.capacity'),
      numericValue: 5,
      duration: 2500,
      details: t('finance.productionAssets.0.details', { returnObjects: true }),
      color: 'orange'
    },
    {
      id: 'food',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: t('finance.productionAssets.1.title'),
      description: t('finance.productionAssets.1.description'),
      capacity: t('finance.productionAssets.1.capacity'),
      numericValue: 100,
      duration: 3000,
      details: t('finance.productionAssets.1.details', { returnObjects: true }),
      color: 'red'
    },
    {
      id: 'agro',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 013 15.546M21 12V9a2 2 0 00-2-2h-2.5M3 12V9a2 2 0 012-2h2.5m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7.5 7h9" />
        </svg>
      ),
      title: t('finance.productionAssets.2.title'),
      description: t('finance.productionAssets.2.description'),
      capacity: t('finance.productionAssets.2.capacity'),
      numericValue: 10000,
      duration: 3500,
      details: t('finance.productionAssets.2.details', { returnObjects: true }),
      color: 'emerald'
    }
  ];

  const investmentProjects = [
    {
      id: 'modernization',
      title: t('finance.investmentProjects.0.title'),
      description: t('finance.investmentProjects.0.description'),
      amount: t('finance.investmentProjects.0.amount'),
      timeline: t('finance.investmentProjects.0.timeline'),
      progress: 65,
      details: t('finance.investmentProjects.0.details', { returnObjects: true }),
      color: 'cyan'
    },
    {
      id: 'logistics',
      title: t('finance.investmentProjects.1.title'),
      description: t('finance.investmentProjects.1.description'),
      amount: t('finance.investmentProjects.1.amount'),
      timeline: t('finance.investmentProjects.1.timeline'),
      progress: 30,
      details: t('finance.investmentProjects.1.details', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 'agrocluster',
      title: t('finance.investmentProjects.2.title'),
      description: t('finance.investmentProjects.2.description'),
      amount: t('finance.investmentProjects.2.amount'),
      timeline: t('finance.investmentProjects.2.timeline'),
      progress: 15,
      details: t('finance.investmentProjects.2.details', { returnObjects: true }),
      color: 'green'
    }
  ];

  const colorMap = {
    green: { 
      light: 'bg-green-50', 
      medium: 'bg-green-100',
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100',
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      medium: 'bg-purple-100',
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      medium: 'bg-orange-100',
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    red: { 
      light: 'bg-red-50', 
      medium: 'bg-red-100',
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-rose-500'
    },
    emerald: { 
      light: 'bg-emerald-50', 
      medium: 'bg-emerald-100',
      dark: 'bg-emerald-600', 
      text: 'text-emerald-600', 
      border: 'border-emerald-200',
      gradient: 'from-emerald-500 to-teal-500'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      medium: 'bg-cyan-100',
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-sky-500'
    }
  };

  // Функция для открытия модального окна
  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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

  const ProgressBar = ({ progress, color }) => {
    const colors = colorMap[color];
    return (
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${colors.dark} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </div>
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

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
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
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const handleInvestmentInquiry = () => {
    console.log('Investment inquiry');
  };

  const handleFinancingRequest = () => {
    console.log('Financing request');
  };

  // Компонент модального окна
  const Modal = ({ isOpen, onClose, item }) => {
    if (!isOpen || !item) return null;

    const colors = colorMap[item.color];

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Заголовок модального окна */}
              <div className={`relative p-8 border-b ${colors.border}`}>
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center`}>
                    <div className={colors.text}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-3xl font-bold mb-2 ${colors.text}`}>
                      {item.title}
                    </h2>
                    <p className="text-slate-600 text-lg">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Контент модального окна */}
              <div className="p-8">
                {/* Статистика/цифры */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className={`bg-${colors.light} rounded-2xl p-6 border ${colors.border}`}>
                    <h3 className={`text-lg font-semibold mb-3 ${colors.text}`}>
                      {activeTab === 'finance' ? t('finance.keyMetrics') : 
                       activeTab === 'production' ? t('finance.capacity') : 
                       t('finance.investmentAmount')}
                    </h3>
                    <div className="text-4xl font-black text-slate-900">
                      {activeTab === 'finance' && (
                        <Counter value={item.numericValue} duration={2000} suffix="+" />
                      )}
                      {activeTab === 'production' && (
                        <Counter 
                          value={item.numericValue} 
                          duration={2000}
                          suffix={item.id === 'textile' ? ' млн' : item.id === 'food' ? '+' : '+'}
                          prefix={item.id === 'food' ? '>' : item.id === 'agro' ? '>' : ''}
                        />
                      )}
                      {activeTab === 'investment' && (
                        <span>{item.amount}</span>
                      )}
                    </div>
                  </div>

                  {activeTab === 'investment' && (
                    <div className={`bg-${colors.light} rounded-2xl p-6 border ${colors.border}`}>
                      <h3 className={`text-lg font-semibold mb-3 ${colors.text}`}>
                        {t('finance.progress')}
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-slate-600">
                          <span>{t('finance.completion')}</span>
                          <span className="font-semibold">{item.progress}%</span>
                        </div>
                        <ProgressBar progress={item.progress} color={item.color} />
                      </div>
                    </div>
                  )}

                  {activeTab === 'production' && item.capacity && (
                    <div className={`bg-${colors.light} rounded-2xl p-6 border ${colors.border}`}>
                      <h3 className={`text-lg font-semibold mb-3 ${colors.text}`}>
                        {t('finance.capacity')}
                      </h3>
                      <p className={`${colors.text} font-semibold text-xl`}>
                        {item.capacity}
                      </p>
                    </div>
                  )}
                </div>

                {/* Детальная информация */}
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${colors.text}`}>
                    {t('finance.detailedInfo')}
                  </h3>
                  <div className="space-y-4">
                    {Array.isArray(item.details) && item.details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`flex-shrink-0 w-3 h-3 rounded-full ${colors.medium} mt-2`}></div>
                        <p className="text-slate-700 leading-relaxed text-lg">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Дополнительная информация в зависимости от таба */}
                {activeTab === 'investment' && item.timeline && (
                  <div className="mt-8">
                    <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>
                      {t('finance.timeline')}
                    </h3>
                    <div className={`bg-${colors.light} rounded-2xl p-6 border ${colors.border}`}>
                      <p className={`${colors.text} font-semibold text-xl`}>
                        {item.timeline}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Футер модального окна */}
              <div className="p-8 border-t border-slate-200 bg-slate-50 rounded-b-3xl">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <p className="text-slate-600 text-sm">
                    {t('finance.contactForDetails')}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={handleInvestmentInquiry}
                      className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      {t('finance.cta.investmentButton')}
                    </button>
                    <button
                      onClick={handleFinancingRequest}
                      className="bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold border-2 border-slate-200 hover:border-green-600 hover:text-green-600 transition-all duration-300"
                    >
                      {t('finance.cta.financingButton')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'finance':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {financialStructures.map((item, index) => {
              const colors = colorMap[item.color];
              
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  className="group relative"
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 ${colors.border} shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                  >
                    {/* Акцентная градиентная полоса */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                    <div className="flex items-start space-x-4 mb-4">
                      <motion.div 
                        className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                        }}
                      >
                        <div className={colors.text}>
                          {item.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                          {item.title}
                        </h3>
                        
                        <div className="text-3xl font-black text-slate-900 mb-2">
                          <Counter 
                            value={item.numericValue} 
                            duration={item.duration}
                            suffix="+"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed flex-grow mb-4">
                      {item.description}
                    </p>

                    {/* Кнопка для подробностей */}
                    <div className="flex items-center justify-between mt-auto">
                      <button 
                        onClick={() => openModal(item)}
                        className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                      >
                        <span>{t('finance.more')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                      
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${colors.medium}`}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        );

      case 'production':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productionAssets.map((item, index) => {
                const colors = colorMap[item.color];
                
                return (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    className="group relative"
                    whileHover="hover"
                  >
                    <motion.div
                      className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 ${colors.border} shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                    >
                      {/* Акцентная градиентная полоса */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                          }}
                        >
                          <div className={colors.text}>
                            {item.icon}
                          </div>
                        </motion.div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                            {item.title}
                          </h3>
                          
                          <div className="text-3xl font-black text-slate-900 mb-2">
                            <Counter 
                              value={item.numericValue} 
                              duration={item.duration}
                              suffix={item.id === 'textile' ? ' млн' : item.id === 'food' ? '+' : '+'}
                              prefix={item.id === 'food' ? '>' : item.id === 'agro' ? '>' : ''}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed flex-grow mb-4">
                        {item.description}
                      </p>

                      <motion.div 
                        className={`bg-${item.color}-50 rounded-lg p-3 border ${colors.border} mb-4`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className={`${colors.text} font-semibold text-sm`}>{item.capacity}</p>
                      </motion.div>

                      {/* Кнопка для подробностей */}
                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          onClick={() => openModal(item)}
                          className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                        >
                          <span>{t('finance.more')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Экспортные данные */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t('finance.exportData.title')}</h3>
                  <p className="text-green-50 leading-relaxed mb-4 text-lg">
                    {t('finance.exportData.description')}
                  </p>
                  <div className="text-sm text-green-100 bg-white/20 rounded-lg p-3 inline-block">
                    {t('finance.exportData.source')}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-white/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      <Counter value={150} duration={3000} prefix="$" suffix=" млн" />
                    </div>
                    <div className="text-green-100 text-lg font-semibold">{t('finance.exportData.exportLabel')}</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      <Counter value={40} duration={2500} suffix=" тыс." />
                    </div>
                    <div className="text-green-100 text-lg font-semibold">{t('finance.exportData.employeesLabel')}</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'investment':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentProjects.map((project, index) => {
                const colors = colorMap[project.color];
                
                return (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className="group relative"
                    whileHover="hover"
                  >
                    <motion.div
                      className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 ${colors.border} shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                    >
                      {/* Акцентная градиентная полоса */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      <h3 className={`text-xl font-bold mb-4 ${colors.text}`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed flex-grow mb-4">
                        {project.description}
                      </p>
                      
                      <div className="space-y-4 mb-4">
                        <motion.div 
                          className={`bg-${project.color}-50 rounded-xl p-4 border ${colors.border}`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className={`${colors.text} font-semibold text-sm mb-1`}>
                            {t('finance.investmentAmount')}
                          </p>
                          <p className={`${colors.text} font-black text-xl`}>
                            {project.amount}
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className={`bg-${project.color}-50 rounded-xl p-4 border ${colors.border}`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className={`${colors.text} font-semibold text-sm mb-1`}>
                            {t('finance.timeline')}
                          </p>
                          <p className={`${colors.text} font-black text-lg`}>
                            {project.timeline}
                          </p>
                        </motion.div>

                        {/* Прогресс бар */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm text-slate-600">
                            <span>{t('finance.progress')}</span>
                            <span className="font-semibold">{project.progress}%</span>
                          </div>
                          <ProgressBar progress={project.progress} color={project.color} />
                        </div>
                      </div>

                      {/* Кнопка для подробностей */}
                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          onClick={() => openModal(project)}
                          className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                        >
                          <span>{t('finance.more')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Планы расширения */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{t('finance.expansionPlans.title')}</h3>
                  <p className="text-blue-50 leading-relaxed text-lg mb-6">
                    {t('finance.expansionPlans.description')}
                  </p>
                  <div className="flex items-center space-x-2 text-blue-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{t('finance.expansionPlans.timeline')}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <motion.div 
                    className="bg-white/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      <Counter value={5} duration={2000} suffix="+" />
                    </div>
                    <div className="text-blue-100 text-lg font-semibold">{t('finance.expansionPlans.factoriesLabel')}</div>
                  </motion.div>
                  <motion.div 
                    className="bg-white/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl font-black mb-2">
                      <Counter value={2000} duration={2500} suffix="+" />
                    </div>
                    <div className="text-blue-100 text-lg font-semibold">{t('finance.expansionPlans.jobsLabel')}</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
        {/* Улучшенные декоративные элементы фона */}
        <div className="absolute inset-0 opacity-15">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-20 left-5% w-40 h-40 bg-green-200 rounded-full blur-4xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
            className="absolute bottom-20 right-5% w-48 h-48 bg-blue-200 rounded-full blur-4xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute top-1/3 left-1/3 w-32 h-32 bg-cyan-200 rounded-full blur-4xl"
          />
          <motion.div
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 3 }}
            className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-emerald-200 rounded-full blur-4xl"
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
              className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-200/50 shadow-lg mb-8"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                {t('finance.badge')}
              </span>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-900 via-green-900 to-slate-900 bg-clip-text text-transparent">
                {t('finance.title')}
              </span>
            </motion.h2>
            
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center space-x-4 mb-8"
            >
              <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full"></div>
              <div className="w-6 h-6 rounded-full border-4 border-green-200 animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full"></div>
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
            >
              {t('finance.subtitle')}
            </motion.p>
          </motion.div>

          {/* Табы */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-2xl'
                      : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:shadow-lg border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.icon}
                  <span className="text-lg">{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Контент табов */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="wait">
                {renderTabContent()}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* CTA блок */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-4xl p-12 md:p-16 border-2 border-white shadow-2xl relative overflow-hidden">
              {/* Фоновые декоративные элементы */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <motion.h3 
                  variants={itemVariants}
                  className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
                >
                  <span className="bg-gradient-to-r from-green-600 to-cyan-600 bg-clip-text text-transparent">
                    {t('finance.cta.title')}
                  </span>
                </motion.h3>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                >
                  {t('finance.cta.description')}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.button
                    onClick={handleInvestmentInquiry}
                    className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: "0 20px 40px -10px rgba(5, 150, 105, 0.4)"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-lg">{t('finance.cta.investmentButton')}</span>
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
                    onClick={handleFinancingRequest}
                    className="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 hover:border-green-600 hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('finance.cta.financingButton')}</span>
                  </motion.button>
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  className="text-sm text-slate-500 mt-8 flex items-center justify-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('finance.cta.deadline')}</span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Модальное окно */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        item={selectedItem} 
      />
    </>
  );
};

export default ActivitiesFinance;