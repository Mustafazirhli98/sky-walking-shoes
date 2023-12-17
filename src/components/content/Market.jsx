import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import React, { useContext, useEffect, useState } from 'react'
import { marketAnimation } from '../../utils'
import { data } from '../../Data/Store'
import { Context } from '../../Context'

const Market = () => {

    const { addBasket } = useContext(Context)

    useEffect(() => {
        marketAnimation()
        console.log("adsf")
    }, []);

    return (

        <div className='market' >
            <div className='market-content'>
                <h1 className='buyNow'>Şimdi satın alın</h1>
                <p>Sınırlı sayıdaki ürünler tükenmeden şimdi alın.</p>
            </div>
            <div className='market_products'>
                {
                    data.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.img} alt='product' />
                            <div className="product-card_detail">
                                <h5>{product.description}</h5>
                                <div>{product.price} ₺</div>
                                <div className='add-Basket' onClick={() => {
                                    addBasket(product)
                                }}>Sepete ekle</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="footer">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Market