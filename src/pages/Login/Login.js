import React, { useState } from "react";
import { Prompt } from "react-router";
import { useFormik, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";
import { useDispatch } from "react-redux";
export default function Login(props) {
  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',

    },
    onSubmit: (values) => {
      const action= dangNhapAction(values);
      dispatch(action);
      
      
    },
    validationSchema:Yup.object({
      taiKhoan:Yup.string().required('Tài khoản không được bỏ trống'),
      matKhau:Yup.string().required('Mật khẩu không được bỏ trống')
    })
  });


  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Tài khoản</p>
        <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
      </div>
      <div className="form-group">
        <p>Mật khẩu</p>
        <input className="form-control" name="matKhau" onChange={formik.handleChange} />
      </div>
      <div className="form-group">
        <button type="submit">Login</button>
        <button type="button" onClick={() => {
          props.history.goBack()
        }}>Go back</button>
      </div>


      {/* <Prompt when={state.isSaveForm} message={(location) => {
        // Thẻ này dùng ngăn cản sự kiện thoát
          return('Bạn có chắc muốn rời khỏi trang')
      }}/> */}
      {/* <Prompt when={state.isSaveForm} message={(location) => {
        return '? Muốn rời khỏi trang à '
      }} /> */}

    </form>
  );
}
