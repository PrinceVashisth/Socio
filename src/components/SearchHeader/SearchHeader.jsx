import { FilterAltOutlined, SearchOutlined } from '@mui/icons-material';
import styles from './searchheader.module.css';

export default function SearchHeader({props}) {
  return (
    <div className={styles.Header} style={props.w?{width:'100%',margin:'5px 0'}:{}}>
    <div className={styles.HeaderTitle}>{props.name}</div>
    <div className={styles.SearchBar}>
      <div className={styles.Search}>
        <input
          type="text"
          placeholder="Search.."
          className={styles.input}
        />
        <SearchOutlined />
      </div>
      <FilterAltOutlined fontSize="15px" className={styles.filterIcon} />
    </div>
  </div>
  )
}
