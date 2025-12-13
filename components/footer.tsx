import Image from 'next/image'
import Link from 'next/link'
import { Youtube, Instagram, Github, Heart } from 'lucide-react'
import { Container } from './container'

// Custom TikTok icon component since Lucide doesn't have one
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="relative bg-[#090909] py-12">
      {/* Top Vignette Effect */}
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10">
        {/* Strong vignette using dashboard background color (#040404) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#040404] via-[#040404]/90 to-[#090909]" />
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#040404] via-[#040404]/80 to-transparent" />
      </div>
      
      <Container className="relative z-20 pt-6">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Left Section - Branding */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/2554-logo.png"
                alt="Warhawks Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-md">
              Empowering students to innovate and make impact through FIRST Robotics competition.
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Organization Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base">Organization</h3>
              <div className="flex flex-col space-y-3">
                <Link href="mailto:warhawks2554@gmail.com" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Contact
                </Link>
                <Link href="/about" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  About
                </Link>
                <Link href="/executive-board" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Team
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base">Resources</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/gallery" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Gallery
                </Link>
                <Link href="/press" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Press
                </Link>
                <Link href="/info" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Info
                </Link>
              </div>
            </div>

            {/* Community Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base">Community</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/sponsors" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Sponsors
                </Link>
                <Link href="/#events" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Events
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section - Above the border line */}
        <div className="mb-8 flex justify-start md:justify-end">
          <div className="flex space-x-4">
            <Link 
              href="https://www.instagram.com/jpsrobotics2554/" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.tiktok.com/@warhawks2554?lang=en" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.youtube.com/@WarhawksTeam2554" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link 
              href="https://github.com/Team2554" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Section with Border, Copyright, and Made with Love */}
        <div className="border-t border-neutral-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2025 Team 2554 The Warhawks. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 fill-yellow-500 text-yellow-500" /> in Edison, NJ
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
