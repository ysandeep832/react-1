
import { vegatablesANDfruits } from "./vegData"


const VegAndFriList=()=>{

 const isVegetables=true;

   return(
      <>
      <h2> vegetables list</h2>
      {
       vegatablesANDfruits.map((values)=>{

            return(
               <>
              
               {
                  
                < h3>{isVegetables?values.name:values.name1} </h3>
               }
               
               </>

            )

       })
      
      }
      </>


   )



}

export default VegAndFriList