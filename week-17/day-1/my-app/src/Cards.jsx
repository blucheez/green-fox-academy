import React from 'react'

export default function Cards(props) {
  return (
    <>
      {props.hotels.map((hotel, index) => {
        return (
          <div key={index} className='hotels'>
            <h3>{hotel.name}</h3>
            <div className='desc'>
              <img src={hotel.imageURL} alt='' />
              <p>
                {hotel.description}
                <button>Book Now!</button>
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}
