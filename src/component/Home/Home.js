import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadUser } from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div>
            Home
        </div>
    )
}

export default Home
