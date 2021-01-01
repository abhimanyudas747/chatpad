import {useState, useEffect} from 'react';
import './MessagePrev.styles.css';
import {Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {setActiveChat, setChats} from '../actions/messagePrev.actions'
import {db, auth} from '../firebase'
import {utcSecsToLocalTime} from '../utils'

const MessagePrev = (props) => {

    const dispatch = useDispatch();

    const handleSubmit = async() => {
        dispatch(setActiveChat(props))
        // console.log(props)
        // const prevChats = await db.collection('Chats').where('sender' , '==', auth.currentUser.uid).where('receiver', '==', props.uid).orderBy('timestamp').get();
        // const chatarray = []
        // prevChats.forEach((chat) => chatarray.push(chat.data()))
        // dispatch(setChats(chatarray))
    }
    

    return (
        <>
        <div onClick={handleSubmit} className="message-prev">
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
                                {utcSecsToLocalTime(props.timestamp).toLocaleTimeString()}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            {props.lastmsg}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    )

}


export default MessagePrev;