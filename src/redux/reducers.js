// store  数据
const commonState = {
    platform: 'eBay'
}

//这是同步action
// const increase = {
//     type: 'add'
// }
// const decrease = {
//     type: 'minus'
// }

//这是reducer
const reducer = (state = commonState, action) => {
    switch (action.type) {
        case 'eBay':
            return Object.assign({}, state, state.platform = 'eBay');
        case 'ali':
            return Object.assign({}, state, state.platform = 'aliExpress');
        default:
            return state;
    }
}
export default reducer