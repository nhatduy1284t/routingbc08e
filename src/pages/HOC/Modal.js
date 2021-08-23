import React from "react";
import { useSelector } from "react-redux";

export default function Modal(props) {
  const { Component, handleSubmit } = useSelector((state) => state.ModalReducer);
 

  return (
    <div>
      {/* Button trigger modal */}
      {/* <button type="button" className="btn btn-primary btn-lg d-none" data-toggle="modal" data-target="#modelId">
    
  </button> */}
      {/* Modal */}
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">{Component}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=> {
                handleSubmit();
              }}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
