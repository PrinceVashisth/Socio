"use client";
import Nav from "@/components/nav/Nav";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { Checkbox } from "@mui/material";
import { FacebookOutlined, Google } from "@mui/icons-material";

export default function page() {
  const [Checked,setChecked] = useState(false);
  const HandelSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const checkPass = e.target[3].value;

    console.log({ name, email, password, checkPass,Checked });
  };
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.Content}>
        <h1>Login into your account</h1>
        <form action="" className={styles.form} onSubmit={HandelSubmit}>
          <input
            type="email"
            className={styles.Input}
            placeholder="your email address"
            required
          />
          <input
            type="password"
            className={styles.Input}
            placeholder="your password"
            required
          />
          <div className={styles.ddd}>
            <div className={styles.checkBox}>
              <Checkbox  
               onClick={()=>setChecked(!Checked)}
               checked={Checked}
              />remember me
            </div>
            <Link href="/register">forget your password ?</Link>
          </div>
          <button type="submit">login</button>
        </form>
        <div className={styles.login}>
          Already have account? <Link href="/register">register </Link>{" "}
        </div>
        <div className={styles.other}>
          <div className={styles.heading}>Or, Sign in with your social account</div>
          <div className={styles.otherBtns}>
             <div className={styles.OtherBtn} style={{backgroundColor:'#0d66ff'}}>
                <div className={styles.Icon}>
                 <Google sx={{color:'green'}}/>
                </div>
                <span>sign up with google</span>
             </div>
             <div className={styles.OtherBtn} style={{backgroundColor:'#3b5999'}}>
                <div className={styles.Icon}>
                 <FacebookOutlined sx={{color:'blue'}}/>
                </div>
                <span>sign up with google</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
