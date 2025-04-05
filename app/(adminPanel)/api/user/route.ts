import { NextResponse, NextRequest } from "next/server";
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "@/lib/db/queries";

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
    console.log("rrrrrrrrrrrrrrrrrrr", request);
    const users = await getUsers();
    // return NextResponse.json({ users: users }, { status: 200 });
    return NextResponse.json(users, { status: 200 }); // Return the users array directly
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const deletedUser = await deleteUser(body.id);
    console.log('sssssssssssssssssssssssssssssssssss' ,body)
    return NextResponse.json({ deletedUser: deletedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, role, email, password } = body;
    const editedUser = await editUser(id, role, email, password);

    return NextResponse.json({ editedUser: editedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    const existedUser = await getUser(email);
    if (existedUser.length === 0) {
      const registeredUser = await createUser(email, password);
      return NextResponse.json(
        { registeredUser: registeredUser },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { registeredUser: "The user already exists!" },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
