import {useState, useEffect, useRef} from 'react'
import './Sidebar.styles.css'
import {Button, Row, Col, Form, Collapse} from 'react-bootstrap'
import {BsSearch, BsChatDots, BsThreeDotsVertical} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import {FiMenu} from 'react-icons/fi'
import ActiveMessages from './ActiveMessages'
import {useSelector, useDispatch} from 'react-redux';
import {db, auth} from '../firebase'
import {setUserList, setActiveMessages} from '../actions/sidebarActions'
import {setChats} from '../actions/messagePrev.actions'
import newmsgaudio from '../new_msg_notification.mp3'


const Sidebar = (props) => {
    
    const userAvatar = useSelector((state) => state.appReducer.currentUser.photoURL)
    const userDisplayname = useSelector((state) => state.appReducer.currentUser.displayName)
    const [searchVisible, setSearchVisible] = useState(true)
    const [searchFocus, setSearchFocus] = useState(false)
    const newchatref = useSelector((state) => state.sidebarReducer.newChatcomponentref)
    const newMessageNotification = useRef();
    const dispatcher = useDispatch();
    useEffect(async() => {
        var userlistlocal = Array(0)
        const userlst = await db.collection('Users').get()
        userlst.forEach(
            usr => {if(usr.id != auth.currentUser.uid){
                //console.log(usr.id === auth.currentUser.uid)
                userlistlocal.push({ ...usr.data(), uid: usr.id})
            }}
        )
        dispatcher(setUserList(userlistlocal))

        const unsubscribe = db.collection('ActiveChats').where('sender', '==', auth.currentUser.uid).orderBy('timestamp', 'desc').onSnapshot(actvmsgs => 
        {var activeMessages = Array(0)
        //var play = true;
        actvmsgs.forEach(
            msg => {

                
                let temp = msg.data()
                
                let msgPromise = db.collection('Users').doc(temp.receiver).get().then(receiverSnapshot => receiverSnapshot.data()).then(receiverData => (
                   // console.log(receiverData)
                    {
                    displayName: receiverData.displayName,
                    avatarUrl: receiverData.avatarUrl,
                    lastmsg: temp.lastmsg,
                    timestamp: temp.timestamp.seconds,
                    uid: temp.receiver,
                    owner: temp.owner,
                    lastseen: receiverData.lastseen

                })
                )

                activeMessages.push(msgPromise)
                

                


                
            }
        )
        
        Promise.all(activeMessages).then(activeMessagesArray => {
            dispatcher(setActiveMessages(activeMessagesArray))
            if(activeMessagesArray[0].owner !== auth.currentUser.uid)
                {
                    console.log("HERE")
                    //newMessageNotification.current.play()
                    document.getElementById('notif-sound').play()
                }
        }
        )
        

        
    }
    )

    return () => unsubscribe()

        


    }, [])


    const updateChats = async() => {
        const prevChats = await db.collection('Chats').where('sender' , '==', auth.currentUser.uid).where('receiver', '==', '').orderBy('timestamp').get();
        const chatarray = []
        prevChats.forEach((chat) => chatarray.push(chat.data()))
        dispatcher(setChats(chatarray))
    }


    return (
        <>
        
        <div className="sidebar">
            <div className="menu-list">

                <img className="avatar" src={userAvatar} />
                <div style={{height: "100%", display: "flex",float: "left", alignItems: "center"}}>
                    <h1 style={{fontSize: "16px", fontWeight: "700", marginLeft: "5px"}}>{userDisplayname}</h1>
                </div>
                
                <div className="menus">
                    <div title="Search active chats" onClick={() => {setSearchVisible(!searchVisible)}} className="menu-icons">
                        <BsSearch  size={25}/>
                    </div>
                    <div title="New Chat" onClick={() => {newchatref.current.style.width = "30%"}} className="menu-icons">
                        <BsChatDots  size={25}/>
                    </div>
                    <div  className="menu-icons">
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
            
            <ActiveMessages parent="sidebar" />
        </div>
        </>
    )
}


export default Sidebar;