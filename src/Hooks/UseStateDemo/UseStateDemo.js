import React, { useState } from "react";

export default function UseStateDemo(props) {
  const [like, setLike] = useState(1);
  const [state, setState] = useState({ like: 1 });
  const [colorCar, setColorCar] = useState("./img/imgRedCar.jpg");
  /*
    this.state = {
        like:1
    }
   */
  const changeColor = (color) => {
    setColorCar(`./img/img${color}Car.jpg`);
  };
  return (
    <div className="container">
      <h3>Demo useState</h3>
      <div className="card w-25">
        <img src="https://picsum.photos/200/200" className="w-100" />
        <div className="card-body">
          <p>{like} Like</p>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setLike(like + 1);
            }}
          >
            Like
          </button>
        </div>
      </div>
      <hr />
      <h3>Bài tập chọn xe</h3>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <img src={colorCar} />
          </div>
        </div>
        <div className="col-4">
          <button
            className="btn btn-dark"
            onClick={() => {
              changeColor("Black");
            }}
          >
            Đen{" "}
          </button>
          <button
            className="btn btn-danger mr-2 ml-2"
            onClick={() => {
              changeColor("Red");
            }}
          >
            Đỏ
          </button>
          <button
            className="btn"
            style={{ background: "gray" }}
            onClick={() => {
              changeColor("Silver");
            }}
          >
            Bạc
          </button>
        </div>
      </div>
    </div>
  );
}
