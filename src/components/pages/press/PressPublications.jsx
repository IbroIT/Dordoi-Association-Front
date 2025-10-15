import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PressPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showAccreditationForm, setShowAccreditationForm] = useState(false);
  const { t } = useTranslation();

  const filters = [
    { id: 'all', label: t('publications.filters.all') },
    { id: 'international', label: t('publications.filters.international') },
    { id: 'local', label: t('publications.filters.local') },
    { id: 'research', label: t('publications.filters.research') }
  ];

  const publications = [
    {
      id: 1,
      title: t('publications.items.forbes.title'),
      description: t('publications.items.forbes.description'),
      type: 'international',
      publisher: 'Forbes',
      date: '2024-01-15',
      language: t('publications.language.en'),
      pages: '3',
      fileSize: '2.4 MB',
      downloadUrl: '/publications/forbes-2024.pdf',
      previewUrl: '/publications/forbes-2024-preview.jpg',
      citation: t('publications.items.forbes.citation'),
      color: 'blue'
    },
    {
      id: 2,
      title: t('publications.items.worldBank.title'),
      description: t('publications.items.worldBank.description'),
      type: 'research',
      publisher: t('publications.items.worldBank.publisher'),
      date: '2023-11-20',
      language: t('publications.language.en'),
      pages: '45',
      fileSize: '8.7 MB',
      downloadUrl: '/publications/world-bank-research.pdf',
      previewUrl: '/publications/world-bank-preview.jpg',
      citation: t('publications.items.worldBank.citation'),
      color: 'green'
    },
    {
      id: 3,
      title: t('publications.items.usaid.title'),
      description: t('publications.items.usaid.description'),
      type: 'research',
      publisher: 'USAID',
      date: '2023-09-10',
      language: t('publications.language.en'),
      pages: '28',
      fileSize: '5.2 MB',
      downloadUrl: '/publications/usaid-report.pdf',
      previewUrl: '/publications/usaid-preview.jpg',
      citation: t('publications.items.usaid.citation'),
      color: 'purple'
    },
    {
      id: 4,
      title: t('publications.items.localNews.title'),
      description: t('publications.items.localNews.description'),
      type: 'local',
      publisher: t('publications.items.localNews.publisher'),
      date: '2024-02-01',
      language: t('publications.language.local'),
      pages: '2',
      fileSize: '1.8 MB',
      downloadUrl: '/publications/local-news-2024.pdf',
      previewUrl: '/publications/local-news-preview.jpg',
      citation: t('publications.items.localNews.citation'),
      color: 'orange'
    },
    {
      id: 5,
      title: t('publications.items.businessMag.title'),
      description: t('publications.items.businessMag.description'),
      type: 'international',
      publisher: t('publications.items.businessMag.publisher'),
      date: '2023-12-05',
      language: t('publications.language.en'),
      pages: '5',
      fileSize: '3.1 MB',
      downloadUrl: '/publications/business-magazine.pdf',
      previewUrl: '/publications/business-mag-preview.jpg',
      citation: t('publications.items.businessMag.citation'),
      color: 'red'
    },
    {
      id: 6,
      title: t('publications.items.economicReview.title'),
      description: t('publications.items.economicReview.description'),
      type: 'research',
      publisher: t('publications.items.economicReview.publisher'),
      date: '2023-10-15',
      language: t('publications.language.ru'),
      pages: '15',
      fileSize: '4.5 MB',
      downloadUrl: '/publications/economic-review.pdf',
      previewUrl: '/publications/economic-review-preview.jpg',
      citation: t('publications.items.economicReview.citation'),
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    red: { light: 'bg-red-50', dark: 'bg-red-600', text: 'text-red-600', border: 'border-red-200' },
    cyan: { light: 'bg-cyan-50', dark: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200' }
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
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
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  const filteredPublications = activeFilter === 'all' 
    ? publications 
    : publications.filter(pub => pub.type === activeFilter);

  const openPublicationDetail = (publication) => {
    setSelectedPublication(publication);
  };

  const closePublicationDetail = () => {
    setSelectedPublication(null);
  };

  const handleDownload = (downloadUrl, title) => {
    // В реальном приложении здесь будет запрос на скачивание
    console.log('Downloading:', downloadUrl);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Логика отправки комментария
    console.log('Comment submitted');
    setShowCommentForm(false);
  };

  const handleAccreditationSubmit = (e) => {
    e.preventDefault();
    // Логика отправки запроса аккредитации
    console.log('Accreditation request submitted');
    setShowAccreditationForm(false);
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Фильтры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>

          {/* Сетка публикаций */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPublications.map((publication) => {
              const colors = colorMap[publication.color];
              return (
                <motion.div
                  key={publication.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  {/* Превью публикации */}
                  <div 
                    className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden cursor-pointer"
                    onClick={() => openPublicationDetail(publication)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-blue-600 font-semibold">{publication.publisher}</p>
                      </div>
                    </div>
                    
                    {/* Тип публикации */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                        {filters.find(f => f.id === publication.type)?.label}
                      </span>
                    </div>
                    
                    {/* Язык */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 backdrop-blur-sm px-3 py-1 text-white text-sm font-medium rounded-full">
                        {publication.language}
                      </span>
                    </div>

                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Информация о публикации */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {publication.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span>{new Date(publication.date).toLocaleDateString()}</span>
                      <span>{publication.pages} {t('publications.pages')}</span>
                      <span>{publication.fileSize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={() => openPublicationDetail(publication)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <span>{t('publications.readMore')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(publication.downloadUrl, publication.title);
                        }}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t('publications.download')}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Детали публикации */}
        <AnimatePresence>
          {selectedPublication && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePublicationDetail}
            >
              <motion.div
                className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-10 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedPublication.title}
                      </h3>
                      <p className="text-white/80">
                        {selectedPublication.publisher} • {new Date(selectedPublication.date).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={closePublicationDetail}
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="overflow-y-auto max-h-[80vh]">
                  <div className="p-6">
                    {/* Превью документа */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-6 flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-blue-600 font-semibold">{selectedPublication.publisher}</p>
                        <p className="text-blue-400 text-sm mt-2">
                          {selectedPublication.pages} {t('publications.pages')} • {selectedPublication.fileSize}
                        </p>
                      </div>
                    </div>

                    {/* Детали */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">{t('publications.details.description')}</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {selectedPublication.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">{t('publications.details.citation')}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm bg-slate-50 p-3 rounded-lg">
                          {selectedPublication.citation}
                        </p>
                      </div>
                    </div>

                    {/* Мета-информация */}
                    <div className="bg-slate-50 rounded-xl p-4 mb-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="font-semibold text-slate-600">{t('publications.details.type')}:</span>
                          <span className="ml-2 text-slate-900">
                            {filters.find(f => f.id === selectedPublication.type)?.label}
                          </span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-600">{t('publications.details.language')}:</span>
                          <span className="ml-2 text-slate-900">{selectedPublication.language}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-600">{t('publications.details.pages')}:</span>
                          <span className="ml-2 text-slate-900">{selectedPublication.pages}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-600">{t('publications.details.size')}:</span>
                          <span className="ml-2 text-slate-900">{selectedPublication.fileSize}</span>
                        </div>
                      </div>
                    </div>

                    {/* Кнопки действий */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                      <div className="flex gap-3">
                        <motion.button
                          onClick={() => handleDownload(selectedPublication.downloadUrl, selectedPublication.title)}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          <span>{t('publications.downloadPDF')}</span>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => setShowCommentForm(true)}
                          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span>{t('publications.comment')}</span>
                        </motion.button>
                      </div>
                      
                      <motion.button
                        onClick={() => setShowAccreditationForm(true)}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>{t('publications.requestAccreditation')}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Форма комментария */}
        <AnimatePresence>
          {showCommentForm && (
            <CommentForm 
              onClose={() => setShowCommentForm(false)}
              onSubmit={handleCommentSubmit}
            />
          )}
        </AnimatePresence>

        {/* Форма аккредитации */}
        <AnimatePresence>
          {showAccreditationForm && (
            <AccreditationForm 
              onClose={() => setShowAccreditationForm(false)}
              onSubmit={handleAccreditationSubmit}
            />
          )}
        </AnimatePresence>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {t('publications.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('publications.cta.description')}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => setShowCommentForm(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{t('publications.cta.comment')}</span>
              </motion.button>
              
              <motion.button
                onClick={() => setShowAccreditationForm(true)}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>{t('publications.cta.accreditation')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Компонент формы комментария
const CommentForm = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('publications.forms.comment.title')}</h3>
          <p className="text-slate-600 mb-6">{t('publications.forms.comment.description')}</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.name')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.namePlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.comment')}
              </label>
              <textarea
                required
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.commentPlaceholder')}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.cancel')}
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.comment.submit')}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Компонент формы аккредитации
const AccreditationForm = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('publications.forms.accreditation.title')}</h3>
          <p className="text-slate-600 mb-6">{t('publications.forms.accreditation.description')}</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.media')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.mediaPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.name')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.namePlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.event')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.eventPlaceholder')}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.cancel')}
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.accreditation.submit')}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PressPublications;