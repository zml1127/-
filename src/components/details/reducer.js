const initialState = {
    qqq:123,
    data:{},
    introduces:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case 'GETDATA':
        var newState = { ...state }
        newState.data = action.data
        newState.introduces = action.data.introduces
        return { newState }

    default:
        return state
    }
}
