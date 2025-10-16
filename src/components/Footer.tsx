export default function Footer() {
  return (
    <footer className="bg-gray-200 py-16">
      <div className="max-w-[1512px] mx-auto px-6 lg:px-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo/Brand */}
          <div>
            <div className="h-[29px] w-[137px] bg-gray-300 rounded mb-6" />
            <p className="text-xs sm:text-sm text-gray-600">
              Building makerspaces with 10+ years of experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-black mb-2 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Makerspaces</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Learning</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Experiences</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-black mb-2 sm:mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Equipment Guide</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Lab Types</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-black mb-2 sm:mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-xs sm:text-sm text-gray-600">Email: info@karkhana.io</li>
              <li className="text-xs sm:text-sm text-gray-600">Phone: +91 XXX XXX XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2024 Karkhana Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
