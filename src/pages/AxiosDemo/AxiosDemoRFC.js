import axios from "axios";
import React, { useState, useEffect } from "react";
import { TOKEN_CYBERSOFT } from "../../util/settings";

export default function AxiosDemoRFC() {
  const [mangPhim, setMangPhim] = useState([]);
  const mp = [1, 2];
  useEffect(() => {
    //Component didmount
    let promise = axios({
      url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });

    promise.then((result) => {
      console.log("mangPhimPrmise", result.data.content);
      //Sau khi call api thành công lấy dữ liệu api set vào state mangPhim
      setMangPhim(result.data.content);
    });

    promise.catch((error) => {
      console.log("error", error.response);
    });
  }, []);

  const renderPhim = () => {
    console.log("mangPhimMap", mangPhim);
    return mangPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={phim.hinhAnh} height="300" />
            <div className="card-body">
              <h3>{phim.tenPhim}</h3>
            </div>
          </div>
        </div>
      );
    });
    // return mp.map(() => {
    //   return <h2>Phim hay</h2>
    // })
  };

  return (
    <div className="container">
      <button>Lấy danh sách phim</button>
      <h3 className="text-center">Danh sách phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
