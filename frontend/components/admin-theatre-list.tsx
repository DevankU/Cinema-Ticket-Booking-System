"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Edit, MoreVertical, Search, Trash2 } from "lucide-react"

// Mock data for theatres
const mockTheatres = [
  {
    id: 1,
    name: "CineHub Theatre 1",
    location: "Downtown",
    address: "123 Movie Street, Cinema City",
    screens: 4,
    totalSeats: 600,
    amenities: ["Dolby Atmos", "4K", "Recliner Seats"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    name: "CineHub Theatre 2",
    location: "Westside Mall",
    address: "456 Cinema Avenue, Movie Town",
    screens: 3,
    totalSeats: 450,
    amenities: ["Dolby Atmos", "3D"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    name: "CineHub IMAX",
    location: "City Center",
    address: "789 IMAX Boulevard, Screen City",
    screens: 2,
    totalSeats: 400,
    amenities: ["IMAX", "Dolby Atmos", "4K", "Premium Lounge"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

const AdminTheatreList = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [theatres, setTheatres] = useState(mockTheatres)

  const filteredTheatres = theatres.filter(
    (theatre) =>
      theatre.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theatre.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleDeleteTheatre = (id: number) => {
    setTheatres(theatres.filter((theatre) => theatre.id !== id))
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search theatres..."
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
              <TableHead className="w-[250px]">Theatre</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Screens</TableHead>
              <TableHead>Total Seats</TableHead>
              <TableHead>Amenities</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTheatres.length > 0 ? (
              filteredTheatres.map((theatre) => (
                <TableRow key={theatre.id} className="hover:bg-gray-800/50 border-gray-800">
                  <TableCell className="font-medium">{theatre.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="relative h-10 w-16 overflow-hidden rounded">
                        <Image
                          src={theatre.image || "/placeholder.svg"}
                          alt={theatre.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">{theatre.name}</div>
                        <div className="text-xs text-gray-400">{theatre.address}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{theatre.location}</TableCell>
                  <TableCell>{theatre.screens}</TableCell>
                  <TableCell>{theatre.totalSeats}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {theatre.amenities.map((amenity, index) => (
                        <Badge key={index} className="bg-blue-900/30 text-blue-400 border-blue-800">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
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
                          onClick={() => handleDeleteTheatre(theatre.id)}
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
                  No theatres found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AdminTheatreList
