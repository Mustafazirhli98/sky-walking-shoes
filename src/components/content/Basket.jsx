import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context'
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../routes/Routes'

const Basket = () => {
    const { basket, deleteProduct, decreaseQuantity, increaseQuantity, total, setTotal } = useContext(Context)

    useEffect(() => {
        const newTotal = basket.reduce((arr, item) => arr + item.price * item.quantity, 0);
        setTotal(newTotal)
    }, [basket, setTotal])


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
                                        <div className="card-header">
                                            {product.quantity > 0 && product.quantity !== 1 ?
                                                <div className='card-header_quantity'>
                                                    <FontAwesomeIcon className='quantity' icon={faMinus} onClick={() => decreaseQuantity(product)} />
                                                    <span>{product.quantity}</span>
                                                    <FontAwesomeIcon className='quantity' icon={faPlus} onClick={() => increaseQuantity(product)} />
                                                </div>
                                                :
                                                <FontAwesomeIcon className='quantity' icon={faPlus} onClick={() => increaseQuantity(product)} />
                                            }
                                            <FontAwesomeIcon className='delete' icon={faTrashCan} onClick={() => deleteProduct(product)} />
                                        </div>
                                        <div className="product">
                                            <img src={product.img} alt='product' />
                                            <div className="product-detail">
                                                <h5>{product.description}</h5>
                                                <span>{product.price} ₺</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="total">
                            <span className='total_text'>Toplam: </span>
                            <b className='total_price'> {total}</b>
                        </div>
                        <NavLink to={basket.length <= 0 ? undefined : "/confirm"} className='confirmButton'>Sepeti Onayla</NavLink>
                    </div>

            }
        </>
    )
}
export default Basket