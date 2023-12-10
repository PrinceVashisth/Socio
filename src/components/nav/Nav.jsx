import { ElectricBoltOutlined } from '@mui/icons-material'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.Navbar}>
    <div className={styles.left}>
    <ElectricBoltOutlined sx={{fontSize:50,color:'green'}}/>
    <span>Social.</span>
    </div>
    <div className={styles.right}>
    <button style={{backgroundColor:'rgb(52, 58, 64)'}}>login</button>
    <button>register</button>
    </div>
    </div>
  )
}
