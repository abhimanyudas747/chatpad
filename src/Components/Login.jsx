import {useState, useEffect} from 'react'
import './Login.styles.css'
import {Form, Button} from 'react-bootstrap'
import {auth, provider} from '../firebase'
import {setUser} from '../actions/Login.actions'

const Login = (props) => {
    
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //       //user signed in
    //       
    //       console.log(user)
    //     })
        
    //     return unsubscribe();
    //   }, [])
    
    

    const [show, setShow] = useState('login')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmitlogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pwd)
        .catch((error) => alert(error.message))
        

    }

    const handleSubmitsignup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pwd)
        .catch((error) => alert(error.message))
    }
    

    return (
    <div className="login">
        <div class="outer-div">
            <div style={{textAlign: "center", marginTop: "5px"}}>
                <h1>Welcome!</h1>
            </div>
            <br></br>
            
            <div hidden={show !== 'login'} style={{textAlign: "center", width: "100%"}}>
                <Form onSubmit={handleSubmitlogin} style={{width: "100%", height: "100%"}}>
                    <Form.Control type="email" required onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" /><br></br>
                    <Form.Control type="password" required onChange={(e) => {setPwd(e.target.value)}} placeholder="Password" /><br></br>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <Button variant="primary" type="submit" style={{width: "20%", marginRight: "1%"}}>Login</Button>
                        <Button variant="primary" onClick={() => {auth.signInWithPopup(provider)}} style={{width: "40%", marginLeft: "1%"}}>Login with Google</Button>
                    </div>
                </Form>
            
                <p className="signuplink" onClick={() => {setShow('signup')}}>New here? Sign up now.</p>
            </div>
            <div hidden={show !== 'signup'} style={{textAlign: "center", width: "100%"}}>
                <Form onSubmit={handleSubmitsignup} style={{width: "100%", height: "100%"}}>
                    <Form.Control type="email" required onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" /><br></br>
                    <Form.Control type="password" required onChange={(e) => {setPwd(e.target.value)}} placeholder="Password" /><br></br>
                    <Button type="submit" variant="primary" style={{width: "20%"}}>Signup</Button>
                </Form>
                <p className="signuplink" onClick={() => {setShow('login')}}>Been here before? Login now.</p>
            </div>
        </div>

    </div>
    );
}

export default Login;