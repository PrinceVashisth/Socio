"use client"
import { ElectricBoltOutlined } from '@mui/icons-material'
import styles from './page.module.css'
import { Checkbox } from '@mui/material'
import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/nav/Nav'

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
     <Nav/>
    <div className={styles.Content}>
      <h1>create your account</h1>
      <form action="" className={styles.form} onSubmit={HandelSubmit}>
         <input type="text" className={styles.Input} placeholder='your name' required />
         <input type="email" className={styles.Input} placeholder='your email address' required />
         <input type="password" className={styles.Input} placeholder='your password' required />
         <input type="password" className={styles.Input} placeholder='confirm your password' required />
          <div className={styles.CheckBox}>
          <Checkbox 
          onClick={()=>Checked?setChecked(false):setChecked(true)}
           checked={Checked}
          sx={{fontSize:10}} /> <span>accept term and policy</span>
          </div>
         <button type="submit">submit</button>
      </form>
      <div className={styles.login}>Already have account? <Link href='/login'>Login </Link> </div>
    </div>
    </div>
    
    )
}
