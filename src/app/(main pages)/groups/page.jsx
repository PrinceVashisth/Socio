import GroupCards from '@/components/GroupCards/GroupCards'
import SearchHeader from '@/components/SearchHeader/SearchHeader'
import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.container}>
    <SideBar/>
      <div className={styles.Wrapper}>
         <SearchHeader props={{name:"groups"}} />
         <GroupCards/> 
      </div>
    </div>
  )
}
