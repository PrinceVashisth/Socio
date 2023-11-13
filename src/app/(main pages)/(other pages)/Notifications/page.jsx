import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
import NotificationBox from '@/components/NotificationBox/NotificationBox'

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.Wrapper}>
         <NotificationBox/> 
      </div>
    </div>
  )
}
