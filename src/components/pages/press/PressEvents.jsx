import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PressEvents = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = {
    upcoming: [
      {
        id: 1,
        title: t('pressEvents.events.upcoming.0.title'),
        date: '2024-03-15',
        time: '10:00',
        location: t('pressEvents.events.upcoming.0.location'),
        description: t('pressEvents.events.upcoming.0.description'),
        type: 'conference',
        image: '/images/event1.jpg',
        program: [
          t('pressEvents.events.upcoming.0.program.0'),
          t('pressEvents.events.upcoming.0.program.1'),
          t('pressEvents.events.upcoming.0.program.2')
        ],
        partners: [
          { name: t('pressEvents.partners.0'), logo: '/logos/partner1.png' },
          { name: t('pressEvents.partners.1'), logo: '/logos/partner2.png' },
          { name: t('pressEvents.partners.2'), logo: '/logos/partner3.png' }
        ],
        registrationUrl: '#register'
      },
      {
        id: 2,
        title: t('pressEvents.events.upcoming.1.title'),
        date: '2024-03-20',
        time: '14:00',
        location: t('pressEvents.events.upcoming.1.location'),
        description: t('pressEvents.events.upcoming.1.description'),
        type: 'workshop',
        image: '/images/event2.jpg',
        program: [
          t('pressEvents.events.upcoming.1.program.0'),
          t('pressEvents.events.upcoming.1.program.1'),
          t('pressEvents.events.upcoming.1.program.2')
        ],
        partners: [
          { name: t('pressEvents.partners.3'), logo: '/logos/partner4.png' },
          { name: t('pressEvents.partners.4'), logo: '/logos/partner5.png' }
        ],
        registrationUrl: '#register'
      },
      {
        id: 3,
        title: t('pressEvents.events.upcoming.2.title'),
        date: '2024-04-05',
        time: '09:00',
        location: t('pressEvents.events.upcoming.2.location'),
        description: t('pressEvents.events.upcoming.2.description'),
        type: 'exhibition',
        image: '/images/event3.jpg',
        program: [
          t('pressEvents.events.upcoming.2.program.0'),
          t('pressEvents.events.upcoming.2.program.1'),
          t('pressEvents.events.upcoming.2.program.2')
        ],
        partners: [
          { name: t('pressEvents.partners.5'), logo: '/logos/partner6.png' },
          { name: t('pressEvents.partners.6'), logo: '/logos/partner7.png' },
          { name: t('pressEvents.partners.7'), logo: '/logos/partner8.png' }
        ],
        registrationUrl: '#register'
      }
    ],
    archive: [
      {
        id: 4,
        title: t('pressEvents.events.archive.0.title'),
        date: '2024-01-20',
        time: '11:00',
        location: t('pressEvents.events.archive.0.location'),
        description: t('pressEvents.events.archive.0.description'),
        type: 'conference',
        image: '/images/event4.jpg',
        photos: ['/gallery/photo1.jpg', '/gallery/photo2.jpg', '/gallery/photo3.jpg'],
        partners: [
          { name: t('pressEvents.partners.0'), logo: '/logos/partner1.png' },
          { name: t('pressEvents.partners.2'), logo: '/logos/partner3.png' }
        ]
      },
      {
        id: 5,
        title: t('pressEvents.events.archive.1.title'),
        date: '2023-12-15',
        time: '15:00',
        location: t('pressEvents.events.archive.1.location'),
        description: t('pressEvents.events.archive.1.description'),
        type: 'seminar',
        image: '/images/event5.jpg',
        photos: ['/gallery/photo4.jpg', '/gallery/photo5.jpg'],
        partners: [
          { name: t('pressEvents.partners.1'), logo: '/logos/partner2.png' },
          { name: t('pressEvents.partners.4'), logo: '/logos/partner5.png' }
        ]
      },
      {
        id: 6,
        title: t('pressEvents.events.archive.2.title'),
        date: '2023-11-10',
        time: '10:00',
        location: t('pressEvents.events.archive.2.location'),
        description: t('pressEvents.events.archive.2.description'),
        type: 'forum',
        image: '/images/event6.jpg',
        photos: ['/gallery/photo6.jpg', '/gallery/photo7.jpg', '/gallery/photo8.jpg'],
        partners: [
          { name: t('pressEvents.partners.3'), logo: '/logos/partner4.png' },
          { name: t('pressEvents.partners.6'), logo: '/logos/partner7.png' }
        ]
      }
    ]
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getEventTypeColor = (type) => {
    const colors = {
      conference: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      workshop: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      exhibition: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      seminar: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
      forum: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' }
    };
    return colors[type] || colors.conference;
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Субтлный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-violet-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-pink-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200 rounded-full blur-2xl"
        />
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-200 mb-6"
          >
            <span className="text-violet-600 text-sm font-semibold">{t('pressEvents.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('pressEvents.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('pressEvents.subtitle')}
          </motion.p>
        </motion.div>

        {/* Табы для переключения между предстоящими и архивными мероприятиями */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'upcoming'
                ? 'bg-violet-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('pressEvents.tabs.upcoming')}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('archive')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'archive'
                ? 'bg-violet-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('pressEvents.tabs.archive')}
          </motion.button>
        </motion.div>

        {/* Сетка мероприятий */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {events[activeTab].map((event) => {
            const typeColors = getEventTypeColor(event.type);
            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedEvent(event)}
              >
                {/* Изображение мероприятия */}
                <div className="relative h-48 bg-gradient-to-br from-violet-50 to-pink-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-violet-600 font-semibold text-sm">{t('pressEvents.eventImage')}</p>
                    </div>
                  </div>
                  
                  {/* Бэдж типа мероприятия */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors.bg} ${typeColors.text} ${typeColors.border}`}>
                      {event.type === 'conference' && t('pressEvents.eventTypes.conference')}
                      {event.type === 'workshop' && t('pressEvents.eventTypes.workshop')}
                      {event.type === 'exhibition' && t('pressEvents.eventTypes.exhibition')}
                      {event.type === 'seminar' && t('pressEvents.eventTypes.seminar')}
                      {event.type === 'forum' && t('pressEvents.eventTypes.forum')}
                    </span>
                  </div>

                  {/* Дата мероприятия */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 text-center">
                    <div className="text-sm font-bold text-slate-900">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-xs text-slate-600">
                      {new Date(event.date).toLocaleDateString('ru-RU', { month: 'short' })}
                    </div>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-violet-600 transition-colors duration-300 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{event.location}</span>
                  </div>

                  <div className="flex items-center text-slate-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{event.time}</span>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">
                      {formatDate(event.date)}
                    </span>
                    <motion.div
                      className="text-violet-600 hover:text-violet-700 font-semibold text-sm flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      {activeTab === 'upcoming' ? t('pressEvents.actions.register') : t('pressEvents.actions.view')}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Кнопка загрузки еще */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            className="border-2 border-violet-600 text-violet-600 px-8 py-3 rounded-xl font-semibold hover:bg-violet-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('pressEvents.loadMore')}</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Модальное окно с деталями мероприятия */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Заголовок и кнопка закрытия */}
                <div className="flex justify-between items-start p-6 border-b border-slate-200">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {selectedEvent.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-slate-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(selectedEvent.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Контент модального окна */}
                <div className="p-6 space-y-6">
                  {/* Описание */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {t('pressEvents.modal.description')}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>

                  {/* Программа (только для предстоящих мероприятий) */}
                  {activeTab === 'upcoming' && selectedEvent.program && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('pressEvents.modal.program')}
                      </h4>
                      <ul className="space-y-2">
                        {selectedEvent.program.map((item, index) => (
                          <li key={index} className="flex items-start text-slate-600">
                            <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Партнеры */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {t('pressEvents.modal.partners')}
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedEvent.partners.map((partner, index) => (
                        <div key={index} className="flex items-center bg-slate-50 rounded-xl px-4 py-2">
                          <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center mr-2">
                            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{partner.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Фотографии (только для архивных мероприятий) */}
                  {activeTab === 'archive' && selectedEvent.photos && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('pressEvents.modal.photos')}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedEvent.photos.map((photo, index) => (
                          <div key={index} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Кнопка регистрации (только для предстоящих мероприятий) */}
                  {activeTab === 'upcoming' && (
                    <div className="flex justify-center pt-4">
                      <motion.button
                        className="bg-violet-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{t('pressEvents.modal.registerButton')}</span>
                      </motion.button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PressEvents;