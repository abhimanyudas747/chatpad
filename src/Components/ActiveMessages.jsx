import {useState, useEffect} from 'react'
import './ActiveMessages.styles.css'
import MessagePrev from './MessagePrev.component'
import axios from 'axios';

const ActiveMessages = (props) => {
    const [prevs, setPrevs] = useState([])
    useEffect(() => {

        console.log(prevs)
        axios.get('/getmsgprev', {params: {
            user: 'sampleusr'
        }})
        .then(resp => setPrevs(resp.data.msgprevs))
        .catch(err => console.log(err))

    }, [])

    
    return (
        <div className="preview-holder">
            {
                prevs.map(prev => <MessagePrev {...prev} />)
                
            }
        </div>
    )
}





export default ActiveMessages;