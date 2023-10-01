import React, { useContext } from 'react'
import { AppContext } from '../App'

function FileForm() {

   
    const { latestImage, setLatestImage } = useContext(AppContext)

    function handleSubmit(e){
        e.preventDefault()
        const data = new FormData()

        data.append("post[title]", e.target.title.value)
        data.append("post[image]", e.target.image.files[0])

        submitToApi(data)
        
    }
    function submitToApi(data){
        fetch("http://localhost:3000/posts", {
            method:"POST",
            body: data
        })
        .then(r => r.json())
        .then((data) => {
            setLatestImage(data.image_url)
            console.log(data)
        })
        .catch((error) => console.error(error))

    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Haha Upload iMAGE</h1>
            <label htmlFor="title">title</label>
            <input type="text" name="title" id="title"/>

            <br/>

            <label htmlFor="image">iMAGE</label>
            <input type="file" name="image" id="image"/>

            <br/>
            <button type="submit">Create Post</button>
        </form>
    </div>
  )
}

export default FileForm