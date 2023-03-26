const stateDefault = {
  mangSinhVien: [
    { maSV: 1, hoTen: "ABC", soDienThoai: "000011122", email: "abc@gmail.com" },
  ],
};
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      const updateSinhVien = [...state.mangSinhVien, action.sinhVien];
      state.mangSinhVien = updateSinhVien;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
