import { createSlice } from '@reduxjs/toolkit';

/** 초기 값 */
const initialState = {
  isLoading: false,
};

/** 슬라이스 인스턴스 */
const slice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});

/** actions */
export const { setIsLoading } = slice.actions;

// export const selectCommon = (state) => state.common;
/** reducer */
export default slice.reducer;
