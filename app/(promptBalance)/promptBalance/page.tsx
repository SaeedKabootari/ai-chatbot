'use client'

import { useSession } from "next-auth/react";
import { useCallback } from "react";




export default function PromptBalance() {

  const {data: session, status } = useSession()

  console.log(session)
  const fetchHandler = useCallback( async () => {
    
    try {
      const res = await fetch('/api/promptBalance');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await res.json();
      console.log(json); 
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  },[])

  return (
    <>
      <button onClick={fetchHandler}>promptBalance</button>
    </>
  );
}