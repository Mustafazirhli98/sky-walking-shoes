import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { PATHS } from '../routes/Routes'
import { NavLink } from 'react-router-dom'
import { Context } from '../Context'
import { GetUrlInfo, NavbarRouteMapper } from '../utils'
import { NavbarRoutes } from '../routes/NavbarRoutes'
import LogoSVG from '../assets/SVG/LogoSVG'

const Navbar = () => {
    const [lowOpacity, setLowOpacity] = useState(false);
    const [isFlip, setIsFlip] = useState(false);
    const { amount } = useContext(Context);
    const currentURL = GetUrlInfo();
    const [innerWidth, setInnerWidth] = useState(0);

    //#region useEffects
    useEffect(() => {
        gsap.to(".navbar", {
            opacity: lowOpacity ? 0.5 : 1,
            duration: 0.4
        })
    }, [lowOpacity])

    useEffect(() => {
        setInnerWidth(window.innerWidth) //mobile boyutta sepet animasyonunu click ile çalıştırmak için
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
            onMouseEnter={() => setLowOpacity(false)}
            onMouseLeave={() => setLowOpacity(window.scrollY > 100 ? true : false)}>
            <NavLink
                to={PATHS.DEFAULT}
                className="logo">
                <LogoSVG />
            </NavLink>
            <div className="links">
                {
                    currentURL === PATHS.DEFAULT ?
                        <Link to="about"
                            className="aboutLink"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500} >
                            {
                                NavbarRouteMapper(currentURL)
                            }
                        </Link> :
                        <NavLink to={NavbarRoutes.MARKET_PLACE}
                            className={`marketNav-button`}>
                            {
                                Object.values(NavbarRoutes.MARKET_PLACE)
                            }
                        </NavLink>
                }
                <NavLink
                    to={PATHS.BASKET}>
                    <FontAwesomeIcon
                        onMouseEnter={() => {
                            if (innerWidth > 700) {
                                setIsFlip(!isFlip)
                            } else if (innerWidth < 700) {
                                setIsFlip(!isFlip)
                                setTimeout(() => {
                                    setIsFlip(false)
                                    console.log("dur")
                                }, 1000)
                            }
                        }}
                        onMouseLeave={() => {
                            setIsFlip(!isFlip)
                            if (innerWidth < 700) {
                                setIsFlip(false)
                                //leave olayı mobilde sorun çıkarıyor. Bu yüzden setFlip(false) ile kontrole aldık.
                            }
                        }}
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
export default Navbar


