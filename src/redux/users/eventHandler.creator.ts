import { UserDataType } from '../../types';
import { Dispatch } from '@reduxjs/toolkit';
import { addPlayerToState } from './reducer';

let _eventHandler: ((data: UserDataType) => void) | null = null;

export const eventHandlerCreator = (dispatch: Dispatch) => {
  if (_eventHandler === null) {
    _eventHandler = (messageUser ) => {
      console.log('success handling data');
      dispatch(addPlayerToState(messageUser));
    };
  }
  return _eventHandler;
};


