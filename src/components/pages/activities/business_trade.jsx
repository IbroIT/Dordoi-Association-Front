import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag";

const BusinessAndTrade = () => {
  const { t } = useTranslation();
  const [downloadCount, setDownloadCount] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Картинки для карусели
  const heroImages = [
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070'
  ];

  // Автоматическая смена картинок
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  // Загрузка счетчика скачиваний
  useEffect(() => {
    const savedCount = localStorage.getItem('dordoi_brochure_downloads');
    if (savedCount) {
      setDownloadCount(parseInt(savedCount));
    }
  }, []);

  const handleDownload = () => {
    const newCount = downloadCount + 1;
    setDownloadCount(newCount);
    localStorage.setItem('dordoi_brochure_downloads', newCount.toString());
    window.open('/brochures/dordoi-30-jyl.pdf', '_blank');
  };

  // Иконки компонентов
  const Icons = {
    // Навигация
    Retail: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    Wholesale: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    Services: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Finance: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    // Категории товаров
    Autoparts: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Clothing: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    Electronics: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    Chemicals: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    Food: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    Textiles: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    // Статистика
    Calendar: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    Clock: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Users: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0H11" />
      </svg>
    ),
    Globe: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    // Общие
    ArrowRight: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ),
    CheckCircle: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Document: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Phone: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    Mail: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    MapPin: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    Download: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    ChevronRight: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    Building: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    ChartBar: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    AcademicCap: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    Briefcase: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    ShieldCheck: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Truck: ({ className }) => (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  };

  // Категории товаров для оптовой торговли
  const productCategories = [
    { id: 1, name: t('business.categories.autoparts'), icon: Icons.Autoparts },
    { id: 2, name: t('business.categories.clothing'), icon: Icons.Clothing },
    { id: 3, name: t('business.categories.electronics'), icon: Icons.Electronics },
    { id: 4, name: t('business.categories.chemicals'), icon: Icons.Chemicals },
    { id: 5, name: t('business.categories.food'), icon: Icons.Food },
    { id: 6, name: t('business.categories.textiles'), icon: Icons.Textiles }
  ];

  // Статистика и факты
  const stats = [
    { value: '1991', label: t('business.stats.founded'), icon: Icons.Calendar },
    { value: '30+', label: t('business.stats.years'), icon: Icons.Clock },
    { value: '10,000+', label: t('business.stats.jobs'), icon: Icons.Users },
    { value: '50+', label: t('business.stats.countries'), icon: Icons.Globe }
  ];

  // Истории успеха
  const successStories = [
    {
      id: 1,
      title: t('business.stories.tailor.title'),
      description: t('business.stories.tailor.description'),
      image: 'https://images.unsplash.com/photo-1605872653166-b4e41d8d9c42?q=80&w=2072'
    },
    {
      id: 2,
      title: t('business.stories.autoparts.title'),
      description: t('business.stories.autoparts.description'),
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070'
    },
    {
      id: 3,
      title: t('business.stories.wholesaler.title'),
      description: t('business.stories.wholesaler.description'),
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070'
    }
  ];

  // FAQ
  const faqs = [
    {
      question: t('business.faq.rent.question'),
      answer: t('business.faq.rent.answer')
    },
    {
      question: t('business.faq.documents.question'),
      answer: t('business.faq.documents.answer')
    },
    {
      question: t('business.faq.export.question'),
      answer: t('business.faq.export.answer')
    },
    {
      question: t('business.faq.payment.question'),
      answer: t('business.faq.payment.answer')
    }
  ];

  // Быстрая навигация

  // Торговые зоны
  const tradingZones = [
    { id: 1, name: t('business.zones.fashion'), available: true },
    { id: 2, name: t('business.zones.autoparts'), available: true },
    { id: 3, name: t('business.zones.electronics'), available: false },
    { id: 4, name: t('business.zones.food'), available: true },
    { id: 5, name: t('business.zones.wholesale'), available: true }
  ];

  // Финансовые услуги
  const financialServices = [
    { name: t('business.financial.banks'), description: t('business.financial.banksDesc') },
    { name: t('business.financial.microcredit'), description: t('business.financial.microcreditDesc') },
    { name: t('business.financial.ePayments'), description: t('business.financial.ePaymentsDesc') },
    { name: t('business.financial.insurance'), description: t('business.financial.insuranceDesc') }
  ];

  // Программы поддержки
  const supportPrograms = [
    { name: t('business.support.seminars'), schedule: t('business.support.seminarsSchedule') },
    { name: t('business.support.exhibitions'), schedule: t('business.support.exhibitionsSchedule') },
    { name: t('business.support.consultations'), schedule: t('business.support.consultationsSchedule') },
    { name: t('business.support.mentoring'), schedule: t('business.support.mentoringSchedule') }
  ];

  // Международные услуги
  const internationalServices = [
    { name: t('business.international.customs'), description: t('business.international.customsDesc') },
    { name: t('business.international.payments'), description: t('business.international.paymentsDesc') },
    { name: t('business.international.logistics'), description: t('business.international.logisticsDesc') },
    { name: t('business.international.translators'), description: t('business.international.translatorsDesc') }
  ];

  // Формы заявок
  const applicationForms = [
    { name: t('business.forms.rentalRequest') },
    { name: t('business.forms.priceRequest') },
    { name: t('business.forms.excursionRequest') }
  ];

  // Документы и правила
  const documents = [
    { name: t('business.documents.rentalContract') },
    { name: t('business.documents.securityRules') },
    { name: t('business.documents.customsRules') }
  ];

  // Контакты отделов
  const departmentContacts = [
    { department: t('business.contacts.rentalDept'), phone: t('business.contacts.rentalPhone'), email: t('business.contacts.rentalEmail') },
    { department: t('business.contacts.exportDept'), phone: t('business.contacts.exportPhone'), email: t('business.contacts.exportEmail') },
    { department: t('business.contacts.financeDept'), phone: t('business.contacts.financePhone'), email: t('business.contacts.financeEmail') }
  ];

  // Методы оплаты
  const paymentMethods = [
    t('business.payment.bankTransfer'),
    t('business.payment.cashDesks'),
    t('business.payment.terminals'),
    t('business.payment.online')
  ];

  // Программы обучения
  const trainingPrograms = [
    t('business.training.importBasics'),
    t('business.training.customsClearance'),
    t('business.training.warehouseManagement'),
    t('business.training.financialLiteracy')
  ];

  // Международные инструкции
  const internationalInstructions = [
    t('business.instructions.customs'),
    t('business.instructions.logistics'),
    t('business.instructions.currency'),
    t('business.instructions.documents')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0000fe]/90 to-[#020617]/80" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-sm font-semibold">{t('business.hero.yearText')}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {t('business.hero.title')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl">
                {t('business.subtitle')}
              </p>
              <p className="text-lg mb-10 text-gray-200 max-w-2xl">
                {t('business.hero.introduction')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-white text-[#0000fe] rounded-xl font-semibold hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3">
                  {t('business.buttons.rent')}
                  <Icons.ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleDownload}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  <Icons.Download className="w-5 h-5" />
                  {t('business.buttons.brochure')}
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {downloadCount}+
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Быстрая навигация */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-4">
              {t('business.navigation.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('business.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {navigationCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#020617] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{card.description}</p>
                  <div className="flex items-center text-[#0000fe] font-semibold text-sm">
                    {t('business.moreInfo')}
                    <Icons.ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Что такое Бизнес и торговля */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#0000fe]/10 text-[#0000fe] px-4 py-2 rounded-full mb-6">
                <Icons.Building className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('business.aboutDordoi')}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-8">
                {t('business.description.title')}
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                {t('business.description.short')}
              </p>
              <div className="space-y-4 text-gray-600">
                {t('business.description.long')
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">{paragraph}</p>
                  ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0000fe] to-blue-600 rounded-3xl p-10 text-white shadow-2xl">
                <img
                  src={'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070'}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Табы с информацией */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {[
              { id: 0, label: t('business.tabs.wholesale'), icon: Icons.Wholesale },
              { id: 1, label: t('business.tabs.finance'), icon: Icons.Finance },
              { id: 2, label: t('business.tabs.support'), icon: Icons.Users },
              { id: 3, label: t('business.tabs.export'), icon: Icons.Globe }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? 'bg-[#0000fe] text-white shadow-lg'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              {activeTab === 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-[#020617] mb-6">
                      {t('business.wholesale.title')}
                    </h3>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {t('business.wholesale.description')}
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                      <h4 className="text-xl font-bold text-[#020617] mb-4 flex items-center gap-3">
                        <Icons.Globe className="w-6 h-6" />
                        {t('business.wholesale.suppliers')}
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t('business.supplierCountries', { returnObjects: true }).map((countryName, index) => {
                          const countryCodes = {
                            'Китай': 'CN', 'China': 'CN', 'Кытай': 'CN',
                            'Турция': 'TR', 'Turkey': 'TR', 'Түркия': 'TR',
                            'Россия': 'RU', 'Russia': 'RU', 'Орусия': 'RU', 
                            'Корея': 'KR', 'Korea': 'KR', 'Корея Республикасы': 'KR',
                            'ЕС': 'EU', 'EU': 'EU', 'ЕАЭБ': 'EU',
                            'Узбекистан': 'UZ', 'Uzbekistan': 'UZ', 'Өзбекстан': 'UZ'
                          };
                          const countryCode = countryCodes[countryName] || 'XX';
                          return (
                            <div 
                              key={index} 
                              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                              <div className="mb-2">
                                <ReactCountryFlag
                                  countryCode={countryCode}
                                  svg
                                  style={{
                                    width: "48px",
                                    height: "36px",
                                    borderRadius: "4px",
                                    objectFit: "cover",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                                  }}
                                  title={countryName}
                                />
                              </div>
                              <div className="font-medium text-gray-800 text-sm">
                                {countryName}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#020617] mb-6">{t('business.productCategories')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {productCategories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                          <div
                            key={cat.id}
                            className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:border-[#0000fe] hover:shadow-lg transition-all duration-300"
                          >
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                              <Icon className="w-6 h-6 text-[#0000fe]" />
                            </div>
                            <div className="font-medium text-gray-800">{cat.name}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 1 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-[#020617] mb-6">{t('business.financial.title')}</h3>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {t('business.financial.description')}
                    </p>
                    <div className="space-y-6">
                      {financialServices.map((service, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className="w-12 h-12 bg-[#0000fe] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icons.ShieldCheck className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-800 mb-1">{service.name}</h4>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Icons.Finance className="w-7 h-7" />
                        {t('business.payment.title')}
                      </h4>
                      <div className="space-y-4 mb-8">
                        {paymentMethods.map((method, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Icons.CheckCircle className="w-5 h-5 text-green-300" />
                            <span>{method}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-sm opacity-90">
                        <p>{t('business.payment.service')}</p>
                        <p>{t('business.payment.corporateRates')}</p>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-[#020617] mb-4">{t('business.documents.title')}</h4>
                      <ul className="space-y-3">
                        {documents.map((doc, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-600">
                            <Icons.Document className="w-4 h-4 text-[#0000fe]" />
                            {doc.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 2 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-[#020617] mb-6">{t('business.support.title')}</h3>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {t('business.support.description')}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#020617] mb-4 flex items-center gap-3">
                        <Icons.Calendar className="w-6 h-6" />
                        {t('business.support.calendar')}
                      </h4>
                      <div className="bg-white border border-gray-200 rounded-2xl p-6">
                        {supportPrograms.map((program, index) => (
                          <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                            <div className="flex items-center gap-3">
                              <Icons.AcademicCap className="w-5 h-5 text-[#0000fe]" />
                              <span className="font-medium">{program.name}</span>
                            </div>
                            <span className="text-sm text-gray-500">{program.schedule}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-4">{t('business.support.successCases')}</h4>
                      <p className="opacity-90 mb-6">{t('business.support.successCasesDesc')}</p>
                      <button className="px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        {t('business.viewAllCases')}
                      </button>
                    </div>
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-[#020617] mb-4">{t('business.training.title')}</h4>
                      <ul className="space-y-3">
                        {trainingPrograms.map((course, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <Icons.AcademicCap className="w-5 h-5 text-[#0000fe]" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 3 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-3xl font-bold text-[#020617] mb-6">{t('business.export.title')}</h3>
                    <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                      {t('business.export.description')}
                    </p>
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-[#020617] mb-4">{t('business.international.services')}</h4>
                      <div className="space-y-4">
                        {internationalServices.map((service, index) => (
                          <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Icons.Truck className="w-5 h-5 text-[#0000fe]" />
                            </div>
                            <div>
                              <div className="font-medium">{service.name}</div>
                              <div className="text-sm text-gray-600">{service.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-4">{t('business.international.department')}</h4>
                      <p className="opacity-90 mb-6">{t('business.international.departmentDesc')}</p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Icons.Phone className="w-5 h-5" />
                          <span>{t('business.contacts.exportPhone')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icons.Mail className="w-5 h-5" />
                          <span>{t('business.contacts.exportEmail')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-[#020617] mb-4">{t('business.instructions.title')}</h4>
                      <ul className="space-y-2">
                        {internationalInstructions.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <Icons.Document className="w-4 h-4 text-[#0000fe]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Истории успеха */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-4">
              {t('business.stories.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('business.stories.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <motion.div
                key={story.id}
                whileHover={{ scale: 1.02, y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <div 
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${story.image})` }}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Icons.Briefcase className="w-6 h-6 text-[#0000fe]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#020617] mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {story.description}
                  </p>
                  {/* <div className="flex items-center text-[#0000fe] font-semibold">
                    {t('business.readStory')}
                    <Icons.ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Для арендаторов */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#0000fe]/10 text-[#0000fe] px-4 py-2 rounded-full mb-6">
                <Icons.Briefcase className="w-4 h-4" />
                <span className="text-sm font-semibold">{t('business.rental.title')}</span>
              </div>
              <h2 className="text-4xl font-bold text-[#020617] mb-8">
                {t('business.rental.title')}
              </h2>
              
              <div className="mb-12">
                <h4 className="text-xl font-bold text-[#020617] mb-6 flex items-center gap-3">
                  <Icons.CheckCircle className="w-6 h-6 text-green-500" />
                  {t('business.rental.steps')}
                </h4>
                <div className="grid grid-cols-3 gap-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="text-center group">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-r from-[#0000fe] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-3xl font-bold text-white">{step}</div>
                        </div>
                        {step < 3 && (
                          <div className="hidden md:block absolute top-10 left-full w-8 h-1 bg-gray-200 -translate-x-1/2" />
                        )}
                      </div>
                      <div className="font-medium text-gray-800">
                        {t(`business.rental.step${step}`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-[#020617] mb-4">{t('business.forms.title')}</h4>
                  <div className="space-y-3">
                    {applicationForms.map((form, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center gap-3">
                          <Icons.Document className="w-4 h-4 text-[#0000fe]" />
                          <span className="font-medium">{form.name}</span>
                        </div>
                        <button className="text-sm text-[#0000fe] font-semibold hover:underline">
                          {t('business.download')}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Доступные зоны */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#020617] mb-6">
                {t('business.zones.title')}
              </h3>
              
              <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-6 mb-8">
                <div className="space-y-4">
                  {tradingZones.map((zone) => (
                    <div
                      key={zone.id}
                      className={`flex items-center justify-between p-4 rounded-xl border ${
                        zone.available
                          ? 'border-green-200 bg-green-50'
                          : 'border-red-200 bg-red-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          zone.available ? 'bg-green-500' : 'bg-red-500'
                        }`} />
                        <span className="font-medium">{zone.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        zone.available
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {zone.available ? t('business.zones.available') : t('business.zones.soldOut')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-[#020617] mb-6">{t('business.contacts.title')}</h4>
                <div className="space-y-4">
                  {departmentContacts.map((contact, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="font-semibold text-gray-800 mb-2">{contact.department}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Icons.Phone className="w-4 h-4" />
                          <span>{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icons.Mail className="w-4 h-4" />
                          <span>{contact.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Icons.MapPin className="w-5 h-5 text-[#0000fe]" />
                    <div>
                      <div className="font-medium">{t('business.address.title')}</div>
                      <div className="text-sm">{t('business.address.value')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#020617] mb-4">
              {t('business.faq.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('business.faq.subtitle')}
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                >
                  <span className="font-semibold text-[#020617] text-lg">
                    {faq.question}
                  </span>
                  <Icons.ChevronRight className={`w-5 h-5 transform transition-transform ${
                    activeFaq === index ? 'rotate-90' : ''
                  }`} />
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 py-6 border-t border-gray-100 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BusinessAndTrade;