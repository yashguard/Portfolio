import React from 'react'

const Services = ({ backContent, backHeading, frontHeading, icon, services }) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
            <div className="overlay">
                <div className={`${services} service`}>
                    <div className="service-box">
                        <div className="service-front row align-items-center justify-content-center">
                            <h6>{frontHeading}</h6>
                        </div>
                        <div className="service-back text-center">
                            <div className="content">
                                <h6>{icon}</h6>
                                <h5>{backHeading}</h5>
                                <p>{backContent}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
