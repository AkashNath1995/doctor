import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Name' required/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" placeholder='xyz@abc.com'/>
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" placeholder='Tell Us about your query...'/>
                </div>

                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
