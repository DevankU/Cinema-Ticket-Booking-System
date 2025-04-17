import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"
import FeaturedMovieCarousel from "@/components/featured-movie-carousel"
import MovieCard from "@/components/movie-card"
import { getFeaturedMovies, getMoviesByStatus } from "@/lib/data/movies"

export default function Home() {
  // Get movies data
  const featuredMovies = getFeaturedMovies(3)
  const nowShowingMovies = getMoviesByStatus("Now Showing").slice(0, 12)
  const comingSoonMovies = getMoviesByStatus("Coming Soon").slice(0, 12)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Featured Movies */}
      <section className="relative w-full">
        <FeaturedMovieCarousel movies={featuredMovies} />
      </section>

      {/* Movie Categories */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="now-showing" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Movies</h2>
            <TabsList className="bg-gray-900">
              <TabsTrigger value="now-showing" className="data-[state=active]:bg-blue-600">
                Now Showing
              </TabsTrigger>
              <TabsTrigger value="coming-soon" className="data-[state=active]:bg-blue-600">
                Coming Soon
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="now-showing" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {nowShowingMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  rating={movie.rating}
                  genre={movie.genre}
                  duration={movie.duration}
                  showRating={true}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-950">
                <Link href="/movies">
                  View All Movies <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="coming-soon" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {comingSoonMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster={movie.poster}
                  rating={movie.rating}
                  genre={movie.genre}
                  releaseDate={new Date(movie.releaseDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  showRating={false}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-950">
                <Link href="/coming-soon">
                  View All Upcoming Movies <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Theatres Section */}
      <section className="bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Theatres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <Card
                key={id}
                className="bg-gray-900 border-gray-800 overflow-hidden hover:border-blue-600 transition-colors"
              >
                <CardContent className="p-0">
                  <div className="relative h-40">
                    <Image
                      src={`/placeholder.svg?height=200&width=400`}
                      alt={`Theatre ${id}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">CineHub Theatre {id}</h3>
                    <p className="text-gray-400 text-sm mb-3">123 Movie Street, Cinema City</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-blue-950 text-blue-300 border-blue-700">
                        Dolby Atmos
                      </Badge>
                      <Button asChild variant="ghost" className="text-blue-500 hover:text-blue-400 p-0">
                        <Link href={`/theatres/${id}`}>
                          View Shows <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-950">
              <Link href="/theatres">
                View All Theatres <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white mb-6">Offers & Promotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-r from-blue-900 to-blue-700 border-none overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Weekend Special</h3>
              <p className="text-blue-100 mb-4">Get 20% off on all movie tickets booked for weekend shows!</p>
              <Button variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100">
                Use Code: WEEKEND20
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700 overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Combo Deal</h3>
              <p className="text-gray-300 mb-4">Buy 2 tickets and get a free popcorn & soda combo!</p>
              <Button variant="outline" className="border-white text-white hover:bg-gray-800">
                Use Code: COMBO2023
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-gradient-to-r from-blue-900 to-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Download the CineHub App</h2>
              <p className="text-blue-100 mb-6">
                Get the best movie booking experience on our mobile app. Book tickets, check showtimes, and get
                exclusive offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-900 text-white border border-gray-700">Google Play</Button>
                <Button className="bg-black hover:bg-gray-900 text-white border border-gray-700">App Store</Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-96">
                <Image
                  src="/placeholder.svg?height=500&width=300"
                  alt="CineHub Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
