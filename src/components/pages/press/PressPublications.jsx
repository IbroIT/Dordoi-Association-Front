import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { GlobeIcon, NewspaperIcon, MicroscopeIcon, MicrophoneIcon, ChartIcon } from '../../icons';

const PressPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Отслеживание видимости для запуска анимации один раз
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Загрузка данных категорий из API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const response = await fetch(`https://dordoi-backend-f6584db3b47e.herokuapp.com/api/presscentre/publication-categories/?lang=${lang}`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        // Error handled silently
      }
    };

    fetchCategories();
  }, [i18n.language]);

  // Загрузка данных публикаций из API
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const response = await fetch(`https://dordoi-backend-f6584db3b47e.herokuapp.com/api/presscentre/publications/?lang=${lang}`);
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        // Error handled silently
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, [i18n.language]);

  // Функция для получения иконки категории
  const getCategoryIcon = (categoryId) => {
    const icons = {
      1: <GlobeIcon className="w-5 h-5" />,
      2: <NewspaperIcon className="w-5 h-5" />,
      3: <MicroscopeIcon className="w-5 h-5" />,
      4: <MicrophoneIcon className="w-5 h-5" />,
      5: <ChartIcon className="w-5 h-5" />
    };
    return icons[categoryId] || <NewspaperIcon className="w-5 h-5" />;
  };

  // Создание фильтров на основе категорий
  const filters = [
    { id: 'all', label: t('publications.filters.all'), count: categories.length },
    ...categories.map(category => ({
      id: category.id.toString(),
      label: category.title,
      icon: getCategoryIcon(category.id)
    }))
  ];

  // Фильтрация
  const filteredPublications = publications
    .filter(pub => activeFilter === 'all' || pub.category?.id?.toString() === activeFilter);





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
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
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
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-200 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('publications.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('publications.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('publications.subtitle')}
          </motion.p>
        </motion.div>


        {/* Filters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="mb-12"
        >
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-slate-600">Загрузка категорий...</span>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{filter.icon}</span>
                  <span>{filter.label}</span>
                  {filter.count !== undefined}
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>



        {/* Publications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-slate-600">Загрузка публикаций...</span>
            </div>
          ) : (
            filteredPublications.map((publication) => (
              <motion.div
                key={publication.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/publications/${publication.id}`)}
              >
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {publication.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-3">
                    {publication.short_description || publication.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{new Date(publication.published_at).toLocaleDateString()}</span>
                    <motion.button
                      className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                      whileHover={{ x: 3 }}
                    >
                      <span>{t('publications.readMore')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>


      </div>


    </section>
  );
};

export default PressPublications;