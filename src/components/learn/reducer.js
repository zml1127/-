const initialState = {
    tuijianData:[],
    yuanqiData:[]
}

export default (state = initialState, action ) => {
    switch (action.type) {

    case 'TUIJIAN':
        var newState = { ...state }
        newState.tuijianData = action.tuijianData
        return newState
    case 'YUANQI':
        var newState1 = { ...state }
        newState1.yuanqiData = action.yuanqiData
        return newState1

    default:
        return state
    }
}
