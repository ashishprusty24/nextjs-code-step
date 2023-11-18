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
      <Link href="/productlist">Go to productlist</Link>
      <Link href="/productlistserver">Go to productlistserver</Link>
    </>
  );
}
