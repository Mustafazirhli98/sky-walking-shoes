import React, { useContext } from 'react'
import { Context } from '../../Context'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../../Data/Store'

const Basket = () => {
    const [empty, setEmpty] = useContext(Context)
    return (
        <>
            {
                empty ?
                    <div className="basket">
                        <div className='basket-content'>
                            sepetiz boş
                        </div>
                    </div>
                    :
                    <div div className="basket">
                        <div className='basket-content'>
                            {
                                data.map((item) => (
                                    <div className='shopping-card'>
                                        <FontAwesomeIcon className='delete' icon={faTrashCan} />
                                        <div className="product">
                                            <img src={item.img} alt='product' />
                                            <div className="product-detail">
                                                <h5>{item.description}</h5>
                                                <span>{item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <span className='confirm'>Sepeti Onayla</span>
                    </div >
            }
        </>
    )
}

export default Basket