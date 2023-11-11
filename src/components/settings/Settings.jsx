import { useContext } from 'react';
import styles from './settings.module.css'
import { theme } from '../../../theme/ThemeProvider';
export default function Settings() {
  
   const {settings} = useContext(theme);
  return (
    <div className={styles.settingsOption} style={settings?{display:'none'}:{display:'flex'}}>
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
       <div className={styles.Toggle}>
          <div className={styles.ball}></div>
       </div>
       </div>
       <div className={styles.ToggleBar}>
       <div className={styles.heading}>Menu Position</div>
       <div className={styles.Toggle}><div className={styles.ball}></div></div>
       </div>
       <div className={styles.ToggleBar}>
       <div className={styles.heading}>Dark Mode</div>
       <div className={styles.Toggle}><div className={styles.ball}></div></div>
    </div>
 </div>
  )
}
