import React from 'react'

const Card = () => {
  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Customer Service Representative @ Intact Insurance</h5>
                <h6 className="card-subtitle mb-2 text-muted">November 2022 - Present | St. Johns, Newfoundland</h6>
                <ul>
                    <li>Openning a new auto claim</li>
                    <li>Assist customer with existing claimm</li>
                    <li>Adjusting customer claims</li>
                </ul>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">About Company</a>
            </div>
        </div>
    </>
  )
}

export default Card