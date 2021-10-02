import React from 'react'

function AlbumDetails(props) {
    const [data, setData] = useState({})
    console.log(props.match.id)
    useEffect(() => {
        const id = props.match.id
        const response = api.get(`https://api.spotify.com/v1/albums/${id}`)
        setData(response)
    },[data])
    return (
        <div>
            Hello from AlbumDetails
            {data.map(() => {
                <Song/>
            })}
        </div>
    )
}

export default AlbumDetails
