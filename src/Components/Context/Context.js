import React, { createContext,useContext,useEffect,useState } from 'react'

let ProductsArray =createContext();

const Context = ({children}) => {
    let [Products, setProducts] = useState([]);
    let FetchAPI = (API) => {
        fetch(API)
            .then((Res) => {
                return Res.json()
            })
            .then((Result) => {
                setProducts(Result);
            })
    }
    useEffect(() => {
        let API = `https://fakestoreapi.com/products`;
        FetchAPI(API);
    }, [])

    return (
            <ProductsArray.Provider value={{Products}}>
                {children}
            </ProductsArray.Provider>
    );
}

const UseGlobalContext=()=>
{
    return useContext(ProductsArray);
}
export {UseGlobalContext , Context , ProductsArray}