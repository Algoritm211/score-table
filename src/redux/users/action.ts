import { EventsAPI } from '../../api/sse.config';
import { eventHandlerCreator } from './eventHandler.creator';
import { Dispatch } from '@reduxjs/toolkit';

export const startEventsListening = () => async (dispatch: Dispatch) => {
  EventsAPI.start();
  EventsAPI.subscribe('messages-consumers', eventHandlerCreator(dispatch));
};

export const stopEventsListening = () => async (dispatch: Dispatch) => {
  EventsAPI.unsubscribe('messages-consumers', eventHandlerCreator(dispatch));
  EventsAPI.stop();
};
