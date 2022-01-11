import React from 'react'
import Abstract from '../assets/Header/Abstract.png'
import searchIcon from '../assets/Header/search.png'
import themeSwitchIcon from '../assets/Header/theme-switch.png'
const Header = () => {
    return <div className='header'>
        <div className='logoContainer'>
            <img src={Abstract} className='abstractLogo' alt='Abstract Collection Logo' />
            </div>
        <div className='searchBar'>
            <div className='searchIcon'>
                <img src={searchIcon} alt='' />
            </div>
            <input className='searchInput' placeholder='Collections, Items, User' />
        </div>
        <div className='headerItems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className='headerActions' >
            <div className='themeSwitch'>
                <img src={themeSwitchIcon} alt='Dark Mode Switch'/>
            </div>
        </div>
        <div className='loginButton'>
        <a href="https://www.linkedin.com/in/mrshobhit/">Contact</a>
        </div>
        </div>
}
export default Header