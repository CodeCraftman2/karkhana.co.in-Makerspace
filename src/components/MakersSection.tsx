import React, { useState } from "react";

const makers = [
  { id: 1, name: "Twinverse Technologies" },
  { id: 2, name: "Twinverse Technologies" },
  { id: 3, name: "Twinverse Technologies" },
  { id: 4, name: "Twinverse Technologies" },
  { id: 5, name: "Twinverse Technologies" },
  { id: 6, name: "Twinverse Technologies" },
  { id: 7, name: "Twinverse Technologies" },
  { id: 8, name: "Twinverse Technologies" }
];

export default function MakersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4); // Default for desktop
  
  // Calculate maxIndex based on current cardsPerView
  const maxIndex = Math.max(0, makers.length - cardsPerView);

  // Update cardsPerView based on screen size
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
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
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-tight font-medium text-black mb-6 sm:mb-8 lg:mb-12">
          Makers in our Makerspace
        </h2>

        {/* Makers Carousel */}
        <div className="overflow-hidden mb-8">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {makers.map((maker) => (
              <div key={maker.id} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                <div className="space-y-4">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-[307/337] bg-gray-200 rounded-[20px]" />
                  
                  {/* Name */}
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-black">
                    {maker.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrow */}
        <div className="flex justify-end mt-12">
          <button 
            onClick={nextCards}
            disabled={currentIndex >= maxIndex}
            className="w-[50px] h-[50px] rounded-full border border-black bg-white flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 10L1 19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
