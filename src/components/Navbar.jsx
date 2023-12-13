import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { PATHS } from '../routes/Routes'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context'

const Navbar = () => {
    const [lowOpacity, setLowOpacity] = useState(false);
    const [isFlip, setIsFlip] = useState(false)
    const [empty] = useContext(Context)
    useEffect(() => {
        gsap.to(".navbar", {
            opacity: lowOpacity ? 0.5 : 1,
            duration: 0.4
        })
    }, [lowOpacity])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setLowOpacity(true)
            else setLowOpacity(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className='navbar' style={style.navbar} onMouseEnter={() => setLowOpacity(false)} onMouseLeave={() => setLowOpacity(window.scrollY > 100 ? true : false)}>
            <NavLink to={PATHS.DEFAULT} className="logo navLink">LuminovaStride</NavLink>
            <div className="links">
                <Link to="about" className='aboutLink' spy={true} smooth={true} offset={0} duration={500}>Ürün hakkında</Link>
                <NavLink to={PATHS.BASKET}>
                    <FontAwesomeIcon onMouseEnter={() => setIsFlip(!isFlip)} onMouseLeave={() => setIsFlip(!isFlip)} className='basketIcon navLink' flip={isFlip} icon={faBasketShopping} size="xl" />
                </NavLink>
                {/* {
                    !empty && (
                        <div>
                            dolu
                        </div>
                    )
                } */}
            </div>
        </div>
    )
}
const style = {
    navbar: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "8px",
        backgroundColor: "#93BFA3",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
    }
}
export default Navbar