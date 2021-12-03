import React from "react";
import phone from "../../images/phone.png";
import email from "../../images/email.jpg";
import address from "../../images/address.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-info">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-sm-12 col-md-4 d-flex">
              <img className="img_responsive_contact" src={phone} alt="phone" />
              <div className="">
                <p>
                  phone <br /> +88 01745421124
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex">
              <img className="img_responsive_contact" src={email} alt="email" />
              <div className="">
                <p>
                  email <br /> mahabu998@gmail.com
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 d-flex">
              <img
                className="img_responsive_contact"
                src={address}
                alt="address"
              />
              <div className="">
                <p>
                  address <br /> dhaka,tangail
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-6 offset-md-1">
              <div className="contact_form container py-5">
                <div className="contact_form_title">Get in touch</div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="your name"
                      required="true"
                    />

                    <input
                      type="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="your email"
                      required="true"
                    />

                    <input
                      type="number"
                      id="contact_form_number"
                      className="contact_form_number input_field"
                      placeholder="your number"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_lexl ml-5">
                   <textarea className="text_field contact_form_message" placeholder="message" cols="" rows="10">
                   
                   </textarea>
                  </div>
                  <div className="contact_form_button">
                   <button type="submit" className="btn btn-primary">send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
