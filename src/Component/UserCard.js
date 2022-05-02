import React from 'react'
export default function UserCard(props) {
  return (
    <>
        <div className="card" style={{width: '18rem'}}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <a href="/" className="btn btn-primary">Show More Details</a>
        </div>
        </div>
        
    </>
  )
}
