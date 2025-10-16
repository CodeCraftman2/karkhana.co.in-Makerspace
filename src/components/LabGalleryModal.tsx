import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LabGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  labName: string;
  images: string[];
}

export default function LabGalleryModal({ isOpen, onClose, labName, images }: LabGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-[1200px] p-0 bg-transparent border-0">
        <DialogTitle className="sr-only">{labName} gallery</DialogTitle>
        <div className="relative bg-white rounded-[20px] overflow-hidden">
          {/* Main Image Display */}
          <div className="relative aspect-[16/9] bg-gray-200">
            {images[currentIndex] && (
              <img 
                src={images[currentIndex]} 
                alt={`${labName} - Image ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
            )}

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-black flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>

            {/* Lab Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 md:p-12">
              <h2 className="text-white text-2xl md:text-[32px] leading-[44px] font-medium">
                {labName}
              </h2>
            </div>
          </div>

          {/* Thumbnail Indicators */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-[80px] h-[50px] rounded-[13px] transition-all ${
                  index === currentIndex 
                    ? 'bg-white border-2 border-black' 
                    : 'bg-white/80 border border-white hover:bg-white'
                }`}
              >
                <span className="sr-only">Go to image {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
