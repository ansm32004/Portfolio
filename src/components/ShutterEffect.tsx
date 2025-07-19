import { useState, useEffect } from 'react';

const ShutterEffect = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isShutterOpen, setIsShutterOpen] = useState(false);
  const [shutterComplete, setShutterComplete] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Start opening shutter after minimal scroll
      if (currentScrollY > 50 && !isShutterOpen) {
        setIsShutterOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isShutterOpen]);

  // Calculate shutter opening progress (0 to 1) - only if not complete
  const openProgress = shutterComplete ? 1 : Math.min(scrollY / 300, 1);
  
  // Mark shutter as complete when fully opened
  useEffect(() => {
    if (openProgress >= 0.99 && !shutterComplete) {
      setShutterComplete(true);
    }
  }, [openProgress, shutterComplete]);
  
  // Shutter panel positions - stay open once complete
  const leftPanelTransform = isShutterOpen ? `translateX(-${openProgress * 100}%)` : 'translateX(0%)';
  const rightPanelTransform = isShutterOpen ? `translateX(${openProgress * 100}%)` : 'translateX(0%)';
  
  // Text opacity (fades out as shutter opens)
  const textOpacity = Math.max(1 - openProgress * 2, 0);

  // Hide component completely once shutter is complete
  if (shutterComplete) {
    return null;
  }

  return (
    <div className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-1000 ${openProgress >= 0.99 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Left Shutter Panel */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-black border-r border-white/20"
        style={{ 
          transform: leftPanelTransform,
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Decorative elements on left panel */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Right Shutter Panel */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-black border-l border-white/20"
        style={{ 
          transform: rightPanelTransform,
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      >
        {/* Decorative elements on right panel */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Central Content */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: textOpacity }}
      >
        <div className="text-center space-y-6">
          {/* Main Opening Line */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
              WELCOME
            </h1>
            <div className="w-32 h-px bg-white mx-auto"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-widest">
              TO THE COSMOS OF CREATIVITY
            </p>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-white/60 text-sm tracking-wider">SCROLL TO EXPLORE</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8" style={{ opacity: textOpacity }}>
        <div className="w-16 h-px bg-white/30"></div>
        <div className="w-px h-16 bg-white/30"></div>
      </div>
      <div className="absolute top-8 right-8" style={{ opacity: textOpacity }}>
        <div className="w-16 h-px bg-white/30 ml-auto"></div>
        <div className="w-px h-16 bg-white/30 ml-auto"></div>
      </div>
      <div className="absolute bottom-8 left-8" style={{ opacity: textOpacity }}>
        <div className="w-px h-16 bg-white/30"></div>
        <div className="w-16 h-px bg-white/30"></div>
      </div>
      <div className="absolute bottom-8 right-8" style={{ opacity: textOpacity }}>
        <div className="w-px h-16 bg-white/30 ml-auto"></div>
        <div className="w-16 h-px bg-white/30 ml-auto"></div>
      </div>
    </div>
  );
};

export default ShutterEffect;