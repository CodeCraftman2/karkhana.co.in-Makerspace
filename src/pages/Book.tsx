import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function Book() {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") === "month" ? "Month Pass" : "Day Pass";
  
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [duration, setDuration] = useState(2);
  const [extraMaterial, setExtraMaterial] = useState("3D Filament");
  const [showPlanDropdown, setShowPlanDropdown] = useState(false);
  const [showMaterialDropdown, setShowMaterialDropdown] = useState(false);

  const planPrices: Record<string, number> = {
    "Day Pass": 599,
    "Month Pass": 3599
  };

  const materialPrices: Record<string, number> = {
    "None": 0,
    "3D Filament": 150,
    "Wood Sheet": 200,
    "Acrylic Sheet": 300
  };

  const dailyRate = planPrices[selectedPlan] || 599;
  const materialCost = materialPrices[extraMaterial] || 0;
  const total = (dailyRate * duration) + materialCost;

  const incrementDuration = () => setDuration(prev => prev + 1);
  const decrementDuration = () => setDuration(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      <main className="max-w-[1512px] mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-[640px] mx-auto">
          <div className="bg-white rounded-[15px] sm:rounded-[20px] border border-[#888] p-4 sm:p-6 lg:p-8 xl:p-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-[#D9D9D9]">
                <h2 className="text-base sm:text-lg font-bold text-foreground tracking-tight">Selected Plan</h2>
                <div className="relative">
                  <button 
                    onClick={() => setShowPlanDropdown(!showPlanDropdown)}
                    className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg text-foreground"
                  >
                    {selectedPlan}
                    <ChevronDown className="w-3 h-3 text-karkhana-gray" />
                  </button>
                  {showPlanDropdown && (
                    <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-[#888] rounded-lg shadow-lg z-10">
                      {Object.keys(planPrices).map((plan) => (
                        <button
                          key={plan}
                          onClick={() => {
                            setSelectedPlan(plan);
                            setShowPlanDropdown(false);
                          }}
                          className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {plan}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-tight text-[#323232]">Duration</h3>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={decrementDuration}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-karkhana-coral flex items-center justify-center hover:bg-karkhana-coral/10 transition-colors"
                    >
                      <Minus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-karkhana-coral flex items-center justify-center">
                      <span className="text-sm sm:text-lg font-semibold">{duration}</span>
                    </div>
                    <button
                      onClick={incrementDuration}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-md border border-karkhana-coral flex items-center justify-center hover:bg-karkhana-coral/10 transition-colors"
                    >
                      <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    </button>
                    <span className="text-xs text-karkhana-gray ml-1 sm:ml-2">Days</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 sm:pt-2">
                  <span className="text-base sm:text-lg font-medium text-foreground">₹ {dailyRate}/Day</span>
                </div>
              </div>

              <div className="border-t border-[#D9D9D9] pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-tight text-[#323232]">Extra Material Required</h3>
                  <div className="relative">
                    <button 
                      onClick={() => setShowMaterialDropdown(!showMaterialDropdown)}
                      className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg text-foreground"
                    >
                      {extraMaterial}
                      <ChevronDown className="w-3 h-3 text-karkhana-gray" />
                    </button>
                    {showMaterialDropdown && (
                      <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-[#888] rounded-lg shadow-lg z-10">
                        {Object.keys(materialPrices).map((material) => (
                          <button
                            key={material}
                            onClick={() => {
                              setExtraMaterial(material);
                              setShowMaterialDropdown(false);
                            }}
                            className="block w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {material}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {materialCost > 0 && (
                  <div className="flex items-center justify-end">
                    <span className="text-base sm:text-lg font-medium text-foreground">₹{materialCost}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-[#D9D9D9] pt-4 sm:pt-6 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-tight text-[#323232]">Membership</h3>
                  <span className="text-base sm:text-lg font-medium text-foreground">₹ {dailyRate}/Day</span>
                </div>
              </div>

              <div className="border-t border-[#D9D9D9]/50 pt-4 sm:pt-6">
                <div className="flex items-center justify-end mb-6 sm:mb-8">
                  <span className="text-2xl sm:text-[28px] font-medium text-foreground tracking-tight">₹{total}</span>
                </div>

                <button className="w-full bg-foreground text-white text-center py-3 sm:py-4 rounded-[20px] sm:rounded-[27px] text-sm sm:text-lg font-semibold hover:bg-foreground/90 transition-colors">
                  Request to Book
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 px-2 sm:px-4 space-y-4 sm:space-y-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <img 
                src="https://cdn.razorpay.com/static/assets/logo/payment.svg" 
                alt="Razorpay" 
                className="h-8 sm:h-10 mt-1 flex-shrink-0"
              />
              <div className="text-xs text-karkhana-gray leading-relaxed">
                <p>Want to create a membership page like this for your business? Visit Razorpay Payment Pages to get started!</p>
              </div>
            </div>

            <div className="text-xs text-karkhana-gray leading-relaxed">
              <p className="font-medium">Terms & Conditions:</p>
              <p className="mt-1 sm:mt-2">
                By submitting information on this page, you agree to share your details with KARKHANA INNOVATION PRIVATE LIMITED (owner of this page) and Razorpay.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
