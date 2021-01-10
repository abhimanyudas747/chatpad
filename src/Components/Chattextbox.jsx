import {useState, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Chattextbox.styles.css'
import {BiSend} from 'react-icons/bi'
import {sendMessage} from '../actions/Chattextbox.actions'
import {db, auth} from '../firebase'
import firebase from 'firebase/app'

const Chattextbox = (props) =>
{

    const [msg, setMsg] = useState('');
    const activeChatusr = useSelector((state) => state.messengerBodyReducer.activeChatusr)
    const dispatch = useDispatch();
    const textboxref = useRef()
    useEffect(() => {
        textboxref.current.focus()
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        const newmsg = {text: msg,
            sender: auth.currentUser.uid,
            receiver: activeChatusr.uid,
            timestamp: firebase.firestore.Timestamp.now(),
            participants: auth.currentUser.uid+activeChatusr.uid
        }
        if(msg.replace(/\s/g, '').length){
            // dispatch(sendMessage(
            //     newmsg       
            // ))
            setMsg('')
            db.collection('Chats').add(newmsg)
            db.collection('ActiveChats').doc(auth.currentUser.uid+activeChatusr.uid).set({
                receiver: activeChatusr.uid,
                lastmsg: newmsg.text,
                timestamp: newmsg.timestamp,
                sender: auth.currentUser.uid,
                owner: auth.currentUser.uid
            })
            db.collection('ActiveChats').doc(activeChatusr.uid+auth.currentUser.uid).set({
                receiver: auth.currentUser.uid,
                lastmsg: newmsg.text,
                timestamp: newmsg.timestamp,
                sender: activeChatusr.uid,
                owner: auth.currentUser.uid
            })

            
        }
        
    };

    return (
    <div className="chattextbox" >
        <form onSubmit={handleSubmit} style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div className="textbox">
                <input ref={textboxref} autoComplete="off" id="msgtextbox" type="text" value={msg} onChange={(e) => {setMsg(e.target.value)}} placeholder="Type a message" style={{width: "100%", height: "100%", background: "none", outline: "none", border: "none"}}/>
            </div>
            <BiSend onClick={handleSubmit} size={45}  className="send-button" />
        </form>
    </div>)

}


export default Chattextbox;