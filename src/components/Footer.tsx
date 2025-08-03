import { Stethoscope, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-medical-900 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-600/10 to-care-600/10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <Stethoscope className="h-8 w-8 text-medical-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-bold gradient-text">MediSync</span>
              <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner in digital healthcare, connecting patients with qualified doctors worldwide through
              innovative technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-300">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Video Consultations</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Appointment Booking</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Health Records</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">
                Prescription Management
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-300">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Help Center</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Contact Us</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-medical-300">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-200">1-800-MEDISYNC</li>
              <li className="hover:text-white transition-colors duration-200">support@medisync.com</li>
              <li className="hover:text-white transition-colors duration-200">24/7 Emergency Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MediSync. All rights reserved. Made with ❤️ for better healthcare.</p>
        </div>
      </div>
    </footer>
  )
}
