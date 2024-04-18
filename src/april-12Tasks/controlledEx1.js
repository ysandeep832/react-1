import {useState} from "react"
import "./controllStyle.css"

    // controlled component (form) by using single useState

const Controlled1=()=>{
    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [userNameErr,setUserNameErr]=useState(false)
    const [passwordErr,setPasswordErr]=useState(false)

    const userNameHandler=(event)=>{
            const userName=event.target.value
            setUserName(userName)

            if(userName.trim().length>7){
                setUserNameErr(true)
            }
            else{
                setUserNameErr(false)
            }
          
    }

    const emailHandler=(e)=>{
        const email=e.target.value
        setEmail(email)
       
    }

    const passwordHandler=(event)=>{
        const password=event.target.value
        setPassword(password)

        if(password.length<4){
                setPasswordErr(true)
        }
        else{
            setPasswordErr(false)
        }
    }

    const handleSubmit=(event)=>{
            event.preventDefault()

            const userDetails={
                name:userName,
                email:email,
                password:password
            }
            console.log(userDetails)

                setUserName("")
                setEmail("")
                setPassword("")
                

    }
    return(
        <>
        <div  style={{border:"1px solid black", textAlign:"center",backgroundColor:"aliceblue",width:350,borderRadius:"10px",padding:"20px"}}>
            <h3>SignUp form</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <lable>Name</lable>
            </div>
            <input type="text" id="name" name="userName" value={userName} onChange={userNameHandler}/>
            <div>
            {userNameErr&&<span style={{color:"red"}}>Name should be less than 7 characters</span>}
            </div>
            <div>
                <lable>Email</lable>
            </div>
            <input type="email" id="email" name="email" value={email} onChange={emailHandler}/>
            <div>
                <lable>Password</lable>
            </div>
            <input type="password" value={password} onChange={passwordHandler} />
            <div>
            {passwordErr && <span style={{color:"red"}}>password should be greater than 4 characters</span>}
            </div>
            <div>
            <button type="submit">Submit</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default Controlled1



