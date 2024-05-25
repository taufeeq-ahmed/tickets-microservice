"use client"

import React, { FormEvent } from 'react'
import styles from "./page.module.css"

function Signup() {
    const handleSignup = (e: FormEvent) => {
        e.preventDefault()
        alert("APIII .....")
    }

    return (
        <div className={styles.signup_page}>
            <form className={styles.signup_form} onClick={handleSignup}>
                <input
                    type='email'
                    placeholder='email'
                    className={styles.input}
                />
                <input
                    type='password'
                    placeholder='password'
                    className={styles.input}
                />
                <button className={`${styles.signup_button} ${styles.input}`}>
                    SignUp
                </button>
            </form>
        </div>
    )
}

export default Signup