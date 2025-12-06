import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlobeIcon } from '../../icons';

const InternationalPartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activePartner, setActivePartner] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    {
      id: 1,
      name: "Торгово-промышленная палата России",
      country: "Россия",
      flag: "🇷🇺",
      description: "Стратегическое партнёрство в сфере торговли и логистики, совместные бизнес-форумы и выставки",
      category: "trade",
      logo: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "TÜRK İŞ и MÜSİAD",
      country: "Турция",
      flag: "🇹🇷",
      description: "Совместные инвестиционные проекты в производство и развитие предпринимательства",
      category: "investment",
      logo: "https://images.unsplash.com/photo-1589561454226-796a8e9e8e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "China International Trade Promotion Council",
      country: "Китай",
      flag: "🇨🇳",
      description: "Развитие торговых коридоров и совместные инвестиции в инфраструктурные проекты",
      category: "trade",
      logo: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
      country: "Германия",
      flag: "🇩🇪",
      description: "Образовательные программы и проекты устойчивого развития",
      category: "education",
      logo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "USAID Kyrgyz Republic",
      country: "США",
      flag: "🇺🇸",
      description: "Программы поддержки демократии, экономического роста и социального развития",
      category: "development",
      logo: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "KOICA",
      country: "Корея",
      flag: "🇰🇷",
      description: "Технологическое сотрудничество и программы международной помощи",
      category: "technology",
      logo: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 7,
      name: "Атамекен",
      country: "Казахстан",
      flag: "🇰🇿",
      description: "Развитие региональной торговли и предпринимательских инициатив",
      category: "trade",
      logo: "https://images.unsplash.com/photo-1589561454226-796a8e9e8e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 8,
      name: "Торговая палата Узбекистана",
      country: "Узбекистан",
      flag: "🇺🇿",
      description: "Укрепление экономических связей и развитие транспортных коридоров",
      category: "trade",
      logo: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 9,
      name: "Qatar Charity Foundation",
      country: "Катар",
      flag: "🇶🇦",
      description: "Гуманитарные проекты и социальная поддержка нуждающихся регионов",
      category: "humanitarian",
      logo: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 10,
      name: "Islamic Development Bank",
      country: "Саудовская Аравия",
      flag: "🇸🇦",
      description: "Финансирование инфраструктурных проектов и программ развития",
      category: "finance",
      logo: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 11,
      name: "British Council",
      country: "Великобритания",
      flag: "🇬🇧",
      description: "Культурные обмены и образовательные программы",
      category: "education",
      logo: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 12,
      name: "French Development Agency",
      country: "Франция",
      flag: "🇫🇷",
      description: "Проекты в области устойчивого развития и защиты окружающей среды",
      category: "development",
      logo: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const categoryColors = {
    trade: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    investment: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    education: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    development: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    technology: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
    humanitarian: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' },
    finance: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-200' }
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  // Автопрокрутка ленты
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [partners.length, isPaused]);

  const visiblePartners = [...partners, ...partners].slice(currentIndex, currentIndex + 6);

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6"
          >
            <span className="text-blue-600 text-sm font-semibold">Глобальное сотрудничество</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Международные партнёры
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full mx-auto mb-8"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Доверие, сотрудничество и развитие — наш путь к глобальному успеху
          </motion.p>
        </motion.div>

        {/* Карта мира (декоративная) */}
        <motion.div
          variants={itemVariants}
          className="relative h-32 mb-12 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200"></div>
          <div className="relative z-10 text-center">
            <GlobeIcon className="w-16 h-16 mx-auto mb-2 text-blue-600" />
            <p className="text-slate-600 font-medium">Более 20 стран сотрудничества по всему миру</p>
          </div>
          
          {/* Анимированные точки на карте */}
          {[
            { left: '20%', top: '40%', delay: 0 },
            { left: '30%', top: '35%', delay: 0.5 },
            { left: '45%', top: '45%', delay: 1 },
            { left: '60%', top: '40%', delay: 1.5 },
            { left: '75%', top: '50%', delay: 2 },
            { left: '35%', top: '60%', delay: 2.5 }
          ].map((dot, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 bg-blue-500 rounded-full"
              style={{ left: dot.left, top: dot.top }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: dot.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Лента логотипов */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-8 overflow-x-hidden py-8">
            {visiblePartners.map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                variants={logoVariants}
                className="flex-shrink-0 w-48"
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                onHoverStart={() => setActivePartner(partner)}
                onHoverEnd={() => setActivePartner(null)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  {/* Флаг страны */}
                  <div className="text-3xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.flag}
                  </div>

                  {/* Логотип */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight p-1">
                      {partner.name.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>

                  {/* Название */}
                  <h3 className="text-sm font-semibold text-slate-900 text-center leading-tight line-clamp-2 mb-2">
                    {partner.name}
                  </h3>

                  {/* Страна */}
                  <p className="text-xs text-slate-500 text-center">
                    {partner.country}
                  </p>

                  {/* Индикатор категории */}
                  <motion.div
                    className={`w-3 h-3 rounded-full mx-auto mt-3 ${
                      categoryColors[partner.category]?.bg || 'bg-slate-300'
                    }`}
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Индикатор прогресса */}
          <div className="flex justify-center space-x-2 mt-8">
            {partners.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex % partners.length === index ? 'bg-blue-500 w-6' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Всплывающая карточка с описанием */}
        <AnimatePresence>
          {activePartner && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setActivePartner(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-6 max-w-sm mx-4 shadow-2xl border border-slate-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{activePartner.flag}</div>
                  <div>
                    <h3 className="font-bold text-slate-900">{activePartner.name}</h3>
                    <p className="text-slate-600 text-sm">{activePartner.country}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  {activePartner.description}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  categoryColors[activePartner.category]?.bg
                } ${categoryColors[activePartner.category]?.text} ${
                  categoryColors[activePartner.category]?.border
                }`}>
                  {activePartner.category === 'trade' && 'Торговля'}
                  {activePartner.category === 'investment' && 'Инвестиции'}
                  {activePartner.category === 'education' && 'Образование'}
                  {activePartner.category === 'development' && 'Развитие'}
                  {activePartner.category === 'technology' && 'Технологии'}
                  {activePartner.category === 'humanitarian' && 'Гуманитарная помощь'}
                  {activePartner.category === 'finance' && 'Финансы'}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Цитата и призыв к действию */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl p-8 border border-blue-200 max-w-4xl mx-auto"
          >
            {/* Цитата */}
            <div className="mb-8">
              <motion.blockquote
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 italic leading-relaxed"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                «Мы строим мосты сотрудничества, а не стены различий»
              </motion.blockquote>
              <motion.p
                className="text-slate-600 font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                — Аскар Салымбеков
              </motion.p>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto"
            >
              Присоединяйтесь к глобальной сети партнёрства и откройте новые возможности для развития и сотрудничества
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Link
                  to="/partners"
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Все партнёры</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link
                  to="/partners/international"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Международное сотрудничество</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Вспомогательный компонент для анимаций
const AnimatePresence = ({ children }) => {
  return <>{children}</>;
};

export default InternationalPartnersSection;