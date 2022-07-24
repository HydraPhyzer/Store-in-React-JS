import React, { createContext, useContext, useReducer } from 'react'
import Reducer from './CheckoutContextReducer'

let MyCheckoutContext = createContext();
const CheckoutContext = ({ children }) => {
    let initialState=
    {
        Basket:[],
    }
    let [MyCheckoutItems, dispatch] = useReducer(Reducer, initialState);

    let AddtoCart=(Obj)=>
    {
        dispatch({
            type:"ADD-TO-CART",
            Obj
        });
    };

    return (
        <MyCheckoutContext.Provider value={{...MyCheckoutItems , AddtoCart}}>
            {children}
        </MyCheckoutContext.Provider>
    )
}

let useGlobalCheckoutContext=()=>
{
    return useContext(MyCheckoutContext);
};

export {useGlobalCheckoutContext , CheckoutContext , MyCheckoutContext};