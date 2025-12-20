import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { apiRequest } from '../../../api';

const SubsidiaryDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [subsidiary, setSubsidiary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка данных subsidiary из API
  useEffect(() => {
    const fetchSubsidiary = async () => {
      try {
        setLoading(true);
        setError(null);
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        console.log('Fetching subsidiary with slug:', slug, 'and lang:', lang);
        const data = await apiRequest(`about-us/structure/${encodeURIComponent(slug)}/?lang=${lang}`);
        console.log('Received data:', data);
        setSubsidiary(data);
      } catch (err) {
        console.error('Error fetching subsidiary:', err);
        setError(t('structure.subsidiaries.error'));
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchSubsidiary();
    }
  }, [slug, i18n.language]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  if (error || !subsidiary) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
            <div className="text-8xl font-bold text-slate-300 mb-4">404</div>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Компания не найдена</h1>
            <p className="text-slate-600 mb-8">
              {error || 'Информация о запрашиваемой компании не найдена.'}
            </p>
            <button
              onClick={() => navigate('/about/structure')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Вернуться к структуре
            </button>
          </div>
        </div>
      </div>
    );
  }

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
    <section className="relative py-20 bg-slate-50 min-h-screen">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Кнопка назад */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/about/structure')}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-slate-700 font-medium">{t('structure.subsidiaries.backToStructure')}</span>
          </button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Заголовок */}
          <div className="relative h-[55vh] md:h-[50vh] bg-gradient-to-r from-blue-600 to-cyan-600 text-white overflow-hidden">

  {/* Фон */}
  <img
    src={subsidiary.logo}
    alt={subsidiary.name}
    className="
      absolute inset-0 
      w-full h-full 
      object-cover
      scale-105
      blur-[1px]
      opacity-60
    "
  />

  {/* Градиент */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-cyan-900/70"></div>

  {/* Центральная фотка с краями */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="
      p-3
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/30
      shadow-[0_25px_70px_rgba(0,0,0,0.45)]
    ">
      <img
        src={subsidiary.logo}
        alt={subsidiary.name}
        className="
          w-[65vw] md:w-[40vw]
          max-h-[75%]
          object-contain
          rounded-2xl
          bg-white
          p-6
          drop-shadow-[0_15px_40px_rgba(0,0,0,0.5)]
        "
      />
    </div>
  </div>

</div>


          <div className="px-8 md:px-12 py-12">
            <div className="relative z-10 flex flex-col min-h-full">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-2xl text-black">
                {subsidiary.name}
              </h1>
            </div>
            {/* Описание */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div 
                className="text-lg text-slate-700 leading-relaxed prose prose-slate max-w-none w-full"
                dangerouslySetInnerHTML={{ __html: subsidiary.description }}
              />
            </motion.div>

            {/* Контактная информация */}
            {(subsidiary.address || subsidiary.contacts || subsidiary.email || subsidiary.phone) && (
              <motion.div
                variants={itemVariants}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-8">{t('structure.subsidiaries.contacts')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subsidiary.address && (
                    <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{t('structure.subsidiaries.address')}</div>
                        <div className="text-slate-600">{subsidiary.address}</div>
                      </div>
                    </div>
                  )}
                  {subsidiary.email && (
                    <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{t('structure.subsidiaries.email')}</div>
                        <div className="text-slate-600">{subsidiary.email}</div>
                      </div>
                    </div>
                  )}
                  {subsidiary.phone && (
                    <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{t('structure.subsidiaries.phone')}</div>
                        <div className="text-slate-600">{subsidiary.phone}</div>
                      </div>
                    </div>
                  )}
                  {subsidiary.contacts && (
                    <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 mb-1">{t('structure.subsidiaries.contactsField')}</div>
                        <div className="text-slate-600">{subsidiary.contacts}</div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Кнопки действий */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-200"
            >
              {subsidiary.website && (
                <a
                  href={subsidiary.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 shadow-md inline-flex items-center justify-center space-x-3"
                >
                  <span>{t('structure.subsidiaries.website')}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <button
                onClick={() => navigate('/about/structure')}
                className={`${subsidiary.website ? '' : 'flex-1'} px-8 py-4 bg-slate-100 text-slate-700 rounded-2xl font-semibold hover:bg-slate-200 transition-all duration-300`}
              >
                {t('structure.subsidiaries.backToStructure')}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubsidiaryDetail;