import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./routes/Home";
import Unknown from "./routes/Unknown";
import Navbar from "./Navbar";
import Leaderboard from "./routes/Leaderboard";
import Dashboard from "./routes/Dashboard";
import Footer from "./Footer";
import styled from "styled-components";
import img from "./img/shapes.png";
import { create as createUser } from "./js/bot";
import { isLogged } from "./js/isLogged";
import { isChannelBot } from "./js/isChannelBot";
import { getUserLevel } from "./js/getUserLevel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [isBotIn, setIsBotIn] = useState([]);
  const [userLevel, setUserLevel] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    isLogged().then((loginFlow) => {
      setIsLoggedIn(loginFlow);
      const { success, id } = loginFlow;
      if (success) {
        isChannelBot(id?.data[0].login).then((channelInfo) => {
          setIsBotIn(channelInfo);
          setIsLoading(true);
        });
        getUserLevel(id?.data[0].login).then((userLevel) => {
          const { success } = userLevel;
          if (success) {
            setUserLevel(userLevel);
            setIsLoading(true);
          } else {
            createUser().then(() => {
              getUserLevel(id?.data[0].login).then((userLevel) => {
                setUserLevel(userLevel);
                setIsLoading(true);
              });
            });
          }
        });
      } else {
        setIsLoading(true);
      }
    });
  }, []);

  return (
    <AppContainer>
      <Navbar
        userAuth={isLoggedIn}
        isLoading={isLoading}
        setAuthState={setIsLoggedIn}
        userLevel={userLevel}
      />
      {/* <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❄</div>
        </div> */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loginFlow={isLoggedIn}
              isBotIn={isBotIn}
              isLoading={isLoading}
              setBotState={setIsBotIn}
            />
          }
        />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/dashboard" element={<Dashboard test={isLoggedIn} />}>
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Unknown />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  color: white;
  min-height: 100vh;
  background-color: #2b2647;
  background-image: url(${img});

  .snowflake {
    color: #fff;
    font-size: 1em;
    font-family: Arial;
    text-shadow: 0 0 1px #000;
  }

  @-webkit-keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @-webkit-keyframes snowflakes-shake {
    0% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
    50% {
      -webkit-transform: translateX(80px);
      transform: translateX(80px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }
  @keyframes snowflakes-fall {
    0% {
      top: -10%;
    }
    100% {
      top: 100%;
    }
  }
  @keyframes snowflakes-shake {
    0% {
      transform: translateX(0px);
    }
    50% {
      transform: translateX(80px);
    }
    100% {
      transform: translateX(0px);
    }
  }
  .snowflake {
    position: fixed;
    top: -10%;
    z-index: 9999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    -webkit-animation-name: snowflakes-fall, snowflakes-shake;
    -webkit-animation-duration: 10s, 3s;
    -webkit-animation-timing-function: linear, ease-in-out;
    -webkit-animation-iteration-count: infinite, infinite;
    -webkit-animation-play-state: running, running;
    animation-name: snowflakes-fall, snowflakes-shake;
    animation-duration: 10s, 3s;
    animation-timing-function: linear, ease-in-out;
    animation-iteration-count: infinite, infinite;
    animation-play-state: running, running;
  }
  .snowflake:nth-of-type(0) {
    left: 1%;
    -webkit-animation-delay: 0s, 0s;
    animation-delay: 0s, 0s;
  }
  .snowflake:nth-of-type(1) {
    left: 10%;
    -webkit-animation-delay: 1s, 1s;
    animation-delay: 1s, 1s;
  }
  .snowflake:nth-of-type(2) {
    left: 20%;
    -webkit-animation-delay: 6s, 0.5s;
    animation-delay: 6s, 0.5s;
  }
  .snowflake:nth-of-type(3) {
    left: 30%;
    -webkit-animation-delay: 4s, 2s;
    animation-delay: 4s, 2s;
  }
  .snowflake:nth-of-type(4) {
    left: 40%;
    -webkit-animation-delay: 2s, 2s;
    animation-delay: 2s, 2s;
  }
  .snowflake:nth-of-type(5) {
    left: 50%;
    -webkit-animation-delay: 8s, 3s;
    animation-delay: 8s, 3s;
  }
  .snowflake:nth-of-type(6) {
    left: 60%;
    -webkit-animation-delay: 6s, 2s;
    animation-delay: 6s, 2s;
  }
  .snowflake:nth-of-type(7) {
    left: 70%;
    -webkit-animation-delay: 2.5s, 1s;
    animation-delay: 2.5s, 1s;
  }
  .snowflake:nth-of-type(8) {
    left: 80%;
    -webkit-animation-delay: 1s, 0s;
    animation-delay: 1s, 0s;
  }
  .snowflake:nth-of-type(9) {
    left: 90%;
    -webkit-animation-delay: 3s, 1.5s;
    animation-delay: 3s, 1.5s;
  }

  body {
    color: white;
    min-height: 100vh;
    background-color: #1d1f1d;
  }
`;

export default App;
