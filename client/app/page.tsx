import styles from "./page.module.css";
import { cookies } from 'next/headers'

export default function Home() {
  let isLoggedin = false

  const cookieStore = cookies()
  const session = cookieStore.get('session')
  if (session) isLoggedin = true

  return (
    <main className={styles.main}>
      <h1>{isLoggedin ? ("Logged In") : ("Not Logged In")}</h1>
    </main>
  );
}
