'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu, ChevronDown } from 'lucide-react'
import { Container } from './container'

const mainNavItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/executive-board', label: 'Team' },
  { href: '/sponsors', label: 'Sponsors' },
]

const moreNavItems = [
  { href: '/gallery', label: 'Gallery' },
  { href: '/press', label: 'Press' },
  { href: '/info', label: 'Info' },
]

const allNavItems = [...mainNavItems, ...moreNavItems]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-[#040404] mb-0 pb-0">
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
        <nav className="hidden md:flex items-center gap-1">
          {mainNavItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 text-sm font-medium transition-all border text-gray-300 border-neutral-800 hover:text-green-500 hover:border-green-700 bg-neutral-900"
            >
              {label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="px-4 py-2 text-sm font-medium transition-all border flex items-center gap-1 bg-green-700 text-white border-green-600"
            >
              More
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-neutral-900 border-neutral-800 min-w-[120px] [&>*]:rounded-none"
            >
              {moreNavItems.map(({ href, label }) => (
                <DropdownMenuItem key={href} asChild>
                  <Link
                    href={href}
                    className="cursor-pointer text-gray-300 hover:text-green-500 hover:bg-neutral-800"
                  >
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center space-x-4 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon"
                className="border-neutral-700 text-gray-300 hover:bg-neutral-800 rounded-none"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="bg-[#040404] border-neutral-800"
            >
              <nav className="flex flex-col space-y-2 mt-4">
                {allNavItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="px-4 py-3 text-sm font-medium transition-all border text-gray-300 border-neutral-800 hover:text-green-500 hover:border-green-700 bg-neutral-900"
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

