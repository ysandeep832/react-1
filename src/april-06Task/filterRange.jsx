
import axios from "axios"
import "./RangeStyle.css"
const { Component } = require("react");

// it is the class based component----------------------

class ProductsRange extends Component{
    // here initialized the state -------------
    state={
        arr:[],
        filterData:[]
       } 
    //    end the state ------------------

    //    componentDidMount is the invoking invoking meance calling the function for display the object ------------------

    componentDidMount(){this.fetchedData()}
    // here calling the API and changing the state using setState method,  here not using fetch method  here using axios when we are using axios we need to download and import also -------------
    //  here using map method and used spread operator then added some keys like count and total price ------------
     fetchedData=async()=>{
        const result=await axios.get("https://dummyjson.com/products")
        const result1=result.data.products.map(eachObj=>{
            const data= {...eachObj,count:1,totalPrice:eachObj.price}
            return data
        })

        console.log(result)
        this.setState({ 
            // arr:result.data.products,
            // filterData:result.data.products
            arr:result1,
            filterData:result1

        }) 
    } 

    // here end API calling and setState method ---------------------

    // here start the product adding and also price adding -------------------

    addCount=(id)=>{
       const addCart=this.state.filterData.map(eachObj=>{
        if(id===eachObj.id){
            eachObj.count+=1
            eachObj.totalPrice=eachObj.price*eachObj.count
            return eachObj
        }
        else{
            return eachObj
        }
       })
       this.setState({
          filterData:addCart
       })
    }

    // here end the product adding and also price adding -----------------

    // here start the product decreasing and price decreasing -------------
    decreaseCount=(id)=>{
        const decCart=this.state.filterData.map(eachObj=>{
            if(id===eachObj.id){
                if(eachObj.count>1){
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
                                    
        })
        this.setState({
            filterData:decCart
        })
    }
    // here end the product decreasing and price decreasing -------------

// here start sorting lowPrice products to high products -----------------
    lowToHigh=()=>{
        setTimeout(()=>{
            this.setState({
                filterData:this.state.arr
            })
        },0)
        setTimeout(()=>{
                        const lowPriceToHigh= this.state.filterData.sort((a,b)=>a.price-b.price)
            console.log(lowPriceToHigh)
             
              this.setState({
                  filterData:lowPriceToHigh
              }) 

        },100)
  
    } 
    // here end sorting lowPrice products to high products ----------------
  
    // here start sorting highprice products to low  products ----------------
    highToLow=()=>{
        setTimeout(()=>{
            this.setState({
                filterData:this.state.arr
            })
        },0)
        setTimeout(()=>{
            const highPriceToLow=this.state.filterData.sort((a,b)=>b.price-a.price)
            console.log(highPriceToLow)
            this.setState({
                filterData:highPriceToLow
            })
        },100)
      
    }
     // here end sorting highprice products to low  products ----------------

      // here start filtering products below1000 ----------------
    below1000=()=>{
        setTimeout(()=>{
            this.setState({
                filterData:this.state.arr
            })
        },0)

        setTimeout(()=>{
            const priceIsBelow1000=this.state.filterData.filter(eachObj=>eachObj.price<1000)
            console.log(priceIsBelow1000)
            this.setState({
                filterData:priceIsBelow1000
            })
        },100)
     
    }
    // here end filtering products below1000 ----------------
 
    // here start filtering products above1000 ----------------
    above1000=()=>{
        setTimeout(()=>{
            this.setState({
                filterData:this.state.arr
            })
        })
        setTimeout(()=>{
            const priceAbove1000=this.state.filterData.filter(eachObj=>eachObj.price>=1000)
            this.setState({
                filterData:priceAbove1000
            })
        },100)
    }
    // here end filtering products above1000 ----------------


     
    render(){
        return(
            <>
            
            {/* button start for filtering and sorting for high to low and low to high */}
            <h1 style={{color:"red"}}>Products List</h1>
            <h5>Filter products</h5>
            <button className="focus" onClick={this.lowToHigh}>LowPriceToHigh</button>
            <button className="focus" onClick={this.highToLow}>HighPriceToLow</button>
            <button className="focus" onClick={this.below1000}>Below1000</button>
            <button className="focus" onClick={this.above1000}>Above1000</button>
            {/* here ended the buttons  for filtering and sorting */}

            {/* here ruduce method start for entire products  it's add the all products amount*/}
            <h3 className="totalAmt">TotalAmount:{
                           this.state.filterData.reduce((a,b)=>{
                            return a+b.totalPrice
                           },0)
                         }
            </h3>
            {/* reduce method end */}

            {/* here starting object iterating for display the cards or data and i did destructuring  also  */}
            <div className="totalMap">
                {
                    this.state.filterData.map((eachObj,ind)=>{
                        const {title,thumbnail,price,count,totalPrice,id}=eachObj
                        return(
                            <div key={ind} className="cardss">
                            <h2>{title}</h2>
                            <h2><img src={thumbnail} alt="imgg" width={200} height={200} /></h2>
                            <h3>Price:{price}</h3>
                            <h3 style={{color:"red"}}><button onClick={()=>this.addCount(id)}>+</button>products:{count}<button onClick={()=>this.decreaseCount(id)}>-</button></h3>
                            <h3>TotalAmount:{totalPrice}</h3>
                            </div>
                        )
                    })
               }
               </div>
               {/* here ending the list or iterating object */}
             </>
        )
    }
}
export default ProductsRange