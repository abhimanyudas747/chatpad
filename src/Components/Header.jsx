import {useState, useEffect} from 'react';
import './Header.styles.css';
import {Row, Col} from 'react-bootstrap';
import {connect, useSelector, useDispatch} from 'react-redux';
import {BiLogOutCircle} from 'react-icons/bi'
import {auth} from '../firebase'
import {setUser} from '../actions/Login.actions'

const Header = (props) => {
    const dispatch = useDispatch();
    const fullName = useSelector((state) => state.messengerBodyReducer.activeChatusr.displayName)
    const userAvatar = useSelector((state) => state.messengerBodyReducer.activeChatusr.avatarUrl)
    const lastseen = useSelector((state) => state.messengerBodyReducer.activeChatusr.lastseen)
    const logout = () => {
        auth.signOut().then(
            () => dispatch(setUser({})),
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
                                {lastseen}
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