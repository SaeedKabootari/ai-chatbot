"use client";

import { useSession } from "next-auth/react";
import { useCallback } from "react";

export default function PromptBalance() {
  const { data: session, status } = useSession();

  console.log(session);
  const decrementBalanceHandler = useCallback(async () => {
    try {
      const res = await fetch("/api/promptBalance", {
        method: "POST",
        body: JSON.stringify({ email: "admin@gmail.com" }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  const increaseBalanceHandler = useCallback(async () => {
    console.log("increase");
    try {
      const res = await fetch("/api/promptBalance", {
        method: "PUT",
        body: JSON.stringify({ email: "admin@gmail.com", value: 5 }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  return (
    <>
      <button className="bg-red-300" onClick={decrementBalanceHandler}>
        decrement Balance
      </button>
      <button className="bg-blue-300 ml-2" onClick={increaseBalanceHandler}>
        increment Balance
      </button>
    </>
  );
}
