import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <Link href="/">Go to Home page</Link>
      <div>This is about page</div>

      <Link href="/about/college">About College</Link>

      <br></br>
      <br></br>

      <Link href="/about/aboutstudent">About Student</Link>
    </>
  );
};

export default About;
