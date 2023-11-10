import SideBar from "@/components/SideBar/SideBar";
import styles from "./stories.module.css";
import Status from "@/components/Status/Status";

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar />
      <Status />
    </div>
  );
}
