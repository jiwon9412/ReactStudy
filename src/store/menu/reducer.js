import { createSlice } from '@reduxjs/toolkit';

/** 초기 값 */
const initialState = {
  menuList: [],
};

/** 슬라이스 인스턴스 */
const slice = createSlice({
  name: 'menu',
  initialState: initialState,
  reducers: {
    setMenuList: (state, actions) => (state.menuList = actions.payload),
  },
});

/** actions */
export const { setMenuList } = slice.actions;

// export const selectCommon = (state) => state.common;
/** reducer */
export default slice.reducer;
