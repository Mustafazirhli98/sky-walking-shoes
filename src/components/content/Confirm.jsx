import React, { useContext, useEffect } from 'react'
import { creditCardAnimation, ordercheckAnimation } from '../../utils'
import { Context } from '../../Context'
import { NavLink } from 'react-router-dom'
import { PATHS } from '../../routes/Routes'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Confirm = () => {
    const { total, orderState, setOrderState, checkAlert,
        userInfo, setUserInfo, firstInputAlert, secondInputAlert,
        thirdInputAlert } = useContext(Context)
    useEffect(() => {
        setOrderState(false)
    }, [])
    useEffect(() => {
        creditCardAnimation();
        if (orderState) ordercheckAnimation();
    }, [orderState])

    return (
        <>
            {!orderState ?
                <div className='confirmPage'>
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
                            <div className="input-area">
                                <input
                                    autoComplete='off'
                                    type="text"
                                    name="firstName"
                                    id="name"
                                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                />
                                <span>{firstInputAlert}</span>
                            </div>
                        </div>
                        <div className="label-group">
                            <label htmlFor="lastName">Soyisim:</label>
                            <div className="input-area">
                                <input
                                    autoComplete='off'
                                    type="text"
                                    name="lastName"
                                    id="surname"
                                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                                />
                                <span>{secondInputAlert}</span>
                            </div>
                        </div>
                        <div className="label-group">
                            <label htmlFor="card-no">Kart bilgisi:</label>
                            <div className='input-area'>
                                <input
                                    autoComplete='off'
                                    type="password"
                                    name="card-no"
                                    id="card-info"
                                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                                />
                                <span >{thirdInputAlert}</span>
                            </div>
                        </div>
                    </div>
                    <span
                        className="finish"
                        onClick={() => checkAlert()}>
                        Onayla
                    </span>
                </div >
                :
                <div className='bridge'>
                    <div className='order-Info'>
                        <FontAwesomeIcon className='order-check' icon={faCircleCheck} size="2xl" />
                        <h4>Siparişiniz alındı!</h4>
                        <p>Fatura bilgilendirmesi için mail adresinizi kontrol edin.</p>
                    </div>
                    <div className='orderDone_links'>
                        <NavLink to={PATHS.DEFAULT} className={'orderDone_links_link'}>Ana Sayfa</NavLink>
                        <NavLink to={PATHS.MARKET_PLACE} className={'orderDone_links_link'}>Alışverişe devam edin!</NavLink>
                    </div>
                </div>}
        </>
    )
}

export default Confirm