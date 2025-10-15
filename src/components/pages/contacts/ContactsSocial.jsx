import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();

  const socialNetworks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.facebook')
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.189-1.551-.741-.941-1.009-2.142-.709-3.317.3-1.175 1.115-2.151 2.238-2.69 1.123-.539 2.443-.539 3.566 0 .541.26.994.637 1.34 1.101.346.464.57 1.001.654 1.571.084.57.025 1.152-.172 1.693-.197.541-.525 1.022-.954 1.404-.429.382-.943.653-1.505.789-.562.136-1.151.132-1.711-.011-.56-.143-1.067-.424-1.478-.816zm10.661-6.665c-.211.211-.466.317-.763.317-.297 0-.552-.106-.763-.317-.211-.211-.317-.466-.317-.763 0-.297.106-.552.317-.763.211-.211.466-.317.763-.317.297 0 .552.106.763.317.211.211.317.466.317.763 0 .297-.106.552-.317.763zm1.746 2.516c-.084.633-.297 1.229-.617 1.761-.32.532-.742.987-1.246 1.341-.504.354-1.077.599-1.687.723-.61.124-1.241.124-1.851 0-1.229-.25-2.3-.92-3.063-1.896-.763-.976-1.158-2.197-1.118-3.447.04-1.25.516-2.443 1.341-3.366.825-.923 1.937-1.51 3.166-1.651 1.229-.141 2.458.173 3.446.9.988.727 1.661 1.811 1.896 3.041.084.633.084 1.271 0 1.904z"/>
        </svg>
      ),
      color: 'pink',
      url: t('contactsSocial.socialLinks.instagram')
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'red',
      url: t('contactsSocial.socialLinks.youtube')
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.linkedin')
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'sky',
      url: t('contactsSocial.socialLinks.twitter')
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.064-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: 'blue',
      url: t('contactsSocial.socialLinks.telegram')
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100', 
      dark: 'bg-blue-500', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      hover: 'hover:bg-blue-500'
    },
    pink: { 
      light: 'bg-pink-50', 
      medium: 'bg-pink-100', 
      dark: 'bg-pink-500', 
      text: 'text-pink-600', 
      border: 'border-pink-200',
      hover: 'hover:bg-pink-500'
    },
    red: { 
      light: 'bg-red-50', 
      medium: 'bg-red-100', 
      dark: 'bg-red-500', 
      text: 'text-red-600', 
      border: 'border-red-200',
      hover: 'hover:bg-red-500'
    },
    sky: { 
      light: 'bg-sky-50', 
      medium: 'bg-sky-100', 
      dark: 'bg-sky-500', 
      text: 'text-sky-600', 
      border: 'border-sky-200',
      hover: 'hover:bg-sky-500'
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
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

  const handleSocialClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={ref} className="relative py-16 bg-white overflow-hidden">
      {/* Субтлный фон с градиентами */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-rose-200 rounded-full blur-2xl"
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
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-amber-200 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-rose-50 border border-rose-200 mb-6"
          >
            <span className="text-rose-600 text-sm font-semibold">{t('contactsSocial.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
          >
            {t('contactsSocial.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-16 h-1 bg-gradient-to-r from-rose-500 to-indigo-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t('contactsSocial.subtitle')}
          </motion.p>
        </motion.div>

        {/* Сетка социальных сетей */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
        >
          {socialNetworks.map((social) => {
            const colors = colorMap[social.color];
            return (
              <motion.a
                key={social.name}
                href={social.url}
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick(social.url);
                }}
                variants={itemVariants}
                className={`group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center aspect-square ${colors.hover} hover:text-white`}
                whileHover={{ 
                  y: -8,
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Иконка социальной сети */}
                <motion.div 
                  className={`w-12 h-12 ${colors.medium} rounded-2xl flex items-center justify-center mb-3 group-hover:bg-white/20 transition-colors duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${colors.text} group-hover:text-white transition-colors duration-300`}>
                    {social.icon}
                  </div>
                </motion.div>

                {/* Название социальной сети */}
                <motion.span 
                  className={`font-semibold text-sm ${colors.text} group-hover:text-white transition-colors duration-300 text-center`}
                  whileHover={{ scale: 1.1 }}
                >
                  {social.name}
                </motion.span>

                {/* Акцентный элемент при наведении */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"></div>
                
                {/* Эффект свечения */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/0 group-hover:to-white/10 transition-all duration-500"></div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Дополнительная информация */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-gradient-to-r from-slate-50 to-rose-50 rounded-2xl p-8 border border-slate-200"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            {t('contactsSocial.followTitle')}
          </h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            {t('contactsSocial.followDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('contactsSocial.stats.subscribers')}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('contactsSocial.stats.engagement')}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('contactsSocial.stats.content')}
            </div>
          </div>
        </motion.div>

        {/* QR код для быстрого доступа */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-12"
        >
          <div className="inline-flex flex-col items-center bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="w-32 h-32 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <p className="text-slate-600 text-sm font-medium">
              {t('contactsSocial.qrText')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSocial;