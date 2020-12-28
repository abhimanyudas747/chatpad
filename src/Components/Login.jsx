import {useState, useEffect} from 'react'
import './Login.styles.css'
import {Form, Button} from 'react-bootstrap'

const Login = (props) => {

    const [show, setShow] = useState('login')
    

    return (
    <div className="login">
        <div class="outer-div">
            <div style={{textAlign: "center", marginTop: "5px"}}>
                <h1>Welcome!</h1>
            </div>
            <br></br>
            
            <div hidden={show !== 'login'} style={{textAlign: "center", width: "100%"}}>
                <Form style={{width: "100%", height: "100%"}}>
                    <Form.Control type="email" placeholder="Email" /><br></br>
                    <Form.Control type="password" placeholder="Password" /><br></br>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Button variant="primary" style={{width: "20%", marginRight: "1%"}}>Login</Button>
                        <Button variant="primary" style={{width: "40%", marginLeft: "1%"}}>Login with Google</Button>
                    </div>
                </Form>
            
                <p className="signuplink" onClick={() => {setShow('signup')}}>New here? Sign up now.</p>
            </div>
            <div hidden={show !== 'signup'} style={{textAlign: "center", width: "100%"}}>
                <Form style={{width: "100%", height: "100%"}}>
                    <Form.Control type="email" placeholder="Email" /><br></br>
                    <Form.Control type="password" placeholder="Password" /><br></br>
                    <Button variant="primary" style={{width: "20%"}}>Signup</Button>
                </Form>
                <p className="signuplink" onClick={() => {setShow('login')}}>Been here before? Login now.</p>
            </div>
        </div>

    </div>
    );
}

export default Login;