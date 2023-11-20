import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight:'100',
    subsets:['latin']
})

const Fontpage = () => {
  return (
    <div>
        <h1 style={{fontFamily:'Roboto',fontWeight:100}} >Font with link tag</h1>
        <h2 className={roboto.className} >This is next js roboto font</h2>
    </div>
  )
}

export default Fontpage