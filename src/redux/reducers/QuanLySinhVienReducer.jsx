const stateDefault = {
  mangSinhVien: [
    { maSV: 1, hoTen: "ABC", soDienThoai: "000011122", email: "abc@gmail.com" },
  ],
};
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  return { ...state };
};
