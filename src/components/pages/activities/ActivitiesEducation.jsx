import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ActivitiesEducation = () => {
  const { t } = useTranslation();

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const shapeVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(0, 0, 254, 0.15)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      rotate: 5,
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  };

  // Данные для разделов
  const educationIncludes = [
    t('education.includes.schools'),
    t('education.includes.universities'),
    t('education.includes.international'),
    t('education.includes.specialists')
  ];

  const universityFeatures = [
    t('education.university.feature1'),
    t('education.university.feature2'),
    t('education.university.feature3'),
    t('education.university.feature4')
  ];

  const practicalBenefits = [
    t('education.practical.benefit1'),
    t('education.practical.benefit2'),
    t('education.practical.benefit3'),
    t('education.practical.benefit4')
  ];

  const futureImpact = [
    t('education.future.impact1'),
    t('education.future.impact2'),
    t('education.future.impact3')
  ];

  const benefitsFor = {
    students: [
      t('education.benefits.students.benefit1'),
      t('education.benefits.students.benefit2'),
      t('education.benefits.students.benefit3')
    ],
    parents: [
      t('education.benefits.parents.benefit1')
    ],
    partners: [
      t('education.benefits.partners.benefit1'),
      t('education.benefits.partners.benefit2')
    ]
  };

  const faqItems = [
    {
      question: t('education.faq.question1'),
      answer: t('education.faq.answer1')
    },
    {
      question: t('education.faq.question2'),
      answer: t('education.faq.answer2')
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#020617] via-[#0a0f2e] to-[#020617] text-white overflow-hidden">
      {/* Фоновые элементы с анимацией */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-[#0000fe] to-cyan-400 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-tr from-blue-500 to-[#0000fe] rounded-full blur-[120px]"
        />
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0000fe] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и подзаголовок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0000fe]/20 to-cyan-500/20 backdrop-blur-sm border border-[#0000fe]/30 mb-8"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-[#0000fe] to-cyan-400 rounded-full mr-3"></div>
            <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">
              {t('education.badge')}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {t('education.title')}
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed"
          >
            {t('education.subtitle')}
          </motion.p>
        </motion.div>

        {/* Shape Divider 1 */}
        <motion.div
          variants={shapeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="w-48 h-1 bg-gradient-to-r from-[#0000fe] via-cyan-400 to-[#0000fe] rounded-full"></div>
        </motion.div>

        {/* Вводный блок */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-20"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-gradient-to-br from-gray-900/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 shadow-2xl relative overflow-hidden group"
          >
            {/* Декоративная полоска */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0000fe] to-cyan-400"></div>
            
            <p className="text-xl text-cyan-100 leading-relaxed relative z-10">
              {t('education.intro')}
            </p>
            
            {/* Декоративный уголок */}
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/30 rounded-br-2xl"></div>
          </motion.div>
        </motion.div>

        {/* Shape Divider 2 */}
        <motion.div
          variants={shapeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center mb-20"
        >
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-[#0000fe] rounded-full"></div>
        </motion.div>

        {/* Что включает направление */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('education.includes.title')}
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationIncludes.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/90 to-[#0a0f2e]/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 h-full relative overflow-hidden"
                     style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.12)' }}
                >
                  {/* Номер с градиентом */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-gradient-to-br from-[#0000fe] to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <motion.div 
                      whileHover="hover"
                      variants={iconHoverVariants}
                      className="w-4 h-4 bg-gradient-to-r from-[#0000fe] to-cyan-400 rounded-full mr-4"
                    ></motion.div>
                    <span className="text-lg font-semibold text-white">{item}</span>
                  </div>
                  
                  {/* Декоративная линия */}
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#0000fe] to-cyan-400 mt-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Салымбеков Университет */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-gradient-to-br from-gray-900/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 shadow-2xl relative overflow-hidden"
          >
            {/* Градиентная рамка */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-[#0000fe] via-cyan-400 to-[#0000fe] opacity-30"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-10">
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#FFFFFF] to-cyan-400 bg-clip-text text-transparent">
                    {t('education.university.title')}
                  </span>
                </h2>
                <p className="text-cyan-100 mb-8 text-lg leading-relaxed">
                  {t('education.university.description')}
                </p>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6 text-white">
                    {t('education.university.featuresTitle')}
                  </h3>
                  <div className="space-y-4">
                    {universityFeatures.map((feature, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-start bg-gradient-to-r from-gray-900/50 to-transparent p-4 rounded-xl hover:from-gray-800/50 transition-all duration-300"
                      >
                        <div className="w-3 h-3 bg-gradient-to-r from-[#0000fe] to-cyan-400 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                        <span className="text-cyan-100">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-b from-[#0000fe]/30 to-cyan-400/20 rounded-2xl p-8 border border-cyan-400/20 h-full backdrop-blur-sm">
                  <h4 className="text-2xl font-bold mb-6 text-white">Salymbekov University</h4>
                  <p className="text-cyan-100 mb-6">
                    {t('education.university.tagline')}
                  </p>
                  <motion.a 
                    href="https://salymbekov.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-[#0000fe] to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-3">🌐 {t('education.university.website')}</span>
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Международные коллаборации */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-gradient-to-br from-gray-900/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-[#0000fe] bg-clip-text text-transparent">
                {t('education.international.title')}
              </span>
            </h2>
            <p className="text-cyan-100 text-lg leading-relaxed">
              {t('education.international.description')}
            </p>
          </motion.div>
        </motion.div>

        {/* Практическая польза */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('education.practical.title')}
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practicalBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/90 to-[#0a0f2e]/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 h-full text-center relative overflow-hidden"
                     style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.12)' }}
                >
                  {/* Фоновый икон */}
                  <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-[#0000fe]/10 to-cyan-400/10 rounded-full blur-sm"></div>
                  
                  <motion.div 
                    whileHover="hover"
                    variants={iconHoverVariants}
                    className="w-16 h-16 bg-gradient-to-br from-[#0000fe] to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  
                  <span className="text-cyan-100 text-lg font-medium">{benefit}</span>
                  
                  {/* Индикатор снизу */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#0000fe] to-cyan-400 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Почему образование — это вклад в будущее */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            variants={cardHoverVariants}
            className="bg-gradient-to-br from-gray-900/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-800/50 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-8">
              <span className="bg-gradient-to-r from-[#0000fe] to-cyan-400 bg-clip-text text-transparent">
                {t('education.future.title')}
              </span>
            </h2>
            <p className="text-cyan-100 text-lg mb-10 leading-relaxed">
              {t('education.future.description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {futureImpact.map((impact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-b from-[#0000fe]/20 to-cyan-400/10 rounded-2xl p-8 border border-cyan-400/20 backdrop-blur-sm"
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#0000fe] to-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-white text-lg">{impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Блок "Польза для вас" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-24"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('education.benefits.title')}
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Для студентов */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-[#0a0f2e]/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 h-full relative overflow-hidden"
                   style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.15)' }}
              >
                {/* Градиентная шапка */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0000fe] to-cyan-400"></div>
                
                <h3 className="text-2xl font-bold mb-8 text-center text-white pt-6">
                  {t('education.benefits.students.title')}
                </h3>
                <div className="space-y-6 px-4">
                  {benefitsFor.students.map((benefit, index) => (
                    <div key={index} className="flex items-start group/item">
                      <motion.div 
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-8 h-8 bg-gradient-to-br from-[#0000fe] to-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-cyan-100 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Для родителей */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-[#0a0f2e]/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 h-full relative overflow-hidden"
                   style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.15)' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-[#0000fe]"></div>
                
                <h3 className="text-2xl font-bold mb-8 text-center text-white pt-6">
                  {t('education.benefits.parents.title')}
                </h3>
                <div className="space-y-6 px-4">
                  {benefitsFor.parents.map((benefit, index) => (
                    <div key={index} className="flex items-start group/item">
                      <motion.div 
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-[#0000fe] rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-cyan-100 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Для партнеров */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardHoverVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/90 to-[#0a0f2e]/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 h-full relative overflow-hidden"
                   style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.15)' }}
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0000fe] via-cyan-400 to-[#0000fe]"></div>
                
                <h3 className="text-2xl font-bold mb-8 text-center text-white pt-6">
                  {t('education.benefits.partners.title')}
                </h3>
                <div className="space-y-6 px-4">
                  {benefitsFor.partners.map((benefit, index) => (
                    <div key={index} className="flex items-start group/item">
                      <motion.div 
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-8 h-8 bg-gradient-to-br from-[#0000fe] to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <span className="text-cyan-100 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Часто задаваемые вопросы */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
          className="mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-14"
          >
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              {t('education.faq.title')}
            </span>
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                variants={cardHoverVariants}
                className="bg-gradient-to-br from-gray-900/80 to-[#0a0f2e]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 group/faq"
                style={{ boxShadow: '0 8px 32px rgba(0, 0, 254, 0.1)' }}
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-100 flex items-center group-hover/faq:text-white transition-colors duration-300">
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    className="w-8 h-8 bg-gradient-to-br from-[#0000fe] to-cyan-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </motion.div>
                  {item.question}
                </h3>
                <p className="text-cyan-100 ml-12">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Финальный Shape */}
        <motion.div
          variants={shapeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center pt-10"
        >
          <div className="w-64 h-1 bg-gradient-to-r from-[#0000fe] via-cyan-400 to-[#0000fe] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesEducation;