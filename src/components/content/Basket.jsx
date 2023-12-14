import React, { useContext } from 'react'
import { Context } from '../../Context'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../routes/Routes'

const Basket = () => {
    const {basket, deleteProduct}  = useContext(Context)

    return (
        <>
            {
                basket.length <= 0 ?
                    <div className="basket">
                        <div className='basket-content'>
                            <div className="empty-basket">
                                <span>sepetiz boş.</span>
                                <NavLink to={PATHS.MARKET_PLACE} className="redirectMarket">Şimdi ürünlere göz atın.</NavLink>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="basket">
                        <div className='basket-content'>
                            {
                                basket.map((product, index) => (
                                    <div className='shopping-card' key={index}>
                                        <FontAwesomeIcon className='delete' icon={faTrashCan} onClick={() => deleteProduct(product)} />
                                        <div className="product">
                                            <img src={product.img} alt='product' />
                                            <div className="product-detail">
                                                <h5>{product.description}</h5>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <span className='confirm'>Sepeti Onayla</span>
                    </div>

            }
        </>
    )
}

export default Basket