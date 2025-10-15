import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PressReleases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const documents = [
    {
      id: 1,
      type: 'press-release',
      title: t('pressReleases.documents.0.title'),
      date: t('pressReleases.documents.0.date'),
      size: '2.4 MB',
      category: 'official',
      year: '2024',
      url: '#',
      description: t('pressReleases.documents.0.description')
    },
    {
      id: 2,
      type: 'annual-report',
      title: t('pressReleases.documents.1.title'),
      date: t('pressReleases.documents.1.date'),
      size: '15.8 MB',
      category: 'financial',
      year: '2023',
      url: '#',
      description: t('pressReleases.documents.1.description')
    },
    {
      id: 3,
      type: 'financial',
      title: t('pressReleases.documents.2.title'),
      date: t('pressReleases.documents.2.date'),
      size: '3.2 MB',
      category: 'financial',
      year: '2024',
      url: '#',
      description: t('pressReleases.documents.2.description')
    },
    {
      id: 4,
      type: 'presentation',
      title: t('pressReleases.documents.3.title'),
      date: t('pressReleases.documents.3.date'),
      size: '8.7 MB',
      category: 'investment',
      year: '2024',
      url: '#',
      description: t('pressReleases.documents.3.description')
    },
    {
      id: 5,
      type: 'press-release',
      title: t('pressReleases.documents.4.title'),
      date: t('pressReleases.documents.4.date'),
      size: '1.9 MB',
      category: 'official',
      year: '2023',
      url: '#',
      description: t('pressReleases.documents.4.description')
    },
    {
      id: 6,
      type: 'annual-report',
      title: t('pressReleases.documents.5.title'),
      date: t('pressReleases.documents.5.date'),
      size: '12.3 MB',
      category: 'financial',
      year: '2022',
      url: '#',
      description: t('pressReleases.documents.5.description')
    },
    {
      id: 7,
      type: 'financial',
      title: t('pressReleases.documents.6.title'),
      date: t('pressReleases.documents.6.date'),
      size: '2.8 MB',
      category: 'financial',
      year: '2023',
      url: '#',
      description: t('pressReleases.documents.6.description')
    },
    {
      id: 8,
      type: 'presentation',
      title: t('pressReleases.documents.7.title'),
      date: t('pressReleases.documents.7.date'),
      size: '6.5 MB',
      category: 'investment',
      year: '2023',
      url: '#',
      description: t('pressReleases.documents.7.description')
    }
  ];

  const filters = [
    { id: 'all', name: t('pressReleases.filters.all'), color: 'gray' },
    { id: 'press-release', name: t('pressReleases.filters.pressReleases'), color: 'blue' },
    { id: 'annual-report', name: t('pressReleases.filters.annualReports'), color: 'green' },
    { id: 'financial', name: t('pressReleases.filters.financial'), color: 'orange' },
    { id: 'presentation', name: t('pressReleases.filters.presentations'), color: 'purple' }
  ];

  const years = ['2024', '2023', '2022', '2021'];
  const [selectedYear, setSelectedYear] = useState('all');

  const colorMap = {
    gray: { bg: 'bg-gray-500', text: 'text-gray-600', light: 'bg-gray-50', border: 'border-gray-200' },
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
    orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' }
  };

  const typeIcons = {
    'press-release': '📰',
    'annual-report': '📊',
    'financial': '💰',
    'presentation': '📈'
  };

  const typeColors = {
    'press-release': 'blue',
    'annual-report': 'green',
    'financial': 'orange',
    'presentation': 'purple'
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = activeFilter === 'all' || doc.type === activeFilter;
    const matchesYear = selectedYear === 'all' || doc.year === selectedYear;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesYear && matchesSearch;
  });

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
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-purple-200 rounded-full blur-2xl sm:blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-green-200 rounded-full blur-2xl sm:blur-3xl"
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
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('pressReleases.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('pressReleases.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('pressReleases.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('pressReleases.subtitle')}
          </motion.p>
        </motion.div>

        {/* Фильтры и поиск */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-12"
        >
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            {/* Поиск */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder={t('pressReleases.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                />
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Фильтры по типу */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">{t('pressReleases.filters.type')}</h3>
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => {
                    const colors = colorMap[filter.color];
                    const isActive = activeFilter === filter.id;
                    
                    return (
                      <motion.button
                        key={filter.id}
                        variants={itemVariants}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? `${colors.bg} text-white shadow-lg`
                            : `${colors.light} ${colors.text} border ${colors.border} hover:shadow-md`
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveFilter(filter.id)}
                      >
                        {filter.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Фильтр по годам */}
              <div className="lg:w-48">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">{t('pressReleases.filters.year')}</h3>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white"
                >
                  <option value="all">{t('pressReleases.filters.allYears')}</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Информация о результатах */}
            <motion.div
              variants={itemVariants}
              className="mt-4 text-center"
            >
              <span className="text-slate-600 text-sm">
                {t('pressReleases.results.showing')} <strong>{filteredDocuments.length}</strong> {t('pressReleases.results.of')} <strong>{documents.length}</strong> {t('pressReleases.results.documents')}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Сетка документов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredDocuments.map((doc) => {
            const typeColor = typeColors[doc.type];
            const colors = colorMap[typeColor];
            
            return (
              <motion.div
                key={doc.id}
                variants={cardVariants}
                className="bg-white rounded-xl sm:rounded-2xl border-2 border-slate-200 hover:border-slate-300 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  {/* Заголовок и иконка */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                      <span className="text-xl group-hover:text-white transition-colors duration-300">
                        {typeIcons[doc.type]}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                        {doc.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-slate-500">
                        <span>{doc.date}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                      </div>
                    </div>
                  </div>

                  {/* Описание */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                    {doc.description}
                  </p>

                  {/* Мета-информация */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text}`}>
                      {filters.find(f => f.id === doc.type)?.name}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {doc.year} {t('pressReleases.year')}
                    </span>
                  </div>

                  {/* Кнопка скачивания */}
                  <motion.a
                    href={doc.url}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors duration-300 group/download"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>{t('pressReleases.download')}</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Сообщение, если ничего не найдено */}
        {filteredDocuments.length === 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📭</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t('pressReleases.noResults.title')}
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              {t('pressReleases.noResults.description')}
            </p>
          </motion.div>
        )}

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 sm:p-12 border border-blue-200">
            <motion.div
              variants={itemVariants}
              className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <span className="text-white text-2xl">📞</span>
            </motion.div>
            
            <motion.h3 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
            >
              {t('pressReleases.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
            >
              {t('pressReleases.cta.subtitle')}
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('pressReleases.cta.buttons.interview')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.button>

              <motion.button
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t('pressReleases.cta.buttons.contact')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.button>
            </motion.div>

            {/* Контактная информация */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-blue-200"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-slate-600">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{t('pressReleases.contact.phone')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{t('pressReleases.contact.email')}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t('pressReleases.contact.hours')}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressReleases;