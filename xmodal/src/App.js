import './App.css';
import {useState} from 'react';

function App() {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!username || !email || !phone || !dob){
      return alert('Please fill in all fields.');
    }
    if(!email.includes('@')){
      return alert('Invalid email. Please check your email address.');
    }
    if(!/^\d{10}$/.test(phone)){
      return alert('Invalid phone number. Please enter a 10-digit phone number.');
    }
    const todatDate = new Date();
    const selectedDate = new Date(dob);
    if(selectedDate > todatDate){
      return alert('Invalid date of birth. Please enter a valid date.');
    }
  };

  

  return (
    <div className="container">
      <div>
        <h1>User Details Modal</h1>
      </div>
      <button className='openForm' onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className='modal' onClick={closeModal}>
          <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <label htmlFor='username'>Username:</label>
              <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={e => setUsername(e.target.value)} 
              />
              <label htmlFor='email'>Email Address:</label>
              <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)} 
              />
              <label htmlFor='phone'>Phone Number:</label>
              <input
                  type='tel'
                  id='phone'
                  value={phone}
                  onChange={e => setPhone(e.target.value)} 
              />
              <label htmlFor='dob'>Date of Birth:</label>
              <input
                  type='date'
                  id='dob'
                  value={dob}
                  onChange={e => setDob(e.target.value)} 
              />
              <button type='submit' className='submit-button'>Submit</button>    
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
