import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null); // Initialize as null or {}
    const [values, setValues] = useState({
        STUDENT_NAME: '',
        STUDENT_MAIL: '',
        STUDENT_PASSWORD: '',
        STUDENT_ADDRESS: '',
        STUDENT_PHONE: '',
        repassword: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8081/readStudent/${id}`)
            .then(res => {
                setStudent(res.data);
                 console.log(res.data);
                setValues({
                    STUDENT_NAME: res.data && res.data[0].STUDENT_NAME,
                    STUDENT_MAIL: res.data && res.data[0].STUDENT_MAIL,
                    STUDENT_PASSWORD: res.data && res.data[0].STUDENT_PASSWORD,
                    STUDENT_ADDRESS: res.data && res.data[0].STUDENT_ADDRESS,
                    STUDENT_PHONE: res.data && res.data[0].STUDENT_PHONE,
                    repassword: ''
                });
                
            })
            .catch(err => console.log(err));
    }, [id]);


    
    const handleChange = (field) => (e) => {
        setValues(prevState => ({
            ...prevState,
            [field]: e.target.value // Update the state dynamically with the new value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        axios.post(`http://localhost:8081/studentEdit/${id}`, values)
          .then(res => {
            console.log(res);
            navigate('/');
          })
          .catch(err => console.log(err));    
    };

    return (
        <div>
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
                                                        <input 
                                                            type="text" 
                                                            name='name' 
                                                            className="form-control" 
                                                            value={values.STUDENT_NAME} 
                                                            onChange={handleChange('STUDENT_NAME')} 
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>
                                                {/* Other input fields */}
                                                {/* Other input fields */}
<div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
        <input 
            type="email" 
            name='email' 
            className="form-control" 
            value={values.STUDENT_MAIL} 
            onChange={handleChange('STUDENT_MAIL')} 
        />
        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
    </div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
        <input 
            type="text" 
            name='phone' 
            className="form-control" 
            value={values.STUDENT_PHONE} 
            onChange={handleChange('STUDENT_PHONE')} 
        />
        <label className="form-label" htmlFor="form3Example3c">Your Phone</label>
    </div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
        <input 
            type="text" 
            name='address' 
            className="form-control" 
            value={values.STUDENT_ADDRESS} 
            onChange={handleChange('STUDENT_ADDRESS')} 
        />
        <label className="form-label" htmlFor="form3Example3c">Your Address</label>
    </div>
</div>
<div className="d-flex flex-row align-items-center mb-4">
    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
    <div className="form-outline flex-fill mb-0">
        <input 
            type="password" 
            name='password' 
            className="form-control" 
            value={values.STUDENT_PASSWORD} 
            onChange={handleChange('STUDENT_PASSWORD')} 
        />
        <label className="form-label" htmlFor="form3Example4c">Password</label>
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
        </div>
    );
}

export default EditStudent;
