import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesMedicine = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('centers');
  const [modalData, setModalData] = useState(null);

  const medicalCenters = [
    {
      name: t('medicine.centers.0.name'),
      services: t('medicine.centers.0.services', { returnObjects: true }),
      icon: '🏥',
      color: 'blue',
      features: t('medicine.centers.0.features', { returnObjects: true }),
      image: '/images/medical-center-1.jpg',
      description: t('medicine.centers.0.description', '')
    },
    {
      name: t('medicine.centers.1.name'),
      services: t('medicine.centers.1.services', { returnObjects: true }),
      icon: '👨‍⚕️',
      color: 'green',
      features: t('medicine.centers.1.features', { returnObjects: true }),
      image: '/images/family-medicine.jpg',
      description: t('medicine.centers.1.description', '')
    },
    {
      name: t('medicine.centers.2.name'),
      services: t('medicine.centers.2.services', { returnObjects: true }),
      icon: '🦷',
      color: 'purple',
      features: t('medicine.centers.2.features', { returnObjects: true }),
      image: '/images/dental-center.jpg',
      description: t('medicine.centers.2.description', '')
    },
    {
      name: t('medicine.centers.3.name'),
      services: t('medicine.centers.3.services', { returnObjects: true }),
      icon: '👁️',
      color: 'orange',
      features: t('medicine.centers.3.features', { returnObjects: true }),
      image: '/images/diagnostic-center.jpg',
      description: t('medicine.centers.3.description', '')
    }
  ];

  const pandemicActions = [
    {
      description: t('medicine.pandemic.actions.0.description'),
      icon: '💰',
      color: 'red',
      details: t('medicine.pandemic.actions.0.details', '')
    },
    {
      description: t('medicine.pandemic.actions.1.description'),
      icon: '🔄',
      color: 'blue',
      details: t('medicine.pandemic.actions.1.details', '')
    },
    {
      description: t('medicine.pandemic.actions.2.description'),
      icon: '🏨',
      color: 'green',
      details: t('medicine.pandemic.actions.2.details', '')
    },
    {
      description: t('medicine.pandemic.actions.3.description'),
      icon: '🏫',
      color: 'purple',
      details: t('medicine.pandemic.actions.3.details', '')
    }
  ];

  const socialPrograms = [
    {
      title: t('medicine.socialPrograms.0.title'),
      description: t('medicine.socialPrograms.0.description'),
      detailed: t('medicine.socialPrograms.0.detailed'),
      icon: '💊',
      color: 'blue',
      achievements: t('medicine.socialPrograms.0.achievements', { returnObjects: true })
    },
    {
      title: t('medicine.socialPrograms.1.title'),
      description: t('medicine.socialPrograms.1.description'),
      detailed: t('medicine.socialPrograms.1.detailed'),
      icon: '🚐',
      color: 'green',
      achievements: t('medicine.socialPrograms.1.achievements', { returnObjects: true })
    },
    {
      title: t('medicine.socialPrograms.2.title'),
      description: t('medicine.socialPrograms.2.description'),
      detailed: t('medicine.socialPrograms.2.detailed'),
      icon: '👵',
      color: 'purple',
      achievements: t('medicine.socialPrograms.2.achievements', { returnObjects: true })
    }
  ];

  const researchProjects = [
    {
      title: t('medicine.research.0.title'),
      description: t('medicine.research.0.description'),
      icon: '🔬',
      partners: t('medicine.research.0.partners', { returnObjects: true }),
      color: 'blue',
      details: t('medicine.research.0.details', '')
    },
    {
      title: t('medicine.research.1.title'),
      description: t('medicine.research.1.description'),
      icon: '🧬',
      partners: t('medicine.research.1.partners', { returnObjects: true }),
      color: 'green',
      details: t('medicine.research.1.details', '')
    },
    {
      title: t('medicine.research.2.title'),
      description: t('medicine.research.2.description'),
      icon: '🧠',
      partners: t('medicine.research.2.partners', { returnObjects: true }),
      color: 'purple',
      details: t('medicine.research.2.details', '')
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
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const tabs = [
    { id: 'centers', label: t('medicine.tabs.centers') },
    { id: 'pandemic', label: t('medicine.tabs.pandemic') },
    { id: 'social', label: t('medicine.tabs.social') },
    { id: 'research', label: t('medicine.tabs.research') }
  ];

  const openModal = (data, type) => {
    setModalData({ ...data, type });
  };

  const closeModal = () => {
    setModalData(null);
  };

  const ModalContent = () => {
    if (!modalData) return null;

    const colors = colorMap[modalData.color];

    switch (modalData.type) {
      case 'centers':
        return (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden">
            <div className={`h-48 ${colors.bg} relative`}>
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-4xl">{modalData.icon}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{modalData.name}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t('medicine.modal.services')}</h3>
                  <ul className="space-y-3">
                    {modalData.services.map((service, index) => (
                      <li key={index} className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t('medicine.modal.features')}</h3>
                  <div className="space-y-2">
                    {modalData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {modalData.description && (
                <div className="mt-8 p-6 bg-slate-50 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t('medicine.modal.about')}</h3>
                  <p className="text-slate-700 leading-relaxed">{modalData.description}</p>
                </div>
              )}
            </div>
          </div>
        );

      case 'social':
        return (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden">
            <div className={`h-32 ${colors.bg} relative`}>
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl">{modalData.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{modalData.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{t('medicine.modal.about')}</h3>
                  <p className="text-slate-700 leading-relaxed">{modalData.detailed}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{t('medicine.achievements')}</h3>
                  <div className="space-y-2">
                    {modalData.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'research':
        return (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden">
            <div className={`h-32 ${colors.bg} relative`}>
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl">{modalData.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{modalData.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">{modalData.description}</p>

              {modalData.details && (
                <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                  <p className="text-slate-700">{modalData.details}</p>
                </div>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{t('medicine.partners')}</h3>
                <div className="space-y-2">
                  {modalData.partners.map((partner, index) => (
                    <div key={index} className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full mt-8 py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold text-lg`}>
                {t('medicine.modal.details')}
              </button>
            </div>
          </div>
        );

      case 'pandemic':
        return (
          <div className="max-w-2xl mx-auto bg-white rounded-3xl overflow-hidden">
            <div className={`h-32 ${colors.bg} relative`}>
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <span className="text-3xl">{modalData.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{modalData.description}</h2>
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-slate-700 text-lg leading-relaxed mb-6">{modalData.description}</p>

              {modalData.details && (
                <div className="mb-6 p-4 bg-slate-50 rounded-xl">
                  <p className="text-slate-700">{modalData.details}</p>
                </div>
              )}

              <button className={`w-full py-4 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold text-lg`}>
                Узнать подробности
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                    >
                      <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center mb-4 group-hover:${colors.bg} transition-colors duration-300 mx-auto`}>
                        <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                          {center.icon}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-3 text-center">
                        {center.name}
                      </h4>
                      
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

                      <motion.button
                        onClick={() => openModal(center, 'centers')}
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
                        className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                        whileHover="hover"
                        onClick={() => openModal(action, 'pandemic')}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`flex-shrink-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                            <span className={`text-3xl group-hover:text-white transition-colors duration-300`}>
                              {action.icon}
                            </span>
                          </div>
                          
                          <div className="flex-1">
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                              {action.description}
                            </p>
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
                  
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      whileHover="hover"
                      onClick={() => openModal(program, 'social')}
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
                        className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                        whileHover="hover"
                        onClick={() => openModal(project, 'research')}
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
        </motion.div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {modalData && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={closeModal}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <ModalContent />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesMedicine;