import React from "react"

function Card({img,h1,p}) {
    return(
        <div className="card">
            <img src={img} />
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
    )
}

export default Card