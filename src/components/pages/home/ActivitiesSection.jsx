import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ActivitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();

  const activities = [
    {
      id: 1,
      title: t('activities.items.0.title'),
      description: t('activities.items.0.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      path: "/activities/trade",
      color: "blue"
    },
    {
      id: 2,
      title: t('activities.items.1.title'),
      description: t('activities.items.1.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: "/activities/finance",
      color: "green"
    },
    {
      id: 3,
      title: t('activities.items.2.title'),
      description: t('activities.items.2.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      path: "/activities/education",
      color: "purple"
    },
    {
      id: 4,
      title: t('activities.items.3.title'),
      description: t('activities.items.3.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      path: "/activities/medicine",
      color: "red"
    },
    {
      id: 5,
      title: t('activities.items.4.title'),
      description: t('activities.items.4.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      path: "/activities/sports",
      color: "orange"
    },
    {
      id: 6,
      title: t('activities.items.5.title'),
      description: t('activities.items.5.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      path: "/activities/culture",
      color: "indigo"
    },
    {
      id: 7,
      title: t('activities.items.6.title'),
      description: t('activities.items.6.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      path: "/activities/social",
      color: "teal"
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', hover: 'hover:bg-blue-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', hover: 'hover:bg-green-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', hover: 'hover:bg-purple-100' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', hover: 'hover:bg-red-100' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', hover: 'hover:bg-orange-100' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', hover: 'hover:bg-indigo-100' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-600', hover: 'hover:bg-teal-100' }
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
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
            variants={textVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('activities.badge')}</span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('activities.title')}
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            variants={textVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('activities.subtitle')}
          </motion.p>
        </motion.div>

        {/* Сетка карточек */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {activities.map((activity, index) => {
            const colors = colorMap[activity.color];
            
            return (
              <motion.div
                key={activity.id}
                variants={cardVariants}
                className="group relative"
              >
                {/* Основная карточка */}
                <motion.div
                  className={`relative bg-white rounded-2xl p-6 border-2 ${colors.border} shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${colors.hover}`}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Верхний акцентный элемент */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-t-2xl" />

                  {/* Иконка */}
                  <motion.div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={colors.text}>
                      {activity.icon}
                    </div>
                  </motion.div>

                  {/* Заголовок */}
                  <h3 className={`text-xl font-bold ${colors.text} mb-3 group-hover:text-slate-800 transition-colors duration-300`}>
                    {activity.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {activity.description}
                  </p>

                  {/* Кнопка */}
                  <motion.div
                    className="mt-auto"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={activity.path}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group/btn"
                    >
                      <span>{t('activities.learnMore')}</span>
                      <motion.svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </Link>
                  </motion.div>

                  {/* Декоративный элемент при наведении */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.div>

                {/* Плавающий номер */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    delay: 0.3 + index * 0.1,
                    type: "spring", 
                    stiffness: 200 
                  }}
                >
                  <span className="text-slate-900 text-sm font-bold">{activity.id}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;