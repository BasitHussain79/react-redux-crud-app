import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    const {userName} = useParams()
    return (
        <div>
            This is {userName}
        </div>
    )
}

export default User
