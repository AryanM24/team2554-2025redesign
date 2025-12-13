'use client'

import React, { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // January 10, 2026, 12:00 PM ET (Eastern Time)
    // ET is UTC-5 in January (EST), so 12:00 PM ET = 5:00 PM UTC
    const targetDate = new Date('2026-01-10T17:00:00.000Z')

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-16">
      <p className="text-gray-400 text-sm mb-4">Season Kickoff Countdown</p>
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="border border-neutral-800 bg-neutral-900 p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{timeLeft.days}</div>
          <div className="text-xs text-gray-400 uppercase">Days</div>
        </div>
        <div className="border border-neutral-800 bg-neutral-900 p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-xs text-gray-400 uppercase">Hours</div>
        </div>
        <div className="border border-neutral-800 bg-neutral-900 p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-xs text-gray-400 uppercase">Minutes</div>
        </div>
        <div className="border border-neutral-800 bg-neutral-900 p-4 text-center">
          <div className="text-3xl font-bold text-white mb-1">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-xs text-gray-400 uppercase">Seconds</div>
        </div>
      </div>
    </div>
  )
}

