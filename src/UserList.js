import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './UserList.css';

function UserList() {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                "https://jsonplaceholder.typicode.com/users" 
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>USERS LIST</h1>
            <ul className="list-group flex-container">
                {data.map(item => 
                    <div key={item.id} className="container">
                        <li className="list-group-item-primary">Id: {item.id}</li>
                        <li className="list-group-item-secondary">Name: {item.name}</li>
                        <li className="list-group-item-success">UserName: {item.username}</li>
                        <li className="list-group-item-danger">E-mail: {item.email}</li>
                        <li className="list-group-item-warning">
                            Address: 
                               <br/> &nbsp; &nbsp; street: {item.address.street}
                               <br/> &nbsp; &nbsp; suite: {item.address.suite}
                               <br/> &nbsp; &nbsp; city: {item.address.city}
                               <br/> &nbsp; &nbsp; zipcode: {item.address.zipcode}
                               <br/> &nbsp; &nbsp; geo: 
                                        <br/> &nbsp; &nbsp; &nbsp;&nbsp; lat: {item.address.geo.lat}
                                        <br/> &nbsp; &nbsp; &nbsp;&nbsp; lng: {item.address.geo.lng}
                        </li>
                        <li className="list-group-item-info">Phone: {item.phone}</li>
                        <li className="list-group-item-danger">WebSite: {item.website}</li>
                        <li className="list-group-item-success">
                            Company:
                                <br/>  name: {item.company.name}
                                <br/>  catchPhrase: {item.company.catchphrase}
                                <br/>  bs: {item.company.bs}
                        </li>
                        <br/>
                    </div>
                )}
            </ul> 
        </div>
    )
}

export default UserList;