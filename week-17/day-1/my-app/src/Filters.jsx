import React from 'react'

export default function Filters(props) {
  return (
    <>
      {props.filters.map((filter, index) => {
        return (
          <div key={index}>
            <input type='checkbox' name={filter.name} id={filter.name} />
            <label htmlFor={filter.name}>{filter.name}</label>
          </div>
        )
      })}
    </>
  )
}
