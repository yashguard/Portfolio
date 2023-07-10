import React from 'react'

const CommonHeading = (props) => {
    return (
        <div className="common-heading">
            <h2>{props.heading}</h2>
            <p>{props.subHeading}
                <hr />
            </p>
        </div>
    )
}

export default CommonHeading
