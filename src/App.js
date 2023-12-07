import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Faq from './Frequent'
import FirstFlex from './FirstFlex';
import DownloadComp from './Download';
import SecondFlex from './SecondFlex';
import Reviews from './Reviews';
import Band from './Band';
import Picture from './Picture';
import SecondBand from './SecondBand'
import Footer from './Footer';
import Privacy from './Privacy';
import Support from './Support';
import './globals.css'

const Home = () => <div>
  <Banner />
  <FirstFlex />
  <SecondFlex />
  <DownloadComp />
  <Reviews />
  <Band />
  <Picture />
  <SecondBand />
</div>;
const Questions = () => <div className='w-full flex flex-col justify-center items-center'>
  <Faq />
</div>;
const PrivacyPolicy = () => <div className='w-full flex flex-col justify-center bg-primary items-center'>
    <Privacy />
  </div>
const SupportPage = () => <div>
  <Support />
</div>;

const App = () => (
  <Router>
    <div className='w-full flex flex-col justify-between'>
      <Header />
      <Routes className='w-full'>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Questions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;