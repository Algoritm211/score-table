import { UserDataType } from '../types';
import storage from '../indexedDB/indexedStorage';

let sse: EventSource | null = null;

let subscribers = {
  'messages-consumers': [] as SubscribersType,
};

const subscribeMessages = (event: MessageEvent) => {
  const userData = JSON.parse(event.data);
  storage.setUsersToStorage('users', userData);
  subscribers['messages-consumers'].forEach(subscriber => subscriber(userData));
};


const openEventHandler = () => {
  console.log('Event listener was started');
};

const eventErrorHandler = () => {
  console.log('Event listener error');
};

const cleanUp = () => {
  sse?.removeEventListener('message', subscribeMessages);
  sse?.removeEventListener('open', openEventHandler);
  sse?.removeEventListener('error', eventErrorHandler);
};

const createChannel = () => {
  cleanUp();
  sse = new EventSource('http://localhost:5000/events');
  sse.addEventListener('open', openEventHandler);
  sse.addEventListener('error', eventErrorHandler);
  sse.addEventListener('message', subscribeMessages);
};

/**
 * An api for working with events (subscribe/unsubscribe)
 */
export const EventsAPI = {
  start() {
    createChannel();
  },

  subscribe(callbackName: keyof typeof subscribers, callback: Subscriber) {
    subscribers[callbackName].push(callback);
  },

  unsubscribe(callbackName: keyof typeof subscribers, callback: Subscriber) {
    subscribers[callbackName] = subscribers[callbackName].filter(subscriber => subscriber !== callback);
  },

  stop() {
    subscribers = { 'messages-consumers': [] };
    cleanUp();
  },
};

type Subscriber = (data: UserDataType) => void
type SubscribersType = Array<Subscriber>
