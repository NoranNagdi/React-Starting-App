import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import portfolio1 from "../../assets/images/imgi_1_poert1.png"
import portfolio2 from "../../assets/images/imgi_2_port2.png"
import portfolio3 from "../../assets/images/imgi_3_port3.png"
import styles from "./Portfolio.module.css"
import { useState , useEffect} from 'react'

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <section className='text-center mb-4'>
      <div className="container">
        <SectionHeader title="Portfolio Component" color={`var(--second-color)`} />
        <div className="row g-5">
          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio1)}>
              <img src={portfolio1} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio2)}>
              <img src={portfolio2} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio3)}>
              <img src={portfolio3} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio1)}>
              <img src={portfolio1} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio1)}>
              <img src={portfolio2} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="img-container position-relative overflow-hidden" onClick={() => setSelectedImage(portfolio1)}>
              <img src={portfolio3} alt="" className='w-100 rounded-3' />
              <div className={`${styles.overlay} rounded-3`}>
                <i className={`${styles.plus} fa-solid fa-plus`}></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      {selectedImage && (
        <div className={styles.lightBoxContainer} onClick={() => setSelectedImage(null)}>
          <div className={styles.lightBoxItem} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="" className='w-100' />
          </div>
        </div>
      )}
    </section>
  )
}
