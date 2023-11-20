import React from 'react'

const Metapage = () => {
  return (
    <div>
        <h1>user Metapage</h1>
    </div>
  )
}

export default Metapage

export function generateMetadata({params}){
    return {
        title:"user page title",
        description: "user page description"
    }
}