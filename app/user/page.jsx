import React from 'react'
import getUsers from '@/services/getUser'
import Link from 'next/link'
const UserList = async() => {
   const userList = getUsers()
//    console.log(userList);
   const users = await userList

   console.log(users.users);
  
  return (
    <div>
        <h1>UserList</h1>
        {users.map((user)=>(
            <h2 key={user.id} >
                <Link href={`/user/${user.id}`}> {user.name} </Link>
            </h2>
        ))}
    </div>
  )
}

export default UserList