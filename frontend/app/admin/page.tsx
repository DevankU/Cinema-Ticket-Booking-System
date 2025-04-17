import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Film, MapPin, Plus, Users } from "lucide-react"
import AdminMovieList from "@/components/admin-movie-list"
import AdminShowtimeList from "@/components/admin-showtime-list"
import AdminTheatreList from "@/components/admin-theatre-list"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <p className="text-gray-400">Manage movies, showtimes, and theatres</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Movies</p>
                <h3 className="text-3xl font-bold text-white mt-1">24</h3>
              </div>
              <div className="bg-blue-900/30 p-3 rounded-full">
                <Film className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Theatres</p>
                <h3 className="text-3xl font-bold text-white mt-1">8</h3>
              </div>
              <div className="bg-purple-900/30 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-purple-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Today's Shows</p>
                <h3 className="text-3xl font-bold text-white mt-1">42</h3>
              </div>
              <div className="bg-green-900/30 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Customers</p>
                <h3 className="text-3xl font-bold text-white mt-1">1,248</h3>
              </div>
              <div className="bg-orange-900/30 p-3 rounded-full">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="movies" className="w-full">
        <TabsList className="bg-gray-900 mb-8">
          <TabsTrigger value="movies" className="data-[state=active]:bg-blue-600">
            Movies
          </TabsTrigger>
          <TabsTrigger value="showtimes" className="data-[state=active]:bg-blue-600">
            Showtimes
          </TabsTrigger>
          <TabsTrigger value="theatres" className="data-[state=active]:bg-blue-600">
            Theatres
          </TabsTrigger>
        </TabsList>

        <TabsContent value="movies" className="mt-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Manage Movies</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" /> Add Movie
            </Button>
          </div>
          <AdminMovieList />
        </TabsContent>

        <TabsContent value="showtimes" className="mt-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Manage Showtimes</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" /> Add Showtime
            </Button>
          </div>
          <AdminShowtimeList />
        </TabsContent>

        <TabsContent value="theatres" className="mt-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Manage Theatres</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" /> Add Theatre
            </Button>
          </div>
          <AdminTheatreList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
