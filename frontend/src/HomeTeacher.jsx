import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './stylesheet1.css';

function HomeTeacher() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/readteacher')
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

    const handleDeleteADMINE = (admineid) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this student?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8081/deleteAdmine/${admineid}`)
                .then(() => {
                    setData(data.filter(student => student.ADMINE_ID !== admineid));
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='custom-bg'>
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
                                    <Nav.Link href="http://localhost:3000/home">Students</Nav.Link>
                                    <Nav.Link href="http://localhost:3000/Classes">Classes</Nav.Link>
                                    <Nav.Link href="http://localhost:3000/HomeTeacher">Teacher</Nav.Link>
                                    <Nav.Link href="http://localhost:3000/createQCMAll/1">Exercise</Nav.Link>
                                    <Nav.Link href="#link">Courses</Nav.Link>
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

            <div className=" d-flex justify-content-center align-items-center">
                <div className="custom-container">
                    <div className="custom-content">
                        <h2>Student List</h2>
                        <div className="custom-btn">
                            <Link to="/AdminCreat" className="custom-btn-create">Create +</Link>
                        </div>
                        <table className="custom-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length === 0 && <tr><td colSpan="4">No students found</td></tr>}
                                {data.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.ADMINE_NAME}</td>
                                        <td>{student.ADMINE_EMAIL}</td>
                                        <td>{student.ADMIN_ID}</td>
                                        <td className="custom-btn">
                                            <Link to={`/AdmineRead/${student.ADMIN_ID}`} className="custom-btn-read">Read</Link>
                                            <Link to={`/editStudent/${student.ADMINE_ID}`} className="custom-btn-edit">Edit</Link>
                                            <button className="custom-btn-delete" onClick={() => handleDeleteADMINE(student.ADMIN_ID)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Footer */}
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

export default HomeTeacher;
