import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            <li>
                <Link href={"/studentlist/1"} >Anil</Link>
            </li>
            <li>
            <Link href={"/studentlist/2"} >bhskar</Link>
            </li>
            <li>
            <Link href={"/studentlist/3"} >reshah</Link>
            </li>
            <li>
            <Link href={"/studentlist/4"} >rinku</Link>
            </li>
            <li>
            <Link href={"/studentlist/5"} >basu</Link>
            </li>
        </ul>
    </div>
  )
}

export default StudentList