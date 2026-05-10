
import './MeetingCard.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router'
library.add(fas)
export default function MeetingCard({meetingTitle,host,bgcolor,meetingId}){
    let Navigate=useNavigate()
    return(
       <div className='meeting-card-container'>

        <div className='meeting-card-small-container' style={{backgroundColor:bgcolor}}>
             <FontAwesomeIcon icon='fa-solid fa-user-group' />
        </div>
        <div className='meeting-details'>
            <h6>{meetingTitle}</h6>
            <p>{host}</p>
        </div>
        <div className='join-details'>
            <p>Today ,10:00 AM - 11:00 AM</p>
            <button className='meeting-card-button' style={{backgroundColor:bgcolor}} onClick={()=>Navigate(`/meetings/${meetingId}`)}>Join</button>

        </div>
    
       </div>
    )

}