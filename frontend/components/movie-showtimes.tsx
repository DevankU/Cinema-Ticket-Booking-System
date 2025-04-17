"use client"

import { useState } from "react"
import Link from "next/link"
import { format, addDays } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

type Theatre = {
  id: number
  name: string
  location: string
  showtimes: string[]
}

type MovieShowtimesProps = {
  theatres: Theatre[]
  movieId: number
}

const MovieShowtimes = ({ theatres, movieId }: MovieShowtimesProps) => {
  const today = new Date()
  const dates = Array.from({ length: 7 }, (_, i) => addDays(today, i))

  const [selectedDate, setSelectedDate] = useState(format(today, "yyyy-MM-dd"))

  return (
    <div>
      {/* Date Selection */}
      <div className="mb-8 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {dates.map((date) => {
            const formattedDate = format(date, "yyyy-MM-dd")
            const isToday = format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd")
            const isSelected = selectedDate === formattedDate

            return (
              <Button
                key={formattedDate}
                variant={isSelected ? "default" : "outline"}
                className={`min-w-[100px] ${
                  isSelected ? "bg-blue-600 hover:bg-blue-700" : "border-gray-700 hover:bg-gray-800"
                }`}
                onClick={() => setSelectedDate(formattedDate)}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs opacity-80">{format(date, "EEE")}</span>
                  <span className="text-lg font-bold">{format(date, "d")}</span>
                  <span className="text-xs opacity-80">{format(date, "MMM")}</span>
                  {isToday && <Badge className="mt-1 bg-blue-500 text-[10px] py-0 px-1">Today</Badge>}
                </div>
              </Button>
            )
          })}
        </div>
      </div>

      {/* Theatres and Showtimes */}
      <div className="space-y-6">
        {theatres.map((theatre) => (
          <Card key={theatre.id} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{theatre.name}</h3>
                  <div className="flex items-center text-gray-400 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{theatre.location}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 flex items-center space-x-2">
                  <Badge variant="outline" className="bg-blue-950/50 text-blue-300 border-blue-800">
                    Dolby Atmos
                  </Badge>
                  <Badge variant="outline" className="bg-blue-950/50 text-blue-300 border-blue-800">
                    4K
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-4">
                {theatre.showtimes.map((time, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-gray-700 hover:border-blue-600 hover:bg-blue-950/30 transition-colors"
                    asChild
                  >
                    <Link
                      href={`/movies/${movieId}/book?theatre=${theatre.id}&date=${selectedDate}&time=${encodeURIComponent(time)}`}
                    >
                      {time}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MovieShowtimes
