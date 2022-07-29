import React from 'react'
import { useRoutes } from 'react-router';

//Components
import UsersList from './components/UsersList';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';

export default function Routes() {
    let element = useRoutes([
        {path: "/", element: <UsersList />},
        {path: "edituser/:id", element: <EditUser/> },
        {path: "adduser", element: <AddUser /> },
    ]);

    return element;
}
