import { useState } from 'react'

import SearchIcon from '../icons/Search.svg'
import NotificationIcon from '../icons/Notification.svg'
import Logo from '../image/Logo.svg'

function Navigation() {
  
    const [isActive, setIsActive] = useState(false);

    function setActiveOverlay(){
    setIsActive(!isActive)
    }

  return (
    <header className='header'>
      <div className="header__body container">
        <div className="header__logo">
            <img src={Logo} width={199} height={60} alt="" className="header__logo-image" />
        </div>
        <div className={isActive ? "header__overlay is-active" : "header__overlay"} data-js-header-overlay>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a href="#" className="menu__list-link is-active">Home</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#" className="menu__list-link">Movies & Shows</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#" className="menu__list-link">Support</a>
                    </li>
                    <li className="menu__list-item">
                        <a href="#" className="menu__list-link">Subscriptions</a>
                    </li>
                </ul>
            </nav>
            <div className="header__buttons">
                <img width={34} src={SearchIcon} alt="" className="header__buttons-icon" />
                <img width={34} src={NotificationIcon} alt="" className="header__buttons-icon" />
            </div>
        </div>
        <button className={isActive ? "header__burger-buttton burger-button visible-mobile  is-active" : "header__burger-buttton burger-button visible-mobile"} data-js-header-burger-button type="button" onClick={setActiveOverlay}>
            <span class="burger-button__line"></span>
            <span class="burger-button__line"></span>
            <span class="burger-button__line"></span>
        </button>
      </div>
    </header>
  )
}

export default Navigation