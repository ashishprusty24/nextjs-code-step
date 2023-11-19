import Image from 'next/image'
import React from 'react'

import  Profile from '../../public/vercel.svg'

const ImagePage = () => {
  return (
    <div>
        {/* <Image
        src={Profile}
        >
        </Image>
        <img src={Profile.src} alt="" /> */}

        <Image
         src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
         width={100}
         height={100}
        >

        </Image>
    </div>
  )
}

export default ImagePage