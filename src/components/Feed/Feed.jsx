import Image from "next/image";
import styles from "./feed.module.css";
import {
  CameraOutlined,
  ImageOutlined,
  ModeEditOutline,
  MoreHorizOutlined,
  TvOutlined,
} from "@mui/icons-material";
import Posts from "../Posts/Posts";

export default function Feed() {
  return (
    <div className={styles.container}>
      {/* status */}
      <div className={styles.wrapper}>
        <div className={styles.statusCards}>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
          <div className={styles.statusCard}>
            <div className={styles.statusContent}>
              <Image
                className={styles.profileImg}
                src="/next.svg"
                alt="profileimg"
                width={50}
                height={50}
              />
              <div className={styles.profileName}>John Doe</div>
            </div>
          </div>
        </div>
        {/* create post */}
        <div className={styles.createPost}>
          <div className={styles.createPostHeader}>
            <div className={styles.writeIcon}>
              <ModeEditOutline htmlColor="blue" />
            </div>
            <span className={styles.postTitle}>Create Post</span>
          </div>
          <div className={styles.createPostContent}>
            <Image
              src="/next.svg"
              width="50"
              height="50"
              className={styles.createProfileImg}
            />
            <input
              type="text"
              placeholder="Whats on your mind"
              className={styles.createPostText}
            />
          </div>
          <div className={styles.postMedia}>
            <div className={styles.sharingIcons}>
              <div className={styles.sharingIcon}>
                <TvOutlined />
                <span>Live Video</span>
              </div>
              <div className={styles.sharingIcon}>
                <ImageOutlined />
                <span>Photo/Video</span>
              </div>
              <div className={styles.sharingIcon}>
                <CameraOutlined />
                <span>Feeling/Activity</span>
              </div>
            </div>
            <div className={styles.otherShare}>
               <MoreHorizOutlined /> 
            </div>
          </div>
        </div>
        {/* post section */}
        <Posts/>
        {/* live section */}
        {/* Recommendation section */}
      </div>
    </div>
  );
}
