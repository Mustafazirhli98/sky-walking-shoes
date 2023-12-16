import React, { useContext, useEffect } from 'react'
import { creditCardAnimation, ordercheckAnimation } from '../../utils'
import { Context } from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../routes/Routes'

const Confirm = () => {
    const { total, orderState, setOrderState } = useContext(Context)
    useEffect(() => {
        creditCardAnimation()
        ordercheckAnimation()
    }, [])
    console.log(orderState)
    return (
        <div className='confirmPage'>
            {
                !orderState ?
                    <>
                        <div className="confirmPage-title">
                            <span>Ödeme işlemi için kart üzerine bilgi girip onaylayınız.</span>
                            <div className='total'>
                                <span>Ödeme tutarı: </span>
                                <b>{total}</b>
                            </div>
                        </div>
                        <div className="credit-card">
                            <div className="label-group">
                                <label htmlFor="firstName">İsim:</label>
                                <input autoComplete='off' type="text" name="firstName" id="" />
                            </div>
                            <div className="label-group">
                                <label htmlFor="lastName">Soyisim:</label>
                                <input autoComplete='off' type="text" name="lastName" id="" />
                            </div>
                            <div className="label-group">
                                <label htmlFor="card-no">Kart bilgisi:</label>
                                <input autoComplete='off' type="password" name="card-no" id="" />
                            </div>
                        </div>
                        <span className="finish">Onayla</span>
                    </> :
                    <>
                        <div className='orderDone'>
                            <div className='order-Info'>
                                <FontAwesomeIcon className='order-check' icon={faCircleCheck} size="2xl"/>
                                <h4>Siparişiniz alındı!</h4>
                                <p>Fatura bilgilendirmesi için mail adresinizi kontrol edin.</p>
                            </div>
                            <div className='orderDone_links'>
                                <NavLink to={PATHS.DEFAULT} className={'orderDone_links_link'}>Ana Sayfa</NavLink>
                                <NavLink to={PATHS.MARKET_PLACE} className={'orderDone_links_link'}>Alışverişe devam edin!</NavLink>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Confirm