import { NextResponse, NextRequest } from "next/server";
import { getUsers } from "@/lib/db/queries";

// import { NextResponse, NextRequest } from "next/server";
// import {
//   decrementPromptBalance,
//   increasePromptBalance,
// } from "@/lib/db/queries";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     console.log(body.email);

//     const newPromptBalance = await decrementPromptBalance(body.email);

//     return NextResponse.json({ newPrompt: newPromptBalance }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

export async function GET(request: Request) {
  try {
    // const body = await request.json();
    // console.log(body);
console.log('rrrrrrrrrrrrrrrrrrr', request)
    const users = await getUsers();
    return NextResponse.json({ users: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
