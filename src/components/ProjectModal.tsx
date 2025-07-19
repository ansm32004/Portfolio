
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: string;
  journey: string;
  challenges: string;
  outcome: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white mb-4">
            {project.title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/60 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Overview */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Project Overview</h3>
            <p className="text-white/80 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Journey */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Development Journey</h3>
            <p className="text-white/80 leading-relaxed">{project.journey}</p>
          </div>

          {/* Challenges */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Challenges Faced</h3>
            <p className="text-white/80 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Outcome */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Outcome & Impact</h3>
            <p className="text-white/80 leading-relaxed">{project.outcome}</p>
          </div>

          {/* Timeline */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Timeline</h3>
            <p className="text-white/60">Completed in {project.year}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
