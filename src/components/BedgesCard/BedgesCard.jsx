import Image from "next/image";
import styles from "./BedgesCard.module.css";

export default function BedgesCard() {
  const Card = () => {
    return (
      <div className={styles.BedgesCard}>
        <div className={styles.ProfileImg}>
          <Image src="/images/profile.png" fill />
        </div>
        <div className={styles.Cradentials}>
          <div className={styles.name}>Aliqa Macale</div>
          <div className={styles.email}>support@gmail.com</div>
        </div>
        <div className={styles.Counts}>
          <div className={styles.CountItem}>
            <div className={styles.Numbers}>500+</div>
            <div className={styles.itemTitle}>Connections</div>
          </div>
          <div className={styles.CountItem}>
            <div className={styles.Numbers}>88.7 k</div>
            <div className={styles.itemTitle}>Follower</div>
          </div>
          <div className={styles.CountItem}>
            <div className={styles.Numbers}>1,334</div>
            <div className={styles.itemTitle}>Followings</div>
          </div>
        </div>
        <div className={styles.Bedges}>
           <div className={styles.Bedge}>
              <Image src='/images/img.png' fill/>
           </div>
           <div className={styles.Bedge}>
              <Image src='/images/img.png' fill/>
           </div>
           <div className={styles.Bedge}>
              <Image src='/images/img.png' fill/>
           </div>
           <div className={styles.Bedge}>
              <Image src='/images/img.png' fill/>
           </div>
        </div>
        <div className={styles.Btn}>follow</div>
      </div>
    );
  };
  return (
    <div className={styles.BedgesCards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
