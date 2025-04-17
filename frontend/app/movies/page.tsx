import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import MovieCard from "@/components/movie-card"
import { getMoviesByStatus } from "@/lib/data/movies"

export default function MoviesPage() {
  // Get all movies
  const nowShowingMovies = getMoviesByStatus("Now Showing")
  const comingSoonMovies = getMoviesByStatus("Coming Soon")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Movies</h1>

      <Tabs defaultValue="now-showing" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="now-showing" className="data-[state=active]:bg-blue-600">
              Now Showing
            </TabsTrigger>
            <TabsTrigger value="coming-soon" className="data-[state=active]:bg-blue-600">
              Coming Soon
            </TabsTrigger>
          </TabsList>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search movies..."
                className="pl-9 bg-gray-800 border-gray-700 w-full sm:w-[250px]"
              />
            </div>

            <Select>
              <SelectTrigger className="bg-gray-800 border-gray-700 w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by genre" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800">
                <SelectItem value="all">All Genres</SelectItem>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="drama">Drama</SelectItem>
                <SelectItem value="horror">Horror</SelectItem>
                <SelectItem value="romance">Romance</SelectItem>
                <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                <SelectItem value="thriller">Thriller</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="now-showing" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
        </TabsContent>

        <TabsContent value="coming-soon" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
