import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
import SearchHeader from '@/components/SearchHeader/SearchHeader'
import BedgesCard from '@/components/BedgesCard/BedgesCard'

export default function page() {
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.Wrapper}>
          <SearchHeader props = {{name:"Bedges"}}/>
          <BedgesCard/>
      </div>
    </div>
  )
}
