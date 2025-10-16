import { Link } from "react-router-dom";

export default function PassOptions() {
  const dayPassFeatures = [
    "Computer Workstations",
    "Co-working Space",
    "Prototyping Lab",
    "High-Speed Wi-Fi",
    "Basic Tools & Equipment",
    "Access to Events & Workshops"
  ];

  const monthPassFeatures = [
    "Computer Workstations",
    "Co-working Space",
    "Prototyping Lab",
    "Locker & Storage Access",
    "Priority Machine Booking",
    "Access to Events & Workshops",
    "Join Networking Sessions"
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white rounded-[15px] sm:rounded-[20px] border border-[#888] p-4 sm:p-6 lg:p-8 xl:p-10 space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-karkhana-blue rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 text-white">
            <p className="text-sm sm:text-base uppercase mb-1">₹399</p>
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium">Day Pass</h3>
          </div>

          <p className="text-xs sm:text-sm lg:text-[15px] font-semibold text-foreground leading-tight">
            Complete access to the Karkhana at IT Park for 1 day, one chair sitting
          </p>

          <ul className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
            {dayPassFeatures.map((feature, index) => (
              <li key={index} className="text-xs sm:text-sm text-foreground leading-relaxed">
                {index + 1}. {feature}
              </li>
            ))}
          </ul>

          <p className="text-xs italic text-karkhana-gray text-center pt-1 sm:pt-2">Validity: 1 Week</p>

          <Link 
            to="/book?plan=day"
            className="block w-full bg-foreground text-white text-center py-2.5 sm:py-3 rounded-md text-xs font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Select Pass
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-[15px] sm:rounded-[20px] border border-[#888] p-4 sm:p-6 lg:p-8 xl:p-10 space-y-4 sm:space-y-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-karkhana-blue rounded-[15px] sm:rounded-[20px] p-4 sm:p-6 text-white">
            <p className="text-sm sm:text-base uppercase mb-1">₹3599</p>
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-medium">Month Pass</h3>
          </div>

          <p className="text-xs sm:text-sm lg:text-[15px] font-semibold text-foreground leading-tight">
            Complete access to the Karkhana at IT Park for 1 month, one chair sitting
          </p>

          <ul className="space-y-2 sm:space-y-3 pt-1 sm:pt-2">
            {monthPassFeatures.map((feature, index) => (
              <li key={index} className="text-xs sm:text-sm text-foreground leading-relaxed">
                {index + 1}. {feature}
              </li>
            ))}
          </ul>

          <p className="text-xs italic text-karkhana-gray text-center pt-1 sm:pt-2">Validity: 1 Month</p>

          <Link 
            to="/book?plan=month"
            className="block w-full bg-foreground text-white text-center py-2.5 sm:py-3 rounded-md text-xs font-medium uppercase tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Select Pass
          </Link>
        </div>
      </div>
    </div>
  );
}
