import React from 'react'
import HeroSlider from './HeroSlider'
import MissionAndValues from './MissionAndValues'
import AboutSection from './AboutSection'
import AchievementsSection from './AchievementsSection'
import ActivitiesSection from './ActivitiesSection'
import NewsAndEventsSection from './NewsAndEventsSection'
import InternationalPartnersSection from './InternationalPartnersSection'

function HomePage() {
  return (
    <div>
        <HeroSlider />
        <AboutSection />
        <MissionAndValues />
        <AchievementsSection />
        <ActivitiesSection />
        <NewsAndEventsSection />
        <InternationalPartnersSection />
    </div>
  )
}

export default HomePage