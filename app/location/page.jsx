
"use client"
import Script from 'next/script'
import React from 'react'

const Location = () => {
  return (
    <div>
        <Script src='/location.js' onLoad={()=>{
            console.log(111)
        }} />

        <h1>Get user Location</h1>
    </div>
  )
}

export default Location