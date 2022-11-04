import React, { useEffect, useState } from 'react';
import '../Contact.css';
import { GrCheckmark } from 'react-icons/gr'

function Contact() {

    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        isChecked: false
    })

    useEffect(() => {
        const submitBtn = document.querySelector('.contact-form .send-msg')
        const inputs = document.querySelectorAll('.contact-form .value')
        const form = document.querySelector('.contact-form')
        const load = document.querySelector('.load')
        const notification = document.querySelector(".success")
        const consent = document.querySelector(".consent")

        form.addEventListener('submit', submitForm)
        function submitForm(e){
            e.preventDefault()
            inputs.forEach(input => {
                input.style.borderColor = "gray"
                input.nextElementSibling.textContent = ""
            })
            consent.textContent = ''

            let valid = true
            

            if(inputs[0].value === "" || inputs[0].value.length < 3 || /\d/.test(inputs[0].value)) {
                inputs[0].nextElementSibling.textContent = "name should contain at least 3 letters"
                valid = false
                inputs[0].style.borderColor = "red";
            }

            if(inputs[1].value === "" || inputs[1].value.length < 3 || /\d/.test(inputs[1].value)) {
                inputs[1].nextElementSibling.textContent = "name should contain at least 3 letters"
                valid = false
                inputs[1].style.borderColor = "red";
            }

            if(inputs[2].value.match(/^[a-zA-Z0-9.!#$%&*+//_{|}~]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/)) {
                inputs[2].nextElementSibling.textContent = ""
            } else {
              inputs[2].nextElementSibling.textContent = "invalid email"
              valid = false
              inputs[2].style.borderColor = "red"
            }

            if(inputs[3].value.length < 3 || inputs[3].value.length > 50|| /\d/.test(inputs[3].value)){
                inputs[3].nextElementSibling.textContent = "message should contain at least 3 letters but not more than 50 letters";
                inputs[3].style.borderColor = "red"
                valid = false;
            }

            if(inputs[4].checked === false){
                valid = false
                consent.textContent = "you are required to tick this box to continue"
            }

            if(valid){

                load.style.display = "block"
                submitBtn.disabled = true

                const myInterval = setInterval(resetForm, 3000)
                function resetForm(){
                    setFormData( {
                        firstName: '',
                        lastName: '',
                        email: '',
                        message: '',
                        isChecked: false
                    })
                    clearInterval(myInterval)
                }

                setTimeout(HideLoader, 3000)
                function HideLoader(){
                    load.style.display = "none"
                }

                setTimeout(enableButton, 3000)
                function enableButton(){
                    submitBtn.disabled = false
                }

                setTimeout(showNotification, 3000)
                function showNotification(){
                    notification.classList.add('notification')
                }

                const removeNotification = setInterval(clearNotification, 5000)
                function clearNotification(){
                    notification.classList.remove('notification')
                    clearInterval(removeNotification)
                }
            }

            
        }
    
    }, [])

    
        
    function updateForm(e){
        const {name, value, type, checked} = e.target
        setFormData(previousVal => {
            return {
               ...previousVal,
               [name] : type === "checkbox" ? checked : value
            }
        })
    }


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
                        className='letter value'
                        type='text'
                        placeholder='Enter your first name'
                        name='firstName'
                        value={formData.firstName}
                        onChange={updateForm}
                    />
                    <div className='error'></div>
                </div>

                <div className='last-name'>
                    <p>Last name</p>
                    <input 
                        id='last_name'
                        className='letter value'
                        type='text'
                        placeholder='Enter your last name'
                        name='lastName'
                        value={formData.lastName}
                        onChange={updateForm}
                    />
                    <div className='error'></div>
                </div>

                <div className='email'>
                    <p>Email</p>
                    <input
                        id='email'
                        className='letter value'
                        type='email'
                        placeholder='yourname@email.com'
                        name='email'
                        value={formData.email}
                        onChange={updateForm}
                    />
                    <div className='error'></div>
                </div>

                <div className='message'>
                    <p>Message</p>
                    <textarea
                        id='message'
                        className='letter resize value'
                        placeholder="send me a message and I'll reply you as soon as possible..."
                        name='message'
                        value={formData.message}
                        onChange={updateForm}

                    ></textarea>
                    <div className='error'></div>
                </div>

                <div className='check'>
                    <input 
                        type='checkbox'
                        className='value'
                        id='isChecked'
                        checked={formData.isChecked}
                        name="isChecked"
                        onChange={updateForm}
                    /><span></span>
                    <label htmlFor='isChecked'>
                        {`You agree to providing your data to {name} who may contact you.`}
                    </label>
                    <div className='error consent'></div>
                </div>

                <button id='btn__submit' className='send-msg'>
                    Send message
                </button>
                <div className='load-container'><span className='load'></span></div>
            </form>
        </div>
        <div className='success'>
            Form sent successfully<i className='white-mark'><GrCheckmark /></i>
        </div>
    </div>
  )
}

export default Contact