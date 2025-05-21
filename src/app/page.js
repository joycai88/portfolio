"use client";

import { useState } from 'react';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div className="bg-white min-h-screen flex flex-col font-mono">
      <header className="bg-blue-600 bg-opacity-50 p-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => setActiveSection(section)}
                      className={`px-3 py-1 rounded-md ${
                        activeSection === section
                          ? 'bg-yellow-400 text-blue-800'
                          : 'text-yellow-200 hover:bg-blue-700'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow p-4"
      style={{ backgroundImage: 'url("stardew_background.jpg")' }}>
        <div className="max-w-6xl mx-auto">
          {activeSection === 'home' && <HomePage />}
          {activeSection === 'about' && <AboutPage />}
          {activeSection === 'projects' && <ProjectsPage />}
          {activeSection === 'experience' && <ExperiencePage />}
          {activeSection === 'contact' && <ContactPage />}
        </div>
      </main>
    </div>
  );
}
