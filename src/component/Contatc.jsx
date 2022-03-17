import React, {useState} from 'react'
import './contact.css'

function Contatc() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message:''
    });
    let name, value;
    const getUserDate = (event) => {
        name= event.target.name;
        value=event.target.value;
        setUser({...user, [name]: value });
    }

    const postData = async (e) => {
        const { name, email, phone, address, message } = user;
            
            e.preventDefault();
            const data = await fetch(
                "https://contact-page-e337f-default-rtdb.firebaseio.com/contact-form.json",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        address,
                        message,
                    }),
                }
                );
                
                if (data) {
                    setUser({
                        name: "",
                        email: "",
                        phone: "",
                        address: "",
                        message: "",
                    });
                }
                
                window.alert('form submit sir:)')
        

    }
  return (
    <>
      <div class="container">
        <div class="form-container">
          <div class="left-container">
            <div class="left-inner-container">
              <h2>Let's Chat</h2>
              <p>
                Whether you have a question, want to start a project or simply
                want to connect.
              </p>
              <br />
              <p>Feel free to send me a message in the contact form</p>
            </div>
          </div>
          <div class="right-container">
            <div class="right-inner-container">
              <form method='POST'>
                <h2 class="lg-view">Contact Us</h2>
                <h2 class="sm-view">Let's Chat</h2>
                <p>* Required</p>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
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
                <textarea
                  rows="3"
                  placeholder="Address..."
                  value={user.address}
                  onChange={getUserDate}
                  autoComplete='no'
                  name="address"
                ></textarea>
                <textarea
                  rows="1"
                  placeholder="Message..."
                  value={user.message}
                  onChange={getUserDate}
                  autoComplete='no'
                  name="message"
                ></textarea>
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