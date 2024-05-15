"use client"
import useRequest from "@/hooks/use-request";
import { useEffect } from "react";

export default function Home() {
  const { trigger, data } = useRequest()

  useEffect(() => {
    try {
      trigger({
        url: "/api/users/current-user",
        method: "GET"
      }).then((d) => {
        console.log(d)
      })
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      PageHome
    </main>
  );
}
