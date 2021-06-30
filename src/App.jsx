import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import Map from './components/Map/Map'
import Message from './components/Message/Message'
import fetchData from "../src/services/IP"

function App() {
  const [ip, setIp] = useState("")
  const [isSubmited,setIsSubmited] = useState(false)
  const [validIP, setValidIP] = useState(true)
  const [data, setData] = useState({
    ip:"",
    location:"",
    timezone:"",
    isp:"",
    lat:"",
    lng:"",
  })
  


  const handleSubmit=(e) =>{
    e.preventDefault()
    if(ip) setIsSubmited(!isSubmited)
    setValidIP(false)
 
  }

  const handleChange=(e)=> setIp(e.target.value)


    useEffect(async () =>{
      
        try {
          const data = await fetchData(ip)
          setData({
            ip: data.ip,
            location: data.location.city,
            timezone: data.location.timezone,
            isp: data.isp,
            lat: data.location.lat,
            lng: data.location.lng

          })
          setValidIP(true)
        } catch (error) {
          setValidIP(false)
        }
       
      

    },[isSubmited])



  
  return (
    <div className="App">
     <Header handleSubmit={handleSubmit} inputValue={ip} handleChange={handleChange}/>
     {validIP? <><Results ip={data.ip} location={data.location} timezone={data.timezone} isp={data.isp}/>
     <Map position={[data.lat, data.lng]}/></>: <Message/>}
      
  
    </div>
  )
}

export default App
