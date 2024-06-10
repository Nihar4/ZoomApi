import React, { useState } from "react"; // Import useState from React
import axios from 'axios'; // Import axios
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminCreat(){
    
  const [values, setValues] = useState({
    ADMINE_NAME: '',
    ADMINE_MAIL: '',
    ADMINE_PASSWORD: '',
    JOB: '',
    ADMINE_PHONE: '',
    repassword: ''
  });

  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Make sure 'axios' and 'values' are defined
  axios.post('http://localhost:8081/Admine', values)
    .then(res => {
      console.log(res);
      //navigate('/');
    })
    .catch(err => console.log(err));    
};
  


  return (
    <section className="vh-150" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                    
                    
                    <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name='name' className="form-control" onChange={e => setValues ({...values, ADMINE_NAME:e.target.value})} />
                          <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name='email' className="form-control" onChange={e => setValues ({...values, ADMINE_MAIL:e.target.value})} />
                          <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name='phone' className="form-control" onChange={e => setValues ({...values, ADMINE_PHONE:e.target.value})} />
                          <label className="form-label" htmlFor="form3Example3c">Your Phone</label>
                        </div>
                      </div>
 <div className="d-flex flex-row align-items-center mb-4">
  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
  <div className="form-outline flex-fill mb-0">
    <select name='job' className="form-select" onChange={e => setValues ({...values, JOB:e.target.value})}>
      <option value="">Select Role</option>
      <option value="admine">Admin</option>
      <option value="teacher">Teacher</option>
    </select>
    <label className="form-label" htmlFor="form3Example3c">Role</label>
  </div>
</div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='password' className="form-control" onChange={e => setValues ({...values, ADMINE_PASSWORD:e.target.value})} />
                          <label className="form-label" htmlFor="form3Example4c">Password</label>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='repassword' className="form-control" />
                          <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">Register</button>
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

export default AdminCreat;
