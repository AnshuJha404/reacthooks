/*import React , { useState , useEffect} from 'react';

function UseEffect2() {
    const[count , setCount] = useState(0)
    const[name ,setName] =useState('') 
    useEffect(
        ()=>{
            
             document.title =`you clicked ${count} times`
            },
           [count]
           
        )
    return (

    /*to update only when needed
    <div>
        <input type='text' value ={name} onChange={(e=>setName(e.target.value))}></input>
       <button onClick={()=>setCount(count+1)}>click {count}times</button>
    </div>
  );
}

export default UseEffect2;
 */