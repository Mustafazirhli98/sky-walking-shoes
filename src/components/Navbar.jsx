import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">LuminovaStride</span>
            <div className="links">
                <Link to="about" spy={true} smooth={true} offset={0} duration={500}>Ürün hakkında</Link>
                <FontAwesomeIcon className='basket' icon={faBasketShopping} size="xl" />
            </div>
        </div>
    )
}

export default Navbar