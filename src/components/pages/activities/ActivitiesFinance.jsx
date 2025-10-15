import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesFinance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('finance');

  const financialStructures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('finance.financialStructures.0.title'),
      description: t('finance.financialStructures.0.description'),
      stats: t('finance.financialStructures.0.stats')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('finance.financialStructures.1.title'),
      description: t('finance.financialStructures.1.description'),
      stats: t('finance.financialStructures.1.stats')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('finance.financialStructures.2.title'),
      description: t('finance.financialStructures.2.description'),
      stats: t('finance.financialStructures.2.stats')
    }
  ];

  const productionAssets = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t('finance.productionAssets.0.title'),
      description: t('finance.productionAssets.0.description'),
      capacity: t('finance.productionAssets.0.capacity')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: t('finance.productionAssets.1.title'),
      description: t('finance.productionAssets.1.description'),
      capacity: t('finance.productionAssets.1.capacity')
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 013 15.546M21 12V9a2 2 0 00-2-2h-2.5M3 12V9a2 2 0 012-2h2.5m0 0V5a2 2 0 012-2h2a2 2 0 012 2v2M7.5 7h9" />
        </svg>
      ),
      title: t('finance.productionAssets.2.title'),
      description: t('finance.productionAssets.2.description'),
      capacity: t('finance.productionAssets.2.capacity')
    }
  ];

  const investmentProjects = [
    {
      title: t('finance.investmentProjects.0.title'),
      description: t('finance.investmentProjects.0.description'),
      amount: t('finance.investmentProjects.0.amount'),
      timeline: t('finance.investmentProjects.0.timeline')
    },
    {
      title: t('finance.investmentProjects.1.title'),
      description: t('finance.investmentProjects.1.description'),
      amount: t('finance.investmentProjects.1.amount'),
      timeline: t('finance.investmentProjects.1.timeline')
    },
    {
      title: t('finance.investmentProjects.2.title'),
      description: t('finance.investmentProjects.2.description'),
      amount: t('finance.investmentProjects.2.amount'),
      timeline: t('finance.investmentProjects.2.timeline')
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
          className="absolute top-10 left-5 w-32 h-32 bg-green-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-blue-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-200 rounded-full blur-2xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6"
          >
            <span className="text-green-600 text-sm font-semibold">{t('finance.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('finance.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('finance.subtitle')}
          </motion.p>
        </motion.div>

        {/* Табы для переключения между разделами */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['finance', 'production', 'investment'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`finance.tabs.${tab}`)}
            </motion.button>
          ))}
        </motion.div>

        {/* Контент табов */}
        <div className="mb-16">
          {/* Финансовые структуры */}
          {activeTab === 'finance' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {financialStructures.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="text-green-600">
                        {item.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  </div>
                  
                  <motion.p 
                    className="text-slate-600 mb-4 leading-relaxed"
                    whileHover={{ x: 3 }}
                  >
                    {item.description}
                  </motion.p>
                  
                  <motion.div 
                    className="bg-green-50 rounded-lg p-3 border border-green-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-green-700 font-semibold text-sm">{item.stats}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Производственные активы */}
          {activeTab === 'production' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productionAssets.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div 
                        className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <div className="text-blue-600">
                          {item.icon}
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    
                    <motion.p 
                      className="text-slate-600 mb-4 leading-relaxed"
                      whileHover={{ x: 3 }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.div 
                      className="bg-blue-50 rounded-lg p-3 border border-blue-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <p className="text-blue-700 font-semibold text-sm">{item.capacity}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Экспортные данные */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('finance.exportData.title')}</h3>
                    <p className="text-green-50 leading-relaxed mb-4">
                      {t('finance.exportData.description')}
                    </p>
                    <div className="text-xs text-green-100">
                      {t('finance.exportData.source')}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('finance.exportData.exportValue')}</div>
                      <div className="text-green-100 text-sm">{t('finance.exportData.exportLabel')}</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('finance.exportData.employees')}</div>
                      <div className="text-green-100 text-sm">{t('finance.exportData.employeesLabel')}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Инвестиционные проекты */}
          {activeTab === 'investment' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {investmentProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group"
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                    
                    <motion.p 
                      className="text-slate-600 mb-4 leading-relaxed"
                      whileHover={{ x: 3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    <div className="space-y-3">
                      <motion.div 
                        className="bg-cyan-50 rounded-lg p-3 border border-cyan-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-cyan-700 font-semibold text-sm">
                          <span className="font-bold">{t('finance.investmentAmount')}: </span>
                          {project.amount}
                        </p>
                      </motion.div>
                      <motion.div 
                        className="bg-orange-50 rounded-lg p-3 border border-orange-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <p className="text-orange-700 font-semibold text-sm">
                          <span className="font-bold">{t('finance.timeline')}: </span>
                          {project.timeline}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Планы расширения */}
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t('finance.expansionPlans.title')}</h3>
                    <p className="text-blue-50 leading-relaxed">
                      {t('finance.expansionPlans.description')}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('finance.expansionPlans.newFactories')}</div>
                      <div className="text-blue-100 text-sm">{t('finance.expansionPlans.factoriesLabel')}</div>
                    </motion.div>
                    <motion.div 
                      className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl font-bold mb-1">{t('finance.expansionPlans.jobs')}</div>
                      <div className="text-blue-100 text-sm">{t('finance.expansionPlans.jobsLabel')}</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t('finance.cta.title')}
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('finance.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{t('finance.cta.investmentButton')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('finance.cta.financingButton')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesFinance;