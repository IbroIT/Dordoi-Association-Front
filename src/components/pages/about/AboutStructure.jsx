import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeDivision, setActiveDivision] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState(null);

  const divisions = [
    { 
      id: 'trade',
      name: t('structure.divisions.trade.name'),
      description: t('structure.divisions.trade.description'),
      detailed: t('structure.divisions.trade.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'blue',
      stats: t('structure.divisions.trade.stats'),
      achievements: t('structure.divisions.trade.achievements', { returnObjects: true }),
      team: t('structure.divisions.trade.team')
    },
    { 
      id: 'logistics',
      name: t('structure.divisions.logistics.name'),
      description: t('structure.divisions.logistics.description'),
      detailed: t('structure.divisions.logistics.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'cyan',
      stats: t('structure.divisions.logistics.stats'),
      achievements: t('structure.divisions.logistics.achievements', { returnObjects: true }),
      team: t('structure.divisions.logistics.team')
    },
    { 
      id: 'finance',
      name: t('structure.divisions.finance.name'),
      description: t('structure.divisions.finance.description'),
      detailed: t('structure.divisions.finance.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green',
      stats: t('structure.divisions.finance.stats'),
      achievements: t('structure.divisions.finance.achievements', { returnObjects: true }),
      team: t('structure.divisions.finance.team')
    },
    { 
      id: 'education',
      name: t('structure.divisions.education.name'),
      description: t('structure.divisions.education.description'),
      detailed: t('structure.divisions.education.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: 'orange',
      stats: t('structure.divisions.education.stats'),
      achievements: t('structure.divisions.education.achievements', { returnObjects: true }),
      team: t('structure.divisions.education.team')
    },
    { 
      id: 'medicine',
      name: t('structure.divisions.medicine.name'),
      description: t('structure.divisions.medicine.description'),
      detailed: t('structure.divisions.medicine.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'red',
      stats: t('structure.divisions.medicine.stats'),
      achievements: t('structure.divisions.medicine.achievements', { returnObjects: true }),
      team: t('structure.divisions.medicine.team')
    },
    { 
      id: 'sport',
      name: t('structure.divisions.sport.name'),
      description: t('structure.divisions.sport.description'),
      detailed: t('structure.divisions.sport.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'purple',
      stats: t('structure.divisions.sport.stats'),
      achievements: t('structure.divisions.sport.achievements', { returnObjects: true }),
      team: t('structure.divisions.sport.team')
    },
    { 
      id: 'culture',
      name: t('structure.divisions.culture.name'),
      description: t('structure.divisions.culture.description'),
      detailed: t('structure.divisions.culture.detailed'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'yellow',
      stats: t('structure.divisions.culture.stats'),
      achievements: t('structure.divisions.culture.achievements', { returnObjects: true }),
      team: t('structure.divisions.culture.team')
    }
  ];

  const colorMap = {
    blue: { 
      bg: 'bg-blue-100', 
      text: 'text-blue-600', 
      border: 'border-blue-200', 
      dark: 'bg-blue-600',
      gradient: 'from-blue-500 to-blue-600',
      light: 'bg-blue-50'
    },
    cyan: { 
      bg: 'bg-cyan-100', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200', 
      dark: 'bg-cyan-600',
      gradient: 'from-cyan-500 to-cyan-600',
      light: 'bg-cyan-50'
    },
    green: { 
      bg: 'bg-green-100', 
      text: 'text-green-600', 
      border: 'border-green-200', 
      dark: 'bg-green-600',
      gradient: 'from-green-500 to-green-600',
      light: 'bg-green-50'
    },
    orange: { 
      bg: 'bg-orange-100', 
      text: 'text-orange-600', 
      border: 'border-orange-200', 
      dark: 'bg-orange-600',
      gradient: 'from-orange-500 to-orange-600',
      light: 'bg-orange-50'
    },
    red: { 
      bg: 'bg-red-100', 
      text: 'text-red-600', 
      border: 'border-red-200', 
      dark: 'bg-red-600',
      gradient: 'from-red-500 to-red-600',
      light: 'bg-red-50'
    },
    purple: { 
      bg: 'bg-purple-100', 
      text: 'text-purple-600', 
      border: 'border-purple-200', 
      dark: 'bg-purple-600',
      gradient: 'from-purple-500 to-purple-600',
      light: 'bg-purple-50'
    },
    yellow: { 
      bg: 'bg-yellow-100', 
      text: 'text-yellow-600', 
      border: 'border-yellow-200', 
      dark: 'bg-yellow-600',
      gradient: 'from-yellow-500 to-yellow-600',
      light: 'bg-yellow-50'
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

  const treeVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4,
        ease: "easeIn"
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

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-green-200 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('structure.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('structure.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('structure.subtitle')}
          </motion.p>
        </motion.div>

        {/* Дерево подразделений */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mb-20"
        >
          {/* Соединительные линии */}
          <motion.div
            variants={treeVariants}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6">
            {divisions.map((division, index) => {
              const colors = colorMap[division.color];
              return (
                <motion.div
                  key={division.id}
                  variants={itemVariants}
                  className="relative group"
                  onMouseEnter={() => setActiveDivision(division.id)}
                  onMouseLeave={() => setActiveDivision(null)}
                  onClick={() => setSelectedDivision(selectedDivision === division.id ? null : division.id)}
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl p-4 border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeDivision === division.id ? 'transform scale-105' : ''
                    } ${
                      selectedDivision === division.id ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                    }`}
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300 ${
                      activeDivision === division.id ? colors.dark : ''
                    }`}>
                      <div className={activeDivision === division.id ? 'text-white' : colors.text}>
                        {division.icon}
                      </div>
                    </div>
                    
                    <h3 className={`text-center font-semibold transition-colors duration-300 ${
                      activeDivision === division.id ? colors.text : 'text-slate-700'
                    }`}>
                      {division.name}
                    </h3>

                    {/* Индикатор активного состояния */}
                    <motion.div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${colors.dark} rounded-full`}
                      initial={{ scale: 0 }}
                      animate={{ scale: activeDivision === division.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Статистика при ховере */}
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-lg border border-slate-200 text-xs font-medium text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {division.stats}
                    </motion.div>
                  </motion.div>

                  {/* Соединительные точки для мобильных */}
                  {index < divisions.length - 1 && (
                    <>
                      <div className="lg:hidden absolute top-1/2 -right-2 w-4 h-0.5 bg-slate-300 transform -translate-y-1/2"></div>
                      <div className="lg:hidden absolute -bottom-6 left-1/2 w-0.5 h-4 bg-slate-300 transform -translate-x-1/2"></div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Детали выбранного подразделения */}
        <AnimatePresence>
          {selectedDivision && (
            <motion.div
              variants={detailVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-16"
            >
              {divisions.map((division) => {
                if (division.id !== selectedDivision) return null;
                const colors = colorMap[division.color];
                
                return (
                  <div key={division.id} className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200 shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Левая колонка - основная информация */}
                      <div className="lg:w-2/3">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center`}>
                              <div className={colors.text}>
                                {division.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-slate-900 mb-2">
                                {division.name}
                              </h3>
                              <p className="text-lg text-slate-600">
                                {division.description}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            onClick={() => setSelectedDivision(null)}
                            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.button>
                        </div>

                        <p className="text-slate-700 text-lg leading-relaxed mb-8">
                          {division.detailed}
                        </p>

                        {/* Достижения */}
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-slate-900 mb-4">
                            {t('structure.achievements')}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {division.achievements.map((achievement, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200"
                              >
                                <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-slate-700">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Правая колонка - статистика и команда */}
                      <div className="lg:w-1/3">
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                          <h4 className="text-xl font-bold text-slate-900 mb-6">
                            {t('structure.divisionDetails')}
                          </h4>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="text-sm text-slate-500 mb-1">
                                {t('structure.teamSize')}
                              </div>
                              <div className="text-lg font-semibold text-slate-900">
                                {division.team}
                              </div>
                            </div>
                            
                            <div>
                              <div className="text-sm text-slate-500 mb-1">
                                {t('structure.performance')}
                              </div>
                              <div className="text-lg font-semibold text-slate-900">
                                {division.stats}
                              </div>
                            </div>

                            <motion.button
                              className={`w-full mt-6 py-3 bg-gradient-to-r ${colors.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {t('structure.buttons.contactDivision')}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Дочерние компании */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-3xl p-8 md:p-12 border border-slate-200 bg-white shadow-lg"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('structure.subsidiaries.title')}
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('structure.subsidiaries.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={() => setSelectedDivision(division.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${colorMap[division.color].bg} rounded-xl flex items-center justify-center group-hover:${colorMap[division.color].dark} transition-colors duration-300`}>
                    <div className={colorMap[division.color].text}>
                      {division.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {division.name}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {t(`structure.subsidiaries.${division.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <motion.button
                        className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>{t('structure.subsidiaries.learnMore')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                      
                      <div className="text-sm text-slate-500">
                        {division.team}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Кнопка просмотра всех компаний */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.button
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('structure.subsidiaries.viewAll')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStructure;