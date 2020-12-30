const initialState = {
    newChatcomponentref: undefined,
    userList: [],
    activeMessages: []
}


const sidebarReducer = (state = initialState, action) => {

    switch(action.type){
        case 'SET_NEWCHAT_REF':
            return {
                ...state,
                newChatcomponentref: action.ref
            }

        case 'SET_USER_LIST':
            return {
                ...state,
                userList: action.userList
            }
        
        default:
            return state;
    }

}


export default sidebarReducer;