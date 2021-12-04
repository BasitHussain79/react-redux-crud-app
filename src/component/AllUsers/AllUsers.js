import React from 'react'
import { useNavigate } from 'react-router'
const AllUsers = () => {
    const navigate = useNavigate()
    return (
        <div>
            All Users
            <button onClick={() => navigate('/add-user')}>Add User</button>
        </div>
    )
}

export default AllUsers
