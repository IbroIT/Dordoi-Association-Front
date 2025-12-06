import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, CircusIcon, MonumentIcon, PaletteIcon, BookIcon } from '../../icons';

const ActivitiesCulture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid или list
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('culture.categories.all'), icon: <GlobeIcon className="w-5 h-5" /> },
    { id: 'events', label: t('culture.categories.events'), icon: <CircusIcon className="w-5 h-5" /> },
    { id: 'heritage', label: t('culture.categories.heritage'), icon: <MonumentIcon className="w-5 h-5" /> },
    { id: 'arts', label: t('culture.categories.arts'), icon: <PaletteIcon className="w-5 h-5" /> },
    { id: 'publications', label: t('culture.categories.publications'), icon: <BookIcon className="w-5 h-5" /> }
  ];

  const projects = [
    {
      id: 1,
      title: t('culture.projects.festival.title'),
      description: t('culture.projects.festival.description'),
      fullDescription: t('culture.projects.festival.fullDescription', { defaultValue: 'Ежегодный фестиваль, объединяющий художников, музыкантов и performers со всего мира для культурного обмена и создания уникальных коллабораций.' }),
      category: 'events',
      image: '/api/placeholder/400/300',
      year: '2024',
      duration: '3 дня',
      participants: '100+ участников',
      location: 'Бишкек, Кыргызстан',
      status: 'active',
      color: 'blue',
      gallery: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
      partners: ['UNESCO', 'Министерство культуры', 'Местные сообщества'],
      impact: t('culture.projects.festival.impact', { defaultValue: 'Укрепление международных культурных связей' })
    },
    {
      id: 2,
      title: t('culture.projects.museum.title'),
      description: t('culture.projects.museum.description'),
      fullDescription: t('culture.projects.museum.fullDescription', { defaultValue: 'Комплексная реставрация и модернизация регионального музея с созданием интерактивных экспозиций и цифровых решений.' }),
      category: 'heritage',
      image: '/api/placeholder/400/300',
      year: '2023',
      duration: '12 месяцев',
      participants: '5000+ посетителей',
      location: 'Ош, Кыргызстан',
      status: 'completed',
      color: 'green',
      gallery: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      partners: ['Европейский союз', 'Всемирный банк'],
      impact: t('culture.projects.museum.impact', { defaultValue: 'Сохранение исторического наследия' })
    },
    {
      id: 3,
      title: t('culture.projects.gallery.title'),
      description: t('culture.projects.gallery.description'),
      fullDescription: t('culture.projects.gallery.fullDescription', { defaultValue: 'Современное выставочное пространство для молодых художников с образовательными программами и мастер-классами.' }),
      category: 'arts',
      image: '/api/placeholder/400/300',
      year: '2024',
      duration: 'Постоянно',
      participants: '50+ художников',
      location: 'Бишкек, Кыргызстан',
      status: 'active',
      color: 'purple',
      gallery: ['/api/placeholder/400/300'],
      partners: ['Фонд Сорос-Кыргызстан', 'Академия художеств'],
      impact: t('culture.projects.gallery.impact', { defaultValue: 'Поддержка современного искусства' })
    },
    {
      id: 4,
      title: t('culture.projects.library.title'),
      description: t('culture.projects.library.description'),
      fullDescription: t('culture.projects.library.fullDescription', { defaultValue: 'Создание доступной цифровой платформы для сохранения и распространения культурного наследия через оцифровку редких изданий.' }),
      category: 'publications',
      image: '/api/placeholder/400/300',
      year: '2023',
      duration: '18 месяцев',
      participants: 'Университеты, исследователи',
      location: 'Онлайн',
      status: 'completed',
      color: 'orange',
      gallery: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
      partners: ['Национальная библиотека', 'Google Arts & Culture'],
      impact: t('culture.projects.library.impact', { defaultValue: 'Цифровая доступность знаний' })
    },
    {
      id: 5,
      title: t('culture.projects.theater.title'),
      description: t('culture.projects.theater.description'),
      fullDescription: t('culture.projects.theater.fullDescription', { defaultValue: 'Программа поддержки молодых театральных режиссеров через гранты, мастер-классы и международные резиденции.' }),
      category: 'arts',
      image: '/api/placeholder/400/300',
      year: '2024',
      duration: '9 месяцев',
      participants: '15 режиссеров',
      location: 'Бишкек, Каракол, Ош',
      status: 'active',
      color: 'red',
      gallery: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
      partners: ['Русский драматический театр', 'Фонд Айтматова'],
      impact: t('culture.projects.theater.impact', { defaultValue: 'Развитие театрального искусства' })
    },
    {
      id: 6,
      title: t('culture.projects.folklore.title'),
      description: t('culture.projects.folklore.description'),
      fullDescription: t('culture.projects.folklore.fullDescription', { defaultValue: 'Комплексная программа по документированию, сохранению и популяризации народных традиций, музыки и ремесел.' }),
      category: 'heritage',
      image: '/api/placeholder/400/300',
      year: '2023',
      duration: '24 месяца',
      participants: '8 этнических групп',
      location: 'По всему Кыргызстану',
      status: 'completed',
      color: 'cyan',
      gallery: ['/api/placeholder/400/300'],
      partners: ['ЮНЕСКО', 'Национальная академия наук'],
      impact: t('culture.projects.folklore.impact', { defaultValue: 'Сохранение культурного разнообразия' })
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: t('culture.testimonials.0.name', { defaultValue: 'Айгуль Сатыбалдиева' }),
      role: t('culture.testimonials.0.role', { defaultValue: 'Художница-участница' }),
      content: t('culture.testimonials.0.content', { defaultValue: 'Благодаря программе поддержки я смогла реализовать свой первый персональный проект и найти международных партнеров.' }),
      avatar: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: t('culture.testimonials.1.name', { defaultValue: 'Марат Жумалиев' }),
      role: t('culture.testimonials.1.role', { defaultValue: 'Куратор музея' }),
      content: t('culture.testimonials.1.content', { defaultValue: 'Реставрация музея позволила нам внедрить современные технологии и привлечь молодую аудиторию.' }),
      avatar: '/api/placeholder/100/100'
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      light: 'bg-green-50', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-pink-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-red-500'
    },
    red: { 
      light: 'bg-red-50', 
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-pink-500'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-blue-500'
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

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      active: { label: t('culture.status.active'), color: 'bg-green-100 text-green-800' },
      completed: { label: t('culture.status.completed'), color: 'bg-blue-100 text-blue-800' },
      planning: { label: t('culture.status.planning'), color: 'bg-yellow-100 text-yellow-800' }
    };
    return statusMap[status] || statusMap.active;
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden">
      {/* Улучшенный анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/50 mb-6 shadow-sm"
          >
            <span className="text-purple-600 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('culture.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
          >
            {t('culture.title')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('culture.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full mx-auto mb-8 shadow-lg"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('culture.lead')}
          </motion.p>
        </motion.div>

        {/* Улучшенный фильтр категорий */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Переключение вида */}
            <div className="flex justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200/60 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-purple-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Сетка проектов */}
          <motion.div
            layout
            className={`${
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
            }`}
          >
            <AnimatePresence>
              {filteredProjects.map((project) => {
                const colors = colorMap[project.color];
                const statusBadge = getStatusBadge(project.status);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    whileHover="hover"
                    onClick={() => openProjectModal(project)}
                  >
                    {/* Изображение проекта */}
                    <div className={`relative ${
                      viewMode === 'list' ? 'w-1/3' : 'h-48'
                    } bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <div className={colors.text}>
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                          </div>
                          <p className="text-purple-600 font-semibold">{t('culture.imagePlaceholder')}</p>
                        </div>
                      </div>
                      
                      {/* Год проекта */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full shadow-sm`}>
                          {project.year}
                        </span>
                      </div>
                      
                      {/* Статус проекта */}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 ${statusBadge.color} text-sm font-medium rounded-full shadow-sm`}>
                          {statusBadge.label}
                        </span>
                      </div>
                    </div>

                    {/* Контент проекта */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Дополнительная информация */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-slate-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-slate-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {project.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full shadow-sm`}>
                          {categories.find(cat => cat.id === project.category)?.label}
                        </span>
                        
                        <motion.button
                          className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <span>{t('culture.learnMore')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Секция отзывов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {t('culture.testimonials.title', { defaultValue: 'Отзывы участников' })}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('culture.testimonials.subtitle', { defaultValue: 'Что говорят люди, вовлеченные в наши культурные проекты' })}
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
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Фоновые элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-20 -translate-x-20"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {t('culture.cta.title')}
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {t('culture.cta.description')}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('culture.cta.contact')}</span>
                </motion.button>
                
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                  <span>{t('culture.cta.brochure')}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно проекта */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
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
                  onClick={closeProjectModal}
                  className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`px-3 py-1 ${colorMap[selectedProject.color].light} ${colorMap[selectedProject.color].text} text-sm font-medium rounded-full`}>
                      {categories.find(cat => cat.id === selectedProject.category)?.label}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                      {selectedProject.year}
                    </span>
                    <span className={`px-3 py-1 ${getStatusBadge(selectedProject.status).color} text-sm font-medium rounded-full`}>
                      {getStatusBadge(selectedProject.status).label}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedProject.title}</h3>
                  
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('culture.modal.details', { defaultValue: 'Детали проекта' })}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('culture.modal.location', { defaultValue: 'Местоположение' })}:</span>
                        <span className="font-medium">{selectedProject.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('culture.modal.duration', { defaultValue: 'Продолжительность' })}:</span>
                        <span className="font-medium">{selectedProject.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('culture.modal.participants', { defaultValue: 'Участники' })}:</span>
                        <span className="font-medium">{selectedProject.participants}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">{t('culture.modal.partners', { defaultValue: 'Партнеры' })}</h4>
                    <div className="space-y-2">
                      {selectedProject.partners.map((partner, index) => (
                        <div key={index} className="flex items-center text-slate-600">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                          {partner}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesCulture;