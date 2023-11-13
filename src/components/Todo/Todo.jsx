"use client"
import Image from "next/image";
import styles from "./todo.module.css";

export default function Todo() {
  const Header = ({title}) => {
    return (
      <div className={styles.Header}>
        <span className={styles.title}>{title}</span>
        <div className={styles.addIcon}>+</div>
      </div>
    );
  };

  const CardTitle = ({title})=>{
    return(
        <div className={styles.Cardtitle}>{title}</div>
    )
  }

  const CardContent = ({content})=>{
    return(
    <div className={styles.CardContent}>
        {content}
    </div>
    )
  }

  const CardButtons = ()=>{
    return(
    <div className={styles.CardBtns}>
        <div className={`${styles.CardBtn} ${styles.first}`}>30 min</div>
        <div className={`${styles.CardBtn} ${styles.second}`}>design</div>
    </div>
    )
  }

  const CardFooter = ()=>{
    return(
        <div className={styles.CardFooter}>
          <div className={styles.imgs}>
            <div className={styles.img}>
              <Image src="/images/post.jpg" fill style={{ left: 0 }} />
            </div>
            <div className={styles.img}>
              <Image src="/images/post.jpg" fill style={{ left: -10 }} />
            </div>
            <div className={styles.img}>
              <Image src="/images/post.jpg" fill style={{ left: -20 }} />
            </div>
            <div className={styles.img}>
              <Image src="/images/post.jpg" fill style={{ left: -30 }} />
            </div>
            <div className={styles.img}>
              <div className={styles.imgAdd} style={{ left: -40 }}>
                +2
              </div>
            </div>
          </div>
          <div className={styles.text}>Members</div>
        </div>
    )
  }

  const FirstCard = ({props}) => {
    return (
      <div className={styles.CardFirst}>
        <CardTitle title={props.title} />
        <CardContent content={props.content} />
        <CardButtons/>
        <CardFooter/>
      </div>
    );
  };

  const SmallCard = ({props}) => {
    return (
      <div className={styles.SmallCard} style={{backgroundColor:'#fdfbf4'}}>
        <CardTitle title={props.title} />
        <CardButtons/>
        <CardFooter/>
      </div>
    );
  };

  const SmallerCard = ({props})=>{
    return(
        <div className={styles.SmallCard} style={{backgroundColor:'#fdfbf4'}}>
            <CardTitle title={props.title}/>
            <CardContent content={props.content}/>
            <CardButtons/>
        </div>
    )
  }

  const SmallerCard2 = ({props})=>{
    return(
        <div className={styles.SmallCard} style={{backgroundColor:'#fdfbf4'}}>
            <CardTitle title={props.title}/>
            <CardButtons/>
            <CardFooter/>
        </div>
    )
  }

  return (
    <div className={styles.container}>

      <div className={styles.Section} style={{ borderTop: "3px solid blue" }}>
        <Header title={"to do"}/>
        <FirstCard props={{title:"App Development",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        <SmallerCard2 props={{title:"App Development",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        </div>

      <div className={styles.Section} style={{ borderTop: "3px solid orange" }}>
        <Header title={"in progress"}/>
        <FirstCard props={{title:"Laravel Product Design",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        <SmallCard props={{title:"Frontend Developer",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
      </div>

      <div className={styles.Section} style={{ borderTop: "3px solid green" }}>
        <Header title={"done"}/>
        <FirstCard props={{title:"Laravel Product Design",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        <SmallCard props={{title:"Frontend Developer",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        <SmallerCard props={{title:"Frontend Developer",content:"Visit Home Depot to find out what is needed to rebuild backyard patio."}} />
        </div>
    </div>
  );
}
