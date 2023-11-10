import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
import Shop from '@/components/Shop/Shop'

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.Wrapper}>
        <Shop/>
      </div>
    </div>
  )
}
