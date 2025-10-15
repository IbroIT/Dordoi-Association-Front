import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(0);

  const milestones = [
    {
      year: "1991",
      title: t('history.milestones.0.title'),
      description: t('history.milestones.0.description'),
      image: "📅",
      stats: t('history.milestones.0.stats'),
      color: "blue"
    },
    {
      year: "1990s",
      title: t('history.milestones.1.title'),
      description: t('history.milestones.1.description'),
      image: "🎓",
      stats: t('history.milestones.1.stats'),
      color: "purple"
    },
    {
      year: "2005",
      title: t('history.milestones.2.title'),
      description: t('history.milestones.2.description'),
      image: "🎬",
      stats: t('history.milestones.2.stats'),
      color: "green"
    },
    {
      year: "2008",
      title: t('history.milestones.3.title'),
      description: t('history.milestones.3.description'),
      image: "📊",
      stats: t('history.milestones.3.stats'),
      color: "orange"
    },
    {
      year: "2010-2020",
      title: t('history.milestones.4.title'),
      description: t('history.milestones.4.description'),
      image: "💰",
      stats: t('history.milestones.4.stats'),
      color: "cyan"
    },
    {
      year: "2020",
      title: t('history.milestones.5.title'),
      description: t('history.milestones.5.description'),
      image: "🩺",
      stats: t('history.milestones.5.stats'),
      color: "red"
    },
    {
      year: "2021",
      title: t('history.milestones.6.title'),
      description: t('history.milestones.6.description'),
      image: "🚚",
      stats: t('history.milestones.6.stats'),
      color: "indigo"
    },
    {
      year: "2021",
      title: t('history.milestones.7.title'),
      description: t('history.milestones.7.description'),
      image: "📚",
      stats: t('history.milestones.7.stats'),
      color: "amber"
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', medium: 'bg-orange-100', dark: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' },
    cyan: { light: 'bg-cyan-50', medium: 'bg-cyan-100', dark: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-200' },
    red: { light: 'bg-red-50', medium: 'bg-red-100', dark: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' },
    indigo: { light: 'bg-indigo-50', medium: 'bg-indigo-100', dark: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200' },
    amber: { light: 'bg-amber-50', medium: 'bg-amber-100', dark: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' }
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

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200
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
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-200 rounded-full blur-2xl sm:blur-3xl"
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
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('history.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('history.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('history.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            {t('history.subtitle')}
          </motion.p>
        </motion.div>

        {/* Timeline - мобильная версия (вертикальная слева) */}
        <div className="block lg:hidden">
          <div className="relative">
            {/* Центральная линия для мобильных */}
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-6 sm:left-8 w-0.5 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
              style={{ originY: 0 }}
            />

            {/* Элементы таймлайна для мобильных */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => {
                const colors = colorMap[milestone.color];
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex"
                    onMouseEnter={() => setActiveYear(index)}
                    onMouseLeave={() => setActiveYear(0)}
                  >
                    {/* Точка на линии для мобильных */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`absolute left-6 sm:left-8 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 ${colors.dark} rounded-full border-2 border-white shadow-lg z-10 ${
                        activeYear === index ? 'scale-125' : ''
                      } transition-transform duration-300`}
                    />

                    {/* Карточка контента для мобильных */}
                    <motion.div
                      className="w-full ml-12 sm:ml-16"
                      whileHover={{ scale: 1.01, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${colors.border} ${colors.light} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                        
                        {/* Год */}
                        <div className="flex items-center mb-3 sm:mb-4">
                          <motion.div 
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${colors.dark} rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg flex-shrink-0`}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-white text-sm sm:text-base font-bold">{milestone.image}</span>
                          </motion.div>
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 truncate">{milestone.year}</h3>
                            <h4 className={`text-base sm:text-lg font-semibold ${colors.text} truncate`}>{milestone.title}</h4>
                          </div>
                        </div>

                        {/* Описание */}
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                          {milestone.description}
                        </p>

                        {/* Статистика */}
                        {milestone.stats && (
                          <div className={`inline-flex items-center px-2 py-1 rounded-full ${colors.medium} ${colors.text} text-xs sm:text-sm font-semibold`}>
                            {milestone.stats}
                          </div>
                        )}

                        {/* Декоративный элемент */}
                        <motion.div 
                          className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-6 sm:h-8 ${colors.dark} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          animate={{ scaleY: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline - десктоп версия (горизонтальная с чередованием) */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Центральная линия для десктопа */}
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"
              style={{ originX: 0 }}
            />

            {/* Элементы таймлайна для десктопа */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const colors = colorMap[milestone.color];
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? 'flex-row' : 'flex-row-reverse'
                    }`}
                    onMouseEnter={() => setActiveYear(index)}
                    onMouseLeave={() => setActiveYear(0)}
                  >
                    {/* Точка на линии для десктопа */}
                    <motion.div
                      variants={dotVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 ${colors.dark} rounded-full border-4 border-white shadow-lg z-10 ${
                        activeYear === index ? 'scale-125' : ''
                      } transition-transform duration-300`}
                    />

                    {/* Карточка контента для десктопа */}
                    <motion.div
                      className={`w-5/12 ${isLeft ? 'pr-8 xl:pr-12' : 'pl-8 xl:pl-12'}`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`relative rounded-2xl p-6 border-2 ${colors.border} ${colors.light} shadow-lg hover:shadow-xl transition-all duration-300 group`}>
                        
                        {/* Год */}
                        <div className="flex items-center mb-4">
                          <motion.div 
                            className={`w-10 h-10 xl:w-12 xl:h-12 ${colors.dark} rounded-xl flex items-center justify-center mr-4 shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <span className="text-white text-base xl:text-lg font-bold">{milestone.image}</span>
                          </motion.div>
                          <div>
                            <h3 className="text-xl xl:text-2xl font-bold text-slate-900">{milestone.year}</h3>
                            <h4 className={`text-lg xl:text-lg font-semibold ${colors.text}`}>{milestone.title}</h4>
                          </div>
                        </div>

                        {/* Описание */}
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Статистика */}
                        {milestone.stats && (
                          <div className={`inline-flex items-center px-3 py-1 rounded-full ${colors.medium} ${colors.text} text-sm font-semibold`}>
                            {milestone.stats}
                          </div>
                        )}

                        {/* Декоративный элемент */}
                        <motion.div 
                          className={`absolute top-4 right-4 w-2 h-8 ${colors.dark} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          animate={{ scaleY: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </div>
                    </motion.div>

                    {/* Пустое пространство для выравнивания */}
                    <div className="w-2/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Индикатор прогресса */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="inline-flex items-center space-x-3 sm:space-x-4 bg-slate-50 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-slate-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 text-sm sm:text-base font-medium">{t('history.timelineContinues')}</span>
            </div>
            <motion.div
              className="w-0.5 h-4 sm:h-6 bg-slate-300 rounded-full"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-slate-600 text-sm sm:text-base">{t('history.futureAhead')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHistory;