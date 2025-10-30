import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = t('footer.quickLinks', { returnObjects: true });

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.865 3.75 13.714 3.75 12.417s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-blue-600'
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

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      {/* Основное содержимое */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Колонка 1: Логотип и описание */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center font-bold text-slate-900 text-xl shadow-lg">
                  D
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Ассоциация</div>
                  <div className="text-yellow-400 font-semibold">«Дордой»</div>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-300 leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            {/* Эмблема 30-летия */}
            <motion.div
              className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-4 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                  30
                </div>
                <div>
                  <div className="text-yellow-400 font-semibold text-sm">{t('footer.anniversary.title')}</div>
                  <div className="text-slate-300 text-xs">{t('footer.anniversary.subtitle')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Колонка 2: Быстрые ссылки */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span>{t('footer.navigation.title')}</span>
              <div className="ml-3 w-8 h-0.5 bg-yellow-400 rounded-full"></div>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-300 py-2 block text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Колонка 3: Контакты */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span>{t('footer.contacts.title')}</span>
              <div className="ml-3 w-8 h-0.5 bg-yellow-400 rounded-full"></div>
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-5 h-5 text-yellow-400 mt-0.5">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm">{t('footer.contacts.address')}</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
              >
                <div className="w-5 h-5 text-yellow-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-sm">{t('footer.contacts.phone')}</div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
              >
                <div className="w-5 h-5 text-yellow-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-sm">{t('footer.contacts.email')}</div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.3 }}
              >
                <div className="w-5 h-5 text-yellow-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-sm">{t('footer.contacts.hours')}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Колонка 4: Социальные сети и форма */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span>{t('footer.social.title')}</span>
              <div className="ml-3 w-8 h-0.5 bg-yellow-400 rounded-full"></div>
            </h3>
            
            {/* Социальные сети */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={`w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-slate-300 backdrop-blur-sm transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Форма быстрого запроса */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-white font-semibold mb-3 text-sm">{t('footer.social.messageForm.title')}</h4>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder={t('footer.social.messageForm.placeholder')}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <motion.button
                  className="w-full bg-yellow-400 text-slate-900 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('footer.social.messageForm.button')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Разделитель */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Подвал */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <motion.div
            variants={itemVariants}
            className="text-slate-400 text-sm text-center md:text-left"
          >
            {t('footer.copyright', { year: currentYear })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-slate-400 text-sm"
          >
            <span>{t('footer.developedBy')}</span>
            <motion.span
              className="text-yellow-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t('footer.company')}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Кнопка "Наверх" */}
      <motion.button
        className={`fixed bottom-8 right-8 w-12 h-12 bg-yellow-400 text-slate-900 rounded-xl shadow-2xl flex items-center justify-center transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        title={t('footer.scrollToTop')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;