"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FlowData, FormAnswer, FormQuestion, LinkToType } from './Data/Formdata';
import { useRouter } from 'next/navigation';

export default function Home() {
  // Functionality hooks
  const router = useRouter();

  return (
    <main className={`flex min-h-screen bg-formBgByLevel-1 flex-col items-start p-12`}>
      <p className='font-bold text-lg mb-5'>Question 1: How many rams have you downloaded (select all that apply)?</p>
      <article className='mb-3 p-5 border w-full'>Just 1</article>
      <article className='mb-3 p-5 border w-full'>About 3</article>
      <article className='mb-3 p-5 border w-full'>About 3</article>
      <article className='mb-3 p-5 border w-full'>About 3</article>
    </main>
  )
}
