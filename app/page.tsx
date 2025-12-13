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
      <div className="flex flex-col min-h-screen bg-black">
         {/* Hero Section */}
         <section className="text-center bg-black pt-0.1rem">
            <HeroSection />
         </section>

         {/* Team Info Section */}
         <section className="py-16 bg-black">
            <Container>
               <div className="grid md:grid-cols-2 gap-8">
                  <Card className="overflow-hidden bg-neutral-900 border-neutral-700 h-full transition-all duration-300 hover:shadow-xl hover:border-neutral-600 group">
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

                  <Card className="p-0 overflow-hidden border-neutral-700 h-full transition-all duration-300 hover:shadow-xl hover:border-neutral-600 group">
                     <div className="relative w-full h-full">
                        <Image
                           src="/about_us_images/about_us_front.jpg"
                           alt="Team Photo"
                           fill
                           sizes="(max-width: 768px) 100vw, 50vw"
                           className="object-cover transition-all duration-500 group-hover:scale-105"
                        />
                     </div>
                  </Card>
               </div>
            </Container>
         </section>

         {/* Sponsors Section */}
         <section className="py-16 bg-black">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  Our Sponsors
               </h2>
               <SponsorSlider />
            </Container>
         </section>

         {/* Season Challenge Section */}
         <section className="py-16 bg-black hidden md:block">
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
         <section className="py-16 bg-black">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Upcoming Events
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  We don't just compete! Participate in one of our super fun
                  outreach events!
               </p>
               <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0 pr-4 md:pr-0">
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/placeholder.svg"
                              alt="Video Game Night"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
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
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/STEM.jpg"
                              alt="JPS STEM Day"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
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
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/HackJPS.jpeg"
                              alt="Hack.JPS'25"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
                           Hack.JPS'25
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">
                           Our annual hackathon where students collaborate and
                           innovate to solve real-world problems.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </Container>
         </section>

         {/* Press Section */}
         <section className="py-16 bg-black">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Latest Press Coverage
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  See what others are saying about Team 2554
               </p>
               <div className="flex md:grid md:grid-cols-3 gap-6 mb-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-hide snap-x snap-mandatory scroll-pl-4 md:scroll-pl-0">
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group w-[calc(75%-12px)] md:w-auto flex-shrink-0 md:flex-shrink snap-start">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/visualeyes-cheddar.png"
                              alt="Cheddar News Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
                           'First' Team 'WarHawks' Creates Device To Help Aid
                           The Blind
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <p className="text-gray-300">Cheddar News</p>
                     </CardContent>
                  </Card>
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group min-w-[280px] md:min-w-0 flex-shrink-0 md:flex-shrink">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/senatorx2554.png"
                              alt="Senator Visit Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
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
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group min-w-[280px] md:min-w-0 flex-shrink-0 md:flex-shrink">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden">
                           <Image
                              src="/DOD-STEM.webp"
                              alt="DoD STEM Coverage"
                              width={300}
                              height={200}
                              className="w-full h-48 object-cover transform transition-all duration-500 group-hover:scale-110"
                           />
                        </div>
                        <CardTitle className="text-white group-hover:text-green-500 transition-colors duration-300">
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
                     variant="outline"
                     className="bg-green-700 text-white hover:bg-green-600 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
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
