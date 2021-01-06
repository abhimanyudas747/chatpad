import './ChangeAvatar.styles.css'
import {useState, useRef} from 'react'
import {Image, Button} from 'react-bootstrap'
import {db, auth, storageRef} from '../firebase'
import {useDispatch} from 'react-redux'
import {setUser} from '../actions/Login.actions'
import {Zoom} from 'react-reveal'

const ChangeAvatar = (props) => {
    const dispatch = useDispatch()
    const [avatar, setAvatar] = useState(props.userAvatar)
    const uploadbtn = useRef();
    const handleExit = (e) => {
        if(e.target.id === "changeavatar-overlay")
        {
            props.setShow(true)
        }
    }

    const handleSubmit = () => {
        if(uploadbtn.current.value !== '')
        {
        storageRef.child(auth.currentUser.uid+'/avatar/'+uploadbtn.current.files[0].name).put(uploadbtn.current.files[0])
                    .then(
                    (snapshot) => {
                        snapshot.ref.getDownloadURL().then((avatarUrl) => {
                            auth.currentUser.updateProfile({
                                photoURL: avatarUrl
                            })
                            .then(() => {
                                dispatch(setUser(auth.currentUser));
                                db.collection('Users').doc(auth.currentUser.uid).update({
                                    avatarUrl: auth.currentUser.photoURL
                                })
                                uploadbtn.current.value = ""
                            })
                    }

                )
                
            })

            props.setShow(true)
        }
        else{
            alert("Please select a new avatar")
        }
    }



    return (
        <div onClick={handleExit} hidden={props.hidden} id="changeavatar-overlay">
            <Zoom>
            <div className="changeavatar">
                <div style={{textAlign: "center"}}>
                    <Image src={avatar} height="56px" width="56px" roundedCircle /><br></br>
                    <p onClick={() => {uploadbtn.current.click()}} className="uploadlink">Change Avatar</p>
                    <input ref={uploadbtn} onChange={(e) => {setAvatar(URL.createObjectURL(e.target.files[0]))}} type="file" hidden />
                    <Button onClick={handleSubmit} variant="primary" style={{width: "100%"}}>Save</Button>
                </div>
            </div>
            </Zoom> 
        </div>

    )
}


export default ChangeAvatar;