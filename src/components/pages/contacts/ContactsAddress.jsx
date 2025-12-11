import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { BookIcon, ClockIcon, CameraIcon, PhoneIcon, EnvelopeIcon, MapIcon, BuildingIcon, PackageIcon, CarIcon, BusIcon } from '../../icons';
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
    clinical: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    university: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>',
    organization: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
    business: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4"></path></svg>',
    academic: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>',
    medical: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    educational: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>',
    research: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',
    corporate: '<svg class="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4"></path></svg>'
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
    office: '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    warehouse: '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
    'trade-complex': '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    headquarter: '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',
    storage: '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',
    commercial: '<svg class="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>'
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
  const [selectedLocation, setSelectedLocation] = useState(null);

  // SVG иконки для контактов
  const contactIcons = {
    address: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    phone: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    building: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    newspaper: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    handshake: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2.5M7 11.5a1.5 1.5 0 003 0m0 0h6.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5H14m0 0V8a1.5 1.5 0 003 0V5.5M10 5.5a1.5 1.5 0 10-3 0v2.5a1.5 1.5 0 003 0V5.5z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    announcement: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  };

  const contactInfo = {
    address: {
      title: t('contacts.address.title'),
      value: t('contacts.address.value'),
      icon: contactIcons.address,
      description: t('contacts.address.description'),
      coordinates: [42.8746, 74.5698],
      details: t('contacts.address.details', { defaultValue: 'Центральный офис с конференц-залами и переговорными комнатами' })
    },
    phones: [
      {
        title: t('contacts.phones.general.title'),
        number: t('contacts.phones.general.number'),
        icon: contactIcons.phone,
        description: t('contacts.phones.general.description'),
        department: t('contacts.phones.general.department', { defaultValue: 'Общий отдел' })
      },
      {
        title: t('contacts.phones.reception.title'),
        number: t('contacts.phones.reception.number'),
        icon: contactIcons.building,
        description: t('contacts.phones.reception.description'),
        department: t('contacts.phones.reception.department', { defaultValue: 'Приемная' })
      },
      {
        title: t('contacts.phones.press.title'),
        number: t('contacts.phones.press.number'),
        icon: contactIcons.newspaper,
        description: t('contacts.phones.press.description'),
        department: t('contacts.phones.press.department', { defaultValue: 'Пресс-служба' })
      },
      {
        title: t('contacts.phones.partnership.title'),
        number: t('contacts.phones.partnership.number'),
        icon: contactIcons.handshake,
        description: t('contacts.phones.partnership.description'),
        department: t('contacts.phones.partnership.department', { defaultValue: 'Отдел партнерств' })
      }
    ],
    emails: [
      {
        title: t('contacts.emails.info.title'),
        address: t('contacts.emails.info.address'),
        icon: contactIcons.email,
        description: t('contacts.emails.info.description'),
        response: t('contacts.emails.info.response', { defaultValue: 'Ответ в течение 24 часов' })
      },
      {
        title: t('contacts.emails.press.title'),
        address: t('contacts.emails.press.address'),
        icon: contactIcons.newspaper,
        description: t('contacts.emails.press.description'),
        response: t('contacts.emails.press.response', { defaultValue: 'Ответ в течение 2 часов' })
      },
      {
        title: t('contacts.emails.partnership.title'),
        address: t('contacts.emails.partnership.address'),
        icon: contactIcons.handshake,
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
      icon: <ClockIcon className="w-5 h-5" />,
      notice: t('contacts.hours.notice', { defaultValue: 'Время указано для местного часового пояса' })
    },
    social: {
      title: t('contacts.social.title', { defaultValue: 'Мы в соцсетях' }),
      platforms: [
        {
          name: 'Facebook',
          icon: <BookIcon className="w-5 h-5" />,
          url: 'https://facebook.com/dordoi',
          handle: t('contacts.social.facebook.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'Instagram',
          icon: <CameraIcon className="w-5 h-5" />,
          url: 'https://instagram.com/dordoi',
          handle: t('contacts.social.instagram.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'Telegram',
          icon: <PhoneIcon className="w-5 h-5" />,
          url: 'https://t.me/dordoi',
          handle: t('contacts.social.telegram.handle', { defaultValue: '@dordoi' })
        },
        {
          name: 'YouTube',
          icon: <CameraIcon className="w-5 h-5" />,
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

  const openLocationModal = (location) => {
    setSelectedLocation(location);
  };

  const closeModal = () => {
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

        {/* Интерактивная карта - Full Width */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          {/* Большая карта */}
          <motion.div
            variants={cardVariants}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {t('contacts.map.title')}
            </h3>
            
            <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 min-h-[600px] shadow-inner">
              <MapContainer
                center={[42.8746, 74.5698]}
                zoom={12}
                style={{ height: '600px', width: '100%' }}
                className="z-0 rounded-xl"
              >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  {/* Наши локации */}
                  {mapLocations.map((location) => (
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
                </MapContainer>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {/* Левая колонка - Контактная информация */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >

            {/* Телефоны */}
            <motion.div
              variants={cardVariants}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
                  <PhoneIcon className="w-5 h-5" />
                </span>
                {t('contacts.phones.title')}
              </h3>
              
              <div className="flex-grow grid md:grid-cols-2 gap-6">
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
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-3">
                  <EnvelopeIcon className="w-5 h-5" />
                </span>
                {t('contacts.emails.title')}
              </h3>
              
              <div className="flex-grow space-y-4">
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
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group min-h-[400px] flex flex-col"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start space-x-6 flex-grow">
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
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[400px] flex flex-col"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {contactInfo.social.title}
              </h3>
              
              <div className="flex-grow grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        </div>

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
                      {selectedLocation.type === 'office' ? <BuildingIcon className="w-10 h-10 text-white" /> :
                       selectedLocation.type === 'storage' ? <PackageIcon className="w-10 h-10 text-white" /> :
                       <BuildingIcon className="w-10 h-10 text-white" />}
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