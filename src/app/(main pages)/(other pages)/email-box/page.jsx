import EmailSidebar from '@/components/EmailSideBar/EmailSidebar';
import styles from './page.module.css';
import Emailnotification from '@/components/EmailNotification/Emailnotification';

export default function page() {
  return (
    <div className={styles.Container}>
       <EmailSidebar/>
       <Emailnotification/>
    </div>
  )
}
