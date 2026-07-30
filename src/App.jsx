import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import LeadGeneration from './pages/services/LeadGeneration';
import AppointmentSetting from './pages/services/AppointmentSetting';
import CustomerSupport from './pages/services/CustomerSupport';
import ITSolutions from './pages/services/ITSolutions';
import DigitalMarketing from './pages/services/DigitalMarketing';
import MarketResearch from './pages/services/MarketResearch';
import QA from './pages/services/QA';
import AboutPage from './pages/AboutPage';
import ServicesOverview from './pages/services/ServicesOverview';
import IndustriesPage from './pages/IndustriesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/b2b-lead-generation" element={<LeadGeneration />} />
        <Route path="/services/appointment-setting" element={<AppointmentSetting />} />
        <Route path="/services/customer-support" element={<CustomerSupport />} />
        <Route path="/services/it-solutions" element={<ITSolutions />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/market-research" element={<MarketResearch />} />
        <Route path="/services/quality-assurance" element={<QA />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;