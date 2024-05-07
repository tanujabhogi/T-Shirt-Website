import React, { createContext, useState } from 'react'
export const cartContext=createContext();
const CartContextProvider = ({children}) => {
     let [cart,setCart]=useState([])
  return (
    <cartContext.Provider value={[cart,setCart]}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContextProvider