"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter()

  const navigate = (name)=>{
    router.push(name)
  }
  return (
    <div>
      This is Login page

     <Link href="/">Go to the home page</Link>
      <br></br>
      <br></br>
      <Link href="/login/loginstudent">Go to the Login Student page</Link>
      <br></br>
      <br></br>
      <Link href="/login/loginteacher">Go to the Login teacher page</Link>
      <br></br>
      <br></br>
      <button onClick={()=>router.push("/login/loginstudent")} >Go to the login student</button>
      <br></br>
      <br></br>
      <button onClick={()=>navigate("/login/loginteacher")} >Go to the login teacher</button>
    </div>
  );
};

export default Login;
