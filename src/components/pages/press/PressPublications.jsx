import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GlobeIcon, NewspaperIcon, MicroscopeIcon, MicrophoneIcon, ChartIcon, StarIcon, DocumentIcon } from '../../icons';

const PressPublications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showAccreditationForm, setShowAccreditationForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const [likedPublications, setLikedPublications] = useState(new Set());
  const { t } = useTranslation();

  const filters = [
    { id: 'all', label: t('publications.filters.all'), count: t('publications.stats.total') },
    { id: 'international', label: t('publications.filters.international'), icon: <GlobeIcon className="w-5 h-5" /> },
    { id: 'local', label: t('publications.filters.local'), icon: <NewspaperIcon className="w-5 h-5" /> },
    { id: 'research', label: t('publications.filters.research'), icon: <MicroscopeIcon className="w-5 h-5" /> },
    { id: 'interviews', label: t('publications.filters.interviews'), icon: <MicrophoneIcon className="w-5 h-5" /> },
    { id: 'reports', label: t('publications.filters.reports'), icon: <ChartIcon className="w-5 h-5" /> }
  ];

  const sortOptions = [
    { id: 'newest', label: t('publications.sort.newest') },
    { id: 'oldest', label: t('publications.sort.oldest') },
    { id: 'title', label: t('publications.sort.title') },
    { id: 'publisher', label: t('publications.sort.publisher') }
  ];

  const stats = [
    { value: t('publications.stats.publications'), label: t('publications.stats.publicationsLabel') },
    { value: t('publications.stats.countries'), label: t('publications.stats.countriesLabel') },
    { value: t('publications.stats.languages'), label: t('publications.stats.languagesLabel') },
    { value: t('publications.stats.downloads'), label: t('publications.stats.downloadsLabel') }
  ];

  const publications = [
    {
      id: 1,
      title: t('publications.items.forbes.title'),
      description: t('publications.items.forbes.description'),
      fullDescription: t('publications.items.forbes.fullDescription'),
      type: 'international',
      publisher: 'Forbes',
      date: '2024-01-15',
      language: t('publications.language.en'),
      pages: '3',
      fileSize: '2.4 MB',
      downloadUrl: '/publications/forbes-2024.pdf',
      previewUrl: '/publications/forbes-2024-preview.jpg',
      citation: t('publications.items.forbes.citation'),
      color: 'blue',
      authors: [t('publications.items.forbes.author')],
      tags: [t('publications.tags.leadership'), t('publications.tags.strategy'), t('publications.tags.innovation')],
      views: 1250,
      likes: 89,
      featured: true,
      related: [2, 3]
    },
    {
      id: 2,
      title: t('publications.items.worldBank.title'),
      description: t('publications.items.worldBank.description'),
      fullDescription: t('publications.items.worldBank.fullDescription'),
      type: 'research',
      publisher: t('publications.items.worldBank.publisher'),
      date: '2023-11-20',
      language: t('publications.language.en'),
      pages: '45',
      fileSize: '8.7 MB',
      downloadUrl: '/publications/world-bank-research.pdf',
      previewUrl: '/publications/world-bank-preview.jpg',
      citation: t('publications.items.worldBank.citation'),
      color: 'green',
      authors: [t('publications.items.worldBank.author')],
      tags: [t('publications.tags.research'), t('publications.tags.development'), t('publications.tags.sustainability')],
      views: 890,
      likes: 67,
      featured: false,
      related: [1, 4]
    },
    {
      id: 3,
      title: t('publications.items.usaid.title'),
      description: t('publications.items.usaid.description'),
      fullDescription: t('publications.items.usaid.fullDescription'),
      type: 'research',
      publisher: 'USAID',
      date: '2023-09-10',
      language: t('publications.language.en'),
      pages: '28',
      fileSize: '5.2 MB',
      downloadUrl: '/publications/usaid-report.pdf',
      previewUrl: '/publications/usaid-preview.jpg',
      citation: t('publications.items.usaid.citation'),
      color: 'purple',
      authors: [t('publications.items.usaid.author')],
      tags: [t('publications.tags.csr'), t('publications.tags.social'), t('publications.tags.community')],
      views: 756,
      likes: 54,
      featured: true,
      related: [1, 5]
    },
    {
      id: 4,
      title: t('publications.items.localNews.title'),
      description: t('publications.items.localNews.description'),
      fullDescription: t('publications.items.localNews.fullDescription'),
      type: 'local',
      publisher: t('publications.items.localNews.publisher'),
      date: '2024-02-01',
      language: t('publications.language.local'),
      pages: '2',
      fileSize: '1.8 MB',
      downloadUrl: '/publications/local-news-2024.pdf',
      previewUrl: '/publications/local-news-preview.jpg',
      citation: t('publications.items.localNews.citation'),
      color: 'orange',
      authors: [t('publications.items.localNews.author')],
      tags: [t('publications.tags.education'), t('publications.tags.youth'), t('publications.tags.investment')],
      views: 432,
      likes: 32,
      featured: false,
      related: [2, 6]
    },
    {
      id: 5,
      title: t('publications.items.businessMag.title'),
      description: t('publications.items.businessMag.description'),
      fullDescription: t('publications.items.businessMag.fullDescription'),
      type: 'international',
      publisher: t('publications.items.businessMag.publisher'),
      date: '2023-12-05',
      language: t('publications.language.en'),
      pages: '5',
      fileSize: '3.1 MB',
      downloadUrl: '/publications/business-magazine.pdf',
      previewUrl: '/publications/business-mag-preview.jpg',
      citation: t('publications.items.businessMag.citation'),
      color: 'red',
      authors: [t('publications.items.businessMag.author')],
      tags: [t('publications.tags.export'), t('publications.tags.trade'), t('publications.tags.growth')],
      views: 678,
      likes: 45,
      featured: false,
      related: [3, 6]
    },
    {
      id: 6,
      title: t('publications.items.economicReview.title'),
      description: t('publications.items.economicReview.description'),
      fullDescription: t('publications.items.economicReview.fullDescription'),
      type: 'research',
      publisher: t('publications.items.economicReview.publisher'),
      date: '2023-10-15',
      language: t('publications.language.ru'),
      pages: '15',
      fileSize: '4.5 MB',
      downloadUrl: '/publications/economic-review.pdf',
      previewUrl: '/publications/economic-review-preview.jpg',
      citation: t('publications.items.economicReview.citation'),
      color: 'cyan',
      authors: [t('publications.items.economicReview.author')],
      tags: [t('publications.tags.economics'), t('publications.tags.investment'), t('publications.tags.regional')],
      views: 543,
      likes: 38,
      featured: false,
      related: [4, 5]
    },
    {
      id: 7,
      title: t('publications.items.techCrunch.title'),
      description: t('publications.items.techCrunch.description'),
      fullDescription: t('publications.items.techCrunch.fullDescription'),
      type: 'international',
      publisher: 'TechCrunch',
      date: '2024-01-28',
      language: t('publications.language.en'),
      pages: '4',
      fileSize: '2.8 MB',
      downloadUrl: '/publications/techcrunch-2024.pdf',
      previewUrl: '/publications/techcrunch-preview.jpg',
      citation: t('publications.items.techCrunch.citation'),
      color: 'indigo',
      authors: [t('publications.items.techCrunch.author')],
      tags: [t('publications.tags.technology'), t('publications.tags.innovation'), t('publications.tags.digital')],
      views: 1120,
      likes: 92,
      featured: true,
      related: [1, 3]
    },
    {
      id: 8,
      title: t('publications.items.unReport.title'),
      description: t('publications.items.unReport.description'),
      fullDescription: t('publications.items.unReport.fullDescription'),
      type: 'research',
      publisher: t('publications.items.unReport.publisher'),
      date: '2023-08-22',
      language: t('publications.language.en'),
      pages: '62',
      fileSize: '12.3 MB',
      downloadUrl: '/publications/un-report-2023.pdf',
      previewUrl: '/publications/un-report-preview.jpg',
      citation: t('publications.items.unReport.citation'),
      color: 'emerald',
      authors: [t('publications.items.unReport.author')],
      tags: [t('publications.tags.sustainability'), t('publications.tags.climate'), t('publications.tags.development')],
      views: 765,
      likes: 61,
      featured: false,
      related: [2, 6]
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-500 to-green-600' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' },
    red: { light: 'bg-red-50', dark: 'bg-red-600', text: 'text-red-600', border: 'border-red-200', gradient: 'from-red-500 to-red-600' },
    cyan: { light: 'bg-cyan-50', dark: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-200', gradient: 'from-cyan-500 to-cyan-600' },
    indigo: { light: 'bg-indigo-50', dark: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', gradient: 'from-indigo-500 to-indigo-600' },
    emerald: { light: 'bg-emerald-50', dark: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-500 to-emerald-600' }
  };

  // Фильтрация и сортировка
  const filteredPublications = publications
    .filter(pub => activeFilter === 'all' || pub.type === activeFilter)
    .filter(pub => 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.publisher.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'publisher':
          return a.publisher.localeCompare(b.publisher);
        default:
          return 0;
      }
    });

  const featuredPublications = publications.filter(pub => pub.featured);
  const relatedPublications = selectedPublication 
    ? publications.filter(pub => selectedPublication.related.includes(pub.id))
    : [];

  const toggleLike = (publicationId) => {
    setLikedPublications(prev => {
      const newSet = new Set(prev);
      if (newSet.has(publicationId)) {
        newSet.delete(publicationId);
      } else {
        newSet.add(publicationId);
      }
      return newSet;
    });
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

  const openPublicationDetail = (publication) => {
    setSelectedPublication(publication);
  };

  const closePublicationDetail = () => {
    setSelectedPublication(null);
  };

  const handleDownload = (downloadUrl, title) => {
    console.log('Downloading:', downloadUrl);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted');
    setShowCommentForm(false);
  };

  const handleAccreditationSubmit = (e) => {
    e.preventDefault();
    console.log('Accreditation request submitted');
    setShowAccreditationForm(false);
  };

  const PublicationModal = ({ publication, onClose }) => {
    if (!publication) return null;
    const colors = colorMap[publication.color];

    return (
      <motion.div
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent z-10 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {publication.title}
                </h3>
                <p className="text-white/80">
                  {publication.publisher} • {new Date(publication.date).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-y-auto max-h-full">
            <div className="p-6">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Основной контент */}
                <div className="lg:col-span-2">
                  {/* Превью и мета-информация */}
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="flex-1 text-center md:text-left">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{publication.publisher}</h4>
                        <p className="text-slate-600 mb-4">{publication.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {publication.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 bg-white rounded-full text-sm text-slate-600 border border-slate-200">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Полное описание */}
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{t('publications.details.fullDescription')}</h4>
                    <p className="text-slate-700 leading-relaxed">{publication.fullDescription}</p>
                  </div>

                  {/* Цитата */}
                  <div className="bg-slate-50 rounded-xl p-4 mb-6">
                    <h4 className="font-bold text-slate-900 mb-3">{t('publications.details.citation')}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {publication.citation}
                    </p>
                  </div>
                </div>

                {/* Боковая панель */}
                <div className="space-y-6">
                  {/* Детали публикации */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">{t('publications.details.publicationDetails')}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('publications.details.type')}:</span>
                        <span className="font-semibold text-slate-900">
                          {filters.find(f => f.id === publication.type)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('publications.details.language')}:</span>
                        <span className="font-semibold text-slate-900">{publication.language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('publications.details.pages')}:</span>
                        <span className="font-semibold text-slate-900">{publication.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('publications.details.size')}:</span>
                        <span className="font-semibold text-slate-900">{publication.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">{t('publications.details.views')}:</span>
                        <span className="font-semibold text-slate-900">{publication.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Авторы */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">{t('publications.details.authors')}</h4>
                    <div className="space-y-2">
                      {publication.authors.map((author, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-slate-700">{author}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Действия */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-4">{t('publications.details.actions')}</h4>
                    <div className="space-y-3">
                      <motion.button
                        onClick={() => handleDownload(publication.downloadUrl, publication.title)}
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t('publications.downloadPDF')}</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setShowCommentForm(true)}
                        className="w-full border border-blue-600 text-blue-600 px-4 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 inline-flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>{t('publications.comment')}</span>
                      </motion.button>

                      <motion.button
                        onClick={() => toggleLike(publication.id)}
                        className={`w-full px-4 py-3 rounded-xl font-semibold transition-colors duration-300 inline-flex items-center justify-center space-x-2 ${
                          likedPublications.has(publication.id)
                            ? 'bg-red-50 text-red-600 border border-red-200'
                            : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg 
                          className={`w-5 h-5 ${likedPublications.has(publication.id) ? 'fill-red-600' : 'fill-none'}`} 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>
                          {likedPublications.has(publication.id) 
                            ? t('publications.liked') 
                            : t('publications.like')
                          } ({publication.likes + (likedPublications.has(publication.id) ? 1 : 0)})
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Похожие публикации */}
              {relatedPublications.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">{t('publications.related.title')}</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedPublications.map(pub => (
                      <motion.div
                        key={pub.id}
                        className="bg-slate-50 rounded-xl p-4 cursor-pointer hover:bg-slate-100 transition-colors duration-300"
                        onClick={() => openPublicationDetail(pub)}
                        whileHover={{ scale: 1.02 }}
                      >
                        <h5 className="font-semibold text-slate-900 mb-2 line-clamp-2">{pub.title}</h5>
                        <p className="text-slate-600 text-sm line-clamp-2">{pub.description}</p>
                        <div className="flex items-center justify-between mt-3 text-xs text-slate-500">
                          <span>{pub.publisher}</span>
                          <span>{new Date(pub.date).toLocaleDateString()}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-5 w-32 h-32 bg-blue-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-5 w-40 h-40 bg-cyan-200 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-indigo-200 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
            <span className="text-blue-600 text-sm font-semibold">{t('publications.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('publications.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('publications.subtitle')}
          </motion.p>
        </motion.div>


        {/* Controls Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-8">
            {/* Search */}
            <div className="relative w-full lg:w-auto">
              <input
                type="text"
                placeholder={t('publications.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-80 px-4 py-3 pl-12 bg-white border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Sort and View Controls */}
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-white border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>

              <div className="flex bg-slate-100 rounded-2xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-xl transition-colors ${
                    viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-xl transition-colors ${
                    viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{filter.icon}</span>
                <span>{filter.label}</span>
                {filter.count && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activeFilter === filter.id ? 'bg-white text-blue-600' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {filter.count}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Featured Publications */}
        {featuredPublications.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('publications.featured.title')}</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPublications.map(publication => {
                const colors = colorMap[publication.color];
                return (
                  <motion.div
                    key={publication.id}
                    variants={cardVariants}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer"
                    whileHover={{ y: -5 }}
                    onClick={() => openPublicationDetail(publication)}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center`}>
                            {publication.featured ? <StarIcon className="w-6 h-6 text-amber-600" /> : <DocumentIcon className="w-6 h-6 text-slate-600" />}
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${colors.text}`}>
                              {filters.find(f => f.id === publication.type)?.label}
                            </span>
                            <p className="text-slate-500 text-sm">{publication.publisher}</p>
                          </div>
                        </div>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                          {t('publications.featured.badge')}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {publication.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {publication.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span>{new Date(publication.date).toLocaleDateString()}</span>
                          <span>{publication.views} {t('publications.views')}</span>
                          <span>{publication.likes} {t('publications.likes')}</span>
                        </div>
                        <motion.button
                          className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <span>{t('publications.readMore')}</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                    <div className={`h-2 ${colors.dark} w-full`}></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Publications Grid */}
        <motion.div
          layout
          className={`${
            viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
          } mb-12`}
        >
          <AnimatePresence>
            {filteredPublications.map((publication) => {
              const colors = colorMap[publication.color];
              return (
                <motion.div
                  key={publication.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => openPublicationDetail(publication)}
                >
                  {/* Превью публикации */}
                  <div 
                    className={`relative ${
                      viewMode === 'list' ? 'w-48 flex-shrink-0' : 'h-48'
                    } bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <p className="text-blue-600 font-semibold text-sm">{publication.publisher}</p>
                      </div>
                    </div>
                    
                    {/* Тип публикации */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
                        {filters.find(f => f.id === publication.type)?.label}
                      </span>
                    </div>
                    
                    {/* Язык */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 backdrop-blur-sm px-2 py-1 text-white text-xs font-medium rounded-full">
                        {publication.language}
                      </span>
                    </div>

                    {/* Overlay при наведении */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Информация о публикации */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {publication.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-sm mb-4 line-clamp-2">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <span>{new Date(publication.date).toLocaleDateString()}</span>
                      <span>{publication.pages} {t('publications.pages')}</span>
                      <span>{publication.fileSize}</span>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>{publication.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg 
                            className={`w-4 h-4 ${likedPublications.has(publication.id) ? 'fill-red-500 text-red-500' : 'text-slate-400'}`} 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{publication.likes + (likedPublications.has(publication.id) ? 1 : 0)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          openPublicationDetail(publication);
                        }}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                      >
                        <span>{t('publications.readMore')}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                      
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(publication.downloadUrl, publication.title);
                        }}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span>{t('publications.download')}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <svg className="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('publications.noResults.title')}</h3>
            <p className="text-slate-600 max-w-md mx-auto">{t('publications.noResults.description')}</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {t('publications.cta.title')}
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
              >
                {t('publications.cta.description')}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setShowCommentForm(true)}
                  className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('publications.cta.comment')}</span>
                </motion.button>
                
                <motion.button
                  onClick={() => setShowAccreditationForm(true)}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 inline-flex items-center space-x-3"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>{t('publications.cta.accreditation')}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Publication Modal */}
      <AnimatePresence>
        {selectedPublication && (
          <PublicationModal 
            publication={selectedPublication} 
            onClose={closePublicationDetail} 
          />
        )}
      </AnimatePresence>

      {/* Comment Form */}
      <AnimatePresence>
        {showCommentForm && (
          <CommentForm 
            onClose={() => setShowCommentForm(false)}
            onSubmit={handleCommentSubmit}
          />
        )}
      </AnimatePresence>

      {/* Accreditation Form */}
      <AnimatePresence>
        {showAccreditationForm && (
          <AccreditationForm 
            onClose={() => setShowAccreditationForm(false)}
            onSubmit={handleAccreditationSubmit}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Компонент формы комментария
const CommentForm = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('publications.forms.comment.title')}</h3>
          <p className="text-slate-600 mb-6">{t('publications.forms.comment.description')}</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.name')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.namePlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.comment.comment')}
              </label>
              <textarea
                required
                rows="4"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.comment.commentPlaceholder')}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.cancel')}
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.comment.submit')}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Компонент формы аккредитации
const AccreditationForm = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-md w-full bg-white rounded-2xl overflow-hidden"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('publications.forms.accreditation.title')}</h3>
          <p className="text-slate-600 mb-6">{t('publications.forms.accreditation.description')}</p>
          
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.media')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.mediaPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.name')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.namePlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.email')}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.emailPlaceholder')}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t('publications.forms.accreditation.event')}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                placeholder={t('publications.forms.accreditation.eventPlaceholder')}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.cancel')}
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('publications.forms.accreditation.submit')}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PressPublications;