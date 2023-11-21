import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';

export async function POST(req: Request) {
  const {prompt} = (await req.json()) as {prompt: string};

  if(!prompt) return new Response("Missing prompt", {status: 400});

  const openai = new OpenAI({
    apiKey: `${process.env.OPENAI_API_KEY}`
  });

  const openaires = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{"role": "user", "content": prompt}],
    max_tokens: 1000,
    stream: true
  });

  const stream = OpenAIStream(openaires);
  return new StreamingTextResponse(stream)
}