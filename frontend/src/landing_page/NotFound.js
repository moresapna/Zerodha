import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h2 className="display-4 fw-medium mb-3">
                        404 Not Found
                    </h2>

                    <p className="fs-4 text-muted mb-5">
                        Sorry, the page you are looking for does not exist.
                    </p>

                    <button className="btn btn-primary btn-lg px-5">
                        <Link className="text-white text-decoration-none" to="/">Go Home</Link>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default NotFound;