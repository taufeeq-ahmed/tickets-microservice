import React from 'react'
import Image from "next/image"

const Banner = () => {
    return (
        <Image
            className='w-full h-full'
            src={"/signup_banner.png"}
            alt='signup_banner'
            width={1000}
            height={1000}
        />
    )
}

export default Banner