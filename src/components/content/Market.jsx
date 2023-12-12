import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

const Market = () => {
    const [isFlip, setIsFlip] = useState(false)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animation = () => {
            const triggerElement = ".market";

            gsap.fromTo(
                triggerElement,
                {
                    y: -100, // Başlangıç değeri
                    opacity: 0, // Başlangıçta belirlediğiniz diğer özellikler
                },
                {
                    y: 0, // Bitiş değeri
                    opacity: 1, // Diğer özellikler
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerElement,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                    },
                }
            );
        };

        animation();

    }, []);
    return (

        <div className='market'>
            <div className='market-content'>
                <h1>Şimdi satın alın</h1>
                <p>Hemen sipariş verin ve yürüyüş deneyiminizi bulutların üzerine taşıyın! Gökyüzü Yürüyüş Ayakkabıları ile adımlarınızın ötesine geçin.</p>
                <FontAwesomeIcon onMouseEnter={() => setIsFlip(!isFlip)} onMouseLeave={() => setIsFlip(!isFlip)} className='basket' flip={isFlip} icon={faBasketShopping} size="2xl" />
            </div>
            <div className="footer">
                <ul>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>facebook</li>
                </ul>
            </div>
        </div>
    )
}

export default Market