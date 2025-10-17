import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesMedicine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('centers');
  const [expandedProgram, setExpandedProgram] = useState(null);

  const medicalCenters = [
    {
      name: t('medicine.centers.0.name'),
      services: t('medicine.centers.0.services', { returnObjects: true }),
      icon: '🏥',
      color: 'blue',
      stats: t('medicine.centers.0.stats'),
      features: t('medicine.centers.0.features', { returnObjects: true }),
      image: '/images/medical-center-1.jpg'
    },
    {
      name: t('medicine.centers.1.name'),
      services: t('medicine.centers.1.services', { returnObjects: true }),
      icon: '👨‍⚕️',
      color: 'green',
      stats: t('medicine.centers.1.stats'),
      features: t('medicine.centers.1.features', { returnObjects: true }),
      image: '/images/family-medicine.jpg'
    },
    {
      name: t('medicine.centers.2.name'),
      services: t('medicine.centers.2.services', { returnObjects: true }),
      icon: '🦷',
      color: 'purple',
      stats: t('medicine.centers.2.stats'),
      features: t('medicine.centers.2.features', { returnObjects: true }),
      image: '/images/dental-center.jpg'
    },
    {
      name: t('medicine.centers.3.name'),
      services: t('medicine.centers.3.services', { returnObjects: true }),
      icon: '👁️',
      color: 'orange',
      stats: t('medicine.centers.3.stats'),
      features: t('medicine.centers.3.features', { returnObjects: true }),
      image: '/images/diagnostic-center.jpg'
    }
  ];

  const pandemicActions = [
    {
      amount: t('medicine.pandemic.actions.0.amount'),
      description: t('medicine.pandemic.actions.0.description'),
      icon: '💰',
      color: 'red',
      impact: t('medicine.pandemic.actions.0.impact'),
      timeline: t('medicine.pandemic.actions.0.timeline')
    },
    {
      amount: t('medicine.pandemic.actions.1.amount'),
      description: t('medicine.pandemic.actions.1.description'),
      icon: '🔄',
      color: 'blue',
      impact: t('medicine.pandemic.actions.1.impact'),
      timeline: t('medicine.pandemic.actions.1.timeline')
    },
    {
      amount: t('medicine.pandemic.actions.2.amount'),
      description: t('medicine.pandemic.actions.2.description'),
      icon: '🏨',
      color: 'green',
      impact: t('medicine.pandemic.actions.2.impact'),
      timeline: t('medicine.pandemic.actions.2.timeline')
    },
    {
      amount: t('medicine.pandemic.actions.3.amount'),
      description: t('medicine.pandemic.actions.3.description'),
      icon: '🏫',
      color: 'purple',
      impact: t('medicine.pandemic.actions.3.impact'),
      timeline: t('medicine.pandemic.actions.3.timeline')
    }
  ];

  const socialPrograms = [
    {
      title: t('medicine.socialPrograms.0.title'),
      description: t('medicine.socialPrograms.0.description'),
      detailed: t('medicine.socialPrograms.0.detailed'),
      icon: '💊',
      beneficiaries: t('medicine.socialPrograms.0.beneficiaries'),
      color: 'blue',
      achievements: t('medicine.socialPrograms.0.achievements', { returnObjects: true }),
      duration: t('medicine.socialPrograms.0.duration')
    },
    {
      title: t('medicine.socialPrograms.1.title'),
      description: t('medicine.socialPrograms.1.description'),
      detailed: t('medicine.socialPrograms.1.detailed'),
      icon: '🚐',
      beneficiaries: t('medicine.socialPrograms.1.beneficiaries'),
      color: 'green',
      achievements: t('medicine.socialPrograms.1.achievements', { returnObjects: true }),
      duration: t('medicine.socialPrograms.1.duration')
    },
    {
      title: t('medicine.socialPrograms.2.title'),
      description: t('medicine.socialPrograms.2.description'),
      detailed: t('medicine.socialPrograms.2.detailed'),
      icon: '👵',
      beneficiaries: t('medicine.socialPrograms.2.beneficiaries'),
      color: 'purple',
      achievements: t('medicine.socialPrograms.2.achievements', { returnObjects: true }),
      duration: t('medicine.socialPrograms.2.duration')
    }
  ];

  const researchProjects = [
    {
      title: t('medicine.research.0.title'),
      description: t('medicine.research.0.description'),
      icon: '🔬',
      progress: t('medicine.research.0.progress'),
      partners: t('medicine.research.0.partners', { returnObjects: true }),
      color: 'blue'
    },
    {
      title: t('medicine.research.1.title'),
      description: t('medicine.research.1.description'),
      icon: '🧬',
      progress: t('medicine.research.1.progress'),
      partners: t('medicine.research.1.partners', { returnObjects: true }),
      color: 'green'
    },
    {
      title: t('medicine.research.2.title'),
      description: t('medicine.research.2.description'),
      icon: '🧠',
      progress: t('medicine.research.2.progress'),
      partners: t('medicine.research.2.partners', { returnObjects: true }),
      color: 'purple'
    }
  ];

  const colorMap = {
    blue: { 
      bg: 'bg-blue-500', 
      text: 'text-blue-600', 
      light: 'bg-blue-50', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600',
      hover: 'hover:from-blue-600 hover:to-blue-700'
    },
    green: { 
      bg: 'bg-green-500', 
      text: 'text-green-600', 
      light: 'bg-green-50', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-green-600',
      hover: 'hover:from-green-600 hover:to-green-700'
    },
    purple: { 
      bg: 'bg-purple-500', 
      text: 'text-purple-600', 
      light: 'bg-purple-50', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600',
      hover: 'hover:from-purple-600 hover:to-purple-700'
    },
    orange: { 
      bg: 'bg-orange-500', 
      text: 'text-orange-600', 
      light: 'bg-orange-50', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-orange-600',
      hover: 'hover:from-orange-600 hover:to-orange-700'
    },
    red: { 
      bg: 'bg-red-500', 
      text: 'text-red-600', 
      light: 'bg-red-50', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-red-600',
      hover: 'hover:from-red-600 hover:to-red-700'
    }
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
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 30 },
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
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabs = [
    { id: 'centers', label: t('medicine.tabs.centers') },
    { id: 'pandemic', label: t('medicine.tabs.pandemic') },
    { id: 'social', label: t('medicine.tabs.social') },
    { id: 'research', label: t('medicine.tabs.research') }
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('medicine.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('medicine.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('medicine.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('medicine.subtitle')}
          </motion.p>
        </motion.div>

        {/* Основной лид с улучшенным дизайном */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <motion.div
            variants={cardVariants}
            className="relative bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-2xl overflow-hidden"
          >
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-100 rounded-full translate-y-16 -translate-x-16 opacity-50"></div>
            
            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
              <motion.div 
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white text-3xl sm:text-4xl">🩺</span>
              </motion.div>
              <div className="text-center lg:text-left flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {t('medicine.lead.title')}
                </h3>
                <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed mb-6">
                  {t('medicine.lead.description')}
                </p>
                
                {/* Статистика */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {t('medicine.lead.stats', { returnObjects: true }).map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-white rounded-2xl border border-slate-200 shadow-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Табы для навигации */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* Сеть медицинских центров */}
            {activeTab === 'centers' && (
              <motion.div
                key="centers"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8"
              >
                {medicalCenters.map((center, index) => {
                  const colors = colorMap[center.color];
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      whileHover="hover"
                      onClick={() => setExpandedProgram(expandedProgram === index ? null : index)}
                    >
                      <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300 mx-auto`}>
                        <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                          {center.icon}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-3 text-center">
                        {center.name}
                      </h4>
                      
                      <div className="text-center mb-4">
                        <div className="text-sm text-slate-500 mb-2">
                          {t('medicine.centers.statsLabel')}
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          {center.stats}
                        </div>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {center.services.slice(0, 3).map((service, serviceIndex) => (
                          <motion.li
                            key={serviceIndex}
                            className="flex items-center text-slate-600 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + serviceIndex * 0.05 }}
                          >
                            <svg className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {service}
                          </motion.li>
                        ))}
                      </ul>

                      <AnimatePresence>
                        {expandedProgram === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-slate-200">
                              <h5 className="font-semibold text-slate-800 mb-3">
                                {t('medicine.centers.featuresTitle')}
                              </h5>
                              <div className="space-y-2">
                                {center.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                    {feature}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        className={`w-full mt-4 py-3 bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white rounded-xl font-semibold transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('medicine.buttons.learnMore')}
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Действия в пандемию */}
            {activeTab === 'pandemic' && (
              <motion.div
                key="pandemic"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {pandemicActions.map((action, index) => {
                    const colors = colorMap[action.color];
                    return (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group"
                        whileHover="hover"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                            <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                              {action.icon}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                              {action.amount}
                            </div>
                            
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                              {action.description}
                            </p>

                            <div className="flex items-center justify-between text-sm">
                              <div className="text-slate-500">
                                {action.timeline}
                              </div>
                              <div className={`px-3 py-1 rounded-full ${colors.light} ${colors.text} font-semibold`}>
                                {action.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Дополнительная информация о стационарах */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {t('medicine.pandemic.hospitals', { returnObjects: true }).map((hospital, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-sm">
                          <span className="text-white text-2xl">🏨</span>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-900 mb-2">
                            {hospital.title}
                          </h4>
                          <p className="text-slate-600 mb-4">
                            {hospital.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {hospital.features.map((feature, featureIndex) => (
                              <span key={featureIndex} className="px-3 py-1 bg-white rounded-full text-sm text-slate-600 border border-blue-200">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Социальные программы */}
            {activeTab === 'social' && (
              <motion.div
                key="social"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {socialPrograms.map((program, index) => {
                  const colors = colorMap[program.color];
                  const isExpanded = expandedProgram === index;
                  
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      whileHover="hover"
                      onClick={() => setExpandedProgram(isExpanded ? null : index)}
                    >
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                          <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                            {program.icon}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">
                            {program.title}
                          </h4>
                          <p className="text-slate-600 text-base">
                            {program.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.light} ${colors.text} text-sm font-semibold`}>
                          {program.beneficiaries}
                        </div>
                        <div className="text-sm text-slate-500">
                          {program.duration}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-slate-200">
                              <p className="text-slate-700 mb-4">
                                {program.detailed}
                              </p>
                              
                              <div className="space-y-2">
                                <h5 className="font-semibold text-slate-800 text-sm">
                                  {t('medicine.achievements')}
                                </h5>
                                {program.achievements.map((achievement, achievementIndex) => (
                                  <div key={achievementIndex} className="flex items-center text-sm text-slate-600">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                    {achievement}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.button
                        className={`w-full mt-4 py-3 bg-gradient-to-r ${colors.gradient} ${colors.hover} text-white rounded-xl font-semibold transition-all duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('medicine.buttons.supportProgram')}
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Исследования и инновации */}
            {activeTab === 'research' && (
              <motion.div
                key="research"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {t('medicine.research.title')}
                  </h3>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    {t('medicine.research.subtitle')}
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                  {researchProjects.map((project, index) => {
                    const colors = colorMap[project.color];
                    return (
                      <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group"
                        whileHover="hover"
                      >
                        <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300`}>
                          <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                            {project.icon}
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-slate-900 mb-3">
                          {project.title}
                        </h4>
                        
                        <p className="text-slate-600 text-base leading-relaxed mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4">
                          <div className="text-sm text-slate-500 mb-2">
                            {t('medicine.research.progress')}
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${colors.bg}`}
                              initial={{ width: 0 }}
                              animate={{ width: project.progress }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-slate-800">
                            {t('medicine.research.partners')}
                          </div>
                          {project.partners.map((partner, partnerIndex) => (
                            <div key={partnerIndex} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {partner}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* CTA с улучшенным дизайном */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-2xl mb-8"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('medicine.cta.title')}
            </h3>
            <p className="text-slate-600 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              {t('medicine.cta.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('medicine.cta.buttons.appointment')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              <motion.button
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('medicine.cta.buttons.project')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Дополнительная информация */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 text-center"
          >
            {t('medicine.footer.stats', { returnObjects: true }).map((stat, index) => (
              <motion.div
                key={index}
                className="p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesMedicine;