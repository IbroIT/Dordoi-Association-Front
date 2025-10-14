import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [startCounting, setStartCounting] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isInView) {
      setStartCounting(true);
    }
  }, [isInView]);

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      number: 1200,
      suffix: t('achievements.items.0.suffix'),
      title: t('achievements.items.0.title'),
      description: t('achievements.items.0.description'),
      color: "blue",
      delay: 0
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: 50,
      suffix: t('achievements.items.1.suffix'),
      title: t('achievements.items.1.title'),
      description: t('achievements.items.1.description'),
      color: "green",
      delay: 0.2
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      number: 15,
      suffix: t('achievements.items.2.suffix'),
      title: t('achievements.items.2.title'),
      description: t('achievements.items.2.description'),
      color: "purple",
      delay: 0.4
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-green-200 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
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
            variants={textVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('achievements.badge')}</span>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('achievements.title')}
          </motion.h2>

          <motion.div
            variants={textVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-8"
          />

          <motion.p
            variants={textVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('achievements.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const colors = colorMap[achievement.color];
            
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                custom={achievement.delay}
                className="relative group"
              >
                {/* Основная карточка */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 h-full">
                  {/* Верхний декоративный элемент */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 ${colors.medium} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className={colors.text}>
                      {achievement.icon}
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="pt-8 text-center">
                    {/* Число с анимацией */}
                    <motion.div
                      className={`text-5xl md:text-6xl font-bold ${colors.text} mb-4`}
                      initial={{ scale: 0 }}
                      animate={startCounting ? { scale: 1 } : { scale: 0 }}
                      transition={{ 
                        delay: 0.5 + achievement.delay, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                    >
                      {startCounting && (
                        <CountUp
                          start={0}
                          end={achievement.number}
                          duration={2.5}
                          delay={achievement.delay}
                          separator=","
                          suffix={achievement.suffix}
                        />
                      )}
                    </motion.div>

                    {/* Заголовок */}
                    <h3 className={`text-xl font-bold ${colors.text} mb-3`}>
                      {achievement.title}
                    </h3>

                    {/* Описание */}
                    <p className="text-slate-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Нижний акцент */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-1 ${colors.dark} rounded-full`}
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: achievement.delay
                    }}
                  />
                </div>

                {/* Плавающие элементы */}
                <motion.div
                  className={`absolute -top-2 -right-2 w-6 h-6 ${colors.dark} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  className={`absolute -bottom-2 -left-2 w-4 h-4 ${colors.dark} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.8, 1],
                    rotate: [0, -180, -360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;