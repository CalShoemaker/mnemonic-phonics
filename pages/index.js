import HelloWorld from '../components/HelloWorld'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HelloWorld />
      </main>
    </div>
  )
}
