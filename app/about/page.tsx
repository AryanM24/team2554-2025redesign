import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import Link from 'next/link';

const subteams = [
   {
      name: 'Mechanical Team',
      description:
         'The Mechanical Team is in charge of creating a prototype and the physical construction of the robot. They train new members to safely use power tools and handle build equipment to create a practice field to use before competition. They also design components such as drive chains, the chassis, and shooters.',
      image: '/about_us_images/mech_image.jpg',
      accomplishments: [
         'Robot Design',
         'Shop Safety',
         'CAD Expertise',
         'Field Building',
      ],
   },
   {
      name: 'Electrical Team',
      description:
         'The Electrical Team organizes and puts together the electrical board. The electrical board essentially connects the power and the programming to the motors and other parts of the robot so that it may perform all the desired functions!',
      image: '/about_us_images/elec_image.jpg',
      accomplishments: [
         'Board Design',
         'Power Systems',
         'Sensor Control',
         'Motor Integration',
      ],
   },
   {
      name: 'Programming Team',
      description:
         'The Programming Team creates and runs a program in Java that allows students to control the robot. Programming code directs the robot to carry out a specific job within the limits of its hardware but also has to take into account the limits of human ability in order to program AI for competitions.',
      image: '/about_us_images/prog_image_3.jpg',
      accomplishments: [
         'Autonomous',
         'Vision Systems',
         'Controls',
         'Data Analysis',
      ],
   },
];

export default function AboutPage() {
   return (
      <div className="flex flex-col min-h-screen bg-neutral-900">
         {/* Hero Banner */}
         <section className="bg-green-700 py-12 text-white">
            <Container>
               <div className="animate-fadeIn">
                  <h1 className="text-4xl font-bold text-center">About us</h1>
                  <p className="text-center mt-2 text-gray-300">
                     Building Tomorrow's Engineers Today
                  </p>
               </div>
            </Container>
         </section>

         {/* Team Overview Section */}
         <section className="py-16 bg-neutral-900 hidden sm:block">
            <Container>
               <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <Card className="bg-neutral-800 border-neutral-700 overflow-hidden h-full">
                     <CardContent className="flex flex-col justify-between h-full p-8">
                        <div className="flex flex-col items-center space-y-8">
                           <div className="flex items-center space-x-4">
                              <div className="relative w-16 h-16 overflow-hidden rounded-full bg-neutral-700">
                                 <Image
                                    src="/jps.jpeg"
                                    alt="JPS Robotics Logo"
                                    fill
                                    className="object-cover"
                                 />
                              </div>
                              <h2 className="text-2xl font-bold text-white">
                                 JPS ROBOTICS
                              </h2>
                           </div>
                           <p className="text-gray-300 text-center max-w-lg">
                              Team 2554, The Warhawks, is John P. Stevens High
                              School's FIRST Robotics team. As FIRST
                              participants, we seek to inspire new generations
                              to explore the wonders of STEM.
                           </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 w-full mt-8">
                           <div className="text-center p-4 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors duration-300 transform hover:scale-105">
                              <div className="text-2xl font-bold text-white">
                                 10+
                              </div>
                              <div className="text-sm text-gray-300">
                                 Years of Innovation
                              </div>
                           </div>
                           <div className="text-center p-4 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors duration-300 transform hover:scale-105">
                              <div className="text-2xl font-bold text-white">
                                 4
                              </div>
                              <div className="text-sm text-gray-300">
                                 Subteams
                              </div>
                           </div>
                           <div className="text-center p-4 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors duration-300 transform hover:scale-105">
                              <div className="text-2xl font-bold text-white">
                                 1
                              </div>
                              <div className="text-sm text-gray-300">
                                 Shared Vision
                              </div>
                           </div>
                        </div>
                     </CardContent>
                  </Card>
                  <div className="rounded-lg overflow-hidden h-full shadow-lg shadow-neutral-950/20 transform transition-transform duration-300 hover:scale-[1.02]">
                     <div className="relative w-full h-full">
                        <Image
                           src="/about_us_images/about_us_front.jpg"
                           alt="Team Photo"
                           fill
                           className="object-cover"
                        />
                     </div>
                  </div>
               </div>
            </Container>
         </section>

         {/* Subteams Section */}
         <section className="py-16 bg-neutral-800">
            <Container>
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white mb-3">
                     Our Subteams
                  </h2>
                  <p className="text-gray-300">
                     Each subteam brings unique expertise to create our
                     competitive edge
                  </p>
               </div>

               {subteams.map((team, index) => (
                  <div key={team.name} className="mb-12 last:mb-0">
                     <div className="grid md:grid-cols-2 gap-12">
                        <div
                           className={`order-2 ${
                              index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                           }`}
                        >
                           <Card className="h-full bg-neutral-900 border-neutral-700">
                              <CardHeader className="pb-2">
                                 <CardTitle className="text-2xl text-white">
                                    {team.name}
                                 </CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-8">
                                 <p className="text-gray-300 leading-relaxed">
                                    {team.description}
                                 </p>
                                 <div className="space-y-4">
                                    <h3 className="text-white font-semibold">
                                       Key Areas of Focus:
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                       {team.accomplishments.map(
                                          (accomplishment, i) => (
                                             <span
                                                key={i}
                                                className="px-4 py-3 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center text-center"
                                             >
                                                {accomplishment}
                                             </span>
                                          )
                                       )}
                                    </div>
                                 </div>
                              </CardContent>
                           </Card>
                        </div>
                        <div
                           className={`h-[400px] order-1 ${
                              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
                           }`}
                        >
                           <div className="transform transition-transform duration-300 hover:scale-[1.02] h-full">
                              <Image
                                 src={team.image}
                                 alt={`${team.name} at Work`}
                                 width={600}
                                 height={400}
                                 className="rounded-lg w-full h-full object-cover"
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
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
