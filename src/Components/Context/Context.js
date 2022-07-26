import React, { createContext,useContext,useEffect,useState } from 'react'

let ProductsArray =createContext();

const Context = ({children}) => {
    let [Products, setProducts] = useState([]);
    let [TempProducts,setTempProducts]=useState([]);
    let FetchAPI = (API) => {
        fetch(API)
            .then((Res) => {
                return Res.json()
            })
            .then((Result) => {
                setProducts(Result);
                setTempProducts(Result);
            })
    }
    useEffect(() => {
        let API = `https://fakestoreapi.com/products`;
        FetchAPI(API);
    }, [])

    let GetSearchText=(Val)=>
    {
        let Temp=TempProducts;
        if(Val==="")
        {
            setProducts(Temp);
        }
        else
        {
            Temp=[];
            TempProducts.map((Element , Ind)=>
            {
                return(
                    Element.title.toLowerCase().includes(Val.toLowerCase())?
                    Temp.push(Element):""
                )
            })
            setProducts(Temp);
        }

    }
    return (
            <ProductsArray.Provider value={{Products , GetSearchText}}>
                {children}
            </ProductsArray.Provider>
    );
}

const UseGlobalContext=()=>
{
    return useContext(ProductsArray);
}
export {UseGlobalContext , Context , ProductsArray}