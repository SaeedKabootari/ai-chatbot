import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    return NextResponse.json({ test: "first api" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
