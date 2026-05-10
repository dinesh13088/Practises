import './Dashboard.css'
import Card from '../Cards/Card.jsx'
import MeetingCard from '../Cards/Meeting-card.jsx'

function Dashboard() {

    return (
        <main className='main'>
            <h3>Good Morning, Dinesh Tamang</h3>
            <span className='meeting-details-text'>Here's what's happening with you meetings today</span>
            <div className='Cards'>
                <Card bgcolor='rgb(78,70,221)' mainTxt='Start New Meeting' subTxt='Start an instant meeting'icon='fa-solid fa-video'/>
                <Card bgcolor='rgb(78,161,85)' mainTxt='Join with code' subTxt='Join a meeting with code' icon='fa-solid fa-user-group'/>
                <Card bgcolor='rgb(232,123,53)' mainTxt='Schedule Meeting' subTxt='Plan your meeting'icon='fa-solid fa-calendar-week' />
                     
            </div>
            <h4>Upcomming Meetings</h4>
            <div className='dashboard-meeting-card-container'>
                <MeetingCard meetingTitle={'Project Planning Meeting'} host={'Host: Dinesh Tamang'} bgcolor={'rgb(78,70,221)' } meetingId='101'/>
                <MeetingCard meetingTitle={'Marketing Strategy'} host={'Host: Kalu Bhai'} bgcolor={'rgb(78,161,85)'} meetingId={'102'}/>
                <MeetingCard meetingTitle={'Team Sync-Up'} host={'Host: Dev up'} bgcolor={'rgb(232,123,53)'} meetingId={'103'}/>            
            </div>
           

        </main>
    )

}
export default Dashboard
