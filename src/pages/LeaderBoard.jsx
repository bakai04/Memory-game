import React, { useState } from 'react'
import FiltersLeaders from '../components/FiltersLeaders';
import SortLeaders from '../components/SortLeaders';
import PrevPageBtn from "../img/93634.png";
import { Link } from "react-router-dom";
import sortUsers from '../utils/sortUsers';
import translateSeconds from '../utils/translateSeconds';

function LeaderBoard({ usersData, setUsersData, activeLevel, setActiveLevel, Level }) {
  const [activeSort, setActiveSort] = useState(0);
  const sortItem = [
    { name: "Score", type: "score" },
    { name: "Count", type: "count" },
    { name: "Seconds", type: "time" },
  ];
  const filtersUsers = sortUsers([...usersData], activeLevel, sortItem[activeSort].type)

  return (
    <>
      <div className="leaders">
        <div className="container">
          <Link to="/"><img src={PrevPageBtn} className="prev__page" alt="logo" /></Link>
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
              <p>{sortItem[activeSort].name}</p>
            </div>
            <ol className='leaders__list' id='style-7'>
              {
                filtersUsers.map(item => (
                  item.levels[activeLevel][sortItem[activeSort].type] > 0 ?
                    <li>
                      <div className="leaders__item">
                        <p className='name'>{item.name}</p>
                        <p className='score'>{sortItem[activeSort].type === "time" ? translateSeconds(item.levels[activeLevel][sortItem[activeSort].type]) : item.levels[activeLevel][sortItem[activeSort].type]}</p>
                      </div>
                    </li> : ""
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