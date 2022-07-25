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
        default:
            return state;
    }
}
export default Reducer