const initialState = {
    keyWords:[],
    keyList:[],
    recipe:[]
}

export default (state = initialState, action) => {
    switch (action.type) {

    case "GETSEARCHKEYWORDS":
        var newState = { ...state }
        newState.keyWords = action.list
        return newState
    case "GETKEYLIST":
        var newState1 = { ...state }
        newState1.keyList = action.list
        newState1.recipe = action.list.list.recipe.data
        return newState1

    default:
        return state
    }
}
