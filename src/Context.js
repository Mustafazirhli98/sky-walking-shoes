import React, { createContext, useState } from 'react'

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [empty, setEmpty] = useState(false)


    const value = [
        empty, setEmpty
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