
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VendorPage from './pages/VendorPage';
import SponsorshipPage from './pages/SponsorshipPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vendor" element={<VendorPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
