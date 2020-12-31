import {auth, db} from '../firebase';

export const sendMessage = (msg) =>
{
    

    return {
        type: "UPDATE_CHATS",
        message: msg
    }
}


// export const updateMsgStatus = (status) => {

//     return {
//         type: "UPDATE"
//     }
// }