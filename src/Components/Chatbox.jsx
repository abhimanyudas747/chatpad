import {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Chatbox.styles.css'
import MsgBox from './msgBox'
import {db, auth} from '../firebase'
import {sendMessage} from '../actions/Chattextbox.actions'

const Chatbox = (props) =>
{
    const ele = useRef();
    const chats = useSelector((state) => state.messengerBodyReducer.chats)
    const activeChatusr = useSelector((state) => state.messengerBodyReducer.activeChatusr)
    const dispatch = useDispatch()
    useEffect(() =>
    {
        ele.current.scrollIntoView({behaviour: "smooth"})
        
    })

    var unsubscribe = () => {}


    useEffect(()=> {
        if(activeChatusr.uid){
            console.log(activeChatusr)

            unsubscribe();

            unsubscribe = db.collection('Chats').where('participants', 'in', [activeChatusr.uid+auth.currentUser.uid, auth.currentUser.uid+activeChatusr.uid])
            .orderBy('timestamp').onSnapshot((querySnapshot) => {
                querySnapshot.docChanges().forEach(chat => {dispatch(sendMessage(chat.doc.data()))})
            })
        }


        return () => unsubscribe()



    }, [activeChatusr])



    
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