import axios from "axios"
import CustomSpinner from "./spinner";
import "./mountStyle.css"
const { Component } = require("react");




 export class Mountain extends Component{

  
 state={
    dummyProducts:[]
}
     
  componentDidMount(){this.fetching()};
   fetching=async()=>{
   const  productRel=await axios.get("https://dummyjson.com/products")
 
   this.setState(
    {
   dummyProducts:productRel.data.products
    }
   )
   }
   
   delete=(index)=>{
     const DeleteCard=this.state.dummyProducts.filter((eachObj,ind)=>ind!==index)
     console.log(DeleteCard)
      this.setState(
        {
        dummyProducts:DeleteCard
      }

      )
   }

render(){
  console.log(this.state.dummyProducts)
return(
  <>
  {
     this.state.dummyProducts.length>0
    ?
    <div className="cardd">
   {
    this.state.dummyProducts.map((values,index)=>{
      return(
        <div className="cards">
       <h2>{values.title}</h2>
       <h2><img src={values.thumbnail} alt="imagess" width={100} /></h2>
       <h2 style={{color:"green"}}>₹{values.price}</h2>
       <button  style={{backgroundColor:"blue",color:"white"}} onClick={()=>this.delete(index)}>Delete</button>
       </div>
      )
    })
   }
   </div>
   :
   <div className="spinner">
<CustomSpinner/>
</div>
  }
  
  </>
)
}
}

