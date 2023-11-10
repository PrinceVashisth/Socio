"use client";
// background-color: #d2e3ff;
// border-color: #bcd5fe;
import Image from "next/image";
import styles from "./navbar.module.css";
import {
  ElectricBolt,
  Groups,
  Storefront,
  NotificationsNoneOutlined,
  CommentOutlined,
  SettingsOutlined,
  HomeOutlined,
  VideocamOutlined,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { theme } from "../../../theme/ThemeProvider";
import Link from "next/link";
import Settings from "../settings/Settings";
import Notification from "../notification/Notification";

export default function Navbar() {
  const [focus, setFocus] = useState({ name: "Home" });
  const { toggle, ChatToggle,SideToggle } = useContext(theme);
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <ElectricBolt htmlColor="#10d876" sx={{ fontSize:{xs:"30px",sm:"50px"} }} />
        <span className={styles.heading}> BeSocial </span>
      </div>
      <div className={styles.pages}>
        <div className={styles.inputs}>
          <input type="text" placeholder="Search.." className={styles.input} />
        </div>
        <div className={styles.links}>
          <div
            className={styles.link}
            onClick={() => {
              setFocus({ name: "Home" });
            }}
            style={focus.name === "Home" ? { backgroundColor: "#d2e3ff" } : {}}
          >
            <Link href="/">
              <HomeOutlined
                sx={
                  focus.name === "Home"
                    ? { color: "blue", fontSize: {xs:"20px",sm:"30px"} }
                    : { color: "blue", fontSize: {xs:"15px",sm:"30px"}, color: "gray" }
                }
              />
            </Link>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setFocus({ name: "Shorts" });
            }}
            style={
              focus.name === "Shorts" ? { backgroundColor: "#d2e3ff" } : {}
            }
          >
            <Link href="/videos">
              
              <ElectricBolt
                sx={
                  focus.name === "Shorts"
                    ? { color: "blue", fontSize: {xs:"20px",sm:"30px"} }
                    : { color: "blue", fontSize: {xs:"15px",sm:"30px"}, color: "gray" }
                }
              />
            </Link>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setFocus({ name: "Video" });
            }}
            style={focus.name === "Video" ? { backgroundColor: "#d2e3ff" } : {}}
          >
            <Link href="/stories">
              
              <VideocamOutlined
              sx={
                focus.name === "Video"
                  ? { color: "blue", fontSize: {xs:"20px",sm:"30px"} }
                  : { color: "blue", fontSize: {xs:"15px",sm:"30px"}, color: "gray" }
              }
              />
            </Link>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setFocus({ name: "Groups" });
            }}
            style={
              focus.name === "Groups" ? { backgroundColor: "#d2e3ff" } : {}
            }
          >
            <Link href="/groups">
              
              <Groups
                sx={
                  focus.name === "Groups"
                    ? { color: "blue", fontSize: {xs:"20px",sm:"30px"} }
                    : { color: "blue", fontSize: {xs:"15px",sm:"30px"}, color: "gray" }
                }
              />
            </Link>
          </div>
          <div
            className={styles.link}
            onClick={() => {
              setFocus({ name: "Store" });
            }}
            style={focus.name === "Store" ? { backgroundColor: "#d2e3ff" } : {}}
          >
            <Link href="/store">
              
              <Storefront
                sx={
                  focus.name === "Store"
                    ? { color: "blue", fontSize: {xs:"20px",sm:"30px"} }
                    : { color: "blue", fontSize: {xs:"15px",sm:"30px"}, color: "gray" }
                }
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.HambergerMenu} onClick={()=>{SideToggle()}}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
   </div>
      <div className={styles.otherlinks}>
        <div className={styles.otherLink}>
          <NotificationsNoneOutlined sx={{ color: "#05f",fontSize:{xs:"25px",sm:"30px"}  }} />
          <span className={styles.dot}></span>
        </div>
        <div
          className={styles.otherLink}
          onClick={() => {
            ChatToggle();
          }}
        >
          
          <CommentOutlined sx={{  color: "#05f", fontSize:{xs:"25px",sm:"30px"} }} />
        </div>
        <div className={styles.otherLink}>
          
          <SettingsOutlined
            sx={{  color: "#05f",fontSize:{xs:"25px",sm:"30px"}  }}
            className={styles.setting}
          />
        </div>
        <div
          className={styles.otherLink}
          onClick={() => {
            toggle();
          }}
        >
          <Image
            src="next.svg"
            alt="profile"
            width={30}
            height={30}
            className={styles.profileImg}
          />
        </div>
      </div>
     <Settings/>
     <Notification/>
    </div>
  );
}
