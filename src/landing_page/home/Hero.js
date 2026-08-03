import React from 'react';

function Hero() {
    return ( 
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <img
                        src="media/images/homeHero.png"
                        className="img-fluid mb-5"
                        alt="Hero"
                    />

                    <h1 className="display-4 fw-medium mb-3">
                        Invest in everything
                    </h1>

                    <p className="fs-4 text-muted mb-5">
                        Online platform to invest in stocks, derivatives, mutual funds, and more
                    </p>

                    <button className="btn btn-primary btn-lg px-5">
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;