import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsAndEventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  const news = [
    {
      id: 1,
      title: t('news.items.0.title'),
      description: t('news.items.0.description'),
      date: t('news.items.0.date'),
      category: "sport",
      categoryName: t('news.categories.sport'),
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/football-championship-2025"
    },
    {
      id: 2,
      title: t('news.items.1.title'),
      description: t('news.items.1.description'),
      date: t('news.items.1.date'),
      category: "education",
      categoryName: t('news.categories.education'),
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/educational-center-osh"
    },
    {
      id: 3,
      title: t('news.items.2.title'),
      description: t('news.items.2.description'),
      date: t('news.items.2.date'),
      category: "international",
      categoryName: t('news.categories.international'),
      image: "https://images.unsplash.com/photo-1551135049-8a33b4273818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/turkey-cooperation"
    },
    {
      id: 4,
      title: t('news.items.3.title'),
      description: t('news.items.3.description'),
      date: t('news.items.3.date'),
      category: "social",
      categoryName: t('news.categories.social'),
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/batken-charity"
    },
    {
      id: 5,
      title: t('news.items.4.title'),
      description: t('news.items.4.description'),
      date: t('news.items.4.date'),
      category: "anniversary",
      categoryName: t('news.categories.anniversary'),
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/30-years-anniversary"
    },
    {
      id: 6,
      title: t('news.items.5.title'),
      description: t('news.items.5.description'),
      date: t('news.items.5.date'),
      category: "culture",
      categoryName: t('news.categories.culture'),
      image: "https://images.unsplash.com/photo-1489599809505-f2d4c65055d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      path: "/press/news/cinematika-premiere"
    }
  ];

  const categories = [
    { id: 'all', name: t('news.categories.all') },
    { id: 'sport', name: t('news.categories.sport') },
    { id: 'education', name: t('news.categories.education') },
    { id: 'international', name: t('news.categories.international') },
    { id: 'social', name: t('news.categories.social') },
    { id: 'anniversary', name: t('news.categories.anniversary') },
    { id: 'culture', name: t('news.categories.culture') }
  ];

  const filteredNews = activeCategory === 'all' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  const categoryColors = {
    sport: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    education: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    international: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    social: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    anniversary: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' },
    culture: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-200' }
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
    hidden: { y: 50, opacity: 0 },
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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

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
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('news.badge')}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('news.title')}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('news.subtitle')}
          </motion.p>
        </motion.div>

        {/* Фильтры по категориям */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Сетка новостей */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredNews.slice(0, 3).map((newsItem) => {
            const colors = categoryColors[newsItem.category];
            
            return (
              <motion.article
                key={newsItem.id}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
                whileHover={{ y: -8 }}
              >
                {/* Изображение */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Категория */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border} backdrop-blur-sm`}>
                    {newsItem.categoryName}
                  </div>
                </motion.div>

                {/* Контент */}
                <div className="p-6">
                  {/* Дата */}
                  <motion.p 
                    className="text-slate-500 text-sm mb-3 flex items-center"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {newsItem.date}
                  </motion.p>

                  {/* Заголовок */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {newsItem.title}
                  </h3>

                  {/* Описание */}
                  <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {newsItem.description}
                  </p>

                  {/* Кнопка подробнее */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t border-slate-100"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={newsItem.path}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group/btn"
                    >
                      <span>{t('news.learnMore')}</span>
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

                    {/* Индикатор нового */}
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Акцентный элемент при наведении */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsAndEventsSection;