import React, { useContext, useEffect, useState } from 'react'
import Title from "./content/Title"
import Introduction from "./content/Introduction"
import Market from "./content/Market"
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Context } from '../Context'

const MainComponent = () => {

    const { upperButton, setUpperButton } = useContext(Context)

    useEffect(() => {
        setUpperButton(false)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 600) {
                setUpperButton(true)
            } else setUpperButton(false)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [upperButton])


    return (
        <>
            <Title />
            <Introduction />
            <Market />
            <Link to="title"
                className={upperButton ? "upperButton" : ""}
                spy={true}
                smooth={true}
                offset={-200}
                duration={500} >
                <FontAwesomeIcon icon={faArrowUp} />
            </Link>
        </>
    )
}

export default MainComponent