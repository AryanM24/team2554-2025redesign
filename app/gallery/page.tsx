import React from 'react'
import Image from 'next/image'
import MasonryGrid from '@/components/MasonryGrid'
import { Container } from '@/components/container'

// Gallery image component with caption
const GalleryImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {alt}
        </h3>
        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {caption}
        </p>
      </div>
    </div>
  )
}

// Gallery images array with captions
const galleryImages = [
  {
    src: '/placeholder.svg',
    alt: 'Competition 2024',
    caption: 'Our team competing at the 2024 FRC Regional Championship'
  },
  {
    src: '/placeholder.svg',
    alt: 'Build Season',
    caption: 'Students working together during the 2024 build season'
  },
  {
    src: '/placeholder.svg',
    alt: 'Outreach Event',
    caption: 'Team 2554 at the local STEM fair inspiring future engineers'
  },
  {
    src: '/placeholder.svg',
    alt: 'Team Workshop',
    caption: 'Working on the robot\'s mechanical systems'
  },
  {
    src: '/placeholder.svg',
    alt: 'Awards Ceremony',
    caption: 'Celebrating our Engineering Inspiration Award'
  },
  {
    src: '/placeholder.svg',
    alt: 'Team Meeting',
    caption: 'Weekly strategy meeting with all subteams'
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Gallery</h1>
          <p className="text-center mt-2 text-gray-300">
            Capturing moments of innovation, teamwork, and success
          </p>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <MasonryGrid>
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            ))}
          </MasonryGrid>
        </Container>
      </section>
    </div>
  )
}

