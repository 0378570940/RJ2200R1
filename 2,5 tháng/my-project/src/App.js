import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../src/commons/routers";
import LoginForm from "./Components/Login/LoginForm";
import { useState } from "react";
// import BasicForm from "./Components/BasicForm";

function App() {
  const [logged, changeLogger] = useState(false);
  // chạy câu lạnh này chưa có securuty của API
  // C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
  function changeLoggedStatus(status) {
    changeLogger(!this.logged);
  }
  if (logged)
    return <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {
            routes.map(item => {
              return <Route path={item.path} element={item.element} key={item.name}></Route>
            })
          }
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  else
    return <LoginForm changeLoggedStatus={changeLoggedStatus}></LoginForm>
}

export default App;
