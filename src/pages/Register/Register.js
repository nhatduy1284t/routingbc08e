
import React from 'react'
import { useFormik } from 'formik'
import { GROUP_ID, TOKEN_CYBERSOFT } from '../../util/settings'
import * as Yup from 'yup';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungActions';
import { useDispatch } from 'react-redux';
import { Fragment } from 'react';
import axios from 'axios';

export default function Register() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID
        },
        onSubmit: (values) => {
           console.log('formvalues',values)
           const action =dangKyAction(values);
           dispatch(action);
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống').min(6, 'Tài khoản từ 6-32 ký tự').max(32, 'Tài khoản từ 6 - 32 ký tự'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống'),
            email: Yup.string().required('Email không được bỏ trống').email('Email không đúng định dạng !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống').matches(/^[A-Za-z]+$/, 'Họ tên phải là ký tự !')
        }),

    })

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng ký</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (//Nếu có click vào input taiKhoan và lỗi theo mình định nghĩa
                    <div className="alert alert-danger">{formik.errors.taiKhoan}</div>
                ) : null}
            </div>
            <div className="form-group">
                <p>Họ tên</p>
                <input className="form-control" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.hoTen && formik.errors.hoTen ? (//Nếu có click vào input taiKhoan và lỗi theo mình định nghĩa
                    <div className="alert alert-danger">{formik.errors.hoTen}</div>
                ) : null}
            </div>

            <div className="form-group">
                <p>Mật khẩu</p>
                <input type="password" className="form-control" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.matkhau && formik.errors.matkhau ? (//Nếu có click vào input taiKhoan và lỗi theo mình định nghĩa
                    <div className="alert alert-danger">{formik.errors.matKhau}</div>
                ) : null}
            </div>
            <div className="form-group">
                <p>Email</p>
                <input className="form-control" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email ? (//Nếu có click vào input taiKhoan và lỗi theo mình định nghĩa
                    <div className="alert alert-danger">{formik.errors.email}</div>
                ) : null}
            </div>
            <div className="form-group">
                <p>Số điện thoại</p>
                <input className="form-control" name="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div className="form-group">
                <button className="btn btn-outline-success" type="submit">Đăng ký</button>
            </div>
        </form>
    )
}


