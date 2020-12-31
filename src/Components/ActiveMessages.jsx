import {useState, useEffect} from 'react'
import './ActiveMessages.styles.css'
import MessagePrev from './MessagePrev.component'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const ActiveMessages = (props) => {
    const userList = useSelector((state) => state.sidebarReducer.userList)
    const activeMessages = useSelector((state) => state.sidebarReducer.activeMessages)
    

    var prevs
    


    useEffect(() => {

    console.log(prevs)    

    }, [activeMessages])

    if(props.use === "showusers"){
        return (
            <div className="preview-holder">
                {
                    userList.map(prev => <MessagePrev {...prev} />)
                    
                }
            </div>
        )
        
    }
    else{
        return (
            <div className="preview-holder">
                {
                    activeMessages.map(prev => <MessagePrev {...prev} />)
                    
                }
            </div>
        )
    }
    
}





export default ActiveMessages;