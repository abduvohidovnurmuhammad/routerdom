import React from 'react';
import { useParams } from 'react-router-dom';
import { request } from '../config/request';
const User = () => {
    const param = useParams()
    const [ data , Setdata] = React.useState({})

    React.useEffect(()=>{
        request.get(`/users/${param.id}`).then((response)=>{Setdata(response.data)
         
        })
       
    },[])
    return (
        <div>
            <h1>{data?.name}</h1>
            <h3>{data?.email}</h3>
            

        </div>
    );
}

export default User;
