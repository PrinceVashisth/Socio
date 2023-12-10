"use client"
import styles from "./page.module.css";
import Image from "next/image";
import Header from "@/components/HeaderBackBtn/Header";
import { useRef } from "react";
import { Upload, UploadFileOutlined } from "@mui/icons-material";

export default function page() {
  const file = useRef(null);
  return (
<div style={{backgroundColor:'white'}}>
<Header props={{ title: "account details" }} />
<div className={styles.Wrapper}>
<div className={styles.Header}>
        <div className={styles.Img}>
          <Image src="/images/nature.jpg" fill />
        </div>
        <div className={styles.name}>Prince Vashisth</div>
        <div className={styles.city}>brooklyn</div>
      </div>
      <form action="" method="post" className={styles.Form}>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>First Name</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>Last Name</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>Email</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>Phone</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.single}`}>
          <span>Country</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.single}`}>
          <span>Address</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>Twon / City</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.Input} ${styles.double}`}>
          <span>Postcode</span>
          <input type="text" name="" id="" className={styles.input} />
        </div>
        <div className= {`${styles.InputFile} ${styles.single}`} onClick={()=>{file.current.click()}}>
          <input type="file" name="" id="" className={styles.inputFile} ref={file} hidden />
          <UploadFileOutlined/>
        </div>
        <div className= {styles.InputArea}>
           <span>Description</span>
          <textarea className={styles.textArea} placeholder="Write Your Message .."/>
        </div>
        <button className={styles.btn}>submit</button>
      </form>
</div>
</div>
  );
}
