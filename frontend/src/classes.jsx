import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Importing Button from react-bootstrap
import homeImage from './PHOTO/R.jpg'; // Make sure the path is correct

function DataFetchingComponent() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (id === "-1") {
                    response = await axios.get('http://localhost:8081/classesR');
                } else {
                    response = await axios.get(`http://localhost:8081/classesRTeacher/${id}`);
                }
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('An error occurred while fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div>
            {/* Header */}
            <header className="py-5" style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="px-lg-2 d-flex justify-content-center align-items-center">
                    <div className="col-lg-5 col-xxl-4 mb-5 justify-content-center align-items-center">
                        <Link to={`/HomeTeacher`} className="text-decoration-none">
                            <div className="card bg-body-secondary border border-secondary h-100" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                    <h1 className="fs-10 text-body-emphasis">ADD CLASS</h1>
                                    <h3 className="mb-0 text-primary-emphasis mt-n1">by clicking here you can add a class</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </header> 

            <section className="pt-4">
                <div className="container px-lg-4">
                    <div className="row gx-lg-5">
                        {data && data.map((classData, index) => (
                            <div key={index} className="col-lg-4 col-xxl-4 mb-5">
                                <Link to={`/ClassGenerate/${classData.CLASS_ID}`} className="text-decoration-none">
                                    <div className="card bg-body-secondary border border-secondary h-100" style={{ transition: 'background-color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.classList.add('bg-primary-subtle') }} onMouseLeave={(e) => { e.currentTarget.classList.remove('bg-primary-subtle') }}>
                                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                            <h1 className="fs-10 text-body-emphasis">{classData.CLASS_NAME}</h1>
                                            <h3 className="mb-0 text-primary-emphasis mt-n1">max support: {classData.student_suport}</h3>
                                            <h3 className="mb-0 text-primary-emphasis mt-n1">YEAR: {classData.YEAROFPASS}</h3>
                                            <h3 className="mb-0 text-primary-emphasis mt-n1">SEMESTER: {classData.SEMESTER}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
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
                                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur elit.</p>
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

export default DataFetchingComponent;
