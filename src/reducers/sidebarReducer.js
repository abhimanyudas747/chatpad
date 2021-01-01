const initialState = {
    newChatcomponentref: undefined,
    userList: [],
    activeMessages: [
        {
            lastmsg: "LOL"
        }
    ]
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

        case 'SET_ACTIVE_MESSAGES':
            return {
                ...state,
                activeMessages: action.activeMessages
            }

        case 'CLEAR_ALL_STATES':
            return {
                newChatcomponentref: undefined,
                userList: [],
                activeMessages: []
            }
        
        default:
            return state;
    }

}


export default sidebarReducer;