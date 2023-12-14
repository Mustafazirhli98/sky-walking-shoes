import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { PATHS } from '../routes/Routes'
import { NavLink, useLocation } from 'react-router-dom'
import { Context } from '../Context'
import { GetUrlInfo, NavbarRouteMapper } from '../utils'
import { NavbarRoutes } from '../routes/NavbarRoutes'

const Navbar = () => {
    const [lowOpacity, setLowOpacity] = useState(false);
    const [isFlip, setIsFlip] = useState(false);
    const [basket, setBasket, addBasket, deleteProduct, amount, setAmount, urlLocation, setUrlLocation] = useContext(Context);
    const currentURL = GetUrlInfo();


    //#region useEffects
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
    //#endregion

    return (
        <div
            className='navbar'
            style={style.navbar}
            onMouseEnter={() => setLowOpacity(false)}
            onMouseLeave={() => setLowOpacity(window.scrollY > 100 ? true : false)}>
            <NavLink
                to={PATHS.DEFAULT}
                className="logo">
                LuminovaStride
            </NavLink>
            <div className="links">
                <Link to="about"
                    className={`aboutLink ${currentURL === "/basket" && basket.length <= 0 ? "notAllowed" : ""}`}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500} >
                    {
                        NavbarRouteMapper(currentURL)
                    }
                </Link>
                <NavLink
                    to={PATHS.BASKET}>
                    <FontAwesomeIcon
                        onMouseEnter={() => setIsFlip(!isFlip)}
                        onMouseLeave={() => setIsFlip(!isFlip)}
                        className="basketIcon"
                        flip={isFlip}
                        icon={faBasketShopping}
                        size="xl" />
                    {
                        amount > 0 && (
                            <span className='amount'>{amount}</span>
                        )
                    }
                </NavLink>
            </div >
        </div >
    )
}
const style = {
    navbar: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 100px",
        backgroundColor: "#93BFA3",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
    },

    navLink: {
        textDecoration: "none",
        color: "#fff",
    }
}
export default Navbar


