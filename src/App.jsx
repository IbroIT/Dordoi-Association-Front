import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import './App.css';

// Главные страницы
import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/home/AboutPage';
import ActivitiesPage from './components/pages/home/ActivitiesPage';
import PressPage from './components/pages/home/PressPage';
import PartnersPage from './components/pages/home/PartnersPage';
import ContactsPage from './components/pages/home/ContactsPage';

// Подразделы About
import AboutHistory from './components/pages/about/AboutHistory';
import AboutMission from './components/pages/about/AboutMission';
import AboutLeadership from './components/pages/about/AboutLeadership';
import AboutStructure from './components/pages/about/AboutStructure';
import AboutFacts from './components/pages/about/AboutFacts';

// Подразделы Activities
import ActivitiesTrade from './components/pages/activities/ActivitiesTrade';
import ActivitiesFinance from './components/pages/activities/ActivitiesFinance';
import ActivitiesEducation from './components/pages/activities/ActivitiesEducation';
import ActivitiesMedicine from './components/pages/activities/ActivitiesMedicine';
import ActivitiesSports from './components/pages/activities/ActivitiesSports';
import ActivitiesCulture from './components/pages/activities/ActivitiesCulture';
import ActivitiesSocial from './components/pages/activities/ActivitiesSocial';

// Подразделы Press
import PressNews from './components/pages/press/PressNews';
import PressMedia from './components/pages/press/PressMedia';
import PressPublications from './components/pages/press/PressPublications';
import PressEvents from './components/pages/press/PressEvents';
import PressReleases from './components/pages/press/PressReleases';

// Подразделы Partners
import PartnersOur from './components/pages/partners/PartnersOur';
import PartnersInternational from './components/pages/partners/PartnersInternational';
import PartnersProjects from './components/pages/partners/PartnersProjects';
import PartnersConferences from './components/pages/partners/PartnersConferences';
import PartnersRole from './components/pages/partners/PartnersRole';

// Подразделы Contacts
import ContactsAddress from './components/pages/contacts/ContactsAddress';
import ContactsInfo from './components/pages/contacts/ContactsInfo';
import ContactsSocial from './components/pages/contacts/ContactsSocial';
import ContactsForm from './components/pages/contacts/ContactsForm';
import Footer from './components/Footer';


import DordoiLoadingAnimation from './components/DordoiLoadingAnimation';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  if (showAnimation) {
    return <DordoiLoadingAnimation onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        
        {/* Основной контент с отступом для фиксированного navbar */}
        <main className="pt-16">
          <Routes>
            {/* Главная страница */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />

            {/* Страницы About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/history" element={<AboutHistory />} />
            <Route path="/about/mission" element={<AboutMission />} />
            <Route path="/about/leadership" element={<AboutLeadership />} />
            <Route path="/about/structure" element={<AboutStructure />} />
            <Route path="/about/facts" element={<AboutFacts />} />

            {/* Страницы Activities */}
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/trade" element={<ActivitiesTrade />} />
            {/* <Route path="/activities/finance" element={<ActivitiesFinance />} /> */}
            <Route path="/activities/education" element={<ActivitiesEducation />} />
            <Route path="/activities/medicine" element={<ActivitiesMedicine />} />
            <Route path="/activities/sports" element={<ActivitiesSports />} />
            <Route path="/activities/culture" element={<ActivitiesCulture />} />
            {/* <Route path="/activities/social" element={<ActivitiesSocial />} /> */}

            {/* Страницы Press */}
            <Route path="/press" element={<PressPage />} />
            <Route path="/press/news" element={<PressNews />} />
            <Route path="/press/media" element={<PressMedia />} />
            <Route path="/press/publications" element={<PressPublications />} />
            {/* <Route path="/press/events" element={<PressEvents />} /> */}
            {/* <Route path="/press/releases" element={<PressReleases />} /> */}

            {/* Страницы Partners */}
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/partners/our" element={<PartnersOur />} />
            <Route path="/partners/international" element={<PartnersInternational />} />
            <Route path="/partners/projects" element={<PartnersProjects />} />
            {/* <Route path="/partners/conferences" element={<PartnersConferences />} /> */}
            <Route path="/partners/role" element={<PartnersRole />} />

            {/* Страницы Contacts */}
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/contacts/address" element={<ContactsAddress />} />
            <Route path="/contacts/info" element={<ContactsInfo />} />
            <Route path="/contacts/social" element={<ContactsSocial />} />
            <Route path="/contacts/form" element={<ContactsForm />} />

            {/* Страница 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>

    </Router>
  );
}

// Компонент страницы 404
const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md mx-auto">
        <div className="text-8xl font-bold text-slate-300 mb-4">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Страница не найдена</h1>
        <p className="text-slate-600 mb-8">
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <a 
          href="/" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
        >
          Вернуться на главную
        </a>
      </div>
    </div>
  </div>
);

export default App;