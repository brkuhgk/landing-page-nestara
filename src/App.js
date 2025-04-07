import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import RatingSystem from './components/RatingSystem';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <RatingSystem />
              <Features />
              <CallToAction />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;