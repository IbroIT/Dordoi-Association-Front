import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesMedicine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();

  const medicalCenters = [
    {
      name: t('medicine.centers.0.name'),
      services: t('medicine.centers.0.services', { returnObjects: true }),
      icon: '🏥',
      color: 'blue'
    },
    {
      name: t('medicine.centers.1.name'),
      services: t('medicine.centers.1.services', { returnObjects: true }),
      icon: '👨‍⚕️',
      color: 'green'
    },
    {
      name: t('medicine.centers.2.name'),
      services: t('medicine.centers.2.services', { returnObjects: true }),
      icon: '🦷',
      color: 'purple'
    },
    {
      name: t('medicine.centers.3.name'),
      services: t('medicine.centers.3.services', { returnObjects: true }),
      icon: '👁️',
      color: 'orange'
    }
  ];

  const pandemicActions = [
    {
      amount: t('medicine.pandemic.actions.0.amount'),
      description: t('medicine.pandemic.actions.0.description'),
      icon: '💰',
      color: 'red'
    },
    {
      amount: t('medicine.pandemic.actions.1.amount'),
      description: t('medicine.pandemic.actions.1.description'),
      icon: '🔄',
      color: 'blue'
    },
    {
      amount: t('medicine.pandemic.actions.2.amount'),
      description: t('medicine.pandemic.actions.2.description'),
      icon: '🏨',
      color: 'green'
    },
    {
      amount: t('medicine.pandemic.actions.3.amount'),
      description: t('medicine.pandemic.actions.3.description'),
      icon: '🏫',
      color: 'purple'
    }
  ];

  const socialPrograms = [
    {
      title: t('medicine.socialPrograms.0.title'),
      description: t('medicine.socialPrograms.0.description'),
      icon: '💊',
      beneficiaries: t('medicine.socialPrograms.0.beneficiaries'),
      color: 'blue'
    },
    {
      title: t('medicine.socialPrograms.1.title'),
      description: t('medicine.socialPrograms.1.description'),
      icon: '🚐',
      beneficiaries: t('medicine.socialPrograms.1.beneficiaries'),
      color: 'green'
    },
    {
      title: t('medicine.socialPrograms.2.title'),
      description: t('medicine.socialPrograms.2.description'),
      icon: '👵',
      beneficiaries: t('medicine.socialPrograms.2.beneficiaries'),
      color: 'purple'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
    red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' }
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
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-green-200 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-purple-200 rounded-full blur-2xl sm:blur-3xl"
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
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('medicine.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('medicine.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('medicine.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('medicine.subtitle')}
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
                <span className="text-white text-2xl sm:text-3xl">🩺</span>
              </motion.div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {t('medicine.lead.title')}
                </h3>
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  {t('medicine.lead.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Сеть медицинских центров */}
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
              {t('medicine.centers.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('medicine.centers.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {medicalCenters.map((center, index) => {
              const colors = colorMap[center.color];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-slate-200 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300 mx-auto`}>
                    <span className={`text-2xl group-hover:text-white transition-colors duration-300`}>
                      {center.icon}
                    </span>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 text-center">
                    {center.name}
                  </h4>
                  
                  <ul className="space-y-2">
                    {center.services.map((service, serviceIndex) => (
                      <motion.li
                        key={serviceIndex}
                        className="flex items-center text-slate-600 text-sm sm:text-base"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + serviceIndex * 0.05 }}
                      >
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Действия в пандемию */}
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
              {t('medicine.pandemic.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('medicine.pandemic.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pandemicActions.map((action, index) => {
              const colors = colorMap[action.color];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-slate-200 hover:shadow-lg transition-all duration-300 group text-center"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300 mx-auto`}>
                    <span className={`text-2xl group-hover:text-white transition-colors duration-300`}>
                      {action.icon}
                    </span>
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                    {action.amount}
                  </div>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {action.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Дополнительная информация о стационарах */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-8 sm:mt-12"
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 border border-blue-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white text-xl">🏨</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {t('medicine.pandemic.hospitals.0.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('medicine.pandemic.hospitals.0.description')}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariants}
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-6 border border-green-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-sm">
                    <span className="text-white text-xl">🏫</span>
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {t('medicine.pandemic.hospitals.1.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('medicine.pandemic.hospitals.1.description')}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Социальные программы */}
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
              {t('medicine.socialPrograms.title')}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('medicine.socialPrograms.subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {socialPrograms.map((program, index) => {
              const colors = colorMap[program.color];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                      <span className={`text-xl group-hover:text-white transition-colors duration-300`}>
                        {program.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {program.title}
                      </h4>
                      <p className="text-slate-600 text-sm sm:text-base">
                        {program.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.light} ${colors.text} text-sm font-semibold`}>
                    {program.beneficiaries}
                  </div>
                </motion.div>
              );
            })}
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
              {t('medicine.cta.title')}
            </h3>
            <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
              {t('medicine.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('medicine.cta.buttons.appointment')}</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                className="border-2 border-green-600 text-green-600 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('medicine.cta.buttons.project')}</span>
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

export default ActivitiesMedicine;