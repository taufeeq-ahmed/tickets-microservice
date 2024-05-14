"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useRequest from '@/hooks/use-request'
import React, { FormEvent } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    email: string
    password: string
}

function SignUp() {
    const {
        register,
        handleSubmit,
        formState
    } = useForm<Inputs>()

    const { trigger, errors } = useRequest()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { email, password } = data
        await trigger({
            url: '/api/users/signup',
            method: "POST",
            body: {
                email, password
            }
        })
    }

    return (
        <form
            className='w-1/3 m-auto mt-12 flex flex-col gap-4'
            onSubmit={handleSubmit(onSubmit)}
        >
            <p className='font-bold text-2xl mb-4 m-auto'>SignUp</p>
            <Input
                type='email'
                placeholder='Email'
                {...register("email", { required: true })}
            />
            {formState.errors.email && <span>❌ email is required</span>}
            <Input
                type='password'
                placeholder='Password'
                {...register("password", { required: true })}
            />
            {formState.errors.password && <span>❌ password is required</span>}
            <ul>
                {errors?.map(err => {
                    return <li key={err.message}>{"❌ "}{err.message}</li>
                })}
            </ul>
            <Button
                className='w-full'
                type='submit'
            >
                Sign-Up
            </Button>
        </form>
    )
}

export default SignUp