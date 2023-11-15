"use client";
import { Result, getResultData } from "@/app/Data/Resultdata"
import { useEffect, useState } from "react"

export default function Page({ params }: { params: { id: string } }) {
  const [result, setResult] = useState<Result>();

  useEffect(()=>{
    setResult(getResultData(parseInt(params.id)));
  }, []);

  if(!result) return <main className={`flex min-h-screen bg-formBgByLevel-2 flex-col items-center p-24`}></main>;
  return <main className={`flex min-h-screen bg-formBgByLevel-2 flex-col items-center p-24`}>
    <p className='font-bold text-lg mb-5'>{result.title}</p>
    {result.descriptions.map((paragraph, index) => <p className='mb-3 px-5 w-6/12' key={index}>{paragraph}</p>)}
    <section className="px-5 mt-5 w-6/12">
      <h3 className='font-bold'>Click on a project to take a more detailled look:</h3>
      <div>@todo: put references here</div>
    </section>
    <section className="px-5 mt-5 w-6/12">
      <h3 className='font-bold'>Interested?</h3>
      <div>@todo: format contact info</div>
      <div>fetched info: {result.contact.name}, {result.contact.email}</div>
    </section>
  </main>
} 