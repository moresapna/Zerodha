import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row py-5 px-5'>
                <h3 style={{textAlign:"center"}} className='mb-5' >People</h3>

                <div className='col text-center'>
                    <img src='media/images/nithinKamath.jpg' className="d-block mx-auto" style={{borderRadius:"50%",width:"80%"}}/>
                    <h4 className='mt-3'>Nithin Kamath</h4>
                    <p className='mt-3'>Founder, CEO</p>
                </div>
                <div className='col' style={{fontSize:"18px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='#'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;