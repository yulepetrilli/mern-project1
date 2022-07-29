import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import uniquid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function AddUser() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleAddUser = () => {
        let user = {
            name: name,
            email: email,
            phone: phone,
            id: uniquid(),
        }

        axios.post('/api/user/adduser', user).then(res => {
            Swal.fire('Congrats', 'User added successfully');
            navigate('/')
        }).then(err => {alert(err)});
    };

    return (
        <div className='container'>
            <div className='row' >
                <div className='text-center mt-4 mb-4'>
                    <h1>Add New User</h1>
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
                        onClick={handleAddUser}
                    >
                        Add New User
                    </button>
                </form>
            </div>
        </div>
    );
};
