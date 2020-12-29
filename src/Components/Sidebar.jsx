import {useState, useEffect} from 'react'
import './Sidebar.styles.css'
import {Button, Row, Col, Form, Collapse} from 'react-bootstrap'
import {BsSearch, BsChatDots, BsThreeDotsVertical} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import ActiveMessages from './ActiveMessages'
import defaultAvatar from '../defaultAvatar.png'
import {useSelector} from 'react-redux';

const Sidebar = (props) => {
    
    const userAvatar = useSelector((state) => state.appReducer.currentUser.photoURL)
    const userDisplayname = useSelector((state) => state.appReducer.currentUser.displayName)
    const [searchVisible, setSearchVisible] = useState(true)
    const [searchFocus, setSearchFocus] = useState(false)
    useEffect(() => {
        console.log(searchVisible)
    })


    return (
        <>
        <div className="sidebar">
            <div className="menu-list">

                <img className="avatar" src={userAvatar} />
                <div style={{height: "100%", display: "flex",float: "left", alignItems: "center"}}>
                    <h1 style={{fontSize: "16px", fontWeight: "700", marginLeft: "5px"}}>{userDisplayname}</h1>
                </div>
                
                <div className="menus">
                    <div className="menu-icons">
                        <BsSearch onClick={() => {setSearchVisible(!searchVisible)}} size={25}/>
                    </div>
                    <div className="menu-icons">
                        <BsChatDots size={25}/>
                    </div>
                    <div className="menu-icons">
                        <BsThreeDotsVertical size={25}/>
                    </div>
                </div>
            </div>
            <Collapse in={!searchVisible}>
                
                    <div className="search-holder">
                        <div className="searchbar">
                            <Row>
                                <Col sm={1}>
                                    <MdCancel hidden={!searchFocus} />
                                    <BsSearch hidden={searchFocus} />
                                </Col>
                                <Col sm={10}>
                                    <input type="text" onFocus={() => {setSearchFocus(true)}} onBlur={() => {setSearchFocus(false)}} style={{width: "100%", "background": "none", border: "none", outline: "none"}} placeholder="Search chats" />
                                </Col>
                            </Row>
                        
                        </div>
                    </div>
                    
                
                    
                
            </Collapse>
            
            <ActiveMessages />
        </div>
        </>
    )
}


export default Sidebar;