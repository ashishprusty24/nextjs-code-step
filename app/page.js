"use client";
import Link from "next/link";
//  on button click naviagte always use next/navigation
import { useRouter } from "next/navigation";

// two way of navigate - 1- link 2 - useRouter

export default function Home() {
  const router = useRouter();

  const naviagte = (name) => {
    router.push(name);
  };
  return (
    <>
      <Link href="/login">Go to login page</Link>
      <br></br>
      <br></br>
      <Link href="/about">Go to about page</Link>
      <br></br>
      <br></br>
      {/* one way of use Router */}
      <button onClick={() => router.push("/about")}>About</button>
      <br></br>
      <br></br>
      {/* another way of use router */}
      <button onClick={() => naviagte("/about")}>About</button>
      <br></br>
      <br></br>
      <button onClick={() => naviagte("/login")}>Login</button>
    </>
  );
}
