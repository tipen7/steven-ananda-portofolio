import emailjs from '@emailjs/browser';
import { Animation } from "../Animation";
import { useState } from 'react';

export const Contact = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    })

    const SERVICE_ID = "service_6mu6ctn";
    const TEMPLATE_ID = "template_n48kcqm";
    const PUBLIC_KEY = "0zWR3ZNNoiLI_-qDF";

    const SubmitMessage = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((result) => {
            alert("Message sent succesfully!");
            setFormData({name: "", email: "", message: ""})
        })
        .catch(() => alert("Sorry, message can't be send. Try again!"));
    };

    return (
        <section 
        id="contact" 
        className="min-h-screen flex items-center justify-center py-20">

            <Animation>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Contact Me!
                </h2>

                <form className="space-y-6" onSubmit={SubmitMessage}>
                    <div className="relative">
                        <input type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Input your name..."
                        onChange={(e) => setFormData({...formData, name: e.target.value})}>
                        

                        </input>

                    </div>
                    <div className="relative">
                        <input type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Email Address...                                      ex: @tipdyanizha@gmail.com"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}>
                        
                        </input>

                    </div>
                    <div className="relative">
                        <textarea type="message" 
                        id="message" 
                        name="message" 
                        required
                        rows={4}
                        value={formData.message}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                        placeholder="Type your message here..."
                        onChange={(e) => setFormData({...formData, message: e.target.value})}>

                        </textarea>

                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Send Message
                    </button>

                </form>

            </div>

            </Animation>
        </section>
    )
}