import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth.jsx";
import Game from "./pages/Game.jsx";
import LeaderBoard from "./pages/LeaderBoard.jsx";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

function App() {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsersData(JSON.parse(localStorage.getItem("usersData")) ?? []);
    // if(usersData.length === 0) navigate("../auth", { replace: true });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={<Auth usersData={usersData} setUsersData={setUsersData} />}
        />
        <Route
          path="/"
          element={
            <Game
              usersData={usersData}
              setUsersData={setUsersData}
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
