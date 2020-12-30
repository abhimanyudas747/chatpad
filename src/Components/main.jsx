import {useState, useEffect} from 'react';
import './main.styles.css';
import {Row, Col, Button} from 'react-bootstrap'
import Sidebar from './Sidebar';
import MessengerBody from './MessengerBody'
import NewChatComponent from './newChatComponent'


const Main = (props) => {


    return (
        <>
        <div className="main">
            <Sidebar />
            <NewChatComponent />
            <MessengerBody />
           
           
            
            
        </div>
        </>
    )
}


export default Main;