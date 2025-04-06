import { NextResponse, NextRequest } from "next/server";
import {
  createAdmin,
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "@/lib/db/queries";

export async function POST(request: Request) {
  try {
    // const body = await request.json();
    // const { email, password } = body;
    const existedUser = await createAdmin();
    return NextResponse.json({ existedUser: existedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
