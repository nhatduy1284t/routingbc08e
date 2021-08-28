import { Button, DatePicker, Pagination } from "antd";
import Modal from "antd/lib/modal/Modal";

import React, { useState } from "react";
import Login from "../Login/Login";
import  a from "./AntDemo.scss"
export default function AntDemo() {
  const [state, setState] = useState({ date: 1, month: 1, year: 1 });
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="container datePicker">
      <DatePicker
        name="datePicker"
        onChange={(a) => {
          if (a) {
            setState({
              date: a._d.getUTCDate(),
              month: a._d.getMonth() + 1,
              year: 1900 + a._d.getYear(),
            });
          }
        }}
      />

      <Button className='btnCheckDate' onClick={() => {
        console.log(state);
      }}>Get Date of DatePicker</Button>
      <Button type="primary" onClick={showModal}>
        Mở để xem ngày
      </Button>
      <Modal wrapClassName={'background-img'} title="Basic Modal" okText="OK" visible={isModalVisible} onOk={handleCancel} onCancel={handleOk}>
        <p>Ngày : {state.date}</p>
        <p>Tháng : {state.month}</p>
        <p>Năm : {state.year}</p>
      </Modal>
    </div>
  );
}
