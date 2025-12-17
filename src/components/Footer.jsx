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
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                  <div className="text-xl font-bold text-white">{t('footer.logo.association')}</div>
                  <div className="text-yellow-400 font-semibold">{t('footer.logo.foundation')}</div>
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