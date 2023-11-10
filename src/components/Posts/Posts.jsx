import Image from "next/image";
import styles from "./Posts.module.css";
import {
  ChatBubbleOutline,
  MoreHoriz,
  ShareOutlined,
  ThumbUpOffAltRounded,
} from "@mui/icons-material";
import React from "react";

export default function Posts() {
  const Post = ({ content }) => {
    return (
      <>
      <div className={styles.postCard}>
        <div className={styles.postHeader}>
          <Image src="/images/img.png" width={50} height={50} />
          <div className={styles.personInfo}>
            <span className={styles.name}>John Doe</span>
            <span className={styles.date}>15 min ago</span>
          </div>
          <div className={styles.options}>
            <MoreHoriz />
          </div>
        </div>
        <div className={styles.postContent}>
        <>
          {content?.length > 60
            ? content.substring(0, 60) + "read more."
            : content}
        </>
        </div>
        <div className={styles.postMedia}>
          <Image src="/images/post.jpg" fill />
        </div>
        <div className={styles.postBottom}>
          <div className={styles.like}>
            <ThumbUpOffAltRounded htmlColor="black" />
            <span>121 </span>
            <span className={styles.likes}>likes</span>
            <ChatBubbleOutline htmlColor="blue" />
            <span>21 </span>
            <span className={styles.comments}>comments</span>
          </div>
          <div className={styles.Share}>
            <ShareOutlined />
            <span className={styles.ShareText}>Share</span>
          </div>
        </div>
      </div>
      </>
    );
  };
  return (
    <>
      <div className={styles.postsCards}>
        <Post
          content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi maxime saepe illum, reprehenderit, dolor blanditiis laboriosam perspiciatis numquam, voluptates voluptate. Animi officiis quisquam ratione unde deleniti itaque facilis fugiat?`}
          />
        <Post   content={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea animi maxime saepe illum, reprehenderit, dolor blanditiis laboriosam perspiciatis numquam, voluptates voluptate. Animi officiis quisquam ratione unde deleniti itaque facilis fugiat?`}/>
        <Post />
      </div>
    </>
  );
}
