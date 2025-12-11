import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutHistory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState(0);

  // SVG иконки для вех истории
  const milestoneIcons = {
    calendar: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    education: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    film: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-9 0V1m10 3V1m0 3l1 1v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5l1-1z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    money: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    medical: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    logistics: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    book: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  };

  const milestones = [
    {
      year: "1991",
      title: t('history.milestones.0.title'),
      description: "В 1991 году была основана Ассоциация Dordoi, которая начала свою деятельность с небольшим коллективом энтузиастов, веривших в потенциал развития бизнеса в Кыргызстане. Были заложены основы для будущих проектов, включая первые инициативы по поддержке местных предпринимателей. Ассоциация организовала семинары и конференции, направленные на обмен опытом и знаниями между бизнес-сообществом. Это время характеризовалось активным поиском партнеров и инвесторов. Были установлены первые международные связи, которые позже стали основой для глобального сотрудничества. Ассоциация также начала работу над созданием благоприятной бизнес-среды в республике.",
      image: milestoneIcons.calendar,
      stats: t('history.milestones.0.stats'),
      color: "blue"
    },
    {
      year: "1990s",
      title: t('history.milestones.1.title'),
      description: "В 90-х годах Ассоциация активно участвовала в образовательных программах, организуя тренинги и курсы для предпринимателей. Были разработаны специальные программы по повышению квалификации, которые помогли многим бизнесменам адаптироваться к рыночным условиям. Особое внимание уделялось поддержке молодежного предпринимательства. Этот период отмечен значительным ростом числа членов Ассоциации. Были созданы региональные отделения, что позволило расширить географию деятельности. Ассоциация также начала работу над законодательными инициативами, направленными на улучшение бизнес-климата в стране.",
      image: milestoneIcons.education,
      stats: t('history.milestones.1.stats'),
      color: "purple"
    },
    {
      year: "2005",
      title: t('history.milestones.2.title'),
      description: "2005 год стал переломным моментом в истории Ассоциации. Были запущены крупные проекты в сфере медиа и коммуникаций, включая создание информационных платформ для бизнеса. Ассоциация организовала серию документальных фильмов о успешных кыргызстанских предпринимателях, которые стали вдохновением для многих. В этот период Ассоциация значительно расширила свою медиа-присутствие. Были запущены регулярные публикации, новостные рассылки и онлайн-платформы. Это позволило не только информировать бизнес-сообщество, но и привлекать новых партнеров и инвесторов.",
      image: milestoneIcons.film,
      stats: t('history.milestones.2.stats'),
      color: "green"
    },
    {
      year: "2008",
      title: t('history.milestones.3.title'),
      description: "Глобальный финансовый кризис 2008 года стал серьезным испытанием для бизнеса в Кыргызстане. Ассоциация разработала комплекс мер по поддержке предпринимателей, включая консультационные услуги, финансовое планирование и стратегии выживания. Были организованы специальные программы по диверсификации бизнеса. Ассоциация активно сотрудничала с международными организациями для получения поддержки. Были разработаны аналитические отчеты о состоянии бизнеса в республике, которые стали основой для принятия стратегических решений. Этот период укрепил позиции Ассоциации как надежного партнера для бизнеса.",
      image: milestoneIcons.chart,
      stats: t('history.milestones.3.stats'),
      color: "orange"
    },
    {
      year: "2010-2020",
      title: t('history.milestones.4.title'),
      description: "Десятилетие 2010-2020 годов отмечено значительным ростом экономики Кыргызстана. Ассоциация сыграла ключевую роль в привлечении инвестиций и развитии новых секторов экономики. Были реализованы проекты в сфере финансов, торговли и услуг, которые способствовали созданию тысяч рабочих мест. Этот период характеризовался активным международным сотрудничеством. Ассоциация участвовала в крупных региональных проектах, включая инициативы по развитию транспортных коридоров и торговых связей. Были установлены партнерские отношения с ведущими компаниями из разных стран.",
      image: milestoneIcons.money,
      stats: t('history.milestones.4.stats'),
      color: "cyan"
    },
    {
      year: "2020",
      title: t('history.milestones.5.title'),
      description: "Пандемия COVID-19 стала серьезным вызовом для всего мира, включая Кыргызстан. Ассоциация оперативно отреагировала на кризис, разработав программы поддержки бизнеса в условиях ограничений. Были организованы онлайн-платформы для ведения бизнеса, доставки и коммуникаций. Ассоциация координировала усилия по обеспечению медицинскими средствами и оборудованием. Были запущены инициативы по поддержке уязвимых групп населения и бизнеса. Этот период показал высокую адаптивность и ответственность Ассоциации перед обществом.",
      image: milestoneIcons.medical,
      stats: t('history.milestones.5.stats'),
      color: "red"
    },
    {
      year: "2021",
      title: t('history.milestones.6.title'),
      description: "2021 год ознаменовался новыми инициативами в сфере логистики и транспорта. Ассоциация разработала проекты по оптимизации транспортных потоков и развитию инфраструктуры. Были установлены новые партнерства с логистическими компаниями и транспортными операторами. Этот год стал периодом активного развития цифровой трансформации. Ассоциация внедрила современные технологии для управления бизнес-процессами. Были запущены онлайн-платформы для автоматизации логистики и оптимизации цепочек поставок.",
      image: milestoneIcons.logistics,
      stats: t('history.milestones.6.stats'),
      color: "indigo"
    },
    {
      year: "2021",
      title: t('history.milestones.7.title'),
      description: "В 2021 году Ассоциация продолжила свою образовательную миссию, запустив новые программы обучения и развития. Были созданы онлайн-курсы, вебинары и мастер-классы для предпринимателей. Особое внимание уделялось цифровым навыкам и инновационным технологиям. Ассоциация организовала международные конференции и форумы, где обсуждались актуальные темы бизнеса и экономики. Были опубликованы исследования и аналитические материалы, которые стали ценным ресурсом для бизнес-сообщества. Этот период подчеркнул важность непрерывного обучения и адаптации к изменениям.",
      image: milestoneIcons.book,
      stats: t('history.milestones.7.stats'),
      color: "amber"
    }
  ];

  const colorMap = {
    blue: { light: 'bg-blue-50', medium: 'bg-blue-100', dark: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { light: 'bg-purple-50', medium: 'bg-purple-100', dark: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-200' },
    green: { light: 'bg-green-50', medium: 'bg-green-100', dark: 'bg-green-500', text: 'text-green-600', border: 'border-green-200' },
    orange: { light: 'bg-orange-50', medium: 'bg-orange-100', dark: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-200' },
    cyan: { light: 'bg-cyan-50', medium: 'bg-cyan-100', dark: 'bg-cyan-500', text: 'text-cyan-600', border: 'border-cyan-200' },
    red: { light: 'bg-red-50', medium: 'bg-red-100', dark: 'bg-red-500', text: 'text-red-600', border: 'border-red-200' },
    indigo: { light: 'bg-indigo-50', medium: 'bg-indigo-100', dark: 'bg-indigo-500', text: 'text-indigo-600', border: 'border-indigo-200' },
    amber: { light: 'bg-amber-50', medium: 'bg-amber-100', dark: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200' }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section ref={ref} className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <motion.div
          className="absolute top-4 left-4 w-32 h-32 sm:w-64 sm:h-64 bg-blue-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-4 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-200 rounded-full blur-2xl sm:blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок секции */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-200 mb-4 sm:mb-6"
          >
            <span className="text-blue-600 text-xs sm:text-sm font-semibold">{t('history.badge')}</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6"
          >
            {t('history.title')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t('history.titleHighlight')}
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            {t('history.subtitle')}
          </motion.p>
        </motion.div>

        {/* История - непрерывный текст с фотографиями */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            {milestones.map((milestone, index) => (
              <React.Fragment key={index}>
                {/* Текстовый абзац */}
                <motion.p
                  variants={itemVariants}
                  className="text-slate-700 leading-relaxed text-base sm:text-lg text-justify"
                >
                  {milestone.description}
                </motion.p>

                {/* Фотография между абзацами (кроме последнего) */}
                {index < milestones.length - 1 && (
                  <motion.div
                    variants={itemVariants}
                    className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl my-6 sm:my-8"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 ${colorMap[milestone.color].dark} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-2xl sm:text-3xl">{milestone.image}</span>
                        </div>
                        <p className="text-slate-600 font-medium text-sm sm:text-base">{milestone.year} - {milestone.title}</p>
                        {milestone.stats && (
                          <p className="text-slate-500 text-xs sm:text-sm mt-2">{milestone.stats}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Индикатор прогресса */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-8 sm:mt-12 lg:mt-16"
        >
          <div className="inline-flex items-center space-x-3 sm:space-x-4 bg-slate-50 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-slate-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 text-sm sm:text-base font-medium">{t('history.timelineContinues')}</span>
            </div>
            <motion.div
              className="w-0.5 h-4 sm:h-6 bg-slate-300 rounded-full"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-slate-600 text-sm sm:text-base">{t('history.futureAhead')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHistory;