import {useState, useEffect} from 'react'
import './ActiveMessages.styles.css'
import MessagePrev from './MessagePrev.component'
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";

const ActiveMessages = (props) => {
    const state = useSelector((state) => state.sidebarReducer)

    var prevs
    if(props.use === "showusers"){
        prevs = state.userList;
        
    }
    else{
        prevs = state.activeMessages;
    }


    useEffect(() => {

    console.log(prevs)    

    }, [])

    
    return (
        <div className="preview-holder">
            {
                prevs.map(prev => <MessagePrev {...prev} />)
                
            }
        </div>
    )
}





export default ActiveMessages;