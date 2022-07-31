import React, { useState } from 'react'
import FiltersLeaders from '../components/FiltersLeaders';
import SortLeaders from '../components/SortLeaders'

function LeaderBoard({usersData, setUsersData, activeLevel, setActiveLevel, Level}) {
  const [activeSort, setActiveSort]= useState(0);

  const sortItem=[
    {name:"проб", type: "count"},
    {name:"времени", type:"time"},
  ];

  const sortUsers = (users) => {
    users.sort(function (a, b) {
      if (a.levels[activeLevel][sortItem[activeSort].type] < b.levels[activeLevel][sortItem[activeSort].type]) {
        return -1;
      } else if (b.levels[activeLevel][sortItem[activeSort].type] < a.levels[activeLevel][sortItem[activeSort].type]) {
        return 1;
      }
      return 0;
    });
    return users;
  };

  const filtersUsers = sortUsers([...usersData])
  return (
    <>
      <div className="leaders">
        <div className="container">
          <h1 className='leaders__title'>Leaders Board</h1>
          <div className="filtersBy">
            <FiltersLeaders
              activeLevel={activeLevel}
              setActiveLevel={setActiveLevel}
              Level={Level}
            />
            <div className='sortBy'>
              <SortLeaders
                items={sortItem}
                activeSort={activeSort}
                setActiveSort={setActiveSort}
              />  
            </div>
          </div>
          
          <div className="leaders__inner">
            <div className="columns">
              <p className='column__name'>name</p> 
              <p>Score</p>
            </div>
            <ol className='leaders__list'> 
              {
                filtersUsers.map(item=>(
                  <li>
                    <div className="leaders__item">
                      <p className='name'>{item.name}</p>
                      <p className='score'>{item.levels[activeLevel][sortItem[activeSort].type]}</p>
                    </div>
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeaderBoard