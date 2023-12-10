import Header from '../HeaderBackBtn/Header';
import styles from './Social.module.css';

export default function Social() {
  return (
    <>
     <Header props={{title:"social network"}} />
     <div className={styles.container}>
     <form action="" className={styles.form}>
       <div className={styles.Input}>
         <span>Facebook</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>twitter</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>linkedin</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>instagram</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>flicker</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>github</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>skype</span>
         <input type="text" className={styles.input} />
       </div>
       <div className={styles.Input}>
         <span>google</span>
         <input type="text" className={styles.input} />
       </div>
     </form>
     <button className={styles.btn}>save</button>
   </div>
    </>
  )
}
