export const setActiveChat = (user) =>{
    return (
        {
            type: "UPDATE_ACTIVECHAT",
            activeChatusr: {
                fullName: user.fullname,
                userAvatar: user.avatar_url,
                lastseen: "last seen today at 16:32"
            }
        }
    )
}