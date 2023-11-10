import Image from "next/image";
import styles from "./Shop.module.css";

export default function Shop() {
  const Card = () => {
    return (
      <div className={styles.Card}>
        <div className={styles.ProductWrapper}>
          <div className={styles.ProductImage}>
            <Image src="/images/nature.jpg" fill />
          </div>
        </div>
        <div className={styles.ProductRating}>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
          <div className={styles.star}>
            <Image src="/images/star.png" fill />
          </div>
        </div>
        <div className={styles.ProductName}>Textured Sleeveless Camisole</div>
        <div className={styles.ProductPrice}>$449</div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
