let Reducer=(state , action)=>
{
    switch(action.type)
    {
        case "ADD-TO-CART":
            return{
                Basket: [...state.Basket , action.Obj],
            }
        default:
            return state;
    }
}
export default Reducer