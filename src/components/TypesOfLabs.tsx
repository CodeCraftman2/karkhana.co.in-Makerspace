const labTypes = [
  {
    category: "Govt. Labs",
    labs: [
      "PM Shri labs",
      "ATL Lab",
      "AICTE Idea Lab",
      "DST Fab Lab",
      "Skill India Labs"
    ]
  },
  {
    category: "Private labs",
    labs: [
      "Co-Working Labs",
      "Museum Labs",
      "Startup Incubator Labs",
      "University Innovation Labs",
      "Corporate Innovation Lab"
    ]
  },
  {
    category: "Community Labs",
    labs: [
      "Museum Labs",
      "Craft Labs",
      "CSR Innovation Labs",
      "Library or Public Makerspaces"
    ]
  }
];

export default function TypesOfLabs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-tight font-medium text-black mb-8 sm:mb-12 lg:mb-16" style={{ letterSpacing: '-0.02em' }}>
          Types of Labs
        </h2>

        {/* Lab Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {labTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-medium text-black mb-4 sm:mb-6">
                {type.category}
              </h3>
              <ul className="space-y-2">
                {type.labs.map((lab, labIndex) => (
                  <li 
                    key={labIndex}
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] leading-relaxed font-normal text-black list-disc list-inside"
                  >
                    {lab}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
