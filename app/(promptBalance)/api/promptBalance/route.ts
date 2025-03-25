import { NextResponse, NextRequest } from "next/server";
import {
  decrementPromptBalance,
  increasePromptBalance,
} from "@/lib/db/queries";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ test: "first api" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body.email);

    const newPromptBalance = await decrementPromptBalance(body.email);

    return NextResponse.json({ newPrompt: newPromptBalance }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    console.log(body.email, body.value);

    const newPromptBalance = await increasePromptBalance(
      body.email,
      body.value
    );
    return NextResponse.json({ newPrompt: newPromptBalance }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
