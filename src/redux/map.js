//  mapState
export function mapStateToProps(state) {
    return {
        platform: state.platform
    }
}

//  mapReducers
export function mapDispatchToProps(dispatch) {
    return {
        setEbay: () => dispatch({
            type: 'eBay'
        }),
        setAli: () => dispatch({
            type: 'ali'
        })
    }
}