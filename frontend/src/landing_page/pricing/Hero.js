import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center'>
            <div className='row'>
                <div className='my-5'>
                    <h3>Charges</h3>
                    <h4 className='mt-4' style={{color:"#666"}}>List of all charges and taxes</h4>
                </div>
                <div className='col mt-5'>
                    <img src='media/images/pricing0.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE),<br></br>are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col mt-5'>
                    <img src='media/images/intradayTrades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per<br></br>executed order on intraday trades across<br></br>equity, currency, and commodity trades. Flat<br></br>₹20 on all option trades.</p>
                </div>
                <div className='col mt-5'>
                    <img src='media/images/pricingEquity.svg' />
                    <h3>Free direct MF</h3>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are<br></br>absolutely free — ₹ 0 commissions & DP<br></br>charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;