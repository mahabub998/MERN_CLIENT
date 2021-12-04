import React, { useEffect,useState } from "react";
import mahabub1 from "../../images/mahabub1.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState({})

  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:5000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log(data);
      setUserData(data)

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
        
      }
    } catch(err){
      console.log(err)
       navigate.push('/login')
    }
  }

  useEffect(() => {
    callAboutPage()
  },[]);

  return (
    <>
      <div className="container em-profile">
        <from method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={mahabub1} alt="mahabub" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head mt-5">
                <h5>{setUserData.name}</h5>
                <h6>{setUserData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>
                <ul className="nav nav-tabs" role="tabList">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 mt-5">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddmore"
                value="edit profile"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href="https://www.youtube.com" target="_mahabub">
                  YouTube
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  Instagram
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  mahabub tecnical
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  github website
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  web Developer
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  figma
                </a>
                <br />
                <a href="https://www.youtube.com" target="_mahabub">
                  softer Engineer
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tab"
                  aria-lebelledby="home-tab"
                >
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
                      <p>{setUserData.name}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{setUserData.email}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{setUserData.phone}</p>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>work</label>
                    </div>
                    <div className="col-md-6">
                      <p>{setUserData.work}</p>
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
