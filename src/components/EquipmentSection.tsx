import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const equipmentCategories = [
  {
    number: "01.",
    title: "Fabrication Tools",
    items: [
      {
        name: "3D Printers",
        description: "For rapid prototyping and creating complex 3D objects layer by layer."
      },
      {
        name: "Laser Cutters",
        description: "Precise cutting and engraving on wood, acrylic, fabric, and more"
      },
      {
        name: "CNC Machines",
        description: "Computer-controlled milling and carving for metals, plastics, and wood."
      }
    ]
  },
  {
    number: "02.",
    title: "Electronics & Robotics",
    items: [
      {
        name: "Electronics Kits & Components",
        description: "Microcontrollers, sensors, and circuits for building smart devices."
      },
      {
        name: "Soldering Stations",
        description: "For assembling and repairing electronic circuits."
      },
      {
        name: "Robotics Kits",
        description: "For learning and experimenting with robotics and automation."
      }
    ]
  },
  {
    number: "03.",
    title: "Hand & Power Tools",
    items: [
      {
        name: "Basic Hand Tools",
        description: "Screwdrivers, pliers, wrenches, measuring tools for general assembly."
      },
      {
        name: "Power Tools",
        description: "Drills, saws, grinders for heavier fabrication and modification work."
      }
    ]
  },
  {
    number: "04.",
    title: "Digital Tools",
    items: [
      {
        name: "Computers & Software",
        description: "CAD, 3D modeling, and design software for planning and prototyping."
      },
      {
        name: "AR/VR Equipment",
        description: "For immersive design, visualization, and interactive experiences."
      }
    ]
  },
  {
    number: "05.",
    title: "Safety & Support Equipment",
    items: [
      {
        name: "Safety Gear",
        description: "Goggles, gloves, masks to ensure user safety during making."
      },
      {
        name: "Workbenches & Storage",
        description: "Organized spaces to work efficiently and keep tools accessible."
      }
    ]
  }
];

export default function EquipmentSection() {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(cat => cat !== index)
        : [...prev, index]
    );
  };

  const isCategoryExpanded = (index: number) => expandedCategories.includes(index);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <h2 className="text-[54px] leading-tight font-medium text-black mb-16" style={{ letterSpacing: '-0.54px' }}>
          Equipment you find<br />in a Maker Lab
        </h2>

        {/* Categories */}
        <div className="space-y-0">
          {equipmentCategories.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="border-t border-gray-300">
                {/* Category Header - Always Visible */}
                <div 
                  className="flex items-center justify-between py-8 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleCategory(catIndex)}
                >
                  <div className="flex items-start gap-8">
                    <span className="text-[34px] font-medium text-black">{category.number}</span>
                    <h3 className="text-[34px] font-medium text-black">{category.title}</h3>
                  </div>
                  <div className="flex items-center">
                    {isCategoryExpanded(catIndex) ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" strokeWidth={2} />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" strokeWidth={2} />
                    )}
                  </div>
                </div>

                {/* Category Content - Expandable */}
                {isCategoryExpanded(catIndex) && (
                  <div className="px-0 pb-8">
                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 ml-0 lg:ml-24">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-3">
                          {/* Icon Placeholder */}
                          <div className="w-[57px] h-[57px] rounded-full bg-gray-200" />
                          
                          {/* Item Name */}
                          <h4 className="text-[21px] font-medium text-black min-h-[40px]">
                            {item.name}
                          </h4>
                          
                          {/* Item Description */}
                          <p className="text-sm font-normal text-black leading-normal">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300" />
        </div>
      </div>
    </section>
  );
}
