import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('programs');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const { t } = useTranslation();

  const tabs = [
    { 
      id: 'programs', 
      label: t('education.tabs.programs'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    // { 
    //   id: 'scholarships', 
    //   label: t('education.tabs.scholarships'),
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    //     </svg>
    //   )
    // },
    // { 
    //   id: 'publications', 
    //   label: t('education.tabs.publications'),
    //   icon: (
    //     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //     </svg>
    //   )
    // },
    { 
      id: 'cases', 
      label: t('education.tabs.cases'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const programs = [
    {
      id: 'akylTirek',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('education.programs.akylTirek.title'),
      description: t('education.programs.akylTirek.description'),
      stats: t('education.programs.akylTirek.stats'),
      numericValue: 500,
      duration: 3000,
      details: t('education.programs.akylTirek.details', { returnObjects: true }),
      color: 'blue',
      fullDescription: t('education.programs.akylTirek.fullDescription'),
      requirements: t('education.programs.akylTirek.requirements', { returnObjects: true }),
      benefits: t('education.programs.akylTirek.benefits', { returnObjects: true })
    },
    {
      id: 'grants',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('education.programs.grants.title'),
      description: t('education.programs.grants.description'),
      stats: t('education.programs.grants.stats'),
      numericValue: 250,
      duration: 2500,
      details: t('education.programs.grants.details', { returnObjects: true }),
      color: 'green',
      fullDescription: t('education.programs.grants.fullDescription'),
      requirements: t('education.programs.grants.requirements', { returnObjects: true }),
      benefits: t('education.programs.grants.benefits', { returnObjects: true })
    },
    {
      id: 'centers',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('education.programs.centers.title'),
      description: t('education.programs.centers.description'),
      stats: t('education.programs.centers.stats'),
      numericValue: 10,
      duration: 2000,
      details: t('education.programs.centers.details', { returnObjects: true }),
      color: 'orange',
      fullDescription: t('education.programs.centers.fullDescription'),
      requirements: t('education.programs.centers.requirements', { returnObjects: true }),
      benefits: t('education.programs.centers.benefits', { returnObjects: true })
    }
  ];

  const scholarships = [
    {
      type: t('education.scholarships.undergraduate.title'),
      amount: t('education.scholarships.undergraduate.amount'),
      recipients: t('education.scholarships.undergraduate.recipients'),
      description: t('education.scholarships.undergraduate.description'),
      total: t('education.scholarships.undergraduate.total'),
      duration: 3,
      features: t('education.scholarships.undergraduate.features', { returnObjects: true })
    },
    {
      type: t('education.scholarships.masters.title'),
      amount: t('education.scholarships.masters.amount'),
      recipients: t('education.scholarships.masters.recipients'),
      description: t('education.scholarships.masters.description'),
      total: t('education.scholarships.masters.total'),
      duration: 2,
      features: t('education.scholarships.masters.features', { returnObjects: true })
    },
    {
      type: t('education.scholarships.phd.title'),
      amount: t('education.scholarships.phd.amount'),
      recipients: t('education.scholarships.phd.recipients'),
      description: t('education.scholarships.phd.description'),
      total: t('education.scholarships.phd.total'),
      duration: 4,
      features: t('education.scholarships.phd.features', { returnObjects: true })
    }
  ];

  const publications = [
    {
      title: t('education.publications.book1.title'),
      author: t('education.publications.book1.author'),
      year: t('education.publications.book1.year'),
      type: t('education.publications.book1.type'),
      description: t('education.publications.book1.description'),
      pages: t('education.publications.book1.pages'),
      download: t('education.publications.book1.download')
    },
    {
      title: t('education.publications.book2.title'),
      author: t('education.publications.book2.author'),
      year: t('education.publications.book2.year'),
      type: t('education.publications.book2.type'),
      description: t('education.publications.book2.description'),
      pages: t('education.publications.book2.pages'),
      download: t('education.publications.book2.download')
    },
    {
      title: t('education.publications.book3.title'),
      author: t('education.publications.book3.author'),
      year: t('education.publications.book3.year'),
      type: t('education.publications.book3.type'),
      description: t('education.publications.book3.description'),
      pages: t('education.publications.book3.pages'),
      download: t('education.publications.book3.download')
    },
    {
      title: t('education.publications.book4.title'),
      author: t('education.publications.book4.author'),
      year: t('education.publications.book4.year'),
      type: t('education.publications.book4.type'),
      description: t('education.publications.book4.description'),
      pages: t('education.publications.book4.pages'),
      download: t('education.publications.book4.download')
    }
  ];

  const cases = [
    {
      id: 'graduate1',
      name: t('education.cases.graduate1.name'),
      position: t('education.cases.graduate1.position'),
      story: t('education.cases.graduate1.story'),
      quote: t('education.cases.graduate1.quote'),
      achievements: t('education.cases.graduate1.achievements', { returnObjects: true }),
      image: '/api/placeholder/120/120',
      type: 'graduate'
    },
    {
      id: 'graduate2',
      name: t('education.cases.graduate2.name'),
      position: t('education.cases.graduate2.position'),
      story: t('education.cases.graduate2.story'),
      quote: t('education.cases.graduate2.quote'),
      achievements: t('education.cases.graduate2.achievements', { returnObjects: true }),
      image: '/api/placeholder/120/120',
      type: 'graduate'
    },
    {
      id: 'school1',
      name: t('education.cases.school1.name'),
      location: t('education.cases.school1.location'),
      students: t('education.cases.school1.students'),
      achievements: t('education.cases.school1.achievements'),
      description: t('education.cases.school1.description'),
      programs: t('education.cases.school1.programs', { returnObjects: true }),
      type: 'school'
    }
  ];

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      medium: 'bg-blue-100',
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    green: { 
      light: 'bg-green-50', 
      medium: 'bg-green-100',
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    orange: { 
      light: 'bg-orange-50', 
      medium: 'bg-orange-100',
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-amber-500'
    },
    purple: { 
      light: 'bg-purple-50', 
      medium: 'bg-purple-100',
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-violet-500'
    }
  };

  // Анимация счетчика
  const Counter = ({ value, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (isInView && !isVisible) {
        setIsVisible(true);
        let start = 0;
        const end = typeof value === 'number' ? value : parseFloat(value);
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.ceil(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, isVisible, value, duration]);

    if (typeof value !== 'number' && isNaN(parseFloat(value))) {
      return <span>{value}</span>;
    }

    return (
      <motion.span
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {Math.floor(count).toLocaleString()}{suffix}
      </motion.span>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      rotateX: -15
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
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

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleApply = () => {
    // Логика подачи заявки
    console.log('Apply for grant/program');
  };

  const handleDownloadPublication = (publication) => {
    // Логика скачивания публикации
    console.log('Download publication:', publication.title);
  };

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProgram(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'programs':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => {
              const colors = colorMap[program.color];
              
              return (
                <motion.div
                  key={program.id}
                  variants={cardVariants}
                  className="group relative"
                  whileHover="hover"
                >
                  <motion.div
                    className={`relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 ${colors.border} shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col cursor-pointer overflow-hidden`}
                  >
                    {/* Акцентная градиентная полоса */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                    <div className="flex items-start space-x-4 mb-4">
                      <motion.div 
                        className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                        }}
                      >
                        <div className={colors.text}>
                          {program.icon}
                        </div>
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                          {program.title}
                        </h3>
                        
                        <div className="text-3xl font-black text-slate-900 mb-2">
                          <Counter 
                            value={program.numericValue} 
                            duration={program.duration}
                            suffix="+"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed flex-grow mb-4">
                      {program.description}
                    </p>

                    {/* Кнопка для подробностей */}
                    <div className="flex items-center justify-between mt-auto">
                      <button 
                        onClick={() => openProgramModal(program)}
                        className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                      >
                        <span>{t('education.more')}</span>
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          transition={{ duration: 0.3 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <motion.div 
                        className={`w-3 h-3 rounded-full ${colors.medium}`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        );

      case 'scholarships':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={scholarship.type}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {scholarship.type}
                    </h3>
                    <p className="text-slate-600 mb-4 text-lg leading-relaxed">
                      {scholarship.description}
                    </p>
                    
                    {/* Особенности стипендии */}
                    {Array.isArray(scholarship.features) && (
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {scholarship.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-blue-600 mb-1">
                        {scholarship.amount}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t('education.scholarships.amountLabel')}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-3xl font-black text-green-600 mb-1">
                        {scholarship.recipients}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t('education.scholarships.recipientsLabel')}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-black text-purple-600 mb-1">
                        {scholarship.total}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t('education.scholarships.totalLabel')}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'publications':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                      {publication.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                      <span className="font-medium">{publication.author}</span>
                      <span>•</span>
                      <span>{publication.year}</span>
                      <span>•</span>
                      <span>{publication.pages}</span>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {publication.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                        {publication.type}
                      </span>
                      
                      <motion.button
                        onClick={() => handleDownloadPublication(publication)}
                        className="flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{publication.download}</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'cases':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.id}
                variants={cardVariants}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                {caseItem.type === 'graduate' ? (
                  // История выпускника
                  <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {caseItem.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {caseItem.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-lg mb-4">
                        {caseItem.position}
                      </p>
                      
                      <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        {caseItem.story}
                      </p>

                      {/* Цитата */}
                      {caseItem.quote && (
                        <motion.blockquote 
                          className="border-l-4 border-orange-500 pl-4 py-2 mb-6"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-slate-700 italic text-lg">"{caseItem.quote}"</p>
                        </motion.blockquote>
                      )}

                      {/* Достижения */}
                      {Array.isArray(caseItem.achievements) && (
                        <div className="grid md:grid-cols-2 gap-3">
                          {caseItem.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-slate-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // История школы/центра
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {caseItem.name}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      {caseItem.description}
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-orange-600 mb-2">
                          {caseItem.location}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          {t('education.cases.locationLabel')}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-3xl font-black text-green-600 mb-2">
                          {caseItem.students}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          {t('education.cases.studentsLabel')}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-black text-purple-600 mb-2">
                          {caseItem.achievements}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          {t('education.cases.achievementsLabel')}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-black text-blue-600 mb-2">
                          {caseItem.programs?.length || 0}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          {t('education.cases.programsLabel')}
                        </div>
                      </div>
                    </div>

                    {/* Программы центра */}
                    {Array.isArray(caseItem.programs) && (
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">
                          {t('education.cases.programsTitle')}
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {caseItem.programs.map((program, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl px-4 py-3 text-slate-700 text-sm">
                              {program}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg mb-8"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              {t('education.badge')}
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              {t('education.title')}
            </span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="w-6 h-6 rounded-full border-4 border-blue-200 animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            {t('education.lead')}
          </motion.p>
        </motion.div>

        {/* Табы */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-white hover:shadow-lg border border-slate-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                <span className="text-lg">{tab.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Контент табов */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-4xl p-12 md:p-16 border-2 border-white shadow-2xl relative overflow-hidden">
            {/* Фоновые декоративные элементы */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-100 rounded-full opacity-50"></div>
            
            <div className="relative z-10">
              <motion.h3 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {t('education.cta.title')}
                </span>
              </motion.h3>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
              >
                {t('education.cta.description')}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  onClick={handleApply}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center space-x-4 group relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px -10px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Эффект блеска */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-lg">{t('education.cta.button')}</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                </motion.button>

                <motion.button
                  className="bg-white text-slate-700 px-10 py-5 rounded-2xl font-bold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{t('education.cta.contact')}</span>
                </motion.button>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500 mt-8 flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('education.cta.deadline')}</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Модальное окно для программ */}
      <AnimatePresence>
        {modalOpen && selectedProgram && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProgram && (
                  <>
                    <div className={`relative p-8 border-b-4 ${colorMap[selectedProgram.color].border}`}>
                      <div className="flex items-start space-x-6 mb-6">
                        <div className={`flex-shrink-0 w-20 h-20 ${colorMap[selectedProgram.color].light} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <div className={colorMap[selectedProgram.color].text}>
                            {selectedProgram.icon}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`text-3xl font-bold mb-3 ${colorMap[selectedProgram.color].text}`}>
                            {selectedProgram.title}
                          </h3>
                          
                          <div className="text-5xl font-black text-slate-900 mb-4">
                            {selectedProgram.numericValue.toLocaleString()}+
                          </div>
                          
                          <p className="text-xl text-slate-600 leading-relaxed">
                            {selectedProgram.description}
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors duration-200"
                      >
                        <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="p-8">
                      {/* Полное описание */}
                      {selectedProgram.fullDescription && (
                        <div className="mb-8">
                          <h4 className="text-2xl font-bold text-slate-900 mb-4">
                            {t('education.modal.about')}
                          </h4>
                          <p className="text-slate-700 leading-relaxed text-lg">
                            {selectedProgram.fullDescription}
                          </p>
                        </div>
                      )}

                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        {/* Требования */}
                        {selectedProgram.requirements && Array.isArray(selectedProgram.requirements) && (
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">
                              {t('education.modal.requirements')}
                            </h4>
                            <div className="space-y-3">
                              {selectedProgram.requirements.map((requirement, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full ${colorMap[selectedProgram.color].medium} mt-2 flex-shrink-0`}></div>
                                  <p className="text-slate-700">{requirement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Преимущества */}
                        {selectedProgram.benefits && Array.isArray(selectedProgram.benefits) && (
                          <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">
                              {t('education.modal.benefits')}
                            </h4>
                            <div className="space-y-3">
                              {selectedProgram.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 rounded-full ${colorMap[selectedProgram.color].medium} mt-2 flex-shrink-0`}></div>
                                  <p className="text-slate-700">{benefit}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Детали */}
                      {selectedProgram.details && Array.isArray(selectedProgram.details) && (
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-slate-900 mb-4">
                            {t('education.modal.details')}
                          </h4>
                          <div className="space-y-3">
                            {selectedProgram.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start space-x-3 bg-slate-50 rounded-2xl p-4">
                                <div className={`w-2 h-2 rounded-full ${colorMap[selectedProgram.color].medium} mt-2 flex-shrink-0`}></div>
                                <p className="text-slate-700">{detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Кнопки действий */}
                      <div className="flex gap-4 pt-6 border-t border-slate-200">
                        <button
                          onClick={handleApply}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:from-blue-700 hover:to-cyan-700"
                        >
                          {t('education.modal.apply')}
                        </button>
                        <button
                          onClick={closeModal}
                          className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-4 rounded-2xl font-bold transition-colors duration-200"
                        >
                          {t('education.modal.close')}
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivitiesEducation;