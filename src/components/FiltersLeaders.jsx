import React from 'react'

function FiltersLeaders({ activeLevel, setActiveLevel, Level }) {
  return (
    <>
      <div className="filters">
        {
          Level.map((item, index) => (
            <div className={`filters__item ${activeLevel === index ? "filters__item--active" : ""}`}
              onClick={() => { setActiveLevel(index) }}
              key={index}
            >{item.name}</div>))
        }
      </div>
    </>
  )
}

export default FiltersLeaders