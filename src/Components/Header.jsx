import {useState, useEffect} from 'react';
import './Header.styles.css';
import {Row, Col} from 'react-bootstrap';
import {connect, useSelector, useDispatch} from 'react-redux';
import {BiLogOutCircle} from 'react-icons/bi'
import {auth, db} from '../firebase'
import {setUser} from '../actions/Login.actions'
import {utcSecsToLocalTime} from '../utils'
import firebase from 'firebase/app'

const Header = (props) => {
    const dispatch = useDispatch();
    const activeChatusr = useSelector((state) => state.messengerBodyReducer.activeChatusr)
    const fullName = activeChatusr.displayName
    const userAvatar = activeChatusr.avatarUrl
    //const lastseen = activeChatusr.lastseen
    const [trueLastSeen, setTrueLastSeen] = useState('')

    var unsubscribe = () => {}



    useEffect(() => {

        console.log(activeChatusr)
        // if(activeChatusr.uid)
        // {
        // db.collection('Users').doc(activeChatusr.uid).get().then(snapshot => snapshot.data())
        // .then(receiverData => {
        //     if(receiverData.lastseen === "Online"){
        //         setTrueLastSeen("Online")
        //     }
        //     else{
        //         setTrueLastSeen("last seen on "+utcSecsToLocalTime(receiverData.lastseen).toString().slice(0,25))
        //     }
        // })
        // }


        unsubscribe();
        unsubscribe = db.collection('Users').doc(activeChatusr.uid).onSnapshot(newSnapshot => {
            let lastseen = newSnapshot.data().lastseen
            if(lastseen === "Online"){
                        setTrueLastSeen("Online")
                    }
                    else{
                        setTrueLastSeen("last seen on "+utcSecsToLocalTime(lastseen.seconds).toString().slice(0,25))
                    }
            }
        )




        // if(activeChatusr.lastseen)
        // {
        // if(lastseen === "Online"){
        //             setTrueLastSeen("Online")
        //         }
        //         else{
        //             setTrueLastSeen("last seen on "+utcSecsToLocalTime(lastseen.seconds).toString().slice(0,25))
        //         }
        // }


        return () => unsubscribe()

    }, [activeChatusr])


    const logout = async() => {
        await db.collection('Users').doc(auth.currentUser.uid).update({lastseen: firebase.firestore.Timestamp.now()})
        auth.signOut().then(
            () => {
                dispatch(setUser({}))
                
            },
            () => alert('Logout failed')
        )
    }


    return (
        <>
            <div className="header">
                <Row style={{height: "100%"}}>
                    <Col sm={1} style={{display: 'flex', alignItems: 'center'}}>
                        <img src={userAvatar} className="useravatar" />
                    </Col>
                    <Col sm={6} >
                        <Row>
                            <Col sm={12} style={{fontWeight: "800", fontSize: "16px"}}>
                                {fullName}
                            </Col>
                            <Col sm={12}>
                                {trueLastSeen}
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col sm={5} >
                        <BiLogOutCircle onClick={logout} className="logout-btn" style={{float: "right", marginTop: "3%", marginRight: "2%"}} size={35} />
                    </Col>
                </Row>
                
            </div>
        </>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         fullName: state.fullName
//     }
// }
export default Header;