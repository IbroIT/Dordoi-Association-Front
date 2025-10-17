import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersOur = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePartner, setActivePartner] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('partners.categories.all'), icon: '🏢' },
    { id: 'government', label: t('partners.categories.government'), icon: '🏛️' },
    { id: 'business', label: t('partners.categories.business'), icon: '💼' },
    { id: 'international', label: t('partners.categories.international'), icon: '🌐' },
    { id: 'ngo', label: t('partners.categories.ngo'), icon: '🤝' }
  ];

  const partners = [
    {
      id: 1,
      name: t('partners.items.ministryEconomy.name'),
      description: t('partners.items.ministryEconomy.description'),
      category: 'government',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.ministryEconomy.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.news'), url: '/news/cooperation-agreement' },
        { label: t('partners.links.report'), url: '/reports/economic-development' }
      ],
      years: '5+',
      numericValue: 5,
      duration: 2500,
      details: t('partners.items.ministryEconomy.details', { returnObjects: true }),
      achievements: t('partners.items.ministryEconomy.achievements', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 2,
      name: t('partners.items.undp.name'),
      description: t('partners.items.undp.description'),
      category: 'international',
      country: t('partners.countries.international'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.undp.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.project'), url: '/projects/sustainable-development' },
        { label: t('partners.links.news'), url: '/news/undp-partnership' }
      ],
      years: '3+',
      numericValue: 3,
      duration: 2000,
      details: t('partners.items.undp.details', { returnObjects: true }),
      achievements: t('partners.items.undp.achievements', { returnObjects: true }),
      color: 'green'
    },
    {
      id: 3,
      name: t('partners.items.silkroadGroup.name'),
      description: t('partners.items.silkroadGroup.description'),
      category: 'business',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.silkroadGroup.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.news'), url: '/news/joint-venture' },
        { label: t('partners.links.caseStudy'), url: '/cases/logistics-optimization' }
      ],
      years: '7+',
      numericValue: 7,
      duration: 3000,
      details: t('partners.items.silkroadGroup.details', { returnObjects: true }),
      achievements: t('partners.items.silkroadGroup.achievements', { returnObjects: true }),
      color: 'orange'
    },
    {
      id: 4,
      name: t('partners.items.greenFuture.name'),
      description: t('partners.items.greenFuture.description'),
      category: 'ngo',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.greenFuture.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.project'), url: '/projects/environmental-protection' },
        { label: t('partners.links.report'), url: '/reports/eco-initiatives' }
      ],
      years: '2+',
      numericValue: 2,
      duration: 1500,
      details: t('partners.items.greenFuture.details', { returnObjects: true }),
      achievements: t('partners.items.greenFuture.achievements', { returnObjects: true }),
      color: 'emerald'
    },
    {
      id: 5,
      name: t('partners.items.europeanUnion.name'),
      description: t('partners.items.europeanUnion.description'),
      category: 'international',
      country: t('partners.countries.eu'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.europeanUnion.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.project'), url: '/projects/eu-funding' },
        { label: t('partners.links.news'), url: '/news/eu-partnership' }
      ],
      years: '4+',
      numericValue: 4,
      duration: 2200,
      details: t('partners.items.europeanUnion.details', { returnObjects: true }),
      achievements: t('partners.items.europeanUnion.achievements', { returnObjects: true }),
      color: 'blue'
    },
    {
      id: 6,
      name: t('partners.items.techInnovations.name'),
      description: t('partners.items.techInnovations.description'),
      category: 'business',
      country: t('partners.countries.usa'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.techInnovations.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.caseStudy'), url: '/cases/digital-transformation' },
        { label: t('partners.links.news'), url: '/news/technology-partnership' }
      ],
      years: '2+',
      numericValue: 2,
      duration: 1800,
      details: t('partners.items.techInnovations.details', { returnObjects: true }),
      achievements: t('partners.items.techInnovations.achievements', { returnObjects: true }),
      color: 'purple'
    },
    {
      id: 7,
      name: t('partners.items.ministryEducation.name'),
      description: t('partners.items.ministryEducation.description'),
      category: 'government',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.ministryEducation.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.project'), url: '/projects/educational-program' },
        { label: t('partners.links.news'), url: '/news/education-initiative' }
      ],
      years: '6+',
      numericValue: 6,
      duration: 2800,
      details: t('partners.items.ministryEducation.details', { returnObjects: true }),
      achievements: t('partners.items.ministryEducation.achievements', { returnObjects: true }),
      color: 'red'
    },
    {
      id: 8,
      name: t('partners.items.careInternational.name'),
      description: t('partners.items.careInternational.description'),
      category: 'ngo',
      country: t('partners.countries.international'),
      logo: '/api/placeholder/80/80',
      projects: t('partners.items.careInternational.projects', { returnObjects: true }),
      links: [
        { label: t('partners.links.project'), url: '/projects/humanitarian-aid' },
        { label: t('partners.links.report'), url: '/reports/social-impact' }
      ],
      years: '3+',
      numericValue: 3,
      duration: 2000,
      details: t('partners.items.careInternational.details', { returnObjects: true }),
      achievements: t('partners.items.careInternational.achievements', { returnObjects: true }),
      color: 'cyan'
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
    orange: { 
      light: 'bg-orange-50', 
      medium: 'bg-orange-100',
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    emerald: { 
      light: 'bg-emerald-50', 
      medium: 'bg-emerald-100',
      dark: 'bg-emerald-600', 
      text: 'text-emerald-600', 
      border: 'border-emerald-200',
      gradient: 'from-emerald-500 to-teal-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      medium: 'bg-purple-100',
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    },
    red: { 
      light: 'bg-red-50', 
      medium: 'bg-red-100',
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-rose-500'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      medium: 'bg-cyan-100',
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-sky-500'
    }
  };

  // Анимация счетчика
  const Counter = ({ value, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isInView && !isVisible) {
        setIsVisible(true);
        let start = 0;
        const end = typeof value === 'number' ? value : parseFloat(value);
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, isVisible, value, duration]);

    if (typeof value !== 'number' && isNaN(parseFloat(value))) {
      return <span>{value}{suffix}</span>;
    }

    return (
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(count).toLocaleString()}{suffix}
      </motion.span>
    );
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
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      rotateX: -10
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.03,
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

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  const stats = [
    {
      value: t('partners.stats.partners.value'),
      label: t('partners.stats.partners.label'),
      numericValue: 50,
      duration: 3000,
      icon: '🤝',
      description: t('partners.stats.partners.description')
    },
    {
      value: t('partners.stats.countries.value'),
      label: t('partners.stats.countries.label'),
      numericValue: 15,
      duration: 2500,
      icon: '🌍',
      description: t('partners.stats.countries.description')
    },
    {
      value: t('partners.stats.projects.value'),
      label: t('partners.stats.projects.label'),
      numericValue: 200,
      duration: 3500,
      icon: '🚀',
      description: t('partners.stats.projects.description')
    },
    {
      value: t('partners.stats.years.value'),
      label: t('partners.stats.years.label'),
      numericValue: 10,
      duration: 2800,
      icon: '📅',
      description: t('partners.stats.years.description')
    }
  ];

  const benefits = t('partners.benefits.items', { returnObjects: true });

  const togglePartnerDetails = (partnerId) => {
    setActivePartner(activePartner === partnerId ? null : partnerId);
  };

  const handleBecomePartner = () => {
    console.log('Become partner');
  };

  const handleContactUs = () => {
    console.log('Contact us');
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Улучшенные фоновые элементы */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-5% w-48 h-48 bg-blue-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-5% w-56 h-56 bg-cyan-200 rounded-full blur-4xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-200 rounded-full blur-4xl"
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('partners.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              {t('partners.title')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="w-6 h-6 rounded-full border-4 border-blue-200 animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('partners.subtitle')}
          </motion.p>
        </motion.div>

        {/* Преимущества партнерства */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('partners.benefits.title')}
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('partners.benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group text-center"
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-2xl lg:text-3xl">{benefit.icon}</span>
                </motion.div>
                <h4 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 lg:mb-4">
                  {benefit.title}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 group text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-white text-2xl lg:text-3xl">{stat.icon}</span>
                </motion.div>
                
                <div className="text-4xl lg:text-5xl font-black text-slate-900 mb-2">
                  <Counter 
                    value={stat.numericValue} 
                    duration={stat.duration}
                    suffix="+"
                  />
                </div>
                
                <div className="text-xl font-bold text-slate-900 mb-2">
                  {stat.label}
                </div>

                <div className="text-slate-600 text-lg">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Фильтры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              {t('partners.categoriesTitle')}
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('partners.categoriesSubtitle')}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:shadow-lg border border-slate-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-lg">{category.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Сетка партнеров */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredPartners.map((partner) => {
                const colors = colorMap[partner.color];
                const isActive = activePartner === partner.id;
                
                return (
                  <motion.div
                    key={partner.id}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="group relative"
                    whileHover="hover"
                  >
                    <motion.div
                      className={`relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl border-2 ${colors.border} shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col`}
                      whileHover={{ y: -5 }}
                      onClick={() => togglePartnerDetails(partner.id)}
                    >
                      {/* Акцентная градиентная полоса */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      {/* Верхняя часть с логотипом и основной информацией */}
                      <div className="p-6 flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className={`w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center shadow-lg group-hover:${colors.medium} transition-all duration-300`}>
                                <div className={`${colors.text} font-bold text-lg`}>
                                  {partner.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                                </div>
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                                {partner.name}
                              </h3>
                              <div className="flex items-center space-x-2 mt-2">
                                <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                                  {partner.country}
                                </span>
                                <span className="text-slate-500 text-sm font-semibold">
                                  <Counter 
                                    value={partner.numericValue} 
                                    duration={partner.duration}
                                    suffix="+"
                                  /> {t('partners.cooperationYears')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Описание */}
                        <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2 text-lg">
                          {partner.description}
                        </p>

                        {/* Проекты */}
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">
                            {t('partners.projectsTitle')}:
                          </h4>
                          <ul className="space-y-2">
                            {Array.isArray(partner.projects) && partner.projects.slice(0, 2).map((project, index) => (
                              <li key={index} className="text-slate-600 flex items-start text-lg">
                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="line-clamp-1">{project}</span>
                              </li>
                            ))}
                            {Array.isArray(partner.projects) && partner.projects.length > 2 && (
                              <li className="text-blue-600 font-semibold text-lg">
                                +{partner.projects.length - 2} {t('partners.moreProjects')}
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                      {/* Нижняя часть со ссылками и кнопкой */}
                      <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-4">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                            {categories.find(cat => cat.id === partner.category)?.label}
                          </span>
                          
                          <div className="flex items-center space-x-2">
                            <button className={`flex items-center space-x-2 ${colors.text} font-semibold text-lg hover:underline`}>
                              <span>{isActive ? t('partners.less') : t('partners.more')}</span>
                              <motion.svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                                animate={{ rotate: isActive ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </motion.svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Детальная информация */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-slate-200"
                          >
                            <div className="p-6 space-y-6">
                              {/* Детали сотрудничества */}
                              <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">
                                  {t('partners.detailsTitle')}
                                </h4>
                                <div className="space-y-3">
                                  {Array.isArray(partner.details) && partner.details.map((detail, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="flex items-start space-x-3"
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      <div className={`w-2 h-2 rounded-full ${colors.dark} mt-3 flex-shrink-0`}></div>
                                      <p className="text-slate-700 leading-relaxed text-lg">{detail}</p>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Достижения */}
                              <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">
                                  {t('partners.achievementsTitle')}
                                </h4>
                                <div className="grid md:grid-cols-2 gap-3">
                                  {Array.isArray(partner.achievements) && partner.achievements.map((achievement, idx) => (
                                    <motion.div
                                      key={idx}
                                      className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      <div className={`w-3 h-3 rounded-full ${colors.dark} mt-2 flex-shrink-0`}></div>
                                      <p className="text-slate-700 text-lg">{achievement}</p>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              {/* Ссылки */}
                              <div className="flex flex-wrap gap-3">
                                {partner.links.map((link, index) => (
                                  <motion.a
                                    key={index}
                                    href={link.url}
                                    className={`px-4 py-2 ${colors.light} ${colors.text} rounded-xl font-semibold hover:${colors.dark} hover:text-white transition-all duration-300 text-lg`}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {link.label}
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-white shadow-2xl relative overflow-hidden">
            {/* Фоновые декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {t('partners.cta.title')}
                </span>
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
              >
                {t('partners.cta.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  onClick={handleBecomePartner}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Эффект блеска */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-lg lg:text-xl">{t('partners.cta.becomePartner')}</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.button>
                
                <motion.button
                  onClick={handleContactUs}
                  className="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-lg lg:text-xl">{t('partners.cta.contact')}</span>
                </motion.button>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500 mt-8 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('partners.cta.deadline')}</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersOur;