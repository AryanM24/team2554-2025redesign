import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import SponsorSlider from '@/components/SponsorSlider';
import { HeroSection } from '@/components/herosection';
import CountdownTimer from '@/components/CountdownTimer';


export default function Home() {
   return (
      <div className="flex flex-col min-h-screen bg-[#040404]">
         {/* Hero Section */}
         <section className="text-center bg-[#040404] pt-0">
            <HeroSection />
         </section>

         {/* Team Info Section */}
         <section className="py-16 bg-[#040404]">
            <Container>
               <div className="grid md:grid-cols-2 gap-8 md:gap-8 gap-0">
                  {/* Combined Card for Mobile - Image and Text */}
                  <Card className="p-0 overflow-hidden border-neutral-700 h-full order-1 md:order-2 md:rounded-lg">
                     {/* Image Section */}
                     <div className="relative w-full h-[300px] md:h-full">
                        <Image
                           src="/about_us_images/about_us_front.jpg"
                           alt="Team Photo"
                           fill
                           sizes="(max-width: 768px) 100vw, 50vw"
                           className="object-cover"
                        />
                     </div>
                     {/* Text Content Section - Mobile only, hidden on desktop */}
                     <div className="md:hidden bg-neutral-900 border-t-0">
                        <div className="p-6 flex flex-col">
                           <div className="flex items-center space-x-4 mb-4">
                              <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 ">
                                 <Image
                                    src="/jps.png"
                                    alt="JPS Robotics Logo"
                                    fill
                                    className="object-cover"
                                 />
                              </div>
                              <h2 className="text-2xl font-bold text-white">
                                 JPS ROBOTICS TEAM
                              </h2>
                           </div>
                           <div className="space-y-4 text-gray-300">
                              <p>
                                 Team 2554, The Warhawks, is John P. Stevens High
                                 School's FIRST Robotics team. As FIRST
                                 participants we seek to inspire new generations to
                                 explore the wonders of science and technology.
                              </p>
                              <p>
                                 Every year, high school students have 6 weeks to
                                 design and build a robot that can accomplish FRC's
                                 challenge and compete with teams from across the
                                 nation. The 2023 theme is Rapid React. Through the
                                 guidance and leadership of our captains and
                                 mentors, students are able to acquire the
                                 knowledge necessary for and develop a powerful
                                 interest in STEM careers.
                              </p>
                              <p>
                                 Our team is divided into four separate sub-teams:
                                 Mechanical, Electrical, Programming, and
                                 Operations. Although each individual group
                                 specializes in their field, all of the sub-teams
                                 come together to create a well-functioning robot
                                 for the competition.
                              </p>
                           </div>
                        </div>
                     </div>
                  </Card>

                  {/* Text Content - Desktop only, hidden on mobile */}
                  <Card className="hidden md:block overflow-hidden bg-neutral-900 border-neutral-700 h-full order-2 md:order-1">
                     <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center space-x-4 mb-4">
                           <div className="relative w-16 h-16 overflow-hidden flex-shrink-0 ">
                              <Image
                                 src="/jps.png"
                                 alt="JPS Robotics Logo"
                                 fill
                                 className="object-cover"
                              />
                           </div>
                           <h2 className="text-2xl font-bold text-white">
                              JPS ROBOTICS TEAM
                           </h2>
                        </div>
                        <div className="space-y-4 text-gray-300 flex-grow">
                           <p>
                              Team 2554, The Warhawks, is John P. Stevens High
                              School's FIRST Robotics team. As FIRST
                              participants we seek to inspire new generations to
                              explore the wonders of science and technology.
                           </p>
                           <p>
                              Every year, high school students have 6 weeks to
                              design and build a robot that can accomplish FRC's
                              challenge and compete with teams from across the
                              nation. The 2023 theme is Rapid React. Through the
                              guidance and leadership of our captains and
                              mentors, students are able to acquire the
                              knowledge necessary for and develop a powerful
                              interest in STEM careers.
                           </p>
                           <p>
                              Our team is divided into four separate sub-teams:
                              Mechanical, Electrical, Programming, and
                              Operations. Although each individual group
                              specializes in their field, all of the sub-teams
                              come together to create a well-functioning robot
                              for the competition.
                           </p>
                        </div>
                     </div>
                  </Card>
               </div>
            </Container>
         </section>

         {/* Sponsors Section */}
         <section className="py-16 bg-[#040404]">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  Our Sponsors
               </h2>
               <SponsorSlider />
            </Container>
         </section>

         {/* Season Challenge Section */}
         <section className="py-16 bg-[#040404] hidden md:block">
            <Container>
               <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                     <Image
                        src="/FIRST_AGE-FRC-rebuilt-logo.png"
                        alt="FIRST Rebuilt Challenge Logo"
                        width={300}
                        height={300}
                        className="w-50 max-w-md h-auto"
                     />
                  </div>
                  <div className="space-y-4">
                     <h2 className="text-3xl font-bold text-white">
                        2025 Season Challenge: Rebuilt
                     </h2>
                     <p className="text-gray-300">
                     In REBUILT™ presented by Haas, a new challenge releasing January 10, 2026,  FIRST® Robotics Competition teams will use engineering skills and re-imagine the past.
                     </p>
                     <p className="text-gray-300">
                     Every artifact we uncover holds a story. Each tool, each innovation, each work of art connects us to the people and ideas that came before us. Using STEM skills and teamwork, today we can dig deeper into discoveries than ever before.
                     </p>
                     <CountdownTimer />
                  </div>
               </div>
            </Container>
         </section>

         {/* Events Section */}
         <section id="events" className="py-16 bg-[#040404]">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Our Events
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  We don't just compete! Participate in one of our super fun
                  outreach events!
               </p>
               <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0 pr-4 md:pr-0">
                  <Card className="bg-neutral-800 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/STEM.jpg"
                              alt="JPS STEM Day"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <CardTitle className="text-white">
                           JPS STEM Day
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Explore the exciting world of STEM through
                           interactive demonstrations and hands-on activities.
                        </p>
                     </CardContent>
                  </Card>
                  <Card className="bg-neutral-800 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/HackJPS.jpeg"
                              alt="Hack.JPS'25"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <div className="flex items-center justify-between gap-4">
                           <CardTitle className="text-white">
                              Hack.JPS'25
                           </CardTitle>
                           <Link 
                              href="https://hackjps.org"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-500 hover:text-green-400 text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-colors"
                           >
                              Learn more →
                           </Link>
                        </div>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Our annual hackathon where students collaborate and
                           innovate to solve real-world problems.
                        </p>
                     </CardContent>
                  </Card>
                  <Card className="bg-neutral-800 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/placeholder.svg"
                              alt="Video Game Night"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <CardTitle className="text-white">
                           Video Game Night
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Join us for an evening of gaming and fun! Connect
                           with fellow tech enthusiasts and enjoy some
                           competitive gaming.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </Container>
         </section>

         {/* Press Section */}
         <section className="py-16 bg-[#040404]">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Latest Press Coverage
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  See what others are saying about Team 2554
               </p>
               <div className="flex md:grid md:grid-cols-3 gap-6 mb-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0">
                  <Card className="bg-neutral-900 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/visualeyes-cheddar.png"
                              alt="Cheddar News Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <CardTitle className="text-white">
                           'First' Team 'WarHawks' Creates Device To Help Aid
                           The Blind
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">Cheddar News</p>
                     </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/senatorx2554.png"
                              alt="Senator Visit Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <CardTitle className="text-white">
                           Award-winning J.P. Stevens High School FIRST Robotics
                           team honored
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Office of Senator Patrick Diegnan
                        </p>
                     </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-neutral-700 w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/DOD-STEM.webp"
                              alt="DoD STEM Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover"
                           />
                        </div>
                        <CardTitle className="text-white">
                           DoD STEM Sponsors Student Innovators Through FIRST
                           Robotics
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Department of Defense STEM
                        </p>
                     </CardContent>
                  </Card>
               </div>
               <div className="flex justify-center">
                  <Button
                     className="bg-green-700 hover:bg-green-600 text-white hover:text-white transition-colors duration-200"
                     asChild
                  >
                     <Link href="/press">See more coverage...</Link>
                  </Button>
               </div>
            </Container>
         </section>
      </div>
   );
}
