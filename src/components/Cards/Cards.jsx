import styles from "./Cards.module.css";
import Image from "next/image";
export default function Cards() {

   const Card = ()=>{
    return(
        <div className={styles.card}>
        <div className={styles.CardBg}>
          <Image src="/images/post.jpg" fill style={{borderRadius:10}} />
        </div>
        <div className={styles.profile}>
          <div className={styles.profileImg}>
            <Image src="/images/img.png" fill />
          </div>
          <div className={styles.name}>Prince Vashisth</div>
        </div>
      </div>
    )
   } 

  return (
    <div className={styles.cards}>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
    </div>
  );
}
