import {useState, useEffect, useRef} from 'react'
import {useSelector} from 'react-redux'
import './Chatbox.styles.css'
import MsgBox from './msgBox'

const Chatbox = (props) =>
{
    const ele = useRef();
    const chats = useSelector((state) => state.messengerBodyReducer.chats)
    useEffect(() =>
    {
        ele.current.scrollIntoView({behaviour: "smooth"})
        
    })

    
    return (
        <>
    <div className="chatbox" >
        {chats.map((msg, idx) => <MsgBox {...msg} />)}
        {/* <MsgBox text="Hello" owner="mine"/>
        <MsgBox text="Hi" owner="others"/> */}
        <div ref={ele} style={{float: "left"}}></div>
    </div>
    </>)

}


export default Chatbox;