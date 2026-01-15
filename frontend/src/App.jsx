// React & State
import { useState } from 'react';

// CSS
import './App.css';

// Navbar
import Navbar from './components/navbars/Navbar';

// Footers
import FooterHomeChecker from './components/footers/FooterHomeChecker';
import FooterLoggedOut from './components/footers/FooterLoggedOut';
import FooterRescueOrg from './components/footers/FooterRescueOrg';

// Public Pages
import Home from './pages/public_pages/Home';
import RescueOrgOverview from './pages/public_pages/RescueOrgOverview';
import SignUpRescueOrg from './pages/pages_rescue_orgs/SignUpRescueOrg';
import HomeCheckerOverview from './pages/public_pages/HomeCheckerOverview';
import HomeCheckerSignup from './pages/public_pages/HomeCheckerSignup';
import AdoptersOverview from './pages/public_pages/AdoptersOverview';
import Contact from './pages/public_pages/Contact';
import Imprint from './pages/public_pages/Imprint';
import DataProtection from './pages/public_pages/DataProtection';
import TermsAndConditions from './pages/public_pages/TermsAndConditions';

// Rescue Org Pages
import RescueOrgDash from './pages/pages_rescue_orgs/RescueOrgDash';
import AddDog from './pages/pages_rescue_orgs/AddDog';
import EditDog from './pages/pages_rescue_orgs/EditDog';
import MyDogs from './pages/pages_rescue_orgs/MyDogs';
import DogProfile from './pages/pages_rescue_orgs/DogProfile';
import ReviewApplication from './pages/pages_rescue_orgs/ReviewApplication';

// Home Checker Pages
import HomeCheckerDash from './pages/pages_home_checkers/HomeCheckerDash';
import HomeCheckReview from './pages/pages_home_checkers/HomeCheckReview';
import HomeCheckReviewDetail from './pages/pages_home_checkers/HomeCheckReviewDetail';

// Adopters Pages
import Application from './pages/pages_adopters/Application';

// React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
      <>
      <Navbar />

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/tierschutzvereine" element={<RescueOrgOverview />} />
        <Route path="/tierschutzvereine/registrieren" element={<SignUpRescueOrg />} />
        <Route path="/ehrenamt-im-tierschutz" element={<HomeCheckerOverview />} />
        <Route path="/ehrenamt-im-tierschutz/registrieren" element={<HomeCheckerSignup />} />
        <Route path="/adoptanten" element={<AdoptersOverview />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<DataProtection />} />
        <Route path="/agb" element={<TermsAndConditions />} />

        {/* Rescue orgs */}
        <Route path="/tsv/ueberblick" element={<RescueOrgDash />} />
        <Route path="/tsv/hinzufuegen" element={<AddDog />} />
        <Route path="/tsv/meine-hunde" element={<MyDogs />} />
        <Route path="/tsv/hund/:id" element={<DogProfile />} />
        <Route path="/tsv/hund/:id/bearbeiten" element={<EditDog />} />


        <Route path="/tsv/bewerbung-pruefen" element={<ReviewApplication />} />

        {/* Home checkers */}
        <Route path="/vor-und-nachkontrollen/:id" element={<HomeCheckerDash />} />
        <Route path="/vor-und-nachkontrollen/:id/kontrolle/:id" element={<HomeCheckReview />} />
        <Route path="/vor-und-nachkontrollen/:id/kontrolle/:id/detail" element={<HomeCheckReviewDetail />} />

        {/* Adopters */}
        <Route path="/bewerbung" element={<Application />} />
      </Routes>
      </>
  );
}

export default App;
