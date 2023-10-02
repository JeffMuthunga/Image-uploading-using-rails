import React, { useEffect, useState } from 'react'

function PropertyImage() {


    const [property, setProperty] = useState([])

    // useEffect(()=>{
    //     fetch("http://localhost:3000/property_images")
    //     .then(r=>r.json())
    //     .then((data) => {
    //         c
    //     })
    //     .catch((error)=> console.error(error))
    // })


    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData()

        data.append("property[name]", e.target.name.value)
        data.append("property[price]", e.target.price.value)
        data.append("property[description]", e.target.description.value)
        data.append("property[bedrooms]", e.target.bedrooms.value)
        data.append("property[bathroooms]", e.target.bathroooms.value)

        const picturesInput = e.target.pictures; // Assuming 'pictures' is the input element

        for (let i = 0; i < picturesInput.files.length; i++) {
        data.append("property[pictures][]", picturesInput.files[i]);
        }

    

        submitToApi(data)
    }

    function submitToApi(data){
        fetch("http://localhost:3000/properties", {
            method:"POST",
            body: data
        })
        .then(r => r.json())
        .then((data) => {
            setProperty(data)
            console.log(data)
        })
        .catch((error) => console.error(error))

    }

  return (
    <div style={{backgroundColor: "skyblue"}}>
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Upload Property IMAGES</h1>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"/>

            <br/>

            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price"/>

            <br/>

            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="description"/>

            <br/>

            <label htmlFor="bedrooms">Bedrooms</label>
            <input type="number" name="bedrooms" id="bedrooms"/>

            <br/>

            <label htmlFor="bathrooms">Bathrooms</label>
            <input type="number" name="bathroooms" id="bathroooms"/>

            <br/>

            <label htmlFor="image"> Select Pictures</label>
            <input type="file" multiple name="pictures" id="pictures"/>

            <br/>
            <button type="submit">Create a Property</button>
        </form>
    </div>
  )
}

export default PropertyImage