
const SkillsStrip = () => {
  const skills = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe PS", icon: "🖼️" },
    { name: "Adobe XD", icon: "🖌️" },
    { name: "Adobe AI", icon: "🖍️" },
    { name: "Adobe PR", icon: "🎥" },
    { name: "Blender", icon: "🔶" },
    { name: "After Effects", icon: "🎬" },
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "🗄️" },
    { name: "Unity", icon: "🕹️" },
    { name: "C++", icon: "💻" },
    { name: "AR/VR", icon: "🕶️" },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden bg-black/30 backdrop-blur-sm border border-blue-400/20 rounded-3xl py-4">
      <div className="flex animate-scroll space-x-8 whitespace-nowrap">
        {duplicatedSkills.map((skill, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 bg-white/10 border border-blue-400/20 rounded-full px-8 py-2 min-w-fit hover:bg-blue-500/20 hover:border-blue-300/40 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer hover:scale-105 transform-gpu"
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="text-white font-medium text-lg group-hover:text-blue-100 transition-colors duration-300">{skill.name}</span>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `
      }} />
    </div>
  );
};

export default SkillsStrip;
