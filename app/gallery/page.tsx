'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import { Container } from '@/components/container'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search, Calendar } from 'lucide-react'

// Gallery image component with caption - boxy design
const GalleryImage = ({ src, alt, caption, date }: { src: string; alt: string; caption: string; date: string }) => {
  return (
    <div className="relative overflow-hidden group border border-neutral-800 bg-neutral-900">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {alt}
          </h3>
          <p className="text-gray-300 text-sm mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {caption}
          </p>
          <p className="text-gray-400 text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            {date}
          </p>
        </div>
      </div>
    </div>
  )
}

// Gallery images array with captions and dates - using images from repo
const galleryImages = [
  {
    id: 1,
    src: '/Build.jpg',
    alt: 'Build Season',
    caption: 'Students working together during build season',
    date: 'January 2024',
    year: 2024,
    month: 1,
    category: 'Build Season'
  },
  {
    id: 2,
    src: '/Meeting.jpg',
    alt: 'Team Meeting',
    caption: 'Weekly strategy meeting with all subteams',
    date: 'February 2024',
    year: 2024,
    month: 2,
    category: 'Team'
  },
  {
    id: 3,
    src: '/Workshop.jpg',
    alt: 'Team Workshop',
    caption: 'Working on the robot\'s mechanical systems',
    date: 'December 2023',
    year: 2023,
    month: 12,
    category: 'Workshop'
  },
  {
    id: 4,
    src: '/Outreach.jpeg',
    alt: 'Outreach Event',
    caption: 'Team 2554 at the local STEM fair inspiring future engineers',
    date: 'February 2024',
    year: 2024,
    month: 2,
    category: 'Outreach'
  },
  {
    id: 5,
    src: '/STEM.jpg',
    alt: 'STEM Day',
    caption: 'Demonstrating our robot at the school science fair',
    date: 'March 2024',
    year: 2024,
    month: 3,
    category: 'Outreach'
  },
  {
    id: 6,
    src: '/HackJPS.jpeg',
    alt: 'Hack.JPS',
    caption: 'Our annual hackathon where students collaborate and innovate',
    date: 'April 2024',
    year: 2024,
    month: 4,
    category: 'Outreach'
  },
  {
    id: 7,
    src: '/Lehigh.JPG',
    alt: 'Lehigh Competition',
    caption: 'Competing at Lehigh University',
    date: 'March 2024',
    year: 2024,
    month: 3,
    category: 'Competition'
  },
  {
    id: 8,
    src: '/about_us_images/about_us_front.jpg',
    alt: 'Team Photo',
    caption: 'Team 2554 The Warhawks',
    date: '2024',
    year: 2024,
    month: 1,
    category: 'Team'
  },
  {
    id: 9,
    src: '/about_us_images/mech_image.jpg',
    alt: 'Mechanical Team',
    caption: 'Mechanical team working on robot design',
    date: 'January 2024',
    year: 2024,
    month: 1,
    category: 'Build Season'
  },
  {
    id: 10,
    src: '/about_us_images/elec_image.jpg',
    alt: 'Electrical Team',
    caption: 'Electrical team organizing the electrical board',
    date: 'January 2024',
    year: 2024,
    month: 1,
    category: 'Build Season'
  },
  {
    id: 11,
    src: '/about_us_images/prog_image.JPG',
    alt: 'Programming Team',
    caption: 'Programming team developing robot code',
    date: 'January 2024',
    year: 2024,
    month: 1,
    category: 'Build Season'
  },
  {
    id: 12,
    src: '/about_us_images/prog_image_2.JPG',
    alt: 'Programming Team Work',
    caption: 'Students working on autonomous routines',
    date: 'February 2024',
    year: 2024,
    month: 2,
    category: 'Build Season'
  },
  {
    id: 13,
    src: '/about_us_images/prog_image_3.jpg',
    alt: 'Programming Session',
    caption: 'Collaborative programming session',
    date: 'February 2024',
    year: 2024,
    month: 2,
    category: 'Build Season'
  },
]

const months = [
  'All Months',
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const years = ['All Years', '2024', '2023', '2022', '2021']

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('All Years')
  const [selectedMonth, setSelectedMonth] = useState('All Months')

  const filteredImages = useMemo(() => {
    return galleryImages.filter(image => {
      const matchesSearch = 
        image.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        image.category.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesYear = selectedYear === 'All Years' || image.year.toString() === selectedYear
      
      const matchesMonth = selectedMonth === 'All Months' || 
        months[image.month] === selectedMonth
      
      return matchesSearch && matchesYear && matchesMonth
    })
  }, [searchQuery, selectedYear, selectedMonth])

  return (
    <div className="min-h-screen bg-[#040404]">
      {/* Hero Section */}
      <section className="bg-green-700 py-12 text-white border-b border-green-600">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Gallery</h1>
          <p className="text-center mt-2 text-gray-200">
            Capturing moments of innovation, teamwork, and success
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-[#040404]">
        <Container>
          {/* Filters - Hidden on mobile */}
          <div className="hidden md:flex flex-col md:flex-row gap-4 items-center mb-8">
            {/* Search Input */}
            <div className="relative flex-1 w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search gallery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-neutral-900 border-neutral-800 text-white placeholder:text-gray-500 focus:border-green-700"
              />
            </div>

            {/* Year Filter */}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-[140px] bg-neutral-900 border-neutral-800 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                {years.map((year) => (
                  <SelectItem 
                    key={year} 
                    value={year}
                    className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Month Filter */}
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full md:w-[160px] bg-neutral-900 border-neutral-800 text-white">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                {months.map((month) => (
                  <SelectItem 
                    key={month} 
                    value={month}
                    className="text-white hover:bg-neutral-800 focus:bg-neutral-800"
                  >
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Results Count */}
            <div className="text-gray-400 text-sm whitespace-nowrap">
              {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            </div>
          </div>

          {/* Images Grid */}
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((image) => (
                <GalleryImage
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  date={image.date}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No images found matching your filters.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  )
}
