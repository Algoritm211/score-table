import { RootState } from '..';

export const userSelector = (state: RootState) => {
  return state.user.userData;
};
