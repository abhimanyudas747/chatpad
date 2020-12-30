import {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './newChatComponent.css';
import {Button, Row, Col, Form, Collapse} from 'react-bootstrap'
import {BsSearch, BsChatDots, BsThreeDotsVertical} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'
import {setNewChatRef} from '../actions/sidebarActions'
import ActiveMessages from './ActiveMessages'





const NewChatComponent = (props) => {

    const [searchFocus, setSearchFocus] = useState(false)
    

    const newchat = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setNewChatRef(newchat))
    }, [])


    const handleClose = (e) =>
    {
        newchat.current.style.width="0%";
    }

    return (
        <>
        <div ref={newchat} className="newchatsidebar">
            <div className="newchatmenu-list">
                    <div style={{float: "left", justifyContent: "center", width:"50%", display: "flex", alignItems: "center", height: "100%"}}>
                        <h1 style={{fontSize: "20px", fontWeight: "700", marginTop: "5px"}}>New Chat</h1>
                    </div>
                    <div style={{float: "right", display: "flex", alignItems: "center", height: "100%"}}>
                        <ImCancelCircle onClick={handleClose} className="newchatcancelbtn" size={35}/>
                    </div>
            </div>
            
                
            <div className="newchatsearch-holder">
                <div className="newchatsearchbar">
                    <Row>
                        <Col sm={1}>
                            <MdCancel hidden={!searchFocus} />
                            <BsSearch hidden={searchFocus} />
                        </Col>
                        <Col sm={10}>
                            <input type="text" onFocus={() => {setSearchFocus(true)}} onBlur={() => {setSearchFocus(false)}} style={{width: "100%", "background": "none", border: "none", outline: "none"}} placeholder="Search Users" />
                        </Col>
                    </Row>
                
                </div>
                
            </div>


                    
            <ActiveMessages use="showusers" />
                    
                
            
            
            
        </div>
        </>
    )
}

export default NewChatComponent;