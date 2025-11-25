import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

// Динамически импортируем Leaflet компоненты только на клиенте
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

import 'leaflet/dist/leaflet.css';

// Add custom styles for markers
const markerStyles = `
  .custom-country-marker {
    background: transparent !important;
    border: none !important;
  }
  .custom-country-marker div {
    transition: transform 0.2s ease-in-out;
  }
  .custom-country-marker:hover div {
    transform: scale(1.1);
  }
  .leaflet-popup-content-wrapper {
    border-radius: 0.75rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  .leaflet-popup-tip {
    box-shadow: none;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = markerStyles;
  document.head.appendChild(styleSheet);
}

// Custom markers for different regions
const createCustomMarker = (region, isHovered = false) => {
  const colors = {
    europe: '#3B82F6', // blue
    asia: '#10B981',   // green
    america: '#8B5CF6' // purple
  };

  const size = isHovered ? 40 : 35;

  if (typeof window !== 'undefined' && window.L) {
    return window.L.divIcon({
      className: 'custom-country-marker',
      html: `<div style="
        background-color: ${colors[region] || '#6b7280'};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        transition: all 0.3s ease;
        cursor: pointer;
      "></div>`,
      iconSize: [size, size],
      iconAnchor: [size/2, size/2],
      popupAnchor: [0, -size/2]
    });
  }
  return null;
};

const PartnersInternational = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('map');
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Fix for default markers in react-leaflet
    if (typeof window !== 'undefined' && window.L) {
      delete window.L.Icon.Default.prototype._getIconUrl;
      window.L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, []);

  const countries = [
    { 
      code: 'RU', 
      name: t('partnersInternational.countries.RU.name'), 
      region: 'europe', 
      coordinates: { lat: 61.5240, lng: 105.3188 },
      stats: t('partnersInternational.countries.RU.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.RU.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.RU.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.RU.description')
    },
    { 
      code: 'TR', 
      name: t('partnersInternational.countries.TR.name'), 
      region: 'asia', 
      coordinates: { lat: 38.9637, lng: 35.2433 },
      stats: t('partnersInternational.countries.TR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.TR.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.TR.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.TR.description')
    },
    { 
      code: 'CN', 
      name: t('partnersInternational.countries.CN.name'), 
      region: 'asia', 
      coordinates: { lat: 35.8617, lng: 104.1954 },
      stats: t('partnersInternational.countries.CN.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.CN.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.CN.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.CN.description')
    },
    { 
      code: 'KZ', 
      name: t('partnersInternational.countries.KZ.name'), 
      region: 'asia', 
      coordinates: { lat: 48.0196, lng: 66.9237 },
      stats: t('partnersInternational.countries.KZ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.KZ.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.KZ.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.KZ.description')
    },
    { 
      code: 'UZ', 
      name: t('partnersInternational.countries.UZ.name'), 
      region: 'asia', 
      coordinates: { lat: 41.3775, lng: 64.5853 },
      stats: t('partnersInternational.countries.UZ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.UZ.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.UZ.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.UZ.description')
    },
    { 
      code: 'TJ', 
      name: t('partnersInternational.countries.TJ.name'), 
      region: 'asia', 
      coordinates: { lat: 38.8610, lng: 71.2761 },
      stats: t('partnersInternational.countries.TJ.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.TJ.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.TJ.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.TJ.description')
    },
    { 
      code: 'BY', 
      name: t('partnersInternational.countries.BY.name'), 
      region: 'europe', 
      coordinates: { lat: 53.7098, lng: 27.9534 },
      stats: t('partnersInternational.countries.BY.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.BY.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.BY.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.BY.description')
    },
    { 
      code: 'KR', 
      name: t('partnersInternational.countries.KR.name'), 
      region: 'asia', 
      coordinates: { lat: 35.9078, lng: 127.7669 },
      stats: t('partnersInternational.countries.KR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.KR.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.KR.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.KR.description')
    },
    { 
      code: 'US', 
      name: t('partnersInternational.countries.US.name'), 
      region: 'america', 
      coordinates: { lat: 37.0902, lng: -95.7129 },
      stats: t('partnersInternational.countries.US.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.US.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.US.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.US.description')
    },
    { 
      code: 'BR', 
      name: t('partnersInternational.countries.BR.name'), 
      region: 'america', 
      coordinates: { lat: -14.2350, lng: -51.9253 },
      stats: t('partnersInternational.countries.BR.stats', { returnObjects: true }),
      partners: t('partnersInternational.countries.BR.partners', { returnObjects: true }),
      projects: t('partnersInternational.countries.BR.projects', { returnObjects: true }),
      description: t('partnersInternational.countries.BR.description')
    }
  ];

  const regionColors = {
    europe: { 
      bg: 'bg-blue-100', 
      text: 'text-blue-600', 
      border: 'border-blue-200', 
      dot: 'bg-blue-500', 
      gradient: 'from-blue-500 to-blue-600',
      mapColor: '#3B82F6'
    },
    asia: { 
      bg: 'bg-green-100', 
      text: 'text-green-600', 
      border: 'border-green-200', 
      dot: 'bg-green-500', 
      gradient: 'from-green-500 to-green-600',
      mapColor: '#10B981'
    },
    america: { 
      bg: 'bg-purple-100', 
      text: 'text-purple-600', 
      border: 'border-purple-200', 
      dot: 'bg-purple-500', 
      gradient: 'from-purple-500 to-purple-600',
      mapColor: '#8B5CF6'
    }
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

  // Фильтрация и поиск
  const filteredCountries = countries.filter(country => {
    const matchesFilter = activeFilter === 'all' || country.region === activeFilter;
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
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

  // Simple Map Component без сложной логики
  const SimpleMap = () => {
    if (!isClient) {
      return (
        <div className="w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">{t('partnersInternational.mapLoading')}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-lg overflow-hidden shadow-lg">
        <MapContainer
          center={[30, 0]}
          zoom={2}
          style={{ height: '500px', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredCountries.map((country) => {
            const markerIcon = createCustomMarker(country.region, hoveredCountry === country.code);
            
            if (!markerIcon) return null;
            
            return (
              <Marker
                key={country.code}
                position={[country.coordinates.lat, country.coordinates.lng]}
                icon={markerIcon}
                eventHandlers={{
                  click: () => setSelectedCountry(country),
                  mouseover: () => setHoveredCountry(country.code),
                  mouseout: () => setHoveredCountry(null),
                }}
              >
                <Popup className="custom-popup">
                  <div className="p-2 min-w-[250px]">
                    {/* Country Header in Popup */}
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{getFlagEmoji(country.code)}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {country.name}
                        </h3>
                        <div className="text-xs text-gray-600">
                          {country.stats.projects} {t('partnersInternational.projects')}
                        </div>
                      </div>
                    </div>

                    {/* Region badge */}
                    <div className="mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        regionColors[country.region].bg
                      } ${regionColors[country.region].text}`}>
                        {t(`partnersInternational.regions.${country.region}`)}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-sm font-bold text-gray-900">{country.stats.tradeVolume}</div>
                        <div className="text-xs text-gray-600">{t('partnersInternational.tradeVolume')}</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-sm font-bold text-gray-900">{country.stats.since}</div>
                        <div className="text-xs text-gray-600">{t('partnersInternational.since')}</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedCountry(country)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                      >
                        {t('partnersInternational.details')}
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    );
  };

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

        {/* Переключение вида, фильтры и поиск */}
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

            {/* Поиск */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder={t('partnersInternational.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                🔍
              </div>
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
          /* Простая карта как в примере */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t('partnersInternational.map.title')}
                </h2>
                <p className="text-gray-600">
                  {t('partnersInternational.map.subtitle')}
                </p>
              </div>

              <SimpleMap />
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
            {filteredCountries.length === 0 ? (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">
                  {t('partnersInternational.search.noResults')}
                </h3>
                <p className="text-slate-500">
                  {t('partnersInternational.search.tryDifferent')}
                </p>
              </motion.div>
            ) : (
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
            )}
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
                      <div className="text-sm text-slate-600">
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
                      {selectedCountry.partners && selectedCountry.partners.length > 0 ? (
                        selectedCountry.partners.map((partner, index) => (
                          <div
                            key={index}
                            className="p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200"
                          >
                            <h4 className="font-semibold text-slate-900 mb-1">{partner.name}</h4>
                            <p className="text-slate-600 text-sm">{partner.description}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-slate-500 text-sm">{t('partnersInternational.noData')}</p>
                      )}
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
                    {selectedCountry.projects && selectedCountry.projects.length > 0 ? (
                      selectedCountry.projects.map((project, index) => (
                        <motion.div
                          key={index}
                          className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                          whileHover={{ y: -2 }}
                        >
                          <h4 className="font-bold text-slate-900 mb-2">
                            {project.title}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {project.description}
                          </p>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-3 text-center py-8">
                        <p className="text-slate-500">{t('partnersInternational.noData')}</p>
                      </div>
                    )}
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
                    {selectedCountry.description}
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