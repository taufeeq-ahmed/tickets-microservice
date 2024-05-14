
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

function SignUp() {
    const errors: any[] = [
        { msg: "Password is wrong" },
        { msg: "email is invalid" }
    ]

    return (
        <form className='w-1/3 m-auto mt-12 flex flex-col gap-4'>
            <p className='font-bold text-2xl mb-4 m-auto'>SignUp</p>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Button className='w-full'>
                Sign-Up
            </Button>
            <ul>
                {errors?.map(err => {
                    return <li key={err.msg}>{"❌ "}{err.msg}</li>
                })}
            </ul>
        </form>
    )
}

export default SignUp