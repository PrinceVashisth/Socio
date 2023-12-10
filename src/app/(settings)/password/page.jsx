import styles from "./page.module.css";
import Header from "@/components/HeaderBackBtn/Header";

export default function page() {
  return (
    <div style={{backgroundColor:'white'}}>
        <Header props={{title:"Password"}}/>
        <div className={styles.BoxContainer}>
            <form action="" className={styles.form}>
               <div className={styles.Input}>
                <span>Current Password</span>
               <input type="text" className={styles.input} />
               </div>
               <div className={styles.Input}>
                <span>Change Password</span>
               <input type="text" className={styles.input} />
               </div>
               <div className={styles.Input}>
                <span>Confirm Change Password</span>
               <input type="text" className={styles.input} />
               </div>
               <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}
