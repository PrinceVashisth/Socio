import Image from "next/image";
import styles from "./EmailNotification.module.css";
import { AttachFile, StarBorderOutlined } from "@mui/icons-material";

export default function Emailnotification() {

const Item=({props})=>{
    return(
        <div className={styles.ListItem} style={props?{backgroundColor:'#e8f1fa'}:{}}>
        <div className={styles.Left}>
           <div className={styles.CheckBox}>
           
           </div>
           <div className={styles.dot}></div>
           <div className={styles.profileImg}>
            <Image src="/images/profile.png" fill />
           </div>
           <div className={styles.profileName}>Prince Vashisth</div>
        </div>
        <div className={styles.Middle}>
           <div className={styles.Icon}> <StarBorderOutlined sx={{color:'orange'}} /> </div>
           <div className={styles.Subject}> mobile apps redesign </div>
           <div className={styles.Content}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           </div>
        </div>
        <div className={styles.Right}>
          <div className={styles.Attachment}>
            <AttachFile sx={{fontSize:20,rotate:'30deg'}} />
          </div>
          <div className={styles.time}>10:25 PM</div>
        </div>
      </div>
    )
}
    return (
    <div className={styles.container}>
      <div className={styles.List}>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
         <Item/>
         <Item props="unseen"/>
      </div>
    </div>
  );
}
