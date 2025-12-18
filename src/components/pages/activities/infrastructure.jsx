import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  TruckIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  ClockIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  HomeIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
  CogIcon,
  ArrowRightIcon,
  MapPinIcon,
  WifiIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ArrowsRightLeftIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';

const Infrastructure = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Факты и цифры с анимацией
  const facts = [
    {
      icon: ShieldExclamationIcon,
      title: t('infrastructure.facts.security.title'),
      description: t('infrastructure.facts.security.description'),
      color: 'from-blue-500 to-blue-600',
      value: '24/7'
    },
    {
      icon: UsersIcon,
      title: t('infrastructure.facts.visitors.title'),
      description: t('infrastructure.facts.visitors.description'),
      color: 'from-purple-500 to-purple-600',
      value: '10,000+'
    },
    {
      icon: BuildingOffice2Icon,
      title: t('infrastructure.facts.areas.title'),
      description: t('infrastructure.facts.areas.description'),
      color: 'from-green-500 to-green-600',
      value: '100+'
    },
    {
      icon: Cog6ToothIcon,
      title: t('infrastructure.facts.industries.title'),
      description: t('infrastructure.facts.industries.description'),
      color: 'from-orange-500 to-orange-600',
      value: '18+'
    }
  ];

  // Преимущества для арендаторов
  const benefits = [
    {
      icon: CheckCircleIcon,
      text: t('infrastructure.benefits.convenience'),
      gradient: 'from-blue-400 to-blue-500'
    },
    {
      icon: ShieldCheckIcon,
      text: t('infrastructure.benefits.security'),
      gradient: 'from-green-400 to-green-500'
    },
    {
      icon: CreditCardIcon,
      text: t('infrastructure.benefits.finance'),
      gradient: 'from-purple-400 to-purple-500'
    },
    {
      icon: TruckIcon,
      text: t('infrastructure.benefits.logistics'),
      gradient: 'from-orange-400 to-orange-500'
    },
    {
      icon: UserGroupIcon,
      text: t('infrastructure.benefits.comfort'),
      gradient: 'from-pink-400 to-pink-500'
    }
  ];

  // Торговые центры
  const businessCenters = [
    {
      name: t('infrastructure.centers.plaza.name'),
      description: t('infrastructure.centers.plaza.description'),
      icon: BuildingStorefrontIcon,
      stats: '№1 в Кыргызстане'
    },
    {
      name: t('infrastructure.centers.plaza2.name'),
      description: t('infrastructure.centers.plaza2.description'),
      icon: BuildingLibraryIcon,
      stats: '70,000+ м²'
    }
  ];

  // Основные направления инфраструктуры
  const infrastructureAreas = [
    {
      id: 1,
      title: t('infrastructure.areas.logistics.title'),
      description: t('infrastructure.areas.logistics.description'),
      icon: TruckIcon,
      gradient: 'from-blue-500 to-cyan-500',
      features: t('infrastructure.areas.logistics.features', { returnObjects: true })
    },
    {
      id: 2,
      title: t('infrastructure.areas.warehouses.title'),
      description: t('infrastructure.areas.warehouses.description'),
      icon: BuildingOfficeIcon,
      gradient: 'from-green-500 to-emerald-500',
      features: t('infrastructure.areas.warehouses.features', { returnObjects: true })
    },
    {
      id: 3,
      title: t('infrastructure.areas.security.title'),
      description: t('infrastructure.areas.security.description'),
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-orange-500',
      features: t('infrastructure.areas.security.features', { returnObjects: true })
    },
    {
      id: 4,
      title: t('infrastructure.areas.finance.title'),
      description: t('infrastructure.areas.finance.description'),
      icon: BanknotesIcon,
      gradient: 'from-purple-500 to-violet-500',
      features: t('infrastructure.areas.finance.features', { returnObjects: true })
    },
    {
      id: 5,
      title: t('infrastructure.areas.centers.title'),
      description: t('infrastructure.areas.centers.description'),
      icon: HomeIcon,
      gradient: 'from-indigo-500 to-blue-500',
      features: businessCenters.map(center => center.name)
    }
  ];

  // FAQ
  const faqs = [
    {
      question: t('infrastructure.faq.security.question'),
      answer: t('infrastructure.faq.security.answer'),
      icon: ShieldCheckIcon
    },
    {
      question: t('infrastructure.faq.warehouses.question'),
      answer: t('infrastructure.faq.warehouses.answer'),
      icon: BuildingOfficeIcon
    },
    {
      question: t('infrastructure.faq.finance.question'),
      answer: t('infrastructure.faq.finance.answer'),
      icon: CreditCardIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section - Светлый дизайн */}
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
  {/* Фоновые элементы */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0000fe]/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0000fe]/10 to-transparent" />
    
    {/* Декоративные элементы */}
    <div className="absolute top-1/4 -left-4 w-48 h-48 bg-gradient-to-br from-[#0000fe]/5 to-transparent rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-8 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
  </div>

  {/* Светящийся элемент рядом с бейджем */}
  <div className="absolute top-24 md:top-32 left-1/2 transform -translate-x-1/2">
    <div className="relative">
      {/* Светящееся свечение */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#0000fe]/20 via-[#0000fe]/10 to-transparent blur-xl rounded-full animate-pulse" />
      <div className="absolute -inset-2 bg-gradient-to-r from-[#0000fe]/30 via-[#0000fe]/20 to-transparent blur-lg rounded-full animate-pulse delay-1000" />
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      {/* Бейдж с подсветкой */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 px-5 py-3 rounded-full shadow-lg border border-gray-200 mb-10 group"
      >
        {/* Светящаяся анимация вокруг бейджа */}
        <div className="absolute -inset-3 bg-gradient-to-r from-[#0000fe]/0 via-[#0000fe]/10 to-[#0000fe]/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0000fe]/0 via-[#0000fe]/5 to-[#0000fe]/0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        
        {/* Акцентная точка */}
        <div className="relative">
          <div className="w-2 h-2 bg-gradient-to-r from-[#0000fe] to-blue-600 rounded-full animate-ping absolute -inset-0" />
          <div className="w-2 h-2 bg-gradient-to-r from-[#0000fe] to-blue-600 rounded-full relative" />
        </div>
        
        <span className="text-sm font-semibold bg-gradient-to-r from-[#0000fe] to-blue-600 bg-clip-text text-transparent relative">
          {t('infrastructure.hero.badge')}
        </span>
        
        {/* Светящийся хвостик */}
        <div className="absolute -right-2 w-4 h-1 bg-gradient-to-r from-[#0000fe]/50 to-transparent blur-sm" />
      </motion.div>
      
      {/* Заголовок с градиентом */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
      >
        <span className="bg-gradient-to-r from-[#0000fe] via-[#020617] to-[#0000fe] bg-clip-text text-transparent">
          {t('infrastructure.hero.title')}
        </span>
      </motion.h1>
      
      {/* Подзаголовок */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
      >
        {t('infrastructure.subtitle')}
      </motion.p>
      
      {/* Карточка с описанием */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100/80 relative overflow-hidden group"
      >
        {/* Акцентный уголок */}
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#0000fe]/5 to-transparent rounded-bl-3xl" />
          <div className="absolute top-2 right-2 w-3 h-3 bg-[#0000fe] rounded-full animate-pulse" />
        </div>
        
        {/* Анимированная полоска снизу */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#0000fe]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#020617] mb-6 text-left"
        >
          {t('infrastructure.hero.subtitle')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-600 leading-relaxed text-left"
        >
          {t('infrastructure.hero.description')}
        </motion.p>
        
        {/* Декоративные элементы в карточке */}
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#0000fe]/10 to-transparent rounded-full blur-xl" />
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-xl" />
      </motion.div>
    </motion.div>
  </div>
  
  {/* Декоративные линии снизу */}
  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/50 to-transparent" />
</section>

      {/* Что означает инфраструктура - Более изысканный дизайн */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-2 h-8 bg-[#0000fe] rounded-full" />
              <span className="text-sm font-semibold text-[#0000fe] uppercase tracking-wider">
                {t('infrastructure.meaning.title')}
              </span>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
            >
              {t('infrastructure.meaning.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Основные направления - Сетка 3x2 с улучшенным дизайном */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-6">
              {t('infrastructure.mainDirections')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('infrastructure.mainDirectionsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureAreas.map((area) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: area.id * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 254, 0.25)"
                  }}
                  onMouseEnter={() => setHoveredCard(area.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-500 overflow-hidden group"
                >
                  {/* Анимированный фон при ховере */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Иконка с анимацией */}
                  <motion.div 
                    animate={{ 
                      rotate: hoveredCard === area.id ? [0, 10, -10, 0] : 0,
                      scale: hoveredCard === area.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-[#020617] mb-4 group-hover:text-[#0000fe] transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-3">
                  {Array.isArray(area.features) && area.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <motion.div
                          animate={{ 
                            x: hoveredCard === area.id ? [0, 5, 0] : 0,
                            rotate: hoveredCard === area.id ? [0, 180, 0] : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronRightIcon className="w-5 h-5 text-[#0000fe] mt-0.5 flex-shrink-0" />
                        </motion.div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Индикатор при ховере */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#0000fe] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Торговые центры - Карточки с улучшенным дизайном */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-6">
              {t('infrastructure.commercialCenters')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('infrastructure.commercialCentersDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessCenters.map((center, index) => {
              const Icon = center.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200/50 relative overflow-hidden">
                    {/* Анимированный градиентный фон */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -translate-y-32 translate-x-32 group-hover:scale-125 transition-transform duration-700" />
                    
                    <div className="flex items-start gap-6 mb-6 relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-[#020617] mb-2">
                          {center.name}
                        </h3>
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                          <span className="text-sm font-semibold">{center.stats}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed relative">
                      {center.description}
                    </p>  
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Инфраструктура как основа - Улучшенный дизайн */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0000fe]/90 via-[#020617]/80 to-blue-600/90">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        </div>
        
        {/* Плавающие элементы */}
        <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-white/20 rounded-full animate-float" />
        <div className="absolute bottom-1/3 right-20 w-12 h-12 border-2 border-white/20 rounded-full animate-float delay-1000" />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-white/20 rounded-full animate-float delay-1500" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
            >
              {t('infrastructure.economicStability.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-blue-100 leading-relaxed"
            >
              {t('infrastructure.economicStability.description')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Факты и цифры - Более динамичный дизайн
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-6">
              {t('infrastructure.facts.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('infrastructure.facts.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fact.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${fact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="text-4xl font-bold text-[#020617] mb-2">
                        {fact.value}
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#020617] mb-2">
                        {fact.title}
                      </h3>
                      <p className="text-gray-600">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Для арендаторов - Улучшенный дизайн */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full mb-8 border border-blue-100">
              <UserGroupIcon className="w-5 h-5 text-[#0000fe]" />
              <span className="text-sm font-semibold text-[#0000fe]">
                {t('infrastructure.forTenants')}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('infrastructure.tenantsBenefits.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              {t('infrastructure.tenantsBenefits.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="flex items-center gap-4 relative">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                        {benefit.text}
                      </span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ - Улучшенный дизайн */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('infrastructure.faq.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('infrastructure.faq.subtitle')}
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-all duration-300">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-5 h-5 text-[#0000fe]" />
                        </div>
                        <span className="font-semibold text-[#020617] text-lg">
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center"
                      >
                        <ChevronRightIcon className="w-5 h-5 text-[#0000fe]" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 py-6 border-t border-gray-100 text-gray-700 leading-relaxed bg-gradient-to-b from-white to-gray-50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
    </div>
  );
};

// CSS анимации для плавающих элементов
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

export default Infrastructure;