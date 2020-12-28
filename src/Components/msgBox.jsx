import {useState, useEffect} from 'react';
import "./msgBox.styles.css";

const MsgBox = (props) =>{

    const boxColor = {
        'mine': 'lightblue',
        'others': 'lightgray'
    }
    const pos = {
        'mine': 'right',
        'others': 'left'
    }

    return (
        <div >
            <div className="msgbox" style={{backgroundColor: boxColor[props.owner], float: pos[props.owner]}}>
                {props.text}
                <div className="timestamp">
                    16:32
                </div>
            </div>
           
           
            
        </div>
    )
}


export default MsgBox;