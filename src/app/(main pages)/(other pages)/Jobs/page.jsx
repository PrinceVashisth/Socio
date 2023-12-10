import SideBar from "@/components/SideBar/SideBar";
import styles from "./page.module.css";
import SearchHeader from "@/components/SearchHeader/SearchHeader";
import Image from "next/image";
import { ArrowBackIosOutlined, BookmarkBorderOutlined } from "@mui/icons-material";

export default function page() {
   const Card = ()=>{
    return(
        <div className={styles.Card}>
        <div className={styles.Img}>
        <div className={styles.image}>
        <Image src="/images/download7.png" fill />
        </div>
        </div>
         <div className={styles.content}>
         <div className={styles.contentHead}>
           <h3>Python Developer</h3>
           <p>(3 days ago)</p>
         </div>
         <div className={styles.Catagory}>
         <div className={styles.CatItem}>
              <h5>Location :</h5>
              <span> London, United Kingdom</span>
         </div>              
         <div className={styles.CatItem}>
              <h5>Employment :</h5>
              <span>Part Time</span>
         </div>              
         <div className={styles.CatItem}>
              <h5>Salary :</h5>
              <span>20,000</span>
         </div>              
         </div>
         <div className={styles.btns}>
         <div className={styles.btn}>ux design</div>
         <div className={styles.btn}>andriod</div>
         <div className={styles.btn}>developer</div>
         </div>                 
         </div>
           <div className={styles.CardIcons}>
            <div className={styles.CardIcon}>
               <BookmarkBorderOutlined/>
            </div>
            <div className={styles.CardIcon}>
               <ArrowBackIosOutlined/>
            </div>
           </div>
        </div>
    )
   } 
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.Wrapper}>
        <div className={styles.Jobs}>
             <SearchHeader props={{name:'jobs',w:true}} />
             <div className={styles.Cards}>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
             </div>
        </div>
        <div className={styles.Maps}>maps</div>
      </div>
    </div>
  );
}
