import React, { useContext } from 'react'
import { data } from '../../Data/Store'
import { Context } from '../../Context'

const MarketPlace = () => {
    const { addBasket } = useContext(Context)

    return (
        <div>
            <div className='market' >
                <div className='market-content'>
                    <h1>Şimdi satın alın</h1>
                    <p>Hemen sipariş verin ve yürüyüş deneyiminizi bulutların üzerine taşıyın! Gökyüzü Yürüyüş Ayakkabıları ile adımlarınızın ötesine geçin.</p>
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
                <span className='confirm'>Sepeti Onayla</span>
                <div className="footer">
                    <ul>
                        <li>twitter</li>
                        <li>instagram</li>
                        <li>facebook</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace