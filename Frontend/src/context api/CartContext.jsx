import React, { useContext, createContext, useState, useEffect } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])
    useEffect(()=>{
        let cartValue = localStorage.getItem('cart')
        if(cartValue){
            setCart(JSON.parse(cartValue))
        }
    },[])
    return (
        
           <CartContext.Provider value={[cart, setCart]}>
                {children}
            </CartContext.Provider> 
    )
}

const useCart = () => useContext(CartContext)

export { useCart, CartContextProvider  }
