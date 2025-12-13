'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { Button } from '@/components/ui/button'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/sponsor-slider.css'
import { sponsors } from '@/lib/sponsors'

export default function SponsorSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  }

  return (
    <div>
      <Slider {...settings} className="sponsor-slider">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={300}
                height={200}
                className="w-full h-48 object-contain"
              />
              <p className="text-center mt-2 text-gray-600">{sponsor.name}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2 h-10">
          {/* Arrows are positioned here via CSS */}
        </div>
        <Button
          className="bg-green-700 hover:bg-green-600 text-white hover:text-white transition-colors duration-200"
          asChild
        >
          <Link href="/sponsors">See more...</Link>
        </Button>
      </div>
    </div>
  )
}

