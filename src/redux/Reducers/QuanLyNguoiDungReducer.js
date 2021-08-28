import { history } from "../../App";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/settings";
let userLogin=null;
if(localStorage.getItem(USER_LOGIN) && localStorage.getItem(ACCESS_TOKEN)) {
    userLogin=JSON.parse(localStorage.getItem(USER_LOGIN))
}

const stateDefault = {
    thongTinNguoiDung: userLogin
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LOGIN': {
            state.thongTinNguoiDung={...action.thongTinNguoiDung};
            
            return { ...state }
        }
        case 'LOG_OUT' : {
            state.thongTinNguoiDung=null;
            localStorage.clear();
           
            return { ...state }
        }
        default: {
            return state;
        }
    }
}