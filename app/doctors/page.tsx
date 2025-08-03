"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Filter,
  Star,
  MapPin,
  Clock,
  Video,
  Calendar,
  Heart,
  Brain,
  Eye,
  Bone,
  Baby,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    consultationFee: 150,
    location: "New York, NY",
    availability: "Available Today",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English", "Spanish"],
    education: "Harvard Medical School",
    about: "Specialized in interventional cardiology with expertise in heart disease prevention and treatment.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    rating: 4.8,
    reviews: 89,
    experience: "12 years",
    consultationFee: 180,
    location: "Los Angeles, CA",
    availability: "Available Tomorrow",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English", "Mandarin"],
    education: "Johns Hopkins University",
    about: "Expert in treating neurological disorders including epilepsy, stroke, and movement disorders.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    rating: 4.9,
    reviews: 156,
    experience: "10 years",
    consultationFee: 120,
    location: "Chicago, IL",
    availability: "Available Today",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English", "Spanish"],
    education: "Stanford Medical School",
    about: "Dedicated pediatrician focusing on child development and preventive care.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    rating: 4.7,
    reviews: 94,
    experience: "18 years",
    consultationFee: 160,
    location: "Houston, TX",
    availability: "Available in 2 days",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English"],
    education: "Mayo Clinic",
    about: "Orthopedic surgeon specializing in sports medicine and joint replacement.",
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    specialty: "Ophthalmology",
    rating: 4.8,
    reviews: 73,
    experience: "8 years",
    consultationFee: 140,
    location: "Seattle, WA",
    availability: "Available Today",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English", "Korean"],
    education: "University of Washington",
    about: "Eye specialist with expertise in LASIK surgery and retinal disorders.",
  },
  {
    id: 6,
    name: "Dr. Robert Martinez",
    specialty: "General Medicine",
    rating: 4.6,
    reviews: 112,
    experience: "20 years",
    consultationFee: 100,
    location: "Miami, FL",
    availability: "Available Today",
    image: "/placeholder.svg?height=200&width=200",
    languages: ["English", "Spanish"],
    education: "University of Miami",
    about: "Family medicine physician providing comprehensive primary care services.",
  },
]

const specialties = [
  { name: "All", icon: Stethoscope, count: doctors.length },
  { name: "Cardiology", icon: Heart, count: doctors.filter((d) => d.specialty === "Cardiology").length },
  { name: "Neurology", icon: Brain, count: doctors.filter((d) => d.specialty === "Neurology").length },
  { name: "Pediatrics", icon: Baby, count: doctors.filter((d) => d.specialty === "Pediatrics").length },
  { name: "Orthopedics", icon: Bone, count: doctors.filter((d) => d.specialty === "Orthopedics").length },
  { name: "Ophthalmology", icon: Eye, count: doctors.filter((d) => d.specialty === "Ophthalmology").length },
  {
    name: "General Medicine",
    icon: Stethoscope,
    count: doctors.filter((d) => d.specialty === "General Medicine").length,
  },
]

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")
  const [sortBy, setSortBy] = useState("rating")

  const filteredDoctors = doctors
    .filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty
      return matchesSearch && matchesSpecialty
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price":
          return a.consultationFee - b.consultationFee
        case "experience":
          return Number.parseInt(b.experience) - Number.parseInt(a.experience)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Stethoscope className="h-8 w-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MediSync
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/doctors" className="text-blue-600 font-medium">
                Find Doctors
              </Link>
              <Link href="/consultations" className="text-gray-700 hover:text-blue-600">
                Consultations
              </Link>
              <Link href="/payments" className="text-gray-700 hover:text-blue-600">
                Payments
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Doctors</h1>
          <p className="text-gray-600">Connect with qualified healthcare professionals</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="experience">Sort by Experience</option>
              </select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Specialty Filter */}
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <Button
                key={specialty.name}
                variant={selectedSpecialty === specialty.name ? "default" : "outline"}
                onClick={() => setSelectedSpecialty(specialty.name)}
                className="flex items-center space-x-2"
              >
                <specialty.icon className="h-4 w-4" />
                <span>{specialty.name}</span>
                <Badge variant="secondary" className="ml-1">
                  {specialty.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
            {selectedSpecialty !== "All" && ` in ${selectedSpecialty}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 bg-white/90 backdrop-blur-sm transform hover:scale-105 hover:-rotate-1"
            >
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                  <AvatarFallback className="text-lg">
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{doctor.name}</CardTitle>
                <CardDescription className="text-blue-600 font-medium">{doctor.specialty}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current group-hover:animate-pulse" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-gray-500 text-sm">({doctor.reviews} reviews)</span>
                  </div>
                  <Badge variant="secondary">{doctor.experience}</Badge>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {doctor.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {doctor.availability}
                  </div>
                </div>

                <div className="text-sm">
                  <p className="font-medium text-gray-900">Education:</p>
                  <p className="text-gray-600">{doctor.education}</p>
                </div>

                <div className="text-sm">
                  <p className="font-medium text-gray-900">Languages:</p>
                  <p className="text-gray-600">{doctor.languages.join(", ")}</p>
                </div>

                <p className="text-sm text-gray-600">{doctor.about}</p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-green-600">${doctor.consultationFee}</span>
                    <span className="text-gray-500 text-sm ml-1">per session</span>
                  </div>
                  <Badge
                    className={
                      doctor.availability.includes("Today")
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent hover:bg-blue-500 hover:text-white transition-colors duration-300"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all available doctors.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedSpecialty("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
