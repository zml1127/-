const initialState = {
    a:1
}

export default (state = initialState, action ) => {
    switch (action.type) {

    case 'typeName':
        return { ...state  }

    default:
        return state
    }
}
