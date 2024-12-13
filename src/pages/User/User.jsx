import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getjsonData } from '../../redux/slices/auth/authSlice';

const User = () => {

    const dispatch = useDispatch()

    const { loading, jsondata } = useSelector((state) => state?.root?.signin);

    console.log(jsondata, "jsondata")

    useEffect(() => {
        dispatch(getjsonData())
    }, [])

    return (
        <>
            <h1 className='bg-gray-500'>User</h1>
            {jsondata?.map((d, i) => (<p>{d?.id}. {d?.title}</p>))}
        </>
    )
}

export default User