import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
    const [formData, setFormData] = useState({name:'',email:'',message:''});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const {username,email,message} = formData;

    const handleChangeInput = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    };

    const handleSubmit = () =>{
        if(formData.username.trim().length>0 && formData.email.trim().length>0 && formData.message.trim().length>0){
            setLoading(true);
            const contact = {
                _type:'contact',
                name:formData.username,
                email:formData.email,
                message:formData.message,
            };

            client.create(contact).then(()=>{
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err)=>console.log(err));
        }
    };

    return (
        <>
            <h2 className="head-text">Take a <span>coffee & chat</span> with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:shahreyar10.13@gmail.com" className="p-text">shahreyar10.13@gmail.com</a>   
                </div>    
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:+918377892081" className="p-text">+91 8377892081</a>
                </div>    
            </div>
            {!isFormSubmitted?(
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input 
                            type="text" 
                            className="p-text" 
                            placeholder="Your Name" 
                            required
                            name="username"
                            value={username}
                            onChange={handleChangeInput}
                        />    
                    </div>
                    <div className="app__flex">
                        <input 
                            type="email" 
                            className="p-text" 
                            placeholder="Your Email" 
                            required
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />    
                    </div>
                    <div>
                        <textarea 
                            className="p-text"
                            placeholder="Your Message"
                            name="message"
                            required
                            value={message}
                            onChange={handleChangeInput}
                        />    
                    </div>
                    <button
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}
                    >
                        {!loading?'Send Message':'Sending...'}    
                    </button>    
                </div>
            ):(
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!<br/>I will revert to you soon.   
                    </h3>
                </div>
            )}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer,'app__footer'),
    'contact',
    'app__whitebg',
);