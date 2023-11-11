"use client"
import Image from "next/image";
import styles from "./notification.module.css";
import { useContext } from "react";
import { theme } from "../../../theme/ThemeProvider";

export default function Notification() {
   const Card = ()=>{
    return(
        <div className={styles.Card}>
        <div className={styles.img}>
          <Image src="/images/post.jpg" fill />
        </div>
        <div className={styles.Content}>
          <div className={styles.Header}>
           <span className={styles.DisplayName}>Prince sharma</span>
           <span className={styles.time}>3 min ago</span>
          </div>
          <div className={styles.content}>
           There are many variations of pass ..
          </div>
        </div>
      </div>
    )
   }

   const {notification} = useContext(theme);
  return (
    <div className={styles.notification} style={notification?{display:'none'}:{display:'block'}}>
      <div className={styles.header}>notification</div>
      <div className={styles.Cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}
