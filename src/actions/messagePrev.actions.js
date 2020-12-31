export const setActiveChat = (user) =>{
    return (
        {
            type: "UPDATE_ACTIVECHAT",
            activeChatusr: user
        }
    )
}


export const setChats = (chats) => {
    return ({
        type: "SET_PREVCHATS",
        chats: chats
    })
}