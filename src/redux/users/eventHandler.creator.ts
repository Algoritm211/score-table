import { UserDataType } from '../../types';
import { Dispatch } from '@reduxjs/toolkit';
import { addPlayerToState } from './reducer';

let _eventHandler: ((data: UserDataType) => void) | null = null;

export const eventHandlerCreator = (dispatch: Dispatch) => {
  if (_eventHandler === null) {
    _eventHandler = (messageUser ) => {
      dispatch(addPlayerToState(messageUser));
    };
  }
  return _eventHandler;
};


