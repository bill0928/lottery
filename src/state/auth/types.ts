export type Auth = {
  username: string;
  password: string;
};
export type TFA_STATUS = "none" | "challenging" | "verified";
export type ROLE = "admin" | "merchant";
export interface AuthState {
  credential?: UserInfo | AuthInfo;
  tokenLoading: boolean;
}

export type RegisterFormParams = {
  email: string;
  password: string;
  username: string;
};

export type AuthInfo = {
  id: number;
  token: string
};

export type UserInfo = Partial<AuthInfo>;

