import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import axios from 'axios';
import './stylesheet1.css'; // Ensure you have the corresponding CSS file

const qcm = 1;
const id_user = 1;

const QuizComponent = () => {
  const [seggectionData, setSeggectionData] = useState([]);
  const [qcmQuestionData, setQcmQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0); // Added for refreshing the div
  const [selectedSeggections, setSelectedSeggections] = useState([]);
  const userId = 1; // Define the userId here

  const fetchSeggectionData = (id) => {
    return axios.get(`http://localhost:8081/seggection/${id}`)
      .then(res => res.data)
      .catch(err => {
        console.error(err);
        throw new Error('An error occurred while fetching seggection data');
      });
  };

  useEffect(() => {
    // Fetch qcm question data
    axios.get(`http://localhost:8081/qcm_question/${qcm}`) // Assuming you always fetch QCM with ID 1
      .then(res => {
        setQcmQuestionData(res.data);
        return Promise.all(res.data.map(question => fetchSeggectionData(question.ID_QCM_QUESTION)));
      })
      .then(data => {
        setSeggectionData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('An error occurred while fetching data');
        setLoading(false);
      });
  }, []);

  const refreshDiv = () => {
    setRefreshKey(oldKey => oldKey + 1); // Change the key to force a re-render
  };

  const handleOptionChange = (questionIndex, seggectionId) => {
    setSelectedSeggections(prevState => {
      const updatedState = [...prevState];
      updatedState[questionIndex] = seggectionId;
      return updatedState;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    console.log('Selected Seggections:', selectedSeggections);
    
    const data = selectedSeggections.map((seggectionId, index) => ({
      ID_SEGGECTION: seggectionId,
      ID_QCM_QUESTION: qcmQuestionData[index].ID_QCM_QUESTION,
      answer: 'userAnswer' // Replace with actual answer if needed
    }));

    axios.get('http://localhost:8081/getDataToDelete')
      .then(response => {
        // Handle the response data here
        console.log("Data to delete:", response.data.data);
        const dataToDeleteCount = response.data.data.length;
        console.log("Number of data to delete:", dataToDeleteCount);
        for (let i = 0; i < dataToDeleteCount; i++) {
          axios.delete(`http://localhost:8081/deleteQCMuser/${response.data.data[i]}/1`) // Updated URL
          .catch(err => {
              console.error(err);
              // Handle error while deleting student
          });
        }
        // Use the count as needed
      })
      .catch(error => {
        // Handle errors here
        console.error("Error fetching data to delete:", error);
      });

    const selectedSeggectionsCount = selectedSeggections.length;
    for (let i = 0; i < selectedSeggectionsCount; i++) {
      try {
        const response = await axios.get(`http://localhost:8081/insert_user_qcm/1/${selectedSeggections[i]}/${qcm}`); // Assuming you always fetch QCM with ID 1
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      {['md'].map(expand => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
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
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
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

<div className="container mt-sm-5 my-1 custom-container">
  <Form onSubmit={handleSubmit}>
    {/* Render questions and seggections */}
    {loading ? (
      <div>Loading...</div>
    ) : error ? (
      <div className="error-message">Error: {error}</div>
    ) : (
      qcmQuestionData.map((question, index) => (
        <div key={index} className="question-container">
          <div className="question-header">
            <h5><b>Q. {question ? question.QCM_QUESTION : 'Loading...'}</b></h5>
          </div>
          {question && question.choseNumber === 1 ? (
            <div className="options-container">
              {/* Render seggectionData options */}
              {seggectionData[index].length > 0 ? seggectionData[index].map(option => (
                <label className="option-label" key={option.ID_SEGGECTION}>
                  <input
                    type="radio"
                    name={`radio${index + 1}`}
                    onChange={() => handleOptionChange(index, option.ID_SEGGECTION)}
                  />
                  <span className="checkmark"></span> {option.SEGGECTION}
                </label>
              )) : 'Loading options...'}
            </div>
          ) : (
            <div className="options-container">
              {/* Alternative options */}
              {seggectionData[index].length > 0 ? seggectionData[index].map(option => (
                <label className="option-label" key={option.ID_SEGGECTION}>
                  <input
                    type="radio"
                    name={`radio${index + 1}-${option.ID_SEGGECTION}`}
                    onChange={() => handleOptionChange(index, option.ID_SEGGECTION)}
                  />
                  <span className="checkmark"></span> {option.SEGGECTION}
                </label>
              )) : 'Loading options...'}
              {/* Button to reload the div */}
              <button className="delete-button" onClick={refreshDiv}>Delete my choice</button>
            </div>
          )}
        </div>
      ))
    )}

    {/* Save button */}
    <div className="text-center">
      <Button type="submit">Save Seggections</Button>
    </div>
  </Form>
</div>


      {/* Footer section */}
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
                  <p><a className="text-white" href="#">MDBootstrap</a></p>
                  <p><a className="text-white" href="#">MDWordPress</a></p>
                  <p><a className="text-white" href="#">BrandFlow</a></p>
                  <p><a className="text-white" href="#">Bootstrap Angular</a></p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
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
                  <Button className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }}>
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }}>
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </Button>
                  <Button className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }}>
                    <i className="fab fa-github"></i>
                  </Button>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default QuizComponent;

