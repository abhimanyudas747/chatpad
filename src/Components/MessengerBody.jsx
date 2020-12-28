import {useState, useEffect} from 'react'
import './MessengerBody.styles.css'
import Header from './Header'
import Chatbox from './Chatbox.jsx'
import Chattextbox from './Chattextbox'

const MessengerBody = (props) => {
    return (
        <>
        <div className="messengerbody">
            <Header />
            <Chatbox />
            <Chattextbox />
        </div>
        </>
    )
}


export default MessengerBody;