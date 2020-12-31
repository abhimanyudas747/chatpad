const initialState = {
    activeChatusr: {
        displayName: '',
        avatarUrl: '',
        lastseen: '',
        uid: ''
    },
    chats: []
}

const messengerBodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ACTIVECHAT":
            return {
                ...state,
                activeChatusr: action.activeChatusr
            }

        case "UPDATE_CHATS":
            let newChats = [...state.chats];
            newChats.push(action.message)
            return {
                ...state,
                chats: newChats
            }

        case "SET_PREVCHATS":
            return {
                ...state,
                chats: action.chats
            }

        case "CLEAR_ALL_STATES":
            return {
                activeChatusr: {},
                chats: []
            }
            
    
        default:
            return state;
    }
}

export default messengerBodyReducer;