import React, {useState, useEffect} from 'react'
import axios from 'axios';

//components
import UserDetails from './UserDetails';

export default function UsersList() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        axios.get('/api/user/getusers').then(res => {
            setUsersData(res?.data)
        }).catch(err => {
            alert(err)
        });
    }, []);

    return (
        <div className='container'>
           <div className='row'>
                <div className='text-center mt-4 mb-4'>
                    <h1>Users List</h1>
                </div>
           </div>
          {usersData?.map(user => <UserDetails key={user.id} user={user}/>)}
        </div>
    )
}
