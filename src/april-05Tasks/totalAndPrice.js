
import axios from "axios"
import "./styleSheet.css"
const { Component, default: React } = require("react");



class ProductAddAndTotal extends Component{
    
    state=({
        productss:[]     
    })
     
    componentDidMount(){this.fetching()}
    
    fetching=async()=>{
        const result=await axios.get("https://dummyjson.com/products")
        const result1=result.data.products.map(eachObj=>{
            const data={...eachObj,count:1,totalPrice:eachObj.price}
            return data
        })
        console.log(result)

        this.setState(
            {
                productss:result1

            }
        )
    }

    addCount=(id)=>{
 const addAmt=this.state.productss.map(eachObj=>{

    if(id===eachObj.id){
        eachObj.count+=1
        eachObj.totalPrice=eachObj.price*eachObj.count
        return eachObj
    }
    else{
      return  eachObj
    }
 })

 this.setState({
    productss:addAmt
 })
      
    }

    decreaseCount=(id)=>{
      const  countDecNew=this.state.productss.map(eachObj=>{
        if(id===eachObj.id){
            if(eachObj.count>0){
            eachObj.count-=1
            eachObj.totalPrice=eachObj.price*eachObj.count
            return eachObj
        }
        else{
            return eachObj
        }
        }
        else{
            return eachObj
        }
        // else{
        //     return eachObj
        // }
      })
      this.setState(
        {
            productss:countDecNew
        }
      )
    }

          
        render(){
            return(
                <>
                <h1>Products</h1>
                <div className="toataPP">
                 <h3 style={{color:"blue"}}>TotalAmount:
                        {
                            this.state.productss.reduce((a,b)=>{
                                return a+b.totalPrice
                            },0)
                        }
                        </h3>
                        
                         
                </div>
                <div className="totalcards">
                {
                               
                    this.state.productss.map((values,index)=>{
                        const {title,price,thumbnail,count,totalPrice,id}=values
                        return(
                            <div className="cards">
                           <h3>{title}</h3>
                           <h2><img src={thumbnail} alt="imagess" width={100} /></h2>
                           <h2 style={{color:"green"}}>₹{price}</h2>
                           <h3>count:{count}</h3>
                           <h3>TotalPrice:${totalPrice}</h3>
                           <button style={{color:"green"}} onClick={()=>this.addCount(id)}>Add</button> 
                           <button style={{color:"red"}} onClick={()=>this.decreaseCount(id)}>Cancle</button> 

                           </div>
                        )
                    })
                                 
                } 
                </div>
                </>
            )
        }
}
export default ProductAddAndTotal
