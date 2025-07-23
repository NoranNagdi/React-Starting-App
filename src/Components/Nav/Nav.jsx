import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-second py-4" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand fs-1 fw-bold text-uppercase" to={""}>Start Framework</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-white text-uppercase fw-bold">
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link me-3 ${isActive ? styles.active : ""}`} to={"about"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link me-3 ${isActive ? styles.active : ""}`} to={"portfolio"}>Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  `nav-link me-3 ${isActive ? styles.active : ""}`} to={"contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
