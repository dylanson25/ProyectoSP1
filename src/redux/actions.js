export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_UID = 'SET_UID';

export const setName = name => ({
  type: SET_NAME,
  payload: name,
});
export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email,
});
export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password,
});
export const setUID = uid => ({
  type: SET_UID,
  payload: uid,
});
