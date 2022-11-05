import React from 'react'

export default function InfoUser(props) {
  return (
    <div className="container">
       

        <h5 className="card-title">Username : {props.username}</h5>
        <p className="text-secondary mb-1">Name {props.name}</p>       
        <p className="text-muted font-size-sm">Adress : {props.address.street}, {props.address.suite}, {props.address.city}</p>
        <p className="text-secondary mb-1"> Phone: {props.phone}</p> 
        <p className="text-secondary mb-1"> Website: {props.website} </p> 
        <div class="card-footer">
        <p className="text-secondary mb-1"> Company: {props.company.name}</p>     
                
         
            </div>
    
</div>
  )
}
