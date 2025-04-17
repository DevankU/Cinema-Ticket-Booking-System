import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              CineHub
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Book movie tickets online for the latest movies in theaters near you.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/movies" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Movies
                </Link>
              </li>
              <li>
                <Link href="/theatres" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Theatres
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Offers & Promotions
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Help & Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-blue-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Download Our App</h4>
            <p className="text-sm text-gray-400 mb-4">Get the best movie booking experience on our mobile app.</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors"
              >
                Google Play
              </Link>
              <Link
                href="#"
                className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center transition-colors"
              >
                App Store
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 text-center">
          <p>&copy; {new Date().getFullYear()} CineHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
