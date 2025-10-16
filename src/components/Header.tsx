export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="h-[29px] w-[137px] bg-gray-200 rounded flex items-center justify-center overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/2ba75a5abfcdce2ba901820f4e70ec0540547a48?width=524" 
                alt="Karkhana Hub Logo"
                className="h-auto w-auto object-contain"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-16">
            <a 
              href="#makerspaces" 
              className="text-sm font-medium text-[#1C1C1C] hover:opacity-70 transition-opacity"
            >
              Makerspaces
            </a>
            <a 
              href="#learning" 
              className="text-sm font-medium text-[#1C1C1C] hover:opacity-70 transition-opacity"
            >
              Learning
            </a>
            <a 
              href="#experiences" 
              className="text-sm font-medium text-[#1C1C1C] hover:opacity-70 transition-opacity"
            >
              Experiences
            </a>
            <a 
              href="#signup" 
              className="text-sm font-medium text-[#1C1C1C] hover:opacity-70 transition-opacity"
            >
              Sign up/Login
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
