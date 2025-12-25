import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const PressPublications = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Статичные данные публикаций
  const publications = [
    {
      id: 1,
      title: t('publications.items.annual_report.title'),
      link: '/publications/annual-report'
    },
    {
      id: 2,
      title: t('publications.items.financial_statements.title'),
      link: '/publications/financial-statements'
    },
    {
      id: 3,
      title: t('publications.items.sustainability_report.title'),
      link: '/publications/sustainability-report'
    },
    {
      id: 4,
      title: t('publications.items.business_plan.title'),
      link: '/publications/business-plan'
    },
    {
      id: 5,
      title: t('publications.items.strategic_plan.title'),
      link: '/publications/strategic-plan'
    },
    {
      id: 6,
      title: t('publications.items.regulatory_documents.title'),
      link: '/publications/regulatory-documents'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <span className="text-blue-600 text-sm font-semibold">{t('publications.badge')}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            {t('publications.title')}
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6"></div>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('publications.subtitle')}
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((publication) => (
            <div
              key={publication.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer p-6"
              onClick={() => navigate(publication.link)}
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {publication.title}
              </h3>
              <div className="flex items-center justify-end">
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1 transition-colors duration-300">
                  <span>{t('publications.readMore')}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressPublications;
