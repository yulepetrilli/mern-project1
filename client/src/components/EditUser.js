import React, {useEffect, useState} from 'react';
import { useParams, useNavigate  } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditUser() {
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        axios.post('/api/user/getuser', {id: params.id}).then(res => {
            const data = res?.data[0];
            setName(data?.name);
            setEmail(data?.email);
            setPhone(data?.phone)
        });
    }, [params]);

    const handleEditUser = () => {
        let editedUser = {
            name: name,
            email: email,
            phone: phone,
            id: params.id,
        }

        axios.post('/api/user/editeduser', editedUser).then(res => {
            Swal.fire('Congrats', 'User edited successfully');
            navigate('/')
        }).then(err => {alert(err)});
    }

    return (
        <div className='container justify-content-center'>
            <div className='row'>
                <div className='text-center mt-4 mb-4'>
                    <h1>Edit User</h1>
                </div>
            </div>
            <div className='row' >
                <form className='col-6 offset-3 mt-4 mb-4 border rounded'>
                    <div className="mt-3 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="mt-3 mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="phone" 
                            value={phone} 
                            onChange={(e) => {setPhone(e.target.value)}}
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary mt-3 mb-3" 
                        onClick={handleEditUser}
                    >
                        Save Edited User
                    </button>
                </form>
            </div>
        </div>
    )
}
