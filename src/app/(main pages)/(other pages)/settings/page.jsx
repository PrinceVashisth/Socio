import { ArrowForwardIos, CreditCardOutlined, HelpOutlineOutlined, HomeMiniOutlined, LocationOnOutlined, LockOutlined, NotificationsOutlined, PasswordOutlined, Twitter } from "@mui/icons-material";
import styles from "./page.module.css";
import Link from "next/link";
import SideBar from "@/components/SideBar/SideBar";

export default function page() {
  const List = ({ props }) => {
    return (
      <Link href={props.href}>
        <div className={styles.ListItem}>
          <div
            className={styles.Icon}
            style={{
              color: "white",
              backgroundColor: props.bg,
              backgroundImage: props.gradient,
            }}
          >
            {props.icon}
          </div>
          <span className={styles.text}>{props.text}</span>
          <ArrowForwardIos sx={{ ml:'auto',fontSize:15,color:'gray' }} />
        </div>
      </Link>
    );
  };
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.Wrapper}>
        <div className={styles.ListContainer}>
        <div className={styles.Header}>settings</div>
          <div className={styles.List}>
            <div className={styles.subHeading}>general</div>
            <List
              props={{
                href: "/account-info",
                icon: <HomeMiniOutlined />,
                bg: "blue",
                gradient: "linear-gradient(135deg,#05f,#09f)",
                text: "Acount Information",
              }}
            />
            <hr style={{margin:'10px 0',border:'1px solid lightgray'}} />
            <List
              props={{
                href: "/saved-address",
                icon: <LocationOnOutlined />,
                bg: "#f2994a",
                gradient: "linear-gradient(to right,#f2994a,#f2c94c)",
                text: "Saved Address",
              }}
            />
            <hr style={{margin:'10px 0',border:'1px solid lightgray'}} />
            <List
              props={{
                href: "/social-account",
                icon: <Twitter />,
                bg: "orange",
                gradient: "linear-gradient(to right,#e44d26,#f16529)",
                text: "Social Media",
              }}
            />
          </div>
          <div className={styles.List}>
            <div className={styles.subHeading}>account</div>
            <List
              props={{
                href: "/my-cards",
                icon: <CreditCardOutlined />,
                bg: "blue",
                gradient: "linear-gradient(to right,#ee0979,#ff6a00)",
                text: "My Cards",
              }}
            />
            <hr style={{margin:'10px 0',border:'1px solid lightgray'}} />
            <List
              props={{
                href: "/password",
                icon: <PasswordOutlined />,
                bg: "blue",
                gradient: "linear-gradient(to right,#0575e6,#021b79)",
                text: "Passwords",
              }}
            />
          </div>
          <div className={styles.List}>
            <div className={styles.subHeading}>other</div>
            <List
              props={{
                href: "/Notifications",
                icon: <NotificationsOutlined />,
                bg: "blue",
                gradient: "linear-gradient(to right,#f2994a,#f2c94c)",
                text: "notification",
              }}
            />
            <hr style={{margin:'10px 0',border:'1px solid lightgray'}} />
            <List
              props={{
                href: "/help",
                icon: <HelpOutlineOutlined />,
                bg: "blue",
                gradient: "linear-gradient(135deg,#05f,#09f)",
                text: "help",
              }}
            />
            <hr style={{margin:'10px 0',border:'1px solid lightgray'}} />
            <List
              props={{
                href: "/",
                icon: <LockOutlined />,
                bg: "blue",
                gradient: "linear-gradient(to right,#e44d26,#f16529)",
                text: "logout",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
