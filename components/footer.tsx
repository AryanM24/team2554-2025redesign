import Image from 'next/image'
import Link from 'next/link'
import { Youtube, Instagram, Music } from 'lucide-react'
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
    <footer className="border-t border-neutral-800 bg-neutral-900 py-8">
      <Container>
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
                src="/2554-logo.png"
                alt="Warhawks Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
            />
            <p className="text-sm text-gray-300">
            </p>
          </div>
          <p className="text-sm text-gray-300 text-center md:text-left">
            made with ❤️ by the operations programming team :)
          </p>
          <div className="flex space-x-4">
            <Link 
              href="https://www.youtube.com/@WarhawksTeam2554" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Youtube className="h-5 w-5" />
            </Link>
            <Link 
              href="https://www.instagram.com/jpsrobotics2554/" 
              className="text-gray-300 hover:text-green-500 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

