import {useState, useEffect} from 'react';
import './main.styles.css';
import {Row, Col, Button} from 'react-bootstrap'
import Sidebar from './Sidebar';
import MessengerBody from './MessengerBody'


const Main = (props) => {


    return (
        <>
        <div className="main">
            <Sidebar />
            <MessengerBody />
           
           
            
            
        </div>
        </>
    )
}


export default Main;