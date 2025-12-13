"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-0 mt-0">
      <BackgroundRippleEffect rows={12} cols={40} cellSize={56} />
      <div className="relative z-10 !py-0 !px-4 sm:!px-6 lg:!px-8">
        <div className="text-center">
          <Image
            src="/warhawks-logo-2-smol_orig.png"
            alt="Warhawks Logo with Text"
            width={800}
            height={400}
            className="mx-auto h-auto"
            priority
          />
          <p className="mt-4 text-xl text-gray-300 animate-fade-in">
            FRC Team 2554 - JPS Robotics
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              className="bg-green-700 hover:bg-green-600 text-white hover:text-white transition-transform duration-200 hover:scale-105"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-neutral-800 hover:text-white transition-transform duration-200 hover:scale-105"
              asChild
            >
              <Link href="/gallery">Outreach</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
