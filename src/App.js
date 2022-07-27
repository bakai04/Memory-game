import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Game from "./pages/Game.jsx";
import LeaderBoard from "./pages/LeaderBoard.jsx";
import { useEffect, useState } from "react";

function App() {
  const [usersData, setUsersData] = useState([]);
  let cards = [];
  useEffect(() => {
    async function getData() {
      // cards = await fetch("./db.json").then((resp) => resp.json());

      const users = await JSON.parse(localStorage.getItem("usersData"));
      setUsersData(users ?? []);
    }
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Main usersData={usersData} setUsersData={setUsersData} />}
        />
        <Route
          path="/game"
          element={
            <Game
              usersData={usersData}
              setUsersData={setUsersData}
              cards={cards}
            />
          }
        />
        <Route
          path="/leaders"
          element={
            <LeaderBoard usersData={usersData} setUsersData={setUsersData} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
