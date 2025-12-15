import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactsInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [contacts, setContacts] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const lang = i18n.language === 'kg' ? 'kg' : i18n.language === 'en' ? 'en' : 'ru';
        const response = await fetch(`https://dordoi-backend-f6584db3b47e.herokuapp.com/api/contacts/?language=${lang}`);
        const data = await response.json();
        const departmentsData = data.map((contact, index) => ({
          id: contact.id,
          name: contact.name,
          description: contact.work_time,
          detailed: contact.work_time,
          icon: (
            <img src={contact.logo} alt={contact.name} className="w-6 h-6 rounded" />
          ),
          contacts: [
            {
              type: 'email',
              value: contact.email,
              label: t('contactsInfo.types.email'),
              action: 'email'
            },
            {
              type: 'phone',
              value: contact.phone,
              label: t('contactsInfo.types.phone'),
              action: 'phone'
            },
            {
              type: 'hours',
              value: contact.work_time,
              label: t('contactsInfo.types.workingHours'),
              action: 'info'
            }
          ],
          color: ['blue', 'green', 'purple', 'orange', 'red', 'cyan'][index % 6],
          socialLinks: [
            contact.tg_link && {
              name: 'Telegram',
              url: contact.tg_link,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              )
            },
            contact.wb_link && {
              name: 'WhatsApp',
              url: contact.wb_link,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              )
            },
            contact.ins_link && {
              name: 'Instagram',
              url: contact.ins_link,
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.609.035 6.298.129c-1.31.094-2.207.247-2.988.528a5.944 5.944 0 00-2.143.873c-.695.446-1.287.99-1.776 1.776a5.944 5.944 0 00-.873 2.143c-.281.781-.434 1.678-.528 2.988C.035 7.609 0 8.396 0 12.017s.035 4.408.129 5.719c.094 1.31.247 2.207.528 2.988.246.695.579 1.287.873 1.776.695.446 1.287.99 1.776 1.776.489.695.99 1.287 1.776 1.776a5.944 5.944 0 002.143.873c.781.281 1.678.434 2.988.528 1.31.094 2.098.129 5.719.129s4.408-.035 5.719-.129c1.31-.094 2.207-.247 2.988-.528a5.944 5.944 0 002.143-.873c.695-.489.99-1.287 1.776-1.776.489-.695.99-1.287 1.776-1.776a5.944 5.944 0 00.873-2.143c.281-.781.434-1.678.528-2.988.094-1.31.129-2.098.129-5.719s-.035-4.408-.129-5.719c-.094-1.31-.247-2.207-.528-2.988a5.944 5.944 0 00-.873-2.143c-.489-.695-.99-1.287-1.776-1.776a5.944 5.944 0 00-2.143-.873c-.781-.281-1.678-.434-2.988-.528C16.425.035 15.638 0 12.017 0zm0 5.839a6.178 6.178 0 100 12.356 6.178 6.178 0 000-12.356zm0 10.178a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              )
            }
          ].filter(Boolean)
        }));
        setContacts(departmentsData);
        if (departmentsData.length > 0) {
          setActiveDepartment(departmentsData[0].id);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, [i18n.language]);

  const colorMap = {
    blue: { 
      light: 'bg-blue-50', 
      dark: 'bg-blue-600', 
      text: 'text-blue-600', 
      border: 'border-blue-200',
      gradient: 'from-blue-500 to-blue-600'
    },
    green: { 
      light: 'bg-green-50', 
      dark: 'bg-green-600', 
      text: 'text-green-600', 
      border: 'border-green-200',
      gradient: 'from-green-500 to-green-600'
    },
    purple: { 
      light: 'bg-purple-50', 
      dark: 'bg-purple-600', 
      text: 'text-purple-600', 
      border: 'border-purple-200',
      gradient: 'from-purple-500 to-purple-600'
    },
    orange: { 
      light: 'bg-orange-50', 
      dark: 'bg-orange-600', 
      text: 'text-orange-600', 
      border: 'border-orange-200',
      gradient: 'from-orange-500 to-orange-600'
    },
    red: { 
      light: 'bg-red-50', 
      dark: 'bg-red-600', 
      text: 'text-red-600', 
      border: 'border-red-200',
      gradient: 'from-red-500 to-red-600'
    },
    cyan: { 
      light: 'bg-cyan-50', 
      dark: 'bg-cyan-600', 
      text: 'text-cyan-600', 
      border: 'border-cyan-200',
      gradient: 'from-cyan-500 to-cyan-600'
    }
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
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  const activeDepartmentData = contacts.find(dept => dept.id === activeDepartment);

  const handleContactAction = (contact) => {
    switch (contact.action) {
      case 'email':
        window.open(`mailto:${contact.value}`);
        break;
      case 'phone':
        window.open(`tel:${contact.value}`);
        break;
      case 'website':
        window.open(contact.value, '_blank');
        break;
      case 'map':
        // In a real app, this would open a map
        console.log('Opening map for:', contact.value);
        break;
      default:
        break;
    }
  };

  const getContactIcon = (type) => {
    switch (type) {
      case 'email':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'hours':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'emergency':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'location':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'website':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getActionIcon = (action) => {
    switch (action) {
      case 'email':
      case 'phone':
      case 'website':
      case 'map':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-green-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {contacts.map((contact, index) => {
                const colors = colorMap[contact.color];
                return (
                  <motion.button
                    key={contact.id}
                    variants={itemVariants}
                    onClick={() => setActiveDepartment(contact.id)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                      activeDepartment === contact.id
                        ? `${colors.border} ${colors.light} shadow-lg scale-105`
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeDepartment === contact.id ? colors.dark : colors.light
                      }`}>
                        <div className={activeDepartment === contact.id ? 'text-white' : colors.text}>
                          {contact.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold ${
                          activeDepartment === contact.id ? colors.text : 'text-slate-900'
                        }`}>
                          {contact.name}
                        </h3>
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

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 ${colorMap[activeDepartmentData.color].dark} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <div className="text-white text-3xl">
                        {activeDepartmentData.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                      {activeDepartmentData.name}
                    </h3>
                  </div>

                  {/* Контактная информация */}
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-6">
                      {t('contactsInfo.contactInformation')}
                    </h4>
                    
                    <div className="space-y-4 mb-8">
                      {activeDepartmentData.contacts.map((contact, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className={`flex items-start space-x-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                            contact.action !== 'info' 
                              ? 'border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100' 
                              : 'border-slate-200 bg-slate-50'
                          }`}
                          whileHover={{ scale: contact.action !== 'info' ? 1.02 : 1 }}
                          onClick={() => contact.action !== 'info' && handleContactAction(contact)}
                        >
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                            contact.action !== 'info' 
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
                              contact.action !== 'info' 
                                ? 'text-blue-600 font-medium' 
                                : 'text-slate-600'
                            }`}>
                              {contact.value}
                            </p>
                          </div>
                          
                          {contact.action !== 'info' && (
                            <div className="flex-shrink-0 flex items-center space-x-2">
                              {getActionIcon(contact.action)}
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Социальные ссылки */}
                    {activeDepartmentData.socialLinks && activeDepartmentData.socialLinks.length > 0 && (
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">
                          {t('contactsInfo.socialLinks')}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4">
                          {activeDepartmentData.socialLinks.map((link, idx) => (
                            <motion.a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-center space-x-2 px-4 py-2 text-white rounded-lg transition-colors duration-300 ${
                                link.name === 'Telegram' ? 'bg-blue-500 hover:bg-blue-600' :
                                link.name === 'WhatsApp' ? 'bg-green-500 hover:bg-green-600' :
                                link.name === 'Instagram' ? 'bg-pink-600 hover:bg-pink-700' :
                                'bg-gray-500 hover:bg-gray-600'
                              }`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {link.icon}
                              <span>{link.name}</span>
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsInfo;