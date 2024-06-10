import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function ClassGenerate() { // Change export name to ClassGenerate
  const [showPage, setShowPage] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState(null);
  const [classr, setclassr] = useState(null);
  const [values, setValues] = useState({
        CLASS_NAME: '',
        YEAROFPASS: '',
        SEMESTER: '',
        student_suport: '',
        timining:'',
        taming_coure:''
    });
    

  const handleButtonClick = () => {
    setShowPage(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:8081/classesReadOne/${id}`)
        .then(res => {
          console.log(res.data.CLASS_ID);   
                setclassr(res.data);
                setValues({
                    CLASS_NAME: res.data.CLASS_NAME,
                    YEAROFPASS: res.data.YEAROFPASS,
                    SEMESTER: res.data.SEMESTER,
                    student_suport: res.data.student_suport,
                    timining: res.data.timining,
                    taming_coure: res.data.taming_coure,
                });
           
        })
        .catch(err => console.log(err));
}, [id]);

useEffect(() => {
  axios.get(`http://localhost:8081/studentnote/${id}`)
      .then(res => {
          console.log("Response:", res.data); // Log the response to see its structure
          setData1(res.data); // Set data1 from response
          setLoading1(false); // Set loading1 to false upon success
          console.log(res.data);
      })
      .catch(err => {
          console.error("Error fetching data:", err);
          setError('An error occurred while fetching data'); // Set error message
          setLoading1(false); // Ensure loading1 is set to false upon error
      });
}, [id]);




const handleChange = (field) => (e) => {
  setValues(prevState => ({
      ...prevState,
      [field]: e.target.value // Update the state dynamically with the new value
  }));
};


const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  axios.post(`http://localhost:8081/classeEdit/${id}`, values)
    .then(res => {
      console.log(res);
      //navigate('/');
    })
    .catch(err => console.log(err));    
};
//----------------------------------------------------------------------------------------------------------------



        
  return (
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

         

    
    
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <div className="bg-body card mb-4">
              <div className=" card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                <h5 className="my-3"> <> aziz</></h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary">Follow</button>
                  <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary ms-1">Message</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
          <div className="bg-body col-lg-8">
            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
            <div className="bg-body card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">class level </p>
                  </div>
                  <div className="col-sm-9">
                  <input type="text"   name='name' className="form-control" value={values.CLASS_NAME} onChange={handleChange('CLASS_NAME')} 
/>  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">student suportl</p>
                  </div>
                  <div className="col-sm-9">
                  <input type="text"  name='student_suportl' className="form-control" value={values.student_suport}  onChange={handleChange('student_suport')} 
/>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">N student</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">7</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">year</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{values.YEAROFPASS}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">semester </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0"> {values.student_suport}  </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">start end </p>
                  </div>
                  <div className="col-sm-9">
                  <input type="text"   name='timining' className="form-control" value={values.timining} onChange={handleChange('timining')}  />
 
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">start end </p>
                  </div>
                  <div className="col-sm-9">
                  <input type="text"   name='taming_coure' className="form-control" value={values.taming_coure} onChange={handleChange('taming_coure')}
                  
                  />

                  </div>
                  
                </div>
                </div>
                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                  </div>
              </div>
            
            </form>
            <div className="row">
              <div className="col-md-12">
                <div className="bg-body card mb-4 mb-md-0">
                  <div className="bg-body card-body">
                    <div className="w-90 bg-white rounded p-3 col-sm-8">
                        <h1>Student List</h1>                    
                    </div>
                    <div className="d-flex justify-content-end">
                        <>
    <button className="btn btn-success" onClick={handleButtonClick}>
        Create +
      </button>
      {showPage && (
        <div className="small-page">
          <p>This is the small page content.</p>
          <button onClick={() => setShowPage(false)}>Close</button>
        </div>
      )}
      </>

                    </div>
                    
                    {data1 && (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">NAME</th>
        <th scope="col">Note 1</th>
        <th scope="col">Note 2</th>
        <th scope="col">Note </th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
    {data1.map((item, index) => (
        <tr key={index}>
          <th scope="row">{item.STUDENT_NAME || '-'}</th>
          <td><p>{item.NOTE1 || '-'}</p></td>
          <td><p>{item.NOTE2 || '-'}</p></td>
          <td><p>{item.NOTE || '-'}</p></td>
          <td><button className="btn btn-sm btn-danger">modify</button></td>
        </tr>
      ))}
    </tbody>
    
  </table>
)}





                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}


export default ClassGenerate;
