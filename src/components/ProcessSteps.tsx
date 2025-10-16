import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const steps = [
  {
    number: "01.",
    title: "Discover Your Needs",
    description: "We listen and understand your goals, users, and space to tailor a solution that fits."
  },
  {
    number: "02.",
    title: "Design & Plan",
    description: "Collaborative layout and workflow design to maximize efficiency and creativity."
  },
  {
    number: "03.",
    title: "Equip & Supply",
    description: "Sourcing and installing the right tools and machines based on your requirements."
  },
  {
    number: "04.",
    title: "Train & Onboard",
    description: "Comprehensive training for your team and users to ensure smooth operations."
  },
  {
    number: "05.",
    title: "Launch & Engage",
    description: "Support during your makerspace launch with workshops and community activation."
  },
  {
    number: "06.",
    title: "Supply & Service",
    description: "Ongoing equipment maintenance, upgrades, and support to keep your makerspace running smoothly."
  }
];

export default function ProcessSteps() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // Default for desktop
  
  // Calculate maxIndex based on current cardsPerView
  const maxIndex = Math.max(0, steps.length - cardsPerView);

  // Update cardsPerView based on screen size
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(2); // Mobile: 2 cards
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3); // Tablet: 3 cards
      } else {
        setCardsPerView(4); // Desktop: 4 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Reset currentIndex when cardsPerView changes to prevent out-of-bounds
  React.useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsPerView, maxIndex, currentIndex]);

  const nextCards = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevCards = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-tight font-medium text-black mb-8 sm:mb-12 lg:mb-16" style={{ letterSpacing: '-0.02em' }}>
          Our 6-Step Process to<br />Create Your Makerspace
        </h2>

        {/* Top Border */}
        <div className="border-t border-gray-300 mb-8" />

        {/* Steps Carousel Container */}
        <div className="relative mb-8">
          {/* Steps Carousel */}
          <div className="overflow-hidden px-8 sm:px-12 md:px-16 lg:px-20"> 
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {steps.map((step, index) => (
                <div key={index} className="w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2 sm:px-4">
                  <div className="space-y-3 sm:space-y-4 md:space-y-6">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-black">{step.number}</p>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-black min-h-[30px] sm:min-h-[40px] md:min-h-[50px] lg:min-h-[60px]">{step.title}</h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-base leading-relaxed font-normal text-black">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Positioned absolutely but outside content area */}
          {/* Left Arrow Navigation - Show when not at the beginning */}
          {currentIndex > 0 && (
            <button 
              onClick={prevCards}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-100 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" strokeWidth={1.5} />
            </button>
          )}

          {/* Right Arrow Navigation - Show when not at the end */}
          {currentIndex < maxIndex && (
            <button 
              onClick={nextCards}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 p-2 sm:p-3 md:p-4 rounded-full hover:bg-gray-100 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mb-8" />
        
        {/* Remove the old Arrow Navigation div */}
      </div>
    </section>
  );
}