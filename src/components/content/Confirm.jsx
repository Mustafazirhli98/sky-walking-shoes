import React, { useContext, useEffect } from 'react'
import { creditCardAnimation } from '../../utils'
import { Context } from '../../Context'

const Confirm = () => {
    const { total } = useContext(Context)
    useEffect(() => {
        creditCardAnimation()
    }, [])

    return (
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
        </div>
    )
}

export default Confirm