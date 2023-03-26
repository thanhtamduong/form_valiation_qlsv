import { combineReducers } from "redux";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";

const rootReducer = combineReducers({
  //quản lý các child reducer
  //key: value
  QuanLySinhVienReducer,
});

export { rootReducer };
