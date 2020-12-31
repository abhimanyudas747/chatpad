import {useState, useEffect} from 'react';
import "./msgBox.styles.css";
import {auth} from '../firebase'

const MsgBox = (props) =>{

    const boxColor = (uid) => {
        if(uid === auth.currentUser.uid){
            return 'lightblue'
        }
        else{
            return 'lightgreen'
        }
    }
    const pos = (uid) => {
        if(uid === auth.currentUser.uid){
            return 'right'
        }
        else{
            return 'left'
        }
    }
    

    return (
        <div >
            <div className="msgbox" style={{backgroundColor: boxColor(props.sender), float: pos(props.sender)}}>
                {props.text}
                <div className="timestamp">
                    16:32
                </div>
            </div>
           
           
            
        </div>
    )
}


export default MsgBox;