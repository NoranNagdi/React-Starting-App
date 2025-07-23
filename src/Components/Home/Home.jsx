import React from 'react'
import home_image from "../../assets/images/imgi_1_avataaars.svg"
import SectionHeader from '../SectionHeader/SectionHeader'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <section className='bg-main min-vh-100 text-white'>
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="mt-3">
            <img src={home_image} alt="" className='w-100' />
          </div>
          <SectionHeader title = "Start Framework" color = "white"/>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </section>
  )
}
