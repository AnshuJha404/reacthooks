/*import React ,{useState} from 'react'

function HooksObject(){

    const [ name , setName]= useState({
       
        firstName:"",
        lastName:""
    })

    return(
   <form>
    
    <input type='text' onChange={(e)=>setName({ ...name,firstName:e.target.value})} value ={name.firstName}/>
    
    <input type='text' onChange={(e)=>setName({ ...name,lastName:e.target.value})} value ={name.lastName}/>
     <h1>your firstNAme : {name.firstName}</h1>
     <h1>your lastName : {name.lastName}</h1>
   </form>
    )
}
export default HooksObject; */