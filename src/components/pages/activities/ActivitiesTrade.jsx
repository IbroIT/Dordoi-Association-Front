import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesTrade = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(0);

  const infrastructure = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: t('trade.infrastructure.items.0.value'),
      label: t('trade.infrastructure.items.0.label'),
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      value: t('trade.infrastructure.items.1.value'),
      label: t('trade.infrastructure.items.1.label'),
      color: 'green'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      value: t('trade.infrastructure.items.2.value'),
      label: t('trade.infrastructure.items.2.label'),
      color: 'orange'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      value: t('trade.infrastructure.items.3.value'),
      label: t('trade.infrastructure.items.3.label'),
      color: 'purple'
    }
  ];

  const logistics = [
    {
      title: t('trade.logistics.services.0.title'),
      description: t('trade.logistics.services.0.description'),
      icon: '🛃'
    },
    {
      title: t('trade.logistics.services.1.title'),
      description: t('trade.logistics.services.1.description'),
      icon: '🚚'
    },
    {
      title: t('trade.logistics.services.2.title'),
      description: t('trade.logistics.services.2.description'),
      icon: '🌐'
    },
    {
      title: t('trade.logistics.services.3.title'),
      description: t('trade.logistics.services.3.description'),
      icon: '💼'
    }
  ];

  const kpis = [
    {
      value: t('trade.kpi.items.0.value'),
      label: t('trade.kpi.items.0.label'),
      change: '+15%',
      color: 'blue'
    },
    {
      value: t('trade.kpi.items.1.value'),
      label: t('trade.kpi.items.1.label'),
      change: '+4.5B',
      color: 'green'
    },
    {
      value: t('trade.kpi.items.2.value'),
      label: t('trade.kpi.items.2.label'),
      change: '50K+',
      color: 'orange'
    },
    {
      value: t('trade.kpi.items.3.value'),
      label: t('trade.kpi.items.3.label'),
      change: '95%',
      color: 'purple'
    }
  ];

  const gallery = [1, 2, 3, 4, 5, 6].map(i => ({
    id: i,
    placeholder: t('trade.gallery.placeholder', { number: i })
  }));

  const colorMap = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' }
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
    hidden: { y: 20, opacity: 0 },
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
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-green-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 sm:mb-6"
          >
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('trade.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('trade.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('trade.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('trade.subtitle')}
          </motion.p>
        </motion.div>

        {/* Основной лид */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
              <motion.div 
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-2xl sm:text-3xl">🏪</span>
              </motion.div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {t('trade.lead.title')}
                </h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  {t('trade.lead.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Описание комплекса */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {t('trade.structure.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('trade.structure.description')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {['market', 'food', 'auto', 'warehouse'].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-lg">
                        {item === 'market' && '👕'}
                        {item === 'food' && '🍎'}
                        {item === 'auto' && '🚗'}
                        {item === 'warehouse' && '📦'}
                      </span>
                    </div>
                    <span className="text-slate-700 font-medium">
                      {t(`trade.structure.items.${index}`)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">🏗️</span>
                  </div>
                  <p className="text-blue-600 font-semibold">{t('trade.structure.imagePlaceholder')}</p>
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t('trade.infrastructure.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('trade.infrastructure.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {infrastructure.map((item, index) => {
              const colors = colorMap[item.color];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300`}>
                    <div className={`${colors.text} group-hover:text-white transition-colors duration-300`}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    {item.label}
                  </div>
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                {t('trade.logistics.title')}
              </h3>
              <div className="space-y-4">
                {logistics.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {t('trade.geography.title')}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {t('trade.geography.description')}
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['KZ', 'UZ', 'TJ', 'RU', 'CN', 'TR'].map((country, index) => (
                  <motion.div
                    key={country}
                    className="text-center p-3 rounded-lg bg-blue-50 border border-blue-200"
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl mb-1">{getFlagEmoji(country)}</div>
                    <div className="text-sm font-medium text-slate-700">
                      {t(`trade.geography.countries.${index}`)}
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t('trade.kpi.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('trade.kpi.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {kpis.map((kpi, index) => {
              const colors = colorMap[kpi.color];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {kpi.value}
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base mb-3">
                    {kpi.label}
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${colors.light} ${colors.text}`}>
                    {kpi.change}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Кейс поставщика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">
              <motion.div 
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-2xl sm:text-3xl">💼</span>
              </motion.div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  {t('trade.caseStudy.title')}
                </h3>
                <blockquote className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-4 italic">
                  "{t('trade.caseStudy.quote')}"
                </blockquote>
                <div className="text-slate-600">
                  <strong>{t('trade.caseStudy.author')}</strong>, {t('trade.caseStudy.position')}
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
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t('trade.gallery.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('trade.gallery.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="aspect-square rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 border-2 border-slate-200 overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveImage(index)}
              >
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:rotate-12 transition-transform duration-300">
                      <span className="text-white text-sm sm:text-lg">📸</span>
                    </div>
                    <p className="text-blue-600 text-xs sm:text-sm font-medium">{item.placeholder}</p>
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
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-blue-200 mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {t('trade.cta.title')}
            </h3>
            <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
              {t('trade.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('trade.cta.buttons.rent')}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                className="border-2 border-green-600 text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('trade.cta.buttons.logistics')}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
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