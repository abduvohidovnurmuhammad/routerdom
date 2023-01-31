import React from "react";
import { Link } from "react-router-dom";
import { request } from "../../config/request";

export const About = () => {
    const [data,Setdata] = React.useState([])
    React.useEffect(()=>{
        request.get('/users').then((response)=>{
            Setdata(response.data)
        })
    },[])
    return (
        <ul>
       {data?.map((el)=>
        <li key={el.id}><Link to={`/user/${el.id}`}>{el.name}</Link></li>)}
        </ul>
    )
}