import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className="logo">LuminovaStride</span>
            <div className="links">
                <span>Ürün hakkında</span>
                <FontAwesomeIcon className='basket' icon={faBasketShopping} size="xl" />
            </div>
        </div>
    )
}

export default Navbar