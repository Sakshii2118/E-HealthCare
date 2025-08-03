"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User, Minimize2, Maximize2, Sparkles } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI health assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickReplies = [
    "Book an appointment",
    "Find a doctor",
    "Check symptoms",
    "Prescription refill",
    "Emergency help",
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("appointment") || input.includes("book")) {
      return "I can help you book an appointment! Would you like to see available doctors or do you have a specific specialty in mind?"
    } else if (input.includes("doctor") || input.includes("find")) {
      return "I can help you find the right doctor. What specialty are you looking for? We have cardiologists, neurologists, pediatricians, and more."
    } else if (input.includes("symptom") || input.includes("pain") || input.includes("sick")) {
      return "I understand you're experiencing symptoms. While I can provide general information, it's important to consult with a healthcare professional for proper diagnosis. Would you like me to help you book an urgent consultation?"
    } else if (input.includes("prescription") || input.includes("medication")) {
      return "For prescription refills, you'll need to consult with your doctor. I can help you schedule a follow-up appointment or connect you with your prescribing physician."
    } else if (input.includes("emergency") || input.includes("urgent")) {
      return "🚨 If this is a medical emergency, please call 911 immediately. For urgent but non-emergency care, I can help you find available doctors for same-day consultations."
    } else if (input.includes("payment") || input.includes("cost") || input.includes("fee")) {
      return "Our consultation fees vary by specialty. Video consultations typically range from $120-$180. We accept most insurance plans and offer flexible payment options."
    } else {
      return "I'm here to help with your healthcare needs! I can assist with booking appointments, finding doctors, general health questions, and navigating our platform. What would you like to know?"
    }
  }

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply)
    handleSendMessage()
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        variant="medical"
        size="icon"
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 hover-lift pulse-ring animate-pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
        <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300 animate-bounce" />
      </Button>
    )
  }

  return (
    <Card
      className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 transition-all duration-500 ${
        isMinimized ? "h-16" : "h-[500px]"
      } glass-effect border-medical-200`}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-medical-gradient text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 animate-pulse" />
          <CardTitle className="text-lg gradient-text">MediSync Assistant</CardTitle>
          <Badge variant="health" className="animate-bounce">
            Online
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-white/20 hover-lift"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20 hover-lift"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="flex flex-col h-[436px] p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    message.sender === "user"
                      ? "bg-medical-gradient text-white shadow-lg"
                      : "bg-gradient-to-r from-gray-100 to-medical-50 text-gray-900 shadow-md"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-medical-600" />}
                    <p className="text-sm">{message.text}</p>
                    {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs hover-lift"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-medical-100">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1 border-medical-200 focus:border-medical-400"
              />
              <Button onClick={handleSendMessage} size="sm" variant="medical" className="hover-lift">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
