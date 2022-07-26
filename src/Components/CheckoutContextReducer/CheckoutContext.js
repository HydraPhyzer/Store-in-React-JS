import React, { createContext, useContext, useEffect, useReducer } from 'react'
import Reducer from './CheckoutContextReducer'
import { ref, set } from 'firebase/database'
import { db, auth } from '../Firebase'

let MyCheckoutContext = createContext();
const CheckoutContext = ({ children }) => {
    let initialState =
    {
        Basket: [],
    }
    let [MyCheckoutItems, dispatch] = useReducer(Reducer, initialState);

    let AddtoCart = (Obj) => {
        dispatch({
            type: "ADD-TO-CART",
            Obj
        });
    };

    useEffect(() => {
        if (auth.currentUser) {
            set(ref(db, `${auth.currentUser.uid}`), {
                Basket: MyCheckoutItems.Basket,
            })
        }
    },[MyCheckoutItems.Basket])

    let RemoveFromCart = (Id) => {
        dispatch({
            type: "REMOVE-FROM-CART",
            Id
        });
    };
    let SignOutCart = () => {
        dispatch({
            type: "EMPTY-CART",
        })
    }
    let SignInCart = (Arr) => {
        dispatch({
            type: "FILL-CART",
            SBasket: Arr.Basket
        })
    }

    return (
        <MyCheckoutContext.Provider value={{ ...MyCheckoutItems, AddtoCart, RemoveFromCart, SignOutCart, SignInCart }}>
            {children}
        </MyCheckoutContext.Provider>
    )
}

let useGlobalCheckoutContext = () => {
    return useContext(MyCheckoutContext);
};

export { useGlobalCheckoutContext, CheckoutContext, MyCheckoutContext };