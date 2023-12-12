import React, { useEffect } from 'react'
import image from "../../assets/images/image.jpeg"
import gsap from 'gsap'

const Title = () => {

    return (
        <div className='title'>
            <div className='title-text'>
                <h4>Merhaba ayakkabı tutlunları!</h4>
                <p>Sizi, adımlarınızı gökyüzünde atmaya davet ediyoruz! Gökyüzü Yürüyüş Ayakkabıları, sadece bir adım ötesinde bulutları hissetmenizi sağlayan yenilikçi bir ayakkabı deneyimidir.</p>
            </div>
            <div className="title-img">
                <img src={image} />
            </div>

        </div>
    )
}

export default Title