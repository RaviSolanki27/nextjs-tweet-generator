"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push("/canvas")
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hey there! Wanna try Tweet Maker then click here
      <Link href={"/canvas"}>Try now</Link>
    </main>
  );
}
// First: 14 aug 2023, 10:21 AM
// Second 20 Aug 2023, 11:44 PM
// temporary