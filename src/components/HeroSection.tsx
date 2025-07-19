
import { ArrowDown } from "lucide-react";
import ExperienceRoadmap from "./ExperienceRoadmap";
import SkillsStrip from "./SkillsStrip";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollClick: () => void;
}

const HeroSection = ({ onScrollClick }: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20 overflow-hidden">
      <div className="text-center space-y-12 max-w-4xl mx-auto w-full">
        {/* Main Hero Content with Simple Parallax */}
        <div 
          className="flex flex-col items-center justify-center space-y-8"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          {/* Text content - Perfectly Centered with Simple Hover Animations */}
          <div className="space-y-8 text-center">
            <div className="space-y-6">
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight transition-all duration-500 hover:scale-105 hover:text-blue-100 animate-fade-in group cursor-pointer"
              >
                My Portfolio
                <div className="h-1 w-0 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-4 group-hover:w-32 transition-all duration-700"></div>
              </h1>
              
              <p 
                className="text-2xl md:text-3xl text-white/90 font-light transition-all duration-500 hover:text-blue-200 animate-fade-in cursor-pointer"
              >
                Creative Developer & Designer
              </p>
            </div>
            
            <p 
              className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mx-auto transition-all duration-500 hover:text-blue-100 animate-fade-in cursor-pointer"
            >
              Crafting digital experiences through innovative design and cutting-edge technology. 
              Welcome to my creative journey where ideas come to life.
            </p>

            {/* CTA Button with Blue Accent */}
            <div className="animate-fade-in">
              <button
                onClick={onScrollClick}
                className="group inline-flex items-center space-x-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-10 py-5 text-white hover:bg-blue-500/30 hover:border-blue-300/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95"
              >
                <span className="text-lg font-medium group-hover:tracking-wider transition-all duration-300">View My Work</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-2 group-hover:scale-125 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Skills Strip */}
        <div 
          className="animate-fade-in transition-all duration-500 hover:scale-[1.02]"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
          }}
        >
          <SkillsStrip />
        </div>
        
        {/* Experience Roadmap Section */}
        <div 
          className="space-y-8 animate-fade-in pt-16 transition-all duration-500"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white transition-all duration-500 hover:scale-105 hover:text-blue-100 cursor-pointer">
              My Journey
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto transition-all duration-500 hover:text-blue-200 cursor-pointer">
              A timeline of my professional experience and growth
            </p>
          </div>
          
          <div className="flex justify-center">
            <ExperienceRoadmap />
          </div>
        </div>
        
        {/* Simple Scroll Indicator with Blue Accent */}
        <div 
          className="animate-fade-in pt-12 transition-all duration-500"
          style={{
            transform: `translateY(${scrollY * -0.08}px)`,
          }}
        >
          <div className="flex flex-col items-center space-y-4">
            <span className="text-white/40 text-sm uppercase tracking-wider transition-all duration-300 hover:text-blue-300 hover:tracking-widest cursor-pointer">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex justify-center transition-all duration-300 hover:border-blue-300/50 hover:scale-110">
              <div className="w-1 h-3 bg-blue-400/50 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple Decorative elements with Blue Glow */}
      <div 
        className="absolute top-1/4 left-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-10 w-40 h-40 bg-gradient-to-l from-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse transition-all duration-1000"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 transition-all duration-1000"
        style={{
          transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0003})`,
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
