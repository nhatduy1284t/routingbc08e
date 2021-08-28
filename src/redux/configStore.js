import { applyMiddleware, combineReducers, createStore } from "redux";
import { FakeBookReducer } from "./Reducers/FakeBookReducer";
import { PhimReducer } from "./Reducers/PhimReducer";
import { ModalReducer } from "./Reducers/ModalReducer";
//Cấu hình middleware (Để có thể dispatch redux 1 action là function)
import  thunk  from "redux-thunk";
import { QuanLyNguoiDungReducer } from "./Reducers/QuanLyNguoiDungReducer";



const rootReducer = combineReducers({
  //Khai bao reducer
  FakeBookReducer: FakeBookReducer,
  PhimReducer,
  ModalReducer:ModalReducer,
  QuanLyNguoiDungReducer
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
