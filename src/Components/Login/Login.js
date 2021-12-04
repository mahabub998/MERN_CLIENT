import React,{useState} from 'react';
import login1 from '../../images/login1.jpg';
import { NavLink,useNavigate } from 'react-router-dom';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState()

  const loginUser = async (e) => {
   e.preventDefault();

  const res = await fetch('http://localhost:5000/singin',{
    method: 'POST',
    headers: {
       "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })

  })
  const data = res.json();
  if(res.status === 400 || !data){
    window.alert("Invalid Credentials")
  }else{
    window.alert("login Successfully")
    navigate.push("/")
  }
  }

    return (
        <>
        <section className="signup">
        <div className="container mt-5">
          <div className="signIn-content row">
          <div className="signIn-image col-md-6">
                <figure>
                 <img className="signIn_image" src={login1} alt="registration pic"  />
                </figure>
                <NavLink to="/signUp" className="signup-image-link text_margin"> create an account</NavLink>
              </div>
            <div className="signup-form col-md-6 col-md-12 col-lg-6">
              <h2 className="form-title"> sign in</h2>
              <form method="POST" className="register-form" id="register-form">
               
                <div className="form-group">
                  <label htmlFor="email">
                    <SupervisorAccountIcon />
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder="your email"
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
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    placeholder="your password"
                  />
                </div>
               
                <div className="form-group from-button">
                <input onClick={loginUser} type="submit" name="signIn" id="signIn" className="form-submit" value="log in"/>
                </div>
              </form>
              </div>
              
            
          </div>
        </div>
      </section>
        </>
    )
}

export default Login
