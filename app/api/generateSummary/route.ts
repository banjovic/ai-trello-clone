import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // todos in the body of the POST request
    const { todos } = await request.json()
    console.log('object', todos)

    // communicate with openAI GPT
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        // max_tokens: 1024,
        n: 1,
        stream: false,
        messages: [
            {
                role: 'system',
                content: `When responding, welcome the user always as Vee and say welcome to Vee's Todo App! Limit the response to 200 characters`,
            },
            {
                role: 'user',
                content: `Hi there, kindly provide a summary of the following todos. Count how many todos are in each category such as To do, In progress, and Done, then tell the user to have an amazing and a productive day! Here's the data: ${JSON.stringify(todos)}`,
            },
        ],
    });

    const { data }: any = response

    console.log('Data is', data)
    console.log('message', data.choices[0].message)

    return NextResponse.json(data.choices[0].message)
}