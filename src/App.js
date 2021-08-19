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

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(propsRoute) => {
            return (
              <div>
                <Header />
                Đậy
                <Home {...propsRoute}/>
              </div>
            );
          }}
        />
        <Route exact path="/home" render={(propsRoute) => {
            return (
              <div>
                <Header />
                Đậy
                <Home {...propsRoute}/>
              </div>
            );
          }} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/usestate" component={UseStateDemo} />
        <Route exact path="/useeffect" component={UseEffectDemo} />
        <Route exact path="/reduxhook" component={ReduxHookDemo} />
        <Route exac path="/ajaxrcc" component={AxiosDemo} />
        <Route exac path="/ajaxrfc" component={AxiosDemoRFC} />
        <Route exac path="/apimiddleware" component={ApiMiddleWare} />
        <Route exac path="/apimiddleware" component={ApiMiddleWare} />
        <Route exac path="/detail/:id" component={Detail} />
        <Route exac path="/profile" component={Profile} />
        <Route exac path="/hoc" component={HOC} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//BrowserRouter -> Header giữ nguyên (chỉnh NavLink to) -> Switch (đây là switch case) -> Trong switch : pages
