import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('education');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [counterValues, setCounterValues] = useState({});
  const { t } = useTranslation();

  const tabs = [
    { 
      id: 'education', 
      label: t('education.tabs.education'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l-9-5m9 5l9-5m-9 5v-6m0 0l9-5m-9 5l-9-5" />
        </svg>
      )
    },
    { 
      id: 'science', 
      label: t('education.tabs.science'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    { 
      id: 'talents', 
      label: t('education.tabs.talents'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    { 
      id: 'centers', 
      label: t('education.tabs.centers'),
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const programs = [
    {
      id: 'educationSupport',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6l-9-5m9 5l9-5m-9 5v-6m0 0l9-5m-9 5l-9-5" />
        </svg>
      ),
      title: t('education.programs.educationSupport.title'),
      description: t('education.programs.educationSupport.description'),
      stats: t('education.programs.educationSupport.stats'),
      numericValue: 150,
      duration: 3000,
      details: t('education.programs.educationSupport.details', { returnObjects: true }),
      color: 'blue',
      fullDescription: t('education.programs.educationSupport.fullDescription'),
      achievements: t('education.programs.educationSupport.achievements', { returnObjects: true })
    },
    {
      id: 'scienceProjects',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: t('education.programs.scienceProjects.title'),
      description: t('education.programs.scienceProjects.description'),
      stats: t('education.programs.scienceProjects.stats'),
      numericValue: 50,
      duration: 2500,
      details: t('education.programs.scienceProjects.details', { returnObjects: true }),
      color: 'green',
      fullDescription: t('education.programs.scienceProjects.fullDescription'),
      achievements: t('education.programs.scienceProjects.achievements', { returnObjects: true })
    },
    {
      id: 'talentDevelopment',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: t('education.programs.talentDevelopment.title'),
      description: t('education.programs.talentDevelopment.description'),
      stats: t('education.programs.talentDevelopment.stats'),
      numericValue: 5000,
      duration: 3500,
      details: t('education.programs.talentDevelopment.details', { returnObjects: true }),
      color: 'orange',
      fullDescription: t('education.programs.talentDevelopment.fullDescription'),
      achievements: t('education.programs.talentDevelopment.achievements', { returnObjects: true })
    },
    {
      id: 'educationCenters',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('education.programs.educationCenters.title'),
      description: t('education.programs.educationCenters.description'),
      stats: t('education.programs.educationCenters.stats'),
      numericValue: 25,
      duration: 2000,
      details: t('education.programs.educationCenters.details', { returnObjects: true }),
      color: 'purple',
      fullDescription: t('education.programs.educationCenters.fullDescription'),
      achievements: t('education.programs.educationCenters.achievements', { returnObjects: true })
    }
  ];

  const publications = [
    {
      title: t('education.publications.research1.title'),
      author: t('education.publications.research1.author'),
      year: t('education.publications.research1.year'),
      type: t('education.publications.research1.type'),
      description: t('education.publications.research1.description'),
      pages: t('education.publications.research1.pages'),
      download: t('education.publications.research1.download')
    },
    {
      title: t('education.publications.monograph1.title'),
      author: t('education.publications.monograph1.author'),
      year: t('education.publications.monograph1.year'),
      type: t('education.publications.monograph1.type'),
      description: t('education.publications.monograph1.description'),
      pages: t('education.publications.monograph1.pages'),
      download: t('education.publications.monograph1.download')
    },
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
      title: t('education.publications.research2.title'),
      author: t('education.publications.research2.author'),
      year: t('education.publications.research2.year'),
      type: t('education.publications.research2.type'),
      description: t('education.publications.research2.description'),
      pages: t('education.publications.research2.pages'),
      download: t('education.publications.research2.download')
    }
  ];

  const successStories = [
    {
      id: 'school1',
      name: t('education.stories.school1.name'),
      location: t('education.stories.school1.location'),
      students: t('education.stories.school1.students'),
      achievements: t('education.stories.school1.achievements'),
      description: t('education.stories.school1.description'),
      improvements: t('education.stories.school1.improvements', { returnObjects: true }),
      type: 'school'
    },
    {
      id: 'scientist1',
      name: t('education.stories.scientist1.name'),
      position: t('education.stories.scientist1.position'),
      story: t('education.stories.scientist1.story'),
      quote: t('education.stories.scientist1.quote'),
      achievements: t('education.stories.scientist1.achievements', { returnObjects: true }),
      type: 'scientist'
    },
    {
      id: 'student1',
      name: t('education.stories.student1.name'),
      position: t('education.stories.student1.position'),
      story: t('education.stories.student1.story'),
      quote: t('education.stories.student1.quote'),
      achievements: t('education.stories.student1.achievements', { returnObjects: true }),
      type: 'student'
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
    console.log('Apply for program');
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
      case 'education':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Основная информация */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                {t('education.sections.education.title')}
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('education.sections.education.description')}
              </p>
            </div>

            {/* Программы поддержки образования */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {programs.filter(p => p.id === 'educationSupport' || p.id === 'educationCenters').map((program, index) => {
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
            </div>
          </motion.div>
        );

      case 'science':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Основная информация */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-green-200 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                {t('education.sections.science.title')}
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('education.sections.science.description')}
              </p>
            </div>

            {/* Научные проекты */}
            <div className="grid md:grid-cols-2 gap-8">
              {programs.filter(p => p.id === 'scienceProjects').map((program, index) => {
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
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
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

                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          onClick={() => openProgramModal(program)}
                          className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                        >
                          <span>{t('education.more')}</span>
                          <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Публикации */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {t('education.publications.title')}
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.slice(0, 2).map((publication, index) => (
                  <motion.div
                    key={publication.title}
                    variants={cardVariants}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
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
                        </div>
                        
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {publication.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-600 text-sm font-semibold rounded-full">
                            {publication.type}
                          </span>
                          
                          <motion.button
                            onClick={() => handleDownloadPublication(publication)}
                            className="flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
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
              </div>
            </div>
          </motion.div>
        );

      case 'talents':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Основная информация */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-200 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                {t('education.sections.talents.title')}
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('education.sections.talents.description')}
              </p>
            </div>

            {/* Программы развития талантов */}
            <div className="grid md:grid-cols-2 gap-8">
              {programs.filter(p => p.id === 'talentDevelopment').map((program, index) => {
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
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
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

                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          onClick={() => openProgramModal(program)}
                          className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                        >
                          <span>{t('education.more')}</span>
                          <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Истории успеха */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {t('education.stories.title')}
              </h4>
              <div className="space-y-6">
                {successStories.filter(s => s.type === 'student').map((story, index) => (
                  <motion.div
                    key={story.id}
                    variants={cardVariants}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {story.name}
                        </h3>
                        <p className="text-orange-600 font-semibold text-lg mb-4">
                          {story.position}
                        </p>
                        
                        <p className="text-slate-600 leading-relaxed text-lg mb-6">
                          {story.story}
                        </p>

                        {story.quote && (
                          <motion.blockquote 
                            className="border-l-4 border-orange-500 pl-4 py-2 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <p className="text-slate-700 italic text-lg">"{story.quote}"</p>
                          </motion.blockquote>
                        )}

                        {Array.isArray(story.achievements) && (
                          <div className="grid md:grid-cols-2 gap-3">
                            {story.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                                <span className="text-slate-700">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 'centers':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Основная информация */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                {t('education.sections.centers.title')}
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                {t('education.sections.centers.description')}
              </p>
            </div>

            {/* Образовательные центры */}
            <div className="grid md:grid-cols-2 gap-8">
              {programs.filter(p => p.id === 'educationCenters').map((program, index) => {
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
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.gradient}`}></div>

                      <div className="flex items-start space-x-4 mb-4">
                        <motion.div 
                          className={`flex-shrink-0 w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center group-hover:${colors.medium} transition-all duration-300 shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
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

                      <div className="flex items-center justify-between mt-auto">
                        <button 
                          onClick={() => openProgramModal(program)}
                          className={`flex items-center space-x-2 ${colors.text} font-semibold text-sm hover:underline`}
                        >
                          <span>{t('education.more')}</span>
                          <motion.svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Примеры центров */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {t('education.stories.centersTitle')}
              </h4>
              <div className="space-y-6">
                {successStories.filter(s => s.type === 'school').map((center, index) => (
                  <motion.div
                    key={center.id}
                    variants={cardVariants}
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        {center.name}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed text-lg mb-6">
                        {center.description}
                      </p>
                      
                      <div className="grid md:grid-cols-4 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-black text-purple-600 mb-2">
                            {center.location}
                          </div>
                          <div className="text-sm text-slate-500 font-medium">
                            {t('education.stories.locationLabel')}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-3xl font-black text-green-600 mb-2">
                            {center.students}
                          </div>
                          <div className="text-sm text-slate-500 font-medium">
                            {t('education.stories.studentsLabel')}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-black text-orange-600 mb-2">
                            {center.achievements}
                          </div>
                          <div className="text-sm text-slate-500 font-medium">
                            {t('education.stories.achievementsLabel')}
                          </div>
                        </div>

                        <div className="text-center">
                          <div className="text-2xl font-black text-blue-600 mb-2">
                            {center.improvements?.length || 0}
                          </div>
                          <div className="text-sm text-slate-500 font-medium">
                            {t('education.stories.improvementsLabel')}
                          </div>
                        </div>
                      </div>

                      {Array.isArray(center.improvements) && (
                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 mb-3">
                            {t('education.stories.improvementsTitle')}
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {center.improvements.map((improvement, idx) => (
                              <div key={idx} className="bg-purple-50 rounded-xl px-4 py-3 text-purple-700 text-sm">
                                {improvement}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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

                      {/* Достижения */}
                      {selectedProgram.achievements && Array.isArray(selectedProgram.achievements) && (
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-slate-900 mb-4">
                            {t('education.modal.achievements')}
                          </h4>
                          <div className="space-y-3">
                            {selectedProgram.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start space-x-3 bg-slate-50 rounded-2xl p-4">
                                <div className={`w-2 h-2 rounded-full ${colorMap[selectedProgram.color].medium} mt-2 flex-shrink-0`}></div>
                                <p className="text-slate-700">{achievement}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Детали */}
                      {selectedProgram.details && Array.isArray(selectedProgram.details) && (
                        <div className="mb-8">
                          <h4 className="text-xl font-bold text-slate-900 mb-4">
                            {t('education.modal.details')}
                          </h4>
                          <div className="space-y-3">
                            {selectedProgram.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start space-x-3">
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