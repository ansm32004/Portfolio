
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectStack from "../components/ProjectStack";
import SkillsSection from "../components/SkillsSection";
import PhotographySection from "../components/PhotographySection";
import BentoGrid from "../components/BentoGrid";
import MouseCursor from "../components/MouseCursor";
import ShutterEffect from "../components/ShutterEffect";

const Index = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Strong dark overlay */}
      <div className="fixed inset-0 bg-black/60 z-0"></div>
      {/* Bold Black & White Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Crisp geometric shapes */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-white/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Clean Interactive Solar System */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Central Sun - Interactive */}
          <div className="absolute w-12 h-12 bg-white rounded-full animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-125 cursor-pointer z-10" 
               style={{animationDuration: '2s'}}
               onClick={() => console.log('Sun clicked!')}>
          </div>
          
          {/* Mercury Orbit */}
          <div className="absolute w-24 h-24 rounded-full border border-white/15 animate-spin" style={{animationDuration: '6s'}}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1 hover:scale-150 hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                 onClick={() => console.log('Mercury clicked!')}></div>
          </div>
          
          {/* Venus Orbit */}
          <div className="absolute w-32 h-32 rounded-full border border-white/12 animate-spin" style={{animationDuration: '8s'}}>
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1.25 hover:scale-150 hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                 onClick={() => console.log('Venus clicked!')}></div>
          </div>
          
          {/* Earth Orbit */}
          <div className="absolute w-48 h-48 rounded-full border border-white/15 animate-spin" style={{animationDuration: '12s'}}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1.5 hover:scale-175 transition-all duration-200 cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] group"
                 onClick={() => console.log('Earth clicked!')}>
              {/* Moon */}
              <div className="absolute w-6 h-6 rounded-full animate-spin group-hover:animate-spin" style={{animationDuration: '2s'}}>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-3 hover:scale-150 hover:bg-white transition-all duration-200"></div>
              </div>
            </div>
          </div>
          
          {/* Mars Orbit */}
          <div className="absolute w-64 h-64 rounded-full border border-white/10 animate-spin" style={{animationDuration: '18s'}}>
            <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1.25 hover:scale-150 hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                 onClick={() => console.log('Mars clicked!')}></div>
          </div>
          
          {/* Jupiter Orbit */}
          <div className="absolute w-80 h-80 rounded-full border border-white/8 animate-spin" style={{animationDuration: '30s'}}>
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-gray-100 rounded-full transform -translate-x-1/2 -translate-y-2 hover:scale-150 hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-[0_0_18px_rgba(255,255,255,0.6)]"
                 onClick={() => console.log('Jupiter clicked!')}></div>
          </div>
          
          {/* Saturn Orbit */}
          <div className="absolute w-96 h-96 rounded-full border border-white/6 animate-spin" style={{animationDuration: '45s'}}>
            <div className="absolute top-0 left-1/2 w-3.5 h-3.5 bg-gray-200 rounded-full transform -translate-x-1/2 -translate-y-1.75 hover:scale-150 hover:bg-white transition-all duration-200 cursor-pointer hover:shadow-[0_0_16px_rgba(255,255,255,0.6)] group"
                 onClick={() => console.log('Saturn clicked!')}>
              {/* Saturn's Ring */}
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 group-hover:border-white/40 transition-colors duration-200"></div>
            </div>
          </div>
          
          {/* Clean Star Field */}
          {Array.from({length: 6}).map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse hover:scale-300 hover:bg-white transition-all duration-200 cursor-pointer"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${30 + Math.random() * 40}%`,
                animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
              onClick={() => console.log('Star clicked!')}
            ></div>
          ))}
        </div>
        
        {/* Crisp light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/8 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <ShutterEffect />
      <Header />
      <HeroSection onScrollClick={scrollToProjects} />
      <ProjectStack />
      <SkillsSection />
      <PhotographySection />
      <section id="bento-section" className="min-h-screen py-20 relative z-10">
        <BentoGrid />
      </section>
      <section id="contact-section" className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <a 
            href="mailto:anshuman@onnoff.in"
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
