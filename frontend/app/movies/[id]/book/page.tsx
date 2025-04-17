import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, MapPin } from "lucide-react"
import SeatSelection from "@/components/seat-selection"
import BookingSummary from "@/components/booking-summary"

type BookingPageProps = {
  params: {
    id: string
  }
  searchParams: {
    theatre?: string
    date?: string
    time?: string
  }
}

export default function BookingPage({ params, searchParams }: BookingPageProps) {
  const movieId = Number.parseInt(params.id)
  const theatreId = searchParams.theatre ? Number.parseInt(searchParams.theatre) : 1
  const date = searchParams.date || new Date().toISOString().split("T")[0]
  const time = searchParams.time || "7:00 PM"

  // In a real app, you would fetch this data from an API
  const movie = {
    id: movieId,
    title: "Interstellar: Beyond Time",
    poster: "/placeholder.svg?height=450&width=300",
    duration: "2h 45m",
  }

  const theatre = {
    id: theatreId,
    name: "CineHub Theatre 1",
    location: "123 Movie Street, Cinema City",
  }

  // Format the date for display
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-2 mb-8">
        <Link href={`/movies/${movieId}`} className="text-blue-500 hover:underline text-sm">
          &larr; Back to movie
        </Link>
        <h1 className="text-3xl font-bold text-white">Select Seats</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Booking Info */}
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-24 h-36 flex-shrink-0">
                  <Image
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{theatre.name}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{movie.duration}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Badge className="bg-blue-600 text-white border-none">{time}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seat Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Select Your Seats</h2>
            <Suspense fallback={<div className="text-center py-8">Loading seat map...</div>}>
              <SeatSelection />
            </Suspense>
          </div>
        </div>

        {/* Booking Summary */}
        <div>
          <BookingSummary movie={movie} theatre={theatre} date={formattedDate} time={time} />
        </div>
      </div>
    </div>
  )
}
