import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Calendar } from "lucide-react"

type MovieCardProps = {
  id: number
  title: string
  poster: string
  rating: number
  genre: string
  duration?: string
  releaseDate?: string
  showRating: boolean
}

const MovieCard = ({ id, title, poster, rating, genre, duration, releaseDate, showRating }: MovieCardProps) => {
  return (
    <Link href={`/movies/${id}`}>
      <Card className="movie-card bg-gray-900 border-gray-800 overflow-hidden h-full hover:border-blue-600 transition-all">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative aspect-[2/3] w-full">
            <Image src={poster || "/placeholder.svg"} alt={title} fill className="object-cover" />
            {showRating && rating > 0 && (
              <div className="absolute top-2 right-2 bg-black/70 rounded-full p-1">
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 mr-0.5" />
                  <span className="text-white text-xs font-medium">{rating}</span>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="font-semibold text-white text-sm line-clamp-2 mb-1">{title}</h3>
            <div className="flex flex-col mt-auto">
              <Badge variant="outline" className="w-fit text-xs bg-blue-950/50 text-blue-300 border-blue-800 mb-2">
                {genre}
              </Badge>
              <div className="flex items-center text-gray-400 text-xs">
                {duration && (
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{duration}</span>
                  </div>
                )}
                {releaseDate && (
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{releaseDate}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default MovieCard
