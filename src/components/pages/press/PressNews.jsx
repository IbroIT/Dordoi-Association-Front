import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PressNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMore, setShowMore] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Имитация загрузки данных
  useEffect(() => {
    if (isInView) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const news = [
    {
      id: 1,
      title: t('press.news.0.title'),
      date: t('press.news.0.date'),
      category: 'official',
      thumbnail: '📰',
      lead: t('press.news.0.lead'),
      fullText: t('press.news.0.fullText'),
      gallery: ['1', '2', '3'],
      video: 'https://example.com/video1',
      files: [
        { name: t('press.news.0.files.0'), url: '#', type: 'pdf', size: '2.4 MB' },
        { name: t('press.news.0.files.1'), url: '#', type: 'doc', size: '1.8 MB' }
      ],
      tags: [t('press.news.0.tags.0'), t('press.news.0.tags.1'), t('press.news.0.tags.2')],
      views: 1247,
      likes: 89,
      shares: 34,
      author: t('press.authors.0'),
      readTime: '4 мин',
      featured: true,
      related: [2, 3]
    },
    {
      id: 2,
      title: t('press.news.1.title'),
      date: t('press.news.1.date'),
      category: 'event',
      thumbnail: '🎉',
      lead: t('press.news.1.lead'),
      fullText: t('press.news.1.fullText'),
      gallery: ['1', '2'],
      video: null,
      files: [
        { name: t('press.news.1.files.0'), url: '#', type: 'pdf', size: '3.1 MB' }
      ],
      tags: [t('press.news.1.tags.0'), t('press.news.1.tags.1')],
      views: 856,
      likes: 67,
      shares: 21,
      author: t('press.authors.1'),
      readTime: '3 мин',
      featured: false,
      related: [1, 4]
    },
    {
      id: 3,
      title: t('press.news.2.title'),
      date: t('press.news.2.date'),
      category: 'opening',
      thumbnail: '🏗️',
      lead: t('press.news.2.lead'),
      fullText: t('press.news.2.fullText'),
      gallery: ['1', '2', '3', '4'],
      video: 'https://example.com/video2',
      files: [
        { name: t('press.news.2.files.0'), url: '#', type: 'pdf', size: '4.2 MB' },
        { name: t('press.news.2.files.1'), url: '#', type: 'pdf', size: '2.9 MB' }
      ],
      tags: [t('press.news.2.tags.0'), t('press.news.2.tags.1'), t('press.news.2.tags.2')],
      views: 1563,
      likes: 124,
      shares: 45,
      author: t('press.authors.2'),
      readTime: '5 мин',
      featured: true,
      related: [1, 5]
    },
    {
      id: 4,
      title: t('press.news.3.title'),
      date: t('press.news.3.date'),
      category: 'memorandum',
      thumbnail: '📝',
      lead: t('press.news.3.lead'),
      fullText: t('press.news.3.fullText'),
      gallery: ['1', '2'],
      video: null,
      files: [
        { name: t('press.news.3.files.0'), url: '#', type: 'pdf', size: '1.5 MB' }
      ],
      tags: [t('press.news.3.tags.0'), t('press.news.3.tags.1')],
      views: 723,
      likes: 45,
      shares: 18,
      author: t('press.authors.3'),
      readTime: '2 мин',
      featured: false,
      related: [2, 6]
    },
    {
      id: 5,
      title: t('press.news.4.title'),
      date: t('press.news.4.date'),
      category: 'official',
      thumbnail: '📢',
      lead: t('press.news.4.lead'),
      fullText: t('press.news.4.fullText'),
      gallery: ['1', '2', '3'],
      video: 'https://example.com/video3',
      files: [],
      tags: [t('press.news.4.tags.0'), t('press.news.4.tags.1'), t('press.news.4.tags.2')],
      views: 934,
      likes: 78,
      shares: 29,
      author: t('press.authors.4'),
      readTime: '4 мин',
      featured: false,
      related: [3, 6]
    },
    {
      id: 6,
      title: t('press.news.5.title'),
      date: t('press.news.5.date'),
      category: 'event',
      thumbnail: '🌟',
      lead: t('press.news.5.lead'),
      fullText: t('press.news.5.fullText'),
      gallery: ['1', '2'],
      video: null,
      files: [
        { name: t('press.news.5.files.0'), url: '#', type: 'pdf', size: '2.7 MB' },
        { name: t('press.news.5.files.1'), url: '#', type: 'pdf', size: '3.3 MB' }
      ],
      tags: [t('press.news.5.tags.0'), t('press.news.5.tags.1')],
      views: 1125,
      likes: 92,
      shares: 31,
      author: t('press.authors.5'),
      readTime: '3 мин',
      featured: true,
      related: [4, 5]
    },
    {
      id: 7,
      title: t('press.news.6.title', 'Новый проект устойчивого развития'),
      date: '18.11.2023',
      category: 'official',
      thumbnail: '🌱',
      lead: t('press.news.6.lead', 'Запуск экологически чистого производства с использованием солнечной энергии'),
      fullText: t('press.news.6.fullText', 'Компания объявляет о запуске нового экологического проекта, направленного на снижение углеродного следа и внедрение устойчивых практик в производственный процесс.\n\nПроект включает установку солнечных панелей мощностью 5 МВт, систему рециркуляции воды и переход на биологически разлагаемые материалы. Ожидается, что это позволит сократить выбросы CO2 на 40% в течение следующего года.'),
      gallery: ['1', '2', '3', '4', '5'],
      video: 'https://example.com/video4',
      files: [
        { name: t('press.news.6.files.0', 'Экологический отчет.pdf'), url: '#', type: 'pdf', size: '5.1 MB' }
      ],
      tags: [t('press.news.6.tags.0', 'экология'), t('press.news.6.tags.1', 'устойчивое развитие'), t('press.news.6.tags.2', 'инновации')],
      views: 876,
      likes: 103,
      shares: 42,
      author: t('press.authors.6', 'Экологический отдел'),
      readTime: '6 мин',
      featured: true,
      related: [1, 3]
    },
    {
      id: 8,
      title: t('press.news.7.title', 'Технологическое партнерство с университетом'),
      date: '12.11.2023',
      category: 'memorandum',
      thumbnail: '🎓',
      lead: t('press.news.7.lead', 'Подписание соглашения о совместных исследованиях в области искусственного интеллекта'),
      fullText: t('press.news.7.fullText', 'Компания заключила стратегическое партнерство с ведущим техническим университетом для совместной работы над проектами в области искусственного интеллекта и машинного обучения.\n\nВ рамках сотрудничества планируется создание исследовательского центра, где студенты и сотрудники компании будут работать над инновационными проектами. Первым совместным проектом станет разработка системы прогнозирования спроса с использованием нейронных сетей.'),
      gallery: ['1', '2'],
      video: 'https://example.com/video5',
      files: [
        { name: t('press.news.7.files.0', 'Соглашение о партнерстве.pdf'), url: '#', type: 'pdf', size: '3.8 MB' },
        { name: t('press.news.7.files.1', 'Презентация проекта.pdf'), url: '#', type: 'pdf', size: '4.5 MB' }
      ],
      tags: [t('press.news.7.tags.0', 'технологии'), t('press.news.7.tags.1', 'образование'), t('press.news.7.tags.2', 'ИИ')],
      views: 765,
      likes: 56,
      shares: 23,
      author: t('press.authors.7', 'Отдел инноваций'),
      readTime: '4 мин',
      featured: false,
      related: [2, 4]
    }
  ];

  const categories = [
    { id: 'all', name: t('press.categories.all'), color: 'gray', icon: '📰' },
    { id: 'official', name: t('press.categories.official'), color: 'blue', icon: '📢' },
    { id: 'event', name: t('press.categories.event'), color: 'green', icon: '🎉' },
    { id: 'opening', name: t('press.categories.opening'), color: 'orange', icon: '🏗️' },
    { id: 'memorandum', name: t('press.categories.memorandum'), color: 'purple', icon: '📝' }
  ];

  const colorMap = {
    gray: { bg: 'bg-gray-500', text: 'text-gray-600', light: 'bg-gray-50', border: 'border-gray-200', gradient: 'from-gray-500 to-gray-600' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' }
  };

  const fileTypeIcons = {
    pdf: '📄',
    doc: '📝',
    xls: '📊'
  };

  const fileTypeColors = {
    pdf: 'bg-red-100 text-red-600',
    doc: 'bg-blue-100 text-blue-600',
    xls: 'bg-green-100 text-green-600'
  };

  // Фильтрация новостей
  const filteredNews = news
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .slice(0, visibleCount);

  const featuredNews = news.filter(item => item.featured);
  const relatedNews = selectedNews ? news.filter(item => selectedNews.related?.includes(item.id)) : [];

  const toggleShowMore = (id) => {
    setShowMore(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Анимации
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
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
        duration: 0.3
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

  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const skeletonVariants = {
    initial: { opacity: 0.3 },
    animate: { 
      opacity: 0.7,
      transition: { 
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const SkeletonLoader = () => (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={skeletonVariants}
          className="bg-gray-200 rounded-2xl h-96 animate-pulse"
        />
      ))}
    </motion.div>
  );

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-blue-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-300 rounded-full blur-3xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 shadow-sm mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-blue-700 text-sm font-semibold">{t('press.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-transparent mb-6"
          >
            {t('press.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('press.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('press.subtitle')}
          </motion.p>
        </motion.div>

        {/* Панель управления: фильтры */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Фильтры по категориям */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const colors = colorMap[category.color];
                const isActive = activeCategory === category.id;
                
                return (
                  <motion.button
                    key={category.id}
                    variants={itemVariants}
                    className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg`
                        : `${colors.light} ${colors.text} border ${colors.border} hover:shadow-md`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setVisibleCount(6);
                    }}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span>{category.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Рекомендуемые новости */}
        {featuredNews.length > 0 && activeCategory === 'all' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span>
              {t('press.featured')}
            </motion.h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((newsItem) => {
                const category = categories.find(cat => cat.id === newsItem.category);
                const colors = colorMap[category.color];
                
                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                    whileHover="hover"
                    onClick={() => setSelectedNews(newsItem)}
                  >
                    <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                          {newsItem.thumbnail}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${colors.light} ${colors.text} backdrop-blur-sm`}>
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                        <span className="inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700 backdrop-blur-sm">
                          ⭐ {t('press.featuredBadge')}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-100 transition-colors duration-300">
                          {newsItem.title}
                        </h3>
                        <div className="flex items-center text-white/80 text-sm">
                          <span>{newsItem.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {newsItem.lead}
                      </p>

                      <motion.button
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-2"
                        whileHover={{ x: 5 }}
                      >
                        <span>{t('press.readMore')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Список новостей */}
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredNews.map((newsItem) => {
                const category = categories.find(cat => cat.id === newsItem.category);
                const colors = colorMap[category.color];
                
                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="bg-white rounded-2xl border-2 border-slate-200 hover:border-slate-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedNews(newsItem)}
                  >
                    {/* Миниатюра */}
                    <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                          {newsItem.thumbnail}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${colors.light} ${colors.text} backdrop-blur-sm`}>
                          <span className="mr-1">{category.icon}</span>
                          {category.name}
                        </span>
                      </div>
                      
                      {newsItem.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 backdrop-blur-sm">
                            ⭐
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center text-white text-sm">
                          <span className="font-medium">{newsItem.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {newsItem.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                        {newsItem.lead}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-sm">{newsItem.date}</span>
                        
                        <motion.button
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                          whileHover={{ x: 3 }}
                        >
                          <span>{t('press.readMore')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>

            {/* Сообщение если ничего не найдено */}
            {filteredNews.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                  {t('press.noNews.title')}
                </h3>
                <p className="text-slate-600 max-w-md mx-auto mb-6">
                  {t('press.noNews.description')}
                </p>
                <motion.button
                  onClick={() => {
                    setActiveCategory('all');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('press.noNews.reset')}
                </motion.button>
              </motion.div>
            )}

            {/* Кнопка загрузки еще */}
            {filteredNews.length > 0 && visibleCount < news.length && (
              <motion.div
                variants={itemVariants}
                className="text-center mt-12"
              >
                <motion.button
                  onClick={handleLoadMore}
                  className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t('press.loadMore')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </>
        )}
      </div>

      {/* Модальное окно с полной новостью */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Шапка модального окна */}
                <div className="sticky top-0 bg-white border-b border-slate-200 z-10 rounded-t-3xl">
                  <div className="flex justify-between items-start p-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${
                          colorMap[categories.find(cat => cat.id === selectedNews.category).color].light
                        } ${
                          colorMap[categories.find(cat => cat.id === selectedNews.category).color].text
                        }`}>
                          <span className="mr-2">{categories.find(cat => cat.id === selectedNews.category).icon}</span>
                          {categories.find(cat => cat.id === selectedNews.category).name}
                        </span>
                        {selectedNews.featured && (
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">
                            ⭐ {t('press.featuredBadge')}
                          </span>
                        )}
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-600">
                          {selectedNews.date}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-slate-900 mb-4 pr-8">
                        {selectedNews.title}
                      </h2>
                    </div>
                    
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors duration-300 bg-slate-100 hover:bg-slate-200 rounded-xl p-2"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Контент модального окна */}
                <div className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-slate-600 leading-relaxed mb-6">
                      {selectedNews.lead}
                    </p>
                    <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                      {selectedNews.fullText}
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

export default PressNews;