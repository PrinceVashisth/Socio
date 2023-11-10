import { NavigateNext } from "@mui/icons-material";
import styles from "./stories.module.css";
import Image from "next/image";

export default function Stories() {

const LI = ()=>{
  return (
    <li className={styles.StatusListItem}>
    <div className={styles.profile}>
      <Image
        src="/images/nature.jpg"
        style={{ borderRadius: "50%" }}
        fill
      />
      <div className={styles.ActiveDot}></div>
    </div>
    <div className={styles.name}>Prince</div>
  </li>
  )
}

  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <div className={styles.heading}>Featured stories</div>
        <div className={styles.Btn}>
          <span className={styles.text}>See More..</span>
          <NavigateNext />
        </div>
      </div>

      <ul className={styles.StatusList}>
        <div className={styles.addStatus}>
           <div className={styles.AddBtn}>+</div>
           <div className={styles.MyStory}>my story</div>
        </div>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
        <LI/>
      </ul>
    </div>
  );
}
