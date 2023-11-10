"use client"

import Image from 'next/image'
import styles from './Message.module.css'
import { CancelOutlined, Send } from '@mui/icons-material'
import { useContext } from 'react'
import { theme } from '../../../theme/ThemeProvider'

export default function Message() {
  const {mess,chat,MessageToggle} = useContext(theme); 
  return (
    <div className={styles.container} style={mess?{right:310}:{right:-500}} >
      <div className={styles.Header}>
      <div className={styles.Img}>
      <Image src="/images/profile.png" fill />
      </div>
      <div className={styles.HeaderContent}>
        <div className={styles.name}>Prince</div>
        <div className={styles.active}>available</div>
      </div>
      <div className={styles.cancel} onClick={()=>{MessageToggle()}} >
      <CancelOutlined />
      </div>
      </div>
      <hr />
      <div className={styles.MessageBox}>
         <div className={`${styles.Message} ${styles.myself}`}>
            <div className={styles.msgcontent}>Somthing Went Wrong</div>
            <div className={`${styles.time} ${styles.mytime}`}>2 min ago</div>
         </div>
         <div className={`${styles.Message}`}>
            <div className={styles.msgcontent}>Somthing Went Wrong</div>
            <div className={styles.time}>2 min ago</div>
         </div>
         <div className={`${styles.Message} ${styles.myself}`}>
            <div className={styles.msgcontent}>Somthing Went Wrong</div>
            <div className={`${styles.time} ${styles.mytime}`}>2 min ago</div>
         </div>
         <div className={`${styles.Message}`}>
            <div className={styles.msgcontent}>Somthing Went Wrong</div>
            <div className={styles.time}>2 min ago</div>
         </div>
         <div className={`${styles.Message} ${styles.myself}`}>
            <div className={styles.msgcontent}>Somthing Went Wrong</div>
            <div className={`${styles.time} ${styles.mytime}`}>2 min ago</div>
         </div>
      </div>
      <hr />
      <div className={styles.MessageInput}>
          <div className={styles.input}>
          <input type="text" placeholder='type Your message' className={styles.msg} />
          <Send/>
          </div>
      </div>
    </div>
  )
}
