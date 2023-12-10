import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.Image}>
        <Image src="/images/Page Not Found.png" fill />
      </div>
      <div className={styles.content}>Oops! It looks like you're lost.</div>
      <div className={styles.SubContent}>
        The page you're looking for isn't available. Try to search again or use
        the go to.
      </div>
      <Link href='/'>
        <button className={styles.Back}>Home page</button>
      </Link>
    </div>
  );
}
