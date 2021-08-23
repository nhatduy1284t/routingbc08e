import logo from "./logo.svg";
import "./App.css";
//Cấu hình routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Header from "./components/HomePage/Header";
import UseStateDemo from "./Hooks/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./Hooks/UseEffectDemo/UseEffectDemo";
import ReduxHookDemo from "./Hooks/ReduxHookDemo/ReduxHookDemo";
import AxiosDemo from "./pages/AxiosDemo/AxiosDemo";
import AxiosDemoRFC from "./pages/AxiosDemo/AxiosDemoRFC";
import ApiMiddleWare from "./pages/AxiosDemo/ApiMiddleWare";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import HOC from "./pages/HOC/HOC";
import { HomeTemplate } from "./templates/HomeTemplate";
import { UserTemPlate } from "./templates/UserTemplate";
import AntDemo from "./pages/AntDemo/AntDemo";
import { AdminTemplate } from "./templates/AdminTemplate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        <UserTemPlate path="/login" component={Login} />
        <UserTemPlate path="/register" component={Register} />
        <HomeTemplate path="/about" component={About} />
        <HomeTemplate path="/usestate" component={UseStateDemo} />

        <HomeTemplate path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate path="/reduxhook" component={ReduxHookDemo} />
        <HomeTemplate path="/ajaxrcc" component={AxiosDemo} />
        
        <HomeTemplate path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate path="/apimiddleware" component={ApiMiddleWare} />
        <HomeTemplate path="/apimiddleware" component={ApiMiddleWare} />
        <HomeTemplate path="/detail/:id" component={Detail} />
        <HomeTemplate path="/profile" component={Profile} />
        <HomeTemplate path="/hoc" component={HOC} />
        <AdminTemplate path="/antd" component={AntDemo} />
        
        <HomeTemplate path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//BrowserRouter -> Header giữ nguyên (chỉnh NavLink to) -> Switch (đây là switch case) -> Trong switch : pages
