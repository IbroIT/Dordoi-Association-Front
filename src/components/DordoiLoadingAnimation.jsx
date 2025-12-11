import React, { useEffect, useState, useRef } from 'react';

const DordoiAnimatedLogo = ({ onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [particles, setParticles] = useState([]);
  const [lines, setLines] = useState([]);
  const [ripples, setRipples] = useState([]);

  // Инициализация частиц для фона
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 2000,
      opacity: 0
    }));
    setParticles(newParticles);
  }, []);

  // Инициализация линий сетки
  useEffect(() => {
    const newLines = [];
    for (let i = 0; i <= 10; i++) {
      newLines.push({
        id: `h-${i}`,
        type: 'horizontal',
        position: i * 10,
        opacity: 0,
        delay: i * 100
      });
    }
    for (let i = 0; i <= 10; i++) {
      newLines.push({
        id: `v-${i}`,
        type: 'vertical',
        position: i * 10,
        opacity: 0,
        delay: i * 100 + 500
      });
    }
    setLines(newLines);
  }, []);

  // Создание ripple эффектов для завершения
  useEffect(() => {
    if (isExiting) {
      const newRipples = Array.from({ length: 3 }, (_, i) => ({
        id: i,
        size: 0,
        opacity: 0.4,
        x: 50,
        y: 50,
        delay: i * 300
      }));
      setRipples(newRipples);
    }
  }, [isExiting]);

  // Основная анимация
  useEffect(() => {
    const timeline = [
      { time: 0, stage: 1 },
      { time: 800, stage: 2 },
      { time: 1200, stage: 3 },
      { time: 2000, stage: 4 },
      { time: 2800, stage: 5 },
      { time: 3800, stage: 6 }
    ];

    timeline.forEach(({ time, stage }) => {
      setTimeout(() => setAnimationStage(stage), time);
    });

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500);

    const completionTimer = setTimeout(() => {
      onAnimationComplete?.();
    }, 6000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completionTimer);
    };
  }, [onAnimationComplete]);

  // Анимация частиц
  useEffect(() => {
    if (animationStage >= 2) {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        opacity: 0.6
      })));
    }
  }, [animationStage]);

  // Анимация линий сетки
  useEffect(() => {
    if (animationStage >= 1) {
      setLines(prev => prev.map(line => ({
        ...line,
        opacity: 0.1
      })));
    }
  }, [animationStage]);

  const businessStats = [
    { id: 1, value: "25+", label: "Лет опыта", delay: 2800 },
    { id: 2, value: "5000+", label: "Партнеров", delay: 3000 },
    { id: 3, value: "₿", label: "Инновации", delay: 3200 },
    { id: 4, value: "24/7", label: "Поддержка", delay: 3400 }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900">
      {/* Фон с градиентом */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0f172a 100%)',
          transform: isExiting ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
          opacity: isExiting ? 0 : 1,
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      />

      {/* Ripple эффекты при завершении */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-blue-400/40"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            width: ripple.size * 2,
            height: ripple.size * 2,
            marginLeft: `-${ripple.size}%`,
            marginTop: `-${ripple.size}%`,
            opacity: ripple.opacity,
            transform: `scale(${isExiting ? 1 : 0})`,
            transition: `all 1s ease-out ${ripple.delay}ms`,
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.3)'
          }}
        />
      ))}

      {/* Сетка линий */}
      <div className="absolute inset-0">
        {lines.map(line => (
          <div
            key={line.id}
            className={`absolute bg-blue-400/20 ${
              line.type === 'horizontal' ? 'w-full h-px' : 'h-full w-px'
            }`}
            style={{
              [line.type === 'horizontal' ? 'top' : 'left']: `${line.position}%`,
              opacity: isExiting ? 0 : line.opacity,
              transform: isExiting ? 'scale(0.8)' : 'scale(1)',
              transition: `all 0.8s ease-out ${line.delay}ms`
            }}
          />
        ))}
      </div>

      {/* Плавающие частицы */}
      <div className="absolute inset-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-300/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              opacity: isExiting ? 0 : particle.opacity,
              transform: isExiting ? 
                `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0)` : 
                'translate(0, 0) scale(1)',
              transition: `all 0.6s cubic-bezier(0.4, 0, 0.8, 1) ${particle.id * 50}ms`,
              animation: !isExiting ? `float-${particle.id % 3} 8s infinite ease-in-out` : 'none',
              animationDelay: `${particle.delay}ms`
            }}
          />
        ))}
      </div>

      {/* Эффект схлопывания к центру */}
      {isExiting && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-full"
          style={{
            transform: 'scale(0)',
            animation: 'collapse-to-center 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s',
            boxShadow: '0 0 100px rgba(59, 130, 246, 0.5)'
          }}
        />
      )}

      {/* Основной контент */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div 
          className="text-center"
          style={{
            transform: isExiting ? 'translateY(0) scale(0.8)' : 'translateY(0) scale(1)',
            opacity: isExiting ? 0 : 1,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          {/* Минималистичный логотип */}
          <div className="relative mb-12">
            {/* Логотип */}
            <img
              src="/logodor2.png"
              alt="Dordoi Logo"
              className="w-48 h-48 object-contain mx-auto"
              style={{
                opacity: animationStage >= 4 ? (isExiting ? 0 : 1) : 0,
                transform: animationStage >= 4 ?
                  (isExiting ? 'translateY(-20px)' : 'translateY(0)') :
                  'translateY(20px)',
                transition: 'all 0.6s ease-out 0.2s',
                filter: !isExiting ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))' : 'none'
              }}
            />

            <div
              className="overflow-hidden"
              style={{
                opacity: animationStage >= 4 ? (isExiting ? 0 : 1) : 0,
                transform: animationStage >= 4 ?
                  (isExiting ? 'translateY(-15px) scale(0.9)' : 'translateY(0) scale(1)') :
                  'translateY(10px)',
                transition: 'all 0.6s ease-out 0.4s'
              }}
            >
              <p className="text-lg text-blue-200/80 font-light tracking-widest uppercase">
                Business Excellence
              </p>
            </div>
            </div>

          {/* Статистика */}
          <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
            {businessStats.map((stat, index) => (
              <div
                key={stat.id}
                className="text-center"
                style={{
                  opacity: animationStage >= 5 ? (isExiting ? 0 : 1) : 0,
                  transform: animationStage >= 5 ? 
                    (isExiting ? 'translateY(10px) scale(0.8) rotate(5deg)' : 'translateY(0) scale(1)') : 
                    'translateY(20px) scale(0.9)',
                  transition: `all 0.5s cubic-bezier(0.4, 0, 0.8, 1) ${stat.delay}ms`
                }}
              >
                <div 
                  className="text-2xl font-light text-blue-300 mb-2"
                  style={{
                    textShadow: '0 0 15px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-blue-200/60 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Слоган */}
          <div
            className="mt-12"
            style={{
              opacity: animationStage >= 5 ? (isExiting ? 0 : 1) : 0,
              transform: animationStage >= 5 ? 
                (isExiting ? 'translateY(20px) scale(0.8)' : 'translateY(0) scale(1)') : 
                'translateY(20px)',
              transition: 'all 0.6s ease-out 3600ms'
            }}
          >
            <p className="text-sm text-blue-200/50 font-light italic">
              Инновации. Надежность. Партнерство.
            </p>
          </div>
        </div>
      </div>

      {/* Финальная вспышка */}
      {isExiting && (
        <div 
          className="absolute inset-0 bg-white rounded-full"
          style={{
            transform: 'scale(0)',
            opacity: 0.8,
            animation: 'final-flash 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.8s'
          }}
        />
      )}

      {/* Стили для анимаций */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          33% { transform: translateX(10px) translateY(-15px); }
          66% { transform: translateX(-5px) translateY(10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(15px) scale(1.1); }
        }

        @keyframes glow {
          0%, 100% { 
            opacity: 1;
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% { 
            opacity: 0.8;
            text-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.2;
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        @keyframes collapse-to-center {
          0% {
            transform: scale(1);
            opacity: 1;
            border-radius: 0;
          }
          50% {
            transform: scale(0.5);
            opacity: 0.7;
            border-radius: 20px;
          }
          100% {
            transform: scale(0);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes final-flash {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(3);
            opacity: 0.4;
          }
          100% {
            transform: scale(6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DordoiAnimatedLogo;