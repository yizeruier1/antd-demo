export const delaySetAli = () => (dispatch, getState) => {
    dispatch({
        type: 'ali'
    });
    return getState().platform
}

export const delaySetEbay = () => (dispatch, getState) => {
    dispatch({
        type: 'eBay'
    });
    return getState().platform
}