
import { useState } from 'react';
import BentoCard from "./BentoCard";
import { FaInstagram, FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa';

const BentoGrid = () => {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const cardData = [
    {
      title: "Featured Projects",
      description: "A selection of my best work.",
      size: "large" as const,
      details: (
        <>
          <div className="flex flex-row gap-4 justify-center mb-4">
            <a href="#project-reimagining" className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition">Reimagining the Beat</a>
            <a href="#project-tasveer" className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition">Tasveer</a>
            <a href="#project-spark" className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition">Spark Trend</a>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li id="project-reimagining"><span className="font-semibold text-white">Reimagining the Beat:</span> Redesigning Apple Music</li>
            <li id="project-tasveer"><span className="font-semibold text-white">Tasveer:</span> AI-powered photo curation</li>
            <li id="project-spark"><span className="font-semibold text-white">Spark Trend:</span> Social media analytics dashboard</li>
          </ul>
        </>
      )
    },
    {
      title: "Skills",
      description: "Figma,SQL, Unity, C++, AR/VR, UI/UX Design, Photography,  Git, Python, Blender, Illustrator, Photoshop, Premiere Pro, After Effects,.",
      size: "medium" as const,
      details: "A multidisciplinary skillset covering frontend, backend, design, and creative technologies. I thrive in fast-paced environments and love solving complex problems with elegant solutions."
    },
    {
      title: "About Me",
      description: "Creative technologist, designer, and photographer",
      size: "medium" as const,
      details: "Hi! I'm a passionate developer and designer with a love for blending technology and art. I specialize in building immersive web experiences, crafting beautiful interfaces, and capturing moments through photography. Always learning, always creating."
    },
    {
      title: "Experience",
      description: "Senior Frontend Developer, Co-Founder, President, Designer, Photographer",
      size: "wide" as const,
      details: (
        <ul className="list-disc pl-6 space-y-2 text-white/80">
          <li>Senior Frontend Developer at Tech Company</li>
          <li>Co-Founder at OmniOTL</li>
          <li>President at The Ace-OTC</li>
          <li>Lead Designer & Photographer at Spark Trend</li>
          <li>UX/UI Designer for Tasveer</li>
          <li>Freelance Creative for multiple startups</li>
        </ul>
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto items-start">
        {/* Render main cards */}
        {cardData.map((card, index) => (
          <BentoCard
            key={index}
            className={`bg-white/5 border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 ${
              card.size === 'large' ? 'md:col-span-2 md:row-span-2' :
              card.size === 'wide' ? 'md:col-span-2' :
              card.size === 'small' ? 'md:col-span-1' : ''
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
              <div className="w-full mt-4">{card.details}</div>
            )}
          </BentoCard>
        ))}
        {/* Social/contact row: force all 4 buttons in a single row */}
        <div className="col-span-1 md:col-span-3 lg:col-span-5 flex flex-row gap-8 justify-center items-center py-2">
          {socialCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white/5 border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center p-6 rounded-3xl min-w-[110px] shadow-lg"
              onClick={() => window.open(card.link, '_blank', 'noopener,noreferrer')}
              tabIndex={0}
              role="button"
              onKeyPress={e => { if (e.key === 'Enter') window.open(card.link, '_blank', 'noopener,noreferrer'); }}
            >
              {card.icon}
              <span className="text-white font-semibold text-lg mb-1">{card.title}</span>
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
