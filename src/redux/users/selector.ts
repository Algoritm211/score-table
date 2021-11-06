import { RootState } from '..';
import { createSelector } from 'reselect';

export const userDataSelector = (state: RootState) => {
  return state.user.userData;
};

export const sortSelector = (state: RootState) => {
  return state.user.sortingType;
};

export const getSortedUsers = createSelector(
  userDataSelector,
  sortSelector,
  (users, sortParam) => {
    // For preventing mutating state
    const usersArr = [...users];
    // @ts-ignore
    return usersArr.sort((a, b) => {
      if (sortParam === 'ascending') {
        return a.score - b.score;
      } else if (sortParam === 'descending') {
        return b.score - a.score;
      }
    });
  },
);
