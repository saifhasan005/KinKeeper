import React from 'react';

const Banner = () => {
    return (
        <div className='text-center space-y-4'>
            <h1 className='font-bold mt-[80px] text-[48px] text-[#1f2a38]'>Friends to keep close in your life</h1>
            <p className='text-[#65758c]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
            <button className='btn btn-success font-bold'>+ Add a Friend</button>

            <div className='max-w-[800px] mx-auto rounded-lg p-4'>
                <div className='grid grid-cols-4 gap-5 '>
                    <div className='px-6 py-4 shadow '>
                        <p className='text-2xl font-bold text-[#1f2a38]'>10</p>
                        <p className='text-sm text-[#65758c]'>Total Friends</p>
                    </div>
                    <div className='px-6 py-4 shadow'>
                        <p className='text-2xl font-bold text-[#1f2a38]'>3</p>
                        <p className='text-sm text-[#65758c]'>On Track</p>
                    </div>
                    <div className='px-6 py-4 shadow'>
                        <p className='text-2xl font-bold text-[#1f2a38]'>6</p>
                        <p className='text-sm text-[#65758c]'>Need Attention</p>
                    </div>
                    <div className='px-6 py-4 shadow'>
                        <p className='text-2xl font-bold text-[#1f2a38]'>12</p>
                        <p className='text-sm text-[#65758c]'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;