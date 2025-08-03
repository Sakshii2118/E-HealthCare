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
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1594824475317-d8b0b4b5b7b0?w=200&h=200&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1594824475317-d8b0b4b5b7b0?w=200&h=200&fit=crop&crop=face",
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
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
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

export default function Doctors() {
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
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-white to-care-50">
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
                className="pl-12 pr-4 py-3 border-medical-200 focus:border-medical-400"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
                <option value="experience">Sort by Experience</option>
              </select>
              <Button variant="outline" className="hover-lift bg-transparent">
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
                variant={selectedSpecialty === specialty.name ? "medical" : "outline"}
                onClick={() => setSelectedSpecialty(specialty.name)}
                className="flex items-center space-x-2 hover-lift"
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
            <Card key={doctor.id} className="hover-lift cursor-pointer group border-0 glass-effect">
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
                <CardTitle className="text-xl group-hover:text-medical-600 transition-colors duration-300">
                  {doctor.name}
                </CardTitle>
                <CardDescription className="text-medical-600 font-medium">{doctor.specialty}</CardDescription>
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
                    <span className="text-2xl font-bold gradient-text">${doctor.consultationFee}</span>
                    <span className="text-gray-500 text-sm ml-1">per session</span>
                  </div>
                  <Badge
                    variant={doctor.availability.includes("Today") ? "health" : "secondary"}
                    className={doctor.availability.includes("Today") ? "animate-pulse" : ""}
                  >
                    {doctor.availability}
                  </Badge>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="medical" className="flex-1 hover-lift">
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                  <Button variant="outline" className="flex-1 hover-lift bg-transparent">
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
              variant="medical"
              className="mt-4 hover-lift"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
