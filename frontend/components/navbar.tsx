"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, Menu, X, User, LogIn, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import ChatbotButton from "./chatbot-button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movies" },
    { name: "Theatres", href: "/theatres" },
    { name: "Offers", href: "/offers" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              CineHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-500",
                  pathname === link.href ? "text-blue-500" : "text-gray-300",
                )}
              >
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-300 hover:text-blue-500">
                  Categories <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/movies/action" className="w-full">
                    Action
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/movies/comedy" className="w-full">
                    Comedy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/movies/drama" className="w-full">
                    Drama
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/movies/horror" className="w-full">
                    Horror
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/movies/sci-fi" className="w-full">
                    Sci-Fi
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <div className="hidden md:flex items-center relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-gray-800 rounded-md overflow-hidden animate-fadeIn">
                  <Input
                    type="search"
                    placeholder="Search movies, theatres..."
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                    autoFocus
                  />
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-300 hover:text-blue-500"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Chatbot */}
            <ChatbotButton />

            {/* Login/Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-blue-500">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-gray-900 border-gray-800">
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/login" className="flex items-center w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-800 focus:bg-gray-800">
                  <Link href="/register" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 animate-slideUp">
            <div className="flex items-center mb-4">
              <Input type="search" placeholder="Search movies, theatres..." className="bg-gray-800 border-0" />
              <Button variant="ghost" size="icon" className="ml-2">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium py-2 transition-colors hover:text-blue-500",
                    pathname === link.href ? "text-blue-500" : "text-gray-300",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-2 text-sm font-medium text-gray-300">Categories</div>
              <Link
                href="/movies/action"
                className="text-sm pl-4 py-1 text-gray-400 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Action
              </Link>
              <Link
                href="/movies/comedy"
                className="text-sm pl-4 py-1 text-gray-400 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Comedy
              </Link>
              <Link
                href="/movies/drama"
                className="text-sm pl-4 py-1 text-gray-400 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Drama
              </Link>
              <Link
                href="/movies/horror"
                className="text-sm pl-4 py-1 text-gray-400 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Horror
              </Link>
              <Link
                href="/movies/sci-fi"
                className="text-sm pl-4 py-1 text-gray-400 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Sci-Fi
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar
