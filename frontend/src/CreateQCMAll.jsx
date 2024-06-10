import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import homeImage from './PHOTO/R.jpg';
import homeImagestudent from './PHOTO/back.webp';
import teacher from './PHOTO/green.webp';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

function CreateQCMAll() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedResult, setSelectedResult] = useState("");
    const [qcmTitle, setQcmTitle] = useState("");
    const [dataav, setDataav] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/classesRTAvelebal/${id}`)
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('An error occurred while fetching data');
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:8081/classesRTAvelebalsea/${id}`)
            .then(res => {
                setDataav(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);

                //setError('An error occurred while fetching data');
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedResult && qcmTitle) {
            axios.post(`http://localhost:8081/QCMcreat/${selectedResult}/${qcmTitle}`)
                .then(response => {
                    console.log('QCM created successfully:', response.data);
                    setSelectedResult("");
                    setQcmTitle("");
                    setError(null);
                    alert('QCM created successfully!');
                })
                .catch(error => {
                   
                    console.error('Error creating QCM:', error);
                    setError('An error occurred while creating QCM');
                });
        } else {
            setError('Both result selection and QCM title are required');
        }
    };

    return (
        <div className="bg-custom-color">
            {['md'].map(expand => (
                <Navbar key={expand} expand={expand} className="bg-secondary bg-gradient">
                    <Container fluid>
                        <Navbar.Brand href="http://localhost:3000/homeAdmine">Navbar Offcanvas</Navbar.Brand>
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
                                    <Nav.Link href="http://localhost:3000/Classes">classes</Nav.Link>
                                    <Nav.Link href="http://localhost:3000/HomeTeacher">teacher</Nav.Link>
                                    <Nav.Link href="http://localhost:3000/createQCMAll/1">exersice</Nav.Link>
                                    <Nav.Link href="#link">courses</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="btn btn-light">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <header className="py-5" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="row justify-content-center px-lg-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-8">
                            <div className="row gx-lg-5">
                                <div key={1} className="col-lg-6 col-xxl-6 mb-5">
                                    <div className="card bg-body-secondary border border-secondary h-100" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                                <i className="bi bi-collection"></i>
                                            </div>
                                            <h1 className="fs-10 text-danger">ADD QCM</h1>
                                            <form onSubmit={handleSubmit}>
                                                <div className="mt-4">
                                                    <select className="form-control mb-2" value={selectedResult} onChange={(e) => setSelectedResult(e.target.value)}>
                                                        <option value="">Select Result</option>
                                                        {dataav && dataav.map((classDataav, index) => (
                                                            <option key={index} value={classDataav.CLASS_ID}>{classDataav.CLASS_NAME}</option>
                                                        ))}
                                                    </select>
                                                    <input type="text" placeholder="Enter QCM Title" className="form-control mb-2" value={qcmTitle} onChange={(e) => setQcmTitle(e.target.value)} />
                                                    <button type="submit" className="btn btn-primary">Register</button>
                                                </div>
                                            </form>
                                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                                        </div>
                                    </div>
                                </div>
                                <div key={2} className="col-lg-6 col-xxl-6 mb-5">
                                    <div className="card bg-body-secondary border border-secondary h-100" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                                <i className="bi bi-collection"></i>
                                            </div>
                                            <h1 className="fs-10 text-danger">ADD write TEST</h1>
                                            <div className="mt-4">
                                                <input type="text" placeholder="Enter QCM Name" className="form-control mb-2" />
                                                <button className="btn btn-primary">Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="pt-4">
                <div className="container px-lg-4">
                    <div className="row gx-lg-5">
                        {loading ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div className="alert alert-danger">{error}</div>
                        ) : (
                            data && data.map((classData, index) => (
                                <div key={index} className="col-lg-4 col-xxl-4 mb-5">
                                    <Link to={`/CreateQCM/${classData.ID_QCM}`} className="text-decoration-none">
                                        <div className="card bg-body-secondary border border-secondary h-100" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
                                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                                                    <i className="bi bi-collection"></i>
                                                </div>
                                                <h1 className="fs-10 text-body-emphasis">class:</h1>
                                                <h1 className="fs-10 text-primary-emphasis">{classData.CLASS_NAME}</h1>
                                                <h6 className="fs-10 ">`</h6>
                                                <h1 className="fs-10 text-body-emphasis">title:</h1>
                                                <h1 className="fs-10 text-primary-emphasis">{classData.TITLE_QCM}</h1>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CreateQCMAll;
