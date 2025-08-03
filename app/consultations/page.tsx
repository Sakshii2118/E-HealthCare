"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  Phone,
  MessageSquare,
  Settings,
  Monitor,
  Camera,
  MoreVertical,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

export default function ConsultationsPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isInCall, setIsInCall] = useState(false)

  const upcomingConsultations = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Today",
      time: "2:00 PM",
      duration: "30 min",
      type: "Follow-up",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      date: "Tomorrow",
      time: "10:30 AM",
      duration: "45 min",
      type: "Initial Consultation",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const pastConsultations = [
    {
      id: 3,
      doctor: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      date: "Dec 15, 2024",
      time: "3:00 PM",
      duration: "25 min",
      status: "Completed",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/doctors" className="text-gray-700 hover:text-blue-600">
                Find Doctors
              </Link>
              <Link href="/consultations" className="text-blue-600 font-medium">
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
        {!isInCall ? (
          <>
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Consultations</h1>
              <p className="text-gray-600">Manage your video consultations and appointments</p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-blue-50 border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Video className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Start Instant Call</h3>
                  <p className="text-blue-700 text-sm mb-4">Connect with available doctors now</p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                    Start Now
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-green-50 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Schedule Appointment</h3>
                  <p className="text-green-700 text-sm mb-4">Book a consultation for later</p>
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                  >
                    Schedule
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-purple-50 border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Settings className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Test Connection</h3>
                  <p className="text-purple-700 text-sm mb-4">Check your camera and microphone</p>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
                  >
                    Test Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Consultations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Consultations</h2>
              <div className="space-y-4">
                {upcomingConsultations.map((consultation) => (
                  <Card
                    key={consultation.id}
                    className="hover:shadow-md transition-shadow hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={consultation.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {consultation.doctor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{consultation.doctor}</h3>
                            <p className="text-gray-600">{consultation.specialty}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-500">
                                {consultation.date} at {consultation.time}
                              </span>
                              <Badge variant="secondary">{consultation.duration}</Badge>
                              <Badge variant="outline">{consultation.type}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={() => setIsInCall(true)}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                          >
                            <Video className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                            Join Call
                          </Button>
                          <Button variant="outline">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Past Consultations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Past Consultations</h2>
              <div className="space-y-4">
                {pastConsultations.map((consultation) => (
                  <Card
                    key={consultation.id}
                    className="opacity-75 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={consultation.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {consultation.doctor
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{consultation.doctor}</h3>
                            <p className="text-gray-600">{consultation.specialty}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-500">
                                {consultation.date} at {consultation.time}
                              </span>
                              <Badge variant="secondary">{consultation.duration}</Badge>
                              <Badge className="bg-green-100 text-green-800">{consultation.status}</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline">View Summary</Button>
                          <Button variant="outline">Download Report</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Video Call Interface */
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-50">
            <div className="h-full flex flex-col">
              {/* Video Area */}
              <div className="flex-1 relative">
                {/* Main Video (Doctor) */}
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Avatar className="h-32 w-32 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" />
                      <AvatarFallback className="text-4xl">SJ</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-semibold">Dr. Sarah Johnson</h2>
                    <p className="text-gray-300">Cardiologist</p>
                    <Badge className="mt-2 bg-green-600">Connected</Badge>
                  </div>
                </div>

                {/* User Video (Picture-in-Picture) */}
                <div className="absolute top-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden border-2 border-white">
                  <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white">
                    {isVideoOn ? (
                      <div className="text-center">
                        <Camera className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm">You</span>
                      </div>
                    ) : (
                      <div className="text-center">
                        <VideoOff className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm">Camera Off</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Call Info */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">15:32</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="bg-gray-800 p-6">
                <div className="flex items-center justify-center space-x-6">
                  <Button
                    variant={isAudioOn ? "secondary" : "destructive"}
                    size="lg"
                    className="rounded-full w-14 h-14"
                    onClick={() => setIsAudioOn(!isAudioOn)}
                  >
                    {isAudioOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
                  </Button>

                  <Button
                    variant={isVideoOn ? "secondary" : "destructive"}
                    size="lg"
                    className="rounded-full w-14 h-14"
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
                  </Button>

                  <Button
                    variant="destructive"
                    size="lg"
                    className="rounded-full w-16 h-16"
                    onClick={() => setIsInCall(false)}
                  >
                    <Phone className="h-6 w-6 rotate-[135deg]" />
                  </Button>

                  <Button variant="secondary" size="lg" className="rounded-full w-14 h-14">
                    <Monitor className="h-6 w-6" />
                  </Button>

                  <Button variant="secondary" size="lg" className="rounded-full w-14 h-14">
                    <MessageSquare className="h-6 w-6" />
                  </Button>

                  <Button variant="secondary" size="lg" className="rounded-full w-14 h-14">
                    <MoreVertical className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
