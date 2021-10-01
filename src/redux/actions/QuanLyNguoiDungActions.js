import axios from "axios"
import { history } from "../../App"
import { ACCESS_TOKEN, http, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/settings"



export const dangKyAction = (thongTinNguoiDung) => {
    return async (dispatch) => {
        let promise = axios({
            url: 'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: thongTinNguoiDung,
            method: 'POST',
            headers: {
                'TokenCybersoft': TOKEN_CYBERSOFT
            }
        })
        promise.then(result => {
            alert('Đăng nhập thành công')
            history.push(`/login`)

        })
        promise.catch(error => console.log(error.response?.data))
    }
}
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch, state) => {
        let promise =http.post('api/QuanLyNguoiDung/DangNhap',thongTinDangNhap)
        // let promise = axios({
        //     url: 'http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
        //     data: thongTinDangNhap,
        //     method: 'POST',
        //     headers: {
        //         'TokenCybersoft': TOKEN_CYBERSOFT
        //     }
        // })
        promise.then(result => {
            console.log(result)

            //Lưu vao localstorage
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(result.data.content.accessToken));
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content))

            dispatch({
                type: 'LOGIN',
                thongTinNguoiDung: thongTinDangNhap
            })

            history.push('/home')
        })
        promise.catch(error => console.log(error.response?.data))
    }
}