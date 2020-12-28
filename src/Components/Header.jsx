import {useState, useEffect} from 'react';
import './Header.styles.css';
import {Row, Col} from 'react-bootstrap';
import {connect, useSelector, useDispatch} from 'react-redux';
import {BiLogOutCircle} from 'react-icons/bi'

const Header = (props) => {
    const fullName = useSelector((state) => state.messengerBodyReducer.activeChatusr.fullName)
    const userAvatar = useSelector((state) => state.messengerBodyReducer.activeChatusr.userAvatar)
    const lastseen = useSelector((state) => state.messengerBodyReducer.activeChatusr.lastseen)
    

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
                        <BiLogOutCircle className="logout-btn" style={{float: "right", marginTop: "3%", marginRight: "2%"}} size={35} />
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