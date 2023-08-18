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
      Hello World
      <Link href={"/canvas"}>Try now</Link>
    </main>
  );
}
// First: 14 aug 2023, 10:21 AM
