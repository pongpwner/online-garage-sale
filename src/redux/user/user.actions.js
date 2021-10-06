import USER_ACTION_TYPES from "./user.types";
export const googleSignInStart = () => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
});

export const googleSignInSuccess = (user) => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
});

export const googleSignInFailure = (error) => ({
  type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: USER_ACTION_TYPES.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentails) => ({
  type: USER_ACTION_TYPES.SIGN_UP_START,
  payload: userCredentails,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: USER_ACTION_TYPES.SIGN_UP_FAILURE,
  payload: error,
});
export const emailSignInStart = (emailPassword) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  payload: emailPassword,
});

export const emailSignInSuccess = (user) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
});
export const emailSignInFailure = (error) => ({
  type: USER_ACTION_TYPES.EMAIL_SIGN_IN_Failure,
  payload: error,
});
