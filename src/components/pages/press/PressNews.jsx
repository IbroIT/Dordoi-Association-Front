import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PressNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMore, setShowMore] = useState({});

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
        { name: t('press.news.0.files.0'), url: '#', type: 'pdf' },
        { name: t('press.news.0.files.1'), url: '#', type: 'doc' }
      ],
      tags: [t('press.news.0.tags.0'), t('press.news.0.tags.1'), t('press.news.0.tags.2')]
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
        { name: t('press.news.1.files.0'), url: '#', type: 'pdf' }
      ],
      tags: [t('press.news.1.tags.0'), t('press.news.1.tags.1')]
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
        { name: t('press.news.2.files.0'), url: '#', type: 'pdf' },
        { name: t('press.news.2.files.1'), url: '#', type: 'pdf' }
      ],
      tags: [t('press.news.2.tags.0'), t('press.news.2.tags.1'), t('press.news.2.tags.2')]
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
        { name: t('press.news.3.files.0'), url: '#', type: 'pdf' }
      ],
      tags: [t('press.news.3.tags.0'), t('press.news.3.tags.1')]
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
      tags: [t('press.news.4.tags.0'), t('press.news.4.tags.1'), t('press.news.4.tags.2')]
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
        { name: t('press.news.5.files.0'), url: '#', type: 'pdf' },
        { name: t('press.news.5.files.1'), url: '#', type: 'pdf' }
      ],
      tags: [t('press.news.5.tags.0'), t('press.news.5.tags.1')]
    }
  ];

  const categories = [
    { id: 'all', name: t('press.categories.all'), color: 'gray' },
    { id: 'official', name: t('press.categories.official'), color: 'blue' },
    { id: 'event', name: t('press.categories.event'), color: 'green' },
    { id: 'opening', name: t('press.categories.opening'), color: 'orange' },
    { id: 'memorandum', name: t('press.categories.memorandum'), color: 'purple' }
  ];

  const colorMap = {
    gray: { bg: 'bg-gray-500', text: 'text-gray-600', light: 'bg-gray-50', border: 'border-gray-200' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' }
  };

  const fileTypeIcons = {
    pdf: '📄',
    doc: '📝',
    xls: '📊'
  };

  const filteredNews = activeCategory === 'all' 
    ? news 
    : news.filter(item => item.category === activeCategory);

  const toggleShowMore = (id) => {
    setShowMore(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

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
        duration: 0.4,
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
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-purple-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 sm:mb-6"
          >
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('press.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('press.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('press.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('press.subtitle')}
          </motion.p>
        </motion.div>

        {/* Фильтры по категориям */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((category) => {
              const colors = colorMap[category.color];
              const isActive = activeCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  variants={itemVariants}
                  className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    isActive
                      ? `${colors.bg} text-white shadow-lg`
                      : `${colors.light} ${colors.text} border ${colors.border} hover:shadow-md`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Список новостей */}
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
                className="bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-slate-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                {/* Миниатюра */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-300">
                      {newsItem.thumbnail}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text}`}>
                      {category.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-slate-600">
                      {newsItem.date}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {newsItem.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {newsItem.lead}
                  </p>

                  {/* Теги */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Файлы */}
                  {newsItem.files.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                        <span>📎</span>
                        <span>{t('press.files')}</span>
                      </div>
                      <div className="space-y-1">
                        {newsItem.files.map((file, index) => (
                          <a
                            key={index}
                            href={file.url}
                            className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-300"
                          >
                            <span>{fileTypeIcons[file.type]}</span>
                            <span className="truncate">{file.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Действия */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <motion.button
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1"
                      whileHover={{ x: 5 }}
                      onClick={() => toggleShowMore(newsItem.id)}
                    >
                      <span>{showMore[newsItem.id] ? t('press.showLess') : t('press.readMore')}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${showMore[newsItem.id] ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.button>

                    <motion.button
                      className="text-slate-600 hover:text-slate-700 text-sm flex items-center space-x-1"
                      whileHover={{ x: 5 }}
                      onClick={() => setSelectedNews(newsItem)}
                    >
                      <span>{t('press.fullStory')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Полный текст (раскрывающийся) */}
                  <AnimatePresence>
                    {showMore[newsItem.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-slate-200">
                          <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                            {newsItem.fullText}
                          </p>
                          
                          {/* Галерея */}
                          {newsItem.gallery && newsItem.gallery.length > 0 && (
                            <div className="mt-4">
                              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                                <span>🖼️</span>
                                <span>{t('press.gallery')}</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                {newsItem.gallery.map((img, index) => (
                                  <div
                                    key={index}
                                    className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600 text-sm"
                                  >
                                    {t('press.image')} {index + 1}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Видео */}
                          {newsItem.video && (
                            <div className="mt-4">
                              <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
                                <span>🎥</span>
                                <span>{t('press.video')}</span>
                              </div>
                              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600">
                                {t('press.videoPlaceholder')}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Кнопка загрузки еще */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('press.loadMore')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Модальное окно с полной новостью */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedNews && (
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        colorMap[categories.find(cat => cat.id === selectedNews.category).color].light
                      } ${
                        colorMap[categories.find(cat => cat.id === selectedNews.category).color].text
                      }`}>
                        {categories.find(cat => cat.id === selectedNews.category).name}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-600 ml-2">
                        {selectedNews.date}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedNews(null)}
                      className="text-slate-400 hover:text-slate-600 transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {selectedNews.title}
                  </h2>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {selectedNews.lead}
                  </p>

                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-slate-700 whitespace-pre-line">
                      {selectedNews.fullText}
                    </p>
                  </div>

                  {/* Теги в модальном окне */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedNews.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Файлы в модальном окне */}
                  {selectedNews.files.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('press.downloads')}</h3>
                      <div className="space-y-2">
                        {selectedNews.files.map((file, index) => (
                          <a
                            key={index}
                            href={file.url}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300"
                          >
                            <span className="text-xl">{fileTypeIcons[file.type]}</span>
                            <span className="text-slate-700 flex-1">{file.name}</span>
                            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Галерея в модальном окне */}
                  {selectedNews.gallery && selectedNews.gallery.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('press.gallery')}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {selectedNews.gallery.map((img, index) => (
                          <div
                            key={index}
                            className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600 font-medium"
                          >
                            {t('press.image')} {index + 1}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Видео в модальном окне */}
                  {selectedNews.video && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">{t('press.video')}</h3>
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-blue-600 font-medium">
                        {t('press.videoPlayer')}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PressNews;