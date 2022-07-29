import React from 'react'
import { Link } from "react-router-dom";

function ResultPage({score, time, playAgain}) {
  return (
    <div className='result-page'>
        <div className="container">
            <div className="result-page__inner">
                <h2 className='result-page__title'>You are Great!</h2>
                <div className="score"><span>Score:</span>{score}</div>
                <div className="time"><span>Time:</span>{Math.floor((time/60)%60)+":"+time%60}</div>
                <div className='record'>
                    <h2 className='record__title'>Record</h2>
                    <div className="record__score"><span>Score:</span> 12</div>
                    <div className="record__time"><span>Time:</span> 12:12</div>
                </div>
                <div className="result-page__btns">
                    <Link to="/leaders"><button>Leaders</button></Link>
                    <button onClick={()=>{playAgain()}}>Play again</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResultPage