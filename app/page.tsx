"use client";
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [videoActive, setVideoActive] = useState(true)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        videoActive ? "hello" : "nope"
      } 
    </main>
  )
}
