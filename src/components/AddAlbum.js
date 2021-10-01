import React, { useState } from "react"
import "./style.css"    


const AddAlbum = (props) => {
   const { submitHandler, data } = props

  const [artist, setArtist] = useState("")
  const [album, setAlbum] = useState("")
  const [cover, setCover] = useState("")
    
  const artistChange = e => {
    setArtist(e.target.value)
  } 
  const albumChange = e => {
    setAlbum(e.target.value)
  }
  const coverChange = e => {
    setCover(e.target.value)
  }
  const submit = e => {
    e.preventDefault() //all data from from element ...
    const newData = {
      artist: artist,
      album_title: album,
      album_cover: cover,
      id: data[data.length - 1].id + 1,
    }
    submitHandler(newData)
    alert("Album added succesfully")
  }
  return (
    <div>
      <form className="form" onSubmit={submit}> //forms onSubmit value inside the form,direct object
        <input
          type="text"
          onChange={artistChange}
          value={artist}
          placeholder="Enter Artist Name"
        />
        <input
          type="text"
          onChange={albumChange}
          value={album}
          placeholder="Enter Album"
        />
         <input
          type="file"
          onChange={coverChange}
          value={cover}
          placeholder="Select Cover"
        />
        <button className="submitBtn">Add Album</button>
      </form>
    </div>
  )
}

export default AddAlbum