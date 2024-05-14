import Image from 'next/image'
import React from 'react'

function SignupForm() {
    return (
        <div className=' w-full h-full bg-themed-grey 
         flex flex-col justify-center items-center'>
            <Image
                className='justify-center'
                src={"/favicon-larger.png"}
                alt="icon"
                width={100}
                height={100}
            />
        </div>
    )
}

export default SignupForm