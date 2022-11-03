import React from 'react';
import '../Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-body'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything you have in mind.</p>

            <form className='contact-form'>
                <div className='first-name'>
                    <p>First name</p>
                    <input 
                        id='first_name'
                        className='letter'
                        type='text'
                        placeholder='Enter your first name'
                    />
                </div>

                <div className='last-name'>
                    <p>Last name</p>
                    <input 
                        id='last_name'
                        className='letter'
                        type='text'
                        placeholder='Enter your last name'
                    />
                </div>

                <div className='email'>
                    <p>Email</p>
                    <input
                        id='email'
                        className='letter'
                        type='email'
                        placeholder='yourname@email.com'
                    />
                </div>

                <div className='message'>
                    <p>Message</p>
                    <textarea
                        id='message'
                        className='letter resize'
                        placeholder="send me a message and I'll reply you as soon as possible..."

                    ></textarea>
                </div>

                <div className='check'>
                    <input 
                        type='checkbox'
                    />
                    <label>
                        {`You agree to providing your data to {name} who may contact you.`}
                    </label>
                </div>

                <button id='btn__submit' className='send-msg'>
                    Send message
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact