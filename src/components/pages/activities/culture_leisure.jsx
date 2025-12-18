import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  MusicalNoteIcon,
  BuildingLibraryIcon,
  UsersIcon,
  HomeIcon,
  SparklesIcon,
  HeartIcon,
  CalendarIcon,
  PresentationChartBarIcon,
  LightBulbIcon,
  TrophyIcon,
  FilmIcon,
  CakeIcon,
  CameraIcon,
  FireIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const CultureLeisure = () => {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Направления деятельности
  const activities = [
    {
      id: 1,
      title: t('culture.activities.events.title'),
      description: t('culture.activities.events.description'),
      icon: CalendarIcon,
      gradient: 'from-blue-500 to-cyan-500',
      features: t('culture.activities.events.features', { returnObjects: true })
    },
    {
      id: 2,
      title: t('culture.activities.traditions.title'),
      description: t('culture.activities.traditions.description'),
      icon: BookOpenIcon,
      gradient: 'from-purple-500 to-pink-500',
      features: t('culture.activities.traditions.features', { returnObjects: true })
    },
    {
      id: 3,
      title: t('culture.activities.spaces.title'),
      description: t('culture.activities.spaces.description'),
      icon: HomeIcon,
      gradient: 'from-green-500 to-emerald-500',
      features: t('culture.activities.spaces.features', { returnObjects: true })
    },
    {
      id: 4,
      title: t('culture.activities.entertainment.title'),
      description: t('culture.activities.entertainment.description'),
      icon: FilmIcon,
      gradient: 'from-orange-500 to-yellow-500',
      features: t('culture.activities.entertainment.features', { returnObjects: true })
    }
  ];

  // Преимущества для посетителей
  const benefits = [
    {
      category: t('culture.benefits.visitors.title'),
      icon: UsersIcon,
      items: t('culture.benefits.visitors.items', { returnObjects: true })
    },
    {
      category: t('culture.benefits.artists.title'),
      icon: MusicalNoteIcon,
      items: t('culture.benefits.artists.items', { returnObjects: true })
    },
    {
      category: t('culture.benefits.partners.title'),
      icon: PuzzlePieceIcon,
      items: t('culture.benefits.partners.items', { returnObjects: true })
    }
  ];

  // Что включает направление
  const directions = t('culture.directions', { returnObjects: true });

  // Значение для общества
  const societyImpacts = t('culture.impacts', { returnObjects: true });

  // FAQ
  const faqs = [
    {
      question: t('culture.faq.events.question'),
      answer: t('culture.faq.events.answer'),
      icon: CalendarIcon
    },
    {
      question: t('culture.faq.family.question'),
      answer: t('culture.faq.family.answer'),
      icon: HomeIcon
    },
    {
      question: t('culture.faq.organization.question'),
      answer: t('culture.faq.organization.answer'),
      icon: UsersIcon
    }
  ];

  // Торговые центры
  const entertainmentCenters = [
    {
      name: 'Dordoi Plaza',
      description: t('culture.centers.plaza'),
      icon: BuildingLibraryIcon,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      name: 'Dordoi Plaza 2',
      description: t('culture.centers.plaza2'),
      icon: SparklesIcon,
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0000fe]/20 to-transparent" />
          
          {/* Декоративные элементы */}
          <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Бейдж */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-50 px-5 py-3 rounded-full shadow-lg border border-gray-200 mb-10 group"
            >
              <div className="absolute -inset-3 bg-gradient-to-r from-[#0000fe]/0 via-[#0000fe]/10 to-[#0000fe]/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              <div className="w-2 h-2 bg-gradient-to-r from-[#0000fe] to-blue-600 rounded-full" />
              <span className="text-sm font-semibold bg-gradient-to-r from-[#0000fe] to-blue-600 bg-clip-text text-transparent">
                {t('culture.hero.badge')}
              </span>
            </motion.div>
            
            {/* Заголовок */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#0000fe] via-[#020617] to-[#0000fe] bg-clip-text text-transparent">
                {t('culture.hero.title')}
              </span>
            </motion.h1>
            
            {/* Подзаголовок */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {t('culture.subtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Вводный блок */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            {/* Декоративные элементы */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl" />
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
            >
              {t('culture.intro')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold bg-gradient-to-r from-[#0000fe] to-blue-600 bg-clip-text text-transparent"
            >
              {t('culture.introConclusion')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Что включает направление */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#020617] mb-8">
              {t('culture.directionsTitle')}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              {t('culture.directionsDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(directions) && directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-2xl" />
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircleIcon className="w-5 h-5 text-[#0000fe]" />
                  </div>
                  <p className="text-gray-700 text-lg font-medium">{direction}</p>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#0000fe]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Основные направления */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('culture.mainDirections')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('culture.mainDirectionsDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredCard(activity.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <motion.div 
                      animate={{ 
                        scale: hoveredCard === activity.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 bg-gradient-to-br ${activity.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-[#020617] mb-4 group-hover:text-[#0000fe] transition-colors duration-300">
                      {activity.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div className="space-y-3">
                    {Array.isArray(activity.features) &&
                      activity.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRightIcon className="w-5 h-5 text-[#0000fe] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Торгово-развлекательные центры */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('culture.centersTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('culture.centersDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entertainmentCenters.map((center, index) => {
              const Icon = center.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`${center.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#020617] mb-2">
                          {center.name}
                        </h3>
                        <p className="text-gray-600">{center.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Значение для общества */}
      <section className="py-20 bg-gradient-to-r from-[#020617] to-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20"
          >
            <LightBulbIcon className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {t('culture.impactsTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {Array.isArray(societyImpacts) &&
              societyImpacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-left"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-300 mt-1 flex-shrink-0" />
                    <span className="text-lg text-white/90">{impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <p className="text-xl text-white/80">
              {t('culture.socialResponsibility')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Польза для посетителей */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('culture.benefitsTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('culture.benefitsDescription')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-3xl" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#0000fe]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#020617] mb-6">
                      {benefit.category}
                    </h3>
                    
                    {Array.isArray(benefit.items) &&
                      benefit.items.map((item, idx) => (
                      <ul key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#0000fe] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </ul>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
              {t('culture.faqTitle')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('culture.faqDescription')}
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
                  <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-200 transition-all duration-300">
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

export default CultureLeisure;