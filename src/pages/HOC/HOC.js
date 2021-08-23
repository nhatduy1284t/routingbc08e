import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Modal from "./Modal";

export default function HOC(props) {
  const [state, setState] = useState(<Login/>);
  const dispatch =useDispatch()
  console.log(<Login/>)
  return (
    <div>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type:'OPEN_LOGIN',
            Component : <Login/>,
            handleSubmit:() => {
            
              alert('Xử lý đăng nhập !');
            }
          })
          setState(<Login/>)
        }}
        data-toggle="modal"
        data-target="#modelId"
      >
        Login
      </button>
      <button
        className="btn btn-success"
        onClick={() => {
          setState(<Register/>)
        }}
        data-toggle="modal"
        data-target="#modelId"
      >
        Register
      </button>

      <Modal  />
    </div>
  );
}
