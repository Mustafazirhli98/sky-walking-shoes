import React, { useEffect } from 'react'
import { creditCardAnimation } from '../../utils'

const Confirm = () => {

    useEffect(() => {
        creditCardAnimation()
    }, [])

    return (
        <div className='confirmPage'>
            <div className="confirmPage-title">Ödeme işlemi için kart üzerine bilgi girip onaylayınız.</div>
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