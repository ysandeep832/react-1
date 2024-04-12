
import {useState} from "react"

 const CreateUpdate=()=>{
   const[fruits,setFruit]=useState(["apple","orange"])
        const  addFruits=()=>{
        const anotherFruit=[...fruits, "pomogranate"];
        setFruit(anotherFruit)
   }

 const updateFruit=(index)=>{
       const change=fruits.map((elements,ind)=>{
            if(ind===index){
                return(
                   ["sapota"]
                )
            }
            else{
                return(
                    elements
                )
            }
        })
   setFruit(change)
   }

   const DeleteFruit=(index)=>{
     const deleted=fruits.filter((element,ind)=>ind!==index)
     setFruit(deleted)
  }
  const Reset=()=>{
 
     setFruit(["apple","orange"]);
  }
   
    return(
        <>
        <div style={{textAlign:"center"}}>
         <h2 style={{color:"red"}}>fruits</h2>
         <button onClick={addFruits}>addFruit</button>
         <button style={{color:"red"}} onClick={Reset}>ReSet</button>
         {
         fruits.map((value,index)=>{
            return(
                <>
                 <h3>{ value}</h3>
                 <button style={{color:"blue"}} onClick={()=>updateFruit(index)}>UpdateFruit</button>
                 <button onClick={()=>DeleteFruit(index)}>Delete</button>
                </>
            )
         })
        }
        </div>
        </>
    )
}
export default CreateUpdate