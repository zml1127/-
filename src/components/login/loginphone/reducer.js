const initialState = {
    area:[],
    qqq:123,
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN':
        var newState = { ...state }
        newState.area = action.area
        return newState

    case 'typeName':
        return { ...state }

    default:
        return state
    }
}
