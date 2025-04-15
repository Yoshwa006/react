import axios from 'axios' 
import { useEffect, useState } from 'react'
 function TestApi(){
    const[api, setApi] = useState("")
    
    useEffect(() =>{
        axios.get("http://localhost:8080/api/models")
        .then(response => {
            setApi(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },[])

    return(
        <>
        <p> Name :{api.name}</p>
        <p>{api.description}</p>
        <p>{api.category}</p>
        <p>{api.free}</p>
        </>
    )
 } 

 export default TestApi