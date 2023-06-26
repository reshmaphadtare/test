import React,{ useEffect} from 'react'
import './styles.css'
import axios from 'axios';
function FruitList() {

    useEffect(() => {
     const response = axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response)=>{
        console.log('object1', response);
     })
     console.log('object', response.json)
    }, [])
    

    const FruitList = [
        {id: 1, name:"Mango"},
        {id: 2,name:"Papaya"},
        {id: 3,name:"Apple"}
    ]

  return (
    <div>
        {FruitList.map((item)=> {
            return <li>{item.name}</li>
        })}
        <div className='reactangleBox'>
           <div className='dot'></div>
        </div>
    </div>
  )
}

export default FruitList