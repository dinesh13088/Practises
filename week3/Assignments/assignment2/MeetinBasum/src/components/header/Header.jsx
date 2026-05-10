import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'
library.add(fas, far)
function Header() {
    const date = new Date()
    const days = [
        "sunday",
        "monday",
        "Tuesday",
        "Wednesday",
        "Thrusday",
        "Friday",
        "Saturday"
    ]
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const month = months[date.getMonth()]
    const day = days[date.getDay()]
    const year = date.getFullYear()
    const time = date.toLocaleTimeString()
    console.log(time)

    return (
        <header className="header">
            <FontAwesomeIcon icon="fa-regular fa-calendar-days" className='icons' />
            <p>{day}, {month}, {year}</p>

            <span className="divider">|</span>

            <FontAwesomeIcon icon="fa-regular fa-clock" className='icons'/>
            <p>{time}</p>

            <FontAwesomeIcon icon="fa-solid fa-bell" className='icons' />
            <FontAwesomeIcon icon="fa-solid fa-user" className='icons' />
            <p>Dinesh Tamang</p>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" className='icons' />

        </header>
    );
}
export default Header