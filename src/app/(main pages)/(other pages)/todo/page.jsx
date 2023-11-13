import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
import Todo from '@/components/Todo/Todo'

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.Wrapper}>
      <Todo/>
      </div>
    </div>
  )
}
