import { useContext } from 'react';
import styles from './settings.module.css'
import { theme } from '../../../theme/ThemeProvider';
export default function Settings() {
  
   const {mode,toggle,settings,BGToggle,minToggle,Background,Min} = useContext(theme);
  return (
    <div className={styles.settingsOption} style={settings?{display:'flex'}:{display:'none'}}>
    <div className={styles.Header}>settings</div>
    <div className={styles.ColorPelette}>
     <span className={styles.PeletteHeading}>choose color theme</span>
     <div className={styles.ColorsBoxes}>
        <div className={styles.ColorBox} style={{backgroundColor:'violet'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'blue'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'green'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'yellow'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'gray'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'cyan'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'violet'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'violet'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'violet'}}></div>
        <div className={styles.ColorBox} style={{backgroundColor:'violet'}}></div>
     </div>
    </div>
    <div className={styles.ToggleBar}>
       <div className={styles.heading}>Header Background</div>
       <div className={styles.Toggle} style={Background?{backgroundColor:'orange', }:{}}  >
          <div className={styles.ball}
               onClick={()=>{BGToggle()}}
               style={Background?{right:'0px'}:{left:'0px'}}
          ></div>
       </div>
       </div>
       <div className={styles.ToggleBar}>
       <div className={styles.heading}>Menu Position</div>
       <div className={styles.Toggle} style={Min?{backgroundColor:'orange', }:{}} >
           <div className={styles.ball}
               onClick={()=>{minToggle()}}
               style={Min?{right:'0px'}:{left:'0px'}} 
           ></div>
       </div>
       </div>
       <div className={styles.ToggleBar}>
       <div className={styles.heading}>Dark Mode</div>
       <div className={styles.Toggle} style={mode==='light'?{backgroundColor:'orange', }:{}} >
            <div className={styles.ball} 
                 onClick={()=>{toggle()}}
                 style={mode==='dark'?{left:'0px'}:{right:'0px'}}
             ></div>
       </div>
    </div>
 </div>
  )
}
