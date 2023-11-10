import Image from "next/image";
import styles from "./GroupCards.module.css";
import { VideoCameraBack } from "@mui/icons-material";

export default function GroupCards() {
  const Card = () => {
    return (
      <div className={styles.Card}>
        <div className={styles.groupProfile}>
          <Image src="/images/nature.jpg" fill style={{borderRadius:'10px 10px 0px 0px'}} />
        </div>

        <div className={styles.GroupInfo}>
          <div className={styles.profileImg}>
          <Image src="/images/nature.jpg" fill />
          </div>
          <div className={styles.Content}>
             <div className={styles.GroupContent}>
               <span className={styles.name}>Prince vashisth</span>
               <span className={styles.email}>somthing@gmail.com</span>
             </div>
             <div className={styles.btns}>
               <div className={styles.Icon}>
                 <VideoCameraBack sx={{fontSize:{xs:'20px',sm:'30px'}}} />
               </div>
               <div className={styles.follow}>follow</div>
             </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.Cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
