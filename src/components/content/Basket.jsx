import React, { useContext } from 'react'
import { Context } from '../../Context'
import img from "./../../assets/images/Img2.jpeg"
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../../Data/Store'

const Basket = () => {
    const [empty, setEmpty, basket, setBasket] = useContext(Context)

    const deleteProduct = (product) => {
        const newBasket = basket.filter(item => item.id !== product.id)
        setBasket(newBasket)
    }

    return (
        <>
            {
                basket.length <= 0 ?
                    <div className="basket">
                        <div className='basket-content'>
                            sepetiz boş
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