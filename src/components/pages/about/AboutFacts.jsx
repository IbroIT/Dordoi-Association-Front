import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutFacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();

  const facts = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t('facts.items.forbes.title'),
      description: t('facts.items.forbes.description'),
      value: t('facts.items.forbes.value'),
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: t('facts.items.smokeless.title'),
      description: t('facts.items.smokeless.description'),
      value: t('facts.items.smokeless.value'),
      color: 'green'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('facts.items.tax.title'),
      description: t('facts.items.tax.description'),
      value: t('facts.items.tax.value'),
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('facts.items.export.title'),
      description: t('facts.items.export.description'),
      value: t('facts.items.export.value'),
      color: 'purple'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('facts.items.employment.title'),
      description: t('facts.items.employment.description'),
      value: t('facts.items.employment.value'),
      color: 'cyan'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('facts.items.infrastructure.title'),
      description: t('facts.items.infrastructure.description'),
      value: t('facts.items.infrastructure.value'),
      color: 'red'
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', medium: 'bg-orange-100', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
    cyan: { light: 'bg-cyan-50', medium: 'bg-cyan-100', dark: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200' },
    red: { light: 'bg-red-50', medium: 'bg-red-100', dark: 'bg-red-600', text: 'text-red-600', border: 'border-red-200' }
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

  const handleDownloadBrochure = () => {
    // Здесь будет логика скачивания брошюры
    console.log('Download brochure');
    // В реальном приложении это может быть:
    // window.open('/brochure-30-years.pdf', '_blank');
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-600 text-sm font-semibold">{t('facts.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('facts.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('facts.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('facts.subtitle')}
          </motion.p>
        </motion.div>

        {/* Карточки с фактами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {facts.map((fact, index) => {
            const colors = colorMap[fact.color];
            return (
              <motion.div
                key={fact.title}
                variants={cardVariants}
                className="group relative"
              >
                <motion.div
                  className="relative bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 h-full overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Акцентная полоса */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${colors.dark}`}></div>
                  
                  <div className="flex items-start space-x-4 mb-4">
                    <motion.div 
                      className={`flex-shrink-0 w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center group-hover:${colors.dark} transition-colors duration-300`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={colors.text}>
                        {fact.icon}
                      </div>
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold mb-2 ${colors.text}`}>
                        {fact.title}
                      </h3>
                      
                      {/* Значение факта */}
                      <motion.div 
                        className="text-2xl md:text-3xl font-bold text-slate-900 mb-2"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                      >
                        {fact.value}
                      </motion.div>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {fact.description}
                  </p>

                  {/* Декоративный элемент при наведении */}
                  <motion.div
                    className={`absolute -bottom-8 -right-8 w-16 h-16 ${colors.light} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl p-8 md:p-12 border-2 border-slate-200 shadow-2xl relative overflow-hidden"
          >
            {/* Фоновые декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
              >
                {t('facts.cta.title')}
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {t('facts.cta.description')}
              </motion.p>

              <motion.button
                onClick={handleDownloadBrochure}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>{t('facts.cta.button')}</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.button>

              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500 mt-4"
              >
                {t('facts.cta.fileInfo')}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFacts;