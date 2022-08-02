import React from 'react'

const PersonalInfo = () => {
    return (
        <div>
            <div className='row'>
                <div className='info-items padd-15'>
                    <p>Birthday : <span>22 July, 2002</span></p>
                </div>
                <div className='info-items padd-15'>
                    <p>Age : <span>20</span></p>
                </div>
                <div className='info-items padd-15'>
                    <p>Degree : <span>B.Tech in CSE</span></p>
                </div>
                <div className='info-items padd-15'>
                    <p>Freelance : <span>Available</span></p>
                </div>
                <div className='info-items padd-15'>
                    <p>City : <span>Kolkata</span></p>
                </div>
                <div className='info-items padd-15'>
                    <p>Country : <span>India</span></p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo