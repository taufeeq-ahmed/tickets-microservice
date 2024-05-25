"use client"

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Cookies from "universal-cookie";

export default function Home() {
  const [isLoggedin, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const cookies = new Cookies();
    setIsLoggedIn(cookies.get('session'))
  }, [])

  return (
    <main className={styles.main}>
      <h1>{isLoggedin ? ("Logged In") : ("Not Logged In")}</h1>
    </main>
  );
}
