import SideBar from '@/components/SideBar/SideBar'
import styles from './page.module.css'
import Image from 'next/image'
import { LocationOnOutlined } from '@mui/icons-material'

export default function page() {
    const Card=()=>{
        return(
            <div className={styles.Card}>
            <div className={styles.Image}><Image src="/images/h-1.jpg" fill/></div>
            <div className={styles.info}>
            <div className={styles.Dates}>
            <span>feb</span> 
            <h1>22</h1>
            </div>
            <div className={styles.location}>
               <h3>Right here Right Now - Comedy</h3>
               <div className={styles.loc}><LocationOnOutlined/> Goa,mumbai</div>
            </div>
            </div>
            <div className={styles.Footer}>
            <div className={styles.Members}>
            <div className={styles.members}>
            <div className={styles.member}><Image src="/images/profile.png" fill /></div>
            <div className={styles.member}><Image src="/images/profile.png" fill /></div>
            <div className={styles.member}><Image src="/images/profile.png" fill /></div>
            <div className={styles.member}><Image src="/images/profile.png" fill /></div>
            </div>
            <span>5 more members</span>
            </div>
            <div className={styles.apply}>apply</div>
            
            </div>
            </div>
        )
    }
  return (
    <div className={styles.container}>
      <SideBar/>
      <div className={styles.Wrapper}>
          <div className={styles.Maps}></div>
            <div className={styles.Cards}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
      </div>
    </div>
  )
}
