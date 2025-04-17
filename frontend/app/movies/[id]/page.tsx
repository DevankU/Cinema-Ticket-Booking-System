import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Clock, Calendar, Play } from "lucide-react"
import MovieShowtimes from "@/components/movie-showtimes"
import { getMovieById } from "@/lib/data/movies"
import { notFound } from "next/navigation"

type MoviePageProps = {
  params: {
    id: string
  }
}

export default function MoviePage({ params }: MoviePageProps) {
  const movieId = Number.parseInt(params.id)
  const movie = getMovieById(movieId)

  if (!movie) {
    notFound()
  }

  // Mock data for showtimes
  const theatres = [
    {
      id: 1,
      name: "CineHub Theatre 1",
      location: "Downtown",
      showtimes: ["10:00 AM", "1:30 PM", "4:45 PM", "8:00 PM", "11:15 PM"],
    },
    {
      id: 2,
      name: "CineHub Theatre 2",
      location: "Westside Mall",
      showtimes: ["11:30 AM", "2:45 PM", "6:00 PM", "9:15 PM"],
    },
    {
      id: 3,
      name: "CineHub IMAX",
      location: "City Center",
      showtimes: ["12:00 PM", "3:30 PM", "7:00 PM", "10:30 PM"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Movie Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={movie.backdrop || movie.poster || "/placeholder.svg"}
            alt={movie.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16 md:pb-24">
            <div className="flex flex-col md:flex-row items-end md:items-end gap-8">
              <div className="hidden md:block relative w-64 h-96 rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
                <Image src={movie.poster || "/placeholder.svg"} alt={movie.title} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{movie.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                  {movie.rating > 0 && (
                    <>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <span className="text-white">{movie.rating}/5</span>
                      </div>
                      <span className="text-gray-300">|</span>
                    </>
                  )}
                  <span className="text-gray-300">{movie.genre}</span>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-300 mr-1" />
                    <span className="text-gray-300">{movie.duration}</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-300 mr-1" />
                    <span className="text-gray-300">
                      {new Date(movie.releaseDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {movie.status === "Now Showing" ? (
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="#showtimes">Book Tickets</Link>
                    </Button>
                  ) : (
                    <Button className="bg-gray-700 hover:bg-gray-600 text-white cursor-not-available">
                      Coming Soon
                    </Button>
                  )}
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <Play className="mr-2 h-4 w-4" /> Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Details Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="bg-gray-900 mb-8">
            <TabsTrigger value="about" className="data-[state=active]:bg-blue-600">
              About
            </TabsTrigger>
            <TabsTrigger value="showtimes" className="data-[state=active]:bg-blue-600">
              Showtimes
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-blue-600">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-8">{movie.synopsis || "No synopsis available."}</p>

                <h2 className="text-2xl font-bold text-white mb-4">Cast & Crew</h2>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Director</h3>
                  <p className="text-gray-300">{movie.director || "Not available"}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cast</h3>
                  {movie.cast && movie.cast.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {movie.cast.map((actor, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className="relative w-20 h-20 rounded-full overflow-hidden mb-2">
                            <Image
                              src={`/placeholder.svg?height=100&width=100&text=${actor.split(" ")[0]}`}
                              alt={actor}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-white text-sm text-center">{actor}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300">Cast information not available</p>
                  )}
                </div>
              </div>

              <div>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Movie Info</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-400">Genre</h4>
                        <p className="text-white">{movie.genre}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400">Duration</h4>
                        <p className="text-white">{movie.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-400">Release Date</h4>
                        <p className="text-white">
                          {new Date(movie.releaseDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      {movie.director && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">Director</h4>
                          <p className="text-white">{movie.director}</p>
                        </div>
                      )}
                      {movie.language && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-400">Language</h4>
                          <p className="text-white">{movie.language}</p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="showtimes" id="showtimes" className="mt-0">
            <h2 className="text-2xl font-bold text-white mb-6">Book Tickets</h2>
            {movie.status === "Now Showing" ? (
              <MovieShowtimes theatres={theatres} movieId={movie.id} />
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-md p-6 text-center">
                <p className="text-gray-300 mb-4">
                  This movie is coming soon. Tickets are not yet available for booking.
                </p>
                <p className="text-gray-400">
                  Expected release date:{" "}
                  <span className="text-white">
                    {new Date(movie.releaseDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="mt-0">
            <h2 className="text-2xl font-bold text-white mb-6">User Reviews</h2>
            {movie.status === "Now Showing" ? (
              <div className="space-y-6">
                {[1, 2, 3].map((id) => (
                  <Card key={id} className="bg-gray-900 border-gray-800">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                            <Image
                              src={`/placeholder.svg?height=50&width=50&text=User`}
                              alt={`User ${id}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">User {id}</h4>
                            <p className="text-gray-400 text-sm">November {10 + id}, 2023</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-white">{5 - id * 0.5}/5</span>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        {id === 1 &&
                          "An absolute masterpiece! The visuals are stunning and the story is captivating from start to finish. Definitely worth watching in IMAX."}
                        {id === 2 &&
                          "Great movie with amazing performances. The plot was a bit complex at times, but overall a fantastic sci-fi experience."}
                        {id === 3 &&
                          "Solid film with breathtaking cinematography. The runtime felt a bit long, but the story was engaging enough to keep me interested throughout. The ending was particularly powerful."}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-gray-900 border border-gray-800 rounded-md p-6 text-center">
                <p className="text-gray-300">
                  This movie is not yet released. Reviews will be available after the release.
                </p>
              </div>
            )}
            {movie.status === "Now Showing" && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-blue-600 text-blue-500 hover:bg-blue-950">
                  Load More Reviews
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
