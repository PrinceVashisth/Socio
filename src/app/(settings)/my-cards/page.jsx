import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/HeaderBackBtn/Header';

export default function page() {
  const Card = ({props})=>{
   return(
      <div className={styles.Card} style={props.backgroundImage?{backgroundImage:props.backgroundImage}:props.backgroundColor?{backgroundColor:props.backgroundColor}:{}}>
      <div className={styles.cardTop}>
         <div className={styles.image}>
          <Image src={props.imgLeft} fill /> 
         </div>  
         <div className={styles.chip}>
          <Image src={props.imgRight} fill /> 
         </div>  
      </div>
      <div className={styles.cardBottom}>
         <h3>{props.price}</h3>
         <p>{props.type}</p>
      </div>
   </div>
   )
  }

  return (
   <>
      <Header props={{title:"payment methods"}}/>
          <div className={styles.Container}>
               <div className={styles.SavedCards}>
                  <div className={styles.Heading}>saved cards</div>
                  <div className={styles.Cards}>
                     <Card props={{imgLeft:"/images/b-9.png",imgRight:"/images/chip.png",price:"$121.00",type:"debit card"}}/>
                     <Card props={{imgLeft:"/images/b-14.png",imgRight:"/images/chip.png",price:"$121.00",type:"debit card",backgroundImage:'linear-gradient(to right,#f2994a,#f2c94c)'}}/>
                     <Card props={{imgLeft:"/images/b-10.png",imgRight:"/images/chip.png",price:"$121.00",type:"debit card",backgroundColor:'#1e74fd'}}/>
                  </div>
                  <div className={styles.btn}>
                     add card
                  </div>
               </div>
               <div className={styles.AddCard}>
               <Card props={{imgLeft:"/images/b-17.png",imgRight:"/images/chip.png",price:"**** **** **** 2234",type:"debit card"}}/>
               <form className={styles.Details}>
                   <div className={`${styles.Input} ${styles.one}`}>
                     <span>card number</span>
                     <input type="text" className={styles.input} placeholder='1234 1234 1234 1234' />
                   </div>
                   <div className={`${styles.Input} ${styles.one}`}>
                     <span>card holder name</span>
                     <input type="text" className={styles.input} placeholder='Name' />
                   </div>
                   <div className={`${styles.Input} ${styles.two}`}>
                     <span>month</span>
                     <input type="text" className={styles.input} placeholder='03' />
                   </div>
                   <div className={`${styles.Input} ${styles.two}`}>
                     <span>year</span>
                     <input type="text" className={styles.input} placeholder='2021' />
                   </div>
                   <button type="submit">submit</button>
               </form>
               </div>
          </div>
      </>    
        )
      }