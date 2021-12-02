import React from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import signUp3 from "../../images/signUp3.jpg"
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
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
                    placeholder="your confirm password"
                  />
                </div>
                <div className="form-group from-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="submit"/>
                </div>
              </form>
              </div>
              <div className="signup-image">
                <figure>
                 <img src={signUp3} alt="registration pic"  />
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
