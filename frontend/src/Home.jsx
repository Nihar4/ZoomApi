import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './stylesheet1.css';

// Import statements...

function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:8081/')
          .then(res => {
              setData(res.data);
              setLoading(false);
          })
          .catch(err => {
              console.error(err);
              setError('An error occurred while fetching data');
              setLoading(false);
          });
  }, []);

  const handleDelete = (studentId) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this student?");
      if (confirmDelete) {
          axios.delete(`http://localhost:8081/deleteStudent/${studentId}`)
              .then(() => {
                  setData(data.filter(student => student.STUDENT_ID !== studentId));
              })
              .catch(err => {
                  console.error(err);
                  // Handle error while deleting student
              });
      }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
        {/* Responsive navbar */}
        {['md'].map(expand => (
        <Navbar key={expand} expand={expand} className="bg-secondary bg-gradient">
          <Container fluid>
            <Navbar.Brand href="http://localhost:3000">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="http://localhost:3000/home">students</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                  <NavDropdown.Item href="http://localhost:3000/home">Student </NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/Classes">classes</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/HomeTeacher">teacher</NavDropdown.Item>
                    <NavDropdown.Item href="http://localhost:3000/createQCMAll/1">TEST</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">log out</NavDropdown.Item>
                  </NavDropdown>
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
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}


<div class="custom-bg d-flex justify-content-center align-items-center">
    <div class="custom-container">
        <div class="custom-content">
            <h2>Student List</h2>
            <div class="custom-btn">
                <Link to="/create" class="custom-btn-create">Create +</Link>
            </div>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && <tr><td colSpan="4">No students found</td></tr>}
                    {data.map((student, index) => (
                        <tr key={index}>
                            <td>{student.STUDENT_NAME}</td>
                            <td>{student.STUDENT_PASSWORD}</td>
                            <td>{student.STUDENT_PHONE}</td>
                            <td class="custom-btn">
                                <Link to={`/read/${student.STUDENT_ID}`} class="custom-btn-read">Read</Link>
                                <Link to={`/editStudent/${student.STUDENT_ID}`} class="custom-btn-edit">Edit</Link>
                                <button class="custom-btn-delete" onClick={() => handleDelete(student.STUDENT_ID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>





      <div className="container-fluid">
  <footer className="text-center text-lg-start text-white" style={{ backgroundColor: 'black' }}>
    <div className="container p-4 pb-0" style={{ backgroundColor: 'black' }}>
      <section>
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur elit.
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a className="text-white" href="#">MDBootstrap</a>
            </p>
            <p>
              <a className="text-white" href="#">MDWordPress</a>
            </p>
            <p>
              <a className="text-white" href="#">BrandFlow</a>
            </p>
            <p>
              <a className="text-white" href="#">Bootstrap Angular</a>
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
            <Button className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }}>
              <i className="fab fa-facebook-f"></i>
            </Button>
            {/* Add other social media buttons here */}
          </div>
        </div>
      </section>
    </div>
    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright: <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
</div>
    </div>



      
  );
}

export default Home;
