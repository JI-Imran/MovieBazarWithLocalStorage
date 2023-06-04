import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='row'>
                <h1>Contact with Us</h1>
                <input type="name" placeholder='Type your name'/>
                <input type="email" placeholder='Type your email'/>
                <textarea placeholder='Type your message' name="" id="" cols="30" rows="10"></textarea>                
                <button type="submit" className="btn btn-primary">SEND EMAIL</button>
            </div>
            <img src="https://unsplash.com/photos/FWhYdyxLduA" alt="" />
            {/* <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div> */}
        </div>
    );
};

export default Contact;