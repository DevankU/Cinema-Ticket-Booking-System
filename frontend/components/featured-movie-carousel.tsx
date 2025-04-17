"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Calendar } from "lucide-react"
import type { Movie } from "@/lib/data/movies"

type FeaturedMovieCarouselProps = {
  movies: Movie[]
}

const FeaturedMovieCarousel = ({ movies }: FeaturedMovieCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentMovie = movies[currentIndex]

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={currentMovie.backdrop || currentMovie.poster || "/placeholder.svg"}
          alt={currentMovie.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-16 md:pb-24">
          <div className="max-w-2xl animate-fadeIn">
            <Badge className="mb-4 bg-blue-600 text-white border-none">Featured</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{currentMovie.title}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="text-white">{currentMovie.rating}/5</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">{currentMovie.genre}</span>
              <span className="text-gray-300">|</span>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-300 mr-1" />
                <span className="text-gray-300">
                  {new Date(currentMovie.releaseDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={`/movies/${currentMovie.id}/book`}>Book Tickets</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href={`/movies/${currentMovie.id}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        aria-label="Previous movie"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
        aria-label="Next movie"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (isAnimating) return
              setIsAnimating(true)
              setCurrentIndex(index)
              setTimeout(() => setIsAnimating(false), 500)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-blue-500" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default FeaturedMovieCarousel
