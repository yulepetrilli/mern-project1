import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function UserDetails({user}) {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    },[]);

    const handleDeleteUser = () => {
        axios.post('/api/user/deleteuser', {id: user.id}).then(res => {
            alert(res.data)
            navigate(0)
        }).then(err => {alert(err)});
    };

    return (
        <div className='row mb-4 justify-content-center'>
            <div className='col-6' data-aos='flip-right'>
                <ul className="list-group">
                    <li className="list-group-item" >{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.phone}</li>
                </ul>
                <div className="d-grid d-md-block mt-4">
                    <Link 
                        to={`edituser/${user.id}`} 
                        className="btn btn-primary me-2" 
                    >
                        Edit User
                    </Link>
                    <button 
                        className="btn btn-danger" 
                        type="button" 
                        onClick={handleDeleteUser}
                    >
                        Delete User
                    </button>
                </div>
                <hr className='mt-4'/>
            </div>
        </div>
    )
}
