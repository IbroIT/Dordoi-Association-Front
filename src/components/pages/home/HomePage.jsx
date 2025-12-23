import React from 'react'
import HeroSlider from './HeroSlider'
import MissionAndValues from './MissionAndValues'
import AboutSection from './AboutSection'
import AchievementsSection from './AchievementsSection'
import ActivitiesSection from './ActivitiesSection'
import NewsAndEventsSection from './NewsAndEventsSection'
import InternationalPartnersSection from './InternationalPartnersSection'
import PartnersSection from './PartnersSection'
function HomePage() {
  return (
    <div>
        <HeroSlider />
        <AboutSection />
        <NewsAndEventsSection />

        <MissionAndValues />
        {/* <AchievementsSection /> */}
        <ActivitiesSection />
        <PartnersSection />

        {/* <InternationalPartnersSection /> */}
    </div>
  )
}

export default HomePage