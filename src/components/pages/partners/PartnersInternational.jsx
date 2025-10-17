import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersInternational = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('map');

  const countries = [
    { 
      code: 'RU', 
      name: t('partnersInternational.countries.RU.name'), 
      region: 'europe', 
      coordinates: { x: 50, y: 25 },
      stats: t('partnersInternational.countries.RU.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.RU.partners', { returnObjects: true })
    },
    { 
      code: 'TR', 
      name: t('partnersInternational.countries.TR.name'), 
      region: 'asia', 
      coordinates: { x: 55, y: 35 },
      stats: t('partnersInternational.countries.TR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.TR.partners', { returnObjects: true })
    },
    { 
      code: 'CN', 
      name: t('partnersInternational.countries.CN.name'), 
      region: 'asia', 
      coordinates: { x: 75, y: 35 },
      stats: t('partnersInternational.countries.CN.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.CN.partners', { returnObjects: true })
    },
    { 
      code: 'KZ', 
      name: t('partnersInternational.countries.KZ.name'), 
      region: 'asia', 
      coordinates: { x: 60, y: 25 },
      stats: t('partnersInternational.countries.KZ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.KZ.partners', { returnObjects: true })
    },
    { 
      code: 'UZ', 
      name: t('partnersInternational.countries.UZ.name'), 
      region: 'asia', 
      coordinates: { x: 62, y: 30 },
      stats: t('partnersInternational.countries.UZ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.UZ.partners', { returnObjects: true })
    },
    { 
      code: 'TJ', 
      name: t('partnersInternational.countries.TJ.name'), 
      region: 'asia', 
      coordinates: { x: 65, y: 32 },
      stats: t('partnersInternational.countries.TJ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.TJ.partners', { returnObjects: true })
    },
    { 
      code: 'BY', 
      name: t('partnersInternational.countries.BY.name'), 
      region: 'europe', 
      coordinates: { x: 52, y: 22 },
      stats: t('partnersInternational.countries.BY.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.BY.partners', { returnObjects: true })
    },
    { 
      code: 'KR', 
      name: t('partnersInternational.countries.KR.name'), 
      region: 'asia', 
      coordinates: { x: 80, y: 32 },
      stats: t('partnersInternational.countries.KR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.KR.partners', { returnObjects: true })
    },
    { 
      code: 'US', 
      name: t('partnersInternational.countries.US.name'), 
      region: 'america', 
      coordinates: { x: 25, y: 35 },
      stats: t('partnersInternational.countries.US.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.US.partners', { returnObjects: true })
    },
    { 
      code: 'BR', 
      name: t('partnersInternational.countries.BR.name'), 
      region: 'america', 
      coordinates: { x: 35, y: 60 },
      stats: t('partnersInternational.countries.BR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.BR.partners', { returnObjects: true })
    },
    { 
      code: 'JP', 
      name: t('partnersInternational.countries.JP.name'), 
      region: 'asia', 
      coordinates: { x: 85, y: 32 },
      stats: t('partnersInternational.countries.JP.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.JP.partners', { returnObjects: true })
    },
    { 
      code: 'IN', 
      name: t('partnersInternational.countries.IN.name'), 
      region: 'asia', 
      coordinates: { x: 65, y: 40 },
      stats: t('partnersInternational.countries.IN.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.IN.partners', { returnObjects: true })
    },
    { 
      code: 'RS', 
      name: t('partnersInternational.countries.RS.name'), 
      region: 'europe', 
      coordinates: { x: 53, y: 30 },
      stats: t('partnersInternational.countries.RS.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.RS.partners', { returnObjects: true })
    },
    { 
      code: 'IT', 
      name: t('partnersInternational.countries.IT.name'), 
      region: 'europe', 
      coordinates: { x: 52, y: 32 },
      stats: t('partnersInternational.countries.IT.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.IT.partners', { returnObjects: true })
    },
    { 
      code: 'MY', 
      name: t('partnersInternational.countries.MY.name'), 
      region: 'asia', 
      coordinates: { x: 70, y: 50 },
      stats: t('partnersInternational.countries.MY.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.MY.partners', { returnObjects: true })
    },
    { 
      code: 'DE', 
      name: t('partnersInternational.countries.DE.name'), 
      region: 'europe', 
      coordinates: { x: 50, y: 27 },
      stats: t('partnersInternational.countries.DE.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.DE.partners', { returnObjects: true })
    },
    { 
      code: 'CH', 
      name: t('partnersInternational.countries.CH.name'), 
      region: 'europe', 
      coordinates: { x: 51, y: 29 },
      stats: t('partnersInternational.countries.CH.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.CH.partners', { returnObjects: true })
    },
    { 
      code: 'HU', 
      name: t('partnersInternational.countries.HU.name'), 
      region: 'europe', 
      coordinates: { x: 54, y: 28 },
      stats: t('partnersInternational.countries.HU.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.HU.partners', { returnObjects: true })
    },
    { 
      code: 'MN', 
      name: t('partnersInternational.countries.MN.name'), 
      region: 'asia', 
      coordinates: { x: 70, y: 28 },
      stats: t('partnersInternational.countries.MN.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.MN.partners', { returnObjects: true })
    },
    { 
      code: 'IL', 
      name: t('partnersInternational.countries.IL.name'), 
      region: 'asia', 
      coordinates: { x: 57, y: 35 },
      stats: t('partnersInternational.countries.IL.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.IL.partners', { returnObjects: true })
    }
  ];

  const regionColors = {
    europe: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', dot: 'bg-blue-500', gradient: 'from-blue-500 to-blue-600' },
    asia: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', dot: 'bg-green-500', gradient: 'from-green-500 to-green-600' },
    america: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', dot: 'bg-purple-500', gradient: 'from-purple-500 to-purple-600' }
  };

  const cooperationTypes = [
    { icon: '💰', label: t('partnersInternational.cooperation.trade'), key: 'trade' },
    { icon: '🎓', label: t('partnersInternational.cooperation.education'), key: 'education' },
    { icon: '🎭', label: t('partnersInternational.cooperation.culture'), key: 'culture' },
    { icon: '🏭', label: t('partnersInternational.cooperation.industry'), key: 'industry' },
    { icon: '🚚', label: t('partnersInternational.cooperation.logistics'), key: 'logistics' },
    { icon: '💡', label: t('partnersInternational.cooperation.innovation'), key: 'innovation' }
  ];

  const filters = [
    { key: 'all', label: t('partnersInternational.filters.all') },
    { key: 'europe', label: t('partnersInternational.regions.europe') },
    { key: 'asia', label: t('partnersInternational.regions.asia') },
    { key: 'america', label: t('partnersInternational.regions.america') }
  ];

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
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const mapDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.3,
      transition: {
        duration: 0.2
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getFlagEmoji = (countryCode) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };

  const filteredCountries = activeFilter === 'all' 
    ? countries 
    : countries.filter(country => country.region === activeFilter);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-green-200 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">{t('partnersInternational.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('partnersInternational.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('partnersInternational.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('partnersInternational.subtitle')}
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t('partnersInternational.stats.items', { returnObjects: true }).map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Переключение вида и фильтры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            {/* Переключение вида */}
            <div className="flex bg-slate-100 rounded-2xl p-1">
              {[
                { key: 'map', label: t('partnersInternational.view.map'), icon: '🗺️' },
                { key: 'list', label: t('partnersInternational.view.list'), icon: '📋' }
              ].map((view) => (
                <motion.button
                  key={view.key}
                  onClick={() => setViewMode(view.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    viewMode === view.key
                      ? 'bg-white text-slate-900 shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{view.icon}</span>
                  <span>{view.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                    activeFilter === filter.key
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Контент в зависимости от выбранного вида */}
        {viewMode === 'map' ? (
          /* Интерактивная карта */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-xl">
              {/* Легенда карты */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-4 mb-6 sm:mb-8"
              >
                {Object.entries(regionColors).map(([region, colors]) => (
                  <div key={region} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${colors.dot} rounded-full`}></div>
                    <span className="text-sm font-medium text-slate-700 capitalize">
                      {t(`partnersInternational.regions.${region}`)}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Контейнер карты */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 min-h-[400px] sm:min-h-[500px] shadow-lg">
                {/* Упрощенная карта мира (фон) */}
                <div className="absolute inset-4 sm:ins-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                  {/* Континенты - упрощенные формы */}
                  <div className="absolute top-4 left-8 w-32 h-20 bg-blue-100 rounded-lg opacity-30"></div>
                  <div className="absolute top-28 left-16 w-40 h-24 bg-green-100 rounded-lg opacity-30"></div>
                  <div className="absolute top-12 right-20 w-36 h-28 bg-purple-100 rounded-lg opacity-30"></div>
                  <div className="absolute bottom-16 left-12 w-28 h-32 bg-blue-100 rounded-lg opacity-30"></div>
                  <div className="absolute bottom-8 right-16 w-44 h-20 bg-green-100 rounded-lg opacity-30"></div>
                </div>

                {/* Точки стран на карте */}
                {filteredCountries.map((country) => {
                  const regionColor = regionColors[country.region];
                  return (
                    <motion.div
                      key={country.code}
                      variants={mapDotVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                        hoveredCountry === country.code ? 'z-20' : ''
                      }`}
                      style={{
                        left: `${country.coordinates.x}%`,
                        top: `${country.coordinates.y}%`
                      }}
                      onMouseEnter={() => setHoveredCountry(country.code)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry(country)}
                    >
                      {/* Точка на карте */}
                      <motion.div
                        className={`w-6 h-6 ${regionColor.dot} rounded-full border-4 border-white shadow-2xl ${
                          selectedCountry?.code === country.code ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
                        }`}
                      />
                      
                      {/* Всплывающая подсказка при наведении */}
                      <AnimatePresence>
                        {hoveredCountry === country.code && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.8 }}
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 bg-white rounded-xl shadow-2xl border border-slate-200 p-3 min-w-[140px] text-center"
                          >
                            <div className="text-2xl mb-2">{getFlagEmoji(country.code)}</div>
                            <div className="text-base font-bold text-slate-900 mb-1">
                              {country.name}
                            </div>
                            <div className="text-sm text-slate-600">
                              {country.stats.projects} {t('partnersInternational.projects')}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}

                {/* Подпись карты */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-slate-500 text-sm">
                  {t('partnersInternational.mapCaption')}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Список стран */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country) => {
                const regionColor = regionColors[country.region];
                return (
                  <motion.div
                    key={country.code}
                    variants={cardVariants}
                    className={`bg-white rounded-2xl p-6 border-2 ${
                      selectedCountry?.code === country.code 
                        ? `${regionColor.border} shadow-2xl` 
                        : 'border-slate-200 hover:border-slate-300 shadow-lg'
                    } transition-all duration-300 cursor-pointer group`}
                    whileHover="hover"
                    onClick={() => setSelectedCountry(country)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{getFlagEmoji(country.code)}</span>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {country.name}
                          </h3>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            regionColor.bg
                          } ${regionColor.text}`}>
                            {t(`partnersInternational.regions.${country.region}`)}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        className="text-right"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-2xl font-bold text-slate-900">
                          {country.stats.projects}
                        </div>
                        <div className="text-sm text-slate-600">
                          {t('partnersInternational.projects')}
                        </div>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-slate-50 rounded-xl">
                        <div className="text-lg font-bold text-slate-900">{country.stats.tradeVolume}</div>
                        <div className="text-sm text-slate-600">{t('partnersInternational.tradeVolume')}</div>
                      </div>
                      <div className="text-center p-3 bg-slate-50 rounded-xl">
                        <div className="text-lg font-bold text-slate-900">{country.stats.since}</div>
                        <div className="text-sm text-slate-600">{t('partnersInternational.since')}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cooperationTypes.slice(0, 3).map((type, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-600 rounded-lg text-sm"
                        >
                          {type.icon} {type.label}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Типы сотрудничества */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-xl"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              {t('partnersInternational.cooperation.title')}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {cooperationTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -8, scale: 1.05 }}
                  onClick={() => setActiveFilter(type.key)}
                >
                  <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                    {type.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Модальное окно с информацией о стране */}
      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 sm:p-8">
                {/* Заголовок модального окна */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{getFlagEmoji(selectedCountry.code)}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900">
                        {selectedCountry.name}
                      </h2>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          regionColors[selectedCountry.region].bg
                        } ${regionColors[selectedCountry.region].text}`}>
                          {t(`partnersInternational.regions.${selectedCountry.region}`)}
                        </span>
                        <span className="text-sm text-slate-500">
                          {t('partnersInternational.cooperatingSince')} {selectedCountry.stats.since}
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setSelectedCountry(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-300 p-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Статистика */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                >
                  {Object.entries(selectedCountry.stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
                      <div className="text-sm text-slate-600 capitalize">
                        {t(`partnersInternational.stats.${key}`)}
                      </div>
                    </div>
                  ))}
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Направления сотрудничества */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {t('partnersInternational.modal.cooperationAreas')}
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {cooperationTypes.map((type, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-2xl">{type.icon}</span>
                          <span className="text-sm font-medium text-slate-700">{type.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Ключевые партнеры */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {t('partnersInternational.modal.keyPartners')}
                    </h3>
                    <div className="space-y-3">
                      {selectedCountry.partners.map((partner, index) => (
                        <div
                          key={index}
                          className="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200"
                        >
                          <h4 className="font-semibold text-slate-900 mb-1">{partner.name}</h4>
                          <p className="text-slate-600 text-sm">{partner.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Примеры проектов */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {t('partnersInternational.modal.projects')}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        whileHover={{ y: -2 }}
                      >
                        <h4 className="font-bold text-slate-900 mb-2">
                          {t(`partnersInternational.countries.${selectedCountry.code}.projects.${index}.title`)}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {t(`partnersInternational.countries.${selectedCountry.code}.projects.${index}.description`)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Дополнительная информация */}
                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-6 border-t border-slate-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {t('partnersInternational.modal.additionalInfo')}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`partnersInternational.countries.${selectedCountry.code}.description`)}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PartnersInternational;