const initialState = {
    currentUser: undefined
}


const appReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                currentUser: action.user
            }
        default:
            return state
    }
}

export default appReducer;