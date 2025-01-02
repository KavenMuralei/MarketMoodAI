import React from 'react'
import Logo from './KM.svg'
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
            
          </div>
        </div>
        {/*menuitems*/}
      </div>
    </div>
  )
}

export default Header
