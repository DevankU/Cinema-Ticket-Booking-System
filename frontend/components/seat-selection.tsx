"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

// Define seat types
type SeatStatus = "available" | "booked" | "selected"

type Seat = {
  id: string
  row: string
  number: number
  status: SeatStatus
  type: "standard" | "premium" | "vip"
  price: number
}

const SeatSelection = () => {
  // Generate seats data
  const generateSeats = (): Seat[][] => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J"]
    const seatsPerRow = 12

    return rows.map((row, rowIndex) => {
      const rowSeats: Seat[] = []

      for (let i = 1; i <= seatsPerRow; i++) {
        // Determine seat type based on row
        let type: "standard" | "premium" | "vip" = "standard"
        let price = 10

        if (row === "A" || row === "B") {
          type = "vip"
          price = 18
        } else if (row === "C" || row === "D" || row === "E") {
          type = "premium"
          price = 14
        }

        // Randomly mark some seats as booked
        const isBooked = Math.random() < 0.3

        rowSeats.push({
          id: `${row}${i}`,
          row,
          number: i,
          status: isBooked ? "booked" : "available",
          type,
          price,
        })
      }

      return rowSeats
    })
  }

  const [seatMap, setSeatMap] = useState<Seat[][]>(generateSeats())
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "booked") return

    const updatedSeatMap = seatMap.map((row) =>
      row.map((s) => (s.id === seat.id ? { ...s, status: s.status === "selected" ? "available" : "selected" } : s)),
    )

    setSeatMap(updatedSeatMap)

    if (seat.status === "selected") {
      setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id))
    } else {
      setSelectedSeats([...selectedSeats, { ...seat, status: "selected" }])
    }
  }

  const totalAmount = selectedSeats.reduce((sum, seat) => sum + seat.price, 0)

  return (
    <div className="flex flex-col items-center">
      {/* Screen */}
      <div className="w-full max-w-3xl mb-8">
        <div className="relative">
          <div className="h-8 bg-gradient-to-b from-blue-500/30 to-transparent rounded-t-full mx-auto w-4/5"></div>
          <div className="text-center text-gray-400 text-sm mt-2">SCREEN</div>
        </div>
      </div>

      {/* Seat Map */}
      <div className="w-full max-w-3xl overflow-x-auto mb-8">
        <div className="min-w-max">
          {seatMap.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center mb-2">
              <div className="w-6 text-center text-gray-400 font-medium mr-2">{row[0].row}</div>
              <div className="flex gap-1 flex-1 justify-center">
                {row.map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    disabled={seat.status === "booked"}
                    className={cn(
                      "seat w-7 h-7 flex items-center justify-center text-xs font-medium rounded-t-md transition-all",
                      seat.status === "available" &&
                        seat.type === "standard" &&
                        "bg-gray-700 text-white hover:bg-gray-600",
                      seat.status === "available" &&
                        seat.type === "premium" &&
                        "bg-blue-800 text-white hover:bg-blue-700",
                      seat.status === "available" &&
                        seat.type === "vip" &&
                        "bg-purple-800 text-white hover:bg-purple-700",
                      seat.status === "selected" && "bg-blue-600 text-white scale-110",
                      seat.status === "booked" && "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50",
                    )}
                  >
                    {seat.number}
                  </button>
                ))}
              </div>
              <div className="w-6 text-center text-gray-400 font-medium ml-2">{row[0].row}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Seat Legend */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-700 rounded-t-sm mr-2"></div>
          <span className="text-sm text-gray-300">Standard ($10)</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-blue-800 rounded-t-sm mr-2"></div>
          <span className="text-sm text-gray-300">Premium ($14)</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-purple-800 rounded-t-sm mr-2"></div>
          <span className="text-sm text-gray-300">VIP ($18)</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-blue-600 rounded-t-sm mr-2"></div>
          <span className="text-sm text-gray-300">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-800 opacity-50 rounded-t-sm mr-2"></div>
          <span className="text-sm text-gray-300">Booked</span>
        </div>
      </div>

      {/* Selected Seats Summary */}
      <div className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-md p-4 mb-4">
        <h3 className="text-white font-medium mb-2">Selected Seats ({selectedSeats.length})</h3>
        {selectedSeats.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedSeats.map((seat) => (
              <div key={seat.id} className="bg-blue-950 text-blue-300 px-2 py-1 rounded text-sm">
                {seat.row}
                {seat.number} - ${seat.price}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-sm">No seats selected</p>
        )}
      </div>
    </div>
  )
}

export default SeatSelection
