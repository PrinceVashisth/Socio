import { Delete, FileOpenOutlined, MessageOutlined, Pending, PendingOutlined, Send, Star, Warning, Work } from "@mui/icons-material";
import styles from "./EmailSidebar.module.css";

export default function EmailSidebar() {
  const Item = ({props}) => {
    return (
      <div className={styles.ListItem}>
        <div className={styles.ItemLeft} style={{color:props.color}}>
          {props.icon}
          {props.dot}
          <span>{props.title}</span>
        </div>
        <div className={styles.ItemNumber}>{props.number}</div>
      </div>
    );
  };

  const Dot = ({color})=>{
    return(
        <div className={styles.Dot} style={{backgroundColor:color}}></div>
    )
  }
  return (
    <div className={styles.container}>
    <div className={styles.WriteMsg}>
        <PendingOutlined />
        <div className={styles.text}>write message</div>
      </div>
      <div className={styles.List}>
      <Item props={{title:"inbox",icon : <MessageOutlined/>,number:"20"}}/>
      <Item props={{title:"starred",icon : <Star/>,number:"20"}} />
      <Item props={{title:"send",icon : <Send/>,number:"20"}} />
      <Item props={{title:"file",icon : <FileOpenOutlined/>,number:"20"}} />
      <Item props={{title:"span",icon : <Warning/>,number:"20"}} />
      <Item props={{title:"work",icon : <Work/>,number:"20"}} />
      <Item props={{title:"trash",icon : <Delete/>,number:"20"}} />
      <div className={styles.ListItem}>
         <div className={styles.Heading}>
            categories
         </div>
      </div>
      <Item props={{title:"primary", dot:<Dot color={'blue'} />,number:"20",color:"#adb5bd" }} />
      <Item props={{title:"social", dot:<Dot color={'red'} />,number:"20",color:"#adb5bd" }} />
      <Item props={{title:"works", dot:<Dot color={'orange'} />,number:"20",color:"#adb5bd" }} />
      <Item props={{title:"promotions", dot:<Dot color={'blue'} />,number:"20",color:"#adb5bd" }} />
      <Item props={{title:"friends", dot:<Dot color={'#10d876'} />,number:"20",color:"#adb5bd" }} />
      </div>
      <div className={styles.LabelBtn}>
        <span style={{fontSize:25}}>+</span>
        <span>create new label</span>
      </div>
    </div>
  );
}
// #adb5bd