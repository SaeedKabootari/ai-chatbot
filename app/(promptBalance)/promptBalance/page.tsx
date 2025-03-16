'use client'
export default async function PromptBalance() {
  const fetchHandler = async () => {
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
  };

  return (
    <>
      <button onClick={fetchHandler}>promptBalance</button>
    </>
  );
}