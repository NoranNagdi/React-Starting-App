import React from 'react'
import styles from './SectionHeader.module.css'

export default function SectionHeader({ title, color }) {
    return (
        <div>
            <h1 style={{color}} className='text-uppercase mt-3 fw-bold'>{title}</h1>
            <div className={styles.separatorWrapper}>
                <div className={styles.line} style={{ backgroundColor: color }}></div>
                <i className="fa-solid fa-star mx-3" style={{ color: color }}></i>
                <div className={styles.line} style={{ backgroundColor: color }}></div>
            </div>
        </div>
    )
}
