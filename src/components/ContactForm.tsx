import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    labType: [] as string[]
  });

  const labOptions = [
    "Makerspace",
    "DST fab Lab",
    "PM Shri Vocational Lab",
    "AICTE Idea Lab",
    "Atal Tinkering Lab",
    "Private Lab",
    "Something Else"
  ];

  const toggleLabType = (lab: string) => {
    setFormData(prev => ({
      ...prev,
      labType: prev.labType.includes(lab)
        ? prev.labType.filter(l => l !== lab)
        : [...prev.labType, lab]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        {/* Form Container */}
        <div className="max-w-[1313px] mx-auto border border-gray-300 rounded-[30px] p-8 md:p-12 lg:p-16">
          {/* Section Title */}
          <h2 className="text-[42px] leading-tight font-medium text-black text-center mb-16">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-2xl font-normal border-b-2 border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full text-2xl font-normal border-b-2 border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Lab Type Selection */}
            <div className="space-y-6">
              <p className="text-2xl font-bold text-black">What are you looking for?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {labOptions.map((lab) => (
                  <label key={lab} className="flex items-center gap-3 cursor-pointer">
                    <div 
                      onClick={() => toggleLabType(lab)}
                      className={`w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
                        formData.labType.includes(lab) ? 'bg-black' : 'bg-transparent'
                      }`}
                    >
                      {formData.labType.includes(lab) && (
                        <div className="w-4 h-4 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-[21px] font-normal text-black">{lab}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <textarea
                placeholder="Send Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full text-2xl font-normal border-b-2 border-gray-300 pb-3 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-12 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                <span className="text-base font-semibold" style={{ letterSpacing: '-0.16px' }}>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
