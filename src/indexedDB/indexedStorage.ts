import localforage from 'localforage';
import { UserDataType } from '../types';

/**
 * Class for working with indexedDB for caching user's data
 */
class IndexedStorage {
  private store: LocalForage

  constructor() {
    this.store = localforage.createInstance({
      name: 'users',
    });
  }

  setUsersToStorage = async (key: string, value: UserDataType) => {
    const items = await this.store.getItem(key);
    if (!items) {
      await this.store.setItem(key, [value]);
      return;
    }
    await this.store.setItem(key, [...items as UserDataType[], value]);
  }

  getUsersFromStorage = async (key: string) => {
    return this.store.getItem(key);
  }
}

export default new IndexedStorage();
