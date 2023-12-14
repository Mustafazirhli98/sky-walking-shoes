import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [amount, setAmount] = useState(0);
    const [urlLocation, setUrlLocation] = useState("");
    const [upperButton, setUpperButton] = useState(false);

    const addBasket = (product) => {
        if (!basket.find(item => item.id === product.id)) {
            setBasket([...basket, product])
            setAmount(prevAmount => prevAmount + 1);
        } else {
            console.log("ürün zaten sepette")
        }
    }

    const deleteProduct = (product) => {
        const newBasket = basket.filter(item => item.id !== product.id)
        setBasket(newBasket)
        setAmount(prevAmount => prevAmount - 1)
    }

    const value = {
        basket, setBasket, addBasket, deleteProduct, amount, setAmount, urlLocation, setUrlLocation,
        upperButton, setUpperButton
    }

    return (

        <Context.Provider value={value}>
            {children}
        </Context.Provider>

    )
}

export {
    ContextProvider, Context
}