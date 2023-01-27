import styles from './page.module.css';
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <main className={styles.bg}>
      <div className={styles.full}>
        <Navbar/>
      </div>
    </main>
  );
}
