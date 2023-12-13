import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [basket, setBasket] = useState([])
    const [empty, setEmpty] = useState(true)

    const upgradeBasket = (item) => {
        setBasket(item)
    }
    const value = [
        empty, setEmpty,
        basket, setBasket, upgradeBasket
    ]

    return (

        <Context.Provider value={value}>
            {children}
        </Context.Provider>

    )
}

export {
    ContextProvider, Context
}