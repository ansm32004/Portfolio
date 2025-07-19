import { useState } from 'react';
import { Github } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false); // close mobile menu if open
    }
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-4xl animate-fade-in">
      <div className="bg-black/80 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 hover:bg-black/90 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10 hover:scale-[1.02]">
        <div className="flex items-center justify-between">
          <div
            className="text-white font-bold text-xl hover:scale-110 transition-transform duration-300 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            ansmfx
            <div className="h-0.5 w-0 bg-white group-hover:w-full transition-all duration-500 mt-1"></div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'projects-section', 'skills-section', 'contact-section'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition-all duration-300 hover:scale-110 active:scale-95 relative group ${
                  activeSection === id
                    ? 'text-white font-medium'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {id === 'projects-section' ? 'Work' : id.replace('-section', '').charAt(0).toUpperCase() + id.replace('-section', '').slice(1)}
                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 transition-all duration-300 ${
                    activeSection === id ? 'w-full bg-white' : 'w-0 bg-white group-hover:w-full'
                  }`}
                ></div>
              </button>
            ))}
          </nav>

          {/* External Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ansm32004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-12 active:scale-95"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://behance.net/ansmfx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium hover:scale-125 active:scale-95 border border-white/20 px-3 py-1 rounded-full hover:border-white/40 hover:bg-white/10"
              aria-label="Behance"
            >
              Be
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:scale-110 transition-transform duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 space-y-4 text-center transition-all duration-300">
          {['home', 'projects-section', 'skills-section', 'contact-section'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block w-full py-2 transition-all duration-300 ${
                activeSection === id ? 'text-white font-medium' : 'text-white/80 hover:text-white'
              }`}
            >
              {id === 'projects-section' ? 'Work' : id.replace('-section', '').charAt(0).toUpperCase() + id.replace('-section', '').slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
