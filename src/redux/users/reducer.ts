import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDataType } from '../../types';


export const userSlice = createSlice({
  name: 'user-reducer',
  initialState: {
    userData: [] as Array<UserDataType>,
  },
  reducers: {
    addPlayerToState: (state, action: PayloadAction<UserDataType>) => {
      state.userData.push(action.payload);
    },
  },
});



export const { addPlayerToState } = userSlice.actions;
export default userSlice.reducer;
