let Reducer=(state , action)=>
{
    switch(action.type)
    {
        case "ADD-TO-CART":
            return{
                Basket: [...state.Basket , action.Obj],
            }
        case "REMOVE-FROM-CART":
            let New=state.Basket.filter((Elem)=>
            {
                return action.Id!==Elem.id
            });
            return{
                Basket:[...New],
            }
        case "EMPTY-CART":
            return{
                Basket:[]
            }
        case "FILL-CART":
            return{
                Basket:action.SBasket
            }
        default:
            return state;
    }
}
export default Reducer