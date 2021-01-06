const initialState = {
    newChatcomponentref: undefined,
    userList: [],
    activeMessages: [
        
    ],
    usersearchquery: "",
    chatsearchquery: ""
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
                ...state,
                newChatcomponentref: undefined,
                userList: [],
                activeMessages: []
            }

        case 'SET_USERSEARCHQUERY':
            return {
                ...state,
                usersearchquery: action.usersearchquery
            }

        case 'SET_CHATSEARCHQUERY':
            return {
                ...state,
                chatsearchquery: action.chatsearchquery
            }
        
        default:
            return state;
    }

}


export default sidebarReducer;