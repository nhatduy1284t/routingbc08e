import React, { useState } from "react";
import { Prompt } from "react-router";
export default function Login(props) {
  const [state, setState] = useState({isSaveForm:true, taiKhoan: "", matKhau: "" });

  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.taiKhoan === "cybersoft") {
      props.history.push("/home");

    //   props.history.replace('/home')//Thay đổi trang hiện tại thành trang có path tương ứng 
    } else {
      alert("Tai khoan hoac mat khau khong dung");
    }
  };


  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input className="form-control" name="taiKhoan" onChange={handleChangeInput} />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input className="form-control" name="matKhau" onChange={handleChangeInput} />
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
        <button type="button" onClick={() => {
            props.history.goBack()
        }}>Go back</button>
      </div>
      
      <Prompt when={state.isSaveForm} message={(location) => {
          return('Bạn có chắc muốn rời khỏi trang')
      }}/>
      
    </form>
  );
}
