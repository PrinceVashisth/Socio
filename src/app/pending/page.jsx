import Image from 'next/image'
import styles from './page.module.css'
import { MessageSharp } from '@mui/icons-material'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.pendingImg}>
           <Image src='/images/coming-soon.png' fill />
      </div>
      <div className={styles.RightSide}>
           <div className={styles.timer}>
               <div className={styles.Box}>
                  <div className={styles.time}>00</div>
                  <span>Day</span>
               </div>
               <div className={styles.Box}>
                  <div className={styles.time}>00</div>
                  <span>Hrs</span>
               </div>
               <div className={styles.Box}>
                  <div className={styles.time}>00</div>
                  <span>Min</span>
               </div>
               <div className={styles.Box}>
                  <div className={styles.time}>00</div>
                  <span>Sec</span>
               </div>
           </div>
           <div className={styles.content}>We're under <span style={{color:'blue'}}> construction. </span> Check back for an update soon.</div>
           <div className={styles.Notify}>
             <MessageSharp className={styles.icon}/>
             <input type='email' placeholder='Enter Mail' className={styles.Input}/>
             <button className={styles.btn}>Notify</button>
           </div>
      </div>
    </div>
  )
}
