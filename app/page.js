import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full">
      <Link href="/home">Click to go to home page</Link>
    </main>
  );
}
