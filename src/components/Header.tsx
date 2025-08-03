import { Button } from "@/components/ui/button"
import { Stethoscope, Sparkles } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="glass-effect shadow-sm border-b border-white/20 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Stethoscope className="h-8 w-8 text-medical-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-medical-500 to-care-500 rounded-full animate-ping"></div>
            </div>
            <span className="text-2xl font-bold gradient-text">MediSync</span>
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-200 relative group ${
                isActive("/") ? "text-medical-600 font-medium" : "text-gray-700 hover:text-medical-600"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-600 to-care-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/doctors"
              className={`transition-colors duration-200 relative group ${
                isActive("/doctors") ? "text-medical-600 font-medium" : "text-gray-700 hover:text-medical-600"
              }`}
            >
              Find Doctors
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-600 to-care-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/consultations"
              className={`transition-colors duration-200 relative group ${
                isActive("/consultations") ? "text-medical-600 font-medium" : "text-gray-700 hover:text-medical-600"
              }`}
            >
              Consultations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-600 to-care-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/payments"
              className={`transition-colors duration-200 relative group ${
                isActive("/payments") ? "text-medical-600 font-medium" : "text-gray-700 hover:text-medical-600"
              }`}
            >
              Payments
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-600 to-care-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hover-lift bg-transparent">
              Sign In
            </Button>
            <Button variant="medical" className="hover-lift">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
