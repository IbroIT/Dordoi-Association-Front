import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      title: t('hero.slides.0.title'),
      subtitle: t('hero.slides.0.subtitle'),
      description: t('hero.slides.0.description'),
      buttonText: t('hero.slides.0.buttonText'),
      buttonLink: "/about",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      overlay: "bg-blue-900/70"
    },
    {
      id: 2,
      title: t('hero.slides.1.title'),
      subtitle: t('hero.slides.1.subtitle'),
      description: t('hero.slides.1.description'),
      buttonText: t('hero.slides.1.buttonText'),
      buttonLink: "/partners",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlay: "bg-blue-800/70"
    },
    {
      id: 3,
      title: t('hero.slides.2.title'),
      subtitle: t('hero.slides.2.subtitle'),
      description: t('hero.slides.2.description'),
      buttonText: t('hero.slides.2.buttonText'),
      buttonLink: "/activities",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      overlay: "bg-slate-900/70"
    },
    {
      id: 4,
      title: t('hero.slides.3.title'),
      subtitle: t('hero.slides.3.subtitle'),
      description: t('hero.slides.3.description'),
      buttonText: t('hero.slides.3.buttonText'),
      buttonLink: "/activities/social",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      overlay: "bg-blue-900/60"
    }
  ];

  // Автопереключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
      {/* Слайды */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 transform translate-x-0'
              : 'opacity-0 transform translate-x-full'
          }`}
        >
          {/* Фоновое изображение */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Затемнение */}
          <div className={`absolute inset-0 ${slide.overlay}`} />
          
          {/* Контент */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div className="space-y-6">
                  {/* Заголовок */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  
                  {/* Подзаголовок */}
                  <p className="text-xl md:text-2xl text-yellow-300 font-semibold">
                    {slide.subtitle}
                  </p>
                  
                  {/* Описание */}
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                    {slide.description}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Навигационные стрелки */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
        aria-label={t('hero.previousSlide')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
        aria-label={t('hero.nextSlide')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Индикаторы слайдов */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400 scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={t('hero.goToSlide', { number: index + 1 })}
          />
        ))}
      </div>

      {/* Градиент снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/50 to-transparent" />
    </div>
  );
};

export default HeroSlider;