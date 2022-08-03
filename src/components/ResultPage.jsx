import React from 'react'
import { Link } from "react-router-dom";
import translateSeconds from '../utils/translateSeconds';

function ResultPage({ count, seconds, playAgain }) {
  return (
    <div className='result-page'>
      <div className="container">
        <div className="result-page__inner">
          <h2 className='result-page__title'>You are Great!</h2>
          <div className="score"><span>Score:</span>{count * seconds}</div>
          <div className="count"><span>Count:</span>{count}</div>
          <div className="time"><span>Time:</span>{translateSeconds(seconds)}</div>
          <div className="result-page__btns">
            <Link to="/leaders"><button>Leaders</button></Link>
            <Link to="/"><button>Main</button></Link>
            <button onClick={() => { playAgain() }}>Play again</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultPage