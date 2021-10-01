import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { layDanhSachPhimAction } from "../../redux/actions/PhimActions";
import { TOKEN_CYBERSOFT } from "../../util/settings";
export default function ApiMiddleWare(props) {
  const { mangPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //2 loại action trong redux
    //Loại 1 :(type:'Type_name', data : {})
    //Loại 2 : action là function
    const action = layDanhSachPhimAction('GP02');
    //Trong trường hợp action là function thì, thì redux sẽ đợi function thực thi xong => Gửi dữ liệu đi

    dispatch(action);
  }, []);
  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
      return (
        <div className="" key={index}>
          <div className="d-flex">
            <img width={200} height={120} className="w-50" src={phim.hinhAnh} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/536/354" }} />
            <div className="card-body w-50">
              <p>{phim.tenPhim}</p>
              <p>{phim.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Danh sách phim</h3>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
