import { MapPin, Clock } from "lucide-react";

export default function Location() {
  return (
    <div className="border-t border-karkhana-gray-light pt-6 sm:pt-8 space-y-4 sm:space-y-6">
      <div className="flex items-start gap-2 sm:gap-3">
        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-karkhana-coral mt-0.5 sm:mt-1 flex-shrink-0" />
        <div>
          <p className="text-xs sm:text-sm font-medium text-foreground">2nd Floor Karkhana Makerspace</p>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mt-1">
            iKSANA Workspaces, Chrysler Tech Centre IT Park, Sahastradhara Road, Dehradun, Uttarakhand 248001
          </p>
        </div>
      </div>

      <div className="flex items-start gap-2 sm:gap-3">
        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-karkhana-coral mt-0.5 sm:mt-1 flex-shrink-0" />
        <p className="text-xs sm:text-sm text-foreground">Open 24 hrs</p>
      </div>

      <div className="flex items-start gap-2 sm:gap-3">
        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-karkhana-coral mt-0.5 sm:mt-1 flex-shrink-0" />
        <div>
          <p className="text-xs sm:text-sm font-medium text-foreground">Know More:</p>
          <p className="text-xs sm:text-sm text-foreground leading-relaxed mt-1">
            info@karkhanahub.com<br />
            +91 9999092827
          </p>
        </div>
      </div>
    </div>
  );
}
