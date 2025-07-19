
interface ProjectCompletionBoxProps {
  title: string;
  percentage: number;
  status: "completed" | "in-progress" | "upcoming";
}

const ProjectCompletionBox = ({ title, percentage, status }: ProjectCompletionBoxProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "completed": return "bg-white";
      case "in-progress": return "bg-white/60";
      case "upcoming": return "bg-white/20";
      default: return "bg-white/20";
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-medium text-sm">{title}</h4>
        <span className="text-white/60 text-xs">{percentage}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-500 ${getStatusColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="mt-2">
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === "completed" 
            ? "bg-white/20 text-white" 
            : status === "in-progress" 
            ? "bg-white/10 text-white/80" 
            : "bg-white/5 text-white/60"
        }`}>
          {status.replace("-", " ")}
        </span>
      </div>
    </div>
  );
};

export default ProjectCompletionBox;
