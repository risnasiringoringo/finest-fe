
import { useState} from "react";
import { Breadcrumb, Modal } from "react-bootstrap";
import { Role } from "./Role";
import { useNavigate } from "react-router-dom"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const response = await fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      const { token, first_name } = data; 
      localStorage.setItem("token", token); 
      localStorage.setItem("firstName", first_name); 
  
      
      const decodedToken = JSON.parse(atob(token.split(".")[1])); 
      const { roleId } = decodedToken;
  
      
      if (roleId === 2) {
        navigate("/seller/dashboard"); 
      } else {
        setErrorMessage("Akun kamu tidak terdaftar sebagai fish farmer");
      }
    } else {
      setErrorMessage(data.message || "Login failed");
    }
  };
  
  


  const [showModal, setShowModal] = useState(false); 

  const handleCloseModal = () => setShowModal(false); 
  const handleShowModal = () => setShowModal(true); 
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img src="/assets/img/login.png" alt="Gambar Login" style={styles.image}></img>     
      </div>
      <div style={styles.formSection}>
        <h2 style={styles.title}>Log In | Fish Farmer</h2>
        <p style={styles.subtitle}>Bertemu lagi!, ayo masuk ke akun kamu!</p>
        <Breadcrumb style={styles.breadcrumb}>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Login</Breadcrumb.Item>
        </Breadcrumb>
        <form style={styles.form} onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input} 
          />
          <div style={styles.options}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" style={styles.checkbox} /> Ingat saya
            </label>
            <a href="#" style={styles.link}>Lupa password?</a>
          </div>
          <button type="submit" style={styles.loginButton}>Masuk</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
        <p style={styles.footer}>
          Pengguna baru? <a href="#" style={styles.link} onClick={handleShowModal}>Daftar</a>
        </p>
      </div>

      <Modal className="modal-xl" show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Daftar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Role />
        </Modal.Body>
        <Modal.Footer>
          <span>Pilih tipe akun kamu dulu, kemudian kita menyelam!</span>
        </Modal.Footer>
      </Modal>    
    </div>   
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  imageSection: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  formSection: {
    flex: 1,
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: 0,
    color: '#666',
  },
  breadcrumb: {
    marginBottom: '0px',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: '5px',
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  loginButton: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#334C65',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  footer: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
  },
};

export default LoginForm;