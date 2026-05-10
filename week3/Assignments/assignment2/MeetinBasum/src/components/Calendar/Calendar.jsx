import { useSearchParams } from "react-router"

export default function Calendar()
{
    const [searchParams,setSearchParams]=useSearchParams()
    const view=searchParams.get("view")

    return (
        <div>
            <button onClick={()=>setSearchParams({"view":'week'})}>view week</button>
            <button onClick={()=>setSearchParams({view:'months'})}>View Months</button>
            {
                view==='week' && <p>This is week calendar</p>
               
            }
            {
                 view==='months' &&<p>This is month calendar</p>
            }
        </div>
    )
}