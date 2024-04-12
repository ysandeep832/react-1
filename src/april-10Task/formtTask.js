import { useRef,useState } from "react"
import "./formStyle.css"


const FormValidation=()=>{
       const userNameRef=useRef("")
    const emailRef=useRef("")
    const passwordRef=useRef("")
    const [error,setError]=useState(false)
    const [data,setData]=useState([])

    const formSubmit=(event)=>{
         event.preventDefault()
         const userInput=userNameRef.current.value
         const emailInput=emailRef.current.value
         const passwordInput=passwordRef.current.value

          const userData={
          Name:userNameRef.current.value,
          Email:emailRef.current.value,
          Password:passwordRef.current.value
         }
         console.log(userData)
        const userInfo=[...data,userData]

           if(userInput.length<5 || emailInput.length<5 || passwordInput.length<5){
              
            setError(true)            
           }
           else{
            setError(false)
            console.log("form Submit")
            setData(userInfo)
           
           }
   
           userNameRef.current.value="";
           emailRef.current.value="";
           passwordRef.current.value=""
                 
    }
      return(
        <>
        <div className="totalReturn"> 
        <h2 style={{color:"red"}}>Registration Form</h2> 
        <div className="formm">
        {
        <form onSubmit={formSubmit}>
         <div>   
        <lable htmlfor="fname">Nmae</lable>
        <input type="text" name="fname" id="fname"  ref={userNameRef}/>
        </div>
        <div>
        <lable htmlfor="email">Email</lable>
        <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div>
        <lable htmlfor="psrw">Password</lable>
        <input type="password" name="psrw" id="psrw" ref={passwordRef}/>
        </div>
        <div>
        {error && <span style={{color:"red"}}>enter more than 5 characters for each line </span>}
        </div>
        <div>
      <button typr="submit">Submit</button> 
      </div>
        </form>
       
        }
      
        </div>
        <br/>
        <div>User Data</div>
        <div className="entire_map">
          <tr className="tableRow">
         <th>Name</th>
         <th>Email</th>
         <th>Password</th> 
         </tr>
           
          {
          data.map(values=>{
            const {Name,Email,Password}=values
            return(
              <tr>
             <td>{Name}</td> 
             <td>{Email}</td> 
             <td>{Password}</td> 
            </tr>
            
            )
          })
          
        }
        </div>
        </div>
        </>
      )
}
export default FormValidation 