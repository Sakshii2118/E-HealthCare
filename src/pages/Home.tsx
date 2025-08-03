"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Video,
  Calendar,
  CreditCard,
  MessageCircle,
  Shield,
  Clock,
  Star,
  Search,
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Zap,
  Users,
  Award,
} from "lucide-react"

const specialties = [
  {
    name: "Cardiology",
    icon: Heart,
    color: "bg-gradient-to-br from-red-100 to-pink-100 text-red-600",
    hoverColor: "hover:from-red-200 hover:to-pink-200",
  },
  {
    name: "Neurology",
    icon: Brain,
    color: "bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-600",
    hoverColor: "hover:from-purple-200 hover:to-indigo-200",
  },
  {
    name: "Ophthalmology",
    icon: Eye,
    color: "bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-600",
    hoverColor: "hover:from-blue-200 hover:to-cyan-200",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    color: "bg-gradient-to-br from-green-100 to-emerald-100 text-green-600",
    hoverColor: "hover:from-green-200 hover:to-emerald-200",
  },
  {
    name: "Pediatrics",
    icon: Baby,
    color: "bg-gradient-to-br from-pink-100 to-rose-100 text-pink-600",
    hoverColor: "hover:from-pink-200 hover:to-rose-200",
  },
  {
    name: "General Medicine",
    icon: Stethoscope,
    color: "bg-gradient-to-br from-gray-100 to-slate-100 text-gray-600",
    hoverColor: "hover:from-gray-200 hover:to-slate-200",
  },
]

const featuredDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    experience: "15 years",
    consultationFee: 150,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
    availability: "Available Today",
    patients: "2.5k+",
    badge: "Top Rated",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    rating: 4.8,
    experience: "12 years",
    consultationFee: 180,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
    availability: "Available Tomorrow",
    patients: "1.8k+",
    badge: "Expert",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    rating: 4.9,
    experience: "10 years",
    consultationFee: 120,
    image: "https://images.unsplash.com/photo-1594824475317-d8b0b4b5b7b0?w=200&h=200&fit=crop&crop=face",
    availability: "Available Today",
    patients: "3.2k+",
    badge: "Verified",
  },
]

const stats = [
  { icon: Users, value: "50k+", label: "Happy Patients", color: "text-medical-600" },
  { icon: Stethoscope, value: "1000+", label: "Expert Doctors", color: "text-health-600" },
  { icon: Award, value: "99.9%", label: "Success Rate", color: "text-care-600" },
  { icon: Clock, value: "24/7", label: "Available", color: "text-orange-600" },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-white to-care-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-medical-200/30 to-care-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-health-200/30 to-medical-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-care-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-medical-100 to-care-100 rounded-full mb-6 animate-bounce-in">
                <Zap className="h-4 w-4 text-medical-600 mr-2" />
                <span className="text-sm font-medium text-medical-800">AI-Powered Healthcare Platform</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health, Our Priority
                <span className="gradient-text block animate-pulse">Anytime, Anywhere</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with certified doctors through secure video consultations. Get expert medical advice from the
                comfort of your home with our cutting-edge telemedicine platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" variant="medical" className="hover-lift group">
                  <Video className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Start Video Consultation
                </Button>
                <Button size="lg" variant="outline" className="hover-lift group bg-transparent">
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Book Appointment
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center group">
                  <Shield className="h-5 w-5 text-health-500 mr-2 group-hover:animate-pulse" />
                  <span className="group-hover:text-health-600 transition-colors">HIPAA Compliant</span>
                </div>
                <div className="flex items-center group">
                  <Clock className="h-5 w-5 text-medical-500 mr-2 group-hover:animate-spin" />
                  <span className="group-hover:text-medical-600 transition-colors">24/7 Available</span>
                </div>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-medical-200 to-care-200 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=500&fit=crop"
                  alt="Healthcare Platform"
                  className="relative rounded-2xl shadow-2xl hover-lift float-animation"
                />
                <div className="absolute top-4 right-4 glass-effect rounded-full p-3 shadow-lg animate-pulse">
                  <Heart className="h-6 w-6 text-red-500" />
                </div>
                <div className="absolute bottom-4 left-4 glass-effect rounded-full p-3 shadow-lg animate-bounce">
                  <Stethoscope className="h-6 w-6 text-medical-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 glass-effect">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-medical-200 to-care-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative glass-effect rounded-full p-4 shadow-lg hover-lift">
                    <stat.icon
                      className={`h-8 w-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-medical-600 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white to-medical-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Doctor</h2>
            <p className="text-gray-600">Search by specialty, name, or condition with our smart AI search</p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-medical-200 to-care-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-hover:text-medical-500 transition-colors duration-300" />
              <Input
                type="text"
                placeholder="Search for doctors, specialties, or conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-medical-500 glass-effect hover:bg-white transition-all duration-300"
              />
              <Button
                variant="medical"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full hover-lift"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Medical Specialties</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((specialty, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 glass-effect hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full ${specialty.color} ${specialty.hoverColor} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <specialty.icon className="h-8 w-8 group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-medical-600 transition-colors duration-300">
                    {specialty.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-medical-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDoctors.map((doctor, index) => (
              <Card
                key={doctor.id}
                className="hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 glass-effect hover-lift"
              >
                <CardHeader className="text-center relative">
                  <div className="absolute top-4 right-4">
                    <Badge variant="health" className="animate-pulse">
                      {doctor.badge}
                    </Badge>
                  </div>
                  <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-medical-200 to-care-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="relative w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-medical-600 transition-colors duration-300">
                    {doctor.name}
                  </CardTitle>
                  <CardDescription className="text-medical-600 font-medium">{doctor.specialty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center group/rating">
                      <Star className="h-4 w-4 text-yellow-400 fill-current group-hover/rating:animate-spin" />
                      <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
                      <span className="ml-2 text-xs text-gray-500">{doctor.patients} patients</span>
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-medical-100 transition-colors duration-300">
                      {doctor.experience}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">${doctor.consultationFee}</span>
                    <Badge
                      variant={doctor.availability.includes("Today") ? "health" : "secondary"}
                      className={doctor.availability.includes("Today") ? "animate-pulse" : ""}
                    >
                      {doctor.availability}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="medical" className="flex-1 group/btn">
                      <Video className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                      Video Call
                    </Button>
                    <Button variant="outline" className="flex-1 hover-lift group/btn bg-transparent">
                      <Calendar className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                      Book
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose MediSync?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center group hover-lift border-0 bg-gradient-to-br from-medical-50 to-white">
              <CardContent className="p-6">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-medical-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Video className="relative h-12 w-12 text-medical-600 mx-auto group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-medical-600 transition-colors duration-300">
                  HD Video Calls
                </h3>
                <p className="text-gray-600">Crystal clear video consultations with secure encryption</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover-lift border-0 bg-gradient-to-br from-health-50 to-white">
              <CardContent className="p-6">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-health-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <CreditCard className="relative h-12 w-12 text-health-600 mx-auto group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-health-600 transition-colors duration-300">
                  Secure Payments
                </h3>
                <p className="text-gray-600">Safe and secure payment processing with multiple options</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover-lift border-0 bg-gradient-to-br from-care-50 to-white">
              <CardContent className="p-6">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-care-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <MessageCircle className="relative h-12 w-12 text-care-600 mx-auto group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-care-600 transition-colors duration-300">
                  AI Assistant
                </h3>
                <p className="text-gray-600">24/7 AI chatbot for instant health queries and support</p>
              </CardContent>
            </Card>
            <Card className="text-center group hover-lift border-0 bg-gradient-to-br from-red-50 to-white">
              <CardContent className="p-6">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-red-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Shield className="relative h-12 w-12 text-red-600 mx-auto group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                  Privacy First
                </h3>
                <p className="text-gray-600">HIPAA compliant platform ensuring your data security</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
