import { RootState } from '..';

export const userDataSelector = (state: RootState) => {
  return state.user.userData;
};
