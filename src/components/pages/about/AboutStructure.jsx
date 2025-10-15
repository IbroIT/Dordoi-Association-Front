import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeDivision, setActiveDivision] = useState(null);

  const divisions = [
    { 
      id: 'trade',
      name: t('structure.divisions.trade'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'blue'
    },
    { 
      id: 'logistics',
      name: t('structure.divisions.logistics'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'cyan'
    },
    { 
      id: 'finance',
      name: t('structure.divisions.finance'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green'
    },
    { 
      id: 'education',
      name: t('structure.divisions.education'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: 'orange'
    },
    { 
      id: 'medicine',
      name: t('structure.divisions.medicine'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: 'red'
    },
    { 
      id: 'sport',
      name: t('structure.divisions.sport'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'purple'
    },
    { 
      id: 'culture',
      name: t('structure.divisions.culture'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: 'yellow'
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', dark: 'bg-blue-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200', dark: 'bg-cyan-600' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', dark: 'bg-green-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', dark: 'bg-orange-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200', dark: 'bg-red-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', dark: 'bg-purple-600' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200', dark: 'bg-yellow-600' }
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

  const treeVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                >
                  <motion.div
                    className={`relative bg-white rounded-2xl p-4 border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                      activeDivision === division.id ? 'transform scale-105' : ''
                    }`}
                    whileHover={{ y: -5 }}
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

        {/* Дочерние компании */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-3xl p-8 md:p-12 border border-slate-200"
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
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5, scale: 1.02 }}
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
                    
                    <motion.button
                      className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>{t('structure.subsidiaries.learnMore')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
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