
import React, { useState } from 'react';
import { FaFigma, FaPython, FaDatabase, FaUnity, FaCuttlefish, FaVrCardboard, FaPhotoVideo, FaBlender, FaRegImage, FaPenNib, FaVideo, FaReact } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobexd, SiAdobeillustrator, SiAdobepremierepro, SiBlender, SiCplusplus } from 'react-icons/si';


interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  description: string;
  onClick: () => void;
}

const SkillCard = ({ name, icon, level, description, onClick }: SkillCardProps) => {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-center items-center mb-4">
        <span className="text-4xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">{icon}</span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2 text-center">{name}</h3>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className="h-2 bg-white rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-white/60 text-sm mt-2 block text-center">{level}%</span>
      <p className="text-white/40 text-xs text-center mt-2">Click to learn more</p>
    </div>
  );
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  const skills = [
    { 
      name: "Figma", 
      icon: <FaFigma color="#A259FF" />, 
      level: 85,
      description: "Proficient in UI/UX design using Figma. Created design systems, prototypes, and collaborated with design teams. Experience in user research and wireframing."
    },
    { 
      name: "Adobe PS", 
      icon: <SiAdobephotoshop color="#31A8FF" />, 
      level: 88,
      description: "Advanced Photoshop skills for digital design and photo manipulation. Experience in creating marketing materials, web graphics, and photo editing for various projects."
    },
    { 
      name: "Adobe XD", 
      icon: <SiAdobexd color="#FF61F6" />, 
      level: 75,
      description: "UI/UX prototyping and wireframing with Adobe XD. Designed interactive prototypes and collaborated on design handoffs."
    },
    { 
      name: "Adobe AI", 
      icon: <SiAdobeillustrator color="#FF9A00" />, 
      level: 85,
      description: "Vector illustration and logo design in Adobe Illustrator. Created icons, branding assets, and scalable graphics."
    },
    { 
      name: "Adobe PR", 
      icon: <SiAdobepremierepro color="#EA77FF" />, 
      level: 70,
      description: "Video editing and post-production in Adobe Premiere Pro. Edited marketing videos, YouTube content, and social media clips."
    },
    { 
      name: "Blender", 
      icon: <SiBlender color="#F5792A" />, 
      level: 50,
      description: "3D modeling and animation in Blender. Created assets for web projects, architectural visualizations, and product renders. Basic knowledge of texturing and lighting."
    },
    { 
      name: "After Effects", 
      icon: <FaPhotoVideo color="#9999FF" />, 
      level: 50,
      description: "Motion graphics and video editing in After Effects. Created promotional videos, UI animations, and visual effects for digital projects and presentations."
    },
    { 
      name: "Python", 
      icon: <FaPython color="#3776AB" />, 
      level: 80,
      description: "Programming and scripting in Python. Experience with automation, data analysis, and backend development."
    },
    { 
      name: "SQL", 
      icon: <FaDatabase color="#00618A" />, 
      level: 77,
      description: "Database design and management with SQL. Experience in writing complex queries, optimizing performance, and ensuring data integrity for applications."
    },
    { 
      name: "Unity", 
      icon: <FaUnity color="#222C37" />, 
      level: 50,
      description: "Game and interactive experience development in Unity. Built 2D/3D games, simulations, and interactive AR/VR content using C# scripting."
    },
    { 
      name: "C++", 
      icon: <SiCplusplus color="#00599C" />, 
      level: 50,
      description: "Programming in C++ for high-performance applications, game engines, and system-level software. Solid understanding of OOP and memory management."
    },
    { 
      name: "AR/VR", 
      icon: <FaVrCardboard color="#FFB300" />, 
      level: 50,
      description: "Augmented and Virtual Reality development. Created immersive experiences and prototypes for web and mobile using Unity and WebXR."
    },
  ];

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills-section" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The software and technologies I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index} 
              {...skill} 
              onClick={() => handleSkillClick(skill)}
            />
          ))}
        </div>

        {selectedSkill && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{selectedSkill.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{selectedSkill.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 mb-4">
                <div 
                  className="h-3 bg-white rounded-full transition-all duration-500"
                  style={{ width: `${selectedSkill.level}%` }}
                />
              </div>
              <p className="text-white/80 leading-relaxed">{selectedSkill.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
