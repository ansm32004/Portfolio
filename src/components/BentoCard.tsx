
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  className?: string;
  title: string;
  description: string;
  size: "small" | "medium" | "large" | "wide";
  children?: React.ReactNode;
  onClick?: () => void;
}

const BentoCard = ({ className, title, description, size, children, onClick }: BentoCardProps) => {
  const sizeClasses = {
    small: "h-40",
    medium: "h-48",
    large: "h-96",
    wide: "h-32"
  };

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden backdrop-blur-sm rounded-3xl border-white/10",
        "hover:bg-blue-500/10 hover:border-blue-400/30 transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10",
        "cursor-pointer transform-gpu",
        sizeClasses[size],
        className
      )}
      onClick={onClick}
    >
      <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-all duration-500 group-hover:translate-x-1">
            {title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed group-hover:text-blue-200 transition-all duration-500">
            {description}
          </p>
        </div>
        
        {children}
        
        {/* Enhanced hover effect overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-400/0 to-blue-600/0 group-hover:from-blue-500/5 group-hover:via-blue-400/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-3xl" />
        
        {/* Blue accent line that appears on hover */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-700" />
      </div>
      
      {/* Decorative corner element with blue glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-bl-3xl blur-sm" />
      
      {/* Subtle blue glow on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]" />
    </Card>
  );
};

export default BentoCard;
