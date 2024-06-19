export type UserResponse = {
  token: string;
  user: AuthUser;
};

export type AuthUser = {
  email: string;
  _id: string;
  name: string;
};
