import styles from "./Status.module.css";
import Cards from "../Cards/Cards";
import { FilterAltOutlined, SearchOutlined } from "@mui/icons-material";
import SearchHeader from "../SearchHeader/SearchHeader";

export default function Status() {
  return (
    <div className={styles.container}>
      <SearchHeader props={{name:"stories"}}/> 
      <Cards />
    </div>
  );
}
