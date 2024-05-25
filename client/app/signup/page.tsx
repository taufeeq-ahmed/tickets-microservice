"use client"

import React, { FormEvent, useState } from 'react'
import styles from "./page.module.css"
import useRequest from '@/request/use-request'
import { useRouter } from 'next/navigation'
import Logger from '@/utils/logger'

function Signup() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const router = useRouter()
    const { trigger, errors } = useRequest()

    const handleSignup = async (e: FormEvent) => {
        e.preventDefault()
        try {
            await trigger({
                url: '/api/users/signup',
                method: "POST",
                body: {
                    email, password
                }
            })
            router.push("/")
        } catch (err) {
            Logger.failure(err as Error)
        }
    }

    return (
        <div className={styles.signup_page}>
            <form className={styles.signup_form} onSubmit={handleSignup}>
                <input
                    type='email'
                    placeholder='email'
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className={`${styles.signup_button} ${styles.input}`}>
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default Signup