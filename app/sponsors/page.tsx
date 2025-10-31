import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/container'
import { sponsors } from '@/lib/sponsors'


export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Sponsors</h1>
          <p className="text-center mt-2 text-gray-300">
            This is our 2024-2025 Robotics Executive Board
          </p>
        </Container>
      </section>

      {/* Sponsors List */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="space-y-6 max-w-4xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="overflow-hidden bg-neutral-800 border-neutral-700">
                <CardContent className="p-6 flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={150}
                      height={150}
                      className="w-[150px] h-auto object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">{sponsor.name}</h2>
                    {sponsor.description && (
                      <p className="text-gray-300">{sponsor.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Become a Sponsor */}
      <section className="py-16 bg-neutral-800">
        <Container>
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">How to Become a Sponsor</h2>
            <p className="text-gray-300">
              Click below to view the 2024 - 2025 Team 2554 Sponsorship Packet
            </p>
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              2024 - 2025 Team 2554 Sponsorship Packet
            </Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

