import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../../../api';

const PressNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t, i18n } = useTranslation();
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMore, setShowMore] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  // Иконки SVG для категорий
  const categoryIcons = {
    all: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    press: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    announcement: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    construction: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    document: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    star: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    chart: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    education: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  };

  // Загрузка данных из API с fallback на демо-данные
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Загрузка категорий
        const categoriesData = await apiRequest(`presscentre/categories/?lang=${i18n.language}`);

        // Загрузка новостей
        const newsData = await apiRequest(`presscentre/news/?lang=${i18n.language}`);

        // Преобразование данных категорий
        const categoriesArray = categoriesData.results || categoriesData;
        const transformedCategories = [
          { id: 'all', name: t('press.categories.all'), color: 'gray', icon: categoryIcons.all },
          ...categoriesArray.map(cat => ({
            id: cat.id.toString(),
            name: cat.title,
            color: getCategoryColor(cat.id),
            icon: getCategoryIcon(cat.id)
          }))
        ];

        // Преобразование данных новостей
        const newsArray = newsData.results || newsData || [];
        const transformedNews = Array.isArray(newsArray) ? newsArray.map(item => ({
          id: item.id,
          title: item.title,
          date: new Date(item.published_at).toLocaleDateString(i18n.language, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          category: item.category?.id?.toString() || item.category_id?.toString() || '1',
          thumbnail: item.image || null,
          lead: item.short_description || item.description?.substring(0, 150) + '...' || '',
          fullText: item.description,
          gallery: [],
          video: null,
          files: [],
          tags: [],
          views: 0,
          likes: 0,
          shares: 0,
          author: '',
          readTime: '3 мин',
          featured: item.is_recommended || false,
          related: []
        })) : [];

        setCategories(transformedCategories);
        setNews(transformedNews);
      } catch (err) {
        console.error('Error fetching data:', err);
        console.warn('API недоступен, используются демо-данные. Запустите Django сервер для получения реальных данных.');
        // Fallback to static data if API is not available
        setCategories([
          { id: 'all', name: t('press.categories.all'), color: 'gray', icon: categoryIcons.all },
          { id: '1', name: 'Пресс-релизы', color: 'blue', icon: categoryIcons.press }
        ]);
        setNews([
          {
            id: 1,
            title: 'Компания представляет новую стратегию развития на 2024 год',
            date: '29 ноября 2023',
            category: '1',
            thumbnail: null,
            lead: 'Сегодня компания объявила о новой стратегии развития, которая будет реализована в течение следующих пяти лет. Основное внимание будет уделено инновациям и устойчивому развитию.',
            fullText: 'Полный текст новости для демонстрации модального окна. Компания продолжает инвестировать в новые технологии и расширять свое присутствие на международных рынках.',
            gallery: [],
            video: null,
            files: [],
            tags: [],
            views: 0,
            likes: 0,
            shares: 0,
            author: '',
            readTime: '3 мин',
            featured: true,
            related: []
          }
        ]);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (isInView) {
      fetchData();
    }
  }, [isInView, i18n.language, t]);

  // Вспомогательные функции для категорий
  const getCategoryColor = (categoryId) => {
    const colors = ['blue', 'indigo', 'gray', 'teal', 'slate', 'neutral', 'stone'];
    return colors[categoryId % colors.length];
  };

  const getCategoryIcon = (categoryId) => {
    const icons = ['press', 'announcement', 'construction', 'document', 'star', 'chart', 'education'];
    return categoryIcons[icons[categoryId % icons.length]] || categoryIcons.all;
  };

  const colorMap = {
    gray: { 
      bg: 'bg-gray-500', 
      text: 'text-gray-700', 
      light: 'bg-gray-50', 
      border: 'border-gray-200', 
      gradient: 'from-gray-600 to-gray-700',
      dark: 'bg-gray-800'
    },
    blue: { 
      bg: 'bg-blue-500', 
      text: 'text-blue-700', 
      light: 'bg-blue-50', 
      border: 'border-blue-200', 
      gradient: 'from-blue-600 to-blue-700',
      dark: 'bg-blue-800'
    },
    indigo: { 
      bg: 'bg-indigo-500', 
      text: 'text-indigo-700', 
      light: 'bg-indigo-50', 
      border: 'border-indigo-200', 
      gradient: 'from-indigo-600 to-indigo-700',
      dark: 'bg-indigo-800'
    },
    teal: { 
      bg: 'bg-teal-500', 
      text: 'text-teal-700', 
      light: 'bg-teal-50', 
      border: 'border-teal-200', 
      gradient: 'from-teal-600 to-teal-700',
      dark: 'bg-teal-800'
    },
    slate: { 
      bg: 'bg-slate-500', 
      text: 'text-slate-700', 
      light: 'bg-slate-50', 
      border: 'border-slate-200', 
      gradient: 'from-slate-600 to-slate-700',
      dark: 'bg-slate-800'
    },
    neutral: { 
      bg: 'bg-neutral-500', 
      text: 'text-neutral-700', 
      light: 'bg-neutral-50', 
      border: 'border-neutral-200', 
      gradient: 'from-neutral-600 to-neutral-700',
      dark: 'bg-neutral-800'
    },
    stone: { 
      bg: 'bg-stone-500', 
      text: 'text-stone-700', 
      light: 'bg-stone-50', 
      border: 'border-stone-200', 
      gradient: 'from-stone-600 to-stone-700',
      dark: 'bg-stone-800'
    }
  };

  // Фильтрация новостей
  const filteredNews = news
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .slice(0, visibleCount);

  const featuredNews = news.filter(item => item.featured);
  const relatedNews = selectedNews ? news.filter(item => item.id !== selectedNews.id).slice(0, 3) : [];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -4,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
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
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={skeletonVariants}
          className="bg-gray-100 rounded-lg h-96 animate-pulse"
        />
      ))}
    </motion.div>
  );

  return (
    <section ref={ref} className="relative py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 rounded-md bg-blue-50 border border-blue-200 mb-6"
          >
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
            <span className="text-blue-700 text-sm font-medium uppercase tracking-wider">{t('press.badge', 'ПРЕСС-ЦЕНТР')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            {t('press.title', 'Новости и события')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t('press.subtitle', 'Актуальная информация о деятельности компании, важные объявления и пресс-релизы')}
          </motion.p>
        </motion.div>

        {/* Панель управления: фильтры */}
        <motion.div
          variants={itemVariants}
          className="mb-10"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const colors = colorMap[category.color];
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    isActive
                      ? `bg-blue-600 text-white shadow-sm`
                      : `bg-white text-gray-700 border border-gray-300 hover:bg-gray-50`
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleCount(6);
                  }}
                >
                  <div className={`${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {category.icon}
                  </div>
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
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
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {t('press.featured', 'Рекомендуемые')}
            </motion.h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.slice(0, 2).map((newsItem) => {
                const category = categories.find(cat => cat.id === newsItem.category) || categories[0];
                const colors = colorMap[category?.color || 'gray'];
                
                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                    whileHover="hover"
                    onClick={() => setSelectedNews(newsItem)}
                  >
                    <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {newsItem.thumbnail ? (
                        <img
                          src={newsItem.thumbnail}
                          alt={newsItem.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-300">
                            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium ${colors.light} ${colors.text} backdrop-blur-sm`}>
                          <div className="mr-1.5">
                            {category.icon}
                          </div>
                          {category.name}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                          {newsItem.title}
                        </h3>
                        <div className="flex items-center text-white/90 text-sm">
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{newsItem.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {newsItem.lead}
                      </p>

                      <motion.button
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-2"
                        whileHover={{ x: 5 }}
                      >
                        <span>{t('press.readMore', 'Подробнее')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
        {error && news.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {t('press.error.title', 'Ошибка загрузки')}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {error}
            </p>
            <motion.button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('press.error.retry', 'Попробовать снова')}
            </motion.button>
          </motion.div>
        ) : isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredNews.map((newsItem) => {
                const category = categories.find(cat => cat.id === newsItem.category) || categories[0];
                const colors = colorMap[category?.color || 'gray'];
                
                return (
                  <motion.article
                    key={newsItem.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedNews(newsItem)}
                  >
                    {/* Миниатюра */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      {newsItem.thumbnail ? (
                        <img
                          src={newsItem.thumbnail}
                          alt={newsItem.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-gray-200">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${colors.light} ${colors.text} backdrop-blur-sm`}>
                          <div className="mr-1.5">
                            {category.icon}
                          </div>
                          {category.name}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{newsItem.date}</span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {newsItem.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
                        {newsItem.lead}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-gray-500 text-sm">{newsItem.readTime}</span>
                        
                        <motion.button
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                          whileHover={{ x: 3 }}
                        >
                          <span>{t('press.readMore', 'Подробнее')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t('press.noNews.title', 'Новости не найдены')}
                </h3>
                <p className="text-gray-600 max-w-md mx-auto mb-6">
                  {t('press.noNews.description', 'Попробуйте выбрать другую категорию или изменить параметры фильтрации')}
                </p>
                <motion.button
                  onClick={() => {
                    setActiveCategory('all');
                  }}
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('press.noNews.reset', 'Сбросить фильтры')}
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
                  className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{t('press.loadMore', 'Загрузить еще')}</span>
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
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
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
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Шапка модального окна */}
                <div className="sticky top-0 bg-white border-b border-gray-200 z-10 rounded-t-xl">
                  <div className="flex justify-between items-start p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <span className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium ${
                          colorMap[(categories.find(cat => cat.id === selectedNews.category) || categories[0])?.color || 'gray'].light
                        } ${
                          colorMap[(categories.find(cat => cat.id === selectedNews.category) || categories[0])?.color || 'gray'].text
                        }`}>
                          <div className="mr-2">
                            {(categories.find(cat => cat.id === selectedNews.category) || categories[0])?.icon || categoryIcons.all}
                          </div>
                          {(categories.find(cat => cat.id === selectedNews.category) || categories[0])?.name || 'General'}
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-gray-100 text-gray-600">
                          <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {selectedNews.date}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 pr-8">
                        {selectedNews.title}
                      </h2>
                    </div>
                    
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="text-gray-400 hover:text-gray-600 transition-colors duration-300 bg-gray-100 hover:bg-gray-200 rounded-lg p-2 ml-4"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Контент модального окна */}
                <div className="p-6">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {selectedNews.lead}
                    </p>
                    <div className="text-gray-800 whitespace-pre-line leading-relaxed">
                      {selectedNews.fullText}
                    </div>
                  </div>
                  
                  {/* Действия в модальном окне */}
                  <div className="flex items-center justify-end mt-8 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                      {t('press.close', 'Закрыть')}
                    </button>
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