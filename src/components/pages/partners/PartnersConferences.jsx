import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersConferences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedConference, setSelectedConference] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [countdown, setCountdown] = useState({});

  const stats = [
    {
      value: t('partnersConferences.stats.conferences.value', { defaultValue: '50+' }),
      label: t('partnersConferences.stats.conferences.label', { defaultValue: 'Проведено конференций' }),
      icon: '🎯',
      description: t('partnersConferences.stats.conferences.description', { defaultValue: 'За последние 5 лет' })
    },
    {
      value: t('partnersConferences.stats.participants.value', { defaultValue: '10,000+' }),
      label: t('partnersConferences.stats.participants.label', { defaultValue: 'Участников' }),
      icon: '👥',
      description: t('partnersConferences.stats.participants.description', { defaultValue: 'Со всего мира' })
    },
    {
      value: t('partnersConferences.stats.countries.value', { defaultValue: '25+' }),
      label: t('partnersConferences.stats.countries.label', { defaultValue: 'Стран-участниц' }),
      icon: '🌍',
      description: t('partnersConferences.stats.countries.description', { defaultValue: 'Международное участие' })
    },
    {
      value: t('partnersConferences.stats.partnerships.value', { defaultValue: '100+' }),
      label: t('partnersConferences.stats.partnerships.label', { defaultValue: 'Партнерских соглашений' }),
      icon: '🤝',
      description: t('partnersConferences.stats.partnerships.description', { defaultValue: 'Заключено на мероприятиях' })
    }
  ];

  const filters = [
    { value: 'all', label: t('partnersConferences.filters.all', { defaultValue: 'Все конференции' }), icon: '🌐' },
    { value: 'international', label: t('partnersConferences.filters.international', { defaultValue: 'Международные' }), icon: '🌍' },
    { value: 'regional', label: t('partnersConferences.filters.regional', { defaultValue: 'Региональные' }), icon: '🗺️' },
    { value: 'business', label: t('partnersConferences.filters.business', { defaultValue: 'Бизнес' }), icon: '💼' }
  ];

  const testimonials = [
    {
      id: 1,
      name: t('partnersConferences.testimonials.0.name', { defaultValue: 'Алексей Петров' }),
      company: t('partnersConferences.testimonials.0.company', { defaultValue: 'Торговая компания "Восток"' }),
      role: t('partnersConferences.testimonials.0.role', { defaultValue: 'Генеральный директор' }),
      content: t('partnersConferences.testimonials.0.content', { defaultValue: 'Участие в конференции позволило нам найти новых партнеров из Турции и Китая. Очень профессиональная организация!' }),
      conference: t('partnersConferences.testimonials.0.conference', { defaultValue: 'Международный экономический форум 2023' }),
      rating: 5
    },
    {
      id: 2,
      name: t('partnersConferences.testimonials.1.name', { defaultValue: 'Мария Иванова' }),
      company: t('partnersConferences.testimonials.1.company', { defaultValue: 'Ассоциация экспортеров' }),
      role: t('partnersConferences.testimonials.1.role', { defaultValue: 'Президент' }),
      content: t('partnersConferences.testimonials.1.content', { defaultValue: 'Отличная платформа для установления деловых контактов. Особенно ценны B2B встречи с иностранными партнерами.' }),
      conference: t('partnersConferences.testimonials.1.conference', { defaultValue: 'Бизнес-диалог "Шелковый путь"' }),
      rating: 5
    }
  ];

  const conferences = {
    upcoming: [0, 1, 2].map(index => ({
      id: index + 1,
      title: t(`partnersConferences.conferences.upcoming.${index}.title`),
      date: ['2024-04-15', '2024-05-20', '2024-06-10'][index],
      time: ['09:00', '10:00', '14:00'][index],
      location: t(`partnersConferences.conferences.upcoming.${index}.location`),
      theme: t(`partnersConferences.conferences.upcoming.${index}.theme`),
      description: t(`partnersConferences.conferences.upcoming.${index}.description`),
      fullDescription: t(`partnersConferences.conferences.upcoming.${index}.fullDescription`, { defaultValue: '' }),
      type: ['international', 'regional', 'business'][index],
      partners: [
        { name: t(`partnersConferences.conferences.upcoming.${index}.partners.0.name`, { defaultValue: '' }), type: 'organizer' },
        { name: t(`partnersConferences.conferences.upcoming.${index}.partners.1.name`, { defaultValue: '' }), type: 'partner' },
        { name: t(`partnersConferences.conferences.upcoming.${index}.partners.2.name`, { defaultValue: '' }), type: 'sponsor' }
      ].filter(partner => partner.name),
      speakers: [
        t(`partnersConferences.conferences.upcoming.${index}.speakers.0`),
        t(`partnersConferences.conferences.upcoming.${index}.speakers.1`),
        t(`partnersConferences.conferences.upcoming.${index}.speakers.2`)
      ],
      program: [
        t(`partnersConferences.conferences.upcoming.${index}.program.0`),
        t(`partnersConferences.conferences.upcoming.${index}.program.1`),
        t(`partnersConferences.conferences.upcoming.${index}.program.2`)
      ],
      registrationUrl: '#register',
      participantsCount: t(`partnersConferences.conferences.upcoming.${index}.participantsCount`, { defaultValue: '300+' }),
      countriesCount: t(`partnersConferences.conferences.upcoming.${index}.countriesCount`, { defaultValue: '15+' }),
      price: t(`partnersConferences.conferences.upcoming.${index}.price`, { defaultValue: 'Бесплатно' }),
      language: t(`partnersConferences.conferences.upcoming.${index}.language`, { defaultValue: 'Русский, английский' }),
      format: t(`partnersConferences.conferences.upcoming.${index}.format`, { defaultValue: 'Офлайн + онлайн' }),
      benefits: [
        t(`partnersConferences.conferences.upcoming.${index}.benefits.0`, { defaultValue: '' }),
        t(`partnersConferences.conferences.upcoming.${index}.benefits.1`, { defaultValue: '' }),
        t(`partnersConferences.conferences.upcoming.${index}.benefits.2`, { defaultValue: '' })
      ].filter(benefit => benefit),
      targetAudience: [
        t(`partnersConferences.conferences.upcoming.${index}.targetAudience.0`, { defaultValue: '' }),
        t(`partnersConferences.conferences.upcoming.${index}.targetAudience.1`, { defaultValue: '' }),
        t(`partnersConferences.conferences.upcoming.${index}.targetAudience.2`, { defaultValue: '' })
      ].filter(audience => audience)
    })),
    archive: [0, 1, 2].map(index => ({
      id: index + 4,
      title: t(`partnersConferences.conferences.archive.${index}.title`),
      date: ['2024-01-25', '2023-11-15', '2023-09-08'][index],
      time: ['11:00', '09:30', '13:00'][index],
      location: t(`partnersConferences.conferences.archive.${index}.location`),
      theme: t(`partnersConferences.conferences.archive.${index}.theme`),
      description: t(`partnersConferences.conferences.archive.${index}.description`),
      fullDescription: t(`partnersConferences.conferences.archive.${index}.fullDescription`, { defaultValue: '' }),
      type: ['international', 'regional', 'business'][index],
      partners: [
        { name: t(`partnersConferences.conferences.archive.${index}.partners.0.name`, { defaultValue: '' }), type: 'organizer' },
        { name: t(`partnersConferences.conferences.archive.${index}.partners.1.name`, { defaultValue: '' }), type: 'partner' }
      ].filter(partner => partner.name),
      speakers: [
        t(`partnersConferences.conferences.archive.${index}.speakers.0`),
        t(`partnersConferences.conferences.archive.${index}.speakers.1`),
        t(`partnersConferences.conferences.archive.${index}.speakers.2`)
      ].filter(speaker => speaker),
      photos: ['/gallery/conf1-1.jpg', '/gallery/conf1-2.jpg', '/gallery/conf1-3.jpg'],
      materials: ['/materials/program.pdf', '/materials/presentation.pdf'],
      participantsCount: t(`partnersConferences.conferences.archive.${index}.participantsCount`, { defaultValue: '250+' }),
      countriesCount: t(`partnersConferences.conferences.archive.${index}.countriesCount`, { defaultValue: '12+' }),
      outcomes: [
        t(`partnersConferences.conferences.archive.${index}.outcomes.0`, { defaultValue: '' }),
        t(`partnersConferences.conferences.archive.${index}.outcomes.1`, { defaultValue: '' }),
        t(`partnersConferences.conferences.archive.${index}.outcomes.2`, { defaultValue: '' })
      ].filter(outcome => outcome),
      testimonials: [
        t(`partnersConferences.conferences.archive.${index}.testimonials.0`, { defaultValue: '' }),
        t(`partnersConferences.conferences.archive.${index}.testimonials.1`, { defaultValue: '' })
      ].filter(testimonial => testimonial)
    }))
  };

  // Countdown timer for upcoming conferences
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const countdownData = {};

      conferences.upcoming.forEach(conference => {
        const conferenceDate = new Date(conference.date + 'T' + conference.time).getTime();
        const distance = conferenceDate - now;

        if (distance > 0) {
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          countdownData[conference.id] = { days, hours, minutes, seconds };
        } else {
          countdownData[conference.id] = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });

      setCountdown(countdownData);
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

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
    hidden: { y: 40, opacity: 0 },
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
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
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
      international: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-cyan-500' },
      regional: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-500 to-emerald-500' },
      business: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-pink-500' }
    };
    return colors[type] || colors.international;
  };

  const getPartnerTypeColor = (type) => {
    const colors = {
      organizer: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' },
      partner: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
      sponsor: { bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' }
    };
    return colors[type] || colors.partner;
  };

  const filteredConferences = conferences[activeTab].filter(conference => {
    const matchesFilter = activeFilter === 'all' || conference.type === activeFilter;
    const matchesSearch = conference.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conference.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conference.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderCountdown = (conferenceId) => {
    const timer = countdown[conferenceId];
    if (!timer) return null;

    return (
      <div className="flex items-center justify-center space-x-4 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-2xl font-bold text-white">{timer.days}</div>
            <div className="text-xs text-white/80">{t('partnersConferences.countdown.days', { defaultValue: 'дней' })}</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-2xl font-bold text-white">{timer.hours}</div>
            <div className="text-xs text-white/80">{t('partnersConferences.countdown.hours', { defaultValue: 'часов' })}</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-2xl font-bold text-white">{timer.minutes}</div>
            <div className="text-xs text-white/80">{t('partnersConferences.countdown.minutes', { defaultValue: 'минут' })}</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-2xl font-bold text-white">{timer.seconds}</div>
            <div className="text-xs text-white/80">{t('partnersConferences.countdown.seconds', { defaultValue: 'секунд' })}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Улучшенный анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-300 to-teal-300 rounded-full blur-3xl"
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
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/50 mb-6 shadow-sm"
          >
            <span className="text-sky-600 text-sm font-semibold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              {t('partnersConferences.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent"
          >
            {t('partnersConferences.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 rounded-full mx-auto mb-8 shadow-lg"
          />

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('partnersConferences.subtitle')}
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500 group text-center"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.description}
              </div>
              <motion.div 
                className="w-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full mt-3 group-hover:w-full transition-all duration-1000 ease-out"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, delay: index * 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Улучшенные табы и фильтры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                    activeFilter === filter.value
                      ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                      : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{filter.icon}</span>
                  <span>{filter.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Поиск */}
              <div className="relative flex-1 lg:flex-none">
                <input
                  type="text"
                  placeholder={t('partnersConferences.search.placeholder', { defaultValue: 'Поиск конференций...' })}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full lg:w-64 px-4 py-3 pl-12 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
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

              {/* Переключение вида */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2 border border-slate-200/60 shadow-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-sky-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Основные табы */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200/60 shadow-sm">
              <motion.button
                onClick={() => setActiveTab('upcoming')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📅</span>
                <span>{t('partnersConferences.tabs.upcoming')}</span>
                <span className="bg-white/20 text-white/90 px-2 py-1 rounded-full text-sm">
                  {conferences.upcoming.length}
                </span>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('archive')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 ${
                  activeTab === 'archive'
                    ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📚</span>
                <span>{t('partnersConferences.tabs.archive')}</span>
                <span className="bg-white/20 text-white/90 px-2 py-1 rounded-full text-sm">
                  {conferences.archive.length}
                </span>
              </motion.button>
            </div>
          </div>

          {/* Сетка конференций */}
          <motion.div
            layout
            className={`${
              viewMode === 'grid' 
                ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
            }`}
          >
            <AnimatePresence>
              {filteredConferences.map((conference) => {
                const typeColors = getConferenceTypeColor(conference.type);
                const timer = countdown[conference.id];

                return (
                  <motion.div
                    key={conference.id}
                    layout
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    whileHover="hover"
                    onClick={() => setSelectedConference(conference)}
                  >
                    {/* Изображение конференции */}
                    <div className={`relative ${
                      viewMode === 'list' ? 'w-1/3' : 'h-48'
                    } bg-gradient-to-br from-sky-100 to-blue-100 overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <span className="text-2xl text-white">📅</span>
                          </div>
                          <p className="text-sky-600 font-semibold text-sm">{t('partnersConferences.conferenceImage')}</p>
                        </div>
                      </div>
                      
                      {/* Бэдж типа конференции */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${typeColors.bg} ${typeColors.text} ${typeColors.border} shadow-sm`}>
                          {conference.type === 'international' && t('partnersConferences.types.international')}
                          {conference.type === 'regional' && t('partnersConferences.types.regional')}
                          {conference.type === 'business' && t('partnersConferences.types.business')}
                        </span>
                      </div>

                      {/* Счетчик обратного отсчета для предстоящих конференций */}
                      {activeTab === 'upcoming' && timer && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-gradient-to-r from-sky-600/90 to-blue-600/90 backdrop-blur-sm rounded-xl p-3 text-white">
                            <div className="text-xs font-medium mb-2 text-center">
                              {t('partnersConferences.countdown.startsIn', { defaultValue: 'До начала:' })}
                            </div>
                            {renderCountdown(conference.id)}
                          </div>
                        </div>
                      )}

                      {/* Дата конференции */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center shadow-lg">
                        <div className="text-lg font-bold text-slate-900">
                          {new Date(conference.date).getDate()}
                        </div>
                        <div className="text-xs text-slate-600 font-medium">
                          {new Date(conference.date).toLocaleDateString('ru-RU', { month: 'short' })}
                        </div>
                        <div className="text-xs text-slate-500">
                          {new Date(conference.date).getFullYear()}
                        </div>
                      </div>
                    </div>

                    {/* Контент карточки */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors duration-300 line-clamp-2">
                        {conference.title}
                      </h3>
                      
                      <div className="flex items-center text-slate-600 mb-2">
                        <span className="mr-2">📍</span>
                        <span className="text-sm">{conference.location}</span>
                      </div>

                      <div className="flex items-center text-slate-600 mb-3">
                        <span className="mr-2">🕒</span>
                        <span className="text-sm">{conference.time}</span>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">{t('partnersConferences.theme')}</h4>
                        <p className="text-slate-600 text-sm line-clamp-2">{conference.theme}</p>
                      </div>

                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {conference.description}
                      </p>

                      {/* Статистика конференции */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="text-center p-2 bg-slate-50 rounded-lg">
                          <div className="text-sm font-bold text-sky-600">{conference.participantsCount}</div>
                          <div className="text-xs text-slate-600">{t('partnersConferences.stats.participants', { defaultValue: 'участников' })}</div>
                        </div>
                        <div className="text-center p-2 bg-slate-50 rounded-lg">
                          <div className="text-sm font-bold text-sky-600">{conference.countriesCount}</div>
                          <div className="text-xs text-slate-600">{t('partnersConferences.stats.countries', { defaultValue: 'стран' })}</div>
                        </div>
                      </div>

                      {/* Партнеры */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">{t('partnersConferences.partnersTitle')}</h4>
                        <div className="flex flex-wrap gap-1">
                          {conference.partners.slice(0, 3).map((partner, index) => {
                            const partnerColors = getPartnerTypeColor(partner.type);
                            return (
                              <span 
                                key={index}
                                className={`inline-flex items-center px-2 py-1 rounded-lg text-xs ${partnerColors.bg} ${partnerColors.text} ${partnerColors.border} shadow-sm`}
                              >
                                {partner.name}
                              </span>
                            );
                          })}
                          {conference.partners.length > 3 && (
                            <span className="inline-flex items-center px-2 py-1 rounded-lg text-xs bg-slate-100 text-slate-600 border border-slate-200">
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Секция отзывов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              {t('partnersConferences.testimonials.title', { defaultValue: 'Отзывы участников' })}
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t('partnersConferences.testimonials.subtitle', { defaultValue: 'Что говорят наши участники о конференциях' })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-xs text-sky-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-4">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">{testimonial.conference}</div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-amber-400"
                        whileHover={{ scale: 1.2 }}
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA блок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-gradient-to-r from-slate-50 to-sky-50 rounded-3xl p-12 border border-slate-200/60 relative overflow-hidden"
        >
          {/* Фоновые элементы */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200/20 rounded-full translate-y-20 -translate-x-20"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t('partnersConferences.cta.title')}
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              {t('partnersConferences.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">💡</span>
                <span className="text-lg">{t('partnersConferences.cta.suggestTopic')}</span>
              </motion.button>
              <motion.button
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3 hover:shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">🎤</span>
                <span className="text-lg">{t('partnersConferences.cta.becomeSpeaker')}</span>
              </motion.button>
              {activeTab === 'upcoming' && (
                <motion.button
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">📝</span>
                  <span className="text-lg">{t('partnersConferences.cta.register')}</span>
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно с деталями конференции */}
      <AnimatePresence>
        {selectedConference && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
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
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Заголовок и кнопка закрытия */}
                <div className="flex justify-between items-start p-8 border-b border-slate-200/60">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {selectedConference.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        <span>{formatDate(selectedConference.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">🕒</span>
                        <span>{selectedConference.time}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{selectedConference.location}</span>
                      </div>
                      {selectedConference.price && (
                        <div className="flex items-center">
                          <span className="mr-2">💰</span>
                          <span>{selectedConference.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedConference(null)}
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-300 group ml-4"
                  >
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Контент модального окна */}
                <div className="p-8 space-y-8">
                  {/* Тема и описание */}
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">
                      {t('partnersConferences.modal.theme')}
                    </h4>
                    <p className="text-sky-600 font-medium text-lg mb-6">{selectedConference.theme}</p>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">
                      {t('partnersConferences.modal.description')}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {selectedConference.fullDescription || selectedConference.description}
                    </p>
                  </div>

                  {/* Статистика конференции */}
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-sky-50 rounded-xl border border-sky-200">
                      <div className="text-2xl font-bold text-sky-600 mb-1">{selectedConference.participantsCount}</div>
                      <div className="text-sm text-sky-700 font-medium">{t('partnersConferences.stats.participants', { defaultValue: 'Участников' })}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                      <div className="text-2xl font-bold text-green-600 mb-1">{selectedConference.countriesCount}</div>
                      <div className="text-sm text-green-700 font-medium">{t('partnersConferences.stats.countries', { defaultValue: 'Стран' })}</div>
                    </div>
                    {selectedConference.language && (
                      <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-lg font-bold text-purple-600 mb-1">{selectedConference.language}</div>
                        <div className="text-sm text-purple-700 font-medium">{t('partnersConferences.modal.language', { defaultValue: 'Языки' })}</div>
                      </div>
                    )}
                    {selectedConference.format && (
                      <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                        <div className="text-lg font-bold text-amber-600 mb-1">{selectedConference.format}</div>
                        <div className="text-sm text-amber-700 font-medium">{t('partnersConferences.modal.format', { defaultValue: 'Формат' })}</div>
                      </div>
                    )}
                  </div>

                  {/* Партнеры */}
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">
                      {t('partnersConferences.modal.partners')}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedConference.partners.map((partner, index) => {
                        const partnerColors = getPartnerTypeColor(partner.type);
                        return (
                          <div key={index} className="flex items-center bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                            <div className={`w-12 h-12 ${partnerColors.bg} rounded-lg flex items-center justify-center mr-4 shadow-sm`}>
                              <span className="text-lg">🏢</span>
                            </div>
                            <div>
                              <span className="text-slate-700 font-semibold text-lg">{partner.name}</span>
                              <span className={`block text-sm ${partnerColors.text} font-medium`}>
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
                  {selectedConference.speakers && selectedConference.speakers.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.speakers')}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedConference.speakers.map((speaker, index) => (
                          <div key={index} className="flex items-center bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm">
                            <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                              <span className="text-lg text-white">🎤</span>
                            </div>
                            <div>
                              <span className="text-slate-700 font-semibold">{speaker}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Программа (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && selectedConference.program && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.program')}
                      </h4>
                      <div className="space-y-3">
                        {selectedConference.program.map((item, index) => (
                          <div key={index} className="flex items-start bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                            <span className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 shadow-sm">
                              {index + 1}
                            </span>
                            <span className="text-slate-700 text-lg">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Преимущества участия (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && selectedConference.benefits && selectedConference.benefits.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.benefits', { defaultValue: 'Преимущества участия' })}
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedConference.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Целевая аудитория (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && selectedConference.targetAudience && selectedConference.targetAudience.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.targetAudience', { defaultValue: 'Для кого эта конференция' })}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedConference.targetAudience.map((audience, index) => (
                          <span key={index} className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium">
                            {audience}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Результаты (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.outcomes && selectedConference.outcomes.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.outcomes', { defaultValue: 'Ключевые результаты' })}
                      </h4>
                      <div className="space-y-3">
                        {selectedConference.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-center text-slate-600">
                            <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                            {outcome}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Отзывы (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.testimonials && selectedConference.testimonials.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.testimonials', { defaultValue: 'Отзывы участников' })}
                      </h4>
                      <div className="space-y-4">
                        {selectedConference.testimonials.map((testimonial, index) => (
                          <div key={index} className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/60">
                            <p className="text-slate-600 italic mb-3">"{testimonial}"</p>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-amber-400">⭐</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Фотографии (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.photos && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.photos')}
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {selectedConference.photos.map((photo, index) => (
                          <div key={index} className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200/60">
                            <span className="text-3xl text-slate-400">📷</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Материалы (только для архивных конференций) */}
                  {activeTab === 'archive' && selectedConference.materials && (
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-4">
                        {t('partnersConferences.modal.materials')}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedConference.materials.map((material, index) => (
                          <motion.button
                            key={index}
                            className="flex items-center bg-sky-50 text-sky-600 px-6 py-3 rounded-xl hover:bg-sky-100 transition-colors duration-300 border border-sky-200 shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="mr-3">📄</span>
                            <span className="font-medium">{t('partnersConferences.modal.download')} {index + 1}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Кнопка регистрации (только для предстоящих конференций) */}
                  {activeTab === 'upcoming' && (
                    <div className="flex justify-center pt-4">
                      <motion.button
                        className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-12 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-sky-500/25 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-xl">📝</span>
                        <span className="text-lg">{t('partnersConferences.modal.registerButton')}</span>
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