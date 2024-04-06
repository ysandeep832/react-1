
import { data } from "./march-29task"

  export const Filterr=()=>{



    return(
      <>

      <tr>
       <th>Name</th>
       <th>designation</th>
       <th>salary</th>


      </tr>
      {
      
      data.filter(value=>value.salary== 90000).map( value =><tr>
        
        <td> { value.EmpName}</td> 
        <td>{ value.designation}</td> 
        <td>{ value.salary}</td> 
        </tr>
       
               
        
        )

    }

     </>
    )

}
      

      
      
      
      
    





  