import { httpApi } from '../api/api';
import { authentificateUser, GoogleProfile, UserType } from './user';

export const signup = async (
  email: string,
  password: string,
  password_confirmation: string,
) => {
  const result = await httpApi('user/signup', {
    username: email,
    password,
    password_confirmation,
  }, { auth: false, },);
  if (result.token) {
    saveAuthStorage({
      user: { email },
      token: result.token,
    })
    authentificateUser({ email });
    return {
      ok: 1,
      username: email,
    };
  } else {
    return {
      ok: 0,
      message: result.message,
    };
  }
};

export const login = async (email: string, password: string) => {
  const result = await httpApi('user/signin', {
    username: email,
    password,
  }, { auth: false, },);
  if (result.token) {
    saveAuthStorage({
      user: { email },
      token: result.token,
    })
    authentificateUser({ email });
    return {
      ok: 1,
      username: email,
    };
  } else {
    return {
      ok: 0,
      message: result.message,
    };
  }
};

export const signin = async (email: string, password: string) => {
  try {
    const result = await signup(email, password, password);
    if (result.ok) {
      return result;
    }
  } catch (e) {
    console.error(e);
  }
  return await login(email, password);
};

export type AuthType = {
  user: UserType,
  token: string
}

export function saveAuthStorage(auth: AuthType | undefined) {
  return localStorage.auth = JSON.stringify(auth);
};

export function loadAuthStorage(): AuthType | undefined {
  const auth = localStorage.auth;
  return auth ? JSON.parse(auth) : undefined;
};
export function appendGoogleProfileInfo(googleProfile: GoogleProfile) {
  const basic = loadAuthStorage()
  if (!basic) {
    throw new Error("Failed appendGoogleProfileInfo, no basic profile")
  }
  basic.user.googleProfile = googleProfile
  saveAuthStorage(basic)
  authentificateUser(basic.user)
}


export const getUserFromLocalStorage = (): UserType | undefined => {
  const auth = loadAuthStorage();
  return auth?.user;
};
