import React, { useEffect, useState } from 'react'
import Skeleton from './Skeleton'
import TourPlace from './TourPlace'
import ForkMeOnGithubRepo from './ForkMeOnGithub'

const App = () => {
  const [place,setPlace] =useState([])
  const [ loading, setLoading ] = useState(true)

  const fetchPlaces = async ()=>{
    setLoading(true)
    try {
      const res = await fetch('http://localhost:3333/places')
      const data = await res.json()
      setLoading(false)
      setPlace(data)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      fetchPlaces()
    },800)
    return () => clearTimeout(timeout);
  },[])
  
  const filterPlaces =(id)=>{
    const items = place.filter((place)=>
      place.id !== id
    )
    setPlace(items)
  }
   if(loading){
     return (
       <Skeleton/>
     )
   }
  
  return (
    <div>
      <ForkMeOnGithubRepo/>
       <TourPlace 
            place={place}
            filterPlaces={filterPlaces}
            fetchPlaces={fetchPlaces}
            />
    </div>
  )
}

export default App
