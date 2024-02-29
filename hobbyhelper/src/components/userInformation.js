import { atom, map } from 'nanostores';

export const isLoggedIn = atom(false);

/**
 * @typedef {Object} userInfo
 * @property {string} id
 * @property {string} username
 * @property {string} userType
 */

/** @type {import('nanostores').MapStore<Record<string, userInfo>>} */
export const userInfo = map({});

export function setUserInfo({ id, username, userType }) {
  userInfo.set({ id, username, userType });
  
}

export function getUserInfo() {
  return userInfo.get('userInfo');
}

export function clearUserInfo() {
  console.log('run')
  userInfo.set({});
  isLoggedIn.set(false);
}