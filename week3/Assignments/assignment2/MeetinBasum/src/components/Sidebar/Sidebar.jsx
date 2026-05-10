import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'
import { NavLink, useLocation } from 'react-router'
library.add(fas, far)
function Sidebar() {
    const location=useLocation()
    return (
        <div className='sidebar'>
            <div className='sidebar-heading'>
                <FontAwesomeIcon icon="fa-solid fa-people-carry-box" size='lg' />
                <h3>Metting Basum</h3>
            </div>
            <nav className='nav-link'>
                <ul >
                    <li className={location.pathname==='/Dashboard'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-solid fa-house" />
                        <NavLink to="/Dashboard" >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className={location.pathname==='/new-meeting'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-solid fa-play" />
                        <NavLink to="/new-meeting" end>
                            New Meeting
                        </NavLink>
                    </li>
                    <li className={location.pathname=='/join-meeting'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        <NavLink to="/join-meeting" end>
                            Join Meeting
                        </NavLink>
                    </li>
                    <li className={location.pathname==='/calendar'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-regular fa-calendar"  />
                        <NavLink to="/calendar" end>
                            Calendar
                        </NavLink>
                    </li>
                    <li className={location.pathname=='/schedule-meeting'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-regular fa-clock" />
                        <NavLink to="/schedule-meeting" end>
                            Schedule Meeting
                        </NavLink>
                    </li>
                    <li className={location.pathname==='/profile-setting'?'active-li':''}>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                        <NavLink to="/profile-setting" end>
                            Profile Settings
                        </NavLink>
                    </li>

                </ul>

            </nav>
        </div>

    )
}
export default Sidebar