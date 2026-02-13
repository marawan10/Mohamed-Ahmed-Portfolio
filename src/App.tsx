import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { SEO } from './components/layout/SEO';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/utils/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { PageLayout } from './components/layout/PageLayout';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
            <SEO />
            <Header />
            <main className="min-h-[calc(100vh-100px)] pt-20 pb-12">
              <Routes>
                <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
                <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
                <Route path="/skills" element={<PageLayout><SkillsPage /></PageLayout>} />
                <Route path="/experience" element={<PageLayout><ExperiencePage /></PageLayout>} />
                <Route path="/projects" element={<PageLayout><ProjectsPage /></PageLayout>} />
                <Route path="/contact" element={<PageLayout><ContactPage /></PageLayout>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
