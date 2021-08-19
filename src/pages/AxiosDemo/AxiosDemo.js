import React, { Component } from "react";
import axios from "axios";
import { TOKEN_CYBERSOFT } from "../../util/settings";
//RCC
export default class AxiosDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: [],
    };
  }

  getApi = async () => {
    //   try{
    //   let promiseResult = await axios({
    //     url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //     method: "GET",
    //     headers: {
    //       TokenCybersoft: TOKEN_CYBERSOFT,
    //     },
    //   });
    //   console.log("promise", promiseResult);
    //   this.setState({
    //     mangPhim: promiseResult.data.content
    //   });
    // }catch(error) {
    //   console.log('error',error)
    // }
    let promise = axios({
      url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
    await promise.then(result=>console.log(result));
    console.log("abc")
  };

  renderPhim = () => {
    return this.state.mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} height="300" />
            <div className="card-body">
              <h3>{phim.tenPhim}</h3>
              <p>{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.getApi}>Lấy danh sách phim</button>
        <h3 className="text-center">Danh sách phim</h3>
        <div className="row">{this.renderPhim()}</div>
      </div>
    );
  }

  //Component tự động  gọi hàm này sau khi render
  componentDidMount() {
    this.getApi();
  }
}
