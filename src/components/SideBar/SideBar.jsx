"use client"
import {
  BadgeOutlined,
  ChatBubbleOutlineOutlined,
  GroupOutlined,
  LanguageOutlined,
  PersonOutline,
  PersonalVideoOutlined,
  SettingsOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
import styles from "./sidebar.module.css";
import { useContext } from "react";
import { theme } from "../../../theme/ThemeProvider";

export default function SideBar() {
  // const Small = false;
  const {SideBar:Small} = useContext(theme);
  return (
    <div className={`${styles.container} ${!Small?styles.Container:""}`} style={Small?{maxWidth:80}:{}}  >
      <div className={styles.wrapper}>
        <div className={styles.newFeed} style={Small?{padding:'10px 0'}:{}} >
          <span className={styles.heading} style={Small?{ textAlign:'center',fontSize:'14px',marginTop:'5px' }:{}} >{Small?"Feed":"new Feed"}</span>
          <div className={styles.feedList} style={Small?{alignItems:'center'}:{}}>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}} >
              <div className={`${styles.icon} ${styles.firsticon}`}>
                <PersonalVideoOutlined htmlColor="white" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>NewsFeed</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.icon} ${styles.secondicon}`}>
                <BadgeOutlined htmlColor="white" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Badges</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.icon} ${styles.thirdicon}`}>
                <LanguageOutlined htmlColor="white" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Explore Stories</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.icon} ${styles.fourthicon}`}>
                <GroupOutlined htmlColor="white" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Popular Groups</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.icon} ${styles.fifthicon}`}>
                <PersonOutline htmlColor="white" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Author Profile</span>
            </div>
          </div>
        </div>
        <div className={styles.newFeed} style={Small?{padding:'10px 0'}:{}}>
          <span className={styles.heading} style={Small?{ textAlign:'center',fontSize:'14px',marginTop:'5px' }:{}}>{Small?"Pages":"More Pages"}</span>
          <div className={styles.feedList} style={Small?{alignItems:'center'}:{}} >
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <PersonalVideoOutlined htmlColor="#05f" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Email</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <BadgeOutlined htmlColor="#05f" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Near Hotel</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <LanguageOutlined htmlColor="#05f" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Latest Events</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <GroupOutlined htmlColor="#05f" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Live Stream</span>
            </div>
          </div>
        </div>
        <div className={styles.newFeed} style={Small?{padding:'10px 0'}:{}}>
          <span className={styles.heading} style={Small?{ textAlign:'center',fontSize:'14px',marginTop:'5px' }:{}} >Account</span>
          <div className={styles.feedList} style={Small?{alignItems:'center'}:{}} >
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <SettingsOutlined htmlColor="gray" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>settings</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <UpdateOutlined htmlColor="gray" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Analytics</span>
            </div>
            <div className={styles.feedItem} style={Small?{flexDirection:'column',justifyContent:'center'}:{}}>
              <div className={`${styles.secondaryicon}`}>
                <ChatBubbleOutlineOutlined htmlColor="gray" />
              </div>
              <span className={styles.title}  style={Small?{display:'none'}:{}}>Chat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
