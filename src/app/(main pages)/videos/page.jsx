import SideBar from "@/components/SideBar/SideBar";
import styles from "./videos.module.css";
import Stories from "@/components/Stories/Stories";
import Videos from "@/components/Videos/Videos";

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.RightBar}>
        <Stories />
        <Videos />
      </div>
    </div>
  );
}
