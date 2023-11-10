import SideBar from '@/components/SideBar/SideBar';
import styles from './page.module.css'; 
import Feed from '@/components/Feed/Feed';
import RightBar from '@/components/RightBar/RightBar';

export default function Home() {
  return (
   <>
   <div className={styles.container}>
     <SideBar/>
     <Feed/> 
     <RightBar/>
   </div>
   </>
  )
}
