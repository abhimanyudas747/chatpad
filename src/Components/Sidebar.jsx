import {useState, useEffect} from 'react'
import './Sidebar.styles.css'
import {Button, Row, Col, Form, Collapse} from 'react-bootstrap'
import {BsSearch, BsChatDots, BsThreeDotsVertical} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import ActiveMessages from './ActiveMessages'

const Sidebar = (props) => {
    const [userAvatar, setUserAvatar] = useState("https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png")
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