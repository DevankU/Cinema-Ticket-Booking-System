"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

type BookingSummaryProps = {
  movie: {
    id: number
    title: string
    poster: string
    duration: string
  }
  theatre: {
    id: number
    name: string
    location: string
  }
  date: string
  time: string
}

const BookingSummary = ({ movie, theatre, date, time }: BookingSummaryProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  // Mock selected seats data
  const selectedSeats = [
    { id: "E5", row: "E", number: 5, type: "premium", price: 14 },
    { id: "E6", row: "E", number: 6, type: "premium", price: 14 },
  ]

  const subtotal = selectedSeats.reduce((sum, seat) => sum + seat.price, 0)
  const convenienceFee = 2.5
  const total = subtotal + convenienceFee

  const handleProceedToPayment = () => {
    if (selectedSeats.length === 0) {
      return
    }
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSubmit = () => {
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsPaymentModalOpen(false)
      setIsConfirmationModalOpen(true)
    }, 2000)
  }

  return (
    <>
      <Card className="bg-gray-900 border-gray-800 sticky top-24">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold text-white mb-4">Booking Summary</h2>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400">Movie</h3>
              <p className="text-white">{movie.title}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Theatre</h3>
              <p className="text-white">{theatre.name}</p>
            </div>
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-400">Date</h3>
                <p className="text-white">{date}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400">Time</h3>
                <p className="text-white">{time}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400">Seats</h3>
              {selectedSeats.length > 0 ? (
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedSeats.map((seat) => (
                    <div key={seat.id} className="bg-blue-950 text-blue-300 px-2 py-1 rounded text-sm">
                      {seat.row}
                      {seat.number}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No seats selected</p>
              )}
            </div>
          </div>

          <Separator className="bg-gray-800 my-4" />

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Subtotal</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Convenience Fee</span>
              <span className="text-white">${convenienceFee.toFixed(2)}</span>
            </div>
            <Separator className="bg-gray-800 my-2" />
            <div className="flex justify-between font-bold">
              <span className="text-white">Total</span>
              <span className="text-white">${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-4 bg-gray-950 border-t border-gray-800">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700"
            onClick={handleProceedToPayment}
            disabled={selectedSeats.length === 0}
          >
            Proceed to Payment
          </Button>
        </CardFooter>
      </Card>

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl">Payment Details</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="payment-method">Payment Method</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger id="payment-method" className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="credit-card">Credit Card</SelectItem>
                  <SelectItem value="debit-card">Debit Card</SelectItem>
                  <SelectItem value="upi">UPI</SelectItem>
                  <SelectItem value="wallet">Digital Wallet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {paymentMethod === "credit-card" || paymentMethod === "debit-card" ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" className="bg-gray-800 border-gray-700" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" className="bg-gray-800 border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" className="bg-gray-800 border-gray-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" className="bg-gray-800 border-gray-700" />
                </div>
              </>
            ) : paymentMethod === "upi" ? (
              <div className="space-y-2">
                <Label htmlFor="upi-id">UPI ID</Label>
                <Input id="upi-id" placeholder="username@upi" className="bg-gray-800 border-gray-700" />
              </div>
            ) : paymentMethod === "wallet" ? (
              <div className="space-y-2">
                <Label htmlFor="wallet">Select Wallet</Label>
                <Select>
                  <SelectTrigger id="wallet" className="bg-gray-800 border-gray-700">
                    <SelectValue placeholder="Select wallet" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="paytm">Paytm</SelectItem>
                    <SelectItem value="gpay">Google Pay</SelectItem>
                    <SelectItem value="phonepe">PhonePe</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : null}

            <div className="pt-4">
              <div className="flex justify-between font-medium mb-2">
                <span>Total Amount:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400">
                By proceeding, you agree to our terms and conditions for online payments.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsPaymentModalOpen(false)}
              className="border-gray-700 hover:bg-gray-800"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePaymentSubmit}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!paymentMethod || isProcessing}
            >
              {isProcessing ? "Processing..." : "Pay Now"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Modal */}
      <Dialog open={isConfirmationModalOpen} onOpenChange={setIsConfirmationModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-800 text-white">
          <div className="flex flex-col items-center py-6">
            <div className="rounded-full bg-green-900/30 p-3 mb-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-300 text-center mb-6">
              Your tickets have been booked successfully. A confirmation has been sent to your email.
            </p>

            <div className="w-full bg-gray-800 rounded-md p-4 mb-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Booking ID:</span>
                  <span className="text-white font-medium">CIN{Math.floor(Math.random() * 1000000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Movie:</span>
                  <span className="text-white">{movie.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Date & Time:</span>
                  <span className="text-white">
                    {time}, {date.split(",")[0]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Seats:</span>
                  <span className="text-white">
                    {selectedSeats.map((seat) => `${seat.row}${seat.number}`).join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Download Tickets
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsConfirmationModalOpen(false)}>
                Done
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default BookingSummary
