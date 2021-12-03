import React,{useState} from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import signUp3 from "../../images/signUp3.jpg"
import { NavLink, useNavigate  } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
})
let name,value;
const handleInput =(e) => {
  // console.log(e)
  name = e.target.name
  value = e.target.value
  setUser({...user,[name]:value})
}
const postData = async (e) => {
  e.preventDefault()
  const {name,email,phone,work,password,cpassword} = user;
  const res = await fetch('http://localhost:5000/register',{
  method:"POST",  
  headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
      name,email,phone,work,password,cpassword
     })
  })
  const data = await res.json();
  if(res.status=== 422 || !data){
window.alert("Invalid register");
console.log("Invalid register")
  }else{
    window.alert(" register successfully");
console.log("successfully register")
  navigate.push("/login")
  }
}

  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content row">
            <div className="signup-form col-md-6 col-md-12 col-lg-6">
              <h2 className="form-title"> sign up</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInput}
                    placeholder="your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                    placeholder="your phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="text"
                    name="work"
                    id="work"
                    autoComplete="off"
                    value={user.work}
                    onChange={handleInput}
                    placeholder="your profession"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="your password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="cpassword"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInput}
                    placeholder="your confirm password"
                  />
                </div>
                <div className="form-group from-button">
                <input onClick={postData} type="submit" name="signup" id="signup" className="form-submit" value="submit"/>
                </div>
              </form>
              </div>
              <div className="signup-image col-md-6">
                <figure>
                 <img className="signup_image" src={signUp3} alt="registration pic"  />
                </figure>
                <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
