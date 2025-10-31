'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Container } from './container'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/executive-board', label: 'Executive Board' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/press', label: 'Press' },
  { href: '/info', label: 'Info' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full border-b border-neutral-800 bg-neutral-900">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/2554-logo.png"
            alt="Warhawks Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === href
                  ? 'bg-green-700 text-white'
                  : 'text-gray-300 hover:text-green-500'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="border-neutral-700 text-gray-300 hover:bg-neutral-800"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-neutral-900 border-neutral-800"
            >
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === href
                        ? 'bg-green-700 text-white'
                        : 'text-gray-300 hover:text-green-500'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

