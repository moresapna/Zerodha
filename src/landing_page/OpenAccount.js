import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-4 fw-medium mb-3">
                        Open a Zerodha account
                    </h1>

                    <p className="fs-4 text-muted mb-5">
                        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                    </p>

                    <button className="btn btn-primary btn-lg px-5">
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
     );
}

export default OpenAccount;