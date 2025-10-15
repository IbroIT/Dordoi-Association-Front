import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeDepartment, setActiveDepartment] = useState('press');
  const { t } = useTranslation();

  const departments = [
    {
      id: 'press',
      name: t('contactsInfo.departments.press.name'),
      description: t('contactsInfo.departments.press.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      contacts: [
        {
          type: 'email',
          value: t('contactsInfo.departments.press.contacts.email'),
          label: t('contactsInfo.types.email')
        },
        {
          type: 'phone',
          value: t('contactsInfo.departments.press.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'person',
          value: t('contactsInfo.departments.press.contacts.contactPerson'),
          label: t('contactsInfo.types.contactPerson')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.press.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        }
      ],
      color: 'blue'
    },
    {
      id: 'investments',
      name: t('contactsInfo.departments.investments.name'),
      description: t('contactsInfo.departments.investments.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      contacts: [
        {
          type: 'email',
          value: t('contactsInfo.departments.investments.contacts.email'),
          label: t('contactsInfo.types.email')
        },
        {
          type: 'phone',
          value: t('contactsInfo.departments.investments.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'person',
          value: t('contactsInfo.departments.investments.contacts.contactPerson'),
          label: t('contactsInfo.types.contactPerson')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.investments.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        }
      ],
      color: 'green'
    },
    {
      id: 'hr',
      name: t('contactsInfo.departments.hr.name'),
      description: t('contactsInfo.departments.hr.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      contacts: [
        {
          type: 'email',
          value: t('contactsInfo.departments.hr.contacts.email'),
          label: t('contactsInfo.types.email')
        },
        {
          type: 'phone',
          value: t('contactsInfo.departments.hr.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.hr.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        },
        {
          type: 'website',
          value: t('contactsInfo.departments.hr.contacts.careers'),
          label: t('contactsInfo.types.careers')
        }
      ],
      color: 'purple'
    },
    {
      id: 'commercial',
      name: t('contactsInfo.departments.commercial.name'),
      description: t('contactsInfo.departments.commercial.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      contacts: [
        {
          type: 'email',
          value: t('contactsInfo.departments.commercial.contacts.email'),
          label: t('contactsInfo.types.email')
        },
        {
          type: 'phone',
          value: t('contactsInfo.departments.commercial.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'person',
          value: t('contactsInfo.departments.commercial.contacts.contactPerson'),
          label: t('contactsInfo.types.contactPerson')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.commercial.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        }
      ],
      color: 'orange'
    },
    {
      id: 'medical',
      name: t('contactsInfo.departments.medical.name'),
      description: t('contactsInfo.departments.medical.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      contacts: [
        {
          type: 'phone',
          value: t('contactsInfo.departments.medical.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'emergency',
          value: t('contactsInfo.departments.medical.contacts.emergency'),
          label: t('contactsInfo.types.emergency')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.medical.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        },
        {
          type: 'location',
          value: t('contactsInfo.departments.medical.contacts.location'),
          label: t('contactsInfo.types.location')
        }
      ],
      color: 'red'
    },
    {
      id: 'sports',
      name: t('contactsInfo.departments.sports.name'),
      description: t('contactsInfo.departments.sports.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      contacts: [
        {
          type: 'phone',
          value: t('contactsInfo.departments.sports.contacts.phone'),
          label: t('contactsInfo.types.phone')
        },
        {
          type: 'email',
          value: t('contactsInfo.departments.sports.contacts.email'),
          label: t('contactsInfo.types.email')
        },
        {
          type: 'hours',
          value: t('contactsInfo.departments.sports.contacts.workingHours'),
          label: t('contactsInfo.types.workingHours')
        },
        {
          type: 'location',
          value: t('contactsInfo.departments.sports.contacts.location'),
          label: t('contactsInfo.types.location')
        }
      ],
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

  const activeDepartmentData = departments.find(dept => dept.id === activeDepartment);

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`);
        break;
      case 'phone':
        window.open(`tel:${value}`);
        break;
      case 'website':
        window.open(value, '_blank');
        break;
      default:
        break;
    }
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'email':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'person':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        );
      case 'hours':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'emergency':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'website':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
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
            <span className="text-blue-600 text-sm font-semibold">{t('contactsInfo.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            {t('contactsInfo.title')}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
          ></motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('contactsInfo.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Список отделов */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {departments.map((department, index) => {
                const colors = colorMap[department.color];
                return (
                  <motion.button
                    key={department.id}
                    variants={itemVariants}
                    onClick={() => setActiveDepartment(department.id)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                      activeDepartment === department.id
                        ? `${colors.border} ${colors.light} shadow-lg scale-105`
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeDepartment === department.id ? colors.dark : colors.light
                      }`}>
                        <div className={activeDepartment === department.id ? 'text-white' : colors.text}>
                          {department.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold mb-1 ${
                          activeDepartment === department.id ? colors.text : 'text-slate-900'
                        }`}>
                          {department.name}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2">
                          {department.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Детали выбранного отдела */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            {activeDepartmentData && (
              <motion.div
                key={activeDepartmentData.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden"
              >
                <div className={`${colorMap[activeDepartmentData.color].light} p-8`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 ${colorMap[activeDepartmentData.color].dark} rounded-2xl flex items-center justify-center`}>
                      <div className="text-white">
                        {activeDepartmentData.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {activeDepartmentData.name}
                      </h3>
                      <p className="text-slate-600 mt-2">
                        {activeDepartmentData.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">
                    {t('contactsInfo.contactInformation')}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeDepartmentData.contacts.map((contact, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`flex items-start space-x-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          ['email', 'phone', 'website'].includes(contact.type)
                            ? 'border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleContactClick(contact.type, contact.value)}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                          ['email', 'phone', 'website'].includes(contact.type)
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-slate-200 text-slate-600'
                        }`}>
                          {getContactIcon(contact.type)}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h5 className="font-semibold text-slate-900 mb-1">
                            {contact.label}
                          </h5>
                          <p className={`text-sm ${
                            ['email', 'phone', 'website'].includes(contact.type)
                              ? 'text-blue-600 font-medium'
                              : 'text-slate-600'
                          }`}>
                            {contact.value}
                          </p>
                        </div>
                        
                        {['email', 'phone', 'website'].includes(contact.type) && (
                          <div className="flex-shrink-0">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Дополнительная информация */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <h5 className="font-semibold text-slate-900 mb-3">
                      {t('contactsInfo.additionalInfo.title')}
                    </h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {t(`contactsInfo.departments.${activeDepartmentData.id}.additionalInfo`)}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

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
              {t('contactsInfo.cta.title')}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {t('contactsInfo.cta.description')}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('contactsInfo.cta.call')}</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('contactsInfo.cta.email')}</span>
              </motion.button>
              
              <motion.button
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{t('contactsInfo.cta.visit')}</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsInfo;