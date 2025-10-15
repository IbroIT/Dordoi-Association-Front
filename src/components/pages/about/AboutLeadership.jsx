import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutLeadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();

  const leaders = [
    {
      id: 1,
      name: t('leadership.persons.0.name'),
      position: t('leadership.persons.0.position'),
      bio: t('leadership.persons.0.bio'),
      achievements: [
        t('leadership.persons.0.achievements.0'),
        t('leadership.persons.0.achievements.1'),
        t('leadership.persons.0.achievements.2')
      ]
    },
    {
      id: 2,
      name: t('leadership.persons.1.name'),
      position: t('leadership.persons.1.position'),
      bio: t('leadership.persons.1.bio'),
      achievements: [
        t('leadership.persons.1.achievements.0'),
        t('leadership.persons.1.achievements.1'),
        t('leadership.persons.1.achievements.2')
      ]
    },
    {
      id: 3,
      name: t('leadership.persons.2.name'),
      position: t('leadership.persons.2.position'),
      bio: t('leadership.persons.2.bio'),
      achievements: [
        t('leadership.persons.2.achievements.0'),
        t('leadership.persons.2.achievements.1'),
        t('leadership.persons.2.achievements.2')
      ]
    },
    {
      id: 4,
      name: t('leadership.persons.3.name'),
      position: t('leadership.persons.3.position'),
      bio: t('leadership.persons.3.bio'),
      achievements: [
        t('leadership.persons.3.achievements.0'),
        t('leadership.persons.3.achievements.1'),
        t('leadership.persons.3.achievements.2')
      ]
    }
  ];

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

  const handleDownloadPDF = () => {
    // Эмуляция загрузки PDF
    const link = document.createElement('a');
    link.href = '/files/leadership-list.pdf'; // Путь к PDF файлу
    link.download = 'leadership-list.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Субтлный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-blue-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-cyan-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-200 rounded-full blur-2xl"
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
            <span className="text-blue-600 text-sm font-semibold">{t('leadership.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('leadership.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('leadership.subtitle')}
          </motion.p>
        </motion.div>

        {/* Сетка карточек руководства */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12"
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 overflow-hidden"
              whileHover={{ y: -5 }}
            >
              <div className="relative p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Фото руководителя */}
                  <motion.div
                    className="flex-shrink-0 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 relative overflow-hidden border-2 border-white shadow-lg">
                      {/* Заглушка для фото */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-sm">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <p className="text-xs text-blue-600 font-medium">{t('leadership.photoPlaceholder')}</p>
                        </div>
                      </div>
                      
                      {/* Декоративные элементы */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      />
                    </div>
                    
                    {/* Статус онлайн */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </motion.div>

                  {/* Информация о руководителе */}
                  <div className="flex-1 min-w-0">
                    <motion.h3 
                      className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      {leader.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-blue-600 font-semibold mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {leader.position}
                    </motion.p>

                    <motion.p 
                      className="text-slate-600 leading-relaxed mb-4 text-sm"
                      whileHover={{ x: 3 }}
                    >
                      {leader.bio}
                    </motion.p>

                    {/* Ключевые достижения */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t('leadership.achievementsTitle')}
                      </h4>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex}
                            className="flex items-start text-xs text-slate-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + achievementIndex * 0.05 }}
                          >
                            <span className="w-1 h-1 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Декоративный уголок */}
                <motion.div 
                  className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-bl-2xl opacity-90"
                  whileHover={{ width: 40, height: 40 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Анимация при наведении */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLeadership;