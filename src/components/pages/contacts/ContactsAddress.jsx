import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom markers for different partner types
const createCustomMarker = (type) => {
  const colors = {
    clinical: '#dc2626',
    university: '#2563eb',
    organization: '#16a34a',
    business: '#9333ea',
    academic: '#6b7280'
  };

  const icons = {
    clinical: '🏥',
    university: '🎓',
    organization: '🔬',
    business: '💼',
    academic: '📚'
  };

  return new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${colors[type] || '#6b7280'};
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
    ">${icons[type] || '🤝'}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
};

// Custom marker for our locations
const createLocationMarker = (type) => {
  const colors = {
    office: '#dc2626',
    warehouse: '#059669',
    'trade-complex': '#7c3aed'
  };

  const icons = {
    office: '🏢',
    warehouse: '🏭',
    'trade-complex': '🏪'
  };

  return new L.DivIcon({
    className: 'location-marker',
    html: `<div style="
      background-color: ${colors[type] || '#2563eb'};
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
    ">${icons[type] || '📍'}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
};

const ContactsAddress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t, i18n } = useTranslation();
  const [activeContact, setActiveContact] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [mapType, setMapType] = useState('locations'); // 'locations' or 'partners'

  // Fetch partners data from API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const partnersData = await PartnersService.getAllPartners(i18n.language);
        const formattedPartners = partnersData.map(partner => ({
          id: partner.id,
          name: partner.name,
          type: partner.partner_type || 'academic',
          country: partner.country || 'Кыргызстан',
          city: partner.city || 'Бишкек',
          description: partner.description || '',
          website: partner.website || '',
          email: partner.email || '',
          phone: partner.phone || '',
          address: partner.address || `${partner.city || 'Бишкек'}, ${partner.country || 'Кыргызстан'}`,
          logo: partner.logo ? `https://su-med-backend-35d3d951c74b.herokuapp.com/${partner.logo}` : '/api/placeholder/100/100',
          coordinates: [
            partner.latitude || 42.8746,
            partner.longitude || 74.5698
          ],
          established: partner.established_year || '',
          cooperation_since: partner.cooperation_since || '',
          cooperation: partner.partnership_areas ?
            partner.partnership_areas.split(',').map(area => area.trim()) :
            [],
          contact: {
            email: partner.email || '',
            phone: partner.phone || ''
          }
        }));
        setPartners(formattedPartners);
      } catch (err) {
        setError('Failed to load partners data');
        console.error('Error fetching partners:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [i18n.language]);

  const contactInfo = {
    address: {
      title: t('contacts.address.title'),
      value: t('contacts.address.value'),
      icon: '📍',
      description: t('contacts.address.description'),
      coordinates: [42.8746, 74.5698] // Default Bishkek coordinates
    },
    phones: [
      {
        title: t('contacts.phones.general.title'),
        number: t('contacts.phones.general.number'),
        icon: '📞',
        description: t('contacts.phones.general.description')
      },
      {
        title: t('contacts.phones.reception.title'),
        number: t('contacts.phones.reception.number'),
        icon: '🏢',
        description: t('contacts.phones.reception.description')
      },
      {
        title: t('contacts.phones.press.title'),
        number: t('contacts.phones.press.number'),
        icon: '📰',
        description: t('contacts.phones.press.description')
      },
      {
        title: t('contacts.phones.partnership.title'),
        number: t('contacts.phones.partnership.number'),
        icon: '🤝',
        description: t('contacts.phones.partnership.description')
      }
    ],
    emails: [
      {
        title: t('contacts.emails.info.title'),
        address: t('contacts.emails.info.address'),
        icon: '📧',
        description: t('contacts.emails.info.description')
      },
      {
        title: t('contacts.emails.press.title'),
        address: t('contacts.emails.press.address'),
        icon: '📰',
        description: t('contacts.emails.press.description')
      },
      {
        title: t('contacts.emails.partnership.title'),
        address: t('contacts.emails.partnership.address'),
        icon: '🤝',
        description: t('contacts.emails.partnership.description')
      }
    ],
    hours: {
      title: t('contacts.hours.title'),
      schedule: [
        { days: t('contacts.hours.weekdays.days'), time: t('contacts.hours.weekdays.time') },
        { days: t('contacts.hours.weekends.days'), time: t('contacts.hours.weekends.time') },
        { days: t('contacts.hours.holidays.days'), time: t('contacts.hours.holidays.time') }
      ],
      icon: '🕒'
    }
  };

  const mapLocations = [
    {
      id: 'office',
      title: t('contacts.map.locations.office.title'),
      description: t('contacts.map.locations.office.description'),
      coordinates: [42.8746, 74.5698],
      type: 'office'
    },
    {
      id: 'trade-complex',
      title: t('contacts.map.locations.tradeComplex.title'),
      description: t('contacts.map.locations.tradeComplex.description'),
      coordinates: [42.8846, 74.5798],
      type: 'trade-complex'
    },
    {
      id: 'warehouse',
      title: t('contacts.map.locations.warehouse.title'),
      description: t('contacts.map.locations.warehouse.description'),
      coordinates: [42.8646, 74.5598],
      type: 'warehouse'
    }
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

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
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

  const getTypeBadgeColor = (type) => {
    const colors = {
      clinical: 'bg-red-100 text-red-800',
      university: 'bg-blue-100 text-blue-800',
      organization: 'bg-green-100 text-green-800',
      business: 'bg-purple-100 text-purple-800',
      academic: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getTypeLabel = (type) => {
    const typeLabels = {
      'clinical': 'Клиническая база',
      'university': 'Университет',
      'organization': 'Организация',
      'business': 'Бизнес-партнер',
      'academic': 'Академический партнер'
    };
    return typeLabels[type] || 'Партнер';
  };

  const partnerTypes = [
    { value: 'clinical', label: 'Клинические базы', icon: '🏥' },
    { value: 'university', label: 'Университеты', icon: '🎓' },
    { value: 'organization', label: 'Организации', icon: '🔬' },
    { value: 'business', label: 'Бизнес-партнеры', icon: '💼' },
    { value: 'academic', label: 'Академические', icon: '📚' }
  ];

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
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-green-200 rounded-full blur-2xl sm:blur-3xl"
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
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('contacts.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('contacts.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('contacts.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('contacts.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Левая колонка - Контактная информация */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            {/* Адрес */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
              onMouseEnter={() => setActiveContact('address')}
              onMouseLeave={() => setActiveContact(null)}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-500 transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {contactInfo.address.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {contactInfo.address.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
                    {contactInfo.address.value}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {contactInfo.address.description}
                  </p>
                  
                  <motion.button
                    className="mt-4 inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    whileHover={{ x: 5 }}
                    onClick={() => copyToClipboard(contactInfo.address.value, 'address')}
                  >
                    <span>{copiedField === 'address' ? t('contacts.copied') : t('contacts.copyAddress')}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Телефоны */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-green-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                {t('contacts.phones.title')}
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.phones.map((phone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group/phone"
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setActiveContact(`phone-${index}`)}
                    onMouseLeave={() => setActiveContact(null)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-lg group-hover/phone:bg-green-500 transition-colors duration-300">
                      <span className="group-hover/phone:text-white transition-colors duration-300">
                        {phone.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">
                        {phone.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <a 
                          href={`tel:${phone.number}`}
                          className="text-slate-700 hover:text-green-600 transition-colors duration-300 text-sm font-medium"
                        >
                          {phone.number}
                        </a>
                        <motion.button
                          className="text-slate-400 hover:text-green-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => copyToClipboard(phone.number, `phone-${index}`)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </motion.button>
                      </div>
                      <p className="text-slate-500 text-xs mt-1">
                        {phone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-purple-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                {t('contacts.emails.title')}
              </h3>
              
              <div className="space-y-3">
                {contactInfo.emails.map((email, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-300 group/email"
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setActiveContact(`email-${index}`)}
                    onMouseLeave={() => setActiveContact(null)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-lg group-hover/email:bg-purple-500 transition-colors duration-300">
                        <span className="group-hover/email:text-white transition-colors duration-300">
                          {email.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm mb-1">
                          {email.title}
                        </h4>
                        <a 
                          href={`mailto:${email.address}`}
                          className="text-slate-700 hover:text-purple-600 transition-colors duration-300 text-sm"
                        >
                          {email.address}
                        </a>
                      </div>
                    </div>
                    
                    <motion.button
                      className="text-slate-400 hover:text-purple-600 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => copyToClipboard(email.address, `email-${index}`)}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Часы работы */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-orange-300 transition-all duration-300 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-orange-500 transition-colors duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {contactInfo.hours.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                    {contactInfo.hours.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {contactInfo.hours.schedule.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0">
                        <span className="text-slate-700 font-medium text-sm">
                          {schedule.days}
                        </span>
                        <span className="text-slate-600 text-sm">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Карта */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            {/* Переключение между картами */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-4 border-2 border-slate-200"
            >
              <div className="flex space-x-2">
                <button
                  onClick={() => setMapType('locations')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    mapType === 'locations'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  📍 Наши локации
                </button>
                <button
                  onClick={() => setMapType('partners')}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    mapType === 'partners'
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  🤝 Партнеры
                </button>
              </div>
            </motion.div>

            {/* Интерактивная карта */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                {mapType === 'locations' ? t('contacts.map.title') : 'Карта партнеров'}
              </h3>
              
              <div className="relative bg-white rounded-lg overflow-hidden border border-slate-200 min-h-[400px]">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p className="text-slate-600">Загрузка карты...</p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-red-600 text-xl mb-4">⚠️</div>
                      <p className="text-slate-600">Ошибка загрузки данных</p>
                    </div>
                  </div>
                ) : (
                  <MapContainer
                    center={mapType === 'locations' ? [42.8746, 74.5698] : [42.8746, 74.5698]}
                    zoom={mapType === 'locations' ? 12 : 10}
                    style={{ height: '400px', width: '100%' }}
                    className="z-0"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* Наши локации */}
                    {mapType === 'locations' && mapLocations.map((location) => (
                      <Marker
                        key={location.id}
                        position={location.coordinates}
                        icon={createLocationMarker(location.type)}
                      >
                        <Popup>
                          <div className="p-2 min-w-[200px]">
                            <h4 className="font-semibold text-slate-900 mb-2">
                              {location.title}
                            </h4>
                            <p className="text-slate-600 text-sm mb-3">
                              {location.description}
                            </p>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => window.open(`https://maps.google.com/?q=${location.coordinates[0]},${location.coordinates[1]}`, '_blank')}
                                className="flex-1 bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-blue-700"
                              >
                                Маршрут
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}

                    {/* Партнеры */}
                    {mapType === 'partners' && partners.map((partner) => (
                      <Marker
                        key={partner.id}
                        position={partner.coordinates}
                        icon={createCustomMarker(partner.type)}
                      >
                        <Popup className="custom-popup">
                          <div className="p-2 min-w-[250px]">
                            <div className="flex items-center mb-3">
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="w-8 h-8 object-contain mr-2"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900 text-sm">
                                  {partner.name}
                                </h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(partner.type)}`}>
                                  {getTypeLabel(partner.type)}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center text-sm text-gray-600 mb-2">
                              <span className="mr-2">📍</span>
                              <span>{partner.city}, {partner.country}</span>
                            </div>

                            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                              {partner.description}
                            </p>

                            {partner.cooperation && partner.cooperation.length > 0 && (
                              <div className="mb-3">
                                <div className="text-xs font-medium text-gray-900 mb-1">Сотрудничество:</div>
                                <div className="flex flex-wrap gap-1">
                                  {partner.cooperation.slice(0, 2).map((area, index) => (
                                    <span
                                      key={index}
                                      className="px-1 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                                    >
                                      {area}
                                    </span>
                                  ))}
                                  {partner.cooperation.length > 2 && (
                                    <span className="text-xs text-gray-500">+{partner.cooperation.length - 2}</span>
                                  )}
                                </div>
                              </div>
                            )}

                            <div className="flex space-x-2">
                              <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors text-center"
                              >
                                Сайт
                              </a>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}

                {/* Легенда карты */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg border border-slate-200 p-3">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    Легенда
                  </h4>
                  <div className="space-y-2">
                    {mapType === 'locations' ? (
                      <>
                        {mapLocations.map((location) => (
                          <div key={location.id} className="flex items-center space-x-2 text-xs">
                            <div 
                              className="w-3 h-3 rounded-full"
                              style={{
                                backgroundColor: 
                                  location.type === 'office' ? '#dc2626' :
                                  location.type === 'warehouse' ? '#059669' : '#7c3aed'
                              }}
                            ></div>
                            <span className="text-slate-600">{location.title}</span>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {partnerTypes.map((type) => (
                          <div key={type.value} className="flex items-center space-x-2 text-xs">
                            <div
                              className="w-3 h-3 rounded-full border-2 border-white shadow"
                              style={{
                                backgroundColor: 
                                  type.value === 'clinical' ? '#dc2626' :
                                  type.value === 'university' ? '#2563eb' :
                                  type.value === 'organization' ? '#16a34a' :
                                  type.value === 'business' ? '#9333ea' : '#6b7280'
                              }}
                            ></div>
                            <span className="text-slate-600">{type.label}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Кнопки действий для карты */}
              <div className="flex flex-wrap gap-3 mt-4">
                <motion.button
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-sm flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const coordinates = mapType === 'locations' ? contactInfo.address.coordinates : [42.8746, 74.5698];
                    window.open(`https://maps.google.com/?q=${coordinates[0]},${coordinates[1]}`, '_blank');
                  }}
                >
                  <span>Маршрут</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="flex-1 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-300 text-sm flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const mapElement = document.querySelector('.leaflet-container');
                    if (mapElement.requestFullscreen) {
                      mapElement.requestFullscreen();
                    }
                  }}
                >
                  <span>Полный экран</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>

            {/* Дополнительная информация */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-6 border border-blue-200"
            >
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                {t('contacts.additionalInfo.title')}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {t('contacts.additionalInfo.parking.title')}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {t('contacts.additionalInfo.parking.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">🚌</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {t('contacts.additionalInfo.transport.title')}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {t('contacts.additionalInfo.transport.description')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">♿</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">
                      {t('contacts.additionalInfo.accessibility.title')}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {t('contacts.additionalInfo.accessibility.description')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Уведомление о копировании */}
        <AnimatePresence>
          {copiedField && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{t('contacts.copiedNotification')}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactsAddress;