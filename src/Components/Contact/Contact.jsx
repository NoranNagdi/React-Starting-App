import React, { useState , useEffect} from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import styles from './Contact.module.css'

export default function Contact() {

  useEffect(() => {
    document.title = "Contact";
  }, []);

  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <section className='text-center'>
      <div className="container">
        <SectionHeader title="contact section" color={`var(--second-color)`} />
        <div className='w-75 mx-auto'>

          <div className="position-relative mb-5">
            <label htmlFor="userName" className={`${userName ? `top-0 opacity-1 ${styles.floatingLabel}` : `${styles.floatingLabel} ${styles.top30}`}`}>userName:</label>
            <input type="text" id='userName' placeholder="userName" className='form-control' value={userName}
              onChange={(e) => setUserName(e.target.value)} />
          </div>

          <div className="position-relative mb-5">
            <label htmlFor="userAge" className={`${userAge ? `top-0 opacity-1 ${styles.floatingLabel}` : `${styles.floatingLabel} ${styles.top30}`}` }>userAge:</label>
            <input type="number" id='userAge' placeholder="userAge" className='form-control' value={userAge}
              onChange={(e) => setUserAge(e.target.value)} />
          </div>

          <div className="position-relative mb-5">
            <label htmlFor="userEmail" className={`${userEmail ? `top-0 opacity-1 ${styles.floatingLabel}` : `${styles.floatingLabel} ${styles.top30}`}`}>userEmail:</label>
            <input type="email" id='userEmail' placeholder="userEmail" className='form-control' value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} />
          </div>

          <div className="position-relative mb-5">
            <label htmlFor="userPassword" className={`${userPassword ? `top-0 opacity-1 ${styles.floatingLabel}` : `${styles.floatingLabel} ${styles.top30}`}`}>userPassword:</label>
            <input type="password" id='userPassword' placeholder="userPassword" className='form-control' value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)} />
          </div>
          
          <button className='btn px-3 py-2 mb-5'>Send Message</button>
        </div>
      </div>
    </section>
  )
}
