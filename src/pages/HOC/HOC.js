import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Modal from "./Modal";

export default function HOC(props) {
    const [state,setState] = useState(<Login/>);
  return (
    <div>
      <button className="btn btn-danger" onClick ={() => {
          setState(<Login/>)
          
      }} data-toggle="modal" data-target="#modelId">
        Login
      </button>
      <button className="btn btn-success"onClick ={() => {
          setState(<Register/>)
      }} data-toggle="modal" data-target="#modelId">
        Register
      </button>

      <Modal component ={state} />
    </div>
  );
}
