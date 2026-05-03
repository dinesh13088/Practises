

function SearchForm({city ,setCity,handleSubmit}){
  return(
    <div>
      <input type="text" placeholder="Enter city name" value={city} onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchForm;