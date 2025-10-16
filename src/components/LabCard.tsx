import { Link } from "react-router-dom";

interface LabCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  onClick?: () => void;
}

export default function LabCard({ title, description, image, link, onClick }: LabCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="group cursor-pointer"
      onClick={handleClick}
    >
      {/* Image Container */}
      <div className="w-full aspect-[338/384] bg-gray-200 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] overflow-hidden mb-2 sm:mb-3 md:mb-4 lg:mb-6">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-tight font-medium text-black mb-1">
        {title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-normal text-black mb-1 sm:mb-2">
        {description}
      </p>

      {/* Link */}
      {link && (
        <Link 
          to="/membership"
          className="text-sm sm:text-base md:text-lg leading-relaxed font-normal text-black hover:opacity-70 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          {link}
        </Link>
      )}
    </div>
  );
}
