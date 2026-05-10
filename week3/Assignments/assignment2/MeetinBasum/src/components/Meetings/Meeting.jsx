import { Outlet ,NavLink, useParams} from "react-router"

export default function Meeting()
{
    let params=useParams();
    const id=params.meetingId;
    return(
       <div>
        <h1>This is meeting page with details</h1>
        <NavLink to={`/meetings/${id}/participants`}>Participants</NavLink>
        <Outlet/>
       </div>
    )
}