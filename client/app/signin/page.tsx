"use client"

import React, { FormEvent } from 'react'
import styles from "./page.module.css"

function Signin() {
    const handleSignin = (e: FormEvent) => {
        e.preventDefault()
        alert("APIII .....")
    }

    return (
        <div className={styles.signin_page}>
            <form className={styles.signin_form} onClick={handleSignin}>
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
                <button className={`${styles.signin_button} ${styles.input}`}>
                    Signin
                </button>
            </form>
        </div>
    )
}

export default Signin