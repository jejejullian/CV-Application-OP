import { useState } from 'react';

function GeneralInfo() {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="general-info-section">
      <h2>General Information</h2>
      
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={person.name} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={person.email} 
              onChange={handleChange} 
            />
          </label>
          <label>
            Phone:
            <input 
              type="tel" 
              name="phone" 
              value={person.phone} 
              onChange={handleChange} 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="view-mode">
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Phone:</strong> {person.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;