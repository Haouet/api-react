import React from 'react'

export default function CardUser(props) {
    return (
        <>

           
                <div className="card">
                    
                    <div className="card-body text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3" />

                        <h5 className="card-title">{props.username}</h5>
                        <p className="text-secondary mb-1">{props.name}</p>
                        <p className="text-muted font-size-sm">{props.email}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
                        <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button">Button</button>
                    </div>
                </div>
          

        </>
    )
}
