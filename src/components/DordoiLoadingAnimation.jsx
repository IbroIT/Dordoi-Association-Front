import React, { useEffect, useState } from 'react';

const DordoiAnimatedLogo = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [particles, setParticles] = useState([]);
  const [lines, setLines] = useState([]);

  // Проверка, была ли анимация уже показана
  useEffect(() => {
    const hasShown = sessionStorage.getItem('dordoiAnimationShown');
    if (hasShown) {
      onAnimationComplete?.();
    } else {
      setShowAnimation(true);
    }
  }, [onAnimationComplete]);

  // Инициализация частиц
  useEffect(() => {
    if (!showAnimation) return;
    
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      opacity: 0,
      color: 'rgba(255, 255, 255, 0.4)',
      blur: 25,
      delay: Math.random() * 300
    }));
    
    setParticles(newParticles);
  }, [showAnimation]);

  // Инициализация линий
  useEffect(() => {
    if (!showAnimation) return;
    
    const newLines = [];
    // Горизонтальные линии
    for (let i = 0; i <= 10; i++) {
      newLines.push({
        id: `h-${i}`,
        type: 'horizontal',
        position: i * 10,
        opacity: 0,
        delay: i * 30
      });
    }
    // Вертикальные линии
    for (let i = 0; i <= 10; i++) {
      newLines.push({
        id: `v-${i}`,
        type: 'vertical',
        position: i * 10,
        opacity: 0,
        delay: i * 30 + 150
      });
    }
    
    setLines(newLines);
  }, [showAnimation]);

  // Основная анимация - СОКРАЩЕННАЯ
  useEffect(() => {
    if (!showAnimation) return;
    
    const timeline = [
      { time: 0, stage: 1 },    // Фон
      { time: 300, stage: 2 },  // Линии
      { time: 500, stage: 3 },  // Логотип
      { time: 800, stage: 4 },  // Пик
      { time: 1200, stage: 5 }  // Стабильность
    ];

    const timeoutIds = [];
    timeline.forEach(({ time, stage }) => {
      timeoutIds.push(setTimeout(() => setAnimationStage(stage), time));
    });

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1800);
    timeoutIds.push(exitTimer);

    const completionTimer = setTimeout(() => {
      sessionStorage.setItem('dordoiAnimationShown', 'true');
      onAnimationComplete?.();
    }, 2500);
    timeoutIds.push(completionTimer);

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [onAnimationComplete, showAnimation]);

  // Анимация линий
  useEffect(() => {
    if (!showAnimation || animationStage < 2) return;
    setLines(prev => prev.map(line => ({
      ...line,
      opacity: 0.1
    })));
  }, [animationStage, showAnimation]);

  // Анимация частиц
  useEffect(() => {
    if (!showAnimation || animationStage < 3) return;
    setParticles(prev => prev.map(particle => ({
      ...particle,
      opacity: 0.3
    })));
  }, [animationStage, showAnimation]);

  if (!showAnimation) {
    return null;
  }

  // Цветовая палитра - более темные тона
  const colors = {
    primary: '#2563eb',    // Ярко-синий (blue-600)
    secondary: '#1e40af',  // Глубокий синий (blue-800)
    accent: '#3b82f6',     // Светлый синий (blue-500)
    white: '#FFFFFF',
    whiteGlow: 'rgba(255, 255, 255, 0.4)',
    blueGlow: 'rgba(37, 99, 235, 0.5)',
    darkBlue: '#1e3a8a',   // Очень темный синий (blue-900)
    deepBlue: '#172554'    // Почти черный, но синий (blue-950)
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#172554]">
      {/* Темный фон с глубоким синим градиентом */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at center,
            ${colors.darkBlue} 0%,
            ${colors.deepBlue} 40%,
            #172554 100%
          )`,
          opacity: isExiting ? 0 : 1,
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            135deg,
            rgba(30, 58, 138, 0.3) 0%,
            rgba(30, 64, 175, 0.2) 50%,
            rgba(37, 99, 235, 0.1) 100%
          )`,
          opacity: animationStage >= 1 ? 0.5 : 0,
          mixBlendMode: 'overlay',
          transition: 'opacity 0.6s ease'
        }}
      />

      {/* Сетка линий - ПРИГЛУШЕННЫЕ */}
      <div className="absolute inset-0 pointer-events-none">
        {lines.map(line => (
          <div
            key={line.id}
            className={`absolute ${line.type === 'horizontal' ? 'w-full h-px' : 'h-full w-px'}`}
            style={{
              [line.type === 'horizontal' ? 'top' : 'left']: `${line.position}%`,
              background: `linear-gradient(90deg, 
                transparent 0%, 
                ${colors.whiteGlow} 30%, 
                transparent 100%
              )`,
              opacity: isExiting ? 0 : line.opacity,
              boxShadow: `0 0 6px ${colors.whiteGlow}`,
              filter: 'blur(0.3px)',
              transform: isExiting
                ? 'scale(0.9)'
                : line.type === 'horizontal'
                  ? `scaleX(${animationStage >= 2 ? 1 : 0})`
                  : `scaleY(${animationStage >= 2 ? 1 : 0})`,
              transformOrigin: line.type === 'horizontal' ? 'left' : 'top',
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${line.delay}ms`
            }}
          />
        ))}
      </div>

      {/* Плавающие частицы - ПРИГЛУШЕННЫЕ */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: isExiting ? 0 : particle.opacity,
              background: particle.color,
              filter: `blur(${particle.blur}px)`,
              transform: isExiting ? 'scale(0.5)' : 'scale(1)',
              transition: `opacity 1s cubic-bezier(0.4, 0, 0.2, 1) ${particle.delay}ms`
            }}
          />
        ))}
      </div>

      {/* Эффект схлопывания при завершении - ТЕМНО-СИНИЙ */}
      {isExiting && (
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(
              circle at center,
              ${colors.primary} 0%,
              ${colors.secondary} 40%,
              transparent 80%
            )`,
            transform: 'scale(0)',
            animation: 'collapse-to-center 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.2s',
            filter: 'blur(25px)',
            opacity: 0.7
          }}
        />
      )}

      {/* Основной контент */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div 
          className="text-center"
          style={{
            transform: isExiting ? 'scale(0.85)' : 'scale(1)',
            opacity: isExiting ? 0 : 1,
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Логотип */}
          <div className="relative">
            <img
              src="/blue.png"
              alt="Dordoi Logo"
              className="w-56 h-56 object-contain mx-auto"
              style={{
                opacity: animationStage >= 3 ? (isExiting ? 0.7 : 1) : 0,
                transform: animationStage >= 3 ?
                  (isExiting ? 'scale(0.8)' : 'scale(1)') :
                  'scale(0.7)',
                filter: animationStage >= 4 && !isExiting 
                  ? `drop-shadow(0 0 35px ${colors.primary})
                     drop-shadow(0 0 20px ${colors.accent})
                     brightness(1.08)
                     contrast(1.05)` 
                  : 'none',
                transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            />
            
            {/* Свечение вокруг логотипа - ПРИГЛУШЕННОЕ */}
            <div 
              className="absolute inset-0 -m-6 rounded-full"
              style={{
                background: `radial-gradient(
                  circle,
                  ${colors.blueGlow} 0%,
                  transparent 70%
                )`,
                opacity: animationStage >= 4 ? (isExiting ? 0.2 : 0.4) : 0,
                filter: 'blur(15px)',
                transform: isExiting ? 'scale(0.85)' : 'scale(1)',
                transition: 'all 0.5s ease'
              }}
            />

            {/* Внешний контур - СДЕРЖАННЫЙ */}
            <div 
              className="absolute inset-0 -m-8 rounded-full border"
              style={{
                borderColor: colors.whiteGlow,
                borderWidth: '1px',
                opacity: animationStage >= 4 ? (isExiting ? 0 : 0.35) : 0,
                boxShadow: `0 0 20px ${colors.whiteGlow}`,
                transform: isExiting ? 'scale(0.9) rotate(12deg)' : 'scale(1)',
                filter: 'blur(0.5px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
              }}
            />
          </div>

          {/* Тонкие линии от логотипа - СДЕРЖАННЫЕ */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 90, 180, 270].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: '1px',
                  height: '80px',
                  marginLeft: '-0.5px',
                  marginTop: '-80px',
                  background: `linear-gradient(to top, 
                    transparent, 
                    ${colors.whiteGlow}, 
                    transparent)`,
                  opacity: animationStage >= 5 ? (isExiting ? 0 : 0.5) : 0,
                  transform: `
                    rotate(${angle}deg)
                    ${isExiting ? 'scaleY(0)' : 'scaleY(1)'}
                  `,
                  transformOrigin: 'bottom',
                  filter: 'blur(0.3px)',
                  transition: `all 0.5s ease ${i * 100}ms`
                }}
              />
            ))}
          </div>

          {/* Скрытые акцентные элементы (появляются только на пике) */}
          <div className="absolute inset-0 pointer-events-none">
            {[45, 135, 225, 315].map((angle, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  width: '2px',
                  height: '2px',
                  marginLeft: '-1px',
                  marginTop: '-1px',
                  backgroundColor: colors.whiteGlow,
                  boxShadow: `0 0 10px ${colors.whiteGlow}`,
                  transform: `
                    rotate(${angle}deg)
                    translateY(-110px)
                    ${isExiting ? 'scale(0)' : 'scale(1)'}
                  `,
                  opacity: animationStage >= 5 ? (isExiting ? 0 : 0.6) : 0,
                  transition: `all 0.4s ease ${i * 80}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Стили для анимаций */}
      <style jsx>{`
        @keyframes collapse-to-center {
          0% {
            transform: scale(1);
            opacity: 0.6;
            border-radius: 0;
          }
          50% {
            transform: scale(0.5);
            opacity: 0.8;
            border-radius: 12px;
          }
          100% {
            transform: scale(0);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes subtle-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 25px rgba(0, 85, 204, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 35px rgba(0, 68, 170, 0.8));
          }
        }

        @keyframes logo-pulse {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 25px #0055CC);
          }
          50% { 
            transform: scale(1.02);
            filter: drop-shadow(0 0 35px #0044AA);
          }
        }

        @keyframes glow-fade {
          0%, 100% { 
            opacity: 0.3;
          }
          50% { 
            opacity: 0.5;
          }
        }
      `}</style>

      {/* Тонкая пульсация логотипа */}
      {animationStage >= 5 && !isExiting && (
        <style jsx>{`
          img {
            animation: logo-pulse 3s ease-in-out infinite;
          }
          .absolute.inset-0.-m-6.rounded-full {
            animation: glow-fade 3s ease-in-out infinite;
          }
        `}</style>
      )}
    </div>
  );
};

export default DordoiAnimatedLogo;