import React, {useState} from 'react'
import './contact.css'
import axios from 'axios';

function Contatc() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    let name, value;
    const getUserDate = (event) => {
        name=event.target.name;
        value=event.target.value;
        setUser({...user, [name]: value });
    }

    const postData = async (e) => {
            
            e.preventDefault();
            // const data = await fetch("localhost:80/data", {
            //   method: "POST",
            //   headers: {
            //     "Content-type": "application/json",
            //   },
            //   body: JSON.stringify({
            //     name,
            //     email,
            //     phone,
            //     address,
            //   }),
            // });
      const { name, email, phone, address } = user;
          await axios.post('/data',{name, email, phone, address} );
                console.log(user)
                if (user) {
                    setUser({
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        message: "",
                    });
                }
                
                window.alert('form submited sir:)')
        

    }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="left-container">
            <div className="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div className="right-container">
            <div className="right-inner-container">
              <form method='POST'>
                <h2 className="lg-view">Contact Us</h2>
                <h2 className="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <div className="social-container">
                  <a href="/" className="social">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="social">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="/" className="social">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <input
                  type="text"
                  placeholder="Name *"
                  value={user.name}
                  name="name"
                  onChange={getUserDate}
                  autoComplete='no'
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={user.email}
                  name="email"
                  onChange={getUserDate}
                  autoComplete='no'
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={getUserDate}
                  name="phone"
                />
                {/* <input
                  type={'date'}
                  placeholder="date"
                  value={user.address}
                  onChange={(e)=>setUser(e.target.value)}
                  name="date"
                /> */}
                <button onClick={postData} >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contatc;