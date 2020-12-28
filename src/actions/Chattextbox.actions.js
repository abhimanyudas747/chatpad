export const sendMessage = (msg) =>
{
    return {
        type: "UPDATE_CHATS",
        message: msg
    }
}