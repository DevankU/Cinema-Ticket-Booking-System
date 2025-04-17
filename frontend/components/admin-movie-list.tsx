"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"
import { movies } from "@/lib/data/movies"

const AdminMovieList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [moviesList, setMoviesList] = useState(movies)

  const filteredMovies = moviesList.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteMovie = (id: number) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== id))
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search movies..."
            className="pl-9 bg-gray-800 border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border border-gray-800 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900">
            <TableRow className="hover:bg-gray-800/50 border-gray-800">
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="w-[250px]">Movie</TableHead>
              <TableHead>Genre</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Release Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movie) => (
                <TableRow key={movie.id} className="hover:bg-gray-800/50 border-gray-800">
                  <TableCell className="font-medium">{movie.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="relative h-12 w-8 overflow-hidden rounded">
                        <Image
                          src={movie.poster || "/placeholder.svg"}
                          alt={movie.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium text-white">{movie.title}</span>
                    </div>
                  </TableCell>
                  <TableCell>{movie.genre}</TableCell>
                  <TableCell>{movie.duration}</TableCell>
                  <TableCell>{new Date(movie.releaseDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        movie.status === "Now Showing"
                          ? "bg-green-900/30 text-green-400 border-green-800"
                          : "bg-blue-900/30 text-blue-400 border-blue-800"
                      }
                    >
                      {movie.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-900 border-gray-800">
                        <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800 cursor-pointer">
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-500 hover:bg-gray-800 focus:bg-gray-800 cursor-pointer"
                          onClick={() => handleDeleteMovie(movie.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-400">
                  No movies found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AdminMovieList
