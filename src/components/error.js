import React from 'react';
const error=()=>{
    return(
        <React.Fragment>
            <div className="text-center">
            <h1>Oops!</h1>
            <p>
                <img src="error.jpg" className="col-lg-4 col-md-3 col-sm-2"></img>
            </p>
            </div>

        </React.Fragment>
    )
};

export default error