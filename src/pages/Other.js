import React from 'react';
import { Container } from 'react-bootstrap';

const Other = () => {
    return (
        <div>
            <Container>
                <div>
                    <h1 className='text-center my-3'>Our Other <span className='text-primary'>Service</span> Partners</h1>
                </div>
                <div className='row d-flex justify-content-between mt-3'>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="https://i.ibb.co/jM24fTx/2.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Pharmaceuticals</h5>
                                    <p className="card-text">One of the biggest Pharmaceutical Companies in Country.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="https://i.ibb.co/Fq36kcv/4.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Mental Health Institute</h5>
                                    <p className="card-text">We give mental support to people who are mentally weak. Mental health is important.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="https://i.ibb.co/mt84NkN/6.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Therapy Center</h5>
                                    <p className="card-text">We give mental support to people who are mentally weak. Mental health is important.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 col-md-5 shadow">
                        <div className="row g-0">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                                <img src="https://i.ibb.co/gzhMVXX/5.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">HBK Diagonostic centre</h5>
                                    <p className="card-text">We give mental support to people who are mentally weak. Mental health is important.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container>

            </Container>
        </div>
    );
};

export default Other;