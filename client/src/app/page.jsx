"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const fetching = async () => {
      const response = await axios.get("http://127.0.0.1:5000/api");
      if (response.status == 200) {
        console.log(response.data.message);
        setMessage(response.data.message);
      } else {
        setMessage("Failed to fetch message");
      }
    };
    fetching();
  });
  return (
    <>
      <div>
        <p>Hello world</p>
        <p>{message}</p>
      </div>
    </>
  );
}
