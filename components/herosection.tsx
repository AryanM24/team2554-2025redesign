"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 bg-[#040404] md:bg-transparent">
      <div className="hidden md:block">
        <BackgroundRippleEffect rows={12} cols={27} cellSize={56} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        <Image
          src="/warhawks-logo-2-smol_orig.png"
          alt="Warhawks Logo with Text"
          width={800}
          height={400}
          className="mx-auto h-auto w-full max-w-[90vw] sm:max-w-md md:max-w-2xl"
          priority
        />
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full px-4">
          <Button
            className="bg-green-700 hover:bg-green-600 text-white hover:text-white transition-colors duration-200 w-full sm:w-auto"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-neutral-800 hover:text-white transition-colors duration-200 w-full sm:w-auto"
            asChild
          >
            <Link href="/gallery">Outreach</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
