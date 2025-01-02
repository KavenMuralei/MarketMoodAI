import React from 'react'
import Logo from './KM.svg'
import './Header.css'

function Header() {
  return (
    <div>
      <div className="header__wrapper">
        {/*Logo*/}
        <div className="header__logo">
          <img src={Logo} width={40}></img>
        </div>
        {/*search*/}
        <div className="header__search">
          <div className="header__searchContainer">
            <input placeholder="Search" type="text" />

          </div>
        </div>
        {/*menuitems*/}
        <div className="header__menuItems">
          <a href="#">Free Stocks</a>
          <a href="#">Portfolio</a>
          <a href="#">Cash</a>
          <a href="#">Messages</a>
          <a href="#">Account</a>
        </div>
      </div>
    </div>
  )
}

export default Header
