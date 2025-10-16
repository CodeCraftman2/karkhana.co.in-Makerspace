import Header from "@/components/Header";
import Intro from "@/components/membership/Intro";
import Location from "@/components/membership/Location";
import PassOptions from "@/components/membership/PassOptions";


export default function Membership() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      <main className="max-w-[1512px] mx-auto px-4 sm:px-6 lg:px-24 pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pt-28 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            <Intro />
            <Location />
          </div>

          <PassOptions />
        </div>
      </main>
    </div>
  );
}
