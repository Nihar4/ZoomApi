import { useState } from 'react'; // Import other necessary hooks
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your login logic here

        axios.post(`http://localhost:8081/login/${email}/${password}`)
            .then(res => {
                if (res.data.adminId !== -1) { // Fixed typo 'id' to 'adminId'
                    // If user exists, navigate to the home page with admin ID
                    const adminId = res.data.adminId;
                    window.location.href = `/homeAdmine`;
                } else {
                    // If user does not exist, display error message
                    axios.post(`http://localhost:8081/loginteacher/${email}/${password}`)
                    .then(res => {
                        if (res.data.adminId !== -1) { // Fixed typo 'id' to 'adminId'
                            // If user exists, navigate to the home page with admin ID
                            const adminId = res.data.adminId;
                            window.location.href = `/hometechh/${adminId}`;
                        } else {
                            // If user does not exist, display error message
        
        
        
                            
                            setError('Invalid email or password');
                        }
                    })



                    setError('Invalid email or password');
                }
            })
            .catch(err => {
                console.error(err);
                setError('Error logging in');
            });
    };

    return (
        <section className="vh-100 bg-body" style={{ backgroundColor: '#eee' }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
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
};

export default AdminLogin;
