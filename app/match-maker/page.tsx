"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FlowData, FormAnswer, FormQuestion, LinkToType } from '../Data/Formdata';
import { useRouter } from 'next/navigation';

export default function Home() {
  // Functionality hooks
  const router = useRouter();

  // State management
  const [levelId, setLevelId] = useState<number>(1);
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState<FormQuestion>();
  const [questionHistory, setQuestionHistory] = useState<Array<{
    question: number;
    level: number;
  }>>([{
    question: 1,
    level: 1
  }]);

  const colorMap = ["bg-formBgByLevel-1",
  "bg-formBgByLevel-2",
  "bg-formBgByLevel-3",
  "bg-formBgByLevel-4",
  "bg-formBgByLevel-5",
  "bg-formBgByLevel-6",
  "bg-formBgByLevel-7",
  "bg-formBgByLevel-8"]

  const updateLevel = (answer : FormAnswer, index: number) => {
    if(answer.linksTo.type === LinkToType.result){
      router.push("./match-maker/results/" + answer.linksTo.resultIndex)
      return;
    }
    setLevelId(answer.linksTo.levelId!);
    setQuestionId(answer.linksTo.questionId!);
    setQuestionHistory([...questionHistory, {
      question: answer.linksTo.questionId!,
      level: answer.linksTo.levelId!
    }])
  }

  useEffect(() => {
    const question = FlowData.find(level => level.levelId === levelId)?.questions.find(question => question.id === questionId)
    setQuestion(question)
  }, [levelId, questionId])

  if(!question) return<main className="flex min-h-screen bg-formBgByLevel-1 flex-col items-center justify-between p-24"></main>
  return (
    <main className={`flex min-h-screen ${colorMap[levelId - 1]} flex-col items-center p-24`}>
      <p className='font-bold text-lg mb-5'>{question.question}</p>
      {question.answers.map((answer, index) => <button className='mb-3 p-5 border w-6/12' key={index} onClick={()=>{
        updateLevel(answer, index)
      }}>{answer.text}</button>)}
    </main>
  )
}
