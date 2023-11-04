"use client";
import Link from "next/link";
import React from "react";
import "./login.css";
import { usePathname } from "next/navigation";
const Layout = ({ children }) => {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <div>
      <h1>Common component</h1>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-menu">
          <li>
            <h4>Login navbar</h4>
          </li>
          <li>
            <Link href={"/login"}>Main login</Link>
          </li>
          <li>
            <Link href={"/login/loginstudent"}>Student login</Link>
          </li>
          <li>
            <Link href={"/login/loginteacher"}>Teacher login</Link>
          </li>
        </ul>
      ) : <Link href={"/login"} >Go to main page</Link>}

      {children}
    </div>
  );
};

export default Layout;
