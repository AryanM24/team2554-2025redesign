import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/container'

const pressArticles = [
  {
    title: "'First' Team 'WarHawks' Creates Device To Help Aid The Blind",
    source: "Cheddar News",
    image: "/visualeyes-cheddar.png",
    link: "#",
    date: "JAN 12, 2019",
    blurb: "Team 2554's innovative VisualEyes device helps visually impaired individuals navigate their environment with greater confidence and independence.",
    featured: true
  },
  {
    title: "Award-winning J.P. Stevens High School FIRST Robotics team honored",
    source: "TAPinto",
    image: "/TAPinto-Award.jpg",
    link: "#",
    date: "FEB 8, 2024",
    blurb: "Some two line blurb could go here about the press release but is not required",
    featured: true
  },
  {
    title: "Award-winning J.P. Stevens High School FIRST Robotics team honored",
    source: "Office of Senator Patrick Diegnan",
    image: "/senatorx2554.png",
    link: "#",
    date: "MAR 15, 2024",
    blurb: "",
    featured: false
  },
  {
    title: "DoD STEM Sponsors Student Innovators Through FIRST Robotics",
    source: "Department of Defense STEM",
    image: "/DOD-STEM.webp",
    link: "#",
    date: "JAN 20, 2024",
    blurb: "",
    featured: false
  },
  {
    title: "The WarHawks aim for first",
    source: "JPS Hawkeye",
    image: "/hawkeye.png",
    link: "#",
    date: "DEC 5, 2023",
    blurb: "",
    featured: false
  }
]

export default function PressPage() {
  const featuredArticle = pressArticles[0]
  const secondaryArticle = pressArticles[1]
  const sidebarArticles = pressArticles.slice(2)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 border-b border-green-600">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Press Coverage</h1>
          <p className="text-center mt-2 text-gray-200">
            See what others are saying about Team 2554
          </p>
        </Container>
      </section>

      {/* Press Articles */}
      <section className="py-16 bg-black">
        <Container>
          {/* Featured Article */}
          <Link href={featuredArticle.link} className="block mb-12 group">
            <div className="border border-neutral-800 bg-neutral-900 overflow-hidden">
              <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-gray-400 text-sm mb-3">
                  {featuredArticle.date} VIA {featuredArticle.source.toUpperCase()}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-green-500 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-gray-300 mb-4 max-w-3xl">
                  {featuredArticle.blurb}
                </p>
              </div>
            </div>
          </Link>

          {/* Secondary Articles - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Secondary Article - Left Column */}
            <Link href={secondaryArticle.link} className="lg:col-span-2 block group">
              <div className="border border-neutral-800 bg-neutral-900 overflow-hidden h-full">
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={secondaryArticle.image}
                    alt={secondaryArticle.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-3">
                    {secondaryArticle.date} VIA {secondaryArticle.source.toUpperCase()}
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-500 transition-colors">
                    {secondaryArticle.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {secondaryArticle.blurb}
                  </p>
                </div>
              </div>
            </Link>

            {/* Sidebar Articles - Right Column */}
            <div className="space-y-6">
              {sidebarArticles.map((article, index) => (
                <Link key={index} href={article.link} className="block group">
                  <div className="border border-neutral-800 bg-neutral-900 overflow-hidden">
                    <div className="flex gap-4 p-4">
                      <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-400 text-xs mb-2">
                          {article.date} VIA {article.source.toUpperCase()}
                        </p>
                        <h3 className="text-sm md:text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-green-500 transition-colors">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
