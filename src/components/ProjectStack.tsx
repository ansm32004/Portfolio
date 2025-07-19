import { useState } from 'react';
import { ExternalLink } from 'lucide-react';


import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  journey: string;
  challenges: string;
  outcome: string;
  projectUrl: string;
  image?: string;
}

const ProjectStack = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Main project is the first, others are next three
  const projects: Project[] = [
    {
      id: 1,
      title: "Reimagining the Beat: Redesigning Apple Music",
      description: "A UX case study focused on transforming the Apple Music experience for modern users. Explored user pain points, conducted interviews, and crafted a new design system for improved discoverability and engagement.",
      tech: ["Figma", "UX Research", "Prototyping", "User Testing"],
      year: "2025",
      journey: "Started with in-depth user interviews and competitive analysis to identify core usability issues. Developed personas and user flows, then iteratively prototyped new navigation and recommendation features. Validated designs through multiple rounds of user testing and feedback.",
      challenges: "Balancing the needs of diverse user groups while maintaining brand consistency. Overcoming technical constraints in prototyping complex interactions. Ensuring accessibility and delight across devices.",
      outcome: "Delivered a comprehensive UX case study with actionable insights. The redesign improved user satisfaction scores by 30% in testing and was featured in a design showcase. Provided recommendations for future Apple Music enhancements.",

      projectUrl: "https://www.behance.net/gallery/230222899/Reimagining-the-Beat-Redesigning-Apple-Music",
      image: "/photos/pr1.png"
    },
    {
      id: 2,
      title: "Tasveer-A Photography Community-UI",
      description: "A modern UI for a photography community platform, designed to inspire and connect photographers. Features a clean layout, engaging gallery, and interactive elements for sharing and feedback.",
      tech: ["Figma", "UX Research", "Prototyping", "User Testing"],
      year: "2025",
      journey: "Focused on creating a visually appealing and user-friendly interface. Designed multiple gallery layouts, implemented feedback and like features, and ensured responsive design for all devices.",
      challenges: "Balancing aesthetics with usability, optimizing image loading for performance, and building a scalable UI for community growth.",
      outcome: "Launched a UI that increased user engagement and sharing. Received positive feedback from the photography community and showcased on Behance.",
    
      projectUrl: "https://www.behance.net/gallery/226894403/Tasveer-A-Photography-Communbity-UI",
      image: "/photos/pr.png"
    },
    {
      id: 3,
      title: "Spark Trend (DIGITAL MARKETING AGENCY)",
      description: "A bold and modern UI for Spark Trend, a digital marketing agency. Features a striking purple theme, dynamic visuals, and interactive elements to showcase services and client success stories.",
      tech: ["Figma", "UX Research", "Prototyping", "User Testing"],
      year: "2025",
      journey: "Designed a visually impactful interface to reflect the agency's creative energy. Developed custom graphics, animated elements, and a responsive layout to engage visitors and drive conversions.",
      challenges: "Creating a unique brand identity, optimizing for both aesthetics and performance, and integrating interactive features for client engagement.",
      outcome: "Delivered a UI that elevated Spark Trend's online presence, increased client inquiries, and was featured on Behance for its design innovation.",
     
      projectUrl: "https://www.behance.net/gallery/191265627/Spark-Trend(DIGITAL-MARKETING-AGENCY)",
      image: "/photos/pr3.webp"
    },
    
  ];

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects-section" className="py-12 md:py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto px-4">
            Interactive showcase of my latest work and creative solutions
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 md:gap-8 min-h-[400px] md:min-h-[600px]">
          {/* Main project - large box */}
          <div
            className="md:row-span-2 md:col-span-1 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 cursor-pointer group relative flex flex-col justify-end overflow-hidden hover:shadow-2xl hover:scale-[1.02] md:hover:scale-[1.03] transition-all duration-300 min-h-[300px] md:min-h-[400px]"
            onClick={() => handleCardClick(projects[0])}
          >
            {/* Project image for main card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-blue-400/10 flex items-center justify-center">
              {projects[0].image ? (
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="object-cover w-full h-full rounded-2xl md:rounded-3xl opacity-80 group-hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-white/30 text-4xl md:text-6xl">Image</span>
              )}
            </div>
            <div className="relative z-10 p-4 md:p-8">
              <div className="text-white/40 text-xs md:text-sm mb-2 group-hover:text-blue-200 transition-all duration-300">{projects[0].year}</div>
              <h3 className="text-white font-bold text-lg md:text-2xl mb-2 md:mb-4 group-hover:text-blue-100 transition-all duration-300 line-clamp-2">
                {projects[0].title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed group-hover:text-blue-200 transition-all duration-300 line-clamp-3 md:line-clamp-none">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mt-2 md:mt-4">
                {projects[0].tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-[10px] md:text-xs bg-white/10 text-white/80 px-2 md:px-3 py-1 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-100 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
                {projects[0].tech.length > 3 && (
                  <span className="text-[10px] md:text-xs bg-white/10 text-white/80 px-2 md:px-3 py-1 rounded-full">
                    +{projects[0].tech.length - 3}
                  </span>
                )}
              </div>
              <a
                href={projects[0].projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 md:gap-2 mt-3 md:mt-6 px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200 text-xs md:text-sm"
                onClick={(e) => e.stopPropagation()}
              >
                View Project <ExternalLink size={14} className="md:hidden" /><ExternalLink size={18} className="hidden md:block" />
              </a>
            </div>
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_20px_5px_rgba(59,130,246,0.15)] md:shadow-[0_0_40px_10px_rgba(59,130,246,0.15)]" />
          </div>

          {/* Other projects - small boxes */}
          {projects.slice(1, 4).map((project, idx) => (
            <div
              key={project.id}
              className="bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 cursor-pointer group relative flex flex-col justify-end overflow-hidden hover:shadow-2xl hover:scale-[1.02] md:hover:scale-105 transition-all duration-300 min-h-[250px] md:min-h-[280px]"
              onClick={() => handleCardClick(project)}
            >
              {/* Project image or placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-blue-400/5 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-2xl md:rounded-3xl opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-white/30 text-3xl md:text-4xl">Image</span>
                )}
              </div>
              <div className="relative z-10 p-4 md:p-6">
                <div className="text-white/40 text-[10px] md:text-xs mb-1 group-hover:text-blue-200 transition-all duration-300">{project.year}</div>
                <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-blue-100 transition-all duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-[10px] md:text-xs leading-relaxed group-hover:text-blue-200 transition-all duration-300 line-clamp-2 md:line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-1 md:mt-2">
                  {project.tech.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[8px] md:text-[10px] bg-white/10 text-white/80 px-1.5 md:px-2 py-0.5 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-100 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="text-[8px] md:text-[10px] bg-white/10 text-white/80 px-1.5 md:px-2 py-0.5 rounded-full">
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 mt-2 md:mt-4 px-2 md:px-3 py-1 md:py-1.5 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition-all duration-200 text-[10px] md:text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  View <ExternalLink size={12} className="md:hidden" /><ExternalLink size={16} className="hidden md:block" />
                </a>
              </div>
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_3px_rgba(59,130,246,0.10)] md:shadow-[0_0_20px_5px_rgba(59,130,246,0.10)]" />
            </div>
          ))}
        </div>
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default ProjectStack;
