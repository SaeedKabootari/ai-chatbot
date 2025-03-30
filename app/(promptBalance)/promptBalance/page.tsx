"use client";

import { useSession } from "next-auth/react";
import { useCallback } from "react";

export default function PromptBalance() {
  const { data: session, status } = useSession();

  console.log(session);

  const decrementBalanceHandler = useCallback(async () => {
    console.log("decrement");
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

  const getUsersHandler = useCallback(async () => {
    console.log("get users");
    try {
      const res = await fetch("/api/user");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, []);

  const deleteUserHandler = useCallback(async () => {
    console.log("delete user");
    try {
      const res = await fetch("/api/user", {
        method: "DELETE",
        body: JSON.stringify({ id: "342e396d-f153-4f95-808b-d3d3e0a8c423" }),
        headers: {
          "Content-Type": "application/json", // Add content type header
        },
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

  const editUserHandler = useCallback(async () => {
    console.log("edit user");
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        body: JSON.stringify({
          id: "32ca00e6-b960-4807-99cd-08cd63d56163",
          email: "rex@yahoo.com",
          role: "user",
          password: '12121212'
        }),
        headers: {
          "Content-Type": "application/json", // Add content type header
        },
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


  const addUserHandler = useCallback(async () => {
    console.log("add user");
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ email: "sadaf@gmail.com" ,password: '12345678' }),
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
      <button className="bg-green-300 ml-2" onClick={getUsersHandler}>
        get users
      </button>
      <button className="bg-purple-300 ml-2" onClick={deleteUserHandler}>
        delete user
      </button>
      <button className="bg-orange-300 ml-2" onClick={editUserHandler}>
        edit user
      </button>
      <button className="bg-gray-300 ml-2" onClick={addUserHandler}>
        add user
      </button>
    </>
  );
}
