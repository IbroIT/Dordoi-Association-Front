import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState('programs');
  const { t } = useTranslation();

  const tabs = [
    { id: 'programs', label: t('education.tabs.programs') },
    { id: 'scholarships', label: t('education.tabs.scholarships') },
    { id: 'publications', label: t('education.tabs.publications') },
    { id: 'cases', label: t('education.tabs.cases') }
  ];

  const programs = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('education.programs.akylTirek.title'),
      description: t('education.programs.akylTirek.description'),
      stats: t('education.programs.akylTirek.stats'),
      color: 'blue'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: t('education.programs.grants.title'),
      description: t('education.programs.grants.description'),
      stats: t('education.programs.grants.stats'),
      color: 'green'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('education.programs.centers.title'),
      description: t('education.programs.centers.description'),
      stats: t('education.programs.centers.stats'),
      color: 'orange'
    }
  ];

  const scholarships = [
    {
      type: t('education.scholarships.undergraduate.title'),
      amount: t('education.scholarships.undergraduate.amount'),
      recipients: t('education.scholarships.undergraduate.recipients'),
      description: t('education.scholarships.undergraduate.description')
    },
    {
      type: t('education.scholarships.masters.title'),
      amount: t('education.scholarships.masters.amount'),
      recipients: t('education.scholarships.masters.recipients'),
      description: t('education.scholarships.masters.description')
    },
    {
      type: t('education.scholarships.phd.title'),
      amount: t('education.scholarships.phd.amount'),
      recipients: t('education.scholarships.phd.recipients'),
      description: t('education.scholarships.phd.description')
    }
  ];

  const publications = [
    {
      title: t('education.publications.book1.title'),
      author: t('education.publications.book1.author'),
      year: t('education.publications.book1.year'),
      type: t('education.publications.book1.type')
    },
    {
      title: t('education.publications.book2.title'),
      author: t('education.publications.book2.author'),
      year: t('education.publications.book2.year'),
      type: t('education.publications.book2.type')
    },
    {
      title: t('education.publications.book3.title'),
      author: t('education.publications.book3.author'),
      year: t('education.publications.book3.year'),
      type: t('education.publications.book3.type')
    },
    {
      title: t('education.publications.book4.title'),
      author: t('education.publications.book4.author'),
      year: t('education.publications.book4.year'),
      type: t('education.publications.book4.type')
    }
  ];

  const cases = [
    {
      name: t('education.cases.graduate1.name'),
      position: t('education.cases.graduate1.position'),
      story: t('education.cases.graduate1.story'),
      image: '/api/placeholder/80/80'
    },
    {
      name: t('education.cases.graduate2.name'),
      position: t('education.cases.graduate2.position'),
      story: t('education.cases.graduate2.story'),
      image: '/api/placeholder/80/80'
    },
    {
      name: t('education.cases.school1.name'),
      location: t('education.cases.school1.location'),
      students: t('education.cases.school1.students'),
      achievements: t('education.cases.school1.achievements')
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' }
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

  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const handleApply = () => {
    // Логика подачи заявки
    console.log('Apply for grant/program');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'programs':
        return (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((program, index) => {
              const colors = colorMap[program.color];
              return (
                <motion.div
                  key={program.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 ${colors.light} rounded-xl flex items-center justify-center mb-4 group-hover:${colors.dark} transition-colors duration-300`}>
                    <div className={colors.text}>
                      {program.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                    {program.title}
                  </h3>
                  
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    {program.stats}
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {program.description}
                  </p>
                  
                  <div className={`w-full h-1 ${colors.dark} rounded-full mt-4`}></div>
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
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ x: 5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {scholarship.type}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {scholarship.description}
                    </p>
                  </div>
                  
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {scholarship.amount}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t('education.scholarships.amountLabel')}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {scholarship.recipients}
                      </div>
                      <div className="text-sm text-slate-500">
                        {t('education.scholarships.recipientsLabel')}
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
            className="grid md:grid-cols-2 gap-6"
          >
            {publications.map((publication, index) => (
              <motion.div
                key={publication.title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {publication.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-2">
                      <span>{publication.author}</span>
                      <span>•</span>
                      <span>{publication.year}</span>
                    </div>
                    
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {publication.type}
                    </span>
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
            className="space-y-6"
          >
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                {'position' in caseItem ? (
                  // История выпускника
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                      {caseItem.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {caseItem.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">
                        {caseItem.position}
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        {caseItem.story}
                      </p>
                    </div>
                  </div>
                ) : (
                  // История школы/центра
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {caseItem.name}
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">
                          {caseItem.location}
                        </div>
                        <div className="text-sm text-slate-500">
                          {t('education.cases.locationLabel')}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">
                          {caseItem.students}
                        </div>
                        <div className="text-sm text-slate-500">
                          {t('education.cases.studentsLabel')}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">
                          {caseItem.achievements}
                        </div>
                        <div className="text-sm text-slate-500">
                          {t('education.cases.achievementsLabel')}
                        </div>
                      </div>
                    </div>
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
            <span className="text-blue-600 text-sm font-semibold">{t('education.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('education.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('education.lead')}
          </motion.p>
        </motion.div>

        {/* Табы */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Контент табов */}
          <div className="min-h-[400px]">
            {renderTabContent()}
          </div>
        </motion.div>

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
              {t('education.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('education.cta.description')}
            </motion.p>

            <motion.button
              onClick={handleApply}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t('education.cta.button')}</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesEducation;