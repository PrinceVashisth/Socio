import {
  DeleteOutlineRounded,
  HardwareOutlined,
  LinkedCameraOutlined,
  Message,
  WarningAmberOutlined,
} from "@mui/icons-material";
import styles from "./NotificationBox.module.css";
import Image from "next/image";

export default function NotificationBox() {
  const Item=()=>{
    return(
      <div className={styles.NotificationListItem}>
      <div className={styles.Left}>
        <Image src='/images/profile.png' fill/>
        <div className={styles.ProfileIcon}>
        <LinkedCameraOutlined sx={{fontSize:15}} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
       <b> Victor Exrixon </b> posted in <b>UI/UX Community</b> : “Mobile Apps UI Designer is required for Tech…” 
        </div>
        <span className={styles.time}>2 min ago</span>
      </div>
      <Message sx={{ml:'auto'}}/>
  </div>
    )
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.leftSide}>
          <div className={styles.Heading}>Notification</div>
          <div className={styles.NotificationCount}>23</div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.Icon}>
            <HardwareOutlined sx={{fontSize:{xs:15,md:20}}} />
          </div>
          <div className={styles.Icon}>
            <WarningAmberOutlined sx={{fontSize:{xs:15,md:20}}} />
          </div>
          <div className={styles.Icon}>
            <DeleteOutlineRounded sx={{fontSize:{xs:15,md:20}}} />
          </div>
        </div>
      </div>
      <div className={styles.NotificationList}>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
      </div>
    </div>
  );
}
