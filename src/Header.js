import React from 'react'
import Logo from './KM.svg'
function Header() {
  return (
    <div>
      <div className="header__wrapper">
        {/*Logo*/}
        <div className="header_logo">
          <img src={Logo} width={50}></img>
        </div>
        {/*search*/}
        {/*menuitems*/}
      </div>
    </div>
  )
}

export default Header
