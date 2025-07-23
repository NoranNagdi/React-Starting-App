import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className='text-white'>
      <div className='bg-second py-5'>
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4">
              <div className={`${styles.innerFooter}`}>
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.innerFooter}`}>
                <h2>AROUND THE WEB</h2>
                <div className='d-flex justify-content-center'>
                  <div className={`${styles.iconContainer} d-flex justify-content-center align-items-center me-3`}>
                    <i className={`fa-brands fa-facebook fs-5`}></i>
                  </div>
                  <div className={`${styles.iconContainer} d-flex justify-content-center align-items-center me-3`}>
                    <i className={`fa-brands fa-twitter fs-5`}></i>
                  </div>
                  <div className={`${styles.iconContainer} d-flex justify-content-center align-items-center me-3`}>
                    <i className={`fa-brands fa-linkedin fs-5`}></i>
                  </div>
                  <div className={`${styles.iconContainer} d-flex justify-content-center align-items-center me-3`}>
                    <i className={`fa-solid fa-globe fs-5`}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={`${styles.innerFooter}`}>
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.lowerFooter}`}>
        Copyright © Your Website 2021
      </div>
    </footer>
  )
}
