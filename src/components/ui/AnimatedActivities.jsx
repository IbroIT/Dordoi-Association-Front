import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const AnimatedCanopy = ({
  children,
  vertical = false,
  repeat = 4,
  pauseOnHover = false,
  reverse = false,
  speed = "normal",
  className,
  applyMask = true,
  ...props
}) => {
  const durationMap = {
    slow: "60s",
    normal: "40s",
    fast: "25s",
    veryFast: "15s"
  };

  return (
    <div
      {...props}
      className={cn(
        "group relative flex h-full w-full overflow-hidden p-4",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{
        "--duration": durationMap[speed] || "40s",
        "--gap": "48px"
      }}
    >
      <div
        className={cn(
          "flex shrink-0 animate-scroll",
          vertical ? "flex-col animate-scroll-vertical" : "flex-row animate-scroll-horizontal",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
            "[animation-duration:var(--duration)]": true
          }
        )}
      >
        {Array.from({ length: repeat }).map((_, index) => (
          <div
            key={`item-${index}`}
            className={cn("flex shrink-0 [gap:var(--gap)]", {
              "flex-row": !vertical,
              "flex-col": vertical
            })}
          >
            {children}
          </div>
        ))}
      </div>
      
      {applyMask && (
        <>
          <div className={cn(
            "pointer-events-none absolute inset-y-0 z-10 h-full w-32",
            vertical ? "inset-x-0 top-0 h-32 w-full bg-gradient-to-b" : "left-0 bg-gradient-to-r"
          )}
            style={{
              background: vertical
                ? "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
                : "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
            }}
          />
          <div className={cn(
            "pointer-events-none absolute inset-y-0 z-10 h-full w-32",
            vertical ? "inset-x-0 bottom-0 h-32 w-full bg-gradient-to-t" : "right-0 bg-gradient-to-l"
          )}
            style={{
              background: vertical
                ? "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
                : "linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"
            }}
          />
        </>
      )}
    </div>
  );
};

const ActivityCard = ({
  activity,
  className,
  onClick,
  hoverEffect = true
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative flex h-64 w-96 shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6 transition-all duration-500 mr-6",
        "shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]",
        "dark:border-gray-800 dark:hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)]",
        hoverEffect && "hover:-translate-y-2",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Gradient background effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br transition-opacity duration-500",
        activity.gradient || "from-blue-50 via-white to-cyan-50",
        "dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20",
        isHovered ? "opacity-100" : "opacity-50"
      )} />
      
      {/* Animated border */}
      <div className={cn(
        "absolute inset-0 rounded-2xl border-2 pointer-events-none transition-all duration-500",
        "border-transparent group-hover:border-blue-400/50",
        isHovered && "border-blue-400/30"
      )} />
      
      {/* Shimmer effect on hover */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500",
        "bg-gradient-to-r from-transparent via-white/30 to-transparent",
        isHovered && "animate-shimmer opacity-100"
      )} />
      
      <div className="relative z-10 flex h-full flex-col">
        {/* Header with icon and title */}
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className={cn(
              "relative h-16 w-16 shrink-0 overflow-hidden rounded-xl",
              "bg-gradient-to-br from-blue-600 to-cyan-500",
              "flex items-center justify-center shadow-lg",
              "transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl",
              isHovered && "shadow-blue-500/25"
            )}>
              <div className="text-2xl text-white transition-transform duration-500 group-hover:scale-110">
                {activity.icon}
              </div>
              {/* Icon glow effect */}
              <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500",
                "bg-gradient-to-br from-blue-400 to-cyan-300 blur-md",
                isHovered && "opacity-50"
              )} />
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white">
                {activity.name}
              </span>
            </div>
          </div>
          
          {/* Status indicator */}
          {activity.status && (
            <div className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-all duration-300",
              activity.status === "active" && "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
              activity.status === "pending" && "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
              activity.status === "completed" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
              isHovered && "scale-105"
            )}>
              {activity.status}
            </div>
          )}
        </div>
        
        {/* Description */}
        <div className="flex-1">
          <p className="text-base text-gray-200 line-clamp-3 leading-relaxed mb-4">
            {activity.description}
          </p>
          
          {/* Progress bar */}
          {activity.progress !== undefined && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span className="font-medium">{activity.progress}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full",
                    "transition-all duration-1000 ease-out"
                  )}
                  style={{ width: `${activity.progress}%` }}
                />
              </div>
            </div>
          )}
          
          {/* Tags */}
          {activity.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activity.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer with metrics */}
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex justify-between text-sm">
            {activity.metrics?.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-gray-300">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Corner accent */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent",
        "transition-opacity duration-500",
        isHovered ? "opacity-100" : "opacity-0"
      )} />
    </div>
  );
};

export const AnimatedActivities = ({
  data,
  className,
  cardClassName,
  speed = "normal",
  direction = "horizontal",
  onCardClick
}) => {
  const [duplicatedData, setDuplicatedData] = useState([]);

  useEffect(() => {
    // Duplicate data for seamless animation
    setDuplicatedData([...data, ...data]);
  }, [data]);

  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <AnimatedCanopy
        speed={speed}
        vertical={direction === "vertical"}
        pauseOnHover={true}
        applyMask={true}
        repeat={2}
        className="py-8"
      >
        {duplicatedData.map((activity, index) => (
          <ActivityCard
            key={`${activity.name}-${index}`}
            activity={activity}
            className={cardClassName}
            onClick={() => onCardClick?.(activity)}
          />
        ))}
      </AnimatedCanopy>
    </div>
  );
};

// Tailwind CSS для анимаций (добавить в global.css)
/*
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% / 3));
  }
}

@keyframes scroll-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(-100% / 3));
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-scroll {
  animation: scroll var(--duration) linear infinite;
}

.animate-scroll-vertical {
  animation: scroll-vertical var(--duration) linear infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
*/