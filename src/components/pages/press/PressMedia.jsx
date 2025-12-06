import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CameraIcon, TrophyIcon, GlobeIcon, HandshakeIcon, BriefcaseIcon } from '../../icons';

const PressMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedYear, setSelectedYear] = useState('all');
  const { t } = useTranslation();

  // Автоматическое переключение категорий
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveCategory(prev => {
          const currentIndex = categories.findIndex(cat => cat.id === prev);
          const nextIndex = (currentIndex + 1) % categories.length;
          return categories[nextIndex].id;
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const categories = [
    { id: 'all', label: t('media.categories.all'), icon: <CameraIcon className="w-5 h-5" /> },
    { id: 'anniversary', label: t('media.categories.anniversary'), icon: <TrophyIcon className="w-5 h-5" /> },
    { id: 'sports', label: t('media.categories.sports'), icon: <TrophyIcon className="w-5 h-5" /> },
    { id: 'international', label: t('media.categories.international'), icon: <GlobeIcon className="w-5 h-5" /> },
    { id: 'social', label: t('media.categories.social'), icon: <HandshakeIcon className="w-5 h-5" /> },
    { id: 'business', label: t('media.categories.business'), icon: <BriefcaseIcon className="w-5 h-5" /> }
  ];

  const years = ['all', '2024', '2023', '2022', '2021'];
  const sortOptions = [
    { id: 'newest', label: t('media.sort.newest') },
    { id: 'oldest', label: t('media.sort.oldest') },
    { id: 'name', label: t('media.sort.name') }
  ];

  const galleries = [
    {
      id: 1,
      title: t('media.galleries.anniversary.title'),
      description: t('media.galleries.anniversary.description'),
      category: 'anniversary',
      year: '2024',
      featured: true,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.anniversary.images.0.title'),
          description: t('media.galleries.anniversary.images.0.description'),
          date: '15.01.2024',
          downloadUrl: '/downloads/anniversary-1.jpg',
          photographer: t('media.galleries.anniversary.images.0.photographer'),
          tags: ['юбилей', 'торжество', 'награждение'],
          resolution: '4000x3000',
          size: '8.2 MB',
          license: 'Editorial Use'
        },
        {
          id: 2,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.anniversary.images.1.title'),
          description: t('media.galleries.anniversary.images.1.description'),
          date: '15.01.2024',
          downloadUrl: '/downloads/anniversary-2.jpg',
          photographer: t('media.galleries.anniversary.images.1.photographer'),
          tags: ['ветераны', 'награды'],
          resolution: '4000x3000',
          size: '7.8 MB',
          license: 'Editorial Use'
        }
      ],
      videos: [
        {
          id: 1,
          title: t('media.galleries.anniversary.videos.0.title'),
          duration: '2:45',
          thumbnail: '/api/placeholder/300/200'
        }
      ],
      color: 'blue'
    },
    {
      id: 2,
      title: t('media.galleries.sports.title'),
      description: t('media.galleries.sports.description'),
      category: 'sports',
      year: '2024',
      featured: false,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.sports.images.0.title'),
          description: t('media.galleries.sports.images.0.description'),
          date: '10.02.2024',
          downloadUrl: '/downloads/sports-1.jpg',
          photographer: t('media.galleries.sports.images.0.photographer'),
          tags: ['футбол', 'чемпионат'],
          resolution: '4000x3000',
          size: '9.1 MB',
          license: 'Editorial Use'
        }
      ],
      color: 'green'
    },
    {
      id: 3,
      title: t('media.galleries.international.title'),
      description: t('media.galleries.international.description'),
      category: 'international',
      year: '2023',
      featured: true,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.international.images.0.title'),
          description: t('media.galleries.international.images.0.description'),
          date: '05.11.2023',
          downloadUrl: '/downloads/international-1.jpg',
          photographer: t('media.galleries.international.images.0.photographer'),
          tags: ['меморандум', 'партнерство'],
          resolution: '4000x3000',
          size: '8.5 MB',
          license: 'Editorial Use'
        }
      ],
      color: 'purple'
    },
    {
      id: 4,
      title: t('media.galleries.social.title'),
      description: t('media.galleries.social.description'),
      category: 'social',
      year: '2023',
      featured: false,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.social.images.0.title'),
          description: t('media.galleries.social.images.0.description'),
          date: '20.09.2023',
          downloadUrl: '/downloads/social-1.jpg',
          photographer: t('media.galleries.social.images.0.photographer'),
          tags: ['благотворительность', 'дети'],
          resolution: '4000x3000',
          size: '7.2 MB',
          license: 'Editorial Use'
        }
      ],
      color: 'orange'
    },
    {
      id: 5,
      title: t('media.galleries.business.title'),
      description: t('media.galleries.business.description'),
      category: 'business',
      year: '2024',
      featured: false,
      coverImage: '/api/placeholder/600/400',
      images: [],
      color: 'cyan'
    },
    {
      id: 6,
      title: t('media.galleries.infrastructure.title'),
      description: t('media.galleries.infrastructure.description'),
      category: 'infrastructure',
      year: '2023',
      featured: true,
      coverImage: '/api/placeholder/600/400',
      images: [],
      color: 'red'
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      light: 'bg-green-50', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    red: { 
      light: 'bg-red-50', 
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-pink-500'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-sky-500'
    }
  };

  // Фильтрация и сортировка
  const filteredGalleries = galleries
    .filter(gallery => 
      (activeCategory === 'all' || gallery.category === activeCategory) &&
      (selectedYear === 'all' || gallery.year === selectedYear) &&
      (searchTerm === '' || 
        gallery.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gallery.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.year) - new Date(a.year);
        case 'oldest':
          return new Date(a.year) - new Date(b.year);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

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

  const lightboxVariants = {
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

  const openLightbox = (gallery, imageIndex = 0) => {
    setSelectedImage(gallery);
    setLightboxIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxIndex(0);
  };

  const nextImage = () => {
    if (selectedImage) {
      setLightboxIndex((prev) => 
        prev < selectedImage.images.length - 1 ? prev + 1 : 0
      );
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      setLightboxIndex((prev) => 
        prev > 0 ? prev - 1 : selectedImage.images.length - 1
      );
    }
  };

  const handleShare = (gallery) => {
    if (navigator.share) {
      navigator.share({
        title: gallery.title,
        text: gallery.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('media.linkCopied'));
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

        {/* Панель фильтров и поиска */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Поиск */}
              <div className="md:col-span-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={t('media.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  />
                  <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Год */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? t('media.allYears') : year}
                  </option>
                ))}
              </select>

              {/* Сортировка */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Категории */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
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
          </div>
        </motion.div>

        {/* Сетка галерей */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence>
            {filteredGalleries.map((gallery) => {
              const colors = colorMap[gallery.color];
              return (
                <motion.div
                  key={gallery.id}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={cardVariants}
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                    gallery.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  whileHover="hover"
                >
                  {/* Обложка галереи */}
                  <div 
                    className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(gallery)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/90 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <span className="text-3xl">{categories.find(cat => cat.id === gallery.category)?.icon}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Бейджи */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {gallery.featured && (
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
                          {t('media.featured')}
                        </span>
                      )}
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full backdrop-blur-sm`}>
                        {gallery.year}
                      </span>
                    </div>

                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="text-center">
                          <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v0" />
                          </svg>
                          <span className="text-blue-600 font-semibold text-sm">{t('media.viewGallery')}</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Информация о галерее */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {gallery.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {gallery.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full backdrop-blur-sm`}>
                        {categories.find(cat => cat.id === gallery.category)?.label}
                      </span>
                      
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare(gallery);
                          }}
                          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => openLightbox(gallery)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{t('media.viewGallery')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-7xl w-full max-h-full bg-white rounded-3xl overflow-hidden shadow-2xl"
                variants={lightboxVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Заголовок */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-10 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {selectedImage.images[lightboxIndex]?.title || selectedImage.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                        <span>{selectedImage.images[lightboxIndex]?.date}</span>
                        <span>•</span>
                        <span>{lightboxIndex + 1} / {selectedImage.images.length}</span>
                        {selectedImage.images[lightboxIndex]?.photographer && (
                          <>
                            <span>•</span>
                            <span>{t('media.photographer')}: {selectedImage.images[lightboxIndex].photographer}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShare(selectedImage);
                        }}
                        className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </motion.button>
                      <button
                        onClick={closeLightbox}
                        className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Изображение */}
                <div className="relative h-[70vh] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="bg-white rounded-2xl shadow-2xl w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                          <span className="text-4xl text-white">📷</span>
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-4">
                          {t('media.imagePlaceholder')}
                        </h4>
                        <p className="text-slate-600 text-lg mb-2">
                          {selectedImage.images[lightboxIndex]?.title || selectedImage.title}
                        </p>
                        <p className="text-slate-500">
                          {selectedImage.images[lightboxIndex]?.resolution} • {selectedImage.images[lightboxIndex]?.size}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Кнопки навигации */}
                  {selectedImage.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white shadow-2xl transition-all duration-300 text-slate-700"
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white shadow-2xl transition-all duration-300 text-slate-700"
                      >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Миниатюры */}
                  {selectedImage.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedImage.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setLightboxIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            lightboxIndex === index ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Описание и кнопки действий */}
                <div className="p-8 bg-white border-t border-slate-200">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-4">{t('media.description')}</h4>
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {selectedImage.images[lightboxIndex]?.description || selectedImage.description}
                      </p>
                      
                      {/* Теги */}
                      {selectedImage.images[lightboxIndex]?.tags && (
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-slate-900 mb-2">{t('media.tags')}</h5>
                          <div className="flex flex-wrap gap-2">
                            {selectedImage.images[lightboxIndex].tags.map((tag, index) => (
                              <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Мета-информация */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-slate-500">{t('media.license')}:</span>
                          <span className="text-slate-900 font-medium ml-2">
                            {selectedImage.images[lightboxIndex]?.license}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">{t('media.resolution')}:</span>
                          <span className="text-slate-900 font-medium ml-2">
                            {selectedImage.images[lightboxIndex]?.resolution}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Кнопки скачивания удалены */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PressMedia;