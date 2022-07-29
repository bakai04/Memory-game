import React from 'react'
import SortLeaders from '../components/SortLeaders'

function LeaderBoard() {
  const SortItem=[
    {name:"проб", type: "count"},
    {name:"врмени", type:"time"},
  ];
  return (
    <>
      <div className="leaders">
        <div className="container">
          <h1 className='leaders__title'>Leaders Board</h1>
          <div className='sortBy'>
            <SortLeaders
              items={SortItem}
            />  
          </div>
          <div className="leaders__inner">
            <div className="columns">
              <p className='column__name'>name</p> 
              <p>Score</p>
            </div>
            <ol className='leaders__list'> 
              <li>
                <div className="leaders__item">
                  <p className='name'>sdf</p>
                  <p className='score'>sdfs</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaderBoard