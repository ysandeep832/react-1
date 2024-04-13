
import { useState } from "react";
import "./controllStyle.css"

export const Sandeep = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    nameErr: null,
    emailErr: null,
    passwordErr: null
  });

  const submitHandler = (event) => {
    event.preventDefault()
    const { value, name } = event.target;
    setForm((prevState) => ({
      ...prevState,[name]:value
    }));

    switch (name) {
      case "name":
        if (value.length < 5) {
          setError({ ...error, nameErr: "enter morethan 5 characters" });
        }
        else{
            setError({...error,nameErr:null})
        }
     
        break;
      case "password":
        if (value.length < 8) {
          setError({ ...error, passwordErr: "enter more than 8 characters" });
        }
        else{
            setError({...error,passwordErr:null})
        }
        break;
         default:
            setError({...error,nameErr:null,passwordErr:null})
    }
     
         
    };

    const submitted=(event)=>{
    event.preventDefault()
    const userDetails={
        name:form.name,
        email:form.email,
        password:form.password
    }
    console.log(userDetails)

    setForm({
        name:" ",
        email:"",
        password:""

    })

    }
  return (
    <>
    <div className="entire">
    <form onSubmit={submitted} className="totalForm" >
      <div>
        <lable>Name</lable>
      </div>
      <input
        type="text"
        id="firstname"
        name="name"
        value={form.name}
        onChange={submitHandler}
      />
      <div>
      {error.nameErr && <span style={{color:"red"}}>{error.nameErr}</span>}
      </div>
      <div>
        <lable>Email</lable>
      </div>
      <input type="email" name="email" value={form.email} onChange={submitHandler}
      />
      <div>
        <lable>password</lable>
      </div>
      <input
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={submitHandler}
      />
      <div>
      {error.passwordErr && <span style={{color:"red"}}>{error.passwordErr}</span> }
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
    </>
  );
};
