import Image from 'next/image'
import Link from 'next/link'
import { Youtube, Instagram, Linkedin, Twitter, Github } from 'lucide-react'
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
    <footer className="bg-black py-12 border-t border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Left Section - Branding and Socials */}
          <div className="flex flex-col space-y-6">
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
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/jpsrobotics2554/" 
                className="text-white hover:text-green-500 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@warhawks2554?lang=en" 
                className="text-white hover:text-green-500 transition-colors duration-200"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://www.youtube.com/@WarhawksTeam2554" 
                className="text-white hover:text-green-500 transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com/Team2554" 
                className="text-white hover:text-green-500 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Resources Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-white font-bold text-base">Resources</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/gallery" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Upcoming Events
                </Link>
                <Link href="/gallery" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Gallery
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
                <Link href="/executive-board" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Our Team
                </Link>
                <Link href="/about" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  About Us
                </Link>
                <Link href="mailto:warhawks2554@gmail.com" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Contact
                </Link>
                <Link href="/sponsors" className="text-gray-300 text-sm hover:text-green-500 transition-colors">
                  Become a Sponsor
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-neutral-700 pt-8">
          <p className="text-gray-300 text-sm text-center">
            © 2025 Team 2554 The Warhawks. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

