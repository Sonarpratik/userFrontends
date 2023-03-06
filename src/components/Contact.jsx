import React from 'react';
import "./css/login.css"

const Contact = () => {
    return (
        <div className='contact_info'>
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="contact_info_item">
                        <div>phone</div>
                        <div>email</div>
                        <div>address</div>
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <textarea name="tosend" id="" cols="30" rows="10"></textarea>
                        <input type="text" value={"Send Message"} className="btn-login"/>

                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}

export default Contact;



