import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersConferences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedConference, setSelectedConference] = useState(null);

  const conferences = {
    upcoming: [
      {
        id: 1,
        title: t('partnersConferences.conferences.upcoming.0.title'),
        date: '2024-04-15',
        time: '09:00',
        location: t('partnersConferences.conferences.upcoming.0.location'),
        theme: t('partnersConferences.conferences.upcoming.0.theme'),
        description: t('partnersConferences.conferences.upcoming.0.description'),
        type: 'international',
        partners: [
          { name: t('partnersConferences.partners.0'), type: 'organizer' },
          { name: t('partnersConferences.partners.1'), type: 'partner' },
          { name: t('partnersConferences.partners.2'), type: 'sponsor' }
        ],
        speakers: [
          t('partnersConferences.conferences.upcoming.0.speakers.0'),
          t('partnersConferences.conferences.upcoming.0.speakers.1'),
          t('partnersConferences.conferences.upcoming.0.speakers.2')
        ],
        program: [
          t('partnersConferences.conferences.upcoming.0.program.0'),
          t('partnersConferences.conferences.upcoming.0.program.1'),
          t('partnersConferences.conferences.upcoming.0.program.2')
        ],
        registrationUrl: '#register'
      },
      {
        id: 2,
        title: t('partnersConferences.conferences.upcoming.1.title'),
        date: '2024-05-20',
        time: '10:00',
        location: t('partnersConferences.conferences.upcoming.1.location'),
        theme: t('partnersConferences.conferences.upcoming.1.theme'),
        description: t('partnersConferences.conferences.upcoming.1.description'),
        type: 'regional',
        partners: [
          { name: t('partnersConferences.partners.3'), type: 'organizer' },
          { name: t('partnersConferences.partners.4'), type: 'partner' }
        ],
        speakers: [
          t('partnersConferences.conferences.upcoming.1.speakers.0'),
          t('partnersConferences.conferences.upcoming.1.speakers.1')
        ],
        program: [
          t('partnersConferences.conferences.upcoming.1.program.0'),
          t('partnersConferences.conferences.upcoming.1.program.1'),
          t('partnersConferences.conferences.upcoming.1.program.2')
        ],
        registrationUrl: '#register'
      },
      {
        id: 3,
        title: t('partnersConferences.conferences.upcoming.2.title'),
        date: '2024-06-10',
        time: '14:00',
        location: t('partnersConferences.conferences.upcoming.2.location'),
        theme: t('partnersConferences.conferences.upcoming.2.theme'),
        description: t('partnersConferences.conferences.upcoming.2.description'),
        type: 'business',
        partners: [
          { name: t('partnersConferences.partners.5'), type: 'organizer' },
          { name: t('partnersConferences.partners.6'), type: 'partner' },
          { name: t('partnersConferences.partners.7'), type: 'sponsor' }
        ],
        speakers: [
          t('partnersConferences.conferences.upcoming.2.speakers.0'),
          t('partnersConferences.conferences.upcoming.2.speakers.1'),
          t('partnersConferences.conferences.upcoming.2.speakers.2')
        ],
        program: [
          t('partnersConferences.conferences.upcoming.2.program.0'),
          t('partnersConferences.conferences.upcoming.2.program.1'),
          t('partnersConferences.conferences.upcoming.2.program.2')
        ],
        registrationUrl: '#register'
      }
    ],
    archive: [
      {
        id: 4,
        title: t('partnersConferences.conferences.archive.0.title'),
        date: '2024-01-25',
        time: '11:00',
        location: t('partnersConferences.conferences.archive.0.location'),
        theme: t('partnersConferences.conferences.archive.0.theme'),
        description: t('partnersConferences.conferences.archive.0.description'),
        type: 'international',
        partners: [
          { name: t('partnersConferences.partners.0'), type: 'organizer' },
          { name: t('partnersConferences.partners.2'), type: 'partner' }
        ],
        speakers: [
          t('partnersConferences.conferences.archive.0.speakers.0'),
          t('partnersConferences.conferences.archive.0.speakers.1')
        ],
        photos: ['/gallery/conf1-1.jpg', '/gallery/conf1-2.jpg', '/gallery/conf1-3.jpg'],
        materials: ['/materials/program.pdf', '/materials/presentation.pdf']
      },
      {
        id: 5,
        title: t('partnersConferences.conferences.archive.1.title'),
        date: '2023-11-15',
        time: '09:30',
        location: t('partnersConferences.conferences.archive.1.location'),
        theme: t('partnersConferences.conferences.archive.1.theme'),
        description: t('partnersConferences.conferences.archive.1.description'),
        type: 'regional',
        partners: [
          { name: t('partnersConferences.partners.3'), type: 'organizer' },
          { name: t('partnersConferences.partners.4'), type: 'partner' }
        ],
        speakers: [
          t('partnersConferences.conferences.archive.1.speakers.0'),
          t('partnersConferences.conferences.archive.1.speakers.1'),
          t('partnersConferences.conferences.archive.1.speakers.2')
        ],
        photos: ['/gallery/conf2-1.jpg', '/gallery/conf2-2.jpg'],
        materials: ['/materials/report.pdf']
      },
      {
        id: 6,
        title: t('partnersConferences.conferences.archive.2.title'),
        date: '2023-09-08',
        time: '13:00',
        location: t('partnersConferences.conferences.archive.2.location'),
        theme: t('partnersConferences.conferences.archive.2.theme'),
        description: t('partnersConferences.conferences.archive.2.description'),
        type: 'business',
        partners: [
          { name: t('partnersConferences.partners.5'), type: 'organizer' },
          { name: t('partnersConferences.partners.6'), type: 'partner' }
        ],
        speakers: [
          t('partnersConferences.conferences.archive.2.speakers.0'),
          t('partnersConferences.conferences.archive.2.speakers.1')
        ],
        photos: ['/gallery/conf3-1.jpg', '/gallery/conf3-2.jpg', '/gallery/conf3-3.jpg'],
        materials: ['/materials/proceedings.pdf', '/materials/presentations.zip']
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

  const getConferenceTypeColor = (type) => {
    const colors = {
      international: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      regional: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      business: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' }
    };
    return colors[type] || colors.international;
  };

  const getPartnerTypeColor = (type) => {
    const colors = {
      organizer: { bg: 'bg-amber-100', text: 'text-amber-600' },
      partner: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
      sponsor: { bg: 'bg-violet-100', text: 'text-violet-600' }
    };
    return colors[type] || colors.partner;
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Субтлный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-sky-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-indigo-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-200 rounded-full blur-2xl"
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-200 mb-6"
          >
            <span className="text-sky-600 text-sm font-semibold">{t('partnersConferences.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('partnersConferences.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('partnersConferences.subtitle')}
          </motion.p>
        </motion.div>

        {/* Табы для переключения между предстоящими и архивными конференциями */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'upcoming'
                ? 'bg-sky-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('partnersConferences.tabs.upcoming')}
          </motion.button>
          <motion.button
            onClick={() => setActiveTab('archive')}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'archive'
                ? 'bg-sky-600 text-white shadow-lg'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('partnersConferences.tabs.archive')}
          </motion.button>
        </motion.div>

        {/* Сетка конференций */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {conferences[activeTab].map((conference) => {
            const typeColors = getConferenceTypeColor(conference.type);
            return (
              <motion.div
                key={conference.id}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedConference(conference)}
              >
                {/* Изображение конференции */}
                <div className="relative h-48 bg-gradient-to-br from-sky-50 to-indigo-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sky-600 font-semibold text-sm">{t('partnersConferences.conferenceImage')}</p>
                    </div>
                  </div>
                  
                  {/* Бэдж типа конференции */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors.bg} ${typeColors.text} ${typeColors.border}`}>
                      {conference.type === 'international' && t('partnersConferences.types.international')}
                      {conference.type === 'regional' && t('partnersConferences.types.regional')}
                      {conference.type === 'business' && t('partnersConferences.types.business')}
                    </span>
                  </div>

                  {/* Дата конференции */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 text-center">
                    <div className="text-sm font-bold text-slate-900">
                      {new Date(conference.date).getDate()}
                    </div>
                    <div className="text-xs text-slate-600">
                      {new Date(conference.date).toLocaleDateString('ru-RU', { month: 'short' })}
                    </div>
                  </div>
                </div>

                {/* Контент карточки */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                    {conference.title}
                  </h3>
                  
                  <div className="flex items-center text-slate-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="text-sm">{conference.location}</span>
                  </div>

                  <div className="flex items-center text-slate-600 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{conference.time}</span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{t('partnersConferences.theme')}</h4>
                    <p className="text-slate-600 text-sm line-clamp-2">{conference.theme}</p>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {conference.description}
                  </p>

                  {/* Партнеры */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">{t('partnersConferences.partnersTitle')}</h4>
                    <div className="flex flex-wrap gap-1">
                      {conference.partners.slice(0, 3).map((partner, index) => {
                        const partnerColors = getPartnerTypeColor(partner.type);
                        return (
                          <span 
                            key={index}
                            className={`inline-flex items-center px-2 py-1 rounded-lg text-xs ${partnerColors.bg} ${partnerColors.text}`}
                          >
                            {partner.name}
                          </span>
                        );
                      })}
                      {conference.partners.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs bg-slate-100 text-slate-600">
                          +{conference.partners.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">
                      {formatDate(conference.date)}
                    </span>
                    <motion.div
                      className="text-sky-600 hover:text-sky-700 font-semibold text-sm flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      {activeTab === 'upcoming' ? t('partnersConferences.actions.register') : t('partnersConferences.actions.view')}
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

        {/* CTA блок */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-sky-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {t('partnersConferences.cta.title')}
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('partnersConferences.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>{t('partnersConferences.cta.suggestTopic')}</span>
            </motion.button>
            <motion.button
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{t('partnersConferences.cta.becomeSpeaker')}</span>
            </motion.button>
            {activeTab === 'upcoming' && (
              <motion.button
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>{t('partnersConferences.cta.register')}</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Модальное окно с деталями конференции */}
      <AnimatePresence>
        {selectedConference && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedConference(null)}
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
                      {selectedConference.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-slate-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{formatDate(selectedConference.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{selectedConference.time}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{selectedConference.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedConference(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Контент модального окна */}
                <div className="p-6 space-y-6">
                  {/* Тема и описание */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {t('partnersConferences.modal.theme')}
                    </h4>
                    <p className="text-sky-600 font-medium mb-3">{selectedConference.theme}</p>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {t('partnersConferences.modal.description')}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedConference.description}
                    </p>
                  </div>

                  {/* Партнеры */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">
                      {t('partnersConferences.modal.partners')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedConference.partners.map((partner, index) => {
                        const partnerColors = getPartnerTypeColor(partner.type);
                        return (
                          <div key={index} className="flex items-center bg-slate-50 rounded-xl p-3">
                            <div className={`w-10 h-10 ${partnerColors.bg} rounded-lg flex items-center justify-center mr-3`}>
                              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div>
                              <span className="text-slate-700 font-medium">{partner.name}</span>
                              <span className={`block text-xs ${partnerColors.text} font-medium`}>
                                {partner.type === 'organizer' && t('partnersConferences.partnerTypes.organizer')}
                                {partner.type === 'partner' && t('partnersConferences.partnerTypes.partner')}
                                {partner.type === 'sponsor' && t('partnersConferences.partnerTypes.sponsor')}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Спикеры */}
                  {selectedConference.speakers && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('partnersConferences.modal.speakers')}
                      </h4>
                      <ul className="space-y-2">
                        {selectedConference.speakers.map((speaker, index) => (
                          <li key={index} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                            {speaker}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Программа (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && selectedConference.program && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('partnersConferences.modal.program')}
                      </h4>
                      <ul className="space-y-3">
                        {selectedConference.program.map((item, index) => (
                          <li key={index} className="flex items-start text-slate-600 bg-slate-50 rounded-lg p-3">
                            <span className="w-6 h-6 bg-sky-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Фотографии (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.photos && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('partnersConferences.modal.photos')}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedConference.photos.map((photo, index) => (
                          <div key={index} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Материалы (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.materials && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">
                        {t('partnersConferences.modal.materials')}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedConference.materials.map((material, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center bg-sky-50 text-sky-600 px-4 py-2 rounded-lg hover:bg-sky-100 transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t('partnersConferences.modal.download')} {index + 1}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Кнопка регистрации (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && (
                    <div className="flex justify-center pt-4">
                      <motion.button
                        className="bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-sky-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{t('partnersConferences.modal.registerButton')}</span>
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

export default PartnersConferences;