import { useState } from "react";
import LabCard from "./LabCard";
import LabGalleryModal from "./LabGalleryModal";

const labs = [
  {
    id: 1,
    title: "Iksana Dehradun",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    link: "Get Memberships",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 2,
    title: "AIC GGSIPU Fab Lab",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 3,
    title: "Kalinga Fab Lab",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 4,
    title: "AIC NITF Fab Lab",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 5,
    title: "SOA Fab Lab",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 6,
    title: "Silicon Maker Lab",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  },
  {
    id: 7,
    title: "KIIT Int'l School",
    description: "Created in partnership with Iksana Coworking, this vibrant makerspace is nestled in the heart of the hills—designed to inspire creativity in a unique setting.",
    images: [
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500",
      "https://api.builder.io/api/v1/image/assets/TEMP/3d85562712d0aa37a6925d1f9a0888728c216784?width=1500"
    ]
  }
];

export default function DiscoverLabs() {
  const [selectedLab, setSelectedLab] = useState<typeof labs[0] | null>(null);
  const [visibleCount, setVisibleCount] = useState(7);

  const handleLabClick = (lab: typeof labs[0]) => {
    setSelectedLab(lab);
  };

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 7);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="discover-labs">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        {/* Section Title */}
        <h2 className="text-[54px] leading-[75px] font-medium text-black mb-16" style={{ letterSpacing: '-0.54px' }}>
          Discover Our Labs
        </h2>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mb-12">
          {labs.slice(0, visibleCount).map((lab) => (
            <LabCard
              key={lab.id}
              title={lab.title}
              description={lab.description}
              link={lab.link}
              onClick={() => handleLabClick(lab)}
            />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < labs.length && (
          <div className="flex justify-center">
            <button
              onClick={handleViewMore}
              className="px-12 py-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <span className="text-2xl leading-6 font-normal text-black">View More</span>
            </button>
          </div>
        )}
      </div>

      {/* Gallery Modal */}
      {selectedLab && (
        <LabGalleryModal
          isOpen={!!selectedLab}
          onClose={() => setSelectedLab(null)}
          labName={selectedLab.title}
          images={selectedLab.images}
        />
      )}
    </section>
  );
}
