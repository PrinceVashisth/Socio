import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.css";
import SearchHeader from "@/components/SearchHeader/SearchHeader";
import Image from "next/image";
import {
  ArrowBackIos,
  ArrowForwardIos,
  BookmarkOutlined,
  CreditCardOutlined,
  DesignServicesOutlined,
  ScaleOutlined,
  Wifi,
} from "@mui/icons-material";

export default function page() {
  const Card = ({ props }) => {
    return (
      <div className={styles.Card}>
        <div className={styles.CoverImg}>
          <Image src={props.img} fill />
        </div>
        <div className={styles.featured}>featured</div>
        <div>
          <div className={styles.content}>
            <h3>{props.hotelName}</h3>
            <BookmarkOutlined />
          </div>
          <span className={styles.address}>{props.address}</span>
        </div>

        <div className={styles.stars}>
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
          <div className={styles.star}>
            <Image src="/images/star-disable.png" fill />
          </div>
        </div>
        <div className={styles.Icons}>
          <div className={styles.Icon}>
            <DesignServicesOutlined className={styles.icon} />
            <span>{props.area} sq.</span>
          </div>
          <div className={styles.Icon}>
            <Wifi className={styles.icon} />
            <span>wifi</span>
          </div>
          <div className={styles.Icon}>
            <CreditCardOutlined className={styles.icon} />
            <span>card</span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>
            <span>$</span>
            <h1>{props.rent}</h1>
            <span id={styles.month}>/mo.</span>
          </div>
          <div className={styles.Back}>
            <ArrowForwardIos sx={{ fontSize: 20 }} />
          </div>
        </div>
      </div>
    );
  };

  return (
     <>
      <div className={styles.Hotels}>
        <SearchHeader props={{ name: "hotels", w: "100%", m: "10px 0" }} />
        <div className={styles.Cards}>
          <Card
            props={{
              img: "/images/h-1.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "200",
              rent: "320",
            }}
          />
          <Card
            props={{
              img: "/images/h-2.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "250",
              rent: "400",
            }}
          />
          <Card
            props={{
              img: "/images/h-3.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "210",
              rent: "350",
            }}
          />
          <Card
            props={{
              img: "/images/h-4.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "100",
              rent: "120",
            }}
          />
          <Card
            props={{
              img: "/images/h-5.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "500",
              rent: "850",
            }}
          />
          <Card
            props={{
              img: "/images/h-6.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "20",
              rent: "30",
            }}
          />
          <Card
            props={{
              img: "/images/h-1.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "200",
              rent: "320",
            }}
          />
          <Card
            props={{
              img: "/images/h-1.jpg",
              hotelName: "Montana Hotel",
              address: "323 Geldenfe Ave Park, Flodia City",
              area: "200",
              rent: "320",
            }}
          />
        </div>
      </div>
      <div className={styles.Maps}></div>
    </>
  );
}
