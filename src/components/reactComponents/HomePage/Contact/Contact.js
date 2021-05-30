import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
    const [emailStatus, setEmailStatus] = useState(false)
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wp7wi5i', 'template_5218y3e', e.target, 'user_XNluT6BeDPzFvzW8zXkKh')
            .then((result) => {
                console.log(result);
                setEmailStatus(true);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className='pb-5'>
            <h1 className='text-center pt-5'>Contact Us</h1>
            <form id="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label><br></br>
                        <input type="text" class="form-control" name="name" required /><br></br>
                        <label>Email</label><br></br>
                        <input type="email" class="form-control" name="email" required /><br></br>
                        <label>Message</label><br></br>
                        <textarea name="message" class="form-control" required></textarea><br></br>
                        <input type="submit" value="Send" class="btn send-button" /><br></br>
                        {emailStatus && <p style={{color:'green'}}>Your mail has sent successfully</p>} 
                    </form>
        </div>
    );
};

export default Contact;