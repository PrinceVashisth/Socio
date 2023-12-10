import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.css";
import { Add, SearchOutlined } from "@mui/icons-material";

export default function page() {
  return (
    <>
        <div className={styles.HeaderBg}>
          <div className={styles.Header}>
            <h2>Welcome to the Sociala Commuinity!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus
              faucibus mollis pharetra. Proin blandit ac massa sed rhoncus
            </p>
            <div className={styles.HeaderBtn}>
              <SearchOutlined
                className={styles.icon}
                style={{ color: "gray" }}
              />
              <input type="text" placeholder="Enter" className={styles.input} />
              <button>search</button>
            </div>
          </div>
        </div>
        <div className={styles.List}>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          <div className={styles.ListItem}>
            <div className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              nesciunt!
            </div>
            <Add />
          </div>
          </div>
          </>
  );
}
