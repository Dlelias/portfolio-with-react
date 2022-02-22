import { useState } from "react"
import "./contact.scss"

export default function Contact(){
    const [message, setMessage] = useState(false)

    const handleSubmit =(event) =>{
        event.preventDefault();
        setMessage(true)
    }
    return (
        <div className= "contact" id="contact">
            <div className="left">
                <img src="https://cdn.pixabay.com/photo/2015/02/27/08/12/handshake-651818_960_720.png" alt="handshake"/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form on onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thank you for your message. I will response as soon as possible. </span>}
                </form>
            </div>
        
        </div>
    )
}