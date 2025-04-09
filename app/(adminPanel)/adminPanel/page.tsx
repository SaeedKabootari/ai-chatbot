"use server";
import UserManagement from "@/components/admin-panel/UserManagement";
import { auth } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";

export default async function AdminPanel() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  if (session?.user?.role !== "admin") {
    redirect("/");
  }
  return (
    <>
      <UserManagement session={session} />
    </>
  );
}
