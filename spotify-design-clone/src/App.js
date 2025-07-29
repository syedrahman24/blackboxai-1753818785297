import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedArticles from './components/FeaturedArticles';
import NewReleases from './components/NewReleases';
import ToolsSection from './components/ToolsSection';
import JobsSection from './components/JobsSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <FeaturedArticles />
          <NewReleases />
          <ToolsSection />
          <JobsSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
