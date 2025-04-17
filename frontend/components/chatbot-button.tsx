"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm CineBot. How can I help you with your movie booking today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      let botResponse = ""
      const userText = input.toLowerCase()

      if (userText.includes("show") && userText.includes("time")) {
        botResponse =
          "You can check show times by selecting a movie on our homepage or by going to the Movies section and selecting your preferred movie."
      } else if (userText.includes("book") || userText.includes("ticket")) {
        botResponse =
          "To book tickets, select a movie, choose your preferred show time, select your seats, and proceed to payment. It's that simple!"
      } else if (userText.includes("cancel")) {
        botResponse =
          "You can cancel your booking up to 3 hours before the show time. Go to My Bookings in your profile to cancel a booking."
      } else if (userText.includes("payment") || userText.includes("pay")) {
        botResponse =
          "We accept credit/debit cards, UPI, and wallet payments. All transactions are secure and encrypted."
      } else {
        botResponse =
          "I'm here to help with your movie booking experience. You can ask me about show times, booking process, cancellations, or payment options."
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-gray-300 hover:text-blue-500"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="h-5 w-5" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md bg-gray-950 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-blue-500">CineBot Assistant</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col space-y-4 max-h-[350px] overflow-y-auto p-2">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-100"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="flex-row items-center space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 bg-gray-800 border-gray-700 focus-visible:ring-blue-500"
            />
            <Button onClick={handleSend} size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-4 w-4" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ChatbotButton
