import { render } from "@testing-library/react"
import { Component } from "react"



 class Subscribing extends Component{

    state={

        isFruits:false,
        fruits:["Apple","Banana","orange","paineapple"],
        a1:"yes it is  fruits",
        a2:"no it is not fruits",
        count:0
 
    }
   

     adding=()=>{

        this.setState(
          {
            count:this.state.count+1
          }
        )
          

            }



    render(){

            return(
                <>
                
                <h3>count{this.state.count}</h3>
                {/* <button>{this.state.isFruits?this.state.fruits :this.state.a2}</button> */}
                {/* <button ></button> */}
                <button onClick={this.adding}>add</button>
  
                
                </>
            )

    }

}
export default Subscribing