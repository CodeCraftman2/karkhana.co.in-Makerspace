import { Check } from "lucide-react";

export default function Intro() {
  const benefits = [
    "Computer Workstations & High-Speed Wi-Fi",
    "Co-working & Collaboration Space",
    "Fully-equipped Prototyping Lab",
    "Essential Tools & Machines",
    "Events, Workshops & Networking",
    "Priority Access & Special Discounts"
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-medium leading-[1.2] tracking-tight text-foreground">
        Become a member at Karkhana Dehradun
      </h1>

      <div className="space-y-3 sm:space-y-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-relaxed text-foreground">
          Whether you're a{" "}
          <span className="bg-karkhana-coral text-white px-1.5 sm:px-2 py-0.5 text-sm sm:text-base">builder, designer, student, startup,</span>
          {" "}or{" "}
          <span className="bg-karkhana-coral-light text-white px-1.5 sm:px-2 py-0.5 text-sm sm:text-base">curious creator,</span>
          {" "}our memberships give you access to everything you need to bring your ideas to life.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm text-foreground">As a member, you get access to:</p>
          <ul className="space-y-2 sm:space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="mt-0.5 sm:mt-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm bg-karkhana-coral flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Check className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-foreground leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs sm:text-sm text-foreground leading-relaxed pt-2 sm:pt-4">
          Join a growing ecosystem of creators in the heart of Dehradun IT Park. Work independently or with others, prototype your ideas, and make the most of our supportive environment.
        </p>
      </div>
    </div>
  );
}
