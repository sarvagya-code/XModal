import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const today = new Date();
        const selectedDate = new Date(dob);

        if (!email.includes('@')) {
          alert('Invalid email. Please check your email address.');
          return;
        }else if (!/^\d{10}$/.test(phone)) {
          alert('Invalid phone number. Please enter a 10-digit phone number.');
          return;
        }else if (selectedDate > today) {
          alert('Invalid date of birth. Please enter a valid date.');
          return;
        }else if(!username || !email || !phone || !dob) {
          alert('Please fill in all fields.');
          return;
      }

        

        // If all validations pass, you can perform further actions such as submitting data to a server or resetting the form

        setUsername('');
        setEmail('');
        setPhone('');
        setDob('');
        setIsOpen(false);
    };

    return (
        <div className='container'>
            <h1>User Details Modal</h1>
            <button className='openButton' onClick={openModal}>Open Form</button>
            {isOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;