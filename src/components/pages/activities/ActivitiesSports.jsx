import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Trophy, 
  Target, 
  Users, 
  Building, 
  Heart, 
  Award,
  Calendar,
  Star,
  ChevronRight,
  ExternalLink,
  X
} from 'lucide-react';

const ActivitiesSports = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null); // 'achievement', 'infrastructure', 'support'
  const [activeFaq, setActiveFaq] = useState(null);

  const achievements = [
    {
      title: t('sports.achievements.multipleChampion'),
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: t('sports.achievements.nationalTournaments'),
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      title: t('sports.achievements.internationalParticipation'),
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-700 to-blue-800"
    },
    {
      title: t('sports.achievements.talentDevelopment'),
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-800 to-blue-900"
    }
  ];

  const sportDirections = [
    {
      title: t('sports.directions.professionalSports'),
      description: t('sports.directions.professionalSportsDesc'),
      icon: <Trophy className="w-8 h-8" />
    },
    {
      title: t('sports.directions.clubSupport'),
      description: t('sports.directions.clubSupportDesc'),
      icon: <Building className="w-8 h-8" />
    },
    {
      title: t('sports.directions.healthyLifestyle'),
      description: t('sports.directions.healthyLifestyleDesc'),
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const youthBenefits = [
    {
      title: t('sports.benefits.youth.sportOpportunities'),
      description: t('sports.benefits.youth.sportOpportunitiesDesc')
    },
    {
      title: t('sports.benefits.youth.development'),
      description: t('sports.benefits.youth.developmentDesc')
    },
    {
      title: t('sports.benefits.youth.career'),
      description: t('sports.benefits.youth.careerDesc')
    }
  ];

  const familyBenefits = [
    {
      title: t('sports.benefits.family.events'),
      description: t('sports.benefits.family.eventsDesc')
    },
    {
      title: t('sports.benefits.family.participation'),
      description: t('sports.benefits.family.participationDesc')
    },
    {
      title: t('sports.benefits.family.lifestyle'),
      description: t('sports.benefits.family.lifestyleDesc')
    }
  ];

  const partnerBenefits = [
    {
      title: t('sports.benefits.partners.projects'),
      description: t('sports.benefits.partners.projectsDesc')
    },
    {
      title: t('sports.benefits.partners.support'),
      description: t('sports.benefits.partners.supportDesc')
    },
    {
      title: t('sports.benefits.partners.initiatives'),
      description: t('sports.benefits.partners.initiativesDesc')
    }
  ];

  const faqs = [
    {
      question: t('sports.faq.1.question'),
      answer: t('sports.faq.1.answer')
    },
    {
      question: t('sports.faq.2.question'),
      answer: t('sports.faq.2.answer')
    }
  ];

  const usefulLinks = [
    {
      title: t('sports.links.fcOfficial'),
      url: "https://fc-dordoi.kg",
      icon: <ExternalLink className="w-4 h-4" />
    },
    {
      title: t('sports.links.fcHistory'),
      url: "https://ru.wikipedia.org/wiki/Дордой_(футбольный_клуб)",
      icon: <ExternalLink className="w-4 h-4" />
    }
  ];

  const socialResponsibilityPoints = [
    t('sports.socialResponsibility.health'),
    t('sports.socialResponsibility.risks'),
    t('sports.socialResponsibility.discipline'),
    t('sports.socialResponsibility.example')
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const shapeVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <Target className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 text-sm font-semibold">
              {t('sports.badge')}
            </span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            {t('sports.title')}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            {t('sports.subtitle')}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"
          />
        </motion.div>

        {/* Shape Divider */}
        <motion.div
          className="relative h-20 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,0V120H1200V0C1050,80 900,100 600,100S150,80 0,0Z"
              fill="#f8fafc"
              variants={shapeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>
        </motion.div>

        {/* Intro Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-100 shadow-lg"
          >
            <div className="max-w-4xl mx-auto text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t('sports.intro')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Shape Divider */}
        <motion.div
          className="relative h-20 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.7 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M1200,120V0H0V120C150,40 300,20 600,20S1050,40 1200,120Z"
              fill="#f8fafc"
              variants={shapeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>
        </motion.div>

        {/* Sport Directions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('sports.directions.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('sports.directions.subtitle')}
            </p>
          </motion.div>

          {/* Для 3 карточек используем grid-cols-3 с центрированием */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {sportDirections.map((direction, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group w-full max-w-sm text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-blue-600">
                    {direction.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {direction.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {direction.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Shape Divider */}
        <motion.div
          className="relative h-20 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.9 }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,0V120H1200V0C1050,80 900,100 600,100S150,80 0,0Z"
              fill="#f8fafc"
              variants={shapeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </svg>
        </motion.div>

        {/* Football Club Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
                <span>1</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('sports.fc.title')}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('sports.fc.description')}
              </p>
              <a
                href="https://fc-dordoi.kg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                <span>{t('sports.fc.website')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">{t('sports.fc.achievementsTitle')}</h3>
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        {achievement.icon}
                      </div>
                      <span className="font-medium">{achievement.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-blue-600" />
                <p className="text-lg font-semibold text-gray-900">
                  {t('sports.fc.symbol')}
                </p>
              </div>
              <p className="text-gray-700">
                {t('sports.fc.symbolDescription')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Youth Sports Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
                <span>2</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('sports.youth.title')}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t('sports.youth.description')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  t('sports.youth.points.0'),
                  t('sports.youth.points.1'),
                  t('sports.youth.points.2'),
                  t('sports.youth.points.3')
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2 p-3 bg-white rounded-xl border border-blue-100"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {t('sports.youth.massSports')}
                </h3>
                <p className="text-gray-700 text-center">
                  {t('sports.youth.massSportsDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Event Support Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
              <span>3</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('sports.events.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('sports.events.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              t('sports.events.supported.0'),
              t('sports.events.supported.1'),
              t('sports.events.supported.2'),
              t('sports.events.supported.3')
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-900 font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
                <span>4</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('sports.infrastructure.title')}
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {t('sports.infrastructure.description')}
              </p>
              
              <div className="space-y-4">
                {[
                  t('sports.infrastructure.items.0'),
                  t('sports.infrastructure.items.1'),
                  t('sports.infrastructure.items.2'),
                  t('sports.infrastructure.items.3')
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-200 shadow-lg h-full">
                <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6">
                  <Building className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {t('sports.infrastructure.benefitsTitle')}
                </h3>
                <p className="text-gray-700 text-center">
                  {t('sports.infrastructure.benefits')}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Responsibility */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600 text-white text-sm font-semibold mb-4">
              <span>5</span>
              <ChevronRight className="w-4 h-4" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('sports.socialResponsibility.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('sports.socialResponsibility.description')}
            </p>
          </motion.div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialResponsibilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-6 h-6" />
                  </div>
                  <p className="text-center font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('sports.benefits.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('sports.benefits.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Youth Benefits */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('sports.benefits.youth.title')}
              </h3>
              <div className="space-y-4">
                {youthBenefits.map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Family Benefits */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('sports.benefits.family.title')}
              </h3>
              <div className="space-y-4">
                {familyBenefits.map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Partner Benefits */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('sports.benefits.partners.title')}
              </h3>
              <div className="space-y-4">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('sports.faq.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('sports.faq.subtitle')}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronRight 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('sports.links.title')}
            </h3>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {usefulLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl font-semibold transition-colors duration-300"
              >
                {link.title}
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSports;