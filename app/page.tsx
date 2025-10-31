import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import SponsorSlider from '@/components/SponsorSlider';

export default function Home() {
   return (
      <div className="flex flex-col min-h-screen bg-neutral-900">
         {/* Hero Section */}
         <section className="py-20 text-center bg-neutral-900">
            <Container>
               <div className="transform transition-all duration-700 hover:scale-105">
                  <Image
                     src="/warhawks-logo-2-smol_orig.png"
                     alt="Warhawks Logo with Text"
                     width={800}
                     height={400}
                     className="mx-auto h-auto"
                     priority
                  />
               </div>
               <p className="mt-4 text-xl text-gray-300 animate-fade-in">
                  FRC Team 2554 - JPS Robotics
               </p>
               <div className="mt-8 flex justify-center gap-4">
                  <Button
                     className="bg-green-700 hover:bg-green-600 text-white transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                     asChild
                  >
                     <Link href="/about">Learn More</Link>
                  </Button>
                  <Button
                     variant="outline"
                     className="text-white border-white hover:bg-neutral-800 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                     asChild
                  >
                     <Link href="/gallery">Outreach</Link>
                  </Button>
               </div>
            </Container>
         </section>

         {/* Team Info Section */}
         <section className="py-16 bg-neutral-800">
            <Container>
               <div className="grid md:grid-cols-2 gap-8">
                  <Card className="overflow-hidden bg-neutral-900 border-neutral-700 h-full transition-all duration-300 hover:shadow-xl hover:border-neutral-600 group">
                     <div className="p-6 h-full flex flex-col">
                        <div className="flex items-center space-x-4 mb-4">
                           <div className="relative w-16 h-16 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
                              <Image
                                 src="/jps.jpeg"
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

         {/* Events Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Upcoming Events
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  We don't just compete! Participate in one of our super fun
                  outreach events!
               </p>
               <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
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
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
                           <Image
                              src="/placeholder.svg"
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
                  <Card className="bg-neutral-800 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
                           <Image
                              src="/placeholder.svg"
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
         <section className="py-16 bg-neutral-800">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-4 text-white">
                  Latest Press Coverage
               </h2>
               <p className="text-center text-gray-300 mb-8">
                  See what others are saying about Team 2554
               </p>
               <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
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
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
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
                  <Card className="bg-neutral-900 border-neutral-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl group">
                     <CardHeader className="space-y-4">
                        <div className="overflow-hidden rounded-t-lg">
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

         {/* Sponsors Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <h2 className="text-3xl font-bold text-center mb-8 text-white">
                  Our Sponsors
               </h2>
               <SponsorSlider />
               <div className="flex justify-center mt-8">
                  <Button
                     variant="outline"
                     className="bg-green-700 text-white hover:bg-green-600 transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                     asChild
                  >
                     <Link href="/sponsors">See more...</Link>
                  </Button>
               </div>
            </Container>
         </section>

         {/* Documentation Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <div className="border-2 border-dashed border-yellow-500 rounded-lg p-8 hover:border-yellow-400 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                     <div className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                        <Image
                           src="/warhawks_logo_ad.png"
                           alt="Team Logo"
                           width={200}
                           height={200}
                           className="rounded-lg w-full h-auto"
                        />
                     </div>
                     <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white">
                           Want to learn more?
                        </h2>
                        <p className="text-gray-300">
                           Click the button below to view our detailed
                           documentation of EVERYTHING you need to know about
                           Team 2554!
                        </p>
                        <Link href="https://docs.jpsrobotics2554.org/">
                           <Button className="bg-green-700 hover:bg-green-800 mt-5">
                              Team 2554 Official Documentation
                           </Button>
                        </Link>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
}
