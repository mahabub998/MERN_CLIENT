import React from "react";
import mahabub1 from '../../images/mahabub1.png'

const About = () => {
  return (
    <>
      <div className="container em-profile">
      <from method="">
       <div className="row">
          <div className="col-md-4">
          <div className="profile-img">
          <img src={mahabub1} alt="mahabub" />
          </div>
           
          </div>
          <div className="col-md-6">
          <div className="profile-head mt-5">
           <h5>mahabub alam</h5>
           <h6>web developer</h6>
           <p className="profile-rating mt-3 mb-5">RANKINGS: <span>1/10</span></p>
              <ul className="nav nav-tabs" role="tabList">
              <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home"role="tab" >About</a>
              </li>
              <li className="nav-item">
              <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile"role="tab" >TimeLine</a>
              </li>
            
              </ul>

          </div>
        </div>
         <div className="col-md-2 mt-5">
          <input type="submit" className="profile-edit-btn" name="btnAddmore" value="edit profile"/>
         </div>

       </div>

       <div className="row">
        <div className="col-md-4">
         <div className="profile-work">
         <p>WORK LINK</p>
         <a href="https://www.youtube.com" target="_mahabub">YouTube</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">Instagram</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">mahabub tecnical</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">github website</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">web Developer</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">figma</a><br/>
         <a href="https://www.youtube.com" target="_mahabub">softer Engineer</a><br/>

         </div>
        </div>
          <div className="col-md-8 pl-5 about-info">
          <div className="tab-content profile-tab" id="myTabContent">
           <div className="tab-pane fade show active" id="home" role="tab" aria-lebelledby="home-tab">
            <div className="row">
            <div className="col-md-6">
             <label>User ID</label>
            </div>
            <div className="col-md-6">
             <p>45474255454</p>
            </div>
            
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
             <label>Name</label>
            </div>
            <div className="col-md-6">
             <p>mahabub alam</p>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
             <label>Name</label>
            </div>
            <div className="col-md-6">
             <p>mahabub alam</p>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
             <label>Name</label>
            </div>
            <div className="col-md-6">
             <p>mahabub alam</p>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
             <label>Name</label>
            </div>
            <div className="col-md-6">
             <p>mahabub alam</p>
            </div>
            </div>
            
           

           </div>
          </div>
          
          </div>

       </div>
      </from>
      </div>
    </>
  );
};

export default About;
