const initialState = {
    currentUser: {}
}


const appReducer = (state=initialState, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                currentUser: action.user
            }

        case "CLEAR_ALL_STATES":
            return {
                currentUser: {}
            }
        default:
            return state
    }
}

export default appReducer;