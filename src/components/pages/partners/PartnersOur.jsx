import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BuildingIcon, WrenchIcon, TrophyIcon } from '../../icons';

const Partners = () => {
  
  const { t, i18n } = useTranslation();
  const [activePartner, setActivePartner] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Загрузка данных партнеров из API
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/partners/?lang=${i18n.language}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch partners: ${response.status}`);
        }
        const data = await response.json();

        // Обработка данных партнеров
        const partnersArray = data.results || data || [];
        const transformedPartners = Array.isArray(partnersArray) ? partnersArray.map(partner => ({
          id: partner.id,
          name: partner.name_ru || partner.name_en || partner.name_kg || partner.name || 'Unknown Partner',
          logo: partner.logo || (
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          description: partner.description_ru || partner.description_en || partner.description_kg || partner.description || '',
          years: `${new Date().getFullYear() - (partner.founded_year || 1990)}+`,
          projects: '50+', // Эти поля могут быть добавлены в модель позже
          employees: '1000+',
          satisfaction: '98%',
          location: partner.shtab_kvartira || partner.location || '',
          website: partner.website || '#',
          industry: partner.otrasl || partner.industry || '',
          founded: partner.founded_year?.toString() || '',
          achievements: Array.isArray(partner.achievements) ? partner.achievements : [],
          collaboration: partner.about_corporation || partner.collaboration || '',
          details: partner.about_company || partner.details || '',
          services: Array.isArray(partner.ulugi) ? partner.ulugi : [],
          partnershipBenefits: Array.isArray(partner.features) ? partner.features : [],
          partnershipStatus: partner.partnership_status || 'Active'
        })) : [];

        setPartners(transformedPartners);
      } catch (err) {
        console.error('Error fetching partners:', err);
        console.warn('API недоступен, используются демо-данные. Запустите Django сервер для получения реальных данных.');

        // Fallback to static demo data
        setPartners([
          {
            id: 1,
            name: "Dordoi Corporation",
            logo: (
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
            description: "Крупнейшая торговая компания в Кыргызстане",
            years: "30+",
            projects: "1000+",
            employees: "5000+",
            satisfaction: "98%",
            location: "г. Бишкек, Кыргызстан",
            website: "https://dordoi.kg",
            industry: "Розничная торговля",
            founded: "1993",
            achievements: ["Лидер рынка", "Сертификаты качества", "Международное признание"],
            collaboration: "Долгосрочное стратегическое партнерство",
            details: "Dordoi Corporation - ведущая торговая компания в Центральной Азии",
            services: ["Оптовая торговля", "Розничная сеть", "Логистика"],
            partnershipBenefits: ["Широкая сеть", "Надёжность", "Качество"],
            partnershipStatus: "Партнёр"
          }
        ]);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (isVisible) {
      fetchPartners();
    }
  }, [isVisible, i18n.language]);

  const PartnerStats = ({ partner, isActive }) => {
    if (!partner) return null;

    // SVG иконки для статистики
    const statIcons = {
      years: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      projects: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      employees: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      satisfaction: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    };

    return (
      <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {[
          { value: partner.years, label: t('partners.yearsOfCooperation'), color: 'from-blue-500 to-blue-600', icon: statIcons.years },
          { value: partner.projects, label: t('partners.successfulProjects'), color: 'from-purple-500 to-purple-600', icon: statIcons.projects },
          { value: partner.employees, label: t('partners.employees'), color: 'from-green-500 to-green-600', icon: statIcons.employees },
          { value: partner.satisfaction, label: t('partners.satisfaction'), color: 'from-yellow-500 to-yellow-600', icon: statIcons.satisfaction }
        ].map((stat, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className={`bg-gradient-to-br ${stat.color} rounded-xl p-4 text-white shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
              <div className="text-sm mb-1">{stat.icon}</div>
              <div className="text-xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs opacity-90 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const WebsiteButton = ({ website, name }) => (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group justify-center w-full"
    >
      <span className="text-base font-medium">{t('partners.visitWebsite')}</span>
      <span className="ml-2 text-yellow-300 group-hover:translate-x-1 transition-transform duration-300">→</span>
    </a>
  );

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Анимированный фон */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-2 mb-4">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-yellow-400 text-sm font-medium">{t('partners.badge')}</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {t('partners.title')}
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
            {t('partners.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Левая часть - Компактный стек партнеров */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/10">
              <h3 className="text-base font-semibold text-white mb-4 text-center">
                {t('partners.ourPartners')}
              </h3>
              {isLoading ? (
                <div className="space-y-2">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-3 animate-pulse">
                      <div className="h-4 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-white/10 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : error && partners.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-red-400 text-sm">
                    {t('partners.error.loading', 'Ошибка загрузки партнеров')}
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {partners.map((partner, index) => (
                    <div
                      key={partner.id}
                      className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 transform border ${
                        activePartner === index
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg scale-102'
                          : 'bg-white/5 text-blue-200 border-white/10 hover:border-blue-400/30 hover:bg-white/10'
                      }`}
                      onClick={() => setActivePartner(index)}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`text-xl transition-transform duration-300 ${
                          activePartner === index ? 'scale-110 rotate-12' : 'scale-100'
                        }`}>
                          {partner.logo && partner.logo.startsWith('http') ? (
                            <img src={partner.logo} alt={partner.name} className="w-6 h-6 rounded" />
                          ) : (
                            <BuildingIcon className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold text-xs transition-colors duration-300 truncate ${
                            activePartner === index ? 'text-white' : 'text-blue-100'
                          }`}>
                            {partner.name}
                          </h4>
                          <div className={`h-1 rounded-full mt-1 transition-all duration-500 ${
                            activePartner === index 
                              ? 'bg-yellow-400 w-full' 
                              : 'bg-blue-400/30 w-3/4'
                          }`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Правая часть - Детальная информация */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="animate-pulse">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-white/20 rounded-2xl w-16 h-16"></div>
                    <div className="flex-1">
                      <div className="bg-white/20 rounded-lg h-8 w-64 mb-2"></div>
                      <div className="bg-white/20 rounded-lg h-4 w-96 mb-3"></div>
                      <div className="flex gap-2">
                        <div className="bg-white/20 rounded-lg h-6 w-32"></div>
                        <div className="bg-white/20 rounded-lg h-6 w-24"></div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 h-64"></div>
                    <div className="bg-white/5 rounded-xl p-4 h-64"></div>
                    <div className="bg-white/5 rounded-xl p-4 h-64"></div>
                  </div>
                </div>
              </div>
            ) : error && partners.length === 0 ? (
              <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {t('partners.error.title', 'Ошибка загрузки')}
                  </h3>
                  <p className="text-blue-200 max-w-md mx-auto mb-6">
                    {error || t('partners.error.description', 'Не удалось загрузить данные партнеров')}
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    {t('partners.error.retry', 'Попробовать снова')}
                  </button>
                </div>
              </div>
            ) : partners.length > 0 && partners[activePartner] ? (
              <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Основная информация о партнере */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-6">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="relative flex-shrink-0">
                      <div className="text-5xl bg-gradient-to-br from-blue-400 to-purple-500 p-3 rounded-2xl shadow-xl">
                        {partners[activePartner].logo && partners[activePartner].logo.startsWith('http') ? (
                          <img src={partners[activePartner].logo} alt={partners[activePartner].name} className="w-12 h-12 rounded-xl object-cover" />
                        ) : (
                          <BuildingIcon className="w-12 h-12" />
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {partners[activePartner].name}
                      </h3>
                      <p className="text-blue-200 text-base leading-relaxed mb-3">
                        {partners[activePartner].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="bg-blue-500/20 rounded-lg px-3 py-1 border border-blue-400/30">
                          <div className="text-xs text-blue-300 font-medium">{t('partners.industry')}</div>
                          <div className="text-white text-sm font-semibold">{partners[activePartner].industry}</div>
                        </div>
                        <div className="bg-purple-500/20 rounded-lg px-3 py-1 border border-purple-400/30">
                          <div className="text-xs text-purple-300 font-medium">{t('partners.founded')}</div>
                          <div className="text-white text-sm font-semibold">{partners[activePartner].founded}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl px-4 py-3 backdrop-blur-sm flex-shrink-0">
                    <div className="text-xs text-yellow-400 font-semibold mb-1">
                      {t('partners.location')}
                    </div>
                    <div className="text-yellow-300 text-sm font-medium">
                      {partners[activePartner].location}
                    </div>
                  </div>
                </div>

                {/* Анимированная разделительная линия */}
                <div className="relative mb-6">
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full opacity-50"></div>
                  <div className="absolute top-0 left-0 h-0.5 bg-yellow-400 rounded-full w-1/3 animate-move"></div>
                </div>


                {/* Основной контент - 3 колонки */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Колонка 1: О компании и услуги */}
                  <div className="space-y-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                        {t('partners.aboutCompany')}
                      </h4>
                      <p className="text-blue-200 text-sm leading-relaxed mb-3">
                        {partners[activePartner].details}
                      </p>
                      
                      <h5 className="text-base font-semibold text-white mb-2 flex items-center">
                        <WrenchIcon className="w-4 h-4 text-green-400 mr-1" />
                        {t('partners.keyServices')}
                      </h5>
                      <div className="space-y-1">
                        {partners[activePartner].services && partners[activePartner].services.length > 0 ? (
                          partners[activePartner].services.map((service, index) => (
                            <div key={index} className="flex items-center space-x-2 text-blue-200 group">
                              <span className="text-green-400 text-sm">•</span>
                              <span className="text-sm group-hover:text-white transition-colors duration-300">
                                {service}
                              </span>
                            </div>
                          ))
                        ) : (
                          <div className="text-blue-300 text-sm italic">
                            {t('partners.services.notAvailable', 'Информация о услугах недоступна')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Колонка 2: Достижения */}
                  <div className="space-y-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 h-full">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        {t('partners.achievements')}
                      </h4>
                      <ul className="space-y-2">
                        {partners[activePartner].achievements && partners[activePartner].achievements.length > 0 ? (
                          partners[activePartner].achievements.map((achievement, index) => (
                            <li 
                              key={index} 
                              className="flex items-start space-x-2 group"
                            >
                              <span className="text-yellow-400 mt-0.5 text-sm group-hover:scale-110 transition-transform duration-300"><TrophyIcon className="w-4 h-4" /></span>
                              <span className="text-blue-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </li>
                          ))
                        ) : (
                          <div className="text-blue-300 text-sm italic">
                            {t('partners.achievements.notAvailable', 'Информация о достижениях недоступна')}
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Колонка 3: Сотрудничество и ссылка */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-blue-400/20">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2.5M7 11.5a1.5 1.5 0 003 0m0 0h6.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5H14m0 0V8a1.5 1.5 0 003 0V5.5M10 5.5a1.5 1.5 0 10-3 0v2.5a1.5 1.5 0 003 0V5.5z" />
                          </svg>
                        </span>
                        {t('partners.ourCollaboration')}
                      </h4>
                      <p className="text-blue-200 text-sm leading-relaxed mb-4">
                        {partners[activePartner].collaboration}
                      </p>
                      
                      <div className="space-y-3">
                        <WebsiteButton 
                          website={partners[activePartner].website} 
                          name={partners[activePartner].name} 
                        />
                        
                        <div className="bg-green-500/10 rounded-lg p-3 border border-green-400/20">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-green-400 text-lg">✅</span>
                            <span className="text-white text-sm font-semibold">{t('partners.partnershipStatus')}</span>
                          </div>
                          <div className="text-green-300 text-xs">
                            {partners[activePartner].partnershipStatus || t('partners.activeCollaboration', 'Активное сотрудничество')}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Преимущества партнерства */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                      <h5 className="text-base font-semibold text-white mb-2 flex items-center">
                        <span className="text-yellow-400 mr-1">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0V8a2 2 0 01-2 2H8a2 2 0 01-2-2V6m8 0H8m0 0V4" />
                          </svg>
                        </span>
                        {t('partners.partnershipBenefits')}
                      </h5>
                      <ul className="space-y-1">
                        {partners[activePartner].partnershipBenefits && partners[activePartner].partnershipBenefits.length > 0 ? (
                          partners[activePartner].partnershipBenefits.map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-2 text-blue-200 group">
                              <span className="text-green-400 text-sm">✓</span>
                              <span className="text-sm group-hover:text-white transition-colors duration-300">
                                {benefit}
                              </span>
                            </li>
                          ))
                        ) : (
                          <div className="text-blue-300 text-sm italic">
                            {t('partners.benefits.notAvailable', 'Информация о преимуществах недоступна')}
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-move {
          animation: move 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Partners;