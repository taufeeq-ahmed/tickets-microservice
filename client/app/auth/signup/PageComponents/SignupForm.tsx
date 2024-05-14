// import { Button } from '@/components/ui/button'
// import { Input } from "@/components/ui/input"

import Image from 'next/image'
import React from 'react'

function SignupForm() {
    return (
        <div className=' w-full h-full bg-themedGrey 
         flex flex-col justify-center items-center'>
            <Image
                className='justify-center'
                src={"/favicon-larger.png"}
                alt="icon"
                width={100}
                height={100}
            />
            <form className='w-full p-20 py-2 flex flex-col gap-4'>
                {/* <Input
                    type='email'
                    placeholder='Email'
                />
                <Input
                    type='password'
                    placeholder='Password'
                /> */}
            </form>
        </div>
    )
}

export default SignupForm