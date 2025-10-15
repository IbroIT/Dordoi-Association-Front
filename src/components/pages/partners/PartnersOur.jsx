import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PartnersOur = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('partners.categories.all') },
    { id: 'government', label: t('partners.categories.government') },
    { id: 'business', label: t('partners.categories.business') },
    { id: 'international', label: t('partners.categories.international') },
    { id: 'ngo', label: t('partners.categories.ngo') }
  ];

  const partners = [
    {
      id: 1,
      name: t('partners.items.ministryEconomy.name'),
      description: t('partners.items.ministryEconomy.description'),
      category: 'government',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.ministryEconomy.projects.0'),
        t('partners.items.ministryEconomy.projects.1')
      ],
      links: [
        { label: t('partners.links.news'), url: '/news/cooperation-agreement' },
        { label: t('partners.links.report'), url: '/reports/economic-development' }
      ],
      years: '5+',
      color: 'blue'
    },
    {
      id: 2,
      name: t('partners.items.undp.name'),
      description: t('partners.items.undp.description'),
      category: 'international',
      country: t('partners.countries.international'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.undp.projects.0'),
        t('partners.items.undp.projects.1')
      ],
      links: [
        { label: t('partners.links.project'), url: '/projects/sustainable-development' },
        { label: t('partners.links.news'), url: '/news/undp-partnership' }
      ],
      years: '3+',
      color: 'green'
    },
    {
      id: 3,
      name: t('partners.items.silkroadGroup.name'),
      description: t('partners.items.silkroadGroup.description'),
      category: 'business',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.silkroadGroup.projects.0'),
        t('partners.items.silkroadGroup.projects.1')
      ],
      links: [
        { label: t('partners.links.news'), url: '/news/joint-venture' },
        { label: t('partners.links.caseStudy'), url: '/cases/logistics-optimization' }
      ],
      years: '7+',
      color: 'orange'
    },
    {
      id: 4,
      name: t('partners.items.greenFuture.name'),
      description: t('partners.items.greenFuture.description'),
      category: 'ngo',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.greenFuture.projects.0'),
        t('partners.items.greenFuture.projects.1')
      ],
      links: [
        { label: t('partners.links.project'), url: '/projects/environmental-protection' },
        { label: t('partners.links.report'), url: '/reports/eco-initiatives' }
      ],
      years: '2+',
      color: 'green'
    },
    {
      id: 5,
      name: t('partners.items.europeanUnion.name'),
      description: t('partners.items.europeanUnion.description'),
      category: 'international',
      country: t('partners.countries.eu'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.europeanUnion.projects.0'),
        t('partners.items.europeanUnion.projects.1')
      ],
      links: [
        { label: t('partners.links.project'), url: '/projects/eu-funding' },
        { label: t('partners.links.news'), url: '/news/eu-partnership' }
      ],
      years: '4+',
      color: 'blue'
    },
    {
      id: 6,
      name: t('partners.items.techInnovations.name'),
      description: t('partners.items.techInnovations.description'),
      category: 'business',
      country: t('partners.countries.usa'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.techInnovations.projects.0'),
        t('partners.items.techInnovations.projects.1')
      ],
      links: [
        { label: t('partners.links.caseStudy'), url: '/cases/digital-transformation' },
        { label: t('partners.links.news'), url: '/news/technology-partnership' }
      ],
      years: '2+',
      color: 'purple'
    },
    {
      id: 7,
      name: t('partners.items.ministryEducation.name'),
      description: t('partners.items.ministryEducation.description'),
      category: 'government',
      country: t('partners.countries.kg'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.ministryEducation.projects.0'),
        t('partners.items.ministryEducation.projects.1')
      ],
      links: [
        { label: t('partners.links.project'), url: '/projects/educational-program' },
        { label: t('partners.links.news'), url: '/news/education-initiative' }
      ],
      years: '6+',
      color: 'red'
    },
    {
      id: 8,
      name: t('partners.items.careInternational.name'),
      description: t('partners.items.careInternational.description'),
      category: 'ngo',
      country: t('partners.countries.international'),
      logo: '/api/placeholder/80/80',
      projects: [
        t('partners.items.careInternational.projects.0'),
        t('partners.items.careInternational.projects.1')
      ],
      links: [
        { label: t('partners.links.project'), url: '/projects/humanitarian-aid' },
        { label: t('partners.links.report'), url: '/reports/social-impact' }
      ],
      years: '3+',
      color: 'cyan'
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', dark: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200' },
    green: { light: 'bg-green-50', dark: 'bg-green-600', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', dark: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-200' },
    purple: { light: 'bg-purple-50', dark: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200' },
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

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  const stats = [
    {
      value: t('partners.stats.partners.value'),
      label: t('partners.stats.partners.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      value: t('partners.stats.countries.value'),
      label: t('partners.stats.countries.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      value: t('partners.stats.projects.value'),
      label: t('partners.stats.projects.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      value: t('partners.stats.years.value'),
      label: t('partners.stats.years.label'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

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
            <span className="text-blue-600 text-sm font-semibold">{t('partners.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('partners.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('partners.subtitle')}
          </motion.p>
        </motion.div>

        {/* Статистика */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center group hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              
              <div className="text-slate-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
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

          {/* Сетка партнеров */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredPartners.map((partner) => {
              const colors = colorMap[partner.color];
              return (
                <motion.div
                  key={partner.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Верхняя часть с логотипом и основной информацией */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center">
                            <div className="text-blue-600 font-bold text-sm">
                              {partner.name.split(' ').map(word => word[0]).join('').toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-1">
                            {partner.name}
                          </h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
                              {partner.country}
                            </span>
                            <span className="text-slate-500 text-xs">
                              {partner.years}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {partner.description}
                    </p>

                    {/* Проекты */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">
                        {t('partners.projectsTitle')}:
                      </h4>
                      <ul className="space-y-1">
                        {partner.projects.slice(0, 2).map((project, index) => (
                          <li key={index} className="text-xs text-slate-600 flex items-start">
                            <svg className="w-3 h-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="line-clamp-1">{project}</span>
                          </li>
                        ))}
                        {partner.projects.length > 2 && (
                          <li className="text-xs text-blue-600 font-medium">
                            +{partner.projects.length - 2} {t('partners.moreProjects')}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Нижняя часть со ссылками */}
                  <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
                        {categories.find(cat => cat.id === partner.category)?.label}
                      </span>
                      
                      <div className="flex space-x-2">
                        {partner.links.slice(0, 2).map((link, index) => (
                          <motion.a
                            key={index}
                            href={link.url}
                            className="text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.label}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* CTA секция */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              {t('partners.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('partners.cta.description')}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{t('partners.cta.becomePartner')}</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{t('partners.cta.contact')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersOur;