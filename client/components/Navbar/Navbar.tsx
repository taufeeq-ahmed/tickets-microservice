"use client"

import React, { useEffect, useState } from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Cookies from 'universal-cookie';

function Navbar() {
    const [isLoggedin, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const cookies = new Cookies();
        setIsLoggedIn(cookies.get('session'))
    }, [])

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