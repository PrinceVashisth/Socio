import { ArrowBackIos } from '@mui/icons-material';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header({props}) {
  return (
    <Link href='/settings'>
    <div className={styles.Header}>
    <ArrowBackIos />
    <span>{props.title}</span>
    </div>
    </Link>
  )
}