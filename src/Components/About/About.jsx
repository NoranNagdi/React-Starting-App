import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './About.module.css'
import { useEffect } from 'react';

export default function About() {

   useEffect(() => {
      document.title = "About";
    }, []);

  return (
    <section className='bg-main text-white'>
      <div className="container">
        <div className="about-content d-flex flex-column align-items-center justify-content-center min-vh-100">
          <SectionHeader title="about component" color="white" />
          <div className={`${styles.aboutText} row g-3`}>
            <p className='col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p className='col-md-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
