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
      <div className="w-full aspect-[338/384] bg-gray-200 rounded-[20px] overflow-hidden mb-6">
        {image && (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-[28px] leading-[44px] font-medium text-black mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-lg leading-6 font-normal text-black mb-3">
        {description}
      </p>

      {/* Link */}
      {link && (
        <a 
          href={link}
          className="text-lg leading-6 font-normal text-black hover:opacity-70 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          {link}
        </a>
      )}
    </div>
  );
}
