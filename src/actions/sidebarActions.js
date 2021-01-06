export const setNewChatRef = (ref) => ({
    type: "SET_NEWCHAT_REF",
    ref: ref
})


export const setUserList = (userlist) => ({
    type: "SET_USER_LIST",
    userList: userlist
})


export const setActiveMessages = (activeMessages) =>{
    console.log("ACTMSGS")
    console.log(activeMessages)
    return ({
        type: "SET_ACTIVE_MESSAGES",
        activeMessages: activeMessages
    })
}


export const setUserSearchQuery = (query) => {
    return ({
        type: "SET_USERSEARCHQUERY",
        usersearchquery: query
    })
}

export const setChatSearchQuery = (query) => {
    return ({
        type: "SET_CHATSEARCHQUERY",
        chatsearchquery: query
    })
}