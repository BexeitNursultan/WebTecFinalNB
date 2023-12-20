import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
 
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-list'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
             
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/login'>my account</Link>
              </li>
              <li>
                <Link to='/delivery'>delivery</Link>
              </li>
              <li>
                <Link to='/about'>about us</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
