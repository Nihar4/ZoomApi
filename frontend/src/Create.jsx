import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylesheet1.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // New variable
    const [address, setAddress] = useState(''); // New variable
    const [phone, setPhone] = useState(''); // New variable
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            STUDENT_MAIL: email,
            STUDENT_PASSWORD: password,
            STUDENT_NAME: name, // New variable
            STUDENT_ADDRESS: address, // New variable
            STUDENT_PHONE: phone // New variable
        };

        fetch('http://localhost:8081/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (response.ok) {
                navigate('/home');
            } else {
                throw new Error('Invalid email or password');
            }
        })
        .catch(error => setError(error.message));
    };

    return (
        <section className="vh-100 bg-body" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center ">
                    <div className="bg-light-subtle col-lg-12 col-xl-11">
                        <div className="bg-light-subtle card text-black" style={{ borderRadius: '25px' }}>
                            <div className="bg-light-subtle card-body p-md-5">
                                <div className="bg-light-subtle row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">criat student</p>
                                        {error && <p className="text-danger text-center">{error}</p>}
                                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                </div>
                                            </div>
                                            {/* New input fields */}
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4c">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-address-card fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        className="form-control"
                                                        value={address}
                                                        onChange={(e) => setAddress(e.target.value)}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4c">Your Address</label>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        className="form-control"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        required
                                                    />
                                                    <label className="form-label" htmlFor="form3Example4c">Your Phone</label>
                                                </div>
                                            </div>
                                            {/* End of new input fields */}
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
