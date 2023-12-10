import Header from '@/components/HeaderBackBtn/Header';
import styles from './page.module.css';

export default function page() {
  return (
    <div style={{backgroundColor:'white'}}>
    <Header props={{ title: "contact information" }} />
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <div className={styles.Input}>
          <span>country</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.Input}>
          <span>city</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.Input}>
          <span>address</span>
          <input type="text" className={styles.input} />
        </div>
        <div className={styles.Input}>
          <span>pincode</span>
          <input type="text" className={styles.input} />
        </div>
      </form>
      <div className={styles.map}></div>
      <button className={styles.btn}>save</button>
    </div>
    </div>
  )
}
