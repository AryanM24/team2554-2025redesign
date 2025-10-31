import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/container';
import { legacyPresidents, subteams, presidents } from '@/lib/execBoard';

export default function ExecutiveBoardPage() {
   return (
      <div className="flex flex-col min-h-screen bg-neutral-900">
         {/* Hero Banner */}
         <section className="bg-green-700 py-12 text-white">
            <Container>
               <h1 className="text-4xl font-bold text-center text-white">
                  The Executive Board
               </h1>
               <p className="text-center mt-2 text-gray-300">
                  This is our 2024-2025 Robotics Executive Board
               </p>
            </Container>
         </section>

         {/* Leadership Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <div className="grid md:grid-cols-3 gap-8">
                  {presidents.map((president, index) => (
                     <Card
                        key={index}
                        className="p-6 bg-neutral-800 border-neutral-700"
                     >
                        <CardContent className="flex flex-col items-center space-y-4">
                           <Image
                              src={president.image}
                              alt={president.title}
                              width={200}
                              height={200}
                              className="rounded-lg"
                           />
                           <div className="text-center">
                              <h2 className="text-xl font-semibold text-white">
                                 {president.title}
                              </h2>
                              <p className="text-gray-300">{president.names}</p>
                           </div>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </Container>
         </section>

         {/* Subteam Captains Section */}
         <section className="py-16 bg-neutral-800">
            <Container>
               <div className="max-w-4xl mx-auto space-y-12">
                  {subteams.map((subteam, index) => {
                     const memberCount = subteam.members.length;
                     let gridClass = 'grid gap-8 ';

                     if (memberCount === 1) {
                        gridClass += 'grid-cols-1 max-w-xs mx-auto';
                     } else if (memberCount === 2) {
                        gridClass +=
                           'grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto';
                     } else if (memberCount === 3) {
                        gridClass +=
                           'grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto';
                     } else {
                        gridClass +=
                           'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl';
                     }

                     return (
                        <div key={index}>
                           <h2 className="text-3xl font-bold text-white mb-3 text-center">
                              {subteam.subteamName}
                           </h2>
                           <p className="text-gray-300 mb-10 text-center">
                              {subteam.description}
                           </p>

                           <div className={gridClass}>
                              {subteam.members.map((member, idx) => (
                                 <Card
                                    key={idx}
                                    className="bg-neutral-900 border-none shadow-md overflow-hidden h-full"
                                 >
                                    <CardContent className="p-0 flex flex-col h-full">
                                       {/* Image container with responsive visibility */}
                                       <div className="aspect-[4/5] w-full relative bg-neutral-700 overflow-hidden hidden sm:block">
                                          <Image
                                             src={
                                                member.image ||
                                                '/placeholder.svg'
                                             }
                                             alt={`${member.name} - ${member.title}`}
                                             fill
                                             className="object-cover object-center"
                                          />
                                       </div>
                                       {/* Mobile placeholder (optional) */}
                                       <div className="h-4 bg-neutral-700 sm:hidden"></div>
                                       <div className="p-5 text-center flex-grow flex flex-col justify-center">
                                          <h3 className="text-lg font-semibold text-white mb-1">
                                             {member.title}
                                          </h3>
                                          <p className="text-gray-400">
                                             {member.name}
                                          </p>
                                       </div>
                                    </CardContent>
                                 </Card>
                              ))}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </Container>
         </section>

         {/* Legacy Section */}
         <section className="py-16 bg-neutral-900">
            <Container>
               <div className="max-w-3xl mx-auto border-2 border-dashed border-yellow-500 rounded-lg p-8">
                  <h2 className="text-3xl font-bold text-center mb-4 text-white">
                     Legacy
                  </h2>
                  <p className="text-center text-gray-300 mb-8">
                     These are ALL the past presidents of Team 2554
                  </p>
                  <div className="space-y-4">
                     {legacyPresidents.map((legacy, index) => (
                        <div key={index} className="text-center">
                           <p className="font-semibold text-white">
                              {legacy.year} Presidents:
                           </p>
                           <p className="text-gray-300">{legacy.names}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </Container>
         </section>
      </div>
   );
}
