"use client"
import styles from './MagboostV8.module.scss';
import { ReactNode } from 'react';


function PreviewTitle({children}: {children: ReactNode}) {
   return (
   <div className={`${styles.preview} ${styles.container}`}>
      {children}
   </div>
   )
}
export default PreviewTitle;