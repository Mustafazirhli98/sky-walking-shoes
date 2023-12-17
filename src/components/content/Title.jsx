import React, { useEffect } from 'react'
import image from "../../assets/images/image.jpeg"
import { logoAnimation, titleAnimation } from '../../utils'

const Title = () => {

    useEffect(() => {
        titleAnimation()
    }, [])

    return (
        <div className='title'>
            <div className='title_text' >
                <h4>Merhaba ayakkabı tutkunları!</h4>
                <p>Sizi, adımlarınızı gökyüzünde atmaya davet ediyoruz! Gökyüzü Yürüyüş Ayakkabıları, sadece bir adım ötesinde bulutları hissetmenizi sağlayan yenilikçi bir ayakkabı deneyimidir.</p>
            </div>
            <div className='title_img'>
                <img src={image} />
            </div>
        </div >
    )
}

export default Title