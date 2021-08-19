import React, { useEffect, useState } from "react";
import { Prompt, Redirect } from "react-router-dom";

export default function UseEffectDemo(props) {
  const [number, setNumber] = useState(1);
  const [like, setLike] = useState(1);
  let { history, match } = props;
  console.log("this.props", props);
  console.log(match);

  //   useEffect(() => {
  //     //callback function chạy sau khi giao diện render
  //     //Thay thế cả didmount v2 didupdate ứng với lifeCycle reac t
  //     console.log("didmount");
  //     console.log("update");
  //   });

  //   useEffect(() => {
  //     //Thay thế cho component didmount thường gọi api hoặc sử dụng thư viện trong hàm này
  //     console.log("didmount");
  //     console.log("update");
  //   }, []); //Tham số 2 là mảng [] => chạy 1 lần sau render

  useEffect(() => {
    //Chạy : lần 1 và những lần state(like) thay đổi

    console.log("Changed Like");
  }, [like]); //Chỉ thực hiện khi state(like) thay đổi

  useEffect(() => {
    console.log("didMount");
    return () => {
      //Khi component biến mất khỏi giao diện thì hàm này sẽ kích hoạt
      console.log("will unmount");
    };
  }, []);

  return (
    <div className="container">
      <h3>UseEffectDemo</h3>
      <h3>Number :{number}</h3>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Like :{like}</h3>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        +
      </button>

    </div>
  );
}

