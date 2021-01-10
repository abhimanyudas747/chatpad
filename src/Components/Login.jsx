import {useState, useEffect, useRef} from 'react'
import './Login.styles.css'
import {Form, Button, Image} from 'react-bootstrap'
import {auth, provider, storageRef} from '../firebase'
import {setUser} from '../actions/Login.actions'
import { useDispatch } from 'react-redux'
import {db} from '../firebase'
import {Fade} from 'react-reveal'

const Login = (props) => {
    
    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //       //user signed in
    //       
    //       console.log(user)
    //     })
        
    //     return unsubscribe();
    //   }, [])
    
    const dispatch = useDispatch();
    const uploadbtn = useRef();
    const [show, setShow] = useState('login')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('https://firebasestorage.googleapis.com/v0/b/chatpad-18c6a.appspot.com/o/default%2Favatar%2Fdefault-avatar.png?alt=media&token=40a6eaee-f4b5-4547-ad1f-ee9b7e99d81d')
    
    useEffect(() => {document.getElementById("emaillogin").focus()},[])
    

    const handleSubmitlogin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, pwd)
        .catch((error) => alert(error.message))
        

    }

    const signInWithGoogle = (e) => {
        auth.signInWithPopup(provider).then(res => res.user).then(user => {
            db.collection('Users').doc(user.uid).set({
                email: user.email,
                displayName: user.displayName,
                avatarUrl: user.photoURL
            })
        })
    }

    const handleSubmitsignup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, pwd)
        .then((res) =>
            {
                if(uploadbtn.current.value == ''){
                    auth.currentUser.updateProfile({
                        displayName: name,
                        photoURL: avatar,
                        lastseen: "Online"
                    })
                    .then(() => {
                        dispatch(setUser(auth.currentUser));
                        db.collection('Users').doc(auth.currentUser.uid).set({
                            email: auth.currentUser.email,
                            displayName: auth.currentUser.displayName,
                            avatarUrl: auth.currentUser.photoURL
                        })
                    })


                    
                    
                }
                else{
                    storageRef.child(res.user.uid+'/avatar/'+uploadbtn.current.files[0].name).put(uploadbtn.current.files[0])
                    .then(
                    (snapshot) => {
                        snapshot.ref.getDownloadURL().then((avatarUrl) => {
                            auth.currentUser.updateProfile({
                                displayName: name,
                                photoURL: avatarUrl
                            })
                            .then(() => {
                                dispatch(setUser(auth.currentUser));
                                db.collection('Users').doc(auth.currentUser.uid).set({
                                    email: auth.currentUser.email,
                                    displayName: auth.currentUser.displayName,
                                    avatarUrl: auth.currentUser.photoURL
                                })
                            })
                    }

                )
                
            })
        }
                
                
                

        }
        )
        .catch((error) => alert(error.message))
    }
    

    return (
    <Fade down>
    <div className="login">
        
        <div className="outer-div">
            <div style={{textAlign: "center", marginTop: "5px"}}>
                <h1>Welcome!</h1>
            </div>
            <br></br>
            
                <div hidden={show !== 'login'} style={{textAlign: "center", width: "100%"}}>
                    <Form onSubmit={handleSubmitlogin} style={{width: "100%", height: "100%"}}>
                        <Form.Control id="emaillogin" type="email" required onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" /><br></br>
                        <Form.Control type="password" required onChange={(e) => {setPwd(e.target.value)}} placeholder="Password" /><br></br>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <Button variant="primary" type="submit" style={{width: "20%", marginRight: "1%"}}>Login</Button>
                            <Button variant="primary" onClick={signInWithGoogle} style={{width: "40%", marginLeft: "1%"}}>Login with Google</Button>
                        </div>
                    </Form>
            
                <p className="signuplink" onClick={() => {setShow('signup')}}>New here? Sign up now.</p>
            </div>
            
            <div hidden={show !== 'signup'} style={{textAlign: "center", width: "100%"}}>
                <Form onSubmit={handleSubmitsignup} style={{width: "100%", height: "100%"}}>
                    <Form.Control type="text" required onChange={(e) => {setName(e.target.value)}} placeholder="Display Name" /><br></br>
                    <Form.Control type="email" required onChange={(e) => {setEmail(e.target.value)}} placeholder="Email" /><br></br>
                    <Form.Control type="password" required onChange={(e) => {setPwd(e.target.value)}} placeholder="Password" /><br></br>
                    <Image src={avatar} height="56px" width="56px" roundedCircle /><br></br>
                    <p onClick={() => {uploadbtn.current.click()}} className="uploadlink">Change Avatar</p>
                    <input ref={uploadbtn} onChange={(e) => {setAvatar(URL.createObjectURL(e.target.files[0]))}} type="file" hidden />
                    <Button type="submit" variant="primary" style={{width: "20%"}}>Signup</Button>
                </Form>
                <p className="signuplink" onClick={() => {setShow('login')}}>Been here before? Login now.</p>
            </div>
        </div>
        

    </div>
    </Fade>
    );
}

export default Login;