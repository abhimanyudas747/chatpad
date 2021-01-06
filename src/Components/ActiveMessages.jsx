import {useState, useEffect} from 'react'
import './ActiveMessages.styles.css'
import MessagePrev from './MessagePrev.component'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const ActiveMessages = (props) => {
    const userList = useSelector((state) => state.sidebarReducer.userList)
    const activeMessages = useSelector((state) => state.sidebarReducer.activeMessages)
    const usersearchquery = useSelector((state) => state.sidebarReducer.usersearchquery)
    const chatsearchquery = useSelector((state) => state.sidebarReducer.chatsearchquery)
    const [filteredUserList, setFilteredUserList] = useState(userList)
    const [filteredChatList, setFilteredChatList] = useState(activeMessages)
    
    
    
    

    //var prevs
    


    useEffect(() => {

        setFilteredUserList(userList.filter(user => user.displayName.toLowerCase().includes(usersearchquery.toLowerCase())))  

    }, [usersearchquery, userList])


    useEffect(() => {
        setFilteredChatList(activeMessages.filter(msg => msg.displayName.toLowerCase().includes(chatsearchquery.toLowerCase())))
    }, [chatsearchquery, activeMessages])




    if(props.use === "showusers"){
        return (
            <div className="preview-holder">
                {
                    // userList.map(prev => <MessagePrev {...prev} />)
                    filteredUserList.map(prev => <MessagePrev {...prev} />)
                    
                }
            </div>
        )
        
    }
    else{
        return (
            <div className="preview-holder">
                {
                    // activeMessages.map(prev => <MessagePrev {...prev} />)
                   // activeMessages[0].lastmsg
                   filteredChatList.map(prev => <MessagePrev {...prev} />) 
                }
            </div>
        )
    }
    
}





export default ActiveMessages;