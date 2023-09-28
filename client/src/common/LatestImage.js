import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

function LatestImage() {
    const {latestImage, setLatestImage} = useContext(AppContext)

    useEffect(()=>{
        fetch("http://localhost:3000/latest")
        .then(r => r.json())
        .then(data => setLatestImage(data.image_url))
        .catch(error => console.error(error))
    }, [latestImage])
    


  return (
    <div>
        <img src={latestImage} alt="latestImage" className='latest-image' />
    </div>
  )
}

export default LatestImage