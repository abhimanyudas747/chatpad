import {useState, useEffect} from 'react';
import './MessagePrev.styles.css';
import {Row, Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {setActiveChat} from '../actions/messagePrev.actions'

const MessagePrev = (props) => {

    const dispatch = useDispatch();


    return (
        <>
        <div onClick={() => dispatch(setActiveChat(props))} className="message-prev">
            <Row style={{height: "100%"}}>
                <Col sm={2}>
                    <img src={props.avatar_url} className="avatar-img" />
                </Col>
                <Col sm={10}>
                    <Row>
                        <Col sm={8} style={{fontWeight: 500}}>
                            {props.fullname}
                        </Col>
                        <Col sm={4}>
                            <div style={{float: "right"}}>
                                {props.timestamp}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            {props.lastmsg}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        </>
    )

}


export default MessagePrev;