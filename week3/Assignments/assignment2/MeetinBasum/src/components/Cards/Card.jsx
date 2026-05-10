import './Card.css'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas)

 function Card({bgcolor,mainTxt,subTxt,icon}){
    return (
        <div className="container">
            <div className='small-container' style={{backgroundColor:bgcolor}}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <p>{mainTxt}</p>
            <p className='sub-text'>{subTxt}</p>

             <button className='card-button' style={{backgroundColor:bgcolor}}>Start Now<FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></button>

        </div>
    )
}
export default Card