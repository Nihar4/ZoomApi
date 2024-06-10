import React from 'react';
import Home from './Home';
import { Link } from 'react-router-dom';
import HomeTeacher from './HomeTeacher';
import homeImage from './PHOTO/R.jpg';
import homeImagestudent from './PHOTO/back.webp';
import teacher from './PHOTO/back.webp';
import classes from './PHOTO/calor.png';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const id_prof=1;


function Reaslhome() {
    return (
      <div className="bg-custom-color ">
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
                  <Nav.Link href="http://localhost:3000/Classes">classes</Nav.Link>
                  <Nav.Link href="http://localhost:3000/HomeTeacher">teacher</Nav.Link>
                  <Nav.Link href="http://localhost:3000/CreateQCMAllAdmine">exersice</Nav.Link>
                  <Nav.Link href="#link">courses</Nav.Link>
                  
                  
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


      <header className="py-5" style={{  backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
    <div className="">
        <h1 className="text-light display-4">Your Title Here</h1>
    </div>
</header>

    



        <section class="pt-4">
            <div class="container px-lg-5">
               
                <div class="row gx-lg-5">
                    
               <div className="col-lg-6 col-xxl-4 mb-5">
    <Link to={`/home`} className="text-decoration-none">
        <div className="card bg-body-secondary border border-secondary h-100 border border-secondary" style={{ transition: 'background-color 0.3s', }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ transition: 'background-color 0.3s' }}>
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                <h1 className="fs-10 text-body-emphasis">generate student</h1>
                <h3 className="mb-0 text-danger">`</h3>
                <h3 className="mb-0 text-primary-emphasis mt-n1">In this section, you can generate student.</h3>
            </div>
        </div>
    </Link>
</div>





<div className="col-lg-6 col-xxl-4 mb-5">
    <Link to={`/HomeTeacher`} className="text-decoration-none">
        <div className="card bg-body-secondary border border-secondary h-100 border border-secondary" style={{ transition: 'background-color 0.3s', }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ transition: 'background-color 0.3s' }}>
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                <div className="mb-3"> 
                    <h1 className="fs-10 text-body-emphasis">generate teacher</h1>
                </div>
                <div>
                    <h3 className="mb-0 text-primary-emphasis mt-n1">In this section, you can generate teachers..</h3>
                </div>
            </div>
        </div>
    </Link>
</div>




               

<div class="col-lg-6 col-xxl-4 mb-5">
    <Link to={`/Classes/-1`} className="text-decoration-none" >
        <div class="card bg-body-secondary border border-secondary h-100 border border-secondary" style={{ transition: 'background-color 0.3s', }}  onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ transition: 'background-color 0.3s' }}>
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                <h1 class="fs-10 text-body-emphasis">generate classes</h1>
                <h3 class="mb-0 text-primary-emphasis mt-n1">In this section, you can generate classes..</h3>
            </div>
        </div>
    </Link>
</div>



<div class="col-lg-6 col-xxl-4 mb-5">
    <Link to={`/CreateQCMAllAdmine`} className="text-decoration-none">
        <div class="card bg-body-secondary border border-secondary h-100 border border-secondary" style={{ transition: 'background-color 0.3s', }}  onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ transition: 'background-color 0.3s' }}>
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                <h1 class="fs-10 text-body-emphasis">generate exersice</h1>
                <h3 class="mb-0 text-primary-emphasis mt-n1">In this section, you can generate exersice..</h3>
            </div>
        </div>
    </Link>
</div>

<div class="col-lg-6 col-xxl-4 mb-5">
    <Link to={`/createQCMAll/${id_prof}`} className="text-decoration-none">
        <div class="card bg-body-secondary border border-secondary h-100 border border-secondary" style={{ transition: 'background-color 0.3s', }}  onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0" style={{ transition: 'background-color 0.3s' }}>
                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                <h1 class="fs-10 text-body-emphasis">generate courses</h1>
                <h3 class="mb-0 text-primary-emphasis mt-n1">In this section, you can generate courses..</h3>
            </div>
        </div>
    </Link>
</div>



                    
                  
                </div>
            </div>
        </section>
        
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
    </div>
   
    );
}

export default Reaslhome;
