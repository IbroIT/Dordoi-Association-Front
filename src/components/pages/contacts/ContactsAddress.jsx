import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
    academic: '#6b7280',
    medical: '#dc2626',
    educational: '#2563eb',
    research: '#16a34a',
    corporate: '#9333ea'
  };

  const icons = {
    clinical: '🏥',
    university: '🎓',
    organization: '🔬',
    business: '💼',
    academic: '📚',
    medical: '🏥',
    educational: '🎓',
    research: '🔬',
    corporate: '💼'
  };

  return new L.DivIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${colors[type] || '#6b7280'};
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
      transition: all 0.3s ease;
    ">${icons[type] || '🤝'}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18]
  });
};

// Custom marker for our locations
const createLocationMarker = (type) => {
  const colors = {
    office: '#dc2626',
    warehouse: '#059669',
    'trade-complex': '#7c3aed',
    headquarter: '#dc2626',
    storage: '#059669',
    commercial: '#7c3aed'
  };

  const icons = {
    office: '🏢',
    warehouse: '🏭',
    'trade-complex': '🏪',
    headquarter: '🏢',
    storage: '🏭',
    commercial: '🏪'
  };

  return new L.DivIcon({
    className: 'location-marker',
    html: `<div style="
      background-color: ${colors[type] || '#2563eb'};
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: all 0.3s ease;
    ">${icons[type] || '📍'}</div>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -21]
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
  const [mapType, setMapType] = useState('locations');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock partners data - in real app this would come from API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockPartners = [
          {
            id: 1,
            name: t('contacts.partners.list.0.name', { defaultValue: 'Национальный госпиталь' }),
            type: 'clinical',
            country: t('contacts.partners.list.0.country', { defaultValue: 'Кыргызстан' }),
            city: t('contacts.partners.list.0.city', { defaultValue: 'Бишкек' }),
            description: t('contacts.partners.list.0.description', { defaultValue: 'Ведущее медицинское учреждение страны' }),
            website: 'https://hospital.kg',
            email: 'info@hospital.kg',
            phone: '+996 (312) 111-111',
            address: t('contacts.partners.list.0.address', { defaultValue: 'г. Бишкек, ул. Медицинская, 1' }),
            logo: '/api/placeholder/100/100',
            coordinates: [42.8746, 74.5698],
            established: '1995',
            cooperation_since: '2010',
            cooperation: [
              t('contacts.partners.list.0.cooperation.0', { defaultValue: 'Медицинские исследования' }),
              t('contacts.partners.list.0.cooperation.1', { defaultValue: 'Обучение специалистов' }),
              t('contacts.partners.list.0.cooperation.2', { defaultValue: 'Клинические испытания' })
            ],
            contact: {
              email: 'info@hospital.kg',
              phone: '+996 (312) 111-111'
            }
          },
          {
            id: 2,
            name: t('contacts.partners.list.1.name', { defaultValue: 'Кыргызский государственный университет' }),
            type: 'university',
            country: t('contacts.partners.list.1.country', { defaultValue: 'Кыргызстан' }),
            city: t('contacts.partners.list.1.city', { defaultValue: 'Бишкек' }),
            description: t('contacts.partners.list.1.description', { defaultValue: 'Крупнейший образовательный центр' }),
            website: 'https://university.kg',
            email: 'contact@university.kg',
            phone: '+996 (312) 222-222',
            address: t('contacts.partners.list.1.address', { defaultValue: 'г. Бишкек, ул. Университетская, 5' }),
            logo: '/api/placeholder/100/100',
            coordinates: [42.8846, 74.5798],
            established: '1951',
            cooperation_since: '2015',
            cooperation: [
              t('contacts.partners.list.1.cooperation.0', { defaultValue: 'Научные исследования' }),
              t('contacts.partners.list.1.cooperation.1', { defaultValue: 'Образовательные программы' }),
              t('contacts.partners.list.1.cooperation.2', { defaultValue: 'Стажировки' })
            ],
            contact: {
              email: 'contact@university.kg',
              phone: '+996 (312) 222-222'
            }
          },
          {
            id: 3,
            name: t('contacts.partners.list.2.name', { defaultValue: 'Научно-исследовательский институт' }),
            type: 'research',
            country: t('contacts.partners.list.2.country', { defaultValue: 'Кыргызстан' }),
            city: t('contacts.partners.list.2.city', { defaultValue: 'Бишкек' }),
            description: t('contacts.partners.list.2.description', { defaultValue: 'Передовой исследовательский центр' }),
            website: 'https://research.kg',
            email: 'research@institute.kg',
            phone: '+996 (312) 333-333',
            address: t('contacts.partners.list.2.address', { defaultValue: 'г. Бишкек, ул. Научная, 10' }),
            logo: '/api/placeholder/100/100',
            coordinates: [42.8646, 74.5598],
            established: '1980',
            cooperation_since: '2018',
            cooperation: [
              t('contacts.partners.list.2.cooperation.0', { defaultValue: 'Инновационные проекты' }),
              t('contacts.partners.list.2.cooperation.1', { defaultValue: 'Технологические разработки' })
            ],
            contact: {
              email: 'research@institute.kg',
              phone: '+996 (312) 333-333'
            }
          }
        ];
        
        setPartners(mockPartners);
      } catch (err) {
        setError(t('contacts.partners.error', { defaultValue: 'Ошибка загрузки данных партнеров' }));
        console.error('Error fetching partners:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [i18n.language, t]);

  const contactInfo = {
    address: {
      title: t('contacts.address.title'),
      value: t('contacts.address.value'),
      icon: '📍',
      description: t('contacts.address.description'),
      coordinates: [42.8746, 74.5698],
      details: t('contacts.address.details', { defaultValue: 'Центральный офис с конференц-залами и переговорными комнатами' })
    },
    phones: [
      {
        title: t('contacts.phones.general.title'),
        number: t('contacts.phones.general.number'),
        icon: '📞',
        description: t('contacts.phones.general.description'),
        department: t('contacts.phones.general.department', { defaultValue: 'Общий отдел' })
      },
      {
        title: t('contacts.phones.reception.title'),
        number: t('contacts.phones.reception.number'),
        icon: '🏢',
        description: t('contacts.phones.reception.description'),
        department: t('contacts.phones.reception.department', { defaultValue: 'Приемная' })
      },
      {
        title: t('contacts.phones.press.title'),
        number: t('contacts.phones.press.number'),
        icon: '📰',
        description: t('contacts.phones.press.description'),
        department: t('contacts.phones.press.department', { defaultValue: 'Пресс-служба' })
      },
      {
        title: t('contacts.phones.partnership.title'),
        number: t('contacts.phones.partnership.number'),
        icon: '🤝',
        description: t('contacts.phones.partnership.description'),
        department: t('contacts.phones.partnership.department', { defaultValue: 'Отдел партнерств' })
      }
    ],
    emails: [
      {
        title: t('contacts.emails.info.title'),
        address: t('contacts.emails.info.address'),
        icon: '📧',
        description: t('contacts.emails.info.description'),
        response: t('contacts.emails.info.response', { defaultValue: 'Ответ в течение 24 часов' })
      },
      {
        title: t('contacts.emails.press.title'),
        address: t('contacts.emails.press.address'),
        icon: '📰',
        description: t('contacts.emails.press.description'),
        response: t('contacts.emails.press.response', { defaultValue: 'Ответ в течение 2 часов' })
      },
      {
        title: t('contacts.emails.partnership.title'),
        address: t('contacts.emails.partnership.address'),
        icon: '🤝',
        description: t('contacts.emails.partnership.description'),
        response: t('contacts.emails.partnership.response', { defaultValue: 'Ответ в течение 48 часов' })
      }
    ],
    hours: {
      title: t('contacts.hours.title'),
      schedule: [
        { 
          days: t('contacts.hours.weekdays.days'), 
          time: t('contacts.hours.weekdays.time'),
          note: t('contacts.hours.weekdays.note', { defaultValue: 'Обед 13:00-14:00' })
        },
        { 
          days: t('contacts.hours.weekends.days'), 
          time: t('contacts.hours.weekends.time'),
          note: t('contacts.hours.weekends.note', { defaultValue: 'По предварительной записи' })
        },
        { 
          days: t('contacts.hours.holidays.days'), 
          time: t('contacts.hours.holidays.time'),
          note: t('contacts.hours.holidays.note', { defaultValue: 'Экстренные контакты доступны' })
        }
      ],
      icon: '🕒',
      notice: t('contacts.hours.notice', { defaultValue: 'Время указано для местного часового пояса' })
    },
    social: {
      title: t('contacts.social.title', { defaultValue: 'Мы в соцсетях' }),
      platforms: [
        {
          name: 'Facebook',
          icon: '📘',
          url: 'https://facebook.com/dordoi',
          handle: t('contacts.social.facebook.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'Instagram',
          icon: '📷',
          url: 'https://instagram.com/dordoi',
          handle: t('contacts.social.instagram.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'Telegram',
          icon: '📢',
          url: 'https://t.me/dordoi',
          handle: t('contacts.social.telegram.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'YouTube',
          icon: '🎥',
          url: 'https://youtube.com/dordoi',
          handle: t('contacts.social.youtube.handle', { defaultValue: 'Дордой' })
        }
      ]
    }
  };

  const mapLocations = [
    {
      id: 'office',
      title: t('contacts.map.locations.office.title'),
      description: t('contacts.map.locations.office.description'),
      coordinates: [42.8746, 74.5698],
      type: 'office',
      details: t('contacts.map.locations.office.details', { defaultValue: '5-этажное здание с парковкой и охраной' }),
      amenities: [
        t('contacts.map.locations.office.amenities.0', { defaultValue: 'Парковка' }),
        t('contacts.map.locations.office.amenities.1', { defaultValue: 'Конференц-залы' }),
        t('contacts.map.locations.office.amenities.2', { defaultValue: 'Кафе' })
      ]
    },
    {
      id: 'trade-complex',
      title: t('contacts.map.locations.tradeComplex.title'),
      description: t('contacts.map.locations.tradeComplex.description'),
      coordinates: [42.8846, 74.5798],
      type: 'commercial',
      details: t('contacts.map.locations.tradeComplex.details', { defaultValue: 'Крупнейший торговый комплекс в Центральной Азии' }),
      amenities: [
        t('contacts.map.locations.tradeComplex.amenities.0', { defaultValue: '5000+ магазинов' }),
        t('contacts.map.locations.tradeComplex.amenities.1', { defaultValue: 'Рестораны' }),
        t('contacts.map.locations.tradeComplex.amenities.2', { defaultValue: 'Банки' })
      ]
    },
    {
      id: 'warehouse',
      title: t('contacts.map.locations.warehouse.title'),
      description: t('contacts.map.locations.warehouse.description'),
      coordinates: [42.8646, 74.5598],
      type: 'storage',
      details: t('contacts.map.locations.warehouse.details', { defaultValue: 'Современный складской комплекс с климат-контролем' }),
      amenities: [
        t('contacts.map.locations.warehouse.amenities.0', { defaultValue: 'Климат-контроль' }),
        t('contacts.map.locations.warehouse.amenities.1', { defaultValue: 'Охрана 24/7' }),
        t('contacts.map.locations.warehouse.amenities.2', { defaultValue: 'Погрузочные рампы' })
      ]
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
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

  const getTypeBadgeColor = (type) => {
    const colors = {
      clinical: 'bg-red-100 text-red-800 border-red-200',
      university: 'bg-blue-100 text-blue-800 border-blue-200',
      organization: 'bg-green-100 text-green-800 border-green-200',
      business: 'bg-purple-100 text-purple-800 border-purple-200',
      academic: 'bg-gray-100 text-gray-800 border-gray-200',
      research: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      medical: 'bg-red-100 text-red-800 border-red-200',
      educational: 'bg-blue-100 text-blue-800 border-blue-200',
      corporate: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTypeLabel = (type) => {
    const typeLabels = {
      'clinical': t('contacts.partners.types.clinical', { defaultValue: 'Клиническая база' }),
      'university': t('contacts.partners.types.university', { defaultValue: 'Университет' }),
      'organization': t('contacts.partners.types.organization', { defaultValue: 'Организация' }),
      'business': t('contacts.partners.types.business', { defaultValue: 'Бизнес-партнер' }),
      'academic': t('contacts.partners.types.academic', { defaultValue: 'Академический партнер' }),
      'research': t('contacts.partners.types.research', { defaultValue: 'Исследовательский центр' }),
      'medical': t('contacts.partners.types.medical', { defaultValue: 'Медицинское учреждение' }),
      'educational': t('contacts.partners.types.educational', { defaultValue: 'Образовательное учреждение' }),
      'corporate': t('contacts.partners.types.corporate', { defaultValue: 'Корпоративный партнер' })
    };
    return typeLabels[type] || t('contacts.partners.types.general', { defaultValue: 'Партнер' });
  };

  const partnerTypes = [
    { value: 'all', label: t('contacts.partners.filters.all', { defaultValue: 'Все партнеры' }), icon: '🌐' },
    { value: 'clinical', label: t('contacts.partners.filters.clinical', { defaultValue: 'Клинические' }), icon: '🏥' },
    { value: 'university', label: t('contacts.partners.filters.university', { defaultValue: 'Университеты' }), icon: '🎓' },
    { value: 'research', label: t('contacts.partners.filters.research', { defaultValue: 'Исследования' }), icon: '🔬' },
    { value: 'business', label: t('contacts.partners.filters.business', { defaultValue: 'Бизнес' }), icon: '💼' }
  ];

  const filteredPartners = partners.filter(partner => {
    const matchesFilter = activeFilter === 'all' || partner.type === activeFilter;
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openPartnerModal = (partner) => {
    setSelectedPartner(partner);
  };

  const openLocationModal = (location) => {
    setSelectedLocation(location);
  };

  const closeModal = () => {
    setSelectedPartner(null);
    setSelectedLocation(null);
  };

  const handleContactClick = (type, value) => {
    if (type === 'phone') {
      window.open(`tel:${value}`);
    } else if (type === 'email') {
      window.open(`mailto:${value}`);
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Улучшенный анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"
        />
      </div>

      {/* Декоративные сетки */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#000_1px,transparent_1px)] bg-[size:64px_64px]"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 mb-6 shadow-sm"
          >
            <span className="text-blue-600 text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('contacts.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
          >
            {t('contacts.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t('contacts.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full mx-auto mb-8 shadow-lg"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('contacts.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Левая колонка - Контактная информация */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Адрес */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              whileHover="hover"
              onMouseEnter={() => setActiveContact('address')}
              onMouseLeave={() => setActiveContact(null)}
              onClick={() => openLocationModal(mapLocations[0])}
            >
              <div className="flex items-start space-x-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {contactInfo.address.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {contactInfo.address.title}
                  </h3>
                  <p className="text-slate-700 text-lg leading-relaxed mb-4">
                    {contactInfo.address.value}
                  </p>
                  <p className="text-slate-600 mb-6">
                    {contactInfo.address.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      className="inline-flex items-center space-x-3 bg-blue-50 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-colors duration-300 border border-blue-200/60"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(contactInfo.address.value, 'address');
                      }}
                    >
                      <span>{copiedField === 'address' ? t('contacts.copied') : t('contacts.copyAddress')}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </motion.button>

                    <motion.button
                      className="inline-flex items-center space-x-3 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span>{t('contacts.viewOnMap', { defaultValue: 'На карте' })}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Телефоны */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">📞</span>
                {t('contacts.phones.title')}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {contactInfo.phones.map((phone, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors duration-300 group/phone cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    onMouseEnter={() => setActiveContact(`phone-${index}`)}
                    onMouseLeave={() => setActiveContact(null)}
                    onClick={() => handleContactClick('phone', phone.number)}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-lg group-hover/phone:bg-green-500 transition-colors duration-300 shadow-sm">
                      <span className="group-hover/phone:text-white transition-colors duration-300">
                        {phone.icon}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 text-base mb-2">
                        {phone.title}
                      </h4>
                      <div className="flex items-center space-x-3 mb-2">
                        <a 
                          href={`tel:${phone.number}`}
                          className="text-slate-800 hover:text-green-600 transition-colors duration-300 text-lg font-semibold"
                        >
                          {phone.number}
                        </a>
                        <motion.button
                          className="text-slate-400 hover:text-green-600 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(phone.number, `phone-${index}`);
                          }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </motion.button>
                      </div>
                      <p className="text-slate-600 text-sm mb-1">
                        {phone.description}
                      </p>
                      <p className="text-slate-500 text-xs">
                        {phone.department}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">📧</span>
                {t('contacts.emails.title')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.emails.map((email, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50/80 hover:bg-slate-100/80 transition-colors duration-300 group/email cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    onMouseEnter={() => setActiveContact(`email-${index}`)}
                    onMouseLeave={() => setActiveContact(null)}
                    onClick={() => handleContactClick('email', email.address)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-lg group-hover/email:bg-purple-500 transition-colors duration-300 shadow-sm">
                        <span className="group-hover/email:text-white transition-colors duration-300">
                          {email.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-base mb-1">
                          {email.title}
                        </h4>
                        <a 
                          href={`mailto:${email.address}`}
                          className="text-slate-700 hover:text-purple-600 transition-colors duration-300 text-base"
                        >
                          {email.address}
                        </a>
                        <p className="text-slate-500 text-sm mt-1">
                          {email.response}
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      className="text-slate-400 hover:text-purple-600 transition-colors duration-300 p-2 rounded-lg hover:bg-purple-50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(email.address, `email-${index}`);
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-6">
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {contactInfo.hours.icon}
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {contactInfo.hours.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.hours.schedule.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-b-0">
                        <div>
                          <span className="text-slate-800 font-semibold text-base block">
                            {schedule.days}
                          </span>
                          <span className="text-slate-500 text-sm">
                            {schedule.note}
                          </span>
                        </div>
                        <span className="text-slate-700 font-bold text-base bg-amber-50 px-3 py-1 rounded-lg">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-500 text-sm mt-4">
                    {contactInfo.hours.notice}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Социальные сети */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {contactInfo.social.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {contactInfo.social.platforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-2xl bg-slate-50/80 hover:bg-blue-50 transition-all duration-300 group/social text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-3xl mb-2 group-hover/social:scale-110 transition-transform duration-300">
                      {platform.icon}
                    </div>
                    <div className="text-slate-700 font-semibold text-sm mb-1">
                      {platform.name}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {platform.handle}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Правая колонка - Карта */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Переключение между картами и фильтры */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/60 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="flex space-x-2 flex-1">
                  <button
                    onClick={() => setMapType('locations')}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                      mapType === 'locations'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>📍</span>
                    <span>{t('contacts.map.tabs.locations', { defaultValue: 'Наши локации' })}</span>
                  </button>
                  <button
                    onClick={() => setMapType('partners')}
                    className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 ${
                      mapType === 'partners'
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span>🤝</span>
                    <span>{t('contacts.map.tabs.partners', { defaultValue: 'Партнеры' })}</span>
                  </button>
                </div>
              </div>

              {/* Фильтры для партнеров */}
              {mapType === 'partners' && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {partnerTypes.map((type) => (
                      <motion.button
                        key={type.value}
                        onClick={() => setActiveFilter(type.value)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                          activeFilter === type.value
                            ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{type.icon}</span>
                        <span className="text-sm">{type.label}</span>
                      </motion.button>
                    ))}
                  </div>

                  {/* Поиск */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t('contacts.partners.search.placeholder', { defaultValue: 'Поиск партнеров...' })}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
                      🔍
                    </div>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors duration-300"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Интерактивная карта */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {mapType === 'locations' 
                  ? t('contacts.map.title') 
                  : t('contacts.map.partnersTitle', { defaultValue: 'Партнеры на карте' })
                }
              </h3>
              
              <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 min-h-[500px] shadow-inner">
                {loading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 backdrop-blur-sm z-10">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                      />
                      <p className="text-slate-600 font-medium">
                        {t('contacts.map.loading', { defaultValue: 'Загрузка карты...' })}
                      </p>
                    </div>
                  </div>
                ) : error ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 backdrop-blur-sm z-10">
                    <div className="text-center">
                      <div className="text-4xl mb-4">⚠️</div>
                      <p className="text-slate-600 font-medium mb-4">{error}</p>
                      <button 
                        onClick={() => window.location.reload()}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                      >
                        {t('contacts.map.retry', { defaultValue: 'Попробовать снова' })}
                      </button>
                    </div>
                  </div>
                ) : (
                  <MapContainer
                    center={mapType === 'locations' ? [42.8746, 74.5698] : [42.8746, 74.5698]}
                    zoom={mapType === 'locations' ? 12 : 10}
                    style={{ height: '500px', width: '100%' }}
                    className="z-0 rounded-xl"
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
                        eventHandlers={{
                          click: () => openLocationModal(location),
                        }}
                      >
                        <Popup className="custom-popup">
                          <div className="p-4 min-w-[280px]">
                            <h4 className="font-bold text-slate-900 text-lg mb-2">
                              {location.title}
                            </h4>
                            <p className="text-slate-600 text-sm mb-3">
                              {location.description}
                            </p>
                            <div className="space-y-2 mb-4">
                              <div className="text-xs font-semibold text-slate-700">
                                {t('contacts.map.amenities', { defaultValue: 'Удобства' })}:
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {location.amenities.map((amenity, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                                  >
                                    {amenity}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <button
                                onClick={() => window.open(`https://maps.google.com/?q=${location.coordinates[0]},${location.coordinates[1]}`, '_blank')}
                                className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                              >
                                {t('contacts.map.buttons.directions')}
                              </button>
                              <button
                                onClick={() => openLocationModal(location)}
                                className="flex-1 border border-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors duration-300"
                              >
                                {t('contacts.map.buttons.details', { defaultValue: 'Подробнее' })}
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}

                    {/* Партнеры */}
                    {mapType === 'partners' && filteredPartners.map((partner) => (
                      <Marker
                        key={partner.id}
                        position={partner.coordinates}
                        icon={createCustomMarker(partner.type)}
                        eventHandlers={{
                          click: () => openPartnerModal(partner),
                        }}
                      >
                        <Popup className="custom-popup">
                          <div className="p-4 min-w-[300px]">
                            <div className="flex items-start mb-3">
                              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                                <span className="text-2xl">
                                  {partner.type === 'clinical' ? '🏥' :
                                   partner.type === 'university' ? '🎓' :
                                   partner.type === 'research' ? '🔬' : '💼'}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-bold text-gray-900 text-base mb-1">
                                  {partner.name}
                                </h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(partner.type)} border`}>
                                  {getTypeLabel(partner.type)}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center text-sm text-gray-600 mb-3">
                              <span className="mr-2">📍</span>
                              <span>{partner.city}, {partner.country}</span>
                            </div>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {partner.description}
                            </p>

                            {partner.cooperation && partner.cooperation.length > 0 && (
                              <div className="mb-4">
                                <div className="text-xs font-semibold text-gray-900 mb-2">
                                  {t('contacts.partners.cooperation', { defaultValue: 'Сотрудничество' })}:
                                </div>
                                <div className="flex flex-wrap gap-1">
                                  {partner.cooperation.slice(0, 3).map((area, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                    >
                                      {area}
                                    </span>
                                  ))}
                                  {partner.cooperation.length > 3 && (
                                    <span className="text-xs text-gray-500 px-2 py-1">
                                      +{partner.cooperation.length - 3}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}

                            <div className="flex space-x-2">
                              {partner.website && (
                                <a
                                  href={partner.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 text-center"
                                >
                                  {t('contacts.partners.website', { defaultValue: 'Сайт' })}
                                </a>
                              )}
                              <button
                                onClick={() => openPartnerModal(partner)}
                                className="flex-1 border border-slate-300 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors duration-300"
                              >
                                {t('contacts.partners.viewDetails', { defaultValue: 'Подробнее' })}
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}

                {/* Легенда карты */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-4 max-w-xs">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">🗺️</span>
                    {t('contacts.map.legend', { defaultValue: 'Легенда' })}
                  </h4>
                  <div className="space-y-3">
                    {mapType === 'locations' ? (
                      <>
                        {mapLocations.map((location) => (
                          <div key={location.id} className="flex items-center space-x-3 text-sm">
                            <div 
                              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                              style={{
                                backgroundColor: 
                                  location.type === 'office' ? '#dc2626' :
                                  location.type === 'storage' ? '#059669' : '#7c3aed'
                              }}
                            ></div>
                            <span className="text-slate-700 flex-1">{location.title}</span>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {partnerTypes.slice(1).map((type) => (
                          <div key={type.value} className="flex items-center space-x-3 text-sm">
                            <div
                              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                              style={{
                                backgroundColor: 
                                  type.value === 'clinical' ? '#dc2626' :
                                  type.value === 'university' ? '#2563eb' :
                                  type.value === 'research' ? '#16a34a' :
                                  type.value === 'business' ? '#9333ea' : '#6b7280'
                              }}
                            ></div>
                            <span className="text-slate-700 flex-1">{type.label}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Статистика под картой */}
              <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {mapType === 'locations' ? mapLocations.length : filteredPartners.length}
                  </div>
                  <div className="text-sm text-blue-700 font-medium">
                    {mapType === 'locations' 
                      ? t('contacts.map.stats.locations', { defaultValue: 'Локации' })
                      : t('contacts.map.stats.partners', { defaultValue: 'Партнеров' })
                    }
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {mapType === 'locations' ? '3' : partnerTypes.length - 1}
                  </div>
                  <div className="text-sm text-green-700 font-medium">
                    {mapType === 'locations'
                      ? t('contacts.map.stats.types', { defaultValue: 'Типа объектов' })
                      : t('contacts.map.stats.categories', { defaultValue: 'Категории' })
                    }
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {mapType === 'locations' ? '24/7' : '15+'}
                  </div>
                  <div className="text-sm text-purple-700 font-medium">
                    {mapType === 'locations'
                      ? t('contacts.map.stats.availability', { defaultValue: 'Доступность' })
                      : t('contacts.map.stats.experience', { defaultValue: 'Лет сотрудничества' })
                    }
                  </div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {mapType === 'locations' ? '100%' : '98%'}
                  </div>
                  <div className="text-sm text-amber-700 font-medium">
                    {mapType === 'locations'
                      ? t('contacts.map.stats.coverage', { defaultValue: 'Охват' })
                      : t('contacts.map.stats.satisfaction', { defaultValue: 'Удовлетворенность' })
                    }
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Дополнительная информация */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-200/60 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {t('contacts.additionalInfo.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🚗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">
                      {t('contacts.additionalInfo.parking.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('contacts.additionalInfo.parking.description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.parking.tags.0', { defaultValue: 'Бесплатная' })}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.parking.tags.1', { defaultValue: 'Охраняемая' })}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.parking.tags.2', { defaultValue: '200+ мест' })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">🚌</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">
                      {t('contacts.additionalInfo.transport.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('contacts.additionalInfo.transport.description')}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {t('contacts.additionalInfo.transport.routes.0', { defaultValue: 'Автобус №5' })}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {t('contacts.additionalInfo.transport.routes.1', { defaultValue: 'Автобус №12' })}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {t('contacts.additionalInfo.transport.routes.2', { defaultValue: 'Автобус №25' })}
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {t('contacts.additionalInfo.transport.routes.3', { defaultValue: 'Автобус №35' })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">♿</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg mb-2">
                      {t('contacts.additionalInfo.accessibility.title')}
                    </h4>
                    <p className="text-slate-600">
                      {t('contacts.additionalInfo.accessibility.description')}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.accessibility.features.0', { defaultValue: 'Пандусы' })}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.accessibility.features.1', { defaultValue: 'Лифты' })}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                        {t('contacts.additionalInfo.accessibility.features.2', { defaultValue: 'Спецпарковки' })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Модальное окно партнера */}
        <AnimatePresence>
          {selectedPartner && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-8">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                      <span className="text-4xl">
                        {selectedPartner.type === 'clinical' ? '🏥' :
                         selectedPartner.type === 'university' ? '🎓' :
                         selectedPartner.type === 'research' ? '🔬' : '💼'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedPartner.name}</h3>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeBadgeColor(selectedPartner.type)} border`}>
                          {getTypeLabel(selectedPartner.type)}
                        </span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          {selectedPartner.city}, {selectedPartner.country}
                        </span>
                        {selectedPartner.established && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {t('contacts.partners.established', { defaultValue: 'Основан' })}: {selectedPartner.established}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedPartner.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        {t('contacts.partners.contactInfo', { defaultValue: 'Контактная информация' })}
                      </h4>
                      <div className="space-y-4">
                        {selectedPartner.contact.email && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                              📧
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{t('contacts.partners.email', { defaultValue: 'Email' })}</div>
                              <a href={`mailto:${selectedPartner.contact.email}`} className="text-slate-700 hover:text-blue-600 font-medium">
                                {selectedPartner.contact.email}
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedPartner.contact.phone && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
                              📞
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{t('contacts.partners.phone', { defaultValue: 'Телефон' })}</div>
                              <a href={`tel:${selectedPartner.contact.phone}`} className="text-slate-700 hover:text-green-600 font-medium">
                                {selectedPartner.contact.phone}
                              </a>
                            </div>
                          </div>
                        )}
                        {selectedPartner.address && (
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                              📍
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{t('contacts.partners.address', { defaultValue: 'Адрес' })}</div>
                              <div className="text-slate-700 font-medium">{selectedPartner.address}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        {t('contacts.partners.cooperation', { defaultValue: 'Сотрудничество' })}
                      </h4>
                      {selectedPartner.cooperation && selectedPartner.cooperation.length > 0 && (
                        <div className="space-y-2">
                          {selectedPartner.cooperation.map((area, index) => (
                            <div key={index} className="flex items-center text-slate-600">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {area}
                            </div>
                          ))}
                        </div>
                      )}
                      {selectedPartner.cooperation_since && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                          <div className="text-sm text-blue-700">
                            {t('contacts.partners.cooperationSince', { defaultValue: 'Сотрудничаем с' })} {selectedPartner.cooperation_since}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedPartner.website && (
                      <motion.a
                        href={selectedPartner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 text-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {t('contacts.partners.visitWebsite', { defaultValue: 'Посетить сайт' })}
                      </motion.a>
                    )}
                    <motion.button
                      className="flex-1 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const message = t('contacts.partners.shareMessage', { 
                          defaultValue: 'Посмотрите на нашего партнера: {name}' 
                        }).replace('{name}', selectedPartner.name);
                        navigator.share?.({
                          title: selectedPartner.name,
                          text: message,
                          url: selectedPartner.website || window.location.href
                        }).catch(() => {
                          copyToClipboard(selectedPartner.website || window.location.href, 'share');
                        });
                      }}
                    >
                      {t('contacts.partners.share', { defaultValue: 'Поделиться' })}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Модальное окно локации */}
        <AnimatePresence>
          {selectedLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative p-8">
                  <button
                    onClick={closeModal}
                    className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <div className="flex items-start mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg">
                      <span className="text-4xl text-white">
                        {selectedLocation.type === 'office' ? '🏢' :
                         selectedLocation.type === 'storage' ? '🏭' : '🏪'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedLocation.title}</h3>
                      <p className="text-slate-600 text-lg">{selectedLocation.description}</p>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none mb-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {selectedLocation.details}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        {t('contacts.map.amenities', { defaultValue: 'Удобства' })}
                      </h4>
                      <div className="space-y-3">
                        {selectedLocation.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {amenity}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-4">
                        {t('contacts.map.locationDetails', { defaultValue: 'Детали локации' })}
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-600">{t('contacts.map.coordinates', { defaultValue: 'Координаты' })}:</span>
                          <span className="font-medium">{selectedLocation.coordinates[0].toFixed(4)}, {selectedLocation.coordinates[1].toFixed(4)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">{t('contacts.map.type', { defaultValue: 'Тип объекта' })}:</span>
                          <span className="font-medium">
                            {selectedLocation.type === 'office' ? t('contacts.map.types.office', { defaultValue: 'Офис' }) :
                             selectedLocation.type === 'storage' ? t('contacts.map.types.warehouse', { defaultValue: 'Склад' }) :
                             t('contacts.map.types.commercial', { defaultValue: 'Торговый комплекс' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(`https://maps.google.com/?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}`, '_blank')}
                    >
                      {t('contacts.map.buttons.getDirections', { defaultValue: 'Проложить маршрут' })}
                    </motion.button>
                    <motion.button
                      className="flex-1 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const message = t('contacts.map.shareLocation', { 
                          defaultValue: 'Посмотрите нашу локацию: {name} по адресу: {address}' 
                        }).replace('{name}', selectedLocation.title).replace('{address}', contactInfo.address.value);
                        navigator.share?.({
                          title: selectedLocation.title,
                          text: message,
                          url: window.location.href
                        }).catch(() => {
                          copyToClipboard(`${selectedLocation.title} - ${contactInfo.address.value}`, 'location');
                        });
                      }}
                    >
                      {t('contacts.map.buttons.share', { defaultValue: 'Поделиться' })}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Уведомление о копировании */}
        <AnimatePresence>
          {copiedField && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.8 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center space-x-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-6 h-6 bg-white rounded-full flex items-center justify-center"
              >
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="font-semibold">{t('contacts.copiedNotification')}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactsAddress;