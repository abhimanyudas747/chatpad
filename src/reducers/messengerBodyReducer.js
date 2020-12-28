const initialState = {
    activeChatusr: {
        fullName: '',
        userAvatar: '',
        lastseen: ''
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
            
    
        default:
            return state;
    }
}

export default messengerBodyReducer;