import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Chattextbox.styles.css'
import {BiSend} from 'react-icons/bi'
import {sendMessage} from '../actions/Chattextbox.actions'

const Chattextbox = (props) =>
{

    const [msg, setMsg] = useState('');
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();
        if(msg.replace(/\s/g, '').length){
            dispatch(sendMessage(
                {text: msg,
                owner: "mine"}
            ))
            setMsg('')
            
        }
        
    };

    return (
    <div className="chattextbox" >
        <form onSubmit={handleSubmit} style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
            <div className="textbox">
                <input type="text" value={msg} onChange={(e) => {setMsg(e.target.value)}} placeholder="Type a message" style={{width: "100%", height: "100%", background: "none", outline: "none", border: "none"}}/>
            </div>
            <BiSend onClick={handleSubmit} size={45} className="send-button" />
        </form>
    </div>)

}


export default Chattextbox;