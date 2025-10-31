import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, TestTube } from 'lucide-react'
import { Container } from '@/components/container'

const infoCards = [
  {
    title: "FIRST Robotics",
    description: "To find more information about the FIRST Robotics Competition (FRC) click the link below.",
    imageUrl: "https://www.firstinspires.org/sites/default/files/open-graph-first-logo.png",
    imageAlt: "FIRST Robotics Logo",
    buttonText: "FIRST ROBOTICS",
    buttonLink: "#",
    containerClass: "bg-neutral-900",
    type: "image"
  },
  {
    title: "Blue Alliance",
    description: "To see our past performance and keep up to date, check out our Blue Alliance page.",
    icon: TestTube,
    buttonText: "BLUE ALLIANCE PAGE",
    buttonLink: "#",
    containerClass: "bg-[#3b5998]",
    type: "icon"
  },
  {
    title: "Team Merch",
    description: "Buy our merch!",
    imageUrl: "/warhawks_logo_ad.png",
    imageAlt: "Team 2554 Logo",
    buttonText: "TEAM 2554 MERCH STORE",
    buttonLink: "#",
    containerClass: "bg-black",
    type: "image"
  },
  {
    title: "Documentation",
    description: "To see information on how our subteams work, check out our documentation.",
    icon: FileText,
    buttonText: "DOCUMENTATION",
    buttonLink: "#",
    containerClass: "bg-neutral-900",
    type: "icon"
  }
]

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Hero Banner */}
      <section className="bg-green-700 py-12 text-white">
        <Container>
          <h1 className="text-4xl font-bold text-center text-white">Information and Updates</h1>
          <p className="text-center mt-2 text-gray-300">
            lorem ipsum lorem ipsum etc. etc. oh yea
          </p>
        </Container>
      </section>

      {/* Info Grid */}
      <section className="py-16 bg-neutral-900">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {infoCards.map((card, index) => (
              <Card key={index} className="p-6 bg-neutral-800 border-neutral-700">
                <CardContent className="space-y-6">
                  <div className={`${card.containerClass} p-8 rounded-lg flex justify-center items-center`}>
                    {card.type === 'image' ? (
                      <Image
                        src={card.imageUrl}
                        alt={card.imageAlt}
                        width={300}
                        height={150}
                        className="w-full h-auto"
                      />
                    ) : (
                      card.icon && <card.icon className="w-24 h-24 text-white" />
                    )}
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-300">
                      {card.description}
                    </p>
                    <Button
                      variant="secondary"
                      className="w-full bg-green-700 hover:bg-green-800 text-white"
                      asChild
                    >
                      <Link href={card.buttonLink}>{card.buttonText}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

