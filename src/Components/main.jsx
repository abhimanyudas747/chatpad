import {useState, useEffect} from 'react';
import './main.styles.css';
import {Row, Col, Button} from 'react-bootstrap'
import Sidebar from './Sidebar';
import MessengerBody from './MessengerBody'
import NewChatComponent from './newChatComponent'
import {useDispatch, useSelector} from 'react-redux'
import {clearallstates} from '../actions/Main.actions'
import DefaultBanner from './defaultBanner'
import {Zoom} from 'react-reveal'
import newmsgaudio from '../new_msg_notification.mp3'



const Main = (props) => {

    const activeChatusr = useSelector((state) => state.messengerBodyReducer.activeChatusr)

    return (
        <>
        <audio id="notif-sound">
            <source src={newmsgaudio}></source>
        </audio>
        <Zoom>
        <div className="main">
            <Sidebar />
            <NewChatComponent />
            {

            activeChatusr.uid ? 
            <MessengerBody />
            :
            <DefaultBanner />
           
           }
            
            
        </div>
        </Zoom>
        </>
    )
}


export default Main;