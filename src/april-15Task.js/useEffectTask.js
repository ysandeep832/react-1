import axios from "axios"
import { useEffect } from "react"
import {useState} from "react"
import "./effectStyle.css"
   


const ApiCallingAndEachProductShowing=()=>{

    const [productList,setProductlist]=useState({})
    const [count,setCount]=useState(1)

    useEffect(()=>{
      
        eachCalling()

},[count])
   
   

    const eachCalling=async()=>{
         const CallingEach=await axios.get(`https://dummyjson.com/products/${count}`)
         console.log(CallingEach)
        setProductlist(CallingEach.data)
                                                                   
    }
                                                     

    const countInc=()=>{
        setCount(count+1)
    }
    const countDec = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      }
    return(
        <> 
        <div className="parent">
        <h2 style={{color:"red"}}>products list</h2>
        <button className="btn1" onClick={countInc}>NewProduct</button>
        <button className="btn2" onClick={countDec}>PreviousProduct</button>
        
    <div className="card">
    <h1>{productList.title}</h1>
    <h1><img src={productList.thumbnail} alt="imgg" width="200" /></h1>
    <h1>${productList.price}</h1>
    </div>
    </div>
    
         
        </>
    )
}
export default ApiCallingAndEachProductShowing