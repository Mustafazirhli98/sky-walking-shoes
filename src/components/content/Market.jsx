import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Market = () => {
    const [isFlip, setIsFlip] = useState(false)
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