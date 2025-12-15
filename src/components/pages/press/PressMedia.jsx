import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { CameraIcon, TrophyIcon, GlobeIcon, HandshakeIcon, BriefcaseIcon } from '../../icons';

const PressMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [galleries, setGalleries] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Загрузка категорий из API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const response = await fetch(`https://dordoi-backend-f6584db3b47e.herokuapp.com/api/gallery/categories/?language=${lang}`);
        const data = await response.json();
        
        // Добавляем категорию "all" в начало
        const allCategory = { id: 'all', label: t('media.categories.all'), icon: <CameraIcon className="w-5 h-5" /> };
        const apiCategories = data.map((category, index) => ({
          id: category.id.toString(),
          label: category[`name_${lang}`] || category.name_ru,
          icon: getCategoryIcon(index)
        }));
        
        setCategories([allCategory, ...apiCategories]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [i18n.language, t]);

  // Загрузка галерей из API
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const response = await fetch(`https://dordoi-backend-f6584db3b47e.herokuapp.com/api/gallery/galleries/?language=${lang}`);
        const data = await response.json();
        
        // Преобразуем данные для компонента
        const transformedGalleries = data.map(gallery => ({
          id: gallery.id,
          title: gallery[`title_${lang}`] || gallery.title_ru,
          category: gallery.category.id.toString(),
          coverImage: gallery.photos.length > 0 ? gallery.photos[0].image : '/api/placeholder/600/400',
          photos: gallery.photos
        }));
        
        setGalleries(transformedGalleries);
      } catch (error) {
        console.error('Error fetching galleries:', error);
      }
    };

    fetchGalleries();
  }, [i18n.language]);

  // Функция для получения иконки категории
  const getCategoryIcon = (index) => {
    const icons = [
      <TrophyIcon className="w-5 h-5" />,
      <TrophyIcon className="w-5 h-5" />,
      <GlobeIcon className="w-5 h-5" />,
      <HandshakeIcon className="w-5 h-5" />,
      <BriefcaseIcon className="w-5 h-5" />
    ];
    return icons[index % icons.length];
  };

  // Фильтрация галерей по категории
  const filteredGalleries = galleries.filter(gallery => 
    activeCategory === 'all' || gallery.category === activeCategory
  );

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
    hidden: { scale: 0.9, opacity: 0, y: 20 },
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

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Заголовок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 text-lg font-semibold">{t('media.badge')}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t('media.title')}
            </span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-8"
          ></motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('media.subtitle')}
          </motion.p>
        </motion.div>

        {/* Категории */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Сетка галерей */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredGalleries.map((gallery) => (
              <motion.div
                key={gallery.id}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                whileHover="hover"
              >
                {/* Изображение */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                  <img
                    src={gallery.coverImage}
                    alt={gallery.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Информация о галерее */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {gallery.title}
                  </h3>
                  
                  <motion.button
                    onClick={() => navigate(`/press/gallery/${gallery.id}`)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('media.viewGallery')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PressMedia;