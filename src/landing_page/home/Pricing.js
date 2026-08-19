import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 py-5'>
            <div className='row'>
                <div className='col-4'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#'>See pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <img src='media/images/pricing0.svg' />
                    <p>Free account opening</p>
                </div>
                <div className='col-2'>
                    <img src='media/images/pricingEquity.svg' />
                    <p>Free equity delivery and direct mutual funds</p>
                </div>
                <div className='col-2'>
                    <img src='media/images/pricingMF.svg' />
                    <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
     );
}

export default Pricing;