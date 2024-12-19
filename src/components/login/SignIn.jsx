import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const SignUp = () => {
  const location = useLocation();
  const role_id = location.state?.role_id || '';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role_id: '',
    first_name: '',
    last_name: '',
    email: '',
    no_hp: '',
    password: '',
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3000/api/v1/register', {
        ...formData,
        role_id
      });
      alert(response.data.message); 

      navigate('/login');
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      alert('Pendaftaran gagal: ' + (error.response?.data.message || error.message));
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="image-section">
          <img src="/assets/img/login.png" alt="Boat on water" style={{backgroundColor: "#fff"}}/>
        </div>
        <div className="form-section">
          <h1>Mendaftar</h1>
          <p>Selamat datang di Finest, ayo buat akun kamu!</p>
          <form onSubmit={handleSubmit}>
            <div className="name-group">
              <div className="input-group">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Nama depan"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="last_name"
                  placeholder="Nama belakang"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="no_hp"
                placeholder="Nomor HP"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Kata sandi"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-group" style={{cursor: "default", color: "green"}}>
              <span>Kamu mendaftar sebagai {role_id === 3 ? 'Investor' : 'Fish Farmer'}</span>
            </div>
            <button type="submit" className="signup-btn">Sign Up</button>
            <button type="button" className="google-btn">
              <img src="/assets/img/google.png" alt="Google Icon" />
              Masuk dengan google
            </button>
          </form>
        </div>
      </div>
      <style>
        {`
          .signup-container {
            display: flex;
            height: 100vh;
            background-color: #f9f9f9;
          }
          .image-section {
            flex: 1;
            overflow: hidden;
          }
          .image-section img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .form-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            background-color: white;
          }
          .form-section h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          .form-section p {
            color: #777;
            margin-bottom: 1.5rem;
          }
          .name-group {
            display: flex;
            gap: 1rem;
            width: 100%;
          }
          .input-group {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
          }
          .input-group input, .input-group select {
            border: none;
            outline: none;
            width: 100%;
            padding: 0.5rem;
          }
          .signup-btn {
            width: 100%;
            padding: 0.7rem;
            border: none;
            border-radius: 5px;
            background-color: #374151;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          .google-btn {
            width: 100%;
            padding: 0.7rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1rem;
            background-color: white;
          }
          .google-btn img {
            width: 20px;
            height: 20px;
            margin-right: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default SignUp;
