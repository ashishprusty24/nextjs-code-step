"use client"
import React from 'react'

const Lecture = ({params}) => {
    
    console.log(params);
    
  return (
    <div>
          <h1>Day of college-{params.lecture[0]}</h1>
        <h1>lecture-{params.lecture[1]}</h1>
    </div>
  )
}

export default Lecture