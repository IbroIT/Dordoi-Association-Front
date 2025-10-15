import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PressMedia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('media.categories.all') },
    { id: 'anniversary', label: t('media.categories.anniversary') },
    { id: 'sports', label: t('media.categories.sports') },
    { id: 'international', label: t('media.categories.international') },
    { id: 'social', label: t('media.categories.social') }
  ];

  const galleries = [
    {
      id: 1,
      title: t('media.galleries.anniversary.title'),
      description: t('media.galleries.anniversary.description'),
      category: 'anniversary',
      year: '2024',
      imageCount: 24,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.anniversary.images.0.title'),
          description: t('media.galleries.anniversary.images.0.description'),
          date: '15.01.2024',
          downloadUrl: '/downloads/anniversary-1.jpg'
        },
        {
          id: 2,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.anniversary.images.1.title'),
          description: t('media.galleries.anniversary.images.1.description'),
          date: '15.01.2024',
          downloadUrl: '/downloads/anniversary-2.jpg'
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
      imageCount: 18,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.sports.images.0.title'),
          description: t('media.galleries.sports.images.0.description'),
          date: '10.02.2024',
          downloadUrl: '/downloads/sports-1.jpg'
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
      imageCount: 32,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.international.images.0.title'),
          description: t('media.galleries.international.images.0.description'),
          date: '05.11.2023',
          downloadUrl: '/downloads/international-1.jpg'
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
      imageCount: 15,
      coverImage: '/api/placeholder/600/400',
      images: [
        {
          id: 1,
          src: '/api/placeholder/1200/800',
          thumbnail: '/api/placeholder/300/200',
          title: t('media.galleries.social.images.0.title'),
          description: t('media.galleries.social.images.0.description'),
          date: '20.09.2023',
          downloadUrl: '/downloads/social-1.jpg'
        }
      ],
      color: 'orange'
    },
    {
      id: 5,
      title: t('media.galleries.anniversary2.title'),
      description: t('media.galleries.anniversary2.description'),
      category: 'anniversary',
      year: '2023',
      imageCount: 28,
      coverImage: '/api/placeholder/600/400',
      images: [],
      color: 'red'
    },
    {
      id: 6,
      title: t('media.galleries.sports2.title'),
      description: t('media.galleries.sports2.description'),
      category: 'sports',
      year: '2023',
      imageCount: 22,
      coverImage: '/api/placeholder/600/400',
      images: [],
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    red: { light: 'bg-red-50', dark: 'bg-red-600', text: 'text-red-600', border: 'border-red-200' },
    cyan: { light: 'bg-cyan-50', dark: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200' }
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

  const filteredGalleries = activeCategory === 'all' 
    ? galleries 
    : galleries.filter(gallery => gallery.category === activeCategory);

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

  const handleDownload = (downloadUrl, imageTitle) => {
    // В реальном приложении здесь будет запрос на скачивание
    console.log('Downloading:', downloadUrl);
    
    // Создаем временную ссылку для скачивания
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${imageTitle}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadRequest = (image) => {
    // Для высокого разрешения по запросу
    alert(t('media.downloadRequestMessage', { title: image.title }));
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-blue-600 text-sm font-semibold">{t('media.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('media.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('media.subtitle')}
          </motion.p>
        </motion.div>

        {/* Фильтры */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Сетка галерей */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredGalleries.map((gallery) => {
              const colors = colorMap[gallery.color];
              return (
                <motion.div
                  key={gallery.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  {/* Обложка галереи */}
                  <div 
                    className="relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(gallery)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-blue-600 font-semibold">{gallery.imageCount} {t('media.images')}</p>
                      </div>
                    </div>
                    
                    {/* Год */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                        {gallery.year}
                      </span>
                    </div>
                    
                    {/* Количество изображений */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 backdrop-blur-sm px-3 py-1 text-white text-sm font-medium rounded-full">
                        {gallery.imageCount} {t('media.photos')}
                      </span>
                    </div>

                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v0" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Информация о галерее */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {gallery.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {gallery.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 ${colors.light} ${colors.text} text-sm font-medium rounded-full`}>
                        {categories.find(cat => cat.id === gallery.category)?.label}
                      </span>
                      
                      <motion.button
                        onClick={() => openLightbox(gallery)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <span>{t('media.viewGallery')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-6xl max-h-full bg-white rounded-2xl overflow-hidden"
                variants={lightboxVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Заголовок */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-10 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">
                        {selectedImage.images[lightboxIndex]?.title || selectedImage.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {selectedImage.images[lightboxIndex]?.date} • {lightboxIndex + 1} / {selectedImage.images.length}
                      </p>
                    </div>
                    <button
                      onClick={closeLightbox}
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Изображение */}
                <div className="relative h-[70vh] bg-gray-100 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-blue-600 font-semibold">{t('media.imagePlaceholder')}</p>
                        <p className="text-blue-400 text-sm mt-2">
                          {selectedImage.images[lightboxIndex]?.title || selectedImage.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Кнопки навигации */}
                  {selectedImage.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200 text-white"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200 text-white"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {/* Описание и кнопки действий */}
                <div className="p-6 bg-white">
                  <p className="text-slate-600 mb-4">
                    {selectedImage.images[lightboxIndex]?.description || selectedImage.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{selectedImage.images[lightboxIndex]?.date}</span>
                      <span>•</span>
                      <span>{selectedImage.year}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 ${colorMap[selectedImage.color].light} ${colorMap[selectedImage.color].text} rounded-full text-xs font-medium`}>
                        {categories.find(cat => cat.id === selectedImage.category)?.label}
                      </span>
                    </div>
                    
                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => handleDownload(
                          selectedImage.images[lightboxIndex]?.downloadUrl,
                          selectedImage.images[lightboxIndex]?.title
                        )}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 inline-flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t('media.download')}</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => handleDownloadRequest(selectedImage.images[lightboxIndex])}
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 inline-flex items-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                        <span>{t('media.highRes')}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {t('media.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('media.cta.description')}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('media.cta.requestPhotos')}</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{t('media.cta.contact')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PressMedia;