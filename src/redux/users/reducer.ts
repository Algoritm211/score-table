import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataType } from '../../types';

export type sortingTypeValues = 'ascending' | 'descending'
type initialStateType = {
  userData: Array<UserDataType>,
  sortingType: sortingTypeValues
}

export const userSlice = createSlice({
  name: 'user-reducer',
  initialState: {
    userData: [],
    sortingType: 'descending',
  } as initialStateType,
  reducers: {
    addPlayersToState: (state, action: PayloadAction<UserDataType[]>) => {
      state.userData = action.payload;
    },
    addPlayerToState: (state, action: PayloadAction<UserDataType>) => {
      state.userData.push(action.payload);
    },
    setSortingType: (state, action: PayloadAction<sortingTypeValues>) => {
      state.sortingType = action.payload;
    },
  },
});



export const {
  addPlayersToState,
  addPlayerToState,
  setSortingType } = userSlice.actions;
export default userSlice.reducer;
