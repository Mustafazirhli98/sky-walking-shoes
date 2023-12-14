import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { marketAnimation } from '../../utils'
import { data } from '../../Data/Store'
import { Context } from '../../Context'

const Market = () => {

    const { addBasket } = useContext(Context)

    useEffect(() => {
        marketAnimation()
    }, []);

    return (

        <div className='market' >
            <div className='market-content'>
                <h1>Şimdi satın alın</h1>
                <p>Sınırlı sayıdaki ürünler tükenmeden şimdi alın.</p>
            </div>
            <div className='market_products'>
                {
                    data.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img src={product.img} alt='product' />
                            <div className="product-card_detail">
                                <h5>{product.description}</h5>
                                <div>{product.price}</div>
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
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>facebook</li>
                </ul>
            </div>
        </div>
    )
}

export default Market