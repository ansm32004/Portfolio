
const ExperienceRoadmap = () => {
  const experiences = [
    { 
      year: "2024", 
      title: "Co-Founder", 
      company: "Onn-Off Full-time",
      duration: "Oct 2024 - Present · 3 mos",
      location: "New Delhi, Delhi, India"
    },
    { 
      year: "2024", 
      title: "President", 
      company: "The Ace- DTC Full-time",
      duration: "Oct 2024 - Present · 3 mos",
      location: "Greater Delhi Area"
    },
    { 
      year: "2024", 
      title: "Organizer", 
      company: "The Ace- Tech Full-time",
      duration: "Jul 2024 - Present · 1 yr",
      location: "Delhi, India · Hybrid"
    },
    { 
      year: "2024", 
      title: "Organizer", 
      company: "GDSC Delhi-NCR Self-employed",
      duration: "Mar 2024 - Present · 1 yr 4 mos",
      location: "New Delhi, Delhi, India · On-site"
    },
    { 
      year: "2025", 
      title: "Design and Tech Intern", 
      company: "IndiDino Ventures Internship",
      duration: "Mar 2025 - May 2025 · 3 mos",
      location: "Remote"
    },
    { 
      year: "2024", 
      title: "Product Designer", 
      company: "Southern Immigration Full-time",
      duration: "Jul 2024 - Jan 2025 · 7 mos",
      location: "India · Remote"
    },
    { 
      year: "2023", 
      title: "Graphic Designer", 
      company: "GDSC-DTC Full-time",
      duration: "Nov 2023 - Sep 2024 · 11 mos",
      location: "New Delhi, Delhi, India"
    }
  ];

  return (
    <div className="mt-12 w-full max-w-4xl">
      <h3 className="text-white text-2xl font-bold mb-8 text-center transition-all duration-500 hover:scale-105 hover:text-blue-100 cursor-pointer">
        Experience Roadmap
      </h3>
      <div className="relative">
        {/* Enhanced vertical line with blue glow */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400/40 via-white/20 to-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/30 transition-all duration-500 min-h-[140px] flex flex-col justify-center hover:bg-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] cursor-pointer">
                  <div className="text-white/60 text-sm mb-2 group-hover:text-blue-200 transition-all duration-300">{exp.duration}</div>
                  <div className="text-white font-semibold text-lg mb-1 group-hover:text-blue-100 transition-all duration-300 group-hover:translate-x-1">{exp.title}</div>
                  <div className="text-white/80 text-base mb-2 group-hover:text-blue-100 transition-all duration-300">{exp.company}</div>
                  <div className="text-white/60 text-sm group-hover:text-blue-200 transition-all duration-300">{exp.location}</div>
                  
                  {/* Blue accent line that appears on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-700" />
                  
                  {/* Enhanced hover effect overlay with blue tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:via-blue-400/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-2xl" />
                  
                  {/* Blue glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]" />
                </div>
              </div>
              
              {/* Enhanced timeline dot with blue glow */}
              <div className="relative w-4 h-4 bg-white rounded-full border-4 border-black z-10 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-125 transition-all duration-300 cursor-pointer">
                {/* Inner blue glow */}
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceRoadmap;
