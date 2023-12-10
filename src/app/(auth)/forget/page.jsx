"use client"
import Nav from "@/components/nav/Nav";
import styles from "./page.module.css";
import { useState } from "react";
import { Checkbox } from "@mui/material";

export default function page() {
    const [Checked,setChecked] = useState(false);
    const HandelSubmit=(e)=>{
      e.preventDefault();
      const name = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const checkPass = e.target[3].value;
      console.log({name,email,password,checkPass,Checked});
    }
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.Content}>
        <h1>change your password</h1>
        <form action="" className={styles.form} onSubmit={HandelSubmit}>
          <input
            type="password"
            className={styles.Input}
            placeholder="old password"
            required
          />
          <input
            type="password"
            className={styles.Input}
            placeholder="your new password"
            required
          />
          <div className={styles.CheckBox}>
            <Checkbox
              onClick={() => (Checked ? setChecked(false) : setChecked(true))}
              checked={Checked}
              sx={{ fontSize: 10 }}
            />{" "}
            <span>Accept Term and Conditions</span>
          </div>
          <button type="submit">change password</button>
        </form>
      </div>
    </div>
  );
}
