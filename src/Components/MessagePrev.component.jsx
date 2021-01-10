import {useState, useEffect} from 'react';
import './MessagePrev.styles.css';
import {Row, Col} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveChat, setChats} from '../actions/messagePrev.actions'
import {db, auth} from '../firebase'
import {utcSecsToLocalTime} from '../utils'
import firebase from 'firebase/app'


const MessagePrev = (props) => {

    const dispatch = useDispatch();
    //console.log(firebase.firestore.Timestamp.now().seconds)
    const timediff = firebase.firestore.Timestamp.now().seconds - props.timestamp
    const [timestamp, setTimestamp] = useState()
    const [bg, setBg] = useState('rgb(240, 255, 255, 0.5)');
    const activeChatusr = useSelector((state) => state.messengerBodyReducer.activeChatusr)

    useEffect(() => {
        if(timediff > 86400)
    {
        setTimestamp(utcSecsToLocalTime(props.timestamp).toString().slice(0,3))
    }
    else if(timediff > 604800)
    {
        setTimestamp(utcSecsToLocalTime(props.timestamp).toString().slice(4,14))
    }
    else{
        setTimestamp(utcSecsToLocalTime(props.timestamp).toLocaleTimeString())
    }
    }, [])


    useEffect(() => {
        if(activeChatusr.uid === props.uid){
            setBg('rgb(240, 255, 255, 0.8)')
        }
        else{
            setBg('rgb(240, 255, 255, 0.5)')
        }
    }, [activeChatusr])

    
    const handleSubmit = async() => {
        dispatch(setActiveChat(props))
        dispatch(setChats([]))
        if(document.getElementById("msgtextbox"))
        {
        document.getElementById("msgtextbox").focus()
        }
        // console.log(props)
        // const prevChats = await db.collection('Chats').where('sender' , '==', auth.currentUser.uid).where('receiver', '==', props.uid).orderBy('timestamp').get();
        // const chatarray = []
        // prevChats.forEach((chat) => chatarray.push(chat.data()))
        // dispatch(setChats(chatarray))
    }
    

    return (
        <>
        <div onClick={handleSubmit} className="message-prev" style={{backgroundColor: bg}}>
            <Row style={{height: "100%"}}>
                <Col sm={2}>
                    <img src={props.avatarUrl} className="avatar-img" />
                </Col>
                <Col sm={10}>
                    <Row>
                        <Col sm={8} style={{fontWeight: 500}}>
                            {props.displayName}
                        </Col>
                        <Col sm={4}>
                            <div style={{float: "right"}}>
                                {
                                    props.timestamp ? 
                                // utcSecsToLocalTime(props.timestamp).toLocaleTimeString()
                                timestamp
                                :
                                undefined
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <div className="textholder">
                            {props.lastmsg}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    )

}


export default MessagePrev;