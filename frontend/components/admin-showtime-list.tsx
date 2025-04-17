"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"

// Mock data for showtimes
const mockShowtimes = [
  {
    id: 1,
    movieTitle: "Interstellar: Beyond Time",
    theatreName: "CineHub Theatre 1",
    date: "2023-11-20",
    time: "10:00 AM",
    screen: "Screen 1",
    availableSeats: 120,
    totalSeats: 150,
  },
  {
    id: 2,
    movieTitle: "Interstellar: Beyond Time",
    theatreName: "CineHub Theatre 1",
    date: "2023-11-20",
    time: "1:30 PM",
    screen: "Screen 1",
    availableSeats: 85,
    totalSeats: 150,
  },
  {
    id: 3,
    movieTitle: "The Dark Knight Returns",
    theatreName: "CineHub Theatre 2",
    date: "2023-11-20",
    time: "11:30 AM",
    screen: "Screen 2",
    availableSeats: 100,
    totalSeats: 120,
  },
  {
    id: 4,
    movieTitle: "The Dark Knight Returns",
    theatreName: "CineHub Theatre 2",
    date: "2023-11-20",
    time: "2:45 PM",
    screen: "Screen 2",
    availableSeats: 110,
    totalSeats: 120,
  },
  {
    id: 5,
    movieTitle: "Eternal Sunshine",
    theatreName: "CineHub IMAX",
    date: "2023-11-20",
    time: "12:00 PM",
    screen: "IMAX",
    availableSeats: 180,
    totalSeats: 200,
  },
  {
    id: 6,
    movieTitle: "Eternal Sunshine",
    theatreName: "CineHub IMAX",
    date: "2023-11-20",
    time: "3:30 PM",
    screen: "IMAX",
    availableSeats: 195,
    totalSeats: 200,
  },
]

const AdminShowtimeList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [showtimes, setShowtimes] = useState(mockShowtimes)

  const filteredShowtimes = showtimes.filter(
    (showtime) =>
      showtime.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      showtime.theatreName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteShowtime = (id: number) => {
    setShowtimes(showtimes.filter((showtime) => showtime.id !== id))
  }

  const getAvailabilityStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100
    if (percentage > 50) return "High"
    if (percentage > 20) return "Medium"
    return "Low"
  }

  const getAvailabilityColor = (status: string) => {
    switch (status) {
      case "High":
        return "bg-green-900/30 text-green-400 border-green-800"
      case "Medium":
        return "bg-yellow-900/30 text-yellow-400 border-yellow-800"
      case "Low":
        return "bg-red-900/30 text-red-400 border-red-800"
      default:
        return ""
    }
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search showtimes..."
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
              <TableHead>Movie</TableHead>
              <TableHead>Theatre</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Screen</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredShowtimes.length > 0 ? (
              filteredShowtimes.map((showtime) => {
                const availabilityStatus = getAvailabilityStatus(showtime.availableSeats, showtime.totalSeats)

                return (
                  <TableRow key={showtime.id} className="hover:bg-gray-800/50 border-gray-800">
                    <TableCell className="font-medium">{showtime.id}</TableCell>
                    <TableCell className="font-medium text-white">{showtime.movieTitle}</TableCell>
                    <TableCell>{showtime.theatreName}</TableCell>
                    <TableCell>{new Date(showtime.date).toLocaleDateString()}</TableCell>
                    <TableCell>{showtime.time}</TableCell>
                    <TableCell>{showtime.screen}</TableCell>
                    <TableCell>
                      <Badge className={getAvailabilityColor(availabilityStatus)}>
                        {availabilityStatus} ({showtime.availableSeats}/{showtime.totalSeats})
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
                            onClick={() => handleDeleteShowtime(showtime.id)}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            <span>Delete</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6 text-gray-400">
                  No showtimes found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AdminShowtimeList
