import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapIcon, RocketIcon, UsersIcon, HandshakeIcon, LocationIcon, DollarSignIcon } from '../../icons';

const ActivitiesSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('charity');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const { t } = useTranslation();

  const tabs = [
    { 
      id: 'charity', 
      label: t('social.tabs.charity'),
      icon: '❤️',
      description: t('social.tabs.charityDescription', { defaultValue: 'Поддержка социально значимых направлений' })
    },
    { 
      id: 'religious', 
      label: t('social.tabs.religious'),
      icon: '🕌',
      description: t('social.tabs.religiousDescription', { defaultValue: 'Духовное развитие и религиозные объекты' })
    },
    { 
      id: 'regions', 
      label: t('social.tabs.regions'),
      icon: <MapIcon className="w-5 h-5" />,
      description: t('social.tabs.regionsDescription', { defaultValue: 'Помощь регионам в кризисных ситуациях' })
    }
  ];

  const stats = [
    {
      value: t('social.stats.totalAmount.value'),
      label: t('social.stats.totalAmount.label'),
      trend: t('social.stats.totalAmount.trend', { defaultValue: '+15%' }),
      icon: <DollarSignIcon className="w-6 h-6" />,
      description: t('social.stats.totalAmount.description', { defaultValue: 'За последние 3 года' })
    },
    {
      value: t('social.stats.projects.value'),
      label: t('social.stats.projects.label'),
      trend: t('social.stats.projects.trend', { defaultValue: '+25' }),
      icon: <RocketIcon className="w-6 h-6" />,
      description: t('social.stats.projects.description', { defaultValue: 'Активных программ' })
    },
    {
      value: t('social.stats.people.value'),
      label: t('social.stats.people.label'),
      trend: t('social.stats.people.trend', { defaultValue: '+10K' }),
      icon: <UsersIcon className="w-6 h-6" />,
      description: t('social.stats.people.description', { defaultValue: 'Получили помощь' })
    },
    {
      value: t('social.stats.volunteers.value'),
      label: t('social.stats.volunteers.label'),
      trend: t('social.stats.volunteers.trend', { defaultValue: '+200' }),
      icon: <HandshakeIcon className="w-6 h-6" />,
      description: t('social.stats.volunteers.description', { defaultValue: 'Активных волонтеров' })
    }
  ];

  // SVG иконки для благотворительных проектов
  const charityIcons = [
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  ];

  const charityProjects = [0, 1, 2, 3].map(index => ({
    id: index + 1,
    icon: charityIcons[index],
    category: t(`social.charity.projects.${index}.category`),
    amount: t(`social.charity.projects.${index}.amount`),
    description: t(`social.charity.projects.${index}.description`),
    fullDescription: t(`social.charity.projects.${index}.fullDescription`, { defaultValue: '' }),
    impact: t(`social.charity.projects.${index}.impact`, { defaultValue: '' }),
    duration: t(`social.charity.projects.${index}.duration`, { defaultValue: 'Постоянно' }),
    beneficiaries: t(`social.charity.projects.${index}.beneficiaries`, { defaultValue: '' }),
    color: ['blue', 'green', 'purple', 'orange'][index],
    achievements: [
      t(`social.charity.projects.${index}.achievements.0`, { defaultValue: '' }),
      t(`social.charity.projects.${index}.achievements.1`, { defaultValue: '' }),
      t(`social.charity.projects.${index}.achievements.2`, { defaultValue: '' })
    ].filter(achievement => achievement)
  }));

  const religiousProjects = [0, 1, 2].map(index => ({
    id: index + 1,
    type: t(`social.religious.projects.${index}.type`),
    count: t(`social.religious.projects.${index}.count`),
    investment: t(`social.religious.projects.${index}.investment`),
    description: t(`social.religious.projects.${index}.description`),
    fullDescription: t(`social.religious.projects.${index}.fullDescription`, { defaultValue: '' }),
    location: t(`social.religious.projects.${index}.location`, { defaultValue: 'По всему Кыргызстану' }),
    status: t(`social.religious.projects.${index}.status`, { defaultValue: 'Завершен' }),
    impact: t(`social.religious.projects.${index}.impact`, { defaultValue: '' }),
    features: [
      t(`social.religious.projects.${index}.features.0`, { defaultValue: '' }),
      t(`social.religious.projects.${index}.features.1`, { defaultValue: '' }),
      t(`social.religious.projects.${index}.features.2`, { defaultValue: '' })
    ].filter(feature => feature)
  }));

  const regionAid = [0, 1, 2].map(index => ({
    id: index + 1,
    region: t(`social.regions.aid.${index}.region`),
    assistance: t(`social.regions.aid.${index}.assistance`),
    amount: t(`social.regions.aid.${index}.amount`),
    description: t(`social.regions.aid.${index}.description`),
    fullDescription: t(`social.regions.aid.${index}.fullDescription`, { defaultValue: '' }),
    timeline: t(`social.regions.aid.${index}.timeline`, { defaultValue: '2023-2024' }),
    status: t(`social.regions.aid.${index}.status`, { defaultValue: 'В процессе' }),
    partners: [
      t(`social.regions.aid.${index}.partners.0`, { defaultValue: '' }),
      t(`social.regions.aid.${index}.partners.1`, { defaultValue: '' }),
      t(`social.regions.aid.${index}.partners.2`, { defaultValue: '' })
    ].filter(partner => partner),
    impact: t(`social.regions.aid.${index}.impact`, { defaultValue: '' })
  }));

  const testimonials = [
    {
      id: 1,
      name: t('social.testimonials.0.name', { defaultValue: 'Айгуль Токтомамбетова' }),
      role: t('social.testimonials.0.role', { defaultValue: 'Директор школы' }),
      content: t('social.testimonials.0.content', { defaultValue: 'Благодаря поддержке мы смогли обновить компьютерный класс и закупить новое оборудование для наших учеников.' }),
      region: t('social.testimonials.0.region', { defaultValue: 'Баткенская область' })
    },
    {
      id: 2,
      name: t('social.testimonials.1.name', { defaultValue: 'Бакыт Жумабаев' }),
      role: t('social.testimonials.1.role', { defaultValue: 'Имам мечети' }),
      content: t('social.testimonials.1.content', { defaultValue: 'Строительство новой мечети объединило нашу общину и создало пространство для духовного развития.' }),
      region: t('social.testimonials.1.region', { defaultValue: 'Ошская область' })
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      light: 'bg-green-50', 
      medium: 'bg-green-100', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      medium: 'bg-purple-100', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-pink-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      medium: 'bg-orange-100', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-red-500'
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
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
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const openRegionModal = (region) => {
    setSelectedRegion(region);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedRegion(null);
  };

  const handleDonate = () => {
    // Логика пожертвования
    console.log('Donate clicked');
  };

  const handleVolunteer = () => {
    // Логика волонтерства
    console.log('Volunteer clicked');
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden">
      {/* Улучшенный анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full blur-3xl"
        />
      </div>

      {/* Декоративные сетки */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/50 mb-6 shadow-sm"
          >
            <span className="text-indigo-600 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t('social.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
          >
            {t('social.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-full mx-auto mb-8 shadow-lg"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('social.subtitle')}
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <motion.span 
                  className="text-sm font-semibold bg-green-100 text-green-700 px-2 py-1 rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.trend}
                </motion.span>
              </div>
              
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-slate-600 font-medium mb-2">
                {stat.label}
              </div>

              <div className="text-sm text-slate-500">
                {stat.description}
              </div>

              {/* Анимированная полоса прогресса */}
              <motion.div 
                className="w-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3 group-hover:w-full transition-all duration-1000 ease-out"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Улучшенные табы для переключения между разделами */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative p-6 rounded-2xl font-semibold transition-all duration-500 text-left ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-indigo-500/25'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-2xl">{tab.icon}</span>
                  <h3 className="text-xl font-bold">{tab.label}</h3>
                </div>
                <p className={`text-sm leading-relaxed ${
                  activeTab === tab.id ? 'text-indigo-100' : 'text-slate-500'
                }`}>
                  {tab.description}
                </p>
                
                {/* Индикатор активного таба */}
                {activeTab === tab.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-white rounded-b-2xl"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Контент табов */}
          <div className="mb-16">
            {/* Благотворительность */}
            {activeTab === 'charity' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Основная статистика */}
                <motion.div
                  variants={cardVariants}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-8 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{t('social.charity.title')}</h3>
                      <p className="text-indigo-100 leading-relaxed text-lg">
                        {t('social.charity.description')}
                      </p>
                    </div>
                    <motion.div 
                      className="bg-white/20 rounded-2xl p-6 text-center backdrop-blur-sm border border-white/20"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-4xl font-bold mb-2">{t('social.charity.totalAmount')}</div>
                      <div className="text-indigo-100 text-lg">{t('social.charity.period')}</div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Проекты благотворительности */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {charityProjects.map((project, index) => {
                    const colors = colorMap[project.color];
                    return (
                      <motion.div
                        key={project.id}
                        variants={cardVariants}
                        className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                        whileHover="hover"
                        onClick={() => openProjectModal(project)}
                      >
                        <div className="flex items-start mb-4">
                          <motion.div 
                            className={`w-14 h-14 ${colors.medium} rounded-2xl flex items-center justify-center mr-4 group-hover:${colors.light} transition-colors duration-300 shadow-sm`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <span className="text-2xl">{project.icon}</span>
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">{project.category}</h4>
                            <motion.div 
                              className={`inline-flex px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-medium mb-3`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {project.amount}
                            </motion.div>
                          </div>
                        </div>
                        
                        <motion.p 
                          className="text-slate-600 mb-4 leading-relaxed line-clamp-2"
                          whileHover={{ x: 3 }}
                        >
                          {project.description}
                        </motion.p>

                        {project.impact && (
                          <div className="mb-4">
                            <div className="flex items-center text-sm text-slate-500 mb-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                              {t('social.impact')}
                            </div>
                            <p className="text-slate-700 text-sm">{project.impact}</p>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">{project.duration}</span>
                          <motion.button
                            className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                            whileHover={{ x: 3 }}
                          >
                            <span>{t('social.learnMore')}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Духовные проекты */}
            {activeTab === 'religious' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <motion.div
                  variants={cardVariants}
                  className="grid lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-slate-900">{t('social.religious.title')}</h3>
                    
                    <motion.p 
                      className="text-lg text-slate-700 leading-relaxed"
                      whileHover={{ x: 5 }}
                    >
                      {t('social.religious.description')}
                    </motion.p>

                    <motion.div
                      variants={cardVariants}
                      className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/60 shadow-lg"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <span className="text-2xl text-white">🕌</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">{t('social.religious.investment.title')}</h4>
                      </div>
                      <p className="text-3xl font-bold text-amber-700 mb-2">{t('social.religious.investment.amount')}</p>
                      <p className="text-slate-600">{t('social.religious.investment.description')}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    variants={cardVariants}
                    className="relative"
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-100 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <span className="text-3xl text-white">🕌</span>
                            </div>
                            <p className="text-amber-600 font-semibold">{t('social.religious.imagePlaceholder')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {religiousProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={cardVariants}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group text-center cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => openProjectModal(project)}
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-teal-200 group-hover:to-emerald-200 transition-all duration-300 shadow-sm">
                        <span className="text-2xl">🕌</span>
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{project.type}</h4>
                      <div className="text-2xl font-bold text-teal-600 mb-2">{project.count}</div>
                      <div className="bg-teal-50 rounded-lg p-3 mb-3 border border-teal-200">
                        <p className="text-teal-700 text-sm font-medium">{project.investment}</p>
                      </div>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="text-xs text-slate-500">{project.location}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Помощь регионам */}
            {activeTab === 'regions' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-gradient-to-r from-teal-500 to-green-500 rounded-3xl p-8 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
                  
                  <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">{t('social.regions.title')}</h3>
                      <p className="text-teal-50 leading-relaxed text-lg">
                        {t('social.regions.description')}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold mb-1">{t('social.regions.humanitarianAid')}</div>
                        <div className="text-teal-100 text-sm">{t('social.regions.humanitarianLabel')}</div>
                      </motion.div>
                      <motion.div 
                        className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm border border-white/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-2xl font-bold mb-1">{t('social.regions.kindergartenCost')}</div>
                        <div className="text-teal-100 text-sm">{t('social.regions.kindergartenLabel')}</div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                  {regionAid.map((aid, index) => (
                    <motion.div
                      key={aid.id}
                      variants={cardVariants}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                      whileHover={{ y: -5 }}
                      onClick={() => openRegionModal(aid)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mr-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-colors duration-300 shadow-sm">
                          <LocationIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900">{aid.region}</h4>
                      </div>
                      
                      <motion.p 
                        className="text-slate-600 mb-3 text-sm line-clamp-2"
                        whileHover={{ x: 3 }}
                      >
                        {aid.description}
                      </motion.p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-green-700 text-sm font-medium">{aid.assistance}</p>
                        </div>
                        <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                          <p className="text-orange-700 text-sm font-medium">{aid.amount}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{aid.timeline}</span>
                        <span>{aid.status}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Секция отзывов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {t('social.testimonials.title', { defaultValue: 'Истории помощи' })}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('social.testimonials.subtitle', { defaultValue: 'Реальные истории людей, которым мы смогли помочь' })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-xs text-indigo-600">{testimonial.region}</div>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-4">"{testimonial.content}"</p>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                      key={star}
                      className="text-amber-400"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA блок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-slate-50 to-indigo-50 rounded-3xl p-12 border border-slate-200/60 relative overflow-hidden"
        >
          {/* Фоновые элементы */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-200/20 rounded-full translate-y-20 -translate-x-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('social.cta.title')}
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              {t('social.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDonate}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">❤️</span>
                <span className="text-lg">{t('social.cta.donateButton')}</span>
              </motion.button>
              <motion.button
                onClick={handleVolunteer}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <HandshakeIcon className="w-6 h-6" />
                <span className="text-lg">{t('social.cta.volunteerButton')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно проекта */}
      <AnimatePresence>
        {(selectedProject || selectedRegion) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative p-8">
                <button
                  onClick={closeModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {selectedProject && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${colorMap[selectedProject.color]?.medium || 'bg-indigo-100'} rounded-2xl flex items-center justify-center mr-4 shadow-sm`}>
                        <span className="text-3xl">{selectedProject.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">{selectedProject.category || selectedProject.type}</h3>
                        <p className="text-slate-600">{selectedProject.amount || selectedProject.investment}</p>
                      </div>
                    </div>

                    <div className="prose prose-slate max-w-none mb-8">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {selectedProject.fullDescription || selectedProject.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.details', { defaultValue: 'Детали проекта' })}</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-600">{t('social.modal.duration', { defaultValue: 'Продолжительность' })}:</span>
                            <span className="font-medium">{selectedProject.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">{t('social.modal.status', { defaultValue: 'Статус' })}:</span>
                            <span className="font-medium">{selectedProject.status}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600">{t('social.modal.location', { defaultValue: 'Местоположение' })}:</span>
                            <span className="font-medium">{selectedProject.location}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.impact', { defaultValue: 'Влияние' })}</h4>
                        <p className="text-slate-600">{selectedProject.impact}</p>
                      </div>
                    </div>

                    {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.achievements', { defaultValue: 'Достижения' })}</h4>
                        <ul className="space-y-2">
                          {selectedProject.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center text-slate-600">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {selectedRegion && (
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mr-4 shadow-sm">
                        <LocationIcon className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">{selectedRegion.region}</h3>
                        <p className="text-slate-600">{selectedRegion.timeline}</p>
                      </div>
                    </div>

                    <div className="prose prose-slate max-w-none mb-8">
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {selectedRegion.fullDescription || selectedRegion.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.assistance', { defaultValue: 'Помощь' })}</h4>
                        <div className="space-y-3">
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-green-700 font-medium">{selectedRegion.assistance}</p>
                          </div>
                          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                            <p className="text-orange-700 font-medium">{selectedRegion.amount}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.partners', { defaultValue: 'Партнеры' })}</h4>
                        <div className="space-y-2">
                          {selectedRegion.partners.map((partner, index) => (
                            <div key={index} className="flex items-center text-slate-600">
                              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                              {partner}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('social.modal.impact', { defaultValue: 'Влияние' })}</h4>
                      <p className="text-slate-600">{selectedRegion.impact}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.button
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('social.modal.support', { defaultValue: 'Поддержать проект' })}
                  </motion.button>
                  <motion.button
                    className="flex-1 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('social.modal.share', { defaultValue: 'Поделиться' })}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesSocial;