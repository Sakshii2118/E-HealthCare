"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CreditCard,
  DollarSign,
  Receipt,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

export default function PaymentsPage() {
  const [selectedPlan, setSelectedPlan] = useState("basic")

  const paymentHistory = [
    {
      id: "PAY001",
      date: "2024-12-20",
      doctor: "Dr. Sarah Johnson",
      service: "Video Consultation",
      amount: 150,
      status: "completed",
      method: "Credit Card",
    },
    {
      id: "PAY002",
      date: "2024-12-18",
      doctor: "Dr. Michael Chen",
      service: "Follow-up Consultation",
      amount: 100,
      status: "completed",
      method: "PayPal",
    },
    {
      id: "PAY003",
      date: "2024-12-15",
      doctor: "Dr. Emily Rodriguez",
      service: "Initial Consultation",
      amount: 120,
      status: "pending",
      method: "Credit Card",
    },
  ]

  const subscriptionPlans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: 29,
      period: "month",
      features: [
        "3 video consultations per month",
        "Basic health tracking",
        "Email support",
        "Prescription management",
      ],
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: 59,
      period: "month",
      features: [
        "Unlimited video consultations",
        "Advanced health analytics",
        "24/7 priority support",
        "Specialist referrals",
        "Health records storage",
        "Family account (up to 4 members)",
      ],
    },
    {
      id: "family",
      name: "Family Plan",
      price: 99,
      period: "month",
      features: [
        "Unlimited consultations for family",
        "Pediatric care included",
        "Emergency consultation access",
        "Dedicated family health coordinator",
        "Comprehensive health reports",
        "Up to 6 family members",
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500 group-hover:animate-pulse" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500 group-hover:animate-pulse" />
      case "failed":
        return <AlertCircle className="h-4 w-4 text-red-500 group-hover:animate-pulse" />
      default:
        return <Clock className="h-4 w-4 text-gray-500 group-hover:animate-pulse" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 bg-gradient-to-br from-blue-50 to-white">
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
              <Link href="/consultations" className="text-gray-700 hover:text-blue-600">
                Consultations
              </Link>
              <Link href="/payments" className="text-blue-600 font-medium">
                Payments
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payments & Billing</h1>
          <p className="text-gray-600">Manage your payments, subscriptions, and billing information</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
            <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">This Month</p>
                      <p className="text-2xl font-bold text-gray-900">$370</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Spent</p>
                      <p className="text-2xl font-bold text-gray-900">$2,450</p>
                    </div>
                    <Receipt className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Consultations</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Plan</p>
                      <p className="text-lg font-bold text-gray-900">Premium</p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Transactions */}
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.slice(0, 3).map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(payment.status)}
                        <div>
                          <p className="font-medium text-gray-900">{payment.service}</p>
                          <p className="text-sm text-gray-600">
                            {payment.doctor} • {payment.date}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${payment.amount}</p>
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <CardTitle>Payment History</CardTitle>
                <CardDescription>Complete history of all your payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentHistory.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-4">
                        {getStatusIcon(payment.status)}
                        <div>
                          <p className="font-medium text-gray-900">{payment.service}</p>
                          <p className="text-sm text-gray-600">{payment.doctor}</p>
                          <p className="text-xs text-gray-500">Payment ID: {payment.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">${payment.amount}</p>
                        <p className="text-sm text-gray-600">{payment.method}</p>
                        <p className="text-xs text-gray-500">{payment.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(payment.status)}>{payment.status}</Badge>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-1 group-hover:animate-pulse" />
                          Receipt
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`relative hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${selectedPlan === plan.id ? "ring-2 ring-blue-500 bg-gradient-to-br from-blue-50 to-purple-50" : "bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-white"}`}
                >
                  {plan.id === "premium" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-blue-600">
                      ${plan.price}
                      <span className="text-sm font-normal text-gray-600">/{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 group-hover:animate-pulse" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
                      variant={selectedPlan === plan.id ? "default" : "outline"}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {selectedPlan === plan.id ? "Current Plan" : "Select Plan"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="methods" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Add Payment Method */}
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <CardTitle>Add Payment Method</CardTitle>
                  <CardDescription>Add a new credit card or payment method</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                    <CreditCard className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Add Payment Method
                  </Button>
                </CardContent>
              </Card>

              {/* Saved Payment Methods */}
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <CardHeader>
                  <CardTitle>Saved Payment Methods</CardTitle>
                  <CardDescription>Manage your saved payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-6 w-6 text-blue-600 group-hover:animate-pulse" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/25</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-6 w-6 text-gray-600 group-hover:animate-pulse" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 8888</p>
                          <p className="text-sm text-gray-600">Expires 08/26</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
