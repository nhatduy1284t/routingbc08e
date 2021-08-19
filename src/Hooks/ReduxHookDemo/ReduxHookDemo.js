import React, { useState } from "react";

import { connect, useSelector, useDispatch } from "react-redux";
import { addCommentAction } from "../../redux/actions/FakeBookActions";
function ReduxHookDemo(props) {
  const [userComment, setUserComment] = useState({ name: ""});

  // useSelector là hook tương đương với hàm mapStateToProps
  const { arrComment } = useSelector((state) => state.FakeBookReducer);

  //useDispatch giống với this.props.dispatch bên rcc
  const dispatch = useDispatch();

  
  const handleChangeInput = (event) => {
    let { value, name } = event.target;
    setUserComment({
      ...userComment,
      [name]: value,
    });
  };

  const renderComment = () => {
    return arrComment.map((comment, index) => {
      return (
        <div className="row" key={index}>
          <div className="col-1">
            <img src={comment.image} width="50" />
          </div>
          <div className="col-10">
            <h3 className="text-danger">{comment.name}</h3>
            <p> {comment.content}</p>
          </div>
        </div>
      );
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const action= addCommentAction(userComment)
    dispatch(action)
  };
  return (
    <div className="container">
      <h3>Fakebook app!</h3>
      <div className="card">
        <div className="card-header">{renderComment()}</div>

        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <p>Name</p>
            <input className="form-control" name="name" onChange={handleChangeInput} />
          </div>
          <div className="form-group">
            <p>Content</p>
            <input className="form-control" name="content" onChange={handleChangeInput} />
          </div>
          <div className="form-group">
            <button className="btn btn-outline-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    arrComment: state.FakeBookReducer.arrComment,
  };
};

export default connect(mapStateToProps)(ReduxHookDemo);
