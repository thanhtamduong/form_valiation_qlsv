import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    vali: false,
  };
  handleOnChange = (e) => {
    let tag = e.target;
    let { name, value, type, pattern } = tag;
    let messageError = "";
    if (value.trim() === "") {
      messageError = "Vui lòng không để trống!";
    }
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        messageError = "Không hợp lệ!";
      }
    }
    if (type === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        messageError = "Không hợp lệ!";
      }
    }

    //
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: messageError };
    this.setState({ ...this.state, values: values, errors: errors }, () => {
      this.renderButton();
      console.log(this.state);
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.themSinhVien(this.state.values);
  };

  renderButton = () => {
    let vali = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        vali = false;
      }
    }
    this.setState({
      ...this.state,
      vali: vali,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card_header bg-dark text-white text-left p-2">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row text-left">
                <div className="form-group col-6">
                  <span>Mã Sinh Viên</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ tên</span>
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>

                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Số điện thoại</span>
                  <input
                    pattern="^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$"
                    text="text"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>
              <div className="text-right">
                {this.state.vali ? (
                  <button type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                ) : (
                  <button disabled type="submit" className="btn btn-success">
                    Thêm sinh viên
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Form);
