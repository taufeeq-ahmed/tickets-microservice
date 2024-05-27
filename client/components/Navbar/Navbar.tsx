import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { cookies } from 'next/headers'


function Navbar() {
    let isLoggedin = false

    const cookieStore = cookies()
    const session = cookieStore.get('session')
    if (session) isLoggedin = true

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <Link href={"/"}> Ticketz.dev</Link>
            </div>
            <div className={styles.links}>
                {isLoggedin ? (
                    <Link href={"/signout"}>Signout</Link>
                ) : (
                    <>
                        <Link href={"/signup"}>Signup</Link>
                        <Link href={"/signin"}>Signin</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar