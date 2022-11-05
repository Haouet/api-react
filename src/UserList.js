import React, { useState, useEffect } from 'react'
import axios from "axios";
import CardUser from './CardUser';
import InfoUser from './InfoUser'; 
const baseURL = "https://jsonplaceholder.typicode.com/users";
export default function UserList() {

    const [listOfUSer, setlistOfUSer] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((data) => {
            console.log(data.data);
            setlistOfUSer(data?.data);
        });
    }, []);

    return (
        <div className="cards">

            {listOfUSer.map((user, i) => {
                return (
                    <div className="container">
                        <div className="main-body">
                            <div className="row row-cols-1 row-cols-sm-2  gutters-sm">
                            <div className="col mb-3">                              
                                    <CardUser key={user.id} {...user} />
                                    </div>
                                    <div className="row">
                                    <div className="col mb-12">
                                    <InfoUser key={user.id} {...user} />
                                    </div> </div>
                                    
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}