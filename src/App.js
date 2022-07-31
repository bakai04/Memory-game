import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game.jsx";
import LeaderBoard from "./pages/LeaderBoard.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./pages/Main.jsx";
import getCards from "./moduls/getCards.js";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [activeLevel, setActiveLevel] = useState(1);
  const Level = [
    {
      class:"first",
      name: "3x4",
      quantity: 12,
    },
    {
      class:"second",
      name: "4x4",
      quantity: 16,
    },
    {
      class:"third",
      name: "5x4",
      quantity: 20,
    },
  ];

  useEffect(() => {
    setUsersData(JSON.parse(localStorage.getItem("usersData")) ?? []);
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              usersData={usersData}
              setUsersData={setUsersData}
              activeLevel={activeLevel}
              setActiveLevel={setActiveLevel}
              Level={Level}
            />
          }
        />
        <Route
          path="/game"
          element={<Game 
            usersData={usersData} 
            setUsersData={setUsersData}
            cards={getCards(activeLevel, Level)} 
            activeLevel={activeLevel}
            Level={Level}
            />}

        />
        <Route
          path="/leaders"
          element={
            <LeaderBoard
              usersData={usersData}
              setUsersData={setUsersData}
              activeLevel={activeLevel}
              setActiveLevel={setActiveLevel}
              Level={Level}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
