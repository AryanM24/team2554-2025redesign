import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'

const pressArticles = [
  {
    title: "'First' Team 'WarHawks' Creates Device To Help Aid The Blind",
    source: "Cheddar News",
    image: "/visualeyes-cheddar.png",
    link: "#",
    featured: true
  },
  {
    title: "Award-winning J.P. Stevens High School FIRST Robotics team honored",
    source: "Office of Senator Patrick Diegnan",
    image: "/senatorx2554.png",
    link: "#",
    featured: true
  },
  {
    title: "Award-winning J.P. Stevens High School FIRST Robotics team honored",
    source: "TAPinto",
    image: "/TAPinto-Award.jpg",
    link: "#",
    featured: true
  },
  {
    title: "DoD STEM Sponsors Student Innovators Through FIRST Robotics",
    source: "Department of Defense STEM",
    image: "/DOD-STEM.webp",
    link: "#",
    featured: false
  },
  {
    title: "The WarHawks aim for first",
    source: "JPS Hawkeye",
    image: "/hawkeye.png",
    link: "#",
    featured: false
  }
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Press Coverage</h1>
          <p className="text-center mt-2 text-gray-300">
            lorem ipsum lorem ipsum etc. etc. oh yea
          </p>
        </Container>
      </section>

      {/* Press Grid */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressArticles.map((article, index) => (
              <Link 
                key={index} 
                href={article.link}
                className="block transition-transform hover:-translate-y-1"
              >
                <Card className="h-full overflow-hidden bg-neutral-800 border-neutral-700">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2 text-white">
                      {article.title}
                    </h2>
                    <p className="text-gray-300">{article.source}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

