
import { useState } from 'react';
import BentoCard from "./BentoCard";
import { FaInstagram, FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';

const BentoGrid = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const cardData = [
    {
      title: "About Me",
      description: "Creative technologist, designer, and photographer",
      size: "medium" as const,
      details: "Hi! I'm a passionate developer and designer with a love for blending technology and art. I specialize in building immersive web experiences, crafting beautiful interfaces, and capturing moments through photography. Always learning, always creating."
    },
    {
      title: "Skills",
      description: "Technical expertise across design and development",
      size: "medium" as const,
      details: "Figma • SQL • Unity • C++ • AR/VR • UI/UX Design • Photography • Git • Python • Blender • Illustrator • Photoshop • Premiere Pro • After Effects"
    },
    {
      title: "Featured Projects",
      description: "A selection of my best work",
      size: "large" as const,
      details: (
        <>
          <div className="space-y-3">
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-white font-semibold mb-1">Reimagining the Beat</h4>
              <p className="text-white/60 text-sm">Redesigning Apple Music interface</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-white font-semibold mb-1">Tasveer</h4>
              <p className="text-white/60 text-sm">AI-powered photo curation platform</p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl">
              <h4 className="text-white font-semibold mb-1">Spark Trend</h4>
              <p className="text-white/60 text-sm">Social media analytics dashboard</p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "Experience",
      description: "Professional journey and key roles",
      size: "wide" as const,
      details: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-white font-medium text-sm">Senior Frontend Developer</h4>
            <p className="text-white/60 text-xs">Tech Company</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-white font-medium text-sm">Co-Founder</h4>
            <p className="text-white/60 text-xs">OmniOTL</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-white font-medium text-sm">President</h4>
            <p className="text-white/60 text-xs">The Ace-OTC</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <h4 className="text-white font-medium text-sm">Lead Designer & Photographer</h4>
            <p className="text-white/60 text-xs">Spark Trend</p>
          </div>
        </div>
      )
    },
  ];

  const socialCards = [
    {
      title: "Instagram",
      description: "",
      icon: <FaInstagram size={32} className="mb-2" color="#E4405F" />,
      link: "https://instagram.com/ansminpixels"
    },
    {
      title: "GitHub",
      description: "",
      icon: <FaGithub size={32} className="mb-2" color="#181717" />,
      link: "https://github.com/ansm32004"
    },
    {
      title: "Behance",
      description: "",
      icon: <FaBehance size={32} className="mb-2" color="#1769FF" />,
      link: "https://behance.net/ansmfx"
    },
    {
      title: "Get in Touch",
      description: "",
      icon: <FaEnvelope size={32} className="mb-2" color="#0099FF" />,
      link: "mailto:anshuman@onnoff.in"
    },
  ];

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Work
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
          A collection of projects, skills, and experiences that define my creative journey
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Render main cards */}
        {cardData.map((card, index) => (
          <BentoCard
            key={index}
            className={`bg-white/5 border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 ${
              card.size === 'large' ? 'md:col-span-2 md:row-span-2' :
              card.size === 'wide' ? 'md:col-span-2' :
              'md:col-span-1'
            }`}
            title={card.title}
            description={card.description}
            size={card.size}
            onClick={() => handleCardClick(card)}
          >
            {/* Render details as JSX if present */}
            {typeof card.details === 'string' ? (
              <div className="absolute bottom-4 right-4">
                <span className="text-white/40 text-xs">Click to explore</span>
              </div>
            ) : (
              <div className="w-full mt-4 overflow-hidden">{card.details}</div>
            )}
          </BentoCard>
        ))}
        
        {/* Social/contact row */}
        <div className="col-span-1 md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {socialCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center p-4 rounded-2xl shadow-lg"
              onClick={() => window.open(card.link, '_blank', 'noopener,noreferrer')}
              tabIndex={0}
              role="button"
              onKeyPress={e => { if (e.key === 'Enter') window.open(card.link, '_blank', 'noopener,noreferrer'); }}
            >
              {card.icon}
              <span className="text-white font-medium text-sm text-center">{card.title}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedCard && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedCard.title}</h3>
              <button
                onClick={() => setSelectedCard(null)}
                className="text-white/60 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-white/60 mb-4">{selectedCard.description}</p>
            <p className="text-white/80 leading-relaxed">{selectedCard.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BentoGrid;
