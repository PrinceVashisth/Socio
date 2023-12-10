import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
export default function layout({children}) {
  return (
    <div className={styles.container}>
    <SideBar/>
    <div className={styles.Wrapper}>
    <div className={styles.Container}>
    {children}
    </div>
    </div>
    </div>
  )
}
