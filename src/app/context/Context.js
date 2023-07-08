'use client'
import React, { useContext, useState, useEffect } from "react";
import {usePathname, useSearchParams } from 'next/navigation'


const AppContext = React.createContext({

});


export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setuser] = useState({value:null});
  const [key, setkey] = useState(0);
 

  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        setSubTotal(JSON.parse(localStorage.getItem("subTotal")));
      }
    } catch (error) {
      localStorage.clear();
    }
    const token=localStorage.getItem('token')
    if(token)
    {
      setuser({value:token})
      setkey(Math.random())
    }
  }, [pathname,searchParams])

  const logout=()=>{
    localStorage.removeItem('token')
    setuser({value:null})
    setkey(Math.random())
    return true
  }


  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart));
    let keys = Object.keys(myCart);
    let subt = 0;
    for (let i = 0; i < keys.length; i++) {
      let pqty = myCart[keys[i]].qty;
      let price = myCart[keys[i]].price;
      subt += price * pqty;
    }
    setSubTotal(subt);
    localStorage.setItem('subTotal', subt);

  }

  const addToCart = (itemCode, qty, name, price, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    }

    else {
      newCart[itemCode] = { qty: 1, name, price, size, variant }
    }
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, name, price, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    // else{
    //         newCart[itemCode].qty = cart[itemCode].qty - qty;
    // }
    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
  }
  return (
    <AppContext.Provider value={{logout, addToCart, removeFromCart, clearCart, cart, subTotal,user,key}}>
      {children}
    </AppContext.Provider>
  )
}
export function GlobalContext() {
  const context = useContext(AppContext)
  return context
}





