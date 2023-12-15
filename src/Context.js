import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
    const [amount, setAmount] = useState(0);
    const [urlLocation, setUrlLocation] = useState("");
    const [upperButton, setUpperButton] = useState(false);
    const [total, setTotal] = useState(0)

    const addBasket = (product) => {
        if (!basket.find(item => item.id === product.id)) {
            setBasket([...basket, { ...product, quantity: 1 }]);
            setAmount(prevAmount => prevAmount + 1);
        } else {
            const productAmount = basket.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setBasket(productAmount);
            setAmount(prevAmount => prevAmount + 1);
        }
    };
    const decreaseQuantity = (product) => {
        const updatedBasket = basket.map(item =>
            product.id === item.id ? { ...item, quantity: product.quantity - 1 } : item
        )
        setBasket(updatedBasket)
        setAmount(prevAmount => prevAmount - 1)
    }
    const increaseQuantity = (product) => {
        const updatedBasket = basket.map(item =>
            product.id === item.id ? { ...item, quantity: product.quantity + 1 } : item
        )
        setBasket(updatedBasket)
        setAmount(prevAmount => prevAmount + 1)
    }
    const deleteProduct = (product) => {
        const newBasket = basket.filter(item => item.id !== product.id)
        setBasket(newBasket)
        setAmount(prevAmount => prevAmount - product.quantity)
    }

    const value = {
        basket, setBasket, addBasket, deleteProduct, amount, setAmount, urlLocation, setUrlLocation,
        upperButton, setUpperButton, decreaseQuantity, increaseQuantity, total, setTotal
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